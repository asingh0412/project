var weatherApp = angular.module('weatherApp', []);

weatherApp.controller('weatherCtrl', function($scope,$http){
  $scope.$watch('search', function(){
    fetch();
  });
  $scope.search = "inception";

  function fetch(){
    $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&apikey=5cef1a9d")
    .then(function(response){
      $scope.details = response.data;
    });



    $http.get("http://www.omdbapi.com/?s=" + $scope.search + "&apikey=5cef1a9d")
    .then(function(response){
      $scope.related = response.data;
      console.log(response.data);
    });

  }


  $scope.update = function(movie){
  $scope.search = movie.Title;
  };
  $scope.select = function(){
  this.setSelectionRange(0, this.value.length);
}
});
