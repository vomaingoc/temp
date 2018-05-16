var app = angular.module("myApp", ["ngRoute"]);
// app.config(function($routeProvider) {
//     $routeProvider
//     .when("/", {
//         templateUrl : 'views/home.html',
//         controller  : 'mainController',
//         title : 'Home',
//     })
//     .when("/:cateId", {
//         templateUrl : 'views/lesson.html',
//         controller  : 'lessonController',
//         title : 'Lesson',
//     })
//     .when("/:cateId/:lessonId", {
//         templateUrl : 'views/part.html',
//         controller  : 'partController',
//         title : 'Part',
//     })
//     .when("/:cateId/:lessonId/:partId", {
//         templateUrl : 'views/partdetail.html',
//         controller  : 'partDetailController',
//         title : 'Detail',
//     })
//     .otherwise({
//         redirectTo: "/home"
//     })
//     ;
// });
// app.run(['$rootScope', '$route', function($rootScope, $route) {
//     $rootScope.$on('$routeChangeSuccess', function() {
//         document.title = $route.current.title;
//     });
// }]);
// app.controller("menuController",['$scope', '$routeParams','$location', '$rootScope', function($scope, $routeParams,$location, $rootScope) {
//     $scope.navClass = function (page) {
//         var currentRoute = $location.path().substring(1);
//         return page === currentRoute ? 'active' : '';
//     };
// }]);
app.controller('mainController', function ($scope, $location) {

});
app.controller('menuController', function ($scope, $location) {
    $scope.isCollapsed = true;
    $scope.$on('$routeChangeSuccess', function () {
        $scope.isCollapsed = true;
    });
});
