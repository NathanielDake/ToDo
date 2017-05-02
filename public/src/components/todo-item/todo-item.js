var todoItem = {
    bindings: {
        description: '<'
    },
    templateUrl: 'src/components/todo-item/todo-item.html',
    controller: todoItemCtrl
};

function todoItemCtrl() {
    var $ctrl = this;
    console.log("to do item controller loaded");

    $ctrl.testTitle = "Hello friend";
}

angular
    .module('toDoApp')
    .component('todoItem', todoItem);