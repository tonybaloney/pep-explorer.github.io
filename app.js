var app = angular.module('pepExplorer', []);
app.controller('pepCtrl', function($scope, $http) {
    $http.get("index.json")
    .then(function (response) {$scope.peps = response.data.peps;});
});