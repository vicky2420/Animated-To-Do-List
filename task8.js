angular.module('todoApp', [])
    .controller('TodoController', function () {
        var todoCtrl = this;

        todoCtrl.tasks = [];
        todoCtrl.newTask = '';

        todoCtrl.addTask = function () {
            if (todoCtrl.newTask) {
                todoCtrl.tasks.push(todoCtrl.newTask);
                todoCtrl.newTask = '';
            }
        };

        todoCtrl.removeTask = function (index) {
            todoCtrl.tasks.splice(index, 1);
        };
    });
