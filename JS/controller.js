var app = angular.module('mainApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'login.html'
        })
        .when('/dashboard', {
            resolve: {
                "check": function ($location, $rootScope) {
                    if (!$rootScope.loggedIn) {
                        $location.path('/');
                    }
                }
            },
            templateUrl: 'dashboard.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('loginCTRL', function ($scope, $location, $rootScope) {
    $scope.submit = function () {
        //       $rootscope.thisname = "afsa"; //anything with this rootescope remains accessible throughout the page in any controller.
//        $rootscope.uname = $scope.username;
//        $rootscope.pass = $scope.password;

        if ($scope.username === 'admin' && $scope.password === 'admin') {
            $rootScope.loggedIn = true;
            $location.path('/dashboard');
        } else {
            alert('Wrong Entry');
        }
    };
});
