(function() {
    function config($stateProvider, $locationProvider) {
        // $locationProvider
        //     .html5Mode({
        //         enabled: true,
        //         requireBase: false
        //     });

        $stateProvider
            .state('todo', {
                abstract: true,
                url: '/',
                component: 'todo',
                template: '<todo></todo>'
            })
            .state('todo.all', {
                url: '',
                component: 'todo',
                resolve: {
                    filter: function () {
                        return 'all'
                    }
                }
            })
            .state('todo.active', {
                url: 'active',
                component: 'todo',
                resolve: {
                    filter: function () {
                        return 'active'
                    }
                }
            })
            .state('todo.completed', {
                url: 'completed',
                component: 'todo',
                resolve: {
                    filter: function () {
                        return 'completed'
                    }
                }
            });

    };

    angular
        .module('toDoApp', ['ui.router'])
        .config(config);
})();
