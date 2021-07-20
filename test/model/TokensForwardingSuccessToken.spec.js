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
    instance = new Cryptoapis.TokensForwardingSuccessToken();
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

  describe('TokensForwardingSuccessToken', function() {
    it('should create an instance of TokensForwardingSuccessToken', function() {
      // uncomment below and update the code to test TokensForwardingSuccessToken
      //var instane = new Cryptoapis.TokensForwardingSuccessToken();
      //expect(instance).to.be.a(Cryptoapis.TokensForwardingSuccessToken);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Cryptoapis.TokensForwardingSuccessToken();
      //expect(instance).to.be();
    });

    it('should have the property symbol (base name: "symbol")', function() {
      // uncomment below and update the code to test the property symbol
      //var instance = new Cryptoapis.TokensForwardingSuccessToken();
      //expect(instance).to.be();
    });

    it('should have the property decimals (base name: "decimals")', function() {
      // uncomment below and update the code to test the property decimals
      //var instance = new Cryptoapis.TokensForwardingSuccessToken();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new Cryptoapis.TokensForwardingSuccessToken();
      //expect(instance).to.be();
    });

    it('should have the property contractAddress (base name: "contractAddress")', function() {
      // uncomment below and update the code to test the property contractAddress
      //var instance = new Cryptoapis.TokensForwardingSuccessToken();
      //expect(instance).to.be();
    });

    it('should have the property tokenId (base name: "tokenId")', function() {
      // uncomment below and update the code to test the property tokenId
      //var instance = new Cryptoapis.TokensForwardingSuccessToken();
      //expect(instance).to.be();
    });

    it('should have the property propertyId (base name: "propertyId")', function() {
      // uncomment below and update the code to test the property propertyId
      //var instance = new Cryptoapis.TokensForwardingSuccessToken();
      //expect(instance).to.be();
    });

    it('should have the property transactionType (base name: "transactionType")', function() {
      // uncomment below and update the code to test the property transactionType
      //var instance = new Cryptoapis.TokensForwardingSuccessToken();
      //expect(instance).to.be();
    });

    it('should have the property createdByTransactionId (base name: "createdByTransactionId")', function() {
      // uncomment below and update the code to test the property createdByTransactionId
      //var instance = new Cryptoapis.TokensForwardingSuccessToken();
      //expect(instance).to.be();
    });

  });

}));
