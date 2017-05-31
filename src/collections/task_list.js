// collections/task_list.js
// imports
import Backbone from 'backbone';
import Task from '../models/task.js';

// Create a Collection Type
var TaskList = Backbone.Collection.extend({
  model: Task
});

export default TaskList;
