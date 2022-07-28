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
    instance = new Cryptoapis.GetBlockDetailsByBlockHashRIBSE();
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

  describe('GetBlockDetailsByBlockHashRIBSE', function() {
    it('should create an instance of GetBlockDetailsByBlockHashRIBSE', function() {
      // uncomment below and update the code to test GetBlockDetailsByBlockHashRIBSE
      //var instance = new Cryptoapis.GetBlockDetailsByBlockHashRIBSE();
      //expect(instance).to.be.a(Cryptoapis.GetBlockDetailsByBlockHashRIBSE);
    });

    it('should have the property difficulty (base name: "difficulty")', function() {
      // uncomment below and update the code to test the property difficulty
      //var instance = new Cryptoapis.GetBlockDetailsByBlockHashRIBSE();
      //expect(instance).to.be();
    });

    it('should have the property extraData (base name: "extraData")', function() {
      // uncomment below and update the code to test the property extraData
      //var instance = new Cryptoapis.GetBlockDetailsByBlockHashRIBSE();
      //expect(instance).to.be();
    });

    it('should have the property gasLimit (base name: "gasLimit")', function() {
      // uncomment below and update the code to test the property gasLimit
      //var instance = new Cryptoapis.GetBlockDetailsByBlockHashRIBSE();
      //expect(instance).to.be();
    });

    it('should have the property gasUsed (base name: "gasUsed")', function() {
      // uncomment below and update the code to test the property gasUsed
      //var instance = new Cryptoapis.GetBlockDetailsByBlockHashRIBSE();
      //expect(instance).to.be();
    });

    it('should have the property minedInSeconds (base name: "minedInSeconds")', function() {
      // uncomment below and update the code to test the property minedInSeconds
      //var instance = new Cryptoapis.GetBlockDetailsByBlockHashRIBSE();
      //expect(instance).to.be();
    });

    it('should have the property nonce (base name: "nonce")', function() {
      // uncomment below and update the code to test the property nonce
      //var instance = new Cryptoapis.GetBlockDetailsByBlockHashRIBSE();
      //expect(instance).to.be();
    });

    it('should have the property sha3Uncles (base name: "sha3Uncles")', function() {
      // uncomment below and update the code to test the property sha3Uncles
      //var instance = new Cryptoapis.GetBlockDetailsByBlockHashRIBSE();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instance = new Cryptoapis.GetBlockDetailsByBlockHashRIBSE();
      //expect(instance).to.be();
    });

    it('should have the property totalDifficulty (base name: "totalDifficulty")', function() {
      // uncomment below and update the code to test the property totalDifficulty
      //var instance = new Cryptoapis.GetBlockDetailsByBlockHashRIBSE();
      //expect(instance).to.be();
    });

    it('should have the property uncles (base name: "uncles")', function() {
      // uncomment below and update the code to test the property uncles
      //var instance = new Cryptoapis.GetBlockDetailsByBlockHashRIBSE();
      //expect(instance).to.be();
    });

  });

}));
