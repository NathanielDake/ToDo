var todo = {
    bindings: {filter: '<'},
    templateUrl: 'src/components/containers/todo/todo.html',
    controller: todoCtrl
};

function todoCtrl(ToDoService) {
    var $ctrl = this;
    $ctrl.todoList = undefined;

    ToDoService.getList()
        .then(function(list) {
            console.log('Actual list: ', list)
            $ctrl.list = list;
            console.log('todo.js ctrl.todolist', $ctrl.list)
        });

    console.log('todo.js global $ctrl.todolist', $ctrl.list)

    $ctrl.testTitle = "Hello friend";
}

angular
    .module('toDoApp')
    .component('todo', todo);