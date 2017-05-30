import $ from 'jquery';
import _ from 'underscore';

import Task from 'app/models/task';

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

var myTask = new Task(taskData[0]);

$(document).ready(function() {
  console.log("Title: " + myTask.get("title"));
  console.log("Description: " + myTask.get("description"));
  console.log(myTask.get("doesNotExist"));
});
