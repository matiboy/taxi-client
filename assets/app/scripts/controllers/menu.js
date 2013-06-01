'use strict';

angular.module('clientApp')
  .controller('MenuCtrl', function ($scope) {
	$scope.open = false;
    $scope.toggleMenu = _.throttle(function() {
    	$scope.open = !$scope.open;
    },500, true );

    // Things that should always happen
    var fn = function(){
    	$scope.open = false;
    }
    $scope.$on('$stateChangeStart' , fn);

    $scope.$on('$destroy', function() {
    	$scope.$off(fn);
    });

    $scope.$on('$stateChangeSuccess' , function(e, state){
    	$scope.shown = !state.hideMenu;
    });
  });
