'use strict';

angular.module('clientApp')
  .controller('HeaderCtrl', ['$scope', '$route', '$state', function ($scope, $route, $state) {
  	$scope.$on('$stateChangeSuccess', function(e, state){
  		$scope.title = state.title;
  	});
  }]);

