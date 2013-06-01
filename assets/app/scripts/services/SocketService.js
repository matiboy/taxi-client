'use strict';

angular.module('clientApp')
  .provider('SocketService', function () {
    var apiUrl = "",              
      localEvents = {
        SOCKET_CONNECTED: "SocketService:SOCKET_CONNECTED",
        SOCKET_DISCONNECTED: "SocketService:SOCKET_DISCONNECTED"
    };
                  
    // Config methods
    this.setSocketUrl = function(s) {
          apiUrl = s;
          return true;
    };
    var socket;
    this.$get = ['$rootScope', function() {
      return {
        connect: function() {
          socket = io.connect(apiUrl);
        },
        disconnect: function(){
          socket.disconned();
        },
        on: function (eventName, callback) {
          socket.on(eventName, function () {  
            var args = arguments;
            $rootScope.$apply(function () {
              callback.apply(socket, args);
            });
          });
        },
        emit: function (eventName, data, callback) {
          socket.emit(eventName, data, function () {
            var args = arguments;
            $rootScope.$apply(function () {
              if (callback) {
                callback.apply(socket, args);
              }
            });
          });
        }
      };
    }];
  });