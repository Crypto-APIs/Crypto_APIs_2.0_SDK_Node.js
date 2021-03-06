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
    instance = new Cryptoapis.GetTransactionRequestDetailsRI();
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

  describe('GetTransactionRequestDetailsRI', function() {
    it('should create an instance of GetTransactionRequestDetailsRI', function() {
      // uncomment below and update the code to test GetTransactionRequestDetailsRI
      //var instance = new Cryptoapis.GetTransactionRequestDetailsRI();
      //expect(instance).to.be.a(Cryptoapis.GetTransactionRequestDetailsRI);
    });

    it('should have the property additionalDetails (base name: "additionalDetails")', function() {
      // uncomment below and update the code to test the property additionalDetails
      //var instance = new Cryptoapis.GetTransactionRequestDetailsRI();
      //expect(instance).to.be();
    });

    it('should have the property blockchain (base name: "blockchain")', function() {
      // uncomment below and update the code to test the property blockchain
      //var instance = new Cryptoapis.GetTransactionRequestDetailsRI();
      //expect(instance).to.be();
    });

    it('should have the property feePriority (base name: "feePriority")', function() {
      // uncomment below and update the code to test the property feePriority
      //var instance = new Cryptoapis.GetTransactionRequestDetailsRI();
      //expect(instance).to.be();
    });

    it('should have the property network (base name: "network")', function() {
      // uncomment below and update the code to test the property network
      //var instance = new Cryptoapis.GetTransactionRequestDetailsRI();
      //expect(instance).to.be();
    });

    it('should have the property recipients (base name: "recipients")', function() {
      // uncomment below and update the code to test the property recipients
      //var instance = new Cryptoapis.GetTransactionRequestDetailsRI();
      //expect(instance).to.be();
    });

    it('should have the property totalTransactionAmount (base name: "totalTransactionAmount")', function() {
      // uncomment below and update the code to test the property totalTransactionAmount
      //var instance = new Cryptoapis.GetTransactionRequestDetailsRI();
      //expect(instance).to.be();
    });

    it('should have the property transactionId (base name: "transactionId")', function() {
      // uncomment below and update the code to test the property transactionId
      //var instance = new Cryptoapis.GetTransactionRequestDetailsRI();
      //expect(instance).to.be();
    });

    it('should have the property transactionRequestStatus (base name: "transactionRequestStatus")', function() {
      // uncomment below and update the code to test the property transactionRequestStatus
      //var instance = new Cryptoapis.GetTransactionRequestDetailsRI();
      //expect(instance).to.be();
    });

    it('should have the property transactionType (base name: "transactionType")', function() {
      // uncomment below and update the code to test the property transactionType
      //var instance = new Cryptoapis.GetTransactionRequestDetailsRI();
      //expect(instance).to.be();
    });

    it('should have the property unit (base name: "unit")', function() {
      // uncomment below and update the code to test the property unit
      //var instance = new Cryptoapis.GetTransactionRequestDetailsRI();
      //expect(instance).to.be();
    });

    it('should have the property walletId (base name: "walletId")', function() {
      // uncomment below and update the code to test the property walletId
      //var instance = new Cryptoapis.GetTransactionRequestDetailsRI();
      //expect(instance).to.be();
    });

  });

}));
