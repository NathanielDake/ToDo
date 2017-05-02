var todo = {
    bindings: {filter: '<'},
    templateUrl: 'src/components/containers/todo/todo.html',
    controller: todoCtrl
};

function todoCtrl(ToDoService) {
    var $ctrl = this;
    var test = undefined;

    ToDoService.getList()
        .then(function(list) {
            $ctrl.list = list.items;
            test = list.items;
            console.log('todo.js ctrl.todolist inside service ', $ctrl.list)
        });

    console.log('todo.js $ctrl.todolist outside service', $ctrl.list, test)

    $ctrl.testTitle = "Hello friend";
}

angular
    .module('toDoApp')
    .component('todo', todo);