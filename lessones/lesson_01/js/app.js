(function(){

// Model
var Task = Backbone.Model.extend({
  defaults : {
    title: 'do someting!',
    completed: false
  }
});

var task1 = new Task({
  title: 'do it!',
  completed : true
});

var task2 = new Task();

console.log(task1.toJSON());
console.log(task2.toJSON());

})();