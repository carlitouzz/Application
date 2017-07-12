(function () {

  'use strict';

  angular.module("starter")
  .controller("findController", findController);

  findController.$inject = ["$scope",  "findService", "$rootScope"];

  function findController ($scope, findService, $rootScope){
    var vm = this;
    vm.songs = findService.getSongs();
    vm.addFavorite = addFavorite;
    vm.discardSong = discardSong;

    function discardSong(){
      vm.songs.splice(0,1);
      //console.log(vm.songs.length);
    }
    function addFavorite(){
      $rootScope.favorites.push(vm.songs[0]);
      vm.songs.splice(0,1);
      //console.log($rootScope.favorites.length);
    }

  }

})();
