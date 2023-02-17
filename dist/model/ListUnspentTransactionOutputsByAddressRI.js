"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListUnspentTransactionOutputsByAddressRI model module.
 * @module model/ListUnspentTransactionOutputsByAddressRI
 * @version 1.13.0
 */
var ListUnspentTransactionOutputsByAddressRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListUnspentTransactionOutputsByAddressRI</code>.
   * @alias module:model/ListUnspentTransactionOutputsByAddressRI
   * @param address {String} Represents the address that has unspend funds per which the result is returned.
   * @param amount {String} Represents the sent/received amount.
   * @param index {Number} Represents the index position of the transaction in the block.
   * @param isAvailable {Boolean} Represents if the UTXO has been used from another unconfirmed transaction. If it is - the value will be \"false\".
   * @param isConfirmed {Boolean} Represents the state of the transaction whether it is confirmed or not confirmed.
   * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
   * @param transactionId {String} Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
   */
  function ListUnspentTransactionOutputsByAddressRI(address, amount, index, isAvailable, isConfirmed, timestamp, transactionId) {
    _classCallCheck(this, ListUnspentTransactionOutputsByAddressRI);
    ListUnspentTransactionOutputsByAddressRI.initialize(this, address, amount, index, isAvailable, isConfirmed, timestamp, transactionId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListUnspentTransactionOutputsByAddressRI, null, [{
    key: "initialize",
    value: function initialize(obj, address, amount, index, isAvailable, isConfirmed, timestamp, transactionId) {
      obj['address'] = address;
      obj['amount'] = amount;
      obj['index'] = index;
      obj['isAvailable'] = isAvailable;
      obj['isConfirmed'] = isConfirmed;
      obj['timestamp'] = timestamp;
      obj['transactionId'] = transactionId;
    }

    /**
     * Constructs a <code>ListUnspentTransactionOutputsByAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnspentTransactionOutputsByAddressRI} obj Optional instance to populate.
     * @return {module:model/ListUnspentTransactionOutputsByAddressRI} The populated <code>ListUnspentTransactionOutputsByAddressRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListUnspentTransactionOutputsByAddressRI();
        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
        if (data.hasOwnProperty('index')) {
          obj['index'] = _ApiClient["default"].convertToType(data['index'], 'Number');
        }
        if (data.hasOwnProperty('isAvailable')) {
          obj['isAvailable'] = _ApiClient["default"].convertToType(data['isAvailable'], 'Boolean');
        }
        if (data.hasOwnProperty('isConfirmed')) {
          obj['isConfirmed'] = _ApiClient["default"].convertToType(data['isConfirmed'], 'Boolean');
        }
        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }
        if (data.hasOwnProperty('transactionId')) {
          obj['transactionId'] = _ApiClient["default"].convertToType(data['transactionId'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ListUnspentTransactionOutputsByAddressRI;
}();
/**
 * Represents the address that has unspend funds per which the result is returned.
 * @member {String} address
 */
ListUnspentTransactionOutputsByAddressRI.prototype['address'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} amount
 */
ListUnspentTransactionOutputsByAddressRI.prototype['amount'] = undefined;

/**
 * Represents the index position of the transaction in the block.
 * @member {Number} index
 */
ListUnspentTransactionOutputsByAddressRI.prototype['index'] = undefined;

/**
 * Represents if the UTXO has been used from another unconfirmed transaction. If it is - the value will be \"false\".
 * @member {Boolean} isAvailable
 */
ListUnspentTransactionOutputsByAddressRI.prototype['isAvailable'] = undefined;

/**
 * Represents the state of the transaction whether it is confirmed or not confirmed.
 * @member {Boolean} isConfirmed
 */
ListUnspentTransactionOutputsByAddressRI.prototype['isConfirmed'] = undefined;

/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */
ListUnspentTransactionOutputsByAddressRI.prototype['timestamp'] = undefined;

/**
 * Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
 * @member {String} transactionId
 */
ListUnspentTransactionOutputsByAddressRI.prototype['transactionId'] = undefined;
var _default = ListUnspentTransactionOutputsByAddressRI;
exports["default"] = _default;