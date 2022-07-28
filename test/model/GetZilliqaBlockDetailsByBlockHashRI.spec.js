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
    instance = new Cryptoapis.GetZilliqaBlockDetailsByBlockHashRI();
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

  describe('GetZilliqaBlockDetailsByBlockHashRI', function() {
    it('should create an instance of GetZilliqaBlockDetailsByBlockHashRI', function() {
      // uncomment below and update the code to test GetZilliqaBlockDetailsByBlockHashRI
      //var instance = new Cryptoapis.GetZilliqaBlockDetailsByBlockHashRI();
      //expect(instance).to.be.a(Cryptoapis.GetZilliqaBlockDetailsByBlockHashRI);
    });

    it('should have the property blockHeight (base name: "blockHeight")', function() {
      // uncomment below and update the code to test the property blockHeight
      //var instance = new Cryptoapis.GetZilliqaBlockDetailsByBlockHashRI();
      //expect(instance).to.be();
    });

    it('should have the property difficulty (base name: "difficulty")', function() {
      // uncomment below and update the code to test the property difficulty
      //var instance = new Cryptoapis.GetZilliqaBlockDetailsByBlockHashRI();
      //expect(instance).to.be();
    });

    it('should have the property dsBlock (base name: "dsBlock")', function() {
      // uncomment below and update the code to test the property dsBlock
      //var instance = new Cryptoapis.GetZilliqaBlockDetailsByBlockHashRI();
      //expect(instance).to.be();
    });

    it('should have the property dsDifficulty (base name: "dsDifficulty")', function() {
      // uncomment below and update the code to test the property dsDifficulty
      //var instance = new Cryptoapis.GetZilliqaBlockDetailsByBlockHashRI();
      //expect(instance).to.be();
    });

    it('should have the property dsLeader (base name: "dsLeader")', function() {
      // uncomment below and update the code to test the property dsLeader
      //var instance = new Cryptoapis.GetZilliqaBlockDetailsByBlockHashRI();
      //expect(instance).to.be();
    });

    it('should have the property gasLimit (base name: "gasLimit")', function() {
      // uncomment below and update the code to test the property gasLimit
      //var instance = new Cryptoapis.GetZilliqaBlockDetailsByBlockHashRI();
      //expect(instance).to.be();
    });

    it('should have the property gasUsed (base name: "gasUsed")', function() {
      // uncomment below and update the code to test the property gasUsed
      //var instance = new Cryptoapis.GetZilliqaBlockDetailsByBlockHashRI();
      //expect(instance).to.be();
    });

    it('should have the property microBlocks (base name: "microBlocks")', function() {
      // uncomment below and update the code to test the property microBlocks
      //var instance = new Cryptoapis.GetZilliqaBlockDetailsByBlockHashRI();
      //expect(instance).to.be();
    });

    it('should have the property nextBlockHash (base name: "nextBlockHash")', function() {
      // uncomment below and update the code to test the property nextBlockHash
      //var instance = new Cryptoapis.GetZilliqaBlockDetailsByBlockHashRI();
      //expect(instance).to.be();
    });

    it('should have the property previousBlockHash (base name: "previousBlockHash")', function() {
      // uncomment below and update the code to test the property previousBlockHash
      //var instance = new Cryptoapis.GetZilliqaBlockDetailsByBlockHashRI();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instance = new Cryptoapis.GetZilliqaBlockDetailsByBlockHashRI();
      //expect(instance).to.be();
    });

    it('should have the property transactionsCount (base name: "transactionsCount")', function() {
      // uncomment below and update the code to test the property transactionsCount
      //var instance = new Cryptoapis.GetZilliqaBlockDetailsByBlockHashRI();
      //expect(instance).to.be();
    });

  });

}));
