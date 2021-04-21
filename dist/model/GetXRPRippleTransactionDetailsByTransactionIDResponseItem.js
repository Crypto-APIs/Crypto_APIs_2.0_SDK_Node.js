"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetXRPRippleTransactionDetailsByTransactionIDResponseItemFee = _interopRequireDefault(require("./GetXRPRippleTransactionDetailsByTransactionIDResponseItemFee"));

var _GetXRPRippleTransactionDetailsByTransactionIDResponseItemOffer = _interopRequireDefault(require("./GetXRPRippleTransactionDetailsByTransactionIDResponseItemOffer"));

var _GetXRPRippleTransactionDetailsByTransactionIDResponseItemReceive = _interopRequireDefault(require("./GetXRPRippleTransactionDetailsByTransactionIDResponseItemReceive"));

var _GetXRPRippleTransactionDetailsByTransactionIDResponseItemRecipients = _interopRequireDefault(require("./GetXRPRippleTransactionDetailsByTransactionIDResponseItemRecipients"));

var _GetXRPRippleTransactionDetailsByTransactionIDResponseItemSenders = _interopRequireDefault(require("./GetXRPRippleTransactionDetailsByTransactionIDResponseItemSenders"));

var _GetXRPRippleTransactionDetailsByTransactionIDResponseItemValue = _interopRequireDefault(require("./GetXRPRippleTransactionDetailsByTransactionIDResponseItemValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetXRPRippleTransactionDetailsByTransactionIDResponseItem model module.
 * @module model/GetXRPRippleTransactionDetailsByTransactionIDResponseItem
 * @version 2.0.0
 */
var GetXRPRippleTransactionDetailsByTransactionIDResponseItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetXRPRippleTransactionDetailsByTransactionIDResponseItem</code>.
   * @alias module:model/GetXRPRippleTransactionDetailsByTransactionIDResponseItem
   * @param additionalData {String} Represents additional data that may be needed.
   * @param index {String} Defines the index of the transaction, i.e. the consecutive place it takes in the blockchain.
   * @param minedInBlockHash {String} Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
   * @param minedInBlockHeight {String} Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
   * @param offer {module:model/GetXRPRippleTransactionDetailsByTransactionIDResponseItemOffer} 
   * @param receive {module:model/GetXRPRippleTransactionDetailsByTransactionIDResponseItemReceive} 
   * @param recipients {Array.<module:model/GetXRPRippleTransactionDetailsByTransactionIDResponseItemRecipients>} Represents an object of addresses that receive the transactions.
   * @param senders {Array.<module:model/GetXRPRippleTransactionDetailsByTransactionIDResponseItemSenders>} Represents an object of addresses that provide the funds.
   * @param sequence {Number} Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
   * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
   * @param transactionHash {String} Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
   * @param type {String} Defines the type of the transaction.
   * @param fee {module:model/GetXRPRippleTransactionDetailsByTransactionIDResponseItemFee} 
   * @param value {module:model/GetXRPRippleTransactionDetailsByTransactionIDResponseItemValue} 
   */
  function GetXRPRippleTransactionDetailsByTransactionIDResponseItem(additionalData, index, minedInBlockHash, minedInBlockHeight, offer, receive, recipients, senders, sequence, timestamp, transactionHash, type, fee, value) {
    _classCallCheck(this, GetXRPRippleTransactionDetailsByTransactionIDResponseItem);

    GetXRPRippleTransactionDetailsByTransactionIDResponseItem.initialize(this, additionalData, index, minedInBlockHash, minedInBlockHeight, offer, receive, recipients, senders, sequence, timestamp, transactionHash, type, fee, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetXRPRippleTransactionDetailsByTransactionIDResponseItem, null, [{
    key: "initialize",
    value: function initialize(obj, additionalData, index, minedInBlockHash, minedInBlockHeight, offer, receive, recipients, senders, sequence, timestamp, transactionHash, type, fee, value) {
      obj['additionalData'] = additionalData;
      obj['index'] = index;
      obj['minedInBlockHash'] = minedInBlockHash;
      obj['minedInBlockHeight'] = minedInBlockHeight;
      obj['offer'] = offer;
      obj['receive'] = receive;
      obj['recipients'] = recipients;
      obj['senders'] = senders;
      obj['sequence'] = sequence;
      obj['timestamp'] = timestamp;
      obj['transactionHash'] = transactionHash;
      obj['type'] = type;
      obj['fee'] = fee;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>GetXRPRippleTransactionDetailsByTransactionIDResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetXRPRippleTransactionDetailsByTransactionIDResponseItem} obj Optional instance to populate.
     * @return {module:model/GetXRPRippleTransactionDetailsByTransactionIDResponseItem} The populated <code>GetXRPRippleTransactionDetailsByTransactionIDResponseItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetXRPRippleTransactionDetailsByTransactionIDResponseItem();

        if (data.hasOwnProperty('additionalData')) {
          obj['additionalData'] = _ApiClient["default"].convertToType(data['additionalData'], 'String');
        }

        if (data.hasOwnProperty('index')) {
          obj['index'] = _ApiClient["default"].convertToType(data['index'], 'String');
        }

        if (data.hasOwnProperty('minedInBlockHash')) {
          obj['minedInBlockHash'] = _ApiClient["default"].convertToType(data['minedInBlockHash'], 'String');
        }

        if (data.hasOwnProperty('minedInBlockHeight')) {
          obj['minedInBlockHeight'] = _ApiClient["default"].convertToType(data['minedInBlockHeight'], 'String');
        }

        if (data.hasOwnProperty('offer')) {
          obj['offer'] = _GetXRPRippleTransactionDetailsByTransactionIDResponseItemOffer["default"].constructFromObject(data['offer']);
        }

        if (data.hasOwnProperty('receive')) {
          obj['receive'] = _GetXRPRippleTransactionDetailsByTransactionIDResponseItemReceive["default"].constructFromObject(data['receive']);
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
          obj['fee'] = _GetXRPRippleTransactionDetailsByTransactionIDResponseItemFee["default"].constructFromObject(data['fee']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _GetXRPRippleTransactionDetailsByTransactionIDResponseItemValue["default"].constructFromObject(data['value']);
        }
      }

      return obj;
    }
  }]);

  return GetXRPRippleTransactionDetailsByTransactionIDResponseItem;
}();
/**
 * Represents additional data that may be needed.
 * @member {String} additionalData
 */


GetXRPRippleTransactionDetailsByTransactionIDResponseItem.prototype['additionalData'] = undefined;
/**
 * Defines the index of the transaction, i.e. the consecutive place it takes in the blockchain.
 * @member {String} index
 */

GetXRPRippleTransactionDetailsByTransactionIDResponseItem.prototype['index'] = undefined;
/**
 * Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */

GetXRPRippleTransactionDetailsByTransactionIDResponseItem.prototype['minedInBlockHash'] = undefined;
/**
 * Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
 * @member {String} minedInBlockHeight
 */

GetXRPRippleTransactionDetailsByTransactionIDResponseItem.prototype['minedInBlockHeight'] = undefined;
/**
 * @member {module:model/GetXRPRippleTransactionDetailsByTransactionIDResponseItemOffer} offer
 */

GetXRPRippleTransactionDetailsByTransactionIDResponseItem.prototype['offer'] = undefined;
/**
 * @member {module:model/GetXRPRippleTransactionDetailsByTransactionIDResponseItemReceive} receive
 */

GetXRPRippleTransactionDetailsByTransactionIDResponseItem.prototype['receive'] = undefined;
/**
 * Represents an object of addresses that receive the transactions.
 * @member {Array.<module:model/GetXRPRippleTransactionDetailsByTransactionIDResponseItemRecipients>} recipients
 */

GetXRPRippleTransactionDetailsByTransactionIDResponseItem.prototype['recipients'] = undefined;
/**
 * Represents an object of addresses that provide the funds.
 * @member {Array.<module:model/GetXRPRippleTransactionDetailsByTransactionIDResponseItemSenders>} senders
 */

GetXRPRippleTransactionDetailsByTransactionIDResponseItem.prototype['senders'] = undefined;
/**
 * Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
 * @member {Number} sequence
 */

GetXRPRippleTransactionDetailsByTransactionIDResponseItem.prototype['sequence'] = undefined;
/**
 * Defines the status of the transaction.
 * @member {String} status
 */

GetXRPRippleTransactionDetailsByTransactionIDResponseItem.prototype['status'] = undefined;
/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */

GetXRPRippleTransactionDetailsByTransactionIDResponseItem.prototype['timestamp'] = undefined;
/**
 * Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
 * @member {String} transactionHash
 */

GetXRPRippleTransactionDetailsByTransactionIDResponseItem.prototype['transactionHash'] = undefined;
/**
 * Defines the type of the transaction.
 * @member {String} type
 */

GetXRPRippleTransactionDetailsByTransactionIDResponseItem.prototype['type'] = undefined;
/**
 * @member {module:model/GetXRPRippleTransactionDetailsByTransactionIDResponseItemFee} fee
 */

GetXRPRippleTransactionDetailsByTransactionIDResponseItem.prototype['fee'] = undefined;
/**
 * @member {module:model/GetXRPRippleTransactionDetailsByTransactionIDResponseItemValue} value
 */

GetXRPRippleTransactionDetailsByTransactionIDResponseItem.prototype['value'] = undefined;
var _default = GetXRPRippleTransactionDetailsByTransactionIDResponseItem;
exports["default"] = _default;