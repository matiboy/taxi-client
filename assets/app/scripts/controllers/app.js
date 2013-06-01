'use strict';

angular.module('clientApp')
  .controller('AppCtrl', ['$rootScope', '$location', 'AppStates', '$q', 'GeolocationService', function ($rootScope, $location, AppStates, $q, GeolocationService) {
    $rootScope.goTo = function(where){
    	$location.path("/"+where);
    };
    var d = $q.defer();
    AppStates.set(AppStates.Keys.COUNTRY_PROMISE, d.promise);
    // Initialize position state
    GeolocationService.getCurrentPosition(function(position){
    	var p = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    	AppStates.set(AppStates.Keys.CURRENT_POSITION, p);
    	    	
    	var geocoder = new google.maps.Geocoder();
    	geocoder.geocode({location: p}, function(a,b,c){
    		console.log(a,b,c);
    		d.resolve();
    	});
    }, function(){

    });
  }]);
