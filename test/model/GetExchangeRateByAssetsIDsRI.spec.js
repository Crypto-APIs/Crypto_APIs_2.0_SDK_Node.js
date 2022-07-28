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
    instance = new Cryptoapis.GetExchangeRateByAssetsIDsRI();
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

  describe('GetExchangeRateByAssetsIDsRI', function() {
    it('should create an instance of GetExchangeRateByAssetsIDsRI', function() {
      // uncomment below and update the code to test GetExchangeRateByAssetsIDsRI
      //var instance = new Cryptoapis.GetExchangeRateByAssetsIDsRI();
      //expect(instance).to.be.a(Cryptoapis.GetExchangeRateByAssetsIDsRI);
    });

    it('should have the property calculationTimestamp (base name: "calculationTimestamp")', function() {
      // uncomment below and update the code to test the property calculationTimestamp
      //var instance = new Cryptoapis.GetExchangeRateByAssetsIDsRI();
      //expect(instance).to.be();
    });

    it('should have the property fromAssetId (base name: "fromAssetId")', function() {
      // uncomment below and update the code to test the property fromAssetId
      //var instance = new Cryptoapis.GetExchangeRateByAssetsIDsRI();
      //expect(instance).to.be();
    });

    it('should have the property fromAssetSymbol (base name: "fromAssetSymbol")', function() {
      // uncomment below and update the code to test the property fromAssetSymbol
      //var instance = new Cryptoapis.GetExchangeRateByAssetsIDsRI();
      //expect(instance).to.be();
    });

    it('should have the property rate (base name: "rate")', function() {
      // uncomment below and update the code to test the property rate
      //var instance = new Cryptoapis.GetExchangeRateByAssetsIDsRI();
      //expect(instance).to.be();
    });

    it('should have the property toAssetId (base name: "toAssetId")', function() {
      // uncomment below and update the code to test the property toAssetId
      //var instance = new Cryptoapis.GetExchangeRateByAssetsIDsRI();
      //expect(instance).to.be();
    });

    it('should have the property toAssetSymbol (base name: "toAssetSymbol")', function() {
      // uncomment below and update the code to test the property toAssetSymbol
      //var instance = new Cryptoapis.GetExchangeRateByAssetsIDsRI();
      //expect(instance).to.be();
    });

  });

}));
