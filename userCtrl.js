angular.module('app')
  .controller('userCtrl', function($scope, mainService, $routeparams) {

  var onUserComplete = function(data) {
    $scope.user = data;
    mainService.getRepos($scope.user)
      .then(onRepos, onError);
  }

  var onRepos = function(data) {
    $scope.repos = data;
  }

  var onError = function(reason) {
    $scope.error = "Could not find user!";
  }

  $scope.username = $routeParams.username;
  $scope.repoSortOrder = "-stargazers_count";
  mainService.getUser($scope.username).then(onUserComplete, onError);

});