var todoForm = {
    bindings: {},
    templateUrl: 'src/components/todo-form/todo-form.html',
    controller: todoFormCtrl
};

function todoFormCtrl() {

}

angular
    .module('toDoApp')
    .component('todoForm', todoForm);

