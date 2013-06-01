'use strict';

describe('Service: RouterService', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var RouterService;
  beforeEach(inject(function (_RouterService_) {
    RouterService = _RouterService_;
  }));

  it('should do something', function () {
    expect(!!RouterService).toBe(true);
  });

});
