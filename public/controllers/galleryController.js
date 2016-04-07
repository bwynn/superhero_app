var galleryCtrl = angular.module('galleryCtrl', []).
  controller('galleryController', function($scope, $http) {

    $scope.superheroes = [];

    // retrieve all the superheroes to show the gallery
    $http.get('/superhero').
      success(function(data) {
        console.log(JSON.stringify(data));
        $scope.superheroes = data;
      }).
      error(function(data) {
        console.log("Error: " + data);
      });
  });
