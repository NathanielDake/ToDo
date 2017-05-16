var todoForm = {
    bindings: {
        list: '='
    },
    templateUrl: 'src/components/todo-form/todo-form.html',
    controller: todoFormCtrl
};

function todoFormCtrl(ToDoService) {
    var $ctrl = this;

    $ctrl.list = null;

    $ctrl.newTodo = {description: null};

    $ctrl.submitNewTodo = function (){
        ToDoService.addItem($ctrl.newTodo, $ctrl.list.id)
            .then(function(item) {
                $ctrl.newTodo = {description: null};
                $ctrl.list.items.push(item);
            });
    }
}
angular
    .module('toDoApp')
    .component('todoForm', todoForm);

