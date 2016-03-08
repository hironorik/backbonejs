(function(){

// Model
var Task = Backbone.Model.extend({
  defaults: {
    title: 'do someting!',
    completed: false
  }
});

var task = new Task();

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
  },
]);

console.log(tasks.toJSON());

})();