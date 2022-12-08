"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItemFee = _interopRequireDefault(require("./PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItemFee"));
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
 * The PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem model module.
 * @module model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem
 * @version 1.11.0
 */
var PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem</code>.
   * @alias module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem
   * @param amount {String} Representation of the amount of the transaction
   * @param recipient {String} Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
   * @param sender {String} Represents a  sender address with the respective amount. In account-based protocols like Ethereum there is only one address in this list.
   * @param xpub {String} Defines the account extended publicly known key which is used to derive all child public keys.
   * @param fee {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItemFee} 
   * @param sequence {String} String representation of the sequence
   */
  function PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem(amount, recipient, sender, xpub, fee, sequence) {
    _classCallCheck(this, PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem);
    PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem.initialize(this, amount, recipient, sender, xpub, fee, sequence);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, amount, recipient, sender, xpub, fee, sequence) {
      obj['amount'] = amount;
      obj['recipient'] = recipient;
      obj['sender'] = sender;
      obj['xpub'] = xpub;
      obj['fee'] = fee;
      obj['sequence'] = sequence;
    }

    /**
     * Constructs a <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem} obj Optional instance to populate.
     * @return {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem} The populated <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem();
        if (data.hasOwnProperty('additionalData')) {
          obj['additionalData'] = _ApiClient["default"].convertToType(data['additionalData'], 'String');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _ApiClient["default"].convertToType(data['recipient'], 'String');
        }
        if (data.hasOwnProperty('sender')) {
          obj['sender'] = _ApiClient["default"].convertToType(data['sender'], 'String');
        }
        if (data.hasOwnProperty('xpub')) {
          obj['xpub'] = _ApiClient["default"].convertToType(data['xpub'], 'String');
        }
        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItemFee["default"].constructFromObject(data['fee']);
        }
        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'String');
        }
        if (data.hasOwnProperty('transactionType')) {
          obj['transactionType'] = _ApiClient["default"].convertToType(data['transactionType'], 'String');
        }
        if (data.hasOwnProperty('sequence')) {
          obj['sequence'] = _ApiClient["default"].convertToType(data['sequence'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem.RequiredProperties),
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
      if (data['additionalData'] && !(typeof data['additionalData'] === 'string' || data['additionalData'] instanceof String)) {
        throw new Error("Expected the field `additionalData` to be a primitive type in the JSON string but got " + data['additionalData']);
      }
      // ensure the json data is a string
      if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
        throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
      }
      // ensure the json data is a string
      if (data['recipient'] && !(typeof data['recipient'] === 'string' || data['recipient'] instanceof String)) {
        throw new Error("Expected the field `recipient` to be a primitive type in the JSON string but got " + data['recipient']);
      }
      // ensure the json data is a string
      if (data['sender'] && !(typeof data['sender'] === 'string' || data['sender'] instanceof String)) {
        throw new Error("Expected the field `sender` to be a primitive type in the JSON string but got " + data['sender']);
      }
      // ensure the json data is a string
      if (data['xpub'] && !(typeof data['xpub'] === 'string' || data['xpub'] instanceof String)) {
        throw new Error("Expected the field `xpub` to be a primitive type in the JSON string but got " + data['xpub']);
      }
      // validate the optional field `fee`
      if (data['fee']) {
        // data not null
        _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItemFee["default"].validateJSON(data['fee']);
      }
      // ensure the json data is a string
      if (data['nonce'] && !(typeof data['nonce'] === 'string' || data['nonce'] instanceof String)) {
        throw new Error("Expected the field `nonce` to be a primitive type in the JSON string but got " + data['nonce']);
      }
      // ensure the json data is a string
      if (data['transactionType'] && !(typeof data['transactionType'] === 'string' || data['transactionType'] instanceof String)) {
        throw new Error("Expected the field `transactionType` to be a primitive type in the JSON string but got " + data['transactionType']);
      }
      // ensure the json data is a string
      if (data['sequence'] && !(typeof data['sequence'] === 'string' || data['sequence'] instanceof String)) {
        throw new Error("Expected the field `sequence` to be a primitive type in the JSON string but got " + data['sequence']);
      }
      return true;
    }
  }]);
  return PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem;
}();
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem.RequiredProperties = ["amount", "recipient", "sender", "xpub", "fee", "sequence"];

/**
 * Representation of the additional data.
 * @member {String} additionalData
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem.prototype['additionalData'] = undefined;

/**
 * Representation of the amount of the transaction
 * @member {String} amount
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem.prototype['amount'] = undefined;

/**
 * Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {String} recipient
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem.prototype['recipient'] = undefined;

/**
 * Represents a  sender address with the respective amount. In account-based protocols like Ethereum there is only one address in this list.
 * @member {String} sender
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem.prototype['sender'] = undefined;

/**
 * Defines the account extended publicly known key which is used to derive all child public keys.
 * @member {String} xpub
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem.prototype['xpub'] = undefined;

/**
 * @member {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItemFee} fee
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem.prototype['fee'] = undefined;

/**
 * Representation of the nonce value
 * @member {String} nonce
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem.prototype['nonce'] = undefined;

/**
 * Representation of the transaction type. For Ethereum-Classic and Binance Smart Chain there is no need to provide \"transactionType\" in the request.
 * @member {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem.TransactionTypeEnum} transactionType
 * @default 'gas-fee-market-transaction'
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem.prototype['transactionType'] = 'gas-fee-market-transaction';

/**
 * String representation of the sequence
 * @member {String} sequence
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem.prototype['sequence'] = undefined;

/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem['TransactionTypeEnum'] = {
  /**
   * value: "legacy-transaction"
   * @const
   */
  "legacy-transaction": "legacy-transaction",
  /**
   * value: "access-list-transaction"
   * @const
   */
  "access-list-transaction": "access-list-transaction",
  /**
   * value: "gas-fee-market-transaction"
   * @const
   */
  "gas-fee-market-transaction": "gas-fee-market-transaction"
};
var _default = PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem;
exports["default"] = _default;