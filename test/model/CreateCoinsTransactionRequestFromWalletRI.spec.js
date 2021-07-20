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
    instance = new Cryptoapis.CreateCoinsTransactionRequestFromWalletRI();
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

  describe('CreateCoinsTransactionRequestFromWalletRI', function() {
    it('should create an instance of CreateCoinsTransactionRequestFromWalletRI', function() {
      // uncomment below and update the code to test CreateCoinsTransactionRequestFromWalletRI
      //var instane = new Cryptoapis.CreateCoinsTransactionRequestFromWalletRI();
      //expect(instance).to.be.a(Cryptoapis.CreateCoinsTransactionRequestFromWalletRI);
    });

    it('should have the property feePriority (base name: "feePriority")', function() {
      // uncomment below and update the code to test the property feePriority
      //var instance = new Cryptoapis.CreateCoinsTransactionRequestFromWalletRI();
      //expect(instance).to.be();
    });

    it('should have the property recipients (base name: "recipients")', function() {
      // uncomment below and update the code to test the property recipients
      //var instance = new Cryptoapis.CreateCoinsTransactionRequestFromWalletRI();
      //expect(instance).to.be();
    });

    it('should have the property totalTransactionAmount (base name: "totalTransactionAmount")', function() {
      // uncomment below and update the code to test the property totalTransactionAmount
      //var instance = new Cryptoapis.CreateCoinsTransactionRequestFromWalletRI();
      //expect(instance).to.be();
    });

    it('should have the property transactionRequestStatus (base name: "transactionRequestStatus")', function() {
      // uncomment below and update the code to test the property transactionRequestStatus
      //var instance = new Cryptoapis.CreateCoinsTransactionRequestFromWalletRI();
      //expect(instance).to.be();
    });

  });

}));
