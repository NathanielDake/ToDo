var todo = {
    bindings: {filter: '<'},
    templateUrl: 'src/components/containers/todo/todo.html',
    controller: todoCtrl
};

function todoCtrl(ToDoService) {
    var $ctrl = this;

    $ctrl.list = undefined;

    ToDoService.getList()
        .then(function(list) {
            $ctrl.list = list;
        });
}

angular
    .module('toDoApp')
    .component('todo', todo);