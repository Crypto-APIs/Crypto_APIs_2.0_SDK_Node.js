"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListOmniTransactionsByAddressRIRecipientsInner = _interopRequireDefault(require("./ListOmniTransactionsByAddressRIRecipientsInner"));

var _ListUnconfirmedOmniTransactionsByAddressRIFee = _interopRequireDefault(require("./ListUnconfirmedOmniTransactionsByAddressRIFee"));

var _ListUnconfirmedOmniTransactionsByAddressRISendersInner = _interopRequireDefault(require("./ListUnconfirmedOmniTransactionsByAddressRISendersInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListUnconfirmedOmniTransactionsByAddressRI model module.
 * @module model/ListUnconfirmedOmniTransactionsByAddressRI
 * @version 1.6.0
 */
var ListUnconfirmedOmniTransactionsByAddressRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListUnconfirmedOmniTransactionsByAddressRI</code>.
   * @alias module:model/ListUnconfirmedOmniTransactionsByAddressRI
   * @param amount {String} Defines the amount of the sent tokens.
   * @param divisible {Boolean} Defines whether the attribute can be divisible or not, as boolean. E.g., if it is \"true\", the attribute is divisible.
   * @param mined {Boolean} Defines whether the transaction has been mined or not, as boolean. E.g. if set to \"true\", it means the transaction is mined.
   * @param propertyId {Number} Represents the identifier of the tokens to send.
   * @param recipients {Array.<module:model/ListOmniTransactionsByAddressRIRecipientsInner>} Represents an object of addresses that receive the transactions.
   * @param senders {Array.<module:model/ListUnconfirmedOmniTransactionsByAddressRISendersInner>} Represents an object of addresses that provide the funds.
   * @param sent {Boolean} Defines whether the transaction has been sent or not, as boolean. E.g. if set to \"true\", it means the transaction is sent.
   * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
   * @param transactionId {String} Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
   * @param type {String} Defines the type of the transaction as a string.
   * @param typeInt {Number} Defines the type of the transaction as a number.
   * @param version {Number} Defines the specific version.
   * @param fee {module:model/ListUnconfirmedOmniTransactionsByAddressRIFee} 
   */
  function ListUnconfirmedOmniTransactionsByAddressRI(amount, divisible, mined, propertyId, recipients, senders, sent, timestamp, transactionId, type, typeInt, version, fee) {
    _classCallCheck(this, ListUnconfirmedOmniTransactionsByAddressRI);

    ListUnconfirmedOmniTransactionsByAddressRI.initialize(this, amount, divisible, mined, propertyId, recipients, senders, sent, timestamp, transactionId, type, typeInt, version, fee);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListUnconfirmedOmniTransactionsByAddressRI, null, [{
    key: "initialize",
    value: function initialize(obj, amount, divisible, mined, propertyId, recipients, senders, sent, timestamp, transactionId, type, typeInt, version, fee) {
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
      obj['typeInt'] = typeInt;
      obj['version'] = version;
      obj['fee'] = fee;
    }
    /**
     * Constructs a <code>ListUnconfirmedOmniTransactionsByAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnconfirmedOmniTransactionsByAddressRI} obj Optional instance to populate.
     * @return {module:model/ListUnconfirmedOmniTransactionsByAddressRI} The populated <code>ListUnconfirmedOmniTransactionsByAddressRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListUnconfirmedOmniTransactionsByAddressRI();

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
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_ListOmniTransactionsByAddressRIRecipientsInner["default"]]);
        }

        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _ApiClient["default"].convertToType(data['senders'], [_ListUnconfirmedOmniTransactionsByAddressRISendersInner["default"]]);
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

        if (data.hasOwnProperty('typeInt')) {
          obj['typeInt'] = _ApiClient["default"].convertToType(data['typeInt'], 'Number');
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

  return ListUnconfirmedOmniTransactionsByAddressRI;
}();
/**
 * Defines the amount of the sent tokens.
 * @member {String} amount
 */


ListUnconfirmedOmniTransactionsByAddressRI.prototype['amount'] = undefined;
/**
 * Defines whether the attribute can be divisible or not, as boolean. E.g., if it is \"true\", the attribute is divisible.
 * @member {Boolean} divisible
 */

ListUnconfirmedOmniTransactionsByAddressRI.prototype['divisible'] = undefined;
/**
 * Defines whether the transaction has been mined or not, as boolean. E.g. if set to \"true\", it means the transaction is mined.
 * @member {Boolean} mined
 */

ListUnconfirmedOmniTransactionsByAddressRI.prototype['mined'] = undefined;
/**
 * Represents the identifier of the tokens to send.
 * @member {Number} propertyId
 */

ListUnconfirmedOmniTransactionsByAddressRI.prototype['propertyId'] = undefined;
/**
 * Represents an object of addresses that receive the transactions.
 * @member {Array.<module:model/ListOmniTransactionsByAddressRIRecipientsInner>} recipients
 */

ListUnconfirmedOmniTransactionsByAddressRI.prototype['recipients'] = undefined;
/**
 * Represents an object of addresses that provide the funds.
 * @member {Array.<module:model/ListUnconfirmedOmniTransactionsByAddressRISendersInner>} senders
 */

ListUnconfirmedOmniTransactionsByAddressRI.prototype['senders'] = undefined;
/**
 * Defines whether the transaction has been sent or not, as boolean. E.g. if set to \"true\", it means the transaction is sent.
 * @member {Boolean} sent
 */

ListUnconfirmedOmniTransactionsByAddressRI.prototype['sent'] = undefined;
/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */

ListUnconfirmedOmniTransactionsByAddressRI.prototype['timestamp'] = undefined;
/**
 * Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
 * @member {String} transactionId
 */

ListUnconfirmedOmniTransactionsByAddressRI.prototype['transactionId'] = undefined;
/**
 * Defines the type of the transaction as a string.
 * @member {String} type
 */

ListUnconfirmedOmniTransactionsByAddressRI.prototype['type'] = undefined;
/**
 * Defines the type of the transaction as a number.
 * @member {Number} typeInt
 */

ListUnconfirmedOmniTransactionsByAddressRI.prototype['typeInt'] = undefined;
/**
 * Defines the specific version.
 * @member {Number} version
 */

ListUnconfirmedOmniTransactionsByAddressRI.prototype['version'] = undefined;
/**
 * @member {module:model/ListUnconfirmedOmniTransactionsByAddressRIFee} fee
 */

ListUnconfirmedOmniTransactionsByAddressRI.prototype['fee'] = undefined;
var _default = ListUnconfirmedOmniTransactionsByAddressRI;
exports["default"] = _default;