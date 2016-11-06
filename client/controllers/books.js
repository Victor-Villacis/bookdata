var myApp = angular.module('myApp');
myApp.controller('BooksController', ['$scope', '$http', '$location',
    '$routeParams',
    function($scope, $http, $location, $routeParams) {
        console.log('BooksController loaded...')
        $scope.getBooks = function() {
            $http.get('/api/books').success(function(response) {
                $scope.books = response
            });
        }

        $scope.getBook = function() {
            var id = $routeParams.id;;
            $http.get('/api/books/' + id).success(function(
                response) {
                $scope.book = response;
            });
        }

        $scope.addBook = function() {
            //what do we want to post? $scope.book
            $http.post('/api/books/', $scope.book).success(function(
                response) {
                //redirect
                window.location.href = '#/books';
            });
        }
    }
]);
// testing git plus

//do not use the minify version of angular,so to avoid of it breaking in minified you need to specify it here
//scope binds the controller to the view, http aloows us to get request and post, route params allows us to get variable
