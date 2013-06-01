'use strict';

describe('Service: GeolocationService', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var GeolocationService;
  beforeEach(inject(function (_GeolocationService_) {
    GeolocationService = _GeolocationService_;
  }));

  it('should do something', function () {
    expect(!!GeolocationService).toBe(true);
  });

});
