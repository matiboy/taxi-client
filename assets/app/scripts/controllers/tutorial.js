'use strict';

angular.module('clientApp')
  .controller('TutorialCtrl', ['$scope', function ($scope) {
	$scope.step = 1;
	$scope.toStep = function(which){
		$scope.step = which;
	}


	$scope.skipTutorial = function() {
		$scope.goTo('map');
	}
  }]);
