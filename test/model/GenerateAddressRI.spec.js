/**
 * CryptoAPIs
 * Crypto APIs 2.0 is a complex and innovative infrastructure layer that radically simplifies the development of any Blockchain and Crypto related applications. Organized around REST, Crypto APIs 2.0 can assist both novice Bitcoin/Ethereum enthusiasts and crypto experts with the development of their blockchain applications. Crypto APIs 2.0 provides unified endpoints and data, raw data, automatic tokens and coins forwardings, callback functionalities, and much more.
 *
 * The version of the OpenAPI document: 2.0.0
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
    instance = new Cryptoapis.GenerateAddressRI();
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

  describe('GenerateAddressRI', function() {
    it('should create an instance of GenerateAddressRI', function() {
      // uncomment below and update the code to test GenerateAddressRI
      //var instance = new Cryptoapis.GenerateAddressRI();
      //expect(instance).to.be.a(Cryptoapis.GenerateAddressRI);
    });

    it('should have the property addresses (base name: "addresses")', function() {
      // uncomment below and update the code to test the property addresses
      //var instance = new Cryptoapis.GenerateAddressRI();
      //expect(instance).to.be();
    });

    it('should have the property privateKey (base name: "privateKey")', function() {
      // uncomment below and update the code to test the property privateKey
      //var instance = new Cryptoapis.GenerateAddressRI();
      //expect(instance).to.be();
    });

    it('should have the property publicKey (base name: "publicKey")', function() {
      // uncomment below and update the code to test the property publicKey
      //var instance = new Cryptoapis.GenerateAddressRI();
      //expect(instance).to.be();
    });

    it('should have the property wif (base name: "wif")', function() {
      // uncomment below and update the code to test the property wif
      //var instance = new Cryptoapis.GenerateAddressRI();
      //expect(instance).to.be();
    });

  });

}));