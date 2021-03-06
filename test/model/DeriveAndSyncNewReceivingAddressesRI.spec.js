/**
 * CryptoAPIs
 * Crypto APIs is a complex and innovative infrastructure layer that radically simplifies the development of any Blockchain and Crypto related applications. Organized around REST, Crypto APIs can assist both novice Bitcoin/Ethereum enthusiasts and crypto experts with the development of their blockchain applications. Crypto APIs provides unified endpoints and data, raw data, automatic tokens and coins forwardings, callback functionalities, and much more.
 *
 * The version of the OpenAPI document: 2021-03-20
 * Contact: developers@cryptoapis.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Cryptoapis);
  }
}(this, function(expect, Cryptoapis) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Cryptoapis.DeriveAndSyncNewReceivingAddressesRI();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DeriveAndSyncNewReceivingAddressesRI', function() {
    it('should create an instance of DeriveAndSyncNewReceivingAddressesRI', function() {
      // uncomment below and update the code to test DeriveAndSyncNewReceivingAddressesRI
      //var instance = new Cryptoapis.DeriveAndSyncNewReceivingAddressesRI();
      //expect(instance).to.be.a(Cryptoapis.DeriveAndSyncNewReceivingAddressesRI);
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new Cryptoapis.DeriveAndSyncNewReceivingAddressesRI();
      //expect(instance).to.be();
    });

    it('should have the property addressFormat (base name: "addressFormat")', function() {
      // uncomment below and update the code to test the property addressFormat
      //var instance = new Cryptoapis.DeriveAndSyncNewReceivingAddressesRI();
      //expect(instance).to.be();
    });

    it('should have the property addressType (base name: "addressType")', function() {
      // uncomment below and update the code to test the property addressType
      //var instance = new Cryptoapis.DeriveAndSyncNewReceivingAddressesRI();
      //expect(instance).to.be();
    });

    it('should have the property derivationType (base name: "derivationType")', function() {
      // uncomment below and update the code to test the property derivationType
      //var instance = new Cryptoapis.DeriveAndSyncNewReceivingAddressesRI();
      //expect(instance).to.be();
    });

    it('should have the property index (base name: "index")', function() {
      // uncomment below and update the code to test the property index
      //var instance = new Cryptoapis.DeriveAndSyncNewReceivingAddressesRI();
      //expect(instance).to.be();
    });

  });

}));
