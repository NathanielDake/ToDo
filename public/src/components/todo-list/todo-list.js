var todoList = {
    bindings: {
        list: '<'
    },
    templateUrl: 'src/components/todo-list/todo-list.html',
    controller: todoListCtrl
};

function todoListCtrl() {
    var $ctrl = this;


}

angular
    .module('toDoApp')
    .component('todoList', todoList);