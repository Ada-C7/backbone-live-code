import $ from 'jquery';
import _ from 'underscore';

import Task from 'app/models/task';

// do not use before $(document).ready
var taskTemplate;

var taskData = [
  {
    title: 'Mow the lawn',
    description: 'Must be finished before BBQ on Sat afternoon',
    completed: true
  }, {
    title: 'Go to the Bank',
    description: 'Need to make a transfer'
  }, {
    title: 'Tune the Piano',
    description: 'High C is missing or something???'
  }
];

var readTaskForm = function() {
  var titleData = $('#title').val();
  $('#title').val('');

  var descriptionData = $('#description').val();
  $('#description').val('');

  var completedData = $('#completed-checkbox').prop('checked');
  $('#completed-checkbox').prop('checked', false);

  var formData = {};
  if (titleData && titleData != "") {
    formData["title"] = titleData
  }
  if (descriptionData && descriptionData != "") {
    formData["description"] = descriptionData
  }
  if (completedData && completedData != "") {
    formData["completed"] = completedData
  }
  return formData;
};

var render = function(task) {
  var jsonTask = task.toJSON();
  var generatedHTML = taskTemplate(jsonTask);

  $('.todo-items').append(generatedHTML);
};

$(document).ready(function() {
  taskTemplate = _.template($('#task-item-template').html());

  taskData.forEach(function(rawTask) {
    var task = new Task(rawTask);
    render(task);
  });

  $('#add-task').click(function(event) {
    var formData = readTaskForm();
    console.log(formData);

    var task = new Task(formData);
    render(task);
  });
});
