import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import TaskView from './task_view.js';
import Task from '../models/task.js';

var TaskListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

    this.listenTo(this.model, "update", this.render);

//    console.log(this.el);
  },
  render: function() {
      // Clear the todo-items
    this.$('.todo-items').empty();
      // Saved a reference to 'this'
    var that = this;

      // Looped through the collection
    this.model.each(function(task) {
        // Created a new view for each task
      var taskView = new TaskView({
        model: task,
        template: that.template,
        tagName: 'li'
      });
        // rendered the view and appended it to 'todo-items'
      that.$(".todo-items").append(taskView.render().$el);
    });

    return this;
  },
  events: {
    "click #add-task" : "addTask"
  },
  getFormData: function() {
    var formTitle = this.$("#title").val();
    this.$("#title").val('');

    var formDescription = this.$("#description").val();
    this.$("#description").val('');

    // Get Checkbox Checked
    var formCompleted = this.$('#completed-checkbox').is(":checked");
    // Clear Checkbox
    this.$('#completed-checkbox').prop('checked', false);

    return {
      title: formTitle,
      description: formDescription,
      completed: formCompleted
    };
  },
  addTask: function() {
    var task = new Task(this.getFormData());

    this.model.add(task);

  }
});


export default TaskListView;
