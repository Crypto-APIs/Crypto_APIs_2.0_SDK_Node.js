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
    instance = new CryptoApis.GetTransactionDetailsByTransactionIDResponseItem();
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

  describe('GetTransactionDetailsByTransactionIDResponseItem', function() {
    it('should create an instance of GetTransactionDetailsByTransactionIDResponseItem', function() {
      // uncomment below and update the code to test GetTransactionDetailsByTransactionIDResponseItem
      //var instane = new CryptoApis.GetTransactionDetailsByTransactionIDResponseItem();
      //expect(instance).to.be.a(CryptoApis.GetTransactionDetailsByTransactionIDResponseItem);
    });

    it('should have the property index (base name: "index")', function() {
      // uncomment below and update the code to test the property index
      //var instance = new CryptoApis.GetTransactionDetailsByTransactionIDResponseItem();
      //expect(instance).to.be();
    });

    it('should have the property minedInBlockHash (base name: "minedInBlockHash")', function() {
      // uncomment below and update the code to test the property minedInBlockHash
      //var instance = new CryptoApis.GetTransactionDetailsByTransactionIDResponseItem();
      //expect(instance).to.be();
    });

    it('should have the property minedInBlockHeight (base name: "minedInBlockHeight")', function() {
      // uncomment below and update the code to test the property minedInBlockHeight
      //var instance = new CryptoApis.GetTransactionDetailsByTransactionIDResponseItem();
      //expect(instance).to.be();
    });

    it('should have the property recipients (base name: "recipients")', function() {
      // uncomment below and update the code to test the property recipients
      //var instance = new CryptoApis.GetTransactionDetailsByTransactionIDResponseItem();
      //expect(instance).to.be();
    });

    it('should have the property senders (base name: "senders")', function() {
      // uncomment below and update the code to test the property senders
      //var instance = new CryptoApis.GetTransactionDetailsByTransactionIDResponseItem();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instance = new CryptoApis.GetTransactionDetailsByTransactionIDResponseItem();
      //expect(instance).to.be();
    });

    it('should have the property transactionHash (base name: "transactionHash")', function() {
      // uncomment below and update the code to test the property transactionHash
      //var instance = new CryptoApis.GetTransactionDetailsByTransactionIDResponseItem();
      //expect(instance).to.be();
    });

    it('should have the property transactionId (base name: "transactionId")', function() {
      // uncomment below and update the code to test the property transactionId
      //var instance = new CryptoApis.GetTransactionDetailsByTransactionIDResponseItem();
      //expect(instance).to.be();
    });

    it('should have the property fee (base name: "fee")', function() {
      // uncomment below and update the code to test the property fee
      //var instance = new CryptoApis.GetTransactionDetailsByTransactionIDResponseItem();
      //expect(instance).to.be();
    });

    it('should have the property isConfirmed (base name: "isConfirmed")', function() {
      // uncomment below and update the code to test the property isConfirmed
      //var instance = new CryptoApis.GetTransactionDetailsByTransactionIDResponseItem();
      //expect(instance).to.be();
    });

    it('should have the property blockchainSpecific (base name: "blockchainSpecific")', function() {
      // uncomment below and update the code to test the property blockchainSpecific
      //var instance = new CryptoApis.GetTransactionDetailsByTransactionIDResponseItem();
      //expect(instance).to.be();
    });

  });

}));
