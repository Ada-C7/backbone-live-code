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
  var compiledHTML = templateObject(task.toJSON());

  // Append the result to the DOM
  $('.todo-items').append(compiledHTML);

};
var myOtherTask = new Task({
  title: "Make another Task",
  completed: true
});

$(document).ready(function() {
  render(myTask);
  render(myOtherTask);

  $("#add-task").click(function() {
    var formData = getFormData();
    var newTask = new Task(formData);
    render(newTask);
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
