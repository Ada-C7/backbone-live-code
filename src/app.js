import $ from 'jquery';
import _ from 'underscore';
import Task from './models/task.js';
import TaskList from './collections/task_list.js';

var taskData = [
  {
    title: 'Mow the lawn',
    description: 'Must be finished before BBQ on Sat afternoon',
    completed: false
  }, {
    title: 'Go to the Bank',
    description: 'Need to make a transfer',
    completed: false

  }, {
    title: 'Tune the Piano',
    description: 'High C is missing or something???',
    completed: true
  }
];

var myTaskList = new TaskList(taskData);

var individualTaskData = {
  title: "Create a Model!",
  description: "Need to extend Backbone.Model",
  completed: false
};
var myTask = new Task(individualTaskData);

var getFormData = function() {
  var formTitle = $("#title").val();
  $("#title").val('');

  var formDescription = $("#description").val();
  $("#description").val('');

  // Get Checkbox Checked
  var formCompleted = $('#completed-checkbox').is(":checked");
  // Clear Checkbox
  $('#completed-checkbox').prop('checked', false);

  return {
    title: formTitle,
    description: formDescription,
    completed: formCompleted
  };
};

var render = function(task) {
  // Get the Template using jQuery
  var templateText = $('#taskItemTemplate').html();

  // Create an Underscore Template Object
  var templateObject = _.template(templateText);

  // Fill in the ERB with data from
  // our task.
  console.log(templateObject(task.toJSON()));
  var compiledHTML = $(templateObject(task.toJSON()));

  // Append the result to the DOM
  $('.todo-items').append(compiledHTML);

  compiledHTML.find('button.alert').click({taskToRemove: task}, function(params){
    myTaskList.remove(params.data.taskToRemove);
  });

};
var myOtherTask = new Task({
  title: "Make another Task",
  completed: true
});

var renderList = function(taskList) {
  // Clear the list
  $(".todo-items").empty();

  // Loop Through rendering each task
  taskList.each(function(task) {
    render(task);
  });
};

$(document).ready(function() {
  renderList(myTaskList);

  myTaskList.on("update", function() {
    renderList(myTaskList);
  });

  $("#add-task").click(function() {
    // Creating a new Task
    // With the form data
    var task = new Task(getFormData());

    // Add it to the list
    myTaskList.add(task);

    // re-render the list
    // renderList(myTaskList);
  });

});










// end

// console.log(myTask);
// console.log(
//     myTask.get("title")
// );
//
// myTask.set("completed", true);
//
// myTask.set({
//   title: "This is Backbone!",
//   description: "Great!"
// });
//
// console.log("Completed?  " + myTask.get("completed"));
// console.log(myTask);
