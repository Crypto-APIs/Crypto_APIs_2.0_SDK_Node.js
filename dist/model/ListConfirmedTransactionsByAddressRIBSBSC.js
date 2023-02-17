"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListConfirmedTransactionsByAddressRIBSBSCGasPrice = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSBSCGasPrice"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListConfirmedTransactionsByAddressRIBSBSC model module.
 * @module model/ListConfirmedTransactionsByAddressRIBSBSC
 * @version 1.13.0
 */
var ListConfirmedTransactionsByAddressRIBSBSC = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListConfirmedTransactionsByAddressRIBSBSC</code>.
   * Binance Smart Chain
   * @alias module:model/ListConfirmedTransactionsByAddressRIBSBSC
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {module:model/ListConfirmedTransactionsByAddressRIBSBSCGasPrice} 
   * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
   * @param internalTransactionsCount {Number} Represents the total internal transactions count.
   * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param tokenTransfersCount {Number} Represents the total token transfers count.
   * @param transactionStatus {String} String representation of the transaction status
   */
  function ListConfirmedTransactionsByAddressRIBSBSC(gasLimit, gasPrice, gasUsed, internalTransactionsCount, nonce, tokenTransfersCount, transactionStatus) {
    _classCallCheck(this, ListConfirmedTransactionsByAddressRIBSBSC);
    ListConfirmedTransactionsByAddressRIBSBSC.initialize(this, gasLimit, gasPrice, gasUsed, internalTransactionsCount, nonce, tokenTransfersCount, transactionStatus);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListConfirmedTransactionsByAddressRIBSBSC, null, [{
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
     * Constructs a <code>ListConfirmedTransactionsByAddressRIBSBSC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTransactionsByAddressRIBSBSC} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTransactionsByAddressRIBSBSC} The populated <code>ListConfirmedTransactionsByAddressRIBSBSC</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListConfirmedTransactionsByAddressRIBSBSC();
        if (data.hasOwnProperty('contract')) {
          obj['contract'] = _ApiClient["default"].convertToType(data['contract'], 'String');
        }
        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }
        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _ListConfirmedTransactionsByAddressRIBSBSCGasPrice["default"].constructFromObject(data['gasPrice']);
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
  return ListConfirmedTransactionsByAddressRIBSBSC;
}();
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
ListConfirmedTransactionsByAddressRIBSBSC.prototype['contract'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListConfirmedTransactionsByAddressRIBSBSC.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSBSCGasPrice} gasPrice
 */
ListConfirmedTransactionsByAddressRIBSBSC.prototype['gasPrice'] = undefined;

/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
ListConfirmedTransactionsByAddressRIBSBSC.prototype['gasUsed'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListConfirmedTransactionsByAddressRIBSBSC.prototype['inputData'] = undefined;

/**
 * Represents the total internal transactions count.
 * @member {Number} internalTransactionsCount
 */
ListConfirmedTransactionsByAddressRIBSBSC.prototype['internalTransactionsCount'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListConfirmedTransactionsByAddressRIBSBSC.prototype['nonce'] = undefined;

/**
 * Represents the total token transfers count.
 * @member {Number} tokenTransfersCount
 */
ListConfirmedTransactionsByAddressRIBSBSC.prototype['tokenTransfersCount'] = undefined;

/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
ListConfirmedTransactionsByAddressRIBSBSC.prototype['transactionStatus'] = undefined;
var _default = ListConfirmedTransactionsByAddressRIBSBSC;
exports["default"] = _default;