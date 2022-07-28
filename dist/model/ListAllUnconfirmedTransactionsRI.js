"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListAllUnconfirmedTransactionsRIBS = _interopRequireDefault(require("./ListAllUnconfirmedTransactionsRIBS"));

var _ListUnconfirmedTransactionsByAddressRIRecipientsInner = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIRecipientsInner"));

var _ListUnconfirmedTransactionsByAddressRISendersInner = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRISendersInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListAllUnconfirmedTransactionsRI model module.
 * @module model/ListAllUnconfirmedTransactionsRI
 * @version 1.7.0
 */
var ListAllUnconfirmedTransactionsRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAllUnconfirmedTransactionsRI</code>.
   * @alias module:model/ListAllUnconfirmedTransactionsRI
   * @param recipients {Array.<module:model/ListUnconfirmedTransactionsByAddressRIRecipientsInner>} Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
   * @param senders {Array.<module:model/ListUnconfirmedTransactionsByAddressRISendersInner>} Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
   * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
   * @param transactionHash {String} String representation of the transaction hash
   * @param transactionId {String} Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
   * @param blockchainSpecific {module:model/ListAllUnconfirmedTransactionsRIBS} 
   */
  function ListAllUnconfirmedTransactionsRI(recipients, senders, timestamp, transactionHash, transactionId, blockchainSpecific) {
    _classCallCheck(this, ListAllUnconfirmedTransactionsRI);

    ListAllUnconfirmedTransactionsRI.initialize(this, recipients, senders, timestamp, transactionHash, transactionId, blockchainSpecific);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListAllUnconfirmedTransactionsRI, null, [{
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
     * Constructs a <code>ListAllUnconfirmedTransactionsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllUnconfirmedTransactionsRI} obj Optional instance to populate.
     * @return {module:model/ListAllUnconfirmedTransactionsRI} The populated <code>ListAllUnconfirmedTransactionsRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAllUnconfirmedTransactionsRI();

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
          obj['blockchainSpecific'] = _ListAllUnconfirmedTransactionsRIBS["default"].constructFromObject(data['blockchainSpecific']);
        }
      }

      return obj;
    }
  }]);

  return ListAllUnconfirmedTransactionsRI;
}();
/**
 * Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/ListUnconfirmedTransactionsByAddressRIRecipientsInner>} recipients
 */


ListAllUnconfirmedTransactionsRI.prototype['recipients'] = undefined;
/**
 * Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/ListUnconfirmedTransactionsByAddressRISendersInner>} senders
 */

ListAllUnconfirmedTransactionsRI.prototype['senders'] = undefined;
/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */

ListAllUnconfirmedTransactionsRI.prototype['timestamp'] = undefined;
/**
 * String representation of the transaction hash
 * @member {String} transactionHash
 */

ListAllUnconfirmedTransactionsRI.prototype['transactionHash'] = undefined;
/**
 * Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
 * @member {String} transactionId
 */

ListAllUnconfirmedTransactionsRI.prototype['transactionId'] = undefined;
/**
 * @member {module:model/ListAllUnconfirmedTransactionsRIBS} blockchainSpecific
 */

ListAllUnconfirmedTransactionsRI.prototype['blockchainSpecific'] = undefined;
var _default = ListAllUnconfirmedTransactionsRI;
exports["default"] = _default;