'use strict';

angular.module('clientApp')
  .provider('AccountService', function () {
    // Service logic
    // ...

    var urls = {
      api: 'http://taxi-nova-web.azurewebsites.net/api/values/',
      login: 'LoginClient'
    }

    this.setUrl = function(url){
      urls.api = url;
    }

    function getUrl(k) {
      return urls.api + url[k];
    }

    this.$get = ['$rootScope', function($http){
      var localEvents = {
        LOAD_STARTED: 'AccountService:LOAD_STARTED',
        LOAD_STOPPED: 'AccountService:LOAD_STOPPED',
        LOGIN_SUCCEEDED: 'AccountService:LOGIN_SUCCEEDED',
        LOGIN_FAILED: 'AccountService:LOGIN_FAILED',
        LOGIN_ERROR: 'AccountService:LOGIN_ERROR',
        LOGOUT_SUCCEEDED: 'AccountService:LOGOUT_SUCCEEDED',
        LOGOUT_ERROR: 'AccountService:LOGOUT_ERROR'
      }

      function startLoad() {
        $rootScope.$broadcast(localEvents.LOAD_STARTED);
      }
      function stopLoad() {
        $rootScope.$broadcast(localEvents.LOAD_STOPPED);
      }
      // Public API here
      return {
        EVENTS: localEvents,
        login: function (username, password) {
          startLoad();
          $http.post(getUrl('login'),{
            email: username,
            password: password
          }).success(function(token){
            if(token){
              $rootScope.$broadcast(localEvents.LOGIN_SUCCEEDED, token);
            }else {
              $rootScope.$broadcast(localEvents.LOGIN_FAILED);
            }
            stopLoad();
          }).error(function(){
            $rootScope.$broadcast(localEvents.LOGIN_ERROR);
            stopLoad();
          });
        },
        logout: function(token){
          $http.post(getUrl('logout'),{
            token: token
          }).success(function(){
            $rootScope.$broadcast(localEvents.LOGOUT_SUCCEEDED);
          }).error(function(){
            $rootScope.$broadcast(localEvents.LOGOUT_ERROR);
          });
        }
      };
    }];
  });
