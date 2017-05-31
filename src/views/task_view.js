// task_view.js

import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Task from '../models/task.js';

var TaskView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

    this.$el.addClass("task-item column column-block");

    this.listenTo(this.model, "change", this.render);
  },
  render: function() {

    var compiledTemplate = this.template(this.model.toJSON());

    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    'click button.alert': "deleteTask",
    "click button.success": "toggleComplete"
  },
  deleteTask: function() {
    this.model.destroy();
  },
  toggleComplete: function() {
    this.model.toggleComplete();
  }
});


export default TaskView;







//
