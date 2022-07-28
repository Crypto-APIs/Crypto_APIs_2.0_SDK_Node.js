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
    instance = new Cryptoapis.ConfirmedTokensTransactionForCertainAmountOrHigherDataItem();
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

  describe('ConfirmedTokensTransactionForCertainAmountOrHigherDataItem', function() {
    it('should create an instance of ConfirmedTokensTransactionForCertainAmountOrHigherDataItem', function() {
      // uncomment below and update the code to test ConfirmedTokensTransactionForCertainAmountOrHigherDataItem
      //var instance = new Cryptoapis.ConfirmedTokensTransactionForCertainAmountOrHigherDataItem();
      //expect(instance).to.be.a(Cryptoapis.ConfirmedTokensTransactionForCertainAmountOrHigherDataItem);
    });

    it('should have the property blockchain (base name: "blockchain")', function() {
      // uncomment below and update the code to test the property blockchain
      //var instance = new Cryptoapis.ConfirmedTokensTransactionForCertainAmountOrHigherDataItem();
      //expect(instance).to.be();
    });

    it('should have the property network (base name: "network")', function() {
      // uncomment below and update the code to test the property network
      //var instance = new Cryptoapis.ConfirmedTokensTransactionForCertainAmountOrHigherDataItem();
      //expect(instance).to.be();
    });

    it('should have the property minedInBlock (base name: "minedInBlock")', function() {
      // uncomment below and update the code to test the property minedInBlock
      //var instance = new Cryptoapis.ConfirmedTokensTransactionForCertainAmountOrHigherDataItem();
      //expect(instance).to.be();
    });

    it('should have the property transactionId (base name: "transactionId")', function() {
      // uncomment below and update the code to test the property transactionId
      //var instance = new Cryptoapis.ConfirmedTokensTransactionForCertainAmountOrHigherDataItem();
      //expect(instance).to.be();
    });

    it('should have the property tokenType (base name: "tokenType")', function() {
      // uncomment below and update the code to test the property tokenType
      //var instance = new Cryptoapis.ConfirmedTokensTransactionForCertainAmountOrHigherDataItem();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instance = new Cryptoapis.ConfirmedTokensTransactionForCertainAmountOrHigherDataItem();
      //expect(instance).to.be();
    });

  });

}));
