'use strict';

angular.module('clientApp')
  .factory('GeolocationService', ['$rootScope', 'cordovaReady', function ($rootScope, cordovaReady) {
    var watchID;
    return {
      getCurrentPosition: cordovaReady(function (onSuccess, onError, options) {
        navigator.geolocation.getCurrentPosition(function () {
          var that = this,
            args = arguments;

          if (onSuccess) {
            $rootScope.$apply(function () {
              onSuccess.apply(that, args);
            });
          }
        }, function () {
          var that = this,
            args = arguments;

          if (onError) {
            $rootScope.$apply(function () {
              onError.apply(that, args);
            });
          }
        },
        options);
      }),
      watchPosition: cordovaReady(function (onSuccess, onError, options) {
        watchID = navigator.geolocation.watchPosition(function () {
          var that = this,
            args = arguments;

          if (onSuccess) {
            $rootScope.$apply(function () {
              onSuccess.apply(that, args);
            });
          }
        }, function () {
          var that = this,
            args = arguments;

          if (onError) {
            $rootScope.$apply(function () {
              onError.apply(that, args);
            });
          }
        },
        options);
      }),
      clearWatch: function(id){
        navigator.geolocation.clearWatch(id);
      }
    };
  }]);
