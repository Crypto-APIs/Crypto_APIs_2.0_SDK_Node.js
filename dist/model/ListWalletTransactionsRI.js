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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListWalletTransactionsRI model module.
 * @module model/ListWalletTransactionsRI
 * @version 1.13.0
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
  }]);
  return ListWalletTransactionsRI;
}();
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