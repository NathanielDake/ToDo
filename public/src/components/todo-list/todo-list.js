var todoList = {
    bindings: {list: '<'},
    templateUrl: 'src/components/todo-list/todo-list.html',
    controller: todoListCtrl
};

function todoListCtrl() {
    var $ctrl = this;



    console.log('todo-list.js list ',$ctrl.list)

    $ctrl.testTitle = "Hello friend";
}

angular
    .module('toDoApp')
    .component('todoList', todoList);