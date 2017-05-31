import $ from 'jquery';
import _ from 'underscore';

import Task from 'app/models/task';
import TaskList from './app/collections/task_list';

import TaskView from './app/views/task_view.js';

// do not use before $(document).ready
var taskTemplate;
var taskList;

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
  },
  {
    title: 'Learn Backbone',
    description: "It's great."
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

// var render = function(task) {
//   var jsonTask = task.toJSON();
//   var generatedHTML = $(taskTemplate(jsonTask));
//
//   $('.todo-items').append(generatedHTML);
//
//   generatedHTML.find("button.alert").click({task: task}, function(params) {
//     taskList.remove(params.data.task);
//   });
// };


var renderList = function(taskList) {
  // Clear the unordered list
  $('.todo-items').empty();

  taskList.each(function(task) {

    // Create a new TaskView with the model & template
    var taskView = new TaskView({
      model: task,
      template: _.template($('#task-item-template').html())
    });

    // Then render the TaskView
    // And append the resulting HTML to the DOM.
    $('.todo-items').append(taskView.render().$el);
  });
};

$(document).ready(function() {
  taskTemplate = _.template($('#task-item-template').html());
  taskList = new TaskList(taskData);

  taskList.on("update", function() {
    renderList(taskList);
  });


  renderList(taskList);


  $('#add-task').click(function(event) {
    var formData = readTaskForm();

    var task = new Task(formData);
    taskList.add(task);
  });
});
