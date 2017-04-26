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
                templateUrl: 'src/views/home/home.html'
            });
    };

    angular
        .module('toDoApp', ['ui.router'])
        .config(config);
})();
