/*
 * angular-hammer v1.0.1
 * (c) 2013 Monospaced http://monospaced.com
 * License: MIT
 */

(function(window, angular, maps){

  var module = angular.module('taxinowGoogleMaps', []);
  module.provider('tGMApiKey', function(){
    var apiKey = '651092297945';
    this.setApiKey = function(key){
      apiKey = key;
    }
    this.$get = function(){
      return apiKey;
    }
  });
  module.factory('tgmCommunicationService', ['$rootScope', function($rootScope){
    var localEvents = {
      AUTOCOMPLETE: {
        PLACE_CHANGED: 'tgmAutocompleteEvents:PLACE_CHANGED'
      },
      ITEM_ADDED: 'tgmCommunicationService:ITEM_ADDED'
    }
    var objects = {};

    return {
      Events: localEvents,
      Types: {
        MAP: 'map',
        AUTOCOMPLETE: 'autocomplete'
      },
      add: function(type, name, object) {
        if(objects[type] === undefined){
          objects[type] = {};
        }
        objects[type][name] = object;
        $rootScope.$broadcast(localEvents.ITEM_ADDED, type, name, object);
        return object;
      },
      get: function(type, name){
        return objects[type][name];
      }
    }
  }]);
  module.directive('tgmMap', ['tgmCommunicationService', function(tgmCommunicationService){
    return {
      restrict: 'EA',
      template: '<div></div>',
      replace: true,
      link: function(scope, element, attrs) {
        var mapOptions = {
          center: new google.maps.LatLng(3.139006, 101.686857),
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(element[0], mapOptions);
        if(attrs.tgmName){
          tgmCommunicationService.add(tgmCommunicationService.Types.MAP, attrs.tgmName, map);
        }
        scope[attrs.tgmName] = map;
      }
    }
  }]);
  module.factory('tmgAutocompletionService', function(){
    return {
      query: function(input, bounds){

      }
    }
  });
})(window, window.angular, window.google.maps);
