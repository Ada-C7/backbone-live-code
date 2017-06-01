import $ from 'jquery';
import _ from 'underscore';

import Task from 'app/models/task';
import TaskList from './app/collections/task_list';

import TaskView from './app/views/task_view.js';
import TaskListView from './app/views/task_list_view.js';

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




$(document).ready(function() {
  taskTemplate = _.template($('#task-item-template').html());
  taskList = new TaskList(taskData);

  var taskListView = new TaskListView({
    taskTemplate: taskTemplate,
    model: taskList,
    el: $('main')
  });

  taskListView.render();



  // taskList.on("update", function() {
  //   renderList(taskList);
  // });
  //
  //
  // renderList(taskList);



});
