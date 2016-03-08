(function(){

// Model
var Task = Backbone.Model.extend({
  defaults: {
    title: 'do someting!',
    completed: false
  }
});

// View
var TaskView = Backbone.View.extend({
  tagName: 'li',
  template: _.template( $('#template-task').html() ),
  render: function() {
    var template = this.template( this.model.toJSON() );
    this.$el.html(template);
    return this;
  }
});

// Collection
var Tasks = Backbone.Collection.extend({
  model: Task
});

// View for Collection
var TasksView = Backbone.View.extend({
  tagName: 'ul',
  render: function() {
    this.collection.each(function(task){
      var taskView = new TaskView({model: task});
      this.$el.append(taskView.render().el);
    }, this);
    return this;
  }
});

var tasks = new Tasks([
  {
    title: 'task1',
    completed: true
  },
  {
    title: 'task2',
  },
  {
    title: 'task3',
  }
]);

var tasksView = new TasksView({collection: tasks});
$('#tasks').html(tasksView.render().el);

})();