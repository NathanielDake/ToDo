(function() {
    function CompletedCtrl(ToDoService) {

        console.log('completed control load');

    };

    angular
        .module('toDoApp')
        .controller('CompletedCtrl', CompletedCtrl);
})();