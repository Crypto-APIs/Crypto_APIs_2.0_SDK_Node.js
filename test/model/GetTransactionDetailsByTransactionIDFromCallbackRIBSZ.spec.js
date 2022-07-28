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
    instance = new Cryptoapis.GetTransactionDetailsByTransactionIDFromCallbackRIBSZ();
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

  describe('GetTransactionDetailsByTransactionIDFromCallbackRIBSZ', function() {
    it('should create an instance of GetTransactionDetailsByTransactionIDFromCallbackRIBSZ', function() {
      // uncomment below and update the code to test GetTransactionDetailsByTransactionIDFromCallbackRIBSZ
      //var instance = new Cryptoapis.GetTransactionDetailsByTransactionIDFromCallbackRIBSZ();
      //expect(instance).to.be.a(Cryptoapis.GetTransactionDetailsByTransactionIDFromCallbackRIBSZ);
    });

    it('should have the property bindingSig (base name: "bindingSig")', function() {
      // uncomment below and update the code to test the property bindingSig
      //var instance = new Cryptoapis.GetTransactionDetailsByTransactionIDFromCallbackRIBSZ();
      //expect(instance).to.be();
    });

    it('should have the property expiryHeight (base name: "expiryHeight")', function() {
      // uncomment below and update the code to test the property expiryHeight
      //var instance = new Cryptoapis.GetTransactionDetailsByTransactionIDFromCallbackRIBSZ();
      //expect(instance).to.be();
    });

    it('should have the property joinSplitPubKey (base name: "joinSplitPubKey")', function() {
      // uncomment below and update the code to test the property joinSplitPubKey
      //var instance = new Cryptoapis.GetTransactionDetailsByTransactionIDFromCallbackRIBSZ();
      //expect(instance).to.be();
    });

    it('should have the property joinSplitSig (base name: "joinSplitSig")', function() {
      // uncomment below and update the code to test the property joinSplitSig
      //var instance = new Cryptoapis.GetTransactionDetailsByTransactionIDFromCallbackRIBSZ();
      //expect(instance).to.be();
    });

    it('should have the property locktime (base name: "locktime")', function() {
      // uncomment below and update the code to test the property locktime
      //var instance = new Cryptoapis.GetTransactionDetailsByTransactionIDFromCallbackRIBSZ();
      //expect(instance).to.be();
    });

    it('should have the property overwintered (base name: "overwintered")', function() {
      // uncomment below and update the code to test the property overwintered
      //var instance = new Cryptoapis.GetTransactionDetailsByTransactionIDFromCallbackRIBSZ();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instance = new Cryptoapis.GetTransactionDetailsByTransactionIDFromCallbackRIBSZ();
      //expect(instance).to.be();
    });

    it('should have the property vJoinSplit (base name: "vJoinSplit")', function() {
      // uncomment below and update the code to test the property vJoinSplit
      //var instance = new Cryptoapis.GetTransactionDetailsByTransactionIDFromCallbackRIBSZ();
      //expect(instance).to.be();
    });

    it('should have the property vShieldedOutput (base name: "vShieldedOutput")', function() {
      // uncomment below and update the code to test the property vShieldedOutput
      //var instance = new Cryptoapis.GetTransactionDetailsByTransactionIDFromCallbackRIBSZ();
      //expect(instance).to.be();
    });

    it('should have the property vShieldedSpend (base name: "vShieldedSpend")', function() {
      // uncomment below and update the code to test the property vShieldedSpend
      //var instance = new Cryptoapis.GetTransactionDetailsByTransactionIDFromCallbackRIBSZ();
      //expect(instance).to.be();
    });

    it('should have the property valueBalance (base name: "valueBalance")', function() {
      // uncomment below and update the code to test the property valueBalance
      //var instance = new Cryptoapis.GetTransactionDetailsByTransactionIDFromCallbackRIBSZ();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new Cryptoapis.GetTransactionDetailsByTransactionIDFromCallbackRIBSZ();
      //expect(instance).to.be();
    });

    it('should have the property versionGroupId (base name: "versionGroupId")', function() {
      // uncomment below and update the code to test the property versionGroupId
      //var instance = new Cryptoapis.GetTransactionDetailsByTransactionIDFromCallbackRIBSZ();
      //expect(instance).to.be();
    });

    it('should have the property vin (base name: "vin")', function() {
      // uncomment below and update the code to test the property vin
      //var instance = new Cryptoapis.GetTransactionDetailsByTransactionIDFromCallbackRIBSZ();
      //expect(instance).to.be();
    });

    it('should have the property vout (base name: "vout")', function() {
      // uncomment below and update the code to test the property vout
      //var instance = new Cryptoapis.GetTransactionDetailsByTransactionIDFromCallbackRIBSZ();
      //expect(instance).to.be();
    });

  });

}));
