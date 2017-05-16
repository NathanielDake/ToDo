var todoItem = {
    bindings: {
        todo: '<',
        list: '='
    },
    templateUrl: 'src/components/todo-item/todo-item.html',
    controller: todoItemCtrl
};

function todoItemCtrl(ToDoService, $state) {

    var $ctrl = this;

    $ctrl.list = undefined;

    $ctrl.updateTodo = function() {
       ToDoService.updateItem($ctrl.todo, 1);
        ToDoService.getList()
            .then(function(list) {
                list = list.items;
                if ($state.current.name === 'todo.all') {
                    $ctrl.list = list;
                } else if ($state.current.name === 'todo.active') {
                    $ctrl.list = list.filter(function(todo) {
                        return todo.completed === false;
                    });
                } else if ($state.current.name === 'todo.completed') {
                    $ctrl.list = list.filter(function(todo) {
                        return todo.completed === true;
                    });
                }
            });
    }

    $ctrl.deleteTodo = function() {
        ToDoService.deleteItem($ctrl.todo)
            .then(function(item) {
                $ctrl.list.forEach(function(todo, index) {
                    if (todo.id === item.id) {
                        $ctrl.list.splice(index,1);
                    }
                });
            });
    }

}
angular
    .module('toDoApp')
    .component('todoItem', todoItem);