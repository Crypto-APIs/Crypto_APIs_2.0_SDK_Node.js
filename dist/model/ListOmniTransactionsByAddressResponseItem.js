"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListOmniTransactionsByAddressResponseItemFee = _interopRequireDefault(require("./ListOmniTransactionsByAddressResponseItemFee"));

var _ListOmniTransactionsByAddressResponseItemRecipients = _interopRequireDefault(require("./ListOmniTransactionsByAddressResponseItemRecipients"));

var _ListOmniTransactionsByAddressResponseItemSenders = _interopRequireDefault(require("./ListOmniTransactionsByAddressResponseItemSenders"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListOmniTransactionsByAddressResponseItem model module.
 * @module model/ListOmniTransactionsByAddressResponseItem
 * @version 2.0.0
 */
var ListOmniTransactionsByAddressResponseItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListOmniTransactionsByAddressResponseItem</code>.
   * @alias module:model/ListOmniTransactionsByAddressResponseItem
   * @param amount {String} Defines the amount of the sent tokens.
   * @param divisible {Boolean} Defines whether the attribute can be divisible or not, as boolean. E.g., if it is \"true\", the attribute is divisible.
   * @param minedInBlockHash {String} Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
   * @param minedInBlockHeight {Number} Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
   * @param propertyId {Number} Represents the identifier of the tokens to send.
   * @param recipients {Array.<module:model/ListOmniTransactionsByAddressResponseItemRecipients>} Represents an object of addresses that receive the transactions.
   * @param senders {Array.<module:model/ListOmniTransactionsByAddressResponseItemSenders>} Represents an object of addresses that provide the funds.
   * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
   * @param transactionId {String} Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
   * @param type {String} Defines the type of the transaction as a string.
   * @param typeInt {Number} Defines the type of the transaction as a number.
   * @param valid {Boolean} Defines whether the transaction is valid or not, as boolean. E.g. if set to \"true\", it means the transaction is valid.
   * @param version {Number} Defines the specific version.
   * @param fee {module:model/ListOmniTransactionsByAddressResponseItemFee} 
   */
  function ListOmniTransactionsByAddressResponseItem(amount, divisible, minedInBlockHash, minedInBlockHeight, propertyId, recipients, senders, timestamp, transactionId, type, typeInt, valid, version, fee) {
    _classCallCheck(this, ListOmniTransactionsByAddressResponseItem);

    ListOmniTransactionsByAddressResponseItem.initialize(this, amount, divisible, minedInBlockHash, minedInBlockHeight, propertyId, recipients, senders, timestamp, transactionId, type, typeInt, valid, version, fee);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListOmniTransactionsByAddressResponseItem, null, [{
    key: "initialize",
    value: function initialize(obj, amount, divisible, minedInBlockHash, minedInBlockHeight, propertyId, recipients, senders, timestamp, transactionId, type, typeInt, valid, version, fee) {
      obj['amount'] = amount;
      obj['divisible'] = divisible;
      obj['minedInBlockHash'] = minedInBlockHash;
      obj['minedInBlockHeight'] = minedInBlockHeight;
      obj['propertyId'] = propertyId;
      obj['recipients'] = recipients;
      obj['senders'] = senders;
      obj['timestamp'] = timestamp;
      obj['transactionId'] = transactionId;
      obj['type'] = type;
      obj['typeInt'] = typeInt;
      obj['valid'] = valid;
      obj['version'] = version;
      obj['fee'] = fee;
    }
    /**
     * Constructs a <code>ListOmniTransactionsByAddressResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListOmniTransactionsByAddressResponseItem} obj Optional instance to populate.
     * @return {module:model/ListOmniTransactionsByAddressResponseItem} The populated <code>ListOmniTransactionsByAddressResponseItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListOmniTransactionsByAddressResponseItem();

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }

        if (data.hasOwnProperty('divisible')) {
          obj['divisible'] = _ApiClient["default"].convertToType(data['divisible'], 'Boolean');
        }

        if (data.hasOwnProperty('minedInBlockHash')) {
          obj['minedInBlockHash'] = _ApiClient["default"].convertToType(data['minedInBlockHash'], 'String');
        }

        if (data.hasOwnProperty('minedInBlockHeight')) {
          obj['minedInBlockHeight'] = _ApiClient["default"].convertToType(data['minedInBlockHeight'], 'Number');
        }

        if (data.hasOwnProperty('propertyId')) {
          obj['propertyId'] = _ApiClient["default"].convertToType(data['propertyId'], 'Number');
        }

        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_ListOmniTransactionsByAddressResponseItemRecipients["default"]]);
        }

        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _ApiClient["default"].convertToType(data['senders'], [_ListOmniTransactionsByAddressResponseItemSenders["default"]]);
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }

        if (data.hasOwnProperty('transactionId')) {
          obj['transactionId'] = _ApiClient["default"].convertToType(data['transactionId'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('typeInt')) {
          obj['typeInt'] = _ApiClient["default"].convertToType(data['typeInt'], 'Number');
        }

        if (data.hasOwnProperty('valid')) {
          obj['valid'] = _ApiClient["default"].convertToType(data['valid'], 'Boolean');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _ListOmniTransactionsByAddressResponseItemFee["default"].constructFromObject(data['fee']);
        }
      }

      return obj;
    }
  }]);

  return ListOmniTransactionsByAddressResponseItem;
}();
/**
 * Defines the amount of the sent tokens.
 * @member {String} amount
 */


ListOmniTransactionsByAddressResponseItem.prototype['amount'] = undefined;
/**
 * Defines whether the attribute can be divisible or not, as boolean. E.g., if it is \"true\", the attribute is divisible.
 * @member {Boolean} divisible
 */

ListOmniTransactionsByAddressResponseItem.prototype['divisible'] = undefined;
/**
 * Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */

ListOmniTransactionsByAddressResponseItem.prototype['minedInBlockHash'] = undefined;
/**
 * Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
 * @member {Number} minedInBlockHeight
 */

ListOmniTransactionsByAddressResponseItem.prototype['minedInBlockHeight'] = undefined;
/**
 * Represents the identifier of the tokens to send.
 * @member {Number} propertyId
 */

ListOmniTransactionsByAddressResponseItem.prototype['propertyId'] = undefined;
/**
 * Represents an object of addresses that receive the transactions.
 * @member {Array.<module:model/ListOmniTransactionsByAddressResponseItemRecipients>} recipients
 */

ListOmniTransactionsByAddressResponseItem.prototype['recipients'] = undefined;
/**
 * Represents an object of addresses that provide the funds.
 * @member {Array.<module:model/ListOmniTransactionsByAddressResponseItemSenders>} senders
 */

ListOmniTransactionsByAddressResponseItem.prototype['senders'] = undefined;
/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */

ListOmniTransactionsByAddressResponseItem.prototype['timestamp'] = undefined;
/**
 * Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
 * @member {String} transactionId
 */

ListOmniTransactionsByAddressResponseItem.prototype['transactionId'] = undefined;
/**
 * Defines the type of the transaction as a string.
 * @member {String} type
 */

ListOmniTransactionsByAddressResponseItem.prototype['type'] = undefined;
/**
 * Defines the type of the transaction as a number.
 * @member {Number} typeInt
 */

ListOmniTransactionsByAddressResponseItem.prototype['typeInt'] = undefined;
/**
 * Defines whether the transaction is valid or not, as boolean. E.g. if set to \"true\", it means the transaction is valid.
 * @member {Boolean} valid
 */

ListOmniTransactionsByAddressResponseItem.prototype['valid'] = undefined;
/**
 * Defines the specific version.
 * @member {Number} version
 */

ListOmniTransactionsByAddressResponseItem.prototype['version'] = undefined;
/**
 * @member {module:model/ListOmniTransactionsByAddressResponseItemFee} fee
 */

ListOmniTransactionsByAddressResponseItem.prototype['fee'] = undefined;
var _default = ListOmniTransactionsByAddressResponseItem;
exports["default"] = _default;