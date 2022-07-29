"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListAllUnconfirmedTransactionsRIBSECFee = _interopRequireDefault(require("./ListAllUnconfirmedTransactionsRIBSECFee"));

var _ListAllUnconfirmedTransactionsRIBSECGasPrice = _interopRequireDefault(require("./ListAllUnconfirmedTransactionsRIBSECGasPrice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListAllUnconfirmedTransactionsRIBSEC model module.
 * @module model/ListAllUnconfirmedTransactionsRIBSEC
 * @version 1.7.1
 */
var ListAllUnconfirmedTransactionsRIBSEC = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAllUnconfirmedTransactionsRIBSEC</code>.
   * Ethereum Classic
   * @alias module:model/ListAllUnconfirmedTransactionsRIBSEC
   * @param fee {module:model/ListAllUnconfirmedTransactionsRIBSECFee} 
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {module:model/ListAllUnconfirmedTransactionsRIBSECGasPrice} 
   * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param transactionStatus {String} Defines the transaction status.
   */
  function ListAllUnconfirmedTransactionsRIBSEC(fee, gasLimit, gasPrice, nonce, transactionStatus) {
    _classCallCheck(this, ListAllUnconfirmedTransactionsRIBSEC);

    ListAllUnconfirmedTransactionsRIBSEC.initialize(this, fee, gasLimit, gasPrice, nonce, transactionStatus);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListAllUnconfirmedTransactionsRIBSEC, null, [{
    key: "initialize",
    value: function initialize(obj, fee, gasLimit, gasPrice, nonce, transactionStatus) {
      obj['fee'] = fee;
      obj['gasLimit'] = gasLimit;
      obj['gasPrice'] = gasPrice;
      obj['nonce'] = nonce;
      obj['transactionStatus'] = transactionStatus;
    }
    /**
     * Constructs a <code>ListAllUnconfirmedTransactionsRIBSEC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllUnconfirmedTransactionsRIBSEC} obj Optional instance to populate.
     * @return {module:model/ListAllUnconfirmedTransactionsRIBSEC} The populated <code>ListAllUnconfirmedTransactionsRIBSEC</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAllUnconfirmedTransactionsRIBSEC();

        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _ListAllUnconfirmedTransactionsRIBSECFee["default"].constructFromObject(data['fee']);
        }

        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }

        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _ListAllUnconfirmedTransactionsRIBSECGasPrice["default"].constructFromObject(data['gasPrice']);
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

  return ListAllUnconfirmedTransactionsRIBSEC;
}();
/**
 * @member {module:model/ListAllUnconfirmedTransactionsRIBSECFee} fee
 */


ListAllUnconfirmedTransactionsRIBSEC.prototype['fee'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

ListAllUnconfirmedTransactionsRIBSEC.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListAllUnconfirmedTransactionsRIBSECGasPrice} gasPrice
 */

ListAllUnconfirmedTransactionsRIBSEC.prototype['gasPrice'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */

ListAllUnconfirmedTransactionsRIBSEC.prototype['nonce'] = undefined;
/**
 * Defines the transaction status.
 * @member {String} transactionStatus
 */

ListAllUnconfirmedTransactionsRIBSEC.prototype['transactionStatus'] = undefined;
var _default = ListAllUnconfirmedTransactionsRIBSEC;
exports["default"] = _default;