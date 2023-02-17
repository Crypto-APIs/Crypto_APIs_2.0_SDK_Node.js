"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListUnconfirmedTransactionsByAddressRIBS = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBS"));
var _ListUnconfirmedTransactionsByAddressRIRecipientsInner = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIRecipientsInner"));
var _ListUnconfirmedTransactionsByAddressRISendersInner = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRISendersInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListUnconfirmedTransactionsByAddressRI model module.
 * @module model/ListUnconfirmedTransactionsByAddressRI
 * @version 1.13.0
 */
var ListUnconfirmedTransactionsByAddressRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListUnconfirmedTransactionsByAddressRI</code>.
   * @alias module:model/ListUnconfirmedTransactionsByAddressRI
   * @param recipients {Array.<module:model/ListUnconfirmedTransactionsByAddressRIRecipientsInner>} Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
   * @param senders {Array.<module:model/ListUnconfirmedTransactionsByAddressRISendersInner>} Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
   * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
   * @param transactionHash {String} Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
   * @param transactionId {String} Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
   * @param blockchainSpecific {module:model/ListUnconfirmedTransactionsByAddressRIBS} 
   */
  function ListUnconfirmedTransactionsByAddressRI(recipients, senders, timestamp, transactionHash, transactionId, blockchainSpecific) {
    _classCallCheck(this, ListUnconfirmedTransactionsByAddressRI);
    ListUnconfirmedTransactionsByAddressRI.initialize(this, recipients, senders, timestamp, transactionHash, transactionId, blockchainSpecific);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListUnconfirmedTransactionsByAddressRI, null, [{
    key: "initialize",
    value: function initialize(obj, recipients, senders, timestamp, transactionHash, transactionId, blockchainSpecific) {
      obj['recipients'] = recipients;
      obj['senders'] = senders;
      obj['timestamp'] = timestamp;
      obj['transactionHash'] = transactionHash;
      obj['transactionId'] = transactionId;
      obj['blockchainSpecific'] = blockchainSpecific;
    }

    /**
     * Constructs a <code>ListUnconfirmedTransactionsByAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnconfirmedTransactionsByAddressRI} obj Optional instance to populate.
     * @return {module:model/ListUnconfirmedTransactionsByAddressRI} The populated <code>ListUnconfirmedTransactionsByAddressRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListUnconfirmedTransactionsByAddressRI();
        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_ListUnconfirmedTransactionsByAddressRIRecipientsInner["default"]]);
        }
        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _ApiClient["default"].convertToType(data['senders'], [_ListUnconfirmedTransactionsByAddressRISendersInner["default"]]);
        }
        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }
        if (data.hasOwnProperty('transactionHash')) {
          obj['transactionHash'] = _ApiClient["default"].convertToType(data['transactionHash'], 'String');
        }
        if (data.hasOwnProperty('transactionId')) {
          obj['transactionId'] = _ApiClient["default"].convertToType(data['transactionId'], 'String');
        }
        if (data.hasOwnProperty('blockchainSpecific')) {
          obj['blockchainSpecific'] = _ListUnconfirmedTransactionsByAddressRIBS["default"].constructFromObject(data['blockchainSpecific']);
        }
      }
      return obj;
    }
  }]);
  return ListUnconfirmedTransactionsByAddressRI;
}();
/**
 * Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/ListUnconfirmedTransactionsByAddressRIRecipientsInner>} recipients
 */
ListUnconfirmedTransactionsByAddressRI.prototype['recipients'] = undefined;

/**
 * Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/ListUnconfirmedTransactionsByAddressRISendersInner>} senders
 */
ListUnconfirmedTransactionsByAddressRI.prototype['senders'] = undefined;

/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */
ListUnconfirmedTransactionsByAddressRI.prototype['timestamp'] = undefined;

/**
 * Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
 * @member {String} transactionHash
 */
ListUnconfirmedTransactionsByAddressRI.prototype['transactionHash'] = undefined;

/**
 * Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
 * @member {String} transactionId
 */
ListUnconfirmedTransactionsByAddressRI.prototype['transactionId'] = undefined;

/**
 * @member {module:model/ListUnconfirmedTransactionsByAddressRIBS} blockchainSpecific
 */
ListUnconfirmedTransactionsByAddressRI.prototype['blockchainSpecific'] = undefined;
var _default = ListUnconfirmedTransactionsByAddressRI;
exports["default"] = _default;