(function() {
    function ToDoService($http, $state) {

      function getList() {
        return $http.get('/api/users/1/lists/1')
          .then(function(resp) {
            return resp.data;
          });
      }

      function addItem(item, listId) {
        var params = {
            item: item
        }

        return $http.post('/api/lists/'+listId+'/items', params)
          .then(function(resp) {
            return resp.data;
          });
      }

      function updateItem(item, listId) {
          var params = {
              item: item
          }

          return $http.put('/api/lists/'+listId+'/items/'+item.id, params)
              .then(function(resp) {
                  return resp.data;
              });
      }

      function deleteItem(item) {
          var params = {
              item: item
          }

          return $http.delete('/api/items/'+item.id, params)
              .then(function(resp) {
                  return resp.data;
              });
      }

      return {
        getList: getList,
        addItem: addItem,
        updateItem: updateItem,
        deleteItem: deleteItem
      };

    };

    angular
        .module('toDoApp')
        .factory('ToDoService', ToDoService);
})();
