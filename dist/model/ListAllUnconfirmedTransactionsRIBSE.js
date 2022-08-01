"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListAllUnconfirmedTransactionsRIBSEFee = _interopRequireDefault(require("./ListAllUnconfirmedTransactionsRIBSEFee"));

var _ListAllUnconfirmedTransactionsRIBSEGasPrice = _interopRequireDefault(require("./ListAllUnconfirmedTransactionsRIBSEGasPrice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListAllUnconfirmedTransactionsRIBSE model module.
 * @module model/ListAllUnconfirmedTransactionsRIBSE
 * @version 1.7.2
 */
var ListAllUnconfirmedTransactionsRIBSE = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAllUnconfirmedTransactionsRIBSE</code>.
   * Ethereum
   * @alias module:model/ListAllUnconfirmedTransactionsRIBSE
   * @param fee {module:model/ListAllUnconfirmedTransactionsRIBSEFee} 
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {module:model/ListAllUnconfirmedTransactionsRIBSEGasPrice} 
   * @param inputData {String} Represents additional information that is required for the transaction.
   * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param transactionStatus {String} Defines the transaction status.
   */
  function ListAllUnconfirmedTransactionsRIBSE(fee, gasLimit, gasPrice, inputData, nonce, transactionStatus) {
    _classCallCheck(this, ListAllUnconfirmedTransactionsRIBSE);

    ListAllUnconfirmedTransactionsRIBSE.initialize(this, fee, gasLimit, gasPrice, inputData, nonce, transactionStatus);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListAllUnconfirmedTransactionsRIBSE, null, [{
    key: "initialize",
    value: function initialize(obj, fee, gasLimit, gasPrice, inputData, nonce, transactionStatus) {
      obj['fee'] = fee;
      obj['gasLimit'] = gasLimit;
      obj['gasPrice'] = gasPrice;
      obj['inputData'] = inputData;
      obj['nonce'] = nonce;
      obj['transactionStatus'] = transactionStatus;
    }
    /**
     * Constructs a <code>ListAllUnconfirmedTransactionsRIBSE</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllUnconfirmedTransactionsRIBSE} obj Optional instance to populate.
     * @return {module:model/ListAllUnconfirmedTransactionsRIBSE} The populated <code>ListAllUnconfirmedTransactionsRIBSE</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAllUnconfirmedTransactionsRIBSE();

        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _ListAllUnconfirmedTransactionsRIBSEFee["default"].constructFromObject(data['fee']);
        }

        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }

        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _ListAllUnconfirmedTransactionsRIBSEGasPrice["default"].constructFromObject(data['gasPrice']);
        }

        if (data.hasOwnProperty('inputData')) {
          obj['inputData'] = _ApiClient["default"].convertToType(data['inputData'], 'String');
        }

        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'Number');
        }

        if (data.hasOwnProperty('transactionStatus')) {
          obj['transactionStatus'] = _ApiClient["default"].convertToType(data['transactionStatus'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListAllUnconfirmedTransactionsRIBSE;
}();
/**
 * @member {module:model/ListAllUnconfirmedTransactionsRIBSEFee} fee
 */


ListAllUnconfirmedTransactionsRIBSE.prototype['fee'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

ListAllUnconfirmedTransactionsRIBSE.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListAllUnconfirmedTransactionsRIBSEGasPrice} gasPrice
 */

ListAllUnconfirmedTransactionsRIBSE.prototype['gasPrice'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

ListAllUnconfirmedTransactionsRIBSE.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */

ListAllUnconfirmedTransactionsRIBSE.prototype['nonce'] = undefined;
/**
 * Defines the transaction status.
 * @member {String} transactionStatus
 */

ListAllUnconfirmedTransactionsRIBSE.prototype['transactionStatus'] = undefined;
var _default = ListAllUnconfirmedTransactionsRIBSE;
exports["default"] = _default;