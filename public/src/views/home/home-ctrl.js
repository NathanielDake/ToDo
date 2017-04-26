(function() {
    function HomeCtrl(ToDoService) {
        var $ctrl = this;
      ToDoService.getList()
        .then(function(list) {
          $ctrl.list = list;
        });

      $ctrl.title = "Your go to To Do app";
    };

    angular
        .module('toDoApp')
        .controller('HomeCtrl', HomeCtrl);
})();
