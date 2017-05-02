(function() {
    function CurrentCtrl(ToDoService) {
        var $ctrl = this;
        console.log("current controller loaded")
        $ctrl.newItem = undefined;
        $ctrl.addTask = addTask;

        ToDoService.getList()
            .then(function(list) {
                console.log('Actual List: ', list)
                $ctrl.list = list;
            });

        function addTask() {
            ToDoService.addTask($ctrl.newItem, $ctrl.list.id)
                .then(function(task) {
                    console.log('Added Task: ', task)
                    $ctrl.list.push(task);
                });
        }


    };

    angular
        .module('toDoApp')
        .controller('CurrentCtrl', CurrentCtrl);
})();


