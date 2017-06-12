// collections/task_list.js
// imports
import Backbone from 'backbone';
import Task from '../models/task.js';

// Create a Collection Type
var TaskList = Backbone.Collection.extend({
  model: Task,
  url: 'http://ada-tasklist-api.herokuapp.com/tasks',
  parse: function(data) {
    return data.tasks;
    // data["tasks"]
  }
});

export default TaskList;
