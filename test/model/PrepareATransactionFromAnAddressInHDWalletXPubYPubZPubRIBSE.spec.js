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
    instance = new Cryptoapis.PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE();
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

  describe('PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE', function() {
    it('should create an instance of PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE', function() {
      // uncomment below and update the code to test PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE
      //var instance = new Cryptoapis.PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE();
      //expect(instance).to.be.a(Cryptoapis.PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE);
    });

    it('should have the property dataHex (base name: "dataHex")', function() {
      // uncomment below and update the code to test the property dataHex
      //var instance = new Cryptoapis.PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE();
      //expect(instance).to.be();
    });

    it('should have the property derivationIndex (base name: "derivationIndex")', function() {
      // uncomment below and update the code to test the property derivationIndex
      //var instance = new Cryptoapis.PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE();
      //expect(instance).to.be();
    });

    it('should have the property fee (base name: "fee")', function() {
      // uncomment below and update the code to test the property fee
      //var instance = new Cryptoapis.PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE();
      //expect(instance).to.be();
    });

    it('should have the property nonce (base name: "nonce")', function() {
      // uncomment below and update the code to test the property nonce
      //var instance = new Cryptoapis.PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE();
      //expect(instance).to.be();
    });

    it('should have the property transactionType (base name: "transactionType")', function() {
      // uncomment below and update the code to test the property transactionType
      //var instance = new Cryptoapis.PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE();
      //expect(instance).to.be();
    });

    it('should have the property unit (base name: "unit")', function() {
      // uncomment below and update the code to test the property unit
      //var instance = new Cryptoapis.PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE();
      //expect(instance).to.be();
    });

  });

}));
