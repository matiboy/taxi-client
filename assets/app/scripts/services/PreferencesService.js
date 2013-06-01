'use strict';

angular.module('clientApp')
  .factory('PreferencesService', function () {
    var keys = {
      SKIPTUTORIAL: 'skipTutorial',
      FIRSTTIME: 'notFirstTime',
      NOTIFICATIONS: 'notifications',
      LOCALIZATION: 'localization',
      LANGUAGE: 'language'
    };
    return {
      Keys: keys,
      get: function(key) {
        return localStorage.getItem(key);
      },
      set: function(key, value) {
        localStorage.setItem(key, value);
      },
      remove: function(key) {
        localStorage.removeItem(key);
      },
      isFirstTime: function(){
        var v = this.get(keys.FIRSTTIME);
        this.set(keys.FIRSTTIME, "1");
        return v != "1";
      },
      skipTutorial: function(v) {
        if(v){
          this.set(keys.SKIPTUTORIAL, v);
        }
        return this.get(keys.SKIPTUTORIAL);
      }
    };
  });
