"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListOmniTransactionsByBlockHeightRIFee = _interopRequireDefault(require("./ListOmniTransactionsByBlockHeightRIFee"));

var _ListOmniTransactionsByBlockHeightRIRecipients = _interopRequireDefault(require("./ListOmniTransactionsByBlockHeightRIRecipients"));

var _ListOmniTransactionsByBlockHeightRISenders = _interopRequireDefault(require("./ListOmniTransactionsByBlockHeightRISenders"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListOmniTransactionsByBlockHeightRI model module.
 * @module model/ListOmniTransactionsByBlockHeightRI
 * @version 1.3.0
 */
var ListOmniTransactionsByBlockHeightRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListOmniTransactionsByBlockHeightRI</code>.
   * @alias module:model/ListOmniTransactionsByBlockHeightRI
   * @param amount {String} Defines the amount of the sent tokens.
   * @param divisible {Boolean} Defines whether the attribute can be divisible or not, as boolean. E.g., if it is \"true\", the attribute is divisible.
   * @param minedInBlockHash {String} Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
   * @param minedInBlockHeight {Number} Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
   * @param positionInBlock {Number} Represents the index position of the transaction in the specific block.
   * @param propertyId {Number} Represents the identifier of the tokens to send.
   * @param recipients {Array.<module:model/ListOmniTransactionsByBlockHeightRIRecipients>} Represents an object of addresses that receive the transactions.
   * @param senders {Array.<module:model/ListOmniTransactionsByBlockHeightRISenders>} Represents an object of addresses that provide the funds.
   * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
   * @param transactionId {String} Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
   * @param type {String} Defines the type of the transaction as a string.
   * @param typeInt {Number} Defines the type of the transaction as a number.
   * @param valid {Boolean} Defines whether the transaction is valid or not, as boolean. E.g., if it is \"true\", the transaction is valid.
   * @param version {Number} Defines the specific version.
   * @param fee {module:model/ListOmniTransactionsByBlockHeightRIFee} 
   */
  function ListOmniTransactionsByBlockHeightRI(amount, divisible, minedInBlockHash, minedInBlockHeight, positionInBlock, propertyId, recipients, senders, timestamp, transactionId, type, typeInt, valid, version, fee) {
    _classCallCheck(this, ListOmniTransactionsByBlockHeightRI);

    ListOmniTransactionsByBlockHeightRI.initialize(this, amount, divisible, minedInBlockHash, minedInBlockHeight, positionInBlock, propertyId, recipients, senders, timestamp, transactionId, type, typeInt, valid, version, fee);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListOmniTransactionsByBlockHeightRI, null, [{
    key: "initialize",
    value: function initialize(obj, amount, divisible, minedInBlockHash, minedInBlockHeight, positionInBlock, propertyId, recipients, senders, timestamp, transactionId, type, typeInt, valid, version, fee) {
      obj['amount'] = amount;
      obj['divisible'] = divisible;
      obj['minedInBlockHash'] = minedInBlockHash;
      obj['minedInBlockHeight'] = minedInBlockHeight;
      obj['positionInBlock'] = positionInBlock;
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
     * Constructs a <code>ListOmniTransactionsByBlockHeightRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListOmniTransactionsByBlockHeightRI} obj Optional instance to populate.
     * @return {module:model/ListOmniTransactionsByBlockHeightRI} The populated <code>ListOmniTransactionsByBlockHeightRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListOmniTransactionsByBlockHeightRI();

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

        if (data.hasOwnProperty('positionInBlock')) {
          obj['positionInBlock'] = _ApiClient["default"].convertToType(data['positionInBlock'], 'Number');
        }

        if (data.hasOwnProperty('propertyId')) {
          obj['propertyId'] = _ApiClient["default"].convertToType(data['propertyId'], 'Number');
        }

        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_ListOmniTransactionsByBlockHeightRIRecipients["default"]]);
        }

        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _ApiClient["default"].convertToType(data['senders'], [_ListOmniTransactionsByBlockHeightRISenders["default"]]);
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
          obj['fee'] = _ListOmniTransactionsByBlockHeightRIFee["default"].constructFromObject(data['fee']);
        }
      }

      return obj;
    }
  }]);

  return ListOmniTransactionsByBlockHeightRI;
}();
/**
 * Defines the amount of the sent tokens.
 * @member {String} amount
 */


ListOmniTransactionsByBlockHeightRI.prototype['amount'] = undefined;
/**
 * Defines whether the attribute can be divisible or not, as boolean. E.g., if it is \"true\", the attribute is divisible.
 * @member {Boolean} divisible
 */

ListOmniTransactionsByBlockHeightRI.prototype['divisible'] = undefined;
/**
 * Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */

ListOmniTransactionsByBlockHeightRI.prototype['minedInBlockHash'] = undefined;
/**
 * Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
 * @member {Number} minedInBlockHeight
 */

ListOmniTransactionsByBlockHeightRI.prototype['minedInBlockHeight'] = undefined;
/**
 * Represents the index position of the transaction in the specific block.
 * @member {Number} positionInBlock
 */

ListOmniTransactionsByBlockHeightRI.prototype['positionInBlock'] = undefined;
/**
 * Represents the identifier of the tokens to send.
 * @member {Number} propertyId
 */

ListOmniTransactionsByBlockHeightRI.prototype['propertyId'] = undefined;
/**
 * Represents an object of addresses that receive the transactions.
 * @member {Array.<module:model/ListOmniTransactionsByBlockHeightRIRecipients>} recipients
 */

ListOmniTransactionsByBlockHeightRI.prototype['recipients'] = undefined;
/**
 * Represents an object of addresses that provide the funds.
 * @member {Array.<module:model/ListOmniTransactionsByBlockHeightRISenders>} senders
 */

ListOmniTransactionsByBlockHeightRI.prototype['senders'] = undefined;
/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */

ListOmniTransactionsByBlockHeightRI.prototype['timestamp'] = undefined;
/**
 * Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
 * @member {String} transactionId
 */

ListOmniTransactionsByBlockHeightRI.prototype['transactionId'] = undefined;
/**
 * Defines the type of the transaction as a string.
 * @member {String} type
 */

ListOmniTransactionsByBlockHeightRI.prototype['type'] = undefined;
/**
 * Defines the type of the transaction as a number.
 * @member {Number} typeInt
 */

ListOmniTransactionsByBlockHeightRI.prototype['typeInt'] = undefined;
/**
 * Defines whether the transaction is valid or not, as boolean. E.g., if it is \"true\", the transaction is valid.
 * @member {Boolean} valid
 */

ListOmniTransactionsByBlockHeightRI.prototype['valid'] = undefined;
/**
 * Defines the specific version.
 * @member {Number} version
 */

ListOmniTransactionsByBlockHeightRI.prototype['version'] = undefined;
/**
 * @member {module:model/ListOmniTransactionsByBlockHeightRIFee} fee
 */

ListOmniTransactionsByBlockHeightRI.prototype['fee'] = undefined;
var _default = ListOmniTransactionsByBlockHeightRI;
exports["default"] = _default;