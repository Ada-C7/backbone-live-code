// app/collections/task_list.js
import Backbone from 'backbone';

import Task from 'app/models/task';

var TaskList = Backbone.Collection.extend({
  model: Task,
  url: 'http://ada-tasklist-api.herokuapp.com/tasks',

  parse: function(data) {
    return data.tasks;
  }
});

export default TaskList;
