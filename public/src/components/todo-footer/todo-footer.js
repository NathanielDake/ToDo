var todoFooter = {
    bindings: {},
    templateUrl: 'src/components/todo-footer/todo-footer.html',
    controller: todoFooterCtrl
};

function todoFooterCtrl() {
    var $ctrl = this;

    $ctrl.testTitle = "Hello friend";
}

angular
    .module('toDoApp')
    .component('todoFooter', todoFooter);