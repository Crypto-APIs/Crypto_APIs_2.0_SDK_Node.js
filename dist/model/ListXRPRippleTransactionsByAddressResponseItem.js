"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetXRPRippleTransactionDetailsByTransactionIDResponseItemRecipients = _interopRequireDefault(require("./GetXRPRippleTransactionDetailsByTransactionIDResponseItemRecipients"));

var _GetXRPRippleTransactionDetailsByTransactionIDResponseItemSenders = _interopRequireDefault(require("./GetXRPRippleTransactionDetailsByTransactionIDResponseItemSenders"));

var _ListXRPRippleTransactionsByAddressResponseItemFee = _interopRequireDefault(require("./ListXRPRippleTransactionsByAddressResponseItemFee"));

var _ListXRPRippleTransactionsByAddressResponseItemOffer = _interopRequireDefault(require("./ListXRPRippleTransactionsByAddressResponseItemOffer"));

var _ListXRPRippleTransactionsByAddressResponseItemReceive = _interopRequireDefault(require("./ListXRPRippleTransactionsByAddressResponseItemReceive"));

var _ListXRPRippleTransactionsByAddressResponseItemValue = _interopRequireDefault(require("./ListXRPRippleTransactionsByAddressResponseItemValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListXRPRippleTransactionsByAddressResponseItem model module.
 * @module model/ListXRPRippleTransactionsByAddressResponseItem
 * @version 2.0.0
 */
var ListXRPRippleTransactionsByAddressResponseItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListXRPRippleTransactionsByAddressResponseItem</code>.
   * @alias module:model/ListXRPRippleTransactionsByAddressResponseItem
   * @param additionalData {String} Represents any additional data that may be needed.
   * @param index {Number} Represents the index position of the transaction in the block.
   * @param minedInBlockHash {String} Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
   * @param minedInBlockHeight {Number} Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
   * @param recipients {Array.<module:model/GetXRPRippleTransactionDetailsByTransactionIDResponseItemRecipients>} Represents an object of addresses that receive the transactions.
   * @param senders {Array.<module:model/GetXRPRippleTransactionDetailsByTransactionIDResponseItemSenders>} Represents an object of addresses that provide the funds.
   * @param sequence {Number} Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
   * @param status {String} Defines the status of the transaction.
   * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
   * @param transactionHash {String} Represents the hash of the XRP transaction.
   * @param type {String} Specifies the type of the transaction.
   * @param fee {module:model/ListXRPRippleTransactionsByAddressResponseItemFee} 
   * @param offer {module:model/ListXRPRippleTransactionsByAddressResponseItemOffer} 
   * @param receive {module:model/ListXRPRippleTransactionsByAddressResponseItemReceive} 
   * @param value {module:model/ListXRPRippleTransactionsByAddressResponseItemValue} 
   */
  function ListXRPRippleTransactionsByAddressResponseItem(additionalData, index, minedInBlockHash, minedInBlockHeight, recipients, senders, sequence, status, timestamp, transactionHash, type, fee, offer, receive, value) {
    _classCallCheck(this, ListXRPRippleTransactionsByAddressResponseItem);

    ListXRPRippleTransactionsByAddressResponseItem.initialize(this, additionalData, index, minedInBlockHash, minedInBlockHeight, recipients, senders, sequence, status, timestamp, transactionHash, type, fee, offer, receive, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListXRPRippleTransactionsByAddressResponseItem, null, [{
    key: "initialize",
    value: function initialize(obj, additionalData, index, minedInBlockHash, minedInBlockHeight, recipients, senders, sequence, status, timestamp, transactionHash, type, fee, offer, receive, value) {
      obj['additionalData'] = additionalData;
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
     * Constructs a <code>ListXRPRippleTransactionsByAddressResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListXRPRippleTransactionsByAddressResponseItem} obj Optional instance to populate.
     * @return {module:model/ListXRPRippleTransactionsByAddressResponseItem} The populated <code>ListXRPRippleTransactionsByAddressResponseItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListXRPRippleTransactionsByAddressResponseItem();

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
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_GetXRPRippleTransactionDetailsByTransactionIDResponseItemRecipients["default"]]);
        }

        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _ApiClient["default"].convertToType(data['senders'], [_GetXRPRippleTransactionDetailsByTransactionIDResponseItemSenders["default"]]);
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
          obj['fee'] = _ListXRPRippleTransactionsByAddressResponseItemFee["default"].constructFromObject(data['fee']);
        }

        if (data.hasOwnProperty('offer')) {
          obj['offer'] = _ListXRPRippleTransactionsByAddressResponseItemOffer["default"].constructFromObject(data['offer']);
        }

        if (data.hasOwnProperty('receive')) {
          obj['receive'] = _ListXRPRippleTransactionsByAddressResponseItemReceive["default"].constructFromObject(data['receive']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ListXRPRippleTransactionsByAddressResponseItemValue["default"].constructFromObject(data['value']);
        }
      }

      return obj;
    }
  }]);

  return ListXRPRippleTransactionsByAddressResponseItem;
}();
/**
 * Represents any additional data that may be needed.
 * @member {String} additionalData
 */


ListXRPRippleTransactionsByAddressResponseItem.prototype['additionalData'] = undefined;
/**
 * Represents the index position of the transaction in the block.
 * @member {Number} index
 */

ListXRPRippleTransactionsByAddressResponseItem.prototype['index'] = undefined;
/**
 * Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */

ListXRPRippleTransactionsByAddressResponseItem.prototype['minedInBlockHash'] = undefined;
/**
 * Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
 * @member {Number} minedInBlockHeight
 */

ListXRPRippleTransactionsByAddressResponseItem.prototype['minedInBlockHeight'] = undefined;
/**
 * Represents an object of addresses that receive the transactions.
 * @member {Array.<module:model/GetXRPRippleTransactionDetailsByTransactionIDResponseItemRecipients>} recipients
 */

ListXRPRippleTransactionsByAddressResponseItem.prototype['recipients'] = undefined;
/**
 * Represents an object of addresses that provide the funds.
 * @member {Array.<module:model/GetXRPRippleTransactionDetailsByTransactionIDResponseItemSenders>} senders
 */

ListXRPRippleTransactionsByAddressResponseItem.prototype['senders'] = undefined;
/**
 * Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
 * @member {Number} sequence
 */

ListXRPRippleTransactionsByAddressResponseItem.prototype['sequence'] = undefined;
/**
 * Defines the status of the transaction.
 * @member {String} status
 */

ListXRPRippleTransactionsByAddressResponseItem.prototype['status'] = undefined;
/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */

ListXRPRippleTransactionsByAddressResponseItem.prototype['timestamp'] = undefined;
/**
 * Represents the hash of the XRP transaction.
 * @member {String} transactionHash
 */

ListXRPRippleTransactionsByAddressResponseItem.prototype['transactionHash'] = undefined;
/**
 * Specifies the type of the transaction.
 * @member {String} type
 */

ListXRPRippleTransactionsByAddressResponseItem.prototype['type'] = undefined;
/**
 * @member {module:model/ListXRPRippleTransactionsByAddressResponseItemFee} fee
 */

ListXRPRippleTransactionsByAddressResponseItem.prototype['fee'] = undefined;
/**
 * @member {module:model/ListXRPRippleTransactionsByAddressResponseItemOffer} offer
 */

ListXRPRippleTransactionsByAddressResponseItem.prototype['offer'] = undefined;
/**
 * @member {module:model/ListXRPRippleTransactionsByAddressResponseItemReceive} receive
 */

ListXRPRippleTransactionsByAddressResponseItem.prototype['receive'] = undefined;
/**
 * @member {module:model/ListXRPRippleTransactionsByAddressResponseItemValue} value
 */

ListXRPRippleTransactionsByAddressResponseItem.prototype['value'] = undefined;
var _default = ListXRPRippleTransactionsByAddressResponseItem;
exports["default"] = _default;