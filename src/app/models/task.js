import Backbone from 'backbone';

var Task = Backbone.Model.extend({
  defaults: {
    "title": "a task",
    "description": "task description",
    "completed": false
  },
  logStatus: function() {
    console.log("Title: " + this.get("title"));
    console.log("Completed: " + this.get("completed"));
  }
});

export default Task;
