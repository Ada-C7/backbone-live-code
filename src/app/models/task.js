// src/app/models/task.js
import Backbone from 'backbone';

var Task = Backbone.Model.extend({
  defaults: {
    title: "Unknown Task",
    description: "placeholder description",
    complete: false
  },
  initialize: function(options) {
    console.log("Created new task with options " + this.options);
  },
  toggleComplete: function() {
    var newStatus = !(this.get('complete'));
    this.set('complete', newStatus);
    this.save();
  }
});

export default Task;
