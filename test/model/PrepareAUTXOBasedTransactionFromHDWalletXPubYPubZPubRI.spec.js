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
    instance = new Cryptoapis.PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI();
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

  describe('PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI', function() {
    it('should create an instance of PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI', function() {
      // uncomment below and update the code to test PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI
      //var instance = new Cryptoapis.PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI();
      //expect(instance).to.be.a(Cryptoapis.PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI);
    });

    it('should have the property additionalData (base name: "additionalData")', function() {
      // uncomment below and update the code to test the property additionalData
      //var instance = new Cryptoapis.PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI();
      //expect(instance).to.be();
    });

    it('should have the property fee (base name: "fee")', function() {
      // uncomment below and update the code to test the property fee
      //var instance = new Cryptoapis.PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI();
      //expect(instance).to.be();
    });

    it('should have the property feePerByte (base name: "feePerByte")', function() {
      // uncomment below and update the code to test the property feePerByte
      //var instance = new Cryptoapis.PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI();
      //expect(instance).to.be();
    });

    it('should have the property locktime (base name: "locktime")', function() {
      // uncomment below and update the code to test the property locktime
      //var instance = new Cryptoapis.PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instance = new Cryptoapis.PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new Cryptoapis.PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI();
      //expect(instance).to.be();
    });

    it('should have the property blockchainSpecific (base name: "blockchainSpecific")', function() {
      // uncomment below and update the code to test the property blockchainSpecific
      //var instance = new Cryptoapis.PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI();
      //expect(instance).to.be();
    });

  });

}));
