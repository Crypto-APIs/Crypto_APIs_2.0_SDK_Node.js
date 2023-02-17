"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListXRPRippleTransactionsByBlockHashRIFee = _interopRequireDefault(require("./ListXRPRippleTransactionsByBlockHashRIFee"));
var _ListXRPRippleTransactionsByBlockHashRIOffer = _interopRequireDefault(require("./ListXRPRippleTransactionsByBlockHashRIOffer"));
var _ListXRPRippleTransactionsByBlockHashRIReceive = _interopRequireDefault(require("./ListXRPRippleTransactionsByBlockHashRIReceive"));
var _ListXRPRippleTransactionsByBlockHashRIRecipientsInner = _interopRequireDefault(require("./ListXRPRippleTransactionsByBlockHashRIRecipientsInner"));
var _ListXRPRippleTransactionsByBlockHashRISendersInner = _interopRequireDefault(require("./ListXRPRippleTransactionsByBlockHashRISendersInner"));
var _ListXRPRippleTransactionsByBlockHashRIValue = _interopRequireDefault(require("./ListXRPRippleTransactionsByBlockHashRIValue"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListXRPRippleTransactionsByBlockHashRI model module.
 * @module model/ListXRPRippleTransactionsByBlockHashRI
 * @version 1.13.0
 */
var ListXRPRippleTransactionsByBlockHashRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListXRPRippleTransactionsByBlockHashRI</code>.
   * @alias module:model/ListXRPRippleTransactionsByBlockHashRI
   * @param index {Number} Represents the index position of the transaction in the specific block.
   * @param minedInBlockHeight {Number} Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
   * @param offer {module:model/ListXRPRippleTransactionsByBlockHashRIOffer} 
   * @param recipients {Array.<module:model/ListXRPRippleTransactionsByBlockHashRIRecipientsInner>} Represents an object of addresses that receive the transactions.
   * @param senders {Array.<module:model/ListXRPRippleTransactionsByBlockHashRISendersInner>} Represents an object of addresses that provide the funds.
   * @param sequence {Number} Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
   * @param status {String} Defines the status of the transaction.
   * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
   * @param transactionHash {String} Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
   * @param type {String} Defines the type of the transaction.
   * @param fee {module:model/ListXRPRippleTransactionsByBlockHashRIFee} 
   * @param receive {module:model/ListXRPRippleTransactionsByBlockHashRIReceive} 
   * @param value {module:model/ListXRPRippleTransactionsByBlockHashRIValue} 
   */
  function ListXRPRippleTransactionsByBlockHashRI(index, minedInBlockHeight, offer, recipients, senders, sequence, status, timestamp, transactionHash, type, fee, receive, value) {
    _classCallCheck(this, ListXRPRippleTransactionsByBlockHashRI);
    ListXRPRippleTransactionsByBlockHashRI.initialize(this, index, minedInBlockHeight, offer, recipients, senders, sequence, status, timestamp, transactionHash, type, fee, receive, value);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListXRPRippleTransactionsByBlockHashRI, null, [{
    key: "initialize",
    value: function initialize(obj, index, minedInBlockHeight, offer, recipients, senders, sequence, status, timestamp, transactionHash, type, fee, receive, value) {
      obj['index'] = index;
      obj['minedInBlockHeight'] = minedInBlockHeight;
      obj['offer'] = offer;
      obj['recipients'] = recipients;
      obj['senders'] = senders;
      obj['sequence'] = sequence;
      obj['status'] = status;
      obj['timestamp'] = timestamp;
      obj['transactionHash'] = transactionHash;
      obj['type'] = type;
      obj['fee'] = fee;
      obj['receive'] = receive;
      obj['value'] = value;
    }

    /**
     * Constructs a <code>ListXRPRippleTransactionsByBlockHashRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListXRPRippleTransactionsByBlockHashRI} obj Optional instance to populate.
     * @return {module:model/ListXRPRippleTransactionsByBlockHashRI} The populated <code>ListXRPRippleTransactionsByBlockHashRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListXRPRippleTransactionsByBlockHashRI();
        if (data.hasOwnProperty('additionalData')) {
          obj['additionalData'] = _ApiClient["default"].convertToType(data['additionalData'], 'String');
        }
        if (data.hasOwnProperty('destinationTag')) {
          obj['destinationTag'] = _ApiClient["default"].convertToType(data['destinationTag'], 'Number');
        }
        if (data.hasOwnProperty('index')) {
          obj['index'] = _ApiClient["default"].convertToType(data['index'], 'Number');
        }
        if (data.hasOwnProperty('minedInBlockHeight')) {
          obj['minedInBlockHeight'] = _ApiClient["default"].convertToType(data['minedInBlockHeight'], 'Number');
        }
        if (data.hasOwnProperty('offer')) {
          obj['offer'] = _ListXRPRippleTransactionsByBlockHashRIOffer["default"].constructFromObject(data['offer']);
        }
        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_ListXRPRippleTransactionsByBlockHashRIRecipientsInner["default"]]);
        }
        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _ApiClient["default"].convertToType(data['senders'], [_ListXRPRippleTransactionsByBlockHashRISendersInner["default"]]);
        }
        if (data.hasOwnProperty('sequence')) {
          obj['sequence'] = _ApiClient["default"].convertToType(data['sequence'], 'Number');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }
        if (data.hasOwnProperty('transactionHash')) {
          obj['transactionHash'] = _ApiClient["default"].convertToType(data['transactionHash'], 'String');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _ListXRPRippleTransactionsByBlockHashRIFee["default"].constructFromObject(data['fee']);
        }
        if (data.hasOwnProperty('receive')) {
          obj['receive'] = _ListXRPRippleTransactionsByBlockHashRIReceive["default"].constructFromObject(data['receive']);
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ListXRPRippleTransactionsByBlockHashRIValue["default"].constructFromObject(data['value']);
        }
      }
      return obj;
    }
  }]);
  return ListXRPRippleTransactionsByBlockHashRI;
}();
/**
 * Represents any additional data that may be needed.
 * @member {String} additionalData
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['additionalData'] = undefined;

/**
 * @member {Number} destinationTag
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['destinationTag'] = undefined;

/**
 * Represents the index position of the transaction in the specific block.
 * @member {Number} index
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['index'] = undefined;

/**
 * Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
 * @member {Number} minedInBlockHeight
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['minedInBlockHeight'] = undefined;

/**
 * @member {module:model/ListXRPRippleTransactionsByBlockHashRIOffer} offer
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['offer'] = undefined;

/**
 * Represents an object of addresses that receive the transactions.
 * @member {Array.<module:model/ListXRPRippleTransactionsByBlockHashRIRecipientsInner>} recipients
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['recipients'] = undefined;

/**
 * Represents an object of addresses that provide the funds.
 * @member {Array.<module:model/ListXRPRippleTransactionsByBlockHashRISendersInner>} senders
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['senders'] = undefined;

/**
 * Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
 * @member {Number} sequence
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['sequence'] = undefined;

/**
 * Defines the status of the transaction.
 * @member {String} status
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['status'] = undefined;

/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['timestamp'] = undefined;

/**
 * Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
 * @member {String} transactionHash
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['transactionHash'] = undefined;

/**
 * Defines the type of the transaction.
 * @member {String} type
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['type'] = undefined;

/**
 * @member {module:model/ListXRPRippleTransactionsByBlockHashRIFee} fee
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['fee'] = undefined;

/**
 * @member {module:model/ListXRPRippleTransactionsByBlockHashRIReceive} receive
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['receive'] = undefined;

/**
 * @member {module:model/ListXRPRippleTransactionsByBlockHashRIValue} value
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['value'] = undefined;
var _default = ListXRPRippleTransactionsByBlockHashRI;
exports["default"] = _default;