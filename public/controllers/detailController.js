var detailCtrl = angular.module('detailCtrl', [])
  .controller('detailController', function($scope, $http, $routeParams) {

    $scope.superhero = {};

    var id = $routeParams.id;
    $http.get('/superhero/' + id).
      success(function(data) {
        console.log(JSON.stringify(data));
        $scope.superhero = data;
      }).
      error(function(data) {
        console.log('Error: ' + data);
      });
  });
