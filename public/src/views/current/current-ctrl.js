(function() {
    function CurrentCtrl(ToDoService) {
        var $ctrl = this;

        console.log('current control load');


    };

    angular
        .module('toDoApp')
        .controller('CurrentCtrl', CurrentCtrl);
})();


