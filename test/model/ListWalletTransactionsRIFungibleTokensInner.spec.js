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
    instance = new Cryptoapis.ListWalletTransactionsRIFungibleTokensInner();
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

  describe('ListWalletTransactionsRIFungibleTokensInner', function() {
    it('should create an instance of ListWalletTransactionsRIFungibleTokensInner', function() {
      // uncomment below and update the code to test ListWalletTransactionsRIFungibleTokensInner
      //var instance = new Cryptoapis.ListWalletTransactionsRIFungibleTokensInner();
      //expect(instance).to.be.a(Cryptoapis.ListWalletTransactionsRIFungibleTokensInner);
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new Cryptoapis.ListWalletTransactionsRIFungibleTokensInner();
      //expect(instance).to.be();
    });

    it('should have the property convertedAmount (base name: "convertedAmount")', function() {
      // uncomment below and update the code to test the property convertedAmount
      //var instance = new Cryptoapis.ListWalletTransactionsRIFungibleTokensInner();
      //expect(instance).to.be();
    });

    it('should have the property exchangeRateUnit (base name: "exchangeRateUnit")', function() {
      // uncomment below and update the code to test the property exchangeRateUnit
      //var instance = new Cryptoapis.ListWalletTransactionsRIFungibleTokensInner();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Cryptoapis.ListWalletTransactionsRIFungibleTokensInner();
      //expect(instance).to.be();
    });

    it('should have the property recipient (base name: "recipient")', function() {
      // uncomment below and update the code to test the property recipient
      //var instance = new Cryptoapis.ListWalletTransactionsRIFungibleTokensInner();
      //expect(instance).to.be();
    });

    it('should have the property sender (base name: "sender")', function() {
      // uncomment below and update the code to test the property sender
      //var instance = new Cryptoapis.ListWalletTransactionsRIFungibleTokensInner();
      //expect(instance).to.be();
    });

    it('should have the property symbol (base name: "symbol")', function() {
      // uncomment below and update the code to test the property symbol
      //var instance = new Cryptoapis.ListWalletTransactionsRIFungibleTokensInner();
      //expect(instance).to.be();
    });

    it('should have the property tokenDecimals (base name: "tokenDecimals")', function() {
      // uncomment below and update the code to test the property tokenDecimals
      //var instance = new Cryptoapis.ListWalletTransactionsRIFungibleTokensInner();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new Cryptoapis.ListWalletTransactionsRIFungibleTokensInner();
      //expect(instance).to.be();
    });

  });

}));
