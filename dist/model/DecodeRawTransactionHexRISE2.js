"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The DecodeRawTransactionHexRISE2 model module.
 * @module model/DecodeRawTransactionHexRISE2
 * @version 1.11.0
 */
var DecodeRawTransactionHexRISE2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeRawTransactionHexRISE2</code>.
   * Ethereum Classic
   * @alias module:model/DecodeRawTransactionHexRISE2
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param recipient {String} The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
   * @param sender {String} Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
   * @param type {Number} Specifies the transaction type as one from three options: if response returns a `\"0\"` it means the raw transaction includes legacy transaction data, if it is `\"1\"` - includes access lists for EIP2930, and if it is `\"2\"` - EIP1559 data.
   */
  function DecodeRawTransactionHexRISE2(gasLimit, nonce, recipient, sender, type) {
    _classCallCheck(this, DecodeRawTransactionHexRISE2);
    DecodeRawTransactionHexRISE2.initialize(this, gasLimit, nonce, recipient, sender, type);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(DecodeRawTransactionHexRISE2, null, [{
    key: "initialize",
    value: function initialize(obj, gasLimit, nonce, recipient, sender, type) {
      obj['gasLimit'] = gasLimit;
      obj['nonce'] = nonce;
      obj['recipient'] = recipient;
      obj['sender'] = sender;
      obj['type'] = type;
    }

    /**
     * Constructs a <code>DecodeRawTransactionHexRISE2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISE2} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISE2} The populated <code>DecodeRawTransactionHexRISE2</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodeRawTransactionHexRISE2();
        if (data.hasOwnProperty('approximateFee')) {
          obj['approximateFee'] = _ApiClient["default"].convertToType(data['approximateFee'], 'String');
        }
        if (data.hasOwnProperty('approximateMinimumRequiredFee')) {
          obj['approximateMinimumRequiredFee'] = _ApiClient["default"].convertToType(data['approximateMinimumRequiredFee'], 'String');
        }
        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }
        if (data.hasOwnProperty('gasPaidForData')) {
          obj['gasPaidForData'] = _ApiClient["default"].convertToType(data['gasPaidForData'], 'String');
        }
        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _ApiClient["default"].convertToType(data['gasPrice'], 'String');
        }
        if (data.hasOwnProperty('inputData')) {
          obj['inputData'] = _ApiClient["default"].convertToType(data['inputData'], 'String');
        }
        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'Number');
        }
        if (data.hasOwnProperty('r')) {
          obj['r'] = _ApiClient["default"].convertToType(data['r'], 'String');
        }
        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _ApiClient["default"].convertToType(data['recipient'], 'String');
        }
        if (data.hasOwnProperty('s')) {
          obj['s'] = _ApiClient["default"].convertToType(data['s'], 'String');
        }
        if (data.hasOwnProperty('sender')) {
          obj['sender'] = _ApiClient["default"].convertToType(data['sender'], 'String');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'Number');
        }
        if (data.hasOwnProperty('v')) {
          obj['v'] = _ApiClient["default"].convertToType(data['v'], 'String');
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DecodeRawTransactionHexRISE2</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DecodeRawTransactionHexRISE2</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(DecodeRawTransactionHexRISE2.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['approximateFee'] && !(typeof data['approximateFee'] === 'string' || data['approximateFee'] instanceof String)) {
        throw new Error("Expected the field `approximateFee` to be a primitive type in the JSON string but got " + data['approximateFee']);
      }
      // ensure the json data is a string
      if (data['approximateMinimumRequiredFee'] && !(typeof data['approximateMinimumRequiredFee'] === 'string' || data['approximateMinimumRequiredFee'] instanceof String)) {
        throw new Error("Expected the field `approximateMinimumRequiredFee` to be a primitive type in the JSON string but got " + data['approximateMinimumRequiredFee']);
      }
      // ensure the json data is a string
      if (data['gasLimit'] && !(typeof data['gasLimit'] === 'string' || data['gasLimit'] instanceof String)) {
        throw new Error("Expected the field `gasLimit` to be a primitive type in the JSON string but got " + data['gasLimit']);
      }
      // ensure the json data is a string
      if (data['gasPaidForData'] && !(typeof data['gasPaidForData'] === 'string' || data['gasPaidForData'] instanceof String)) {
        throw new Error("Expected the field `gasPaidForData` to be a primitive type in the JSON string but got " + data['gasPaidForData']);
      }
      // ensure the json data is a string
      if (data['gasPrice'] && !(typeof data['gasPrice'] === 'string' || data['gasPrice'] instanceof String)) {
        throw new Error("Expected the field `gasPrice` to be a primitive type in the JSON string but got " + data['gasPrice']);
      }
      // ensure the json data is a string
      if (data['inputData'] && !(typeof data['inputData'] === 'string' || data['inputData'] instanceof String)) {
        throw new Error("Expected the field `inputData` to be a primitive type in the JSON string but got " + data['inputData']);
      }
      // ensure the json data is a string
      if (data['r'] && !(typeof data['r'] === 'string' || data['r'] instanceof String)) {
        throw new Error("Expected the field `r` to be a primitive type in the JSON string but got " + data['r']);
      }
      // ensure the json data is a string
      if (data['recipient'] && !(typeof data['recipient'] === 'string' || data['recipient'] instanceof String)) {
        throw new Error("Expected the field `recipient` to be a primitive type in the JSON string but got " + data['recipient']);
      }
      // ensure the json data is a string
      if (data['s'] && !(typeof data['s'] === 'string' || data['s'] instanceof String)) {
        throw new Error("Expected the field `s` to be a primitive type in the JSON string but got " + data['s']);
      }
      // ensure the json data is a string
      if (data['sender'] && !(typeof data['sender'] === 'string' || data['sender'] instanceof String)) {
        throw new Error("Expected the field `sender` to be a primitive type in the JSON string but got " + data['sender']);
      }
      // ensure the json data is a string
      if (data['v'] && !(typeof data['v'] === 'string' || data['v'] instanceof String)) {
        throw new Error("Expected the field `v` to be a primitive type in the JSON string but got " + data['v']);
      }
      // ensure the json data is a string
      if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
        throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
      }
      return true;
    }
  }]);
  return DecodeRawTransactionHexRISE2;
}();
DecodeRawTransactionHexRISE2.RequiredProperties = ["gasLimit", "nonce", "recipient", "sender", "type"];

/**
 * Defines the approximate fee value. When isConfirmed is True - Defines the amount of the transaction fee When isConfirmed is False - For ETH-based blockchains this attribute represents the max fee value.
 * @member {String} approximateFee
 */
DecodeRawTransactionHexRISE2.prototype['approximateFee'] = undefined;

/**
 * Defines the approximate minimum fee that is required for the transaction.
 * @member {String} approximateMinimumRequiredFee
 */
DecodeRawTransactionHexRISE2.prototype['approximateMinimumRequiredFee'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
DecodeRawTransactionHexRISE2.prototype['gasLimit'] = undefined;

/**
 * Represents the amount of gas paid for the data in the transaction.
 * @member {String} gasPaidForData
 */
DecodeRawTransactionHexRISE2.prototype['gasPaidForData'] = undefined;

/**
 * Represents the price offered to the miner to purchase this amount of gas.
 * @member {String} gasPrice
 */
DecodeRawTransactionHexRISE2.prototype['gasPrice'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
DecodeRawTransactionHexRISE2.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
DecodeRawTransactionHexRISE2.prototype['nonce'] = undefined;

/**
 * Represents output of an ECDSA signature.
 * @member {String} r
 */
DecodeRawTransactionHexRISE2.prototype['r'] = undefined;

/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} recipient
 */
DecodeRawTransactionHexRISE2.prototype['recipient'] = undefined;

/**
 * Represents output of an ECDSA signature.
 * @member {String} s
 */
DecodeRawTransactionHexRISE2.prototype['s'] = undefined;

/**
 * Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
 * @member {String} sender
 */
DecodeRawTransactionHexRISE2.prototype['sender'] = undefined;

/**
 * Specifies the transaction type as one from three options: if response returns a `\"0\"` it means the raw transaction includes legacy transaction data, if it is `\"1\"` - includes access lists for EIP2930, and if it is `\"2\"` - EIP1559 data.
 * @member {Number} type
 */
DecodeRawTransactionHexRISE2.prototype['type'] = undefined;

/**
 * Defines the the recovery id.
 * @member {String} v
 */
DecodeRawTransactionHexRISE2.prototype['v'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
DecodeRawTransactionHexRISE2.prototype['value'] = undefined;
var _default = DecodeRawTransactionHexRISE2;
exports["default"] = _default;