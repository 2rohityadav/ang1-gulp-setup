angular.module('helloApp')
  .controller('HomeCtrl', [
    '$scope',
    function($scope) {
      console.log('Loaded.');
      $scope.message = 'Hello World Test';
    }
  ]);
