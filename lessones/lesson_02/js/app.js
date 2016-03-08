(function(){

// Model
var Task = Backbone.Model.extend({
  defaults: {
    title: 'do someting!',
    completed: false
  },
  toggle: function(){
    this.set('completed', !this.get('completed'));
  }
});

// インスタンス作成
var task1 = new Task({
  title: 'do it!',
  completed : true
});

var task2 = new Task();

// インスタンス操作
task1.set('title', 'new title');
var title2 = task2.get('title');

console.log(task1.toJSON());
console.log(title2);

// toggle
console.log(task1.get('completed'));
task1.toggle();
console.log(task1.get('completed'));

})();