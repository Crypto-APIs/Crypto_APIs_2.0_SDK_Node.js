"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListConfirmedTransactionsByAddressRIBSECGasPrice = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSECGasPrice"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListConfirmedTransactionsByAddressRIBSEC model module.
 * @module model/ListConfirmedTransactionsByAddressRIBSEC
 * @version 1.13.0
 */
var ListConfirmedTransactionsByAddressRIBSEC = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListConfirmedTransactionsByAddressRIBSEC</code>.
   * Ethereum Classic
   * @alias module:model/ListConfirmedTransactionsByAddressRIBSEC
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {module:model/ListConfirmedTransactionsByAddressRIBSECGasPrice} 
   * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
   * @param internalTransactionsCount {Number} Represents the total internal transactions count.
   * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param tokenTransfersCount {Number} Represents the total token transfers count.
   * @param transactionStatus {String} String representation of the transaction status
   */
  function ListConfirmedTransactionsByAddressRIBSEC(gasLimit, gasPrice, gasUsed, internalTransactionsCount, nonce, tokenTransfersCount, transactionStatus) {
    _classCallCheck(this, ListConfirmedTransactionsByAddressRIBSEC);
    ListConfirmedTransactionsByAddressRIBSEC.initialize(this, gasLimit, gasPrice, gasUsed, internalTransactionsCount, nonce, tokenTransfersCount, transactionStatus);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListConfirmedTransactionsByAddressRIBSEC, null, [{
    key: "initialize",
    value: function initialize(obj, gasLimit, gasPrice, gasUsed, internalTransactionsCount, nonce, tokenTransfersCount, transactionStatus) {
      obj['gasLimit'] = gasLimit;
      obj['gasPrice'] = gasPrice;
      obj['gasUsed'] = gasUsed;
      obj['internalTransactionsCount'] = internalTransactionsCount;
      obj['nonce'] = nonce;
      obj['tokenTransfersCount'] = tokenTransfersCount;
      obj['transactionStatus'] = transactionStatus;
    }

    /**
     * Constructs a <code>ListConfirmedTransactionsByAddressRIBSEC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTransactionsByAddressRIBSEC} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTransactionsByAddressRIBSEC} The populated <code>ListConfirmedTransactionsByAddressRIBSEC</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListConfirmedTransactionsByAddressRIBSEC();
        if (data.hasOwnProperty('contract')) {
          obj['contract'] = _ApiClient["default"].convertToType(data['contract'], 'String');
        }
        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }
        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _ListConfirmedTransactionsByAddressRIBSECGasPrice["default"].constructFromObject(data['gasPrice']);
        }
        if (data.hasOwnProperty('gasUsed')) {
          obj['gasUsed'] = _ApiClient["default"].convertToType(data['gasUsed'], 'String');
        }
        if (data.hasOwnProperty('inputData')) {
          obj['inputData'] = _ApiClient["default"].convertToType(data['inputData'], 'String');
        }
        if (data.hasOwnProperty('internalTransactionsCount')) {
          obj['internalTransactionsCount'] = _ApiClient["default"].convertToType(data['internalTransactionsCount'], 'Number');
        }
        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'Number');
        }
        if (data.hasOwnProperty('tokenTransfersCount')) {
          obj['tokenTransfersCount'] = _ApiClient["default"].convertToType(data['tokenTransfersCount'], 'Number');
        }
        if (data.hasOwnProperty('transactionStatus')) {
          obj['transactionStatus'] = _ApiClient["default"].convertToType(data['transactionStatus'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ListConfirmedTransactionsByAddressRIBSEC;
}();
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
ListConfirmedTransactionsByAddressRIBSEC.prototype['contract'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListConfirmedTransactionsByAddressRIBSEC.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSECGasPrice} gasPrice
 */
ListConfirmedTransactionsByAddressRIBSEC.prototype['gasPrice'] = undefined;

/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
ListConfirmedTransactionsByAddressRIBSEC.prototype['gasUsed'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListConfirmedTransactionsByAddressRIBSEC.prototype['inputData'] = undefined;

/**
 * Represents the total internal transactions count.
 * @member {Number} internalTransactionsCount
 */
ListConfirmedTransactionsByAddressRIBSEC.prototype['internalTransactionsCount'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListConfirmedTransactionsByAddressRIBSEC.prototype['nonce'] = undefined;

/**
 * Represents the total token transfers count.
 * @member {Number} tokenTransfersCount
 */
ListConfirmedTransactionsByAddressRIBSEC.prototype['tokenTransfersCount'] = undefined;

/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
ListConfirmedTransactionsByAddressRIBSEC.prototype['transactionStatus'] = undefined;
var _default = ListConfirmedTransactionsByAddressRIBSEC;
exports["default"] = _default;