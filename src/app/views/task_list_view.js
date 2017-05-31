import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import TaskView from './task_view';

var TaskListView = Backbone.View.extend({
  initialize: function(params) {
    this.taskTemplate = params.taskTemplate;
  },

  render: function() {
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
  }

});

export default TaskListView;
