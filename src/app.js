import $ from 'jquery';
import _ from 'underscore';
import Task from './models/task.js';


var taskData = [
  {
    title: 'Mow the lawn',
    description: 'Must be finished before BBQ on Sat afternoon'
  }, {
    title: 'Go to the Bank',
    description: 'Need to make a transfer'
  }, {
    title: 'Tune the Piano',
    description: 'High C is missing or something???'
  }
];

var myTask = new Task({
  title: "Create a Model!",
  description: "Need to extend Backbone.Model",
  completed: false
});

$(document).ready(function() {
  console.log(myTask);
});




// end
