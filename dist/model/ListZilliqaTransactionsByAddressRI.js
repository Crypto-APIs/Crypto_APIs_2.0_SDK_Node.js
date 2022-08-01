"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetZilliqaTransactionDetailsByTransactionIDRIFee = _interopRequireDefault(require("./GetZilliqaTransactionDetailsByTransactionIDRIFee"));

var _ListZilliqaTransactionsByAddressRIRecipientsInner = _interopRequireDefault(require("./ListZilliqaTransactionsByAddressRIRecipientsInner"));

var _ListZilliqaTransactionsByAddressRISendersInner = _interopRequireDefault(require("./ListZilliqaTransactionsByAddressRISendersInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListZilliqaTransactionsByAddressRI model module.
 * @module model/ListZilliqaTransactionsByAddressRI
 * @version 1.7.2
 */
var ListZilliqaTransactionsByAddressRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListZilliqaTransactionsByAddressRI</code>.
   * @alias module:model/ListZilliqaTransactionsByAddressRI
   * @param fee {module:model/GetZilliqaTransactionDetailsByTransactionIDRIFee} 
   * @param gasLimit {Number} Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
   * @param gasPrice {Number} Defines the price of the gas.
   * @param gasUsed {Number} Defines how much of the gas for the block has been used.
   * @param minedInBlockHash {String} Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
   * @param minedInBlockHeight {Number} Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
   * @param nonce {Number} Represents a random value that can be adjusted to satisfy the Proof of Work.
   * @param recipients {Array.<module:model/ListZilliqaTransactionsByAddressRIRecipientsInner>} Defines an object array of the transaction recipients.
   * @param senders {Array.<module:model/ListZilliqaTransactionsByAddressRISendersInner>} Represents an object of addresses that provide the funds.
   * @param timestamp {Number} Defines the exact date/time when this block was mined in Unix Timestamp.
   * @param transactionHash {String} Represents the hash of the transaction, which is its unique identifier.
   * @param transactionIndex {Number} Defines the numeric representation of the transaction index.
   * @param transactionStatus {String} Defines the status of the transaction, whether it is e.g. pending or complete.
   */
  function ListZilliqaTransactionsByAddressRI(fee, gasLimit, gasPrice, gasUsed, minedInBlockHash, minedInBlockHeight, nonce, recipients, senders, timestamp, transactionHash, transactionIndex, transactionStatus) {
    _classCallCheck(this, ListZilliqaTransactionsByAddressRI);

    ListZilliqaTransactionsByAddressRI.initialize(this, fee, gasLimit, gasPrice, gasUsed, minedInBlockHash, minedInBlockHeight, nonce, recipients, senders, timestamp, transactionHash, transactionIndex, transactionStatus);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListZilliqaTransactionsByAddressRI, null, [{
    key: "initialize",
    value: function initialize(obj, fee, gasLimit, gasPrice, gasUsed, minedInBlockHash, minedInBlockHeight, nonce, recipients, senders, timestamp, transactionHash, transactionIndex, transactionStatus) {
      obj['fee'] = fee;
      obj['gasLimit'] = gasLimit;
      obj['gasPrice'] = gasPrice;
      obj['gasUsed'] = gasUsed;
      obj['minedInBlockHash'] = minedInBlockHash;
      obj['minedInBlockHeight'] = minedInBlockHeight;
      obj['nonce'] = nonce;
      obj['recipients'] = recipients;
      obj['senders'] = senders;
      obj['timestamp'] = timestamp;
      obj['transactionHash'] = transactionHash;
      obj['transactionIndex'] = transactionIndex;
      obj['transactionStatus'] = transactionStatus;
    }
    /**
     * Constructs a <code>ListZilliqaTransactionsByAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListZilliqaTransactionsByAddressRI} obj Optional instance to populate.
     * @return {module:model/ListZilliqaTransactionsByAddressRI} The populated <code>ListZilliqaTransactionsByAddressRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListZilliqaTransactionsByAddressRI();

        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _GetZilliqaTransactionDetailsByTransactionIDRIFee["default"].constructFromObject(data['fee']);
        }

        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'Number');
        }

        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _ApiClient["default"].convertToType(data['gasPrice'], 'Number');
        }

        if (data.hasOwnProperty('gasUsed')) {
          obj['gasUsed'] = _ApiClient["default"].convertToType(data['gasUsed'], 'Number');
        }

        if (data.hasOwnProperty('minedInBlockHash')) {
          obj['minedInBlockHash'] = _ApiClient["default"].convertToType(data['minedInBlockHash'], 'String');
        }

        if (data.hasOwnProperty('minedInBlockHeight')) {
          obj['minedInBlockHeight'] = _ApiClient["default"].convertToType(data['minedInBlockHeight'], 'Number');
        }

        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'Number');
        }

        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_ListZilliqaTransactionsByAddressRIRecipientsInner["default"]]);
        }

        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _ApiClient["default"].convertToType(data['senders'], [_ListZilliqaTransactionsByAddressRISendersInner["default"]]);
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }

        if (data.hasOwnProperty('transactionHash')) {
          obj['transactionHash'] = _ApiClient["default"].convertToType(data['transactionHash'], 'String');
        }

        if (data.hasOwnProperty('transactionIndex')) {
          obj['transactionIndex'] = _ApiClient["default"].convertToType(data['transactionIndex'], 'Number');
        }

        if (data.hasOwnProperty('transactionStatus')) {
          obj['transactionStatus'] = _ApiClient["default"].convertToType(data['transactionStatus'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListZilliqaTransactionsByAddressRI;
}();
/**
 * @member {module:model/GetZilliqaTransactionDetailsByTransactionIDRIFee} fee
 */


ListZilliqaTransactionsByAddressRI.prototype['fee'] = undefined;
/**
 * Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
 * @member {Number} gasLimit
 */

ListZilliqaTransactionsByAddressRI.prototype['gasLimit'] = undefined;
/**
 * Defines the price of the gas.
 * @member {Number} gasPrice
 */

ListZilliqaTransactionsByAddressRI.prototype['gasPrice'] = undefined;
/**
 * Defines how much of the gas for the block has been used.
 * @member {Number} gasUsed
 */

ListZilliqaTransactionsByAddressRI.prototype['gasUsed'] = undefined;
/**
 * Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */

ListZilliqaTransactionsByAddressRI.prototype['minedInBlockHash'] = undefined;
/**
 * Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
 * @member {Number} minedInBlockHeight
 */

ListZilliqaTransactionsByAddressRI.prototype['minedInBlockHeight'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {Number} nonce
 */

ListZilliqaTransactionsByAddressRI.prototype['nonce'] = undefined;
/**
 * Defines an object array of the transaction recipients.
 * @member {Array.<module:model/ListZilliqaTransactionsByAddressRIRecipientsInner>} recipients
 */

ListZilliqaTransactionsByAddressRI.prototype['recipients'] = undefined;
/**
 * Represents an object of addresses that provide the funds.
 * @member {Array.<module:model/ListZilliqaTransactionsByAddressRISendersInner>} senders
 */

ListZilliqaTransactionsByAddressRI.prototype['senders'] = undefined;
/**
 * Defines the exact date/time when this block was mined in Unix Timestamp.
 * @member {Number} timestamp
 */

ListZilliqaTransactionsByAddressRI.prototype['timestamp'] = undefined;
/**
 * Represents the hash of the transaction, which is its unique identifier.
 * @member {String} transactionHash
 */

ListZilliqaTransactionsByAddressRI.prototype['transactionHash'] = undefined;
/**
 * Defines the numeric representation of the transaction index.
 * @member {Number} transactionIndex
 */

ListZilliqaTransactionsByAddressRI.prototype['transactionIndex'] = undefined;
/**
 * Defines the status of the transaction, whether it is e.g. pending or complete.
 * @member {String} transactionStatus
 */

ListZilliqaTransactionsByAddressRI.prototype['transactionStatus'] = undefined;
var _default = ListZilliqaTransactionsByAddressRI;
exports["default"] = _default;