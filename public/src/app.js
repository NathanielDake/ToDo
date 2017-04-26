(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl',
                controllerAs: '$ctrl',
                templateUrl: '/src/views/home/home.html'
            })
            .state('completed', {
                url: '/completed',
                controller: 'CompletedCtrl',
                controllerAs: '$ctrl',
                templateUrl: '/src/views/completed/completed.html'
            })
            .state('current', {
                url: '/current',
                controller: 'CurrentCtrl',
                controllerAs: '$ctrl',
                templateUrl: '/src/views/current/current.html'
            });
    };

    angular
        .module('toDoApp', ['ui.router'])
        .config(config);
})();
