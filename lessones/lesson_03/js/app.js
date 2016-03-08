(function(){

// Model
var Task = Backbone.Model.extend({
  defaults: {
    title: 'do someting!',
    completed: false
  },
  validate: function(attrs) {
    if ( _.isEmpty(attrs.title) ) {
      return 'title must not be empty!';
    }
  },
  toggle: function() {
    this.set('completed', !this.get('completed'));
  }
});

// インスタンス作成
var task1 = new Task({
  title: 'do it!',
  completed : true
});

var task2 = new Task();

/*
// インスタンス操作
task1.set('title', 'new title');
var title2 = task2.get('title');

console.log(task1.toJSON());
console.log(title2);

// toggle
console.log(task1.get('completed'));
task1.toggle();
console.log(task1.get('completed'));
*/

//validate
console.log(task1.toJSON());

task1.set({title: ''}, {validate: true});
console.log(task1.toJSON());

task1.set('title', '');
console.log(task1.toJSON());

task1.set('title', 'new title');
console.log(task1.toJSON());

task1.set({title: ''}, {validate: false});
console.log(task1.toJSON());

})();