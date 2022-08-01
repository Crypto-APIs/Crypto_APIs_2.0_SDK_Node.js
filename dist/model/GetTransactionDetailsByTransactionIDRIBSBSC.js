"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetTransactionDetailsByTransactionIDRIBSBSCGasPrice = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSBSCGasPrice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetTransactionDetailsByTransactionIDRIBSBSC model module.
 * @module model/GetTransactionDetailsByTransactionIDRIBSBSC
 * @version 1.7.2
 */
var GetTransactionDetailsByTransactionIDRIBSBSC = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDRIBSBSC</code>.
   * Binance Smart Chain
   * @alias module:model/GetTransactionDetailsByTransactionIDRIBSBSC
   * @param contract {String} Represents the specific transaction contract
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {module:model/GetTransactionDetailsByTransactionIDRIBSBSCGasPrice} 
   * @param gasUsed {String} Defines the unit of the gas price amount, e.g. BTC, ETH, XRP.
   * @param inputData {String} Represents additional information that is required for the transaction.
   * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   */
  function GetTransactionDetailsByTransactionIDRIBSBSC(contract, gasLimit, gasPrice, gasUsed, inputData, nonce) {
    _classCallCheck(this, GetTransactionDetailsByTransactionIDRIBSBSC);

    GetTransactionDetailsByTransactionIDRIBSBSC.initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetTransactionDetailsByTransactionIDRIBSBSC, null, [{
    key: "initialize",
    value: function initialize(obj, contract, gasLimit, gasPrice, gasUsed, inputData, nonce) {
      obj['contract'] = contract;
      obj['gasLimit'] = gasLimit;
      obj['gasPrice'] = gasPrice;
      obj['gasUsed'] = gasUsed;
      obj['inputData'] = inputData;
      obj['nonce'] = nonce;
    }
    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDRIBSBSC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDRIBSBSC} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDRIBSBSC} The populated <code>GetTransactionDetailsByTransactionIDRIBSBSC</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionDetailsByTransactionIDRIBSBSC();

        if (data.hasOwnProperty('contract')) {
          obj['contract'] = _ApiClient["default"].convertToType(data['contract'], 'String');
        }

        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }

        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _GetTransactionDetailsByTransactionIDRIBSBSCGasPrice["default"].constructFromObject(data['gasPrice']);
        }

        if (data.hasOwnProperty('gasUsed')) {
          obj['gasUsed'] = _ApiClient["default"].convertToType(data['gasUsed'], 'String');
        }

        if (data.hasOwnProperty('inputData')) {
          obj['inputData'] = _ApiClient["default"].convertToType(data['inputData'], 'String');
        }

        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GetTransactionDetailsByTransactionIDRIBSBSC;
}();
/**
 * Represents the specific transaction contract
 * @member {String} contract
 */


GetTransactionDetailsByTransactionIDRIBSBSC.prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

GetTransactionDetailsByTransactionIDRIBSBSC.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSBSCGasPrice} gasPrice
 */

GetTransactionDetailsByTransactionIDRIBSBSC.prototype['gasPrice'] = undefined;
/**
 * Defines the unit of the gas price amount, e.g. BTC, ETH, XRP.
 * @member {String} gasUsed
 */

GetTransactionDetailsByTransactionIDRIBSBSC.prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

GetTransactionDetailsByTransactionIDRIBSBSC.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */

GetTransactionDetailsByTransactionIDRIBSBSC.prototype['nonce'] = undefined;
var _default = GetTransactionDetailsByTransactionIDRIBSBSC;
exports["default"] = _default;