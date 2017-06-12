import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import TaskView from 'app/views/task_view';

var TaskListView = Backbone.View.extend({
  initialize: function(options) {
    // Compile a template to be shared between the individual tasks
    this.taskTemplate = _.template($('#task-template').html());

    // Keep track of the <ul> element
    this.listElement = this.$('.task-list');

    // We'll keep track of a list of task models and a list
    // of task views.
    this.cardList = [];

    this.model.forEach(function(rawTask) {
      this.addTask(rawTask);
    }, this); // bind `this` so it's available inside forEach

    // Keep track of our form input fields
    this.input = {
      title: this.$('.new-task input[name="title"]'),
      description: this.$('.new-task input[name="description"]')
    };

    // When a model is added to the collection, create
    // a card for that model and add it to our list of cards
    this.listenTo(this.model, 'add', this.addTask);

    // When a model is removed from the collection, remove
    // the card for that task from our list of cards
    this.listenTo(this.model, 'remove', this.removeTask);

    // When the model updates, re-render the list of cards
    this.listenTo(this.model, 'update', this.render);
  },

  render: function() {
    // Make sure the list in the DOM is empty
    // before we start appending items
    this.listElement.empty();

    // Loop through the data assigned to this view
    this.cardList.forEach(function(card) {
      // Cause the task to render
      card.render();

      // Add that HTML to our task list
      this.listElement.append(card.$el);
    }, this);

    return this; // enable chained calls
  },

  events: {
    'submit .new-task': 'createTask',
    'click .clear-button': 'clearInput'
  },

  createTask: function(event) {
    event.preventDefault();

    // Get the input data from the form and turn it into a task
    var rawTask = this.getInput();

    // Add the task to our collection
    this.model.create(rawTask);

    // Clear the input form so the user can add another task
    this.clearInput();
  },

  // Turn a raw task into a Task model, add it to our list of tasks,
  // create a card for it, and add that card to our list of cards.
  addTask: function(task) {
    // Create a card for the new task
    var card = new TaskView({
      model: task,
      template: this.taskTemplate
    });

    this.listenTo(card, 'edit', this.editTask);

    // Add the card to our card list
    this.cardList.push(card);
  },

  editTask: function(task) {
    console.log('in editTask for task ' + task.get('title'));

    this.setInput(task);

    task.destroy();
  },

  removeTask: function(task) {
    var filteredList = [];
    this.cardList.forEach(function(card) {
      if (card.model != task) {
        filteredList.push(card);
      }
    });
    this.cardList = filteredList;
  },

  getInput: function() {
    var task = {
      title: this.input.title.val(),
      description: this.input.description.val()
    };
    return task;
  },

  setInput: function(task) {
    this.input.title.val(task.get('title'));
    this.input.description.val(task.get('description'));
  },

  clearInput: function(event) {
    console.log("clearInput called!");
    this.input.title.val('');
    this.input.description.val('');
  }
});

export default TaskListView;
