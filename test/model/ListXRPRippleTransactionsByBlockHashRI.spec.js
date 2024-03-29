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
    instance = new Cryptoapis.ListXRPRippleTransactionsByBlockHashRI();
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

  describe('ListXRPRippleTransactionsByBlockHashRI', function() {
    it('should create an instance of ListXRPRippleTransactionsByBlockHashRI', function() {
      // uncomment below and update the code to test ListXRPRippleTransactionsByBlockHashRI
      //var instance = new Cryptoapis.ListXRPRippleTransactionsByBlockHashRI();
      //expect(instance).to.be.a(Cryptoapis.ListXRPRippleTransactionsByBlockHashRI);
    });

    it('should have the property additionalData (base name: "additionalData")', function() {
      // uncomment below and update the code to test the property additionalData
      //var instance = new Cryptoapis.ListXRPRippleTransactionsByBlockHashRI();
      //expect(instance).to.be();
    });

    it('should have the property destinationTag (base name: "destinationTag")', function() {
      // uncomment below and update the code to test the property destinationTag
      //var instance = new Cryptoapis.ListXRPRippleTransactionsByBlockHashRI();
      //expect(instance).to.be();
    });

    it('should have the property index (base name: "index")', function() {
      // uncomment below and update the code to test the property index
      //var instance = new Cryptoapis.ListXRPRippleTransactionsByBlockHashRI();
      //expect(instance).to.be();
    });

    it('should have the property minedInBlockHeight (base name: "minedInBlockHeight")', function() {
      // uncomment below and update the code to test the property minedInBlockHeight
      //var instance = new Cryptoapis.ListXRPRippleTransactionsByBlockHashRI();
      //expect(instance).to.be();
    });

    it('should have the property offer (base name: "offer")', function() {
      // uncomment below and update the code to test the property offer
      //var instance = new Cryptoapis.ListXRPRippleTransactionsByBlockHashRI();
      //expect(instance).to.be();
    });

    it('should have the property recipients (base name: "recipients")', function() {
      // uncomment below and update the code to test the property recipients
      //var instance = new Cryptoapis.ListXRPRippleTransactionsByBlockHashRI();
      //expect(instance).to.be();
    });

    it('should have the property senders (base name: "senders")', function() {
      // uncomment below and update the code to test the property senders
      //var instance = new Cryptoapis.ListXRPRippleTransactionsByBlockHashRI();
      //expect(instance).to.be();
    });

    it('should have the property sequence (base name: "sequence")', function() {
      // uncomment below and update the code to test the property sequence
      //var instance = new Cryptoapis.ListXRPRippleTransactionsByBlockHashRI();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new Cryptoapis.ListXRPRippleTransactionsByBlockHashRI();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instance = new Cryptoapis.ListXRPRippleTransactionsByBlockHashRI();
      //expect(instance).to.be();
    });

    it('should have the property transactionHash (base name: "transactionHash")', function() {
      // uncomment below and update the code to test the property transactionHash
      //var instance = new Cryptoapis.ListXRPRippleTransactionsByBlockHashRI();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new Cryptoapis.ListXRPRippleTransactionsByBlockHashRI();
      //expect(instance).to.be();
    });

    it('should have the property fee (base name: "fee")', function() {
      // uncomment below and update the code to test the property fee
      //var instance = new Cryptoapis.ListXRPRippleTransactionsByBlockHashRI();
      //expect(instance).to.be();
    });

    it('should have the property receive (base name: "receive")', function() {
      // uncomment below and update the code to test the property receive
      //var instance = new Cryptoapis.ListXRPRippleTransactionsByBlockHashRI();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new Cryptoapis.ListXRPRippleTransactionsByBlockHashRI();
      //expect(instance).to.be();
    });

  });

}));
