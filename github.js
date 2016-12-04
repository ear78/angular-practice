angular.module('app')
  .service('mainService', function($http){
  
  this.getUser = function(username){
    return $http.get("https://api.github.com/users/" + username)
                .then(function(response){
                  return response.data;
                })
  }
  
  this.getRepos = function(user){
    return $http.get(user.repos_url)
                .then(function(response){
                  return response.data;
                });
  };
  
  
})