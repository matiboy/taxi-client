'use strict';

describe('Service: GoogleMapsService', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var GoogleMapsService;
  beforeEach(inject(function (_GoogleMapsService_) {
    GoogleMapsService = _GoogleMapsService_;
  }));

  it('should do something', function () {
    expect(!!GoogleMapsService).toBe(true);
  });

});
