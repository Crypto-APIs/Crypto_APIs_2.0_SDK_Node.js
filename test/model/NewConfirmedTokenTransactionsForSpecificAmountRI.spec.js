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
    instance = new Cryptoapis.NewConfirmedTokenTransactionsForSpecificAmountRI();
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

  describe('NewConfirmedTokenTransactionsForSpecificAmountRI', function() {
    it('should create an instance of NewConfirmedTokenTransactionsForSpecificAmountRI', function() {
      // uncomment below and update the code to test NewConfirmedTokenTransactionsForSpecificAmountRI
      //var instance = new Cryptoapis.NewConfirmedTokenTransactionsForSpecificAmountRI();
      //expect(instance).to.be.a(Cryptoapis.NewConfirmedTokenTransactionsForSpecificAmountRI);
    });

    it('should have the property amountHigherThan (base name: "amountHigherThan")', function() {
      // uncomment below and update the code to test the property amountHigherThan
      //var instance = new Cryptoapis.NewConfirmedTokenTransactionsForSpecificAmountRI();
      //expect(instance).to.be();
    });

    it('should have the property callbackSecretKey (base name: "callbackSecretKey")', function() {
      // uncomment below and update the code to test the property callbackSecretKey
      //var instance = new Cryptoapis.NewConfirmedTokenTransactionsForSpecificAmountRI();
      //expect(instance).to.be();
    });

    it('should have the property callbackUrl (base name: "callbackUrl")', function() {
      // uncomment below and update the code to test the property callbackUrl
      //var instance = new Cryptoapis.NewConfirmedTokenTransactionsForSpecificAmountRI();
      //expect(instance).to.be();
    });

    it('should have the property contractAddress (base name: "contractAddress")', function() {
      // uncomment below and update the code to test the property contractAddress
      //var instance = new Cryptoapis.NewConfirmedTokenTransactionsForSpecificAmountRI();
      //expect(instance).to.be();
    });

    it('should have the property createdTimestamp (base name: "createdTimestamp")', function() {
      // uncomment below and update the code to test the property createdTimestamp
      //var instance = new Cryptoapis.NewConfirmedTokenTransactionsForSpecificAmountRI();
      //expect(instance).to.be();
    });

    it('should have the property eventType (base name: "eventType")', function() {
      // uncomment below and update the code to test the property eventType
      //var instance = new Cryptoapis.NewConfirmedTokenTransactionsForSpecificAmountRI();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "isActive")', function() {
      // uncomment below and update the code to test the property isActive
      //var instance = new Cryptoapis.NewConfirmedTokenTransactionsForSpecificAmountRI();
      //expect(instance).to.be();
    });

    it('should have the property referenceId (base name: "referenceId")', function() {
      // uncomment below and update the code to test the property referenceId
      //var instance = new Cryptoapis.NewConfirmedTokenTransactionsForSpecificAmountRI();
      //expect(instance).to.be();
    });

  });

}));
