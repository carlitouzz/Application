(function () {

  'use strict';

  angular.module("starter")
  .controller("findController", findController);

  findController.$inject = ["$scope", "$rootScope", "songService", "$ionicPlatform"];

  function findController ($scope,  $rootScope, songService, $ionicPlatform){
    var vm = this;

    vm.addFavorite = addFavorite;
    vm.discardSong = discardSong;
    vm.concatSongs = concatSongs;
    vm.removeFirstSong = removeFirstSong;
    vm.getSongs = getSongs;
    vm.favorites = [];
    vm.songs = [];
    vm.audio = new Audio();
    vm.playaudio = playaudio;

    function playaudio(){
      vm.audio.src = vm.songs[0].preview_url;
      vm.audio.play();
    }

    function getSongs(){
      return songService.getSongs();
    }

    $ionicPlatform.ready(start);

    function concatSongs(){
      vm.getSongs().then(function(songs){
        vm.songs = vm.songs.concat(songs);
        vm.playaudio();
      })
    }

    function start(){
      vm.concatSongs();
    }

    function discardSong(){
      vm.removeFirstSong();
      vm.playaudio();
      if(vm.songs.length<2){
        vm.concatSongs();
      }
    }

    function removeFirstSong(){
      vm.songs.splice(0,1);
    }

    function addFavorite(){
      vm.favorites.push(vm.songs[0]);
      vm.discardSong();
    }
  }
})();
