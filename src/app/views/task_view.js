import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Task from '../models/task.js';

var TaskView = Backbone.View.extend({
  tagName: 'li',
  className: "task-item column column-block",
  initialize: function(params) {
    this.template = params.template;
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  }
});

export default TaskView;
































// var TaskView = Backbone.View.extend({
//   tagName: 'li',
//   className: "task-item column column-block",
//   initialize: function(params) {
//     this.template = params.template;
//   },
//   render: function() {
//     var compiledTemplate = this.template(this.model.toJSON());
//     this.$el.html(compiledTemplate);
//     return this;
//   },
//   events: {
//     'click button.alert': "deleteTask",
//     "click button.success": "toggleComplete"
//   },
//   deleteTask: function(e) {
//     this.model.destroy();
//   },
//   toggleComplete: function(e) {
//     this.model.toggleComplete();
//     this.render();
//   }
// });
