'use strict';

describe('Service: PreferencesService', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var PreferencesService;
  beforeEach(inject(function (_PreferencesService_) {
    PreferencesService = _PreferencesService_;
  }));

  it('should do something', function () {
    expect(!!PreferencesService).toBe(true);
  });

});
