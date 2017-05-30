// ./collections/task_list.js
import Backbone from 'backbone';
import Task from '../models/task';

var TaskList = Backbone.Collection.extend({
  model: Task
});

export default TaskList;
