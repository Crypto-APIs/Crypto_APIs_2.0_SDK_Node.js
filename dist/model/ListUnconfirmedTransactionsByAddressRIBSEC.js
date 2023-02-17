"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListUnconfirmedTransactionsByAddressRIBSECFee = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSECFee"));
var _ListUnconfirmedTransactionsByAddressRIBSECGasPrice = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSECGasPrice"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListUnconfirmedTransactionsByAddressRIBSEC model module.
 * @module model/ListUnconfirmedTransactionsByAddressRIBSEC
 * @version 1.13.0
 */
var ListUnconfirmedTransactionsByAddressRIBSEC = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListUnconfirmedTransactionsByAddressRIBSEC</code>.
   * Ethereum Classic
   * @alias module:model/ListUnconfirmedTransactionsByAddressRIBSEC
   * @param fee {module:model/ListUnconfirmedTransactionsByAddressRIBSECFee} 
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {module:model/ListUnconfirmedTransactionsByAddressRIBSECGasPrice} 
   * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param transactionStatus {String} String representation of the transaction status
   */
  function ListUnconfirmedTransactionsByAddressRIBSEC(fee, gasLimit, gasPrice, nonce, transactionStatus) {
    _classCallCheck(this, ListUnconfirmedTransactionsByAddressRIBSEC);
    ListUnconfirmedTransactionsByAddressRIBSEC.initialize(this, fee, gasLimit, gasPrice, nonce, transactionStatus);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListUnconfirmedTransactionsByAddressRIBSEC, null, [{
    key: "initialize",
    value: function initialize(obj, fee, gasLimit, gasPrice, nonce, transactionStatus) {
      obj['fee'] = fee;
      obj['gasLimit'] = gasLimit;
      obj['gasPrice'] = gasPrice;
      obj['nonce'] = nonce;
      obj['transactionStatus'] = transactionStatus;
    }

    /**
     * Constructs a <code>ListUnconfirmedTransactionsByAddressRIBSEC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnconfirmedTransactionsByAddressRIBSEC} obj Optional instance to populate.
     * @return {module:model/ListUnconfirmedTransactionsByAddressRIBSEC} The populated <code>ListUnconfirmedTransactionsByAddressRIBSEC</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListUnconfirmedTransactionsByAddressRIBSEC();
        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _ListUnconfirmedTransactionsByAddressRIBSECFee["default"].constructFromObject(data['fee']);
        }
        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }
        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _ListUnconfirmedTransactionsByAddressRIBSECGasPrice["default"].constructFromObject(data['gasPrice']);
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
  return ListUnconfirmedTransactionsByAddressRIBSEC;
}();
/**
 * @member {module:model/ListUnconfirmedTransactionsByAddressRIBSECFee} fee
 */
ListUnconfirmedTransactionsByAddressRIBSEC.prototype['fee'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListUnconfirmedTransactionsByAddressRIBSEC.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/ListUnconfirmedTransactionsByAddressRIBSECGasPrice} gasPrice
 */
ListUnconfirmedTransactionsByAddressRIBSEC.prototype['gasPrice'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListUnconfirmedTransactionsByAddressRIBSEC.prototype['nonce'] = undefined;

/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
ListUnconfirmedTransactionsByAddressRIBSEC.prototype['transactionStatus'] = undefined;
var _default = ListUnconfirmedTransactionsByAddressRIBSEC;
exports["default"] = _default;