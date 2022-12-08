"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListWalletTransactionsRIFee = _interopRequireDefault(require("./ListWalletTransactionsRIFee"));
var _ListWalletTransactionsRIFungibleTokensInner = _interopRequireDefault(require("./ListWalletTransactionsRIFungibleTokensInner"));
var _ListWalletTransactionsRIInternalTransactionsInner = _interopRequireDefault(require("./ListWalletTransactionsRIInternalTransactionsInner"));
var _ListWalletTransactionsRINonFungibleTokensInner = _interopRequireDefault(require("./ListWalletTransactionsRINonFungibleTokensInner"));
var _ListWalletTransactionsRIRecipientsInner = _interopRequireDefault(require("./ListWalletTransactionsRIRecipientsInner"));
var _ListWalletTransactionsRISendersInner = _interopRequireDefault(require("./ListWalletTransactionsRISendersInner"));
var _ListWalletTransactionsRIValue = _interopRequireDefault(require("./ListWalletTransactionsRIValue"));
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
 * The ListWalletTransactionsRI model module.
 * @module model/ListWalletTransactionsRI
 * @version 1.11.0
 */
var ListWalletTransactionsRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListWalletTransactionsRI</code>.
   * @alias module:model/ListWalletTransactionsRI
   * @param direction {String} Defines the direction of the transaction, e.g. incoming.
   * @param fee {module:model/ListWalletTransactionsRIFee} 
   * @param recipients {Array.<module:model/ListWalletTransactionsRIRecipientsInner>} Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
   * @param senders {Array.<module:model/ListWalletTransactionsRISendersInner>} Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
   * @param status {String} Defines the status of the transaction, if it is confirmed or unconfirmed.
   * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
   * @param transactionId {String} Represents the unique TD of the transaction.
   * @param value {module:model/ListWalletTransactionsRIValue} 
   */
  function ListWalletTransactionsRI(direction, fee, recipients, senders, status, timestamp, transactionId, value) {
    _classCallCheck(this, ListWalletTransactionsRI);
    ListWalletTransactionsRI.initialize(this, direction, fee, recipients, senders, status, timestamp, transactionId, value);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListWalletTransactionsRI, null, [{
    key: "initialize",
    value: function initialize(obj, direction, fee, recipients, senders, status, timestamp, transactionId, value) {
      obj['direction'] = direction;
      obj['fee'] = fee;
      obj['recipients'] = recipients;
      obj['senders'] = senders;
      obj['status'] = status;
      obj['timestamp'] = timestamp;
      obj['transactionId'] = transactionId;
      obj['value'] = value;
    }

    /**
     * Constructs a <code>ListWalletTransactionsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListWalletTransactionsRI} obj Optional instance to populate.
     * @return {module:model/ListWalletTransactionsRI} The populated <code>ListWalletTransactionsRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListWalletTransactionsRI();
        if (data.hasOwnProperty('direction')) {
          obj['direction'] = _ApiClient["default"].convertToType(data['direction'], 'String');
        }
        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _ListWalletTransactionsRIFee["default"].constructFromObject(data['fee']);
        }
        if (data.hasOwnProperty('fungibleTokens')) {
          obj['fungibleTokens'] = _ApiClient["default"].convertToType(data['fungibleTokens'], [_ListWalletTransactionsRIFungibleTokensInner["default"]]);
        }
        if (data.hasOwnProperty('internalTransactions')) {
          obj['internalTransactions'] = _ApiClient["default"].convertToType(data['internalTransactions'], [_ListWalletTransactionsRIInternalTransactionsInner["default"]]);
        }
        if (data.hasOwnProperty('nonFungibleTokens')) {
          obj['nonFungibleTokens'] = _ApiClient["default"].convertToType(data['nonFungibleTokens'], [_ListWalletTransactionsRINonFungibleTokensInner["default"]]);
        }
        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_ListWalletTransactionsRIRecipientsInner["default"]]);
        }
        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _ApiClient["default"].convertToType(data['senders'], [_ListWalletTransactionsRISendersInner["default"]]);
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }
        if (data.hasOwnProperty('transactionId')) {
          obj['transactionId'] = _ApiClient["default"].convertToType(data['transactionId'], 'String');
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ListWalletTransactionsRIValue["default"].constructFromObject(data['value']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListWalletTransactionsRI</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListWalletTransactionsRI</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(ListWalletTransactionsRI.RequiredProperties),
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
      if (data['direction'] && !(typeof data['direction'] === 'string' || data['direction'] instanceof String)) {
        throw new Error("Expected the field `direction` to be a primitive type in the JSON string but got " + data['direction']);
      }
      // validate the optional field `fee`
      if (data['fee']) {
        // data not null
        _ListWalletTransactionsRIFee["default"].validateJSON(data['fee']);
      }
      if (data['fungibleTokens']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['fungibleTokens'])) {
          throw new Error("Expected the field `fungibleTokens` to be an array in the JSON data but got " + data['fungibleTokens']);
        }
        // validate the optional field `fungibleTokens` (array)
        var _iterator2 = _createForOfIteratorHelper(data['fungibleTokens']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _ListWalletTransactionsRIFungibleTokensInner["default"].validateJsonObject(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      if (data['internalTransactions']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['internalTransactions'])) {
          throw new Error("Expected the field `internalTransactions` to be an array in the JSON data but got " + data['internalTransactions']);
        }
        // validate the optional field `internalTransactions` (array)
        var _iterator3 = _createForOfIteratorHelper(data['internalTransactions']),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _item = _step3.value;
            _ListWalletTransactionsRIInternalTransactionsInner["default"].validateJsonObject(_item);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        ;
      }
      if (data['nonFungibleTokens']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['nonFungibleTokens'])) {
          throw new Error("Expected the field `nonFungibleTokens` to be an array in the JSON data but got " + data['nonFungibleTokens']);
        }
        // validate the optional field `nonFungibleTokens` (array)
        var _iterator4 = _createForOfIteratorHelper(data['nonFungibleTokens']),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _item2 = _step4.value;
            _ListWalletTransactionsRINonFungibleTokensInner["default"].validateJsonObject(_item2);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        ;
      }
      if (data['recipients']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['recipients'])) {
          throw new Error("Expected the field `recipients` to be an array in the JSON data but got " + data['recipients']);
        }
        // validate the optional field `recipients` (array)
        var _iterator5 = _createForOfIteratorHelper(data['recipients']),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _item3 = _step5.value;
            _ListWalletTransactionsRIRecipientsInner["default"].validateJsonObject(_item3);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        ;
      }
      if (data['senders']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['senders'])) {
          throw new Error("Expected the field `senders` to be an array in the JSON data but got " + data['senders']);
        }
        // validate the optional field `senders` (array)
        var _iterator6 = _createForOfIteratorHelper(data['senders']),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _item4 = _step6.value;
            _ListWalletTransactionsRISendersInner["default"].validateJsonObject(_item4);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
        throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
      }
      // ensure the json data is a string
      if (data['transactionId'] && !(typeof data['transactionId'] === 'string' || data['transactionId'] instanceof String)) {
        throw new Error("Expected the field `transactionId` to be a primitive type in the JSON string but got " + data['transactionId']);
      }
      // validate the optional field `value`
      if (data['value']) {
        // data not null
        _ListWalletTransactionsRIValue["default"].validateJSON(data['value']);
      }
      return true;
    }
  }]);
  return ListWalletTransactionsRI;
}();
ListWalletTransactionsRI.RequiredProperties = ["direction", "fee", "recipients", "senders", "status", "timestamp", "transactionId", "value"];

/**
 * Defines the direction of the transaction, e.g. incoming.
 * @member {String} direction
 */
ListWalletTransactionsRI.prototype['direction'] = undefined;

/**
 * @member {module:model/ListWalletTransactionsRIFee} fee
 */
ListWalletTransactionsRI.prototype['fee'] = undefined;

/**
 * Represents fungible tokens'es detailed information
 * @member {Array.<module:model/ListWalletTransactionsRIFungibleTokensInner>} fungibleTokens
 */
ListWalletTransactionsRI.prototype['fungibleTokens'] = undefined;

/**
 * @member {Array.<module:model/ListWalletTransactionsRIInternalTransactionsInner>} internalTransactions
 */
ListWalletTransactionsRI.prototype['internalTransactions'] = undefined;

/**
 * Represents non-fungible tokens'es detailed information.
 * @member {Array.<module:model/ListWalletTransactionsRINonFungibleTokensInner>} nonFungibleTokens
 */
ListWalletTransactionsRI.prototype['nonFungibleTokens'] = undefined;

/**
 * Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/ListWalletTransactionsRIRecipientsInner>} recipients
 */
ListWalletTransactionsRI.prototype['recipients'] = undefined;

/**
 * Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/ListWalletTransactionsRISendersInner>} senders
 */
ListWalletTransactionsRI.prototype['senders'] = undefined;

/**
 * Defines the status of the transaction, if it is confirmed or unconfirmed.
 * @member {String} status
 */
ListWalletTransactionsRI.prototype['status'] = undefined;

/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */
ListWalletTransactionsRI.prototype['timestamp'] = undefined;

/**
 * Represents the unique TD of the transaction.
 * @member {String} transactionId
 */
ListWalletTransactionsRI.prototype['transactionId'] = undefined;

/**
 * @member {module:model/ListWalletTransactionsRIValue} value
 */
ListWalletTransactionsRI.prototype['value'] = undefined;
var _default = ListWalletTransactionsRI;
exports["default"] = _default;