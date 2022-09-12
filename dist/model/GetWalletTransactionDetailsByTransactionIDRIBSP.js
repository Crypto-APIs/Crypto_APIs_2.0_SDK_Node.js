"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetWalletTransactionDetailsByTransactionIDRIBSPGasPrice = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRIBSPGasPrice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetWalletTransactionDetailsByTransactionIDRIBSP model module.
 * @module model/GetWalletTransactionDetailsByTransactionIDRIBSP
 * @version 1.8.0
 */
var GetWalletTransactionDetailsByTransactionIDRIBSP = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetWalletTransactionDetailsByTransactionIDRIBSP</code>.
   * Polygon
   * @alias module:model/GetWalletTransactionDetailsByTransactionIDRIBSP
   * @param contract {String} Represents the specific transaction contract
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {module:model/GetWalletTransactionDetailsByTransactionIDRIBSPGasPrice} 
   * @param gasUsed {String} Defines the unit of the gas price amount, e.g. BTC, ETH, XRP.
   * @param inputData {String} Represents additional information that is required for the transaction.
   * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   */
  function GetWalletTransactionDetailsByTransactionIDRIBSP(contract, gasLimit, gasPrice, gasUsed, inputData, nonce) {
    _classCallCheck(this, GetWalletTransactionDetailsByTransactionIDRIBSP);

    GetWalletTransactionDetailsByTransactionIDRIBSP.initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetWalletTransactionDetailsByTransactionIDRIBSP, null, [{
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
     * Constructs a <code>GetWalletTransactionDetailsByTransactionIDRIBSP</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWalletTransactionDetailsByTransactionIDRIBSP} obj Optional instance to populate.
     * @return {module:model/GetWalletTransactionDetailsByTransactionIDRIBSP} The populated <code>GetWalletTransactionDetailsByTransactionIDRIBSP</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetWalletTransactionDetailsByTransactionIDRIBSP();

        if (data.hasOwnProperty('contract')) {
          obj['contract'] = _ApiClient["default"].convertToType(data['contract'], 'String');
        }

        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }

        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _GetWalletTransactionDetailsByTransactionIDRIBSPGasPrice["default"].constructFromObject(data['gasPrice']);
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

  return GetWalletTransactionDetailsByTransactionIDRIBSP;
}();
/**
 * Represents the specific transaction contract
 * @member {String} contract
 */


GetWalletTransactionDetailsByTransactionIDRIBSP.prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

GetWalletTransactionDetailsByTransactionIDRIBSP.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/GetWalletTransactionDetailsByTransactionIDRIBSPGasPrice} gasPrice
 */

GetWalletTransactionDetailsByTransactionIDRIBSP.prototype['gasPrice'] = undefined;
/**
 * Defines the unit of the gas price amount, e.g. BTC, ETH, XRP.
 * @member {String} gasUsed
 */

GetWalletTransactionDetailsByTransactionIDRIBSP.prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

GetWalletTransactionDetailsByTransactionIDRIBSP.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */

GetWalletTransactionDetailsByTransactionIDRIBSP.prototype['nonce'] = undefined;
var _default = GetWalletTransactionDetailsByTransactionIDRIBSP;
exports["default"] = _default;