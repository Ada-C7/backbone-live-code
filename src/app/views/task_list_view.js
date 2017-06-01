import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import TaskView from './task_view';
// import Task from '../models/task';

var TaskListView = Backbone.View.extend({
  initialize: function(params) {
    this.taskTemplate = params.taskTemplate;

    this.listenTo(this.model, "update", this.render);
  },

  render: function() {
    console.log("Inside TLV.render()");
    var self = this;

    // Clear out any existing items (incase render
    // is called multiple times)
    self.$('.todo-items').empty();

    self.model.each(function(task) {

      // Create a new TaskView with the model & template
      var taskView = new TaskView({
        model: task,
        template: self.taskTemplate
      });

      // Then render the TaskView
      // And append the resulting HTML to the DOM.
      self.$('.todo-items').append(taskView.render().$el);

      // equivalent to
      // self.$el.find('.todo-items').whatever
    });

    // Rules of backbone: always return `this` from `render()`
    return this;
  },

  events: {
    'click #add-task': 'addTask'
  },

  addTask: function(event) {
    var formData = this.readTaskForm();

    console.log("In add task, form data:");
    console.log(formData);

    // Create a task from the form data and add it to the collection
    // var task = new Task(formData);
    // this.model.add(task);

    // Can just pass the form data directly, because
    // the collection knows what its model is
    this.model.add(formData);
  },

  readTaskForm: function() {
    var titleData = this.$('#title').val();
    this.$('#title').val('');

    var descriptionData = this.$('#description').val();
    this.$('#description').val('');

    var completedData = this.$('#completed-checkbox').prop('checked');
    this.$('#completed-checkbox').prop('checked', false);

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
  }

});

export default TaskListView;
