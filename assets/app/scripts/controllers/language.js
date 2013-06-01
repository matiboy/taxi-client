'use strict';

angular.module('clientApp')
  .controller('LanguageCtrl', ['$scope', 'PreferencesService', function ($scope, PreferencesService) {
    $scope.saveLanguage = function(which) {
    	PreferencesService.set(PreferencesService.Keys.LANGUAGE, which);
    	$scope.goTo('tutorial');
    }
  }]);
