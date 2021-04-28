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
    factory(root.expect, root.CryptoApis);
  }
}(this, function(expect, CryptoApis) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CryptoApis.GetLatestMinedBlockResponseItem();
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

  describe('GetLatestMinedBlockResponseItem', function() {
    it('should create an instance of GetLatestMinedBlockResponseItem', function() {
      // uncomment below and update the code to test GetLatestMinedBlockResponseItem
      //var instane = new CryptoApis.GetLatestMinedBlockResponseItem();
      //expect(instance).to.be.a(CryptoApis.GetLatestMinedBlockResponseItem);
    });

    it('should have the property hash (base name: "hash")', function() {
      // uncomment below and update the code to test the property hash
      //var instance = new CryptoApis.GetLatestMinedBlockResponseItem();
      //expect(instance).to.be();
    });

    it('should have the property height (base name: "height")', function() {
      // uncomment below and update the code to test the property height
      //var instance = new CryptoApis.GetLatestMinedBlockResponseItem();
      //expect(instance).to.be();
    });

    it('should have the property previousBlockHash (base name: "previousBlockHash")', function() {
      // uncomment below and update the code to test the property previousBlockHash
      //var instance = new CryptoApis.GetLatestMinedBlockResponseItem();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instance = new CryptoApis.GetLatestMinedBlockResponseItem();
      //expect(instance).to.be();
    });

    it('should have the property transactionsCount (base name: "transactionsCount")', function() {
      // uncomment below and update the code to test the property transactionsCount
      //var instance = new CryptoApis.GetLatestMinedBlockResponseItem();
      //expect(instance).to.be();
    });

    it('should have the property blockchainSpecific (base name: "blockchainSpecific")', function() {
      // uncomment below and update the code to test the property blockchainSpecific
      //var instance = new CryptoApis.GetLatestMinedBlockResponseItem();
      //expect(instance).to.be();
    });

  });

}));
