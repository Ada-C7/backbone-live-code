// models/task.js

import Backbone from 'backbone';

var Task = Backbone.Model.extend({
  defaults: {
    title: 'DEFAULT',
    complete: false
  },
  logStatus: function() {
    console.log("Model " + this.cid);
    console.log("Title: " +   this.get("title"));
    console.log("Completed: " + this.get("complete"));
  },
  initialize: function(params) {
    console.log("Starting", params);
    this.logStatus();
  },
  toggleComplete: function() {
    var complete = this.get("complete");
    this.set("complete", !complete);
    this.save();
  }
});









export default Task;
