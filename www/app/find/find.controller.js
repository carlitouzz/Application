(function () {

  'use strict';

  angular.module("starter")
  .controller("findController", findController);

  findController.$inject = ["$scope", "findService"];

  function findController ($scope, findService){
    var vm = this;
    vm.songs = findService.getSongs();
  }

})();
