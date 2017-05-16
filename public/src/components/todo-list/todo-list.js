var todoList = {
    bindings: {
        list: '='
    },
    templateUrl: 'src/components/todo-list/todo-list.html',
    controller: todoListCtrl
};

function todoListCtrl() {

    var $ctrl = this;

    $ctrl.list = null;
}

angular
    .module('toDoApp')
    .component('todoList', todoList);