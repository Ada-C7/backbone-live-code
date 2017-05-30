import Backbone from 'backbone';

var Task = Backbone.Model.extend({
  defaults: {
    "title": "a task",
    "description": "task description",
    "completed": false
  }
});

export default Task;
