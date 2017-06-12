import $ from 'jquery';
import _ from 'underscore';
import Task from './models/task.js';
import TaskList from './collections/task_list.js';
import TaskView from './views/task_view.js';
import TaskListView from './views/task_list_view.js';


// var taskData = [
//   {
//     title: 'Mow the lawn',
//     description: 'Must be finished before BBQ on Sat afternoon',
//   }, {
//     title: 'Go to the Bank',
//     description: 'Need to make a transfer',
//
//   }, {
//     title: 'Tune the Piano',
//     description: 'High C is missing or something???',
//     completed: true
//   }
// ];

var myTaskList = new TaskList();
myTaskList.fetch();

console.log(">>> Breadcrumbs #1 (Task list collection creation)");

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



$(document).ready(function() {
  var myTaskListView = new TaskListView({
    model: myTaskList,
    template: _.template($('#taskItemTemplate').html()),
    el: 'main'
  });
  myTaskListView.render();
});
