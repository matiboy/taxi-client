'use strict';

angular.module('clientApp')
  .controller('StartupCtrl', ['$scope', 'PreferencesService', '$state', function ($scope, PreferencesService, $state) {
    if(PreferencesService.isFirstTime()){
    	$scope.goTo('language');
    }else{
        $scope.goTo('map');
    }
  }]);
