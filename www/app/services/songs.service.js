(function(){
  'use strict';

  angular.module('starter')
  .service('songService', songService);

  songService.$inject = ['$http','API'];

  function songService($http, API){
    var service = {
      getSongs: getSongs
    }
    return service;

    function getSongs(){
      return $http({
        "method": "GET",
        "url": API.url+"/recommendations"
      }).then(function(response){
        return response.data;
      }).catch(function(error){
        console.log("Error");
      })
    }
  }

})();
