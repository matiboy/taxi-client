// Define state
angular.module('clientApp', ['hmTouchEvents', 'ui', 'ui.state', 'taxinowGoogleMaps'])
  .config(function ($stateProvider, $routeProvider, $locationProvider ) {
    $routeProvider.when('/', {
      templateUrl: 'views/startup.html',
      controller: 'StartupCtrl'
    })
    .when('/map', {
      templateUrl: 'views/map.html',
      controller: 'MapCtrl'
    })
    .when('/tutorial', {
      templateUrl: 'views/tutorial.html',
      controller: 'TutorialCtrl'
      hideMenu: true
    })
    .when('/language', {
      templateUrl: 'views/language.html',
      controller: 'LanguageCtrl',
      title: 'Select a language',
      hideMenu: true
    })
    .when('/pickup', {
      templateUrl: 'views/pickup.html',
      controller: 'PickupCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
  });
