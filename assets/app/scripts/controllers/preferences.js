'use strict';

angular.module('clientApp')
  .controller('PreferencesCtrl', ['$scope', 'PreferencesService', function ($scope, PreferencesService) {
  	$scope.sendNotifications = true;
  	$scope.useLocalization = true;
    $scope.continue = function(){
    	PreferencesService.set( PreferencesService.KEYS.NOTIFICATIONS, $scope.sendNotifications);
    	PreferencesService.set( PreferencesService.KEYS.LOCALIZATION, $scope.useLocalization);
    }
  }]);
