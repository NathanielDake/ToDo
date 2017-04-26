(function() {
    function HomeCtrl(ToDoService) {
      var $ctrl = this;
      
      ToDoService.getList()
        .then(function(list) {
          $ctrl.list = list;
        });

      $ctrl.title = "Hello World";
    };

    angular
        .module('toDoApp')
        .controller('HomeCtrl', HomeCtrl);
})();
