'use strict';

describe('Service: AppStates', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var AppStates;
  beforeEach(inject(function (_AppStates_) {
    AppStates = _AppStates_;
  }));

  it('should do something', function () {
    expect(!!AppStates).toBe(true);
  });

});
