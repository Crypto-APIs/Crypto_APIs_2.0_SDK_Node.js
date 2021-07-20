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
    instance = new Cryptoapis.ListZilliqaTransactionsByAddressRI();
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

  describe('ListZilliqaTransactionsByAddressRI', function() {
    it('should create an instance of ListZilliqaTransactionsByAddressRI', function() {
      // uncomment below and update the code to test ListZilliqaTransactionsByAddressRI
      //var instane = new Cryptoapis.ListZilliqaTransactionsByAddressRI();
      //expect(instance).to.be.a(Cryptoapis.ListZilliqaTransactionsByAddressRI);
    });

    it('should have the property fee (base name: "fee")', function() {
      // uncomment below and update the code to test the property fee
      //var instance = new Cryptoapis.ListZilliqaTransactionsByAddressRI();
      //expect(instance).to.be();
    });

    it('should have the property gasLimit (base name: "gasLimit")', function() {
      // uncomment below and update the code to test the property gasLimit
      //var instance = new Cryptoapis.ListZilliqaTransactionsByAddressRI();
      //expect(instance).to.be();
    });

    it('should have the property gasPrice (base name: "gasPrice")', function() {
      // uncomment below and update the code to test the property gasPrice
      //var instance = new Cryptoapis.ListZilliqaTransactionsByAddressRI();
      //expect(instance).to.be();
    });

    it('should have the property gasUsed (base name: "gasUsed")', function() {
      // uncomment below and update the code to test the property gasUsed
      //var instance = new Cryptoapis.ListZilliqaTransactionsByAddressRI();
      //expect(instance).to.be();
    });

    it('should have the property minedInBlockHash (base name: "minedInBlockHash")', function() {
      // uncomment below and update the code to test the property minedInBlockHash
      //var instance = new Cryptoapis.ListZilliqaTransactionsByAddressRI();
      //expect(instance).to.be();
    });

    it('should have the property minedInBlockHeight (base name: "minedInBlockHeight")', function() {
      // uncomment below and update the code to test the property minedInBlockHeight
      //var instance = new Cryptoapis.ListZilliqaTransactionsByAddressRI();
      //expect(instance).to.be();
    });

    it('should have the property nonce (base name: "nonce")', function() {
      // uncomment below and update the code to test the property nonce
      //var instance = new Cryptoapis.ListZilliqaTransactionsByAddressRI();
      //expect(instance).to.be();
    });

    it('should have the property recipients (base name: "recipients")', function() {
      // uncomment below and update the code to test the property recipients
      //var instance = new Cryptoapis.ListZilliqaTransactionsByAddressRI();
      //expect(instance).to.be();
    });

    it('should have the property senders (base name: "senders")', function() {
      // uncomment below and update the code to test the property senders
      //var instance = new Cryptoapis.ListZilliqaTransactionsByAddressRI();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instance = new Cryptoapis.ListZilliqaTransactionsByAddressRI();
      //expect(instance).to.be();
    });

    it('should have the property transactionHash (base name: "transactionHash")', function() {
      // uncomment below and update the code to test the property transactionHash
      //var instance = new Cryptoapis.ListZilliqaTransactionsByAddressRI();
      //expect(instance).to.be();
    });

    it('should have the property transactionIndex (base name: "transactionIndex")', function() {
      // uncomment below and update the code to test the property transactionIndex
      //var instance = new Cryptoapis.ListZilliqaTransactionsByAddressRI();
      //expect(instance).to.be();
    });

    it('should have the property transactionStatus (base name: "transactionStatus")', function() {
      // uncomment below and update the code to test the property transactionStatus
      //var instance = new Cryptoapis.ListZilliqaTransactionsByAddressRI();
      //expect(instance).to.be();
    });

  });

}));
