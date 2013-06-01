'use strict';

describe('Controller: StartupCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var StartupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StartupCtrl = $controller('StartupCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
