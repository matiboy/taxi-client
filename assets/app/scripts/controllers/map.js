'use strict';

angular.module('clientApp')
  .controller('MapCtrl', ['$scope', 'GeolocationService', 'tgmCommunicationService', '$q', 'AppStates', function ($scope, GeolocationService, tgmCommunicationService, $q, AppStates) {
  	var map,
  		autocompleteService = new google.maps.places.AutocompleteService(),
  		mapDeferred = $q.defer(),
  		country = AppStates.get(AppStates.Keys.COUNTRY_PROMISE);
  	$scope.coordinates = {
  		latitude: 0,
  		longitude: 0
  	};
  	$scope.results = [];

  	var position = AppStates.get(AppStates.Keys.CURRENT_POSITION);

  	$scope.query = "";

    GeolocationService.getCurrentPosition(function (position) {
    	$scope.coordinates = position.coords;
    	$scope.asOf = position.timestamp;
  	}, function(err){
  		$scope.error = err.message;
  	},{enableHighAccuracy: true});
    // var map = tgmCommunicationService.get(tgmCommunicationService.Types.MAP, "");
    $scope.$on(tgmCommunicationService.Events.ITEM_ADDED, function(e,type, name, obj){
    	if(type == tgmCommunicationService.Types.MAP && name == 'map'){
    		map = obj;
			mapDeferred.resolve();
		}
    });

    // This will ensure that the map is created
    $q.all([mapDeferred.promise, country]).then(function(res){
    	console.log(res);
    	$scope.$watch('query', _.debounce(function(nv, ov){
	    	if(nv){
	    		autocompleteService.getQueryPredictions({
	    			input: nv,
	    			bounds: map.getBounds(),
	    			types: ['establishment', 'geocode']
	    		}, function(results){
	    			$scope.results = results;
	    			try{
	    				$scope.$digest();	
	    			} catch(e){}
	    		});
	    	}
	    },400));
    })
  }]);