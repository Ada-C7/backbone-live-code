import $ from 'jquery';

import TaskList from 'app/collections/task_list';
import TaskListView from 'app/views/task_list_view';


$(document).ready(function() {
  var taskList = new TaskList();
  taskList.fetch();
  
  var options = {
    el: $('#application'),
    model: taskList
  };
  var application = new TaskListView(options);
  application.render();
});
