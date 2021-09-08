"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetUnconfirmedOmniTransactionByTransactionIDTxidRISenders = _interopRequireDefault(require("./GetUnconfirmedOmniTransactionByTransactionIDTxidRISenders"));

var _ListOmniTransactionsByAddressRIRecipients = _interopRequireDefault(require("./ListOmniTransactionsByAddressRIRecipients"));

var _ListUnconfirmedOmniTransactionsByAddressRIFee = _interopRequireDefault(require("./ListUnconfirmedOmniTransactionsByAddressRIFee"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListUnconfirmedOmniTransactionsByPropertyIDRI model module.
 * @module model/ListUnconfirmedOmniTransactionsByPropertyIDRI
 * @version 1.2.1
 */
var ListUnconfirmedOmniTransactionsByPropertyIDRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListUnconfirmedOmniTransactionsByPropertyIDRI</code>.
   * @alias module:model/ListUnconfirmedOmniTransactionsByPropertyIDRI
   * @param amount {String} Defines the amount of the sent tokens.
   * @param divisible {Boolean} Defines whether the attribute can be divisible or not, as boolean. E.g., if it is \"true\", the attribute is divisible.
   * @param mined {Boolean} Defines whether the transaction has been mined or not, as boolean. E.g. if set to \"true\", it means the transaction is mined.
   * @param propertyId {Number} Represents the identifier of the tokens to send.
   * @param recipients {Array.<module:model/ListOmniTransactionsByAddressRIRecipients>} Represents an object of addresses that receive the transactions.
   * @param senders {Array.<module:model/GetUnconfirmedOmniTransactionByTransactionIDTxidRISenders>} Represents an object of addresses that provide the funds.
   * @param sent {Boolean} Defines whether the transaction has been sent or not, as boolean. E.g. if set to \"true\", it means the transaction is sent.
   * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
   * @param transactionId {String} Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
   * @param type {String} Defines the type of the transaction as a string.
   * @param typeIint {Number} Defines the type of the transaction as a number.
   * @param version {Number} Defines the specific version.
   * @param fee {module:model/ListUnconfirmedOmniTransactionsByAddressRIFee} 
   */
  function ListUnconfirmedOmniTransactionsByPropertyIDRI(amount, divisible, mined, propertyId, recipients, senders, sent, timestamp, transactionId, type, typeIint, version, fee) {
    _classCallCheck(this, ListUnconfirmedOmniTransactionsByPropertyIDRI);

    ListUnconfirmedOmniTransactionsByPropertyIDRI.initialize(this, amount, divisible, mined, propertyId, recipients, senders, sent, timestamp, transactionId, type, typeIint, version, fee);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListUnconfirmedOmniTransactionsByPropertyIDRI, null, [{
    key: "initialize",
    value: function initialize(obj, amount, divisible, mined, propertyId, recipients, senders, sent, timestamp, transactionId, type, typeIint, version, fee) {
      obj['amount'] = amount;
      obj['divisible'] = divisible;
      obj['mined'] = mined;
      obj['propertyId'] = propertyId;
      obj['recipients'] = recipients;
      obj['senders'] = senders;
      obj['sent'] = sent;
      obj['timestamp'] = timestamp;
      obj['transactionId'] = transactionId;
      obj['type'] = type;
      obj['typeIint'] = typeIint;
      obj['version'] = version;
      obj['fee'] = fee;
    }
    /**
     * Constructs a <code>ListUnconfirmedOmniTransactionsByPropertyIDRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnconfirmedOmniTransactionsByPropertyIDRI} obj Optional instance to populate.
     * @return {module:model/ListUnconfirmedOmniTransactionsByPropertyIDRI} The populated <code>ListUnconfirmedOmniTransactionsByPropertyIDRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListUnconfirmedOmniTransactionsByPropertyIDRI();

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }

        if (data.hasOwnProperty('divisible')) {
          obj['divisible'] = _ApiClient["default"].convertToType(data['divisible'], 'Boolean');
        }

        if (data.hasOwnProperty('mined')) {
          obj['mined'] = _ApiClient["default"].convertToType(data['mined'], 'Boolean');
        }

        if (data.hasOwnProperty('propertyId')) {
          obj['propertyId'] = _ApiClient["default"].convertToType(data['propertyId'], 'Number');
        }

        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_ListOmniTransactionsByAddressRIRecipients["default"]]);
        }

        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _ApiClient["default"].convertToType(data['senders'], [_GetUnconfirmedOmniTransactionByTransactionIDTxidRISenders["default"]]);
        }

        if (data.hasOwnProperty('sent')) {
          obj['sent'] = _ApiClient["default"].convertToType(data['sent'], 'Boolean');
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

        if (data.hasOwnProperty('typeIint')) {
          obj['typeIint'] = _ApiClient["default"].convertToType(data['typeIint'], 'Number');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _ListUnconfirmedOmniTransactionsByAddressRIFee["default"].constructFromObject(data['fee']);
        }
      }

      return obj;
    }
  }]);

  return ListUnconfirmedOmniTransactionsByPropertyIDRI;
}();
/**
 * Defines the amount of the sent tokens.
 * @member {String} amount
 */


ListUnconfirmedOmniTransactionsByPropertyIDRI.prototype['amount'] = undefined;
/**
 * Defines whether the attribute can be divisible or not, as boolean. E.g., if it is \"true\", the attribute is divisible.
 * @member {Boolean} divisible
 */

ListUnconfirmedOmniTransactionsByPropertyIDRI.prototype['divisible'] = undefined;
/**
 * Defines whether the transaction has been mined or not, as boolean. E.g. if set to \"true\", it means the transaction is mined.
 * @member {Boolean} mined
 */

ListUnconfirmedOmniTransactionsByPropertyIDRI.prototype['mined'] = undefined;
/**
 * Represents the identifier of the tokens to send.
 * @member {Number} propertyId
 */

ListUnconfirmedOmniTransactionsByPropertyIDRI.prototype['propertyId'] = undefined;
/**
 * Represents an object of addresses that receive the transactions.
 * @member {Array.<module:model/ListOmniTransactionsByAddressRIRecipients>} recipients
 */

ListUnconfirmedOmniTransactionsByPropertyIDRI.prototype['recipients'] = undefined;
/**
 * Represents an object of addresses that provide the funds.
 * @member {Array.<module:model/GetUnconfirmedOmniTransactionByTransactionIDTxidRISenders>} senders
 */

ListUnconfirmedOmniTransactionsByPropertyIDRI.prototype['senders'] = undefined;
/**
 * Defines whether the transaction has been sent or not, as boolean. E.g. if set to \"true\", it means the transaction is sent.
 * @member {Boolean} sent
 */

ListUnconfirmedOmniTransactionsByPropertyIDRI.prototype['sent'] = undefined;
/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */

ListUnconfirmedOmniTransactionsByPropertyIDRI.prototype['timestamp'] = undefined;
/**
 * Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
 * @member {String} transactionId
 */

ListUnconfirmedOmniTransactionsByPropertyIDRI.prototype['transactionId'] = undefined;
/**
 * Defines the type of the transaction as a string.
 * @member {String} type
 */

ListUnconfirmedOmniTransactionsByPropertyIDRI.prototype['type'] = undefined;
/**
 * Defines the type of the transaction as a number.
 * @member {Number} typeIint
 */

ListUnconfirmedOmniTransactionsByPropertyIDRI.prototype['typeIint'] = undefined;
/**
 * Defines the specific version.
 * @member {Number} version
 */

ListUnconfirmedOmniTransactionsByPropertyIDRI.prototype['version'] = undefined;
/**
 * @member {module:model/ListUnconfirmedOmniTransactionsByAddressRIFee} fee
 */

ListUnconfirmedOmniTransactionsByPropertyIDRI.prototype['fee'] = undefined;
var _default = ListUnconfirmedOmniTransactionsByPropertyIDRI;
exports["default"] = _default;