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
    instance = new Cryptoapis.ListTransactionsByBlockHashRIBSD2VinInnerScriptSig();
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

  describe('ListTransactionsByBlockHashRIBSD2VinInnerScriptSig', function() {
    it('should create an instance of ListTransactionsByBlockHashRIBSD2VinInnerScriptSig', function() {
      // uncomment below and update the code to test ListTransactionsByBlockHashRIBSD2VinInnerScriptSig
      //var instance = new Cryptoapis.ListTransactionsByBlockHashRIBSD2VinInnerScriptSig();
      //expect(instance).to.be.a(Cryptoapis.ListTransactionsByBlockHashRIBSD2VinInnerScriptSig);
    });

    it('should have the property asm (base name: "asm")', function() {
      // uncomment below and update the code to test the property asm
      //var instance = new Cryptoapis.ListTransactionsByBlockHashRIBSD2VinInnerScriptSig();
      //expect(instance).to.be();
    });

    it('should have the property hex (base name: "hex")', function() {
      // uncomment below and update the code to test the property hex
      //var instance = new Cryptoapis.ListTransactionsByBlockHashRIBSD2VinInnerScriptSig();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new Cryptoapis.ListTransactionsByBlockHashRIBSD2VinInnerScriptSig();
      //expect(instance).to.be();
    });

  });

}));
