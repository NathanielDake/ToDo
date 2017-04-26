(function() {
    function ToDoService($http) {
      function getList() {
        return $http.get('/api/users/1/lists/1')
          .then(function(resp) {
            return resp.data;
          });
      }

      return {
        getList: getList
      };

    };

    angular
        .module('toDoApp')
        .factory('ToDoService', ToDoService);
})();
