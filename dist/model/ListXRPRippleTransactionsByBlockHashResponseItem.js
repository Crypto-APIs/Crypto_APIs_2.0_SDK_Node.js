"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListXRPRippleTransactionsByBlockHashResponseItemFee = _interopRequireDefault(require("./ListXRPRippleTransactionsByBlockHashResponseItemFee"));

var _ListXRPRippleTransactionsByBlockHashResponseItemOffer = _interopRequireDefault(require("./ListXRPRippleTransactionsByBlockHashResponseItemOffer"));

var _ListXRPRippleTransactionsByBlockHashResponseItemReceive = _interopRequireDefault(require("./ListXRPRippleTransactionsByBlockHashResponseItemReceive"));

var _ListXRPRippleTransactionsByBlockHashResponseItemRecipients = _interopRequireDefault(require("./ListXRPRippleTransactionsByBlockHashResponseItemRecipients"));

var _ListXRPRippleTransactionsByBlockHashResponseItemSenders = _interopRequireDefault(require("./ListXRPRippleTransactionsByBlockHashResponseItemSenders"));

var _ListXRPRippleTransactionsByBlockHashResponseItemValue = _interopRequireDefault(require("./ListXRPRippleTransactionsByBlockHashResponseItemValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListXRPRippleTransactionsByBlockHashResponseItem model module.
 * @module model/ListXRPRippleTransactionsByBlockHashResponseItem
 * @version 2.0.0
 */
var ListXRPRippleTransactionsByBlockHashResponseItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListXRPRippleTransactionsByBlockHashResponseItem</code>.
   * @alias module:model/ListXRPRippleTransactionsByBlockHashResponseItem
   * @param index {Number} Represents the index position of the transaction in the specific block.
   * @param minedInBlockHash {String} Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
   * @param minedInBlockHeight {Number} Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
   * @param recipients {Array.<module:model/ListXRPRippleTransactionsByBlockHashResponseItemRecipients>} Represents an object of addresses that receive the transactions.
   * @param senders {Array.<module:model/ListXRPRippleTransactionsByBlockHashResponseItemSenders>} Represents an object of addresses that provide the funds.
   * @param sequence {Number} Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
   * @param status {String} Defines the status of the transaction.
   * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
   * @param transactionHash {String} Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
   * @param type {String} Defines the type of the transaction.
   * @param fee {module:model/ListXRPRippleTransactionsByBlockHashResponseItemFee} 
   * @param offer {module:model/ListXRPRippleTransactionsByBlockHashResponseItemOffer} 
   * @param receive {module:model/ListXRPRippleTransactionsByBlockHashResponseItemReceive} 
   * @param value {module:model/ListXRPRippleTransactionsByBlockHashResponseItemValue} 
   */
  function ListXRPRippleTransactionsByBlockHashResponseItem(index, minedInBlockHash, minedInBlockHeight, recipients, senders, sequence, status, timestamp, transactionHash, type, fee, offer, receive, value) {
    _classCallCheck(this, ListXRPRippleTransactionsByBlockHashResponseItem);

    ListXRPRippleTransactionsByBlockHashResponseItem.initialize(this, index, minedInBlockHash, minedInBlockHeight, recipients, senders, sequence, status, timestamp, transactionHash, type, fee, offer, receive, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListXRPRippleTransactionsByBlockHashResponseItem, null, [{
    key: "initialize",
    value: function initialize(obj, index, minedInBlockHash, minedInBlockHeight, recipients, senders, sequence, status, timestamp, transactionHash, type, fee, offer, receive, value) {
      obj['index'] = index;
      obj['minedInBlockHash'] = minedInBlockHash;
      obj['minedInBlockHeight'] = minedInBlockHeight;
      obj['recipients'] = recipients;
      obj['senders'] = senders;
      obj['sequence'] = sequence;
      obj['status'] = status;
      obj['timestamp'] = timestamp;
      obj['transactionHash'] = transactionHash;
      obj['type'] = type;
      obj['fee'] = fee;
      obj['offer'] = offer;
      obj['receive'] = receive;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>ListXRPRippleTransactionsByBlockHashResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListXRPRippleTransactionsByBlockHashResponseItem} obj Optional instance to populate.
     * @return {module:model/ListXRPRippleTransactionsByBlockHashResponseItem} The populated <code>ListXRPRippleTransactionsByBlockHashResponseItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListXRPRippleTransactionsByBlockHashResponseItem();

        if (data.hasOwnProperty('additionalData')) {
          obj['additionalData'] = _ApiClient["default"].convertToType(data['additionalData'], 'String');
        }

        if (data.hasOwnProperty('index')) {
          obj['index'] = _ApiClient["default"].convertToType(data['index'], 'Number');
        }

        if (data.hasOwnProperty('minedInBlockHash')) {
          obj['minedInBlockHash'] = _ApiClient["default"].convertToType(data['minedInBlockHash'], 'String');
        }

        if (data.hasOwnProperty('minedInBlockHeight')) {
          obj['minedInBlockHeight'] = _ApiClient["default"].convertToType(data['minedInBlockHeight'], 'Number');
        }

        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_ListXRPRippleTransactionsByBlockHashResponseItemRecipients["default"]]);
        }

        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _ApiClient["default"].convertToType(data['senders'], [_ListXRPRippleTransactionsByBlockHashResponseItemSenders["default"]]);
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
          obj['fee'] = _ListXRPRippleTransactionsByBlockHashResponseItemFee["default"].constructFromObject(data['fee']);
        }

        if (data.hasOwnProperty('offer')) {
          obj['offer'] = _ListXRPRippleTransactionsByBlockHashResponseItemOffer["default"].constructFromObject(data['offer']);
        }

        if (data.hasOwnProperty('receive')) {
          obj['receive'] = _ListXRPRippleTransactionsByBlockHashResponseItemReceive["default"].constructFromObject(data['receive']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ListXRPRippleTransactionsByBlockHashResponseItemValue["default"].constructFromObject(data['value']);
        }
      }

      return obj;
    }
  }]);

  return ListXRPRippleTransactionsByBlockHashResponseItem;
}();
/**
 * Represents any additional data that may be needed.
 * @member {String} additionalData
 */


ListXRPRippleTransactionsByBlockHashResponseItem.prototype['additionalData'] = undefined;
/**
 * Represents the index position of the transaction in the specific block.
 * @member {Number} index
 */

ListXRPRippleTransactionsByBlockHashResponseItem.prototype['index'] = undefined;
/**
 * Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */

ListXRPRippleTransactionsByBlockHashResponseItem.prototype['minedInBlockHash'] = undefined;
/**
 * Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
 * @member {Number} minedInBlockHeight
 */

ListXRPRippleTransactionsByBlockHashResponseItem.prototype['minedInBlockHeight'] = undefined;
/**
 * Represents an object of addresses that receive the transactions.
 * @member {Array.<module:model/ListXRPRippleTransactionsByBlockHashResponseItemRecipients>} recipients
 */

ListXRPRippleTransactionsByBlockHashResponseItem.prototype['recipients'] = undefined;
/**
 * Represents an object of addresses that provide the funds.
 * @member {Array.<module:model/ListXRPRippleTransactionsByBlockHashResponseItemSenders>} senders
 */

ListXRPRippleTransactionsByBlockHashResponseItem.prototype['senders'] = undefined;
/**
 * Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
 * @member {Number} sequence
 */

ListXRPRippleTransactionsByBlockHashResponseItem.prototype['sequence'] = undefined;
/**
 * Defines the status of the transaction.
 * @member {String} status
 */

ListXRPRippleTransactionsByBlockHashResponseItem.prototype['status'] = undefined;
/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */

ListXRPRippleTransactionsByBlockHashResponseItem.prototype['timestamp'] = undefined;
/**
 * Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
 * @member {String} transactionHash
 */

ListXRPRippleTransactionsByBlockHashResponseItem.prototype['transactionHash'] = undefined;
/**
 * Defines the type of the transaction.
 * @member {String} type
 */

ListXRPRippleTransactionsByBlockHashResponseItem.prototype['type'] = undefined;
/**
 * @member {module:model/ListXRPRippleTransactionsByBlockHashResponseItemFee} fee
 */

ListXRPRippleTransactionsByBlockHashResponseItem.prototype['fee'] = undefined;
/**
 * @member {module:model/ListXRPRippleTransactionsByBlockHashResponseItemOffer} offer
 */

ListXRPRippleTransactionsByBlockHashResponseItem.prototype['offer'] = undefined;
/**
 * @member {module:model/ListXRPRippleTransactionsByBlockHashResponseItemReceive} receive
 */

ListXRPRippleTransactionsByBlockHashResponseItem.prototype['receive'] = undefined;
/**
 * @member {module:model/ListXRPRippleTransactionsByBlockHashResponseItemValue} value
 */

ListXRPRippleTransactionsByBlockHashResponseItem.prototype['value'] = undefined;
var _default = ListXRPRippleTransactionsByBlockHashResponseItem;
exports["default"] = _default;