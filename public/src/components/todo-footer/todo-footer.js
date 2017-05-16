var todoFooter = {
    bindings: {list: '=', testFooter: '&?'},
    templateUrl: 'src/components/todo-footer/todo-footer.html',
    controller: todoFooterCtrl
};

function todoFooterCtrl(ToDoService, $state) {
    var $ctrl = this;

    $ctrl.list = undefined;

    $ctrl.state = $state.current.name;

    $ctrl.changeState = function () {
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
}

angular
    .module('toDoApp')
    .component('todoFooter', todoFooter);