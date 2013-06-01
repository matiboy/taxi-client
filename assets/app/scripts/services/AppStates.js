'use strict';

angular.module('clientApp')
  .factory('AppStates', function () {
    var states = {
      'AppStates:LANGUAGE': 'english'
    };
    var keys = {
      CURRENT_POSITION: 'AppStates:CURRENT_POSITION',
      COUNTRY_PROMISE: 'AppStates:COUNTRY_PROMISE',
      LANGUAGE: 'AppStates:LANGUAGE'
    }
    return {
      Keys: keys,
      set: function(key, state) {
        states[key] = state;
      },
      get: function(key) {
        return states[key];
      }
    }
  });
