'use strict';

describe('Service: cordovaReady', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var cordovaReady;
  beforeEach(inject(function (_cordovaReady_) {
    cordovaReady = _cordovaReady_;
  }));

  it('should do something', function () {
    expect(!!cordovaReady).toBe(true);
  });

});
