(function() {
    function ToDoService($http) {
      function getList() {
        return $http.get('/api/users/1/lists/1')
          .then(function(resp) {
            console.log('ToDoService Response Data: ', resp.data)
            return resp.data;
          });
      }

      function addTask(task, listId) {
        return $http.post('/api/lists/'+listId+'/items')
          .then(function(resp) {
            console.log('ToDoService Response Data: ', resp.data)
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
