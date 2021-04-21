"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItemRecipients = _interopRequireDefault(require("./GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItemRecipients"));

var _GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItemSenders = _interopRequireDefault(require("./GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItemSenders"));

var _ListUnconfirmedOmniTransactionsByAddressResponseItemFee = _interopRequireDefault(require("./ListUnconfirmedOmniTransactionsByAddressResponseItemFee"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem model module.
 * @module model/GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem
 * @version 2.0.0
 */
var GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem</code>.
   * @alias module:model/GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem
   * @param amount {String} Defines the amount of the sent tokens.
   * @param divisible {Boolean} Defines whether the attribute can be divisible or not, as boolean. E.g., if it is \"true\", the attribute is divisible.
   * @param mined {Boolean} Defines whether the transaction has been mined or not, as boolean. E.g. if set to \"true\", it means the transaction is mined.
   * @param propertyId {Number} Represents the identifier of the tokens to send.
   * @param recipients {Array.<module:model/GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItemRecipients>} Represents an object of addresses that receive the transactions.
   * @param senders {Array.<module:model/GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItemSenders>} Represents an object of addresses that provide the funds.
   * @param sent {Boolean} Defines whether the transaction has been sent or not, as boolean. E.g. if set to \"true\", it means the transaction is sent.
   * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
   * @param transactionId {String} String representation of the transaction identifier (txid)
   * @param type {String} Defines the type of the transaction as a string.
   * @param typeInt {Number} Defines the type of the transaction as a number.
   * @param version {Number} Defines the specific version.
   * @param fee {module:model/ListUnconfirmedOmniTransactionsByAddressResponseItemFee} 
   */
  function GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem(amount, divisible, mined, propertyId, recipients, senders, sent, timestamp, transactionId, type, typeInt, version, fee) {
    _classCallCheck(this, GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem);

    GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem.initialize(this, amount, divisible, mined, propertyId, recipients, senders, sent, timestamp, transactionId, type, typeInt, version, fee);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem, null, [{
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
     * Constructs a <code>GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem} obj Optional instance to populate.
     * @return {module:model/GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem} The populated <code>GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem();

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
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItemRecipients["default"]]);
        }

        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _ApiClient["default"].convertToType(data['senders'], [_GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItemSenders["default"]]);
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
          obj['fee'] = _ListUnconfirmedOmniTransactionsByAddressResponseItemFee["default"].constructFromObject(data['fee']);
        }
      }

      return obj;
    }
  }]);

  return GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem;
}();
/**
 * Defines the amount of the sent tokens.
 * @member {String} amount
 */


GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem.prototype['amount'] = undefined;
/**
 * Defines whether the attribute can be divisible or not, as boolean. E.g., if it is \"true\", the attribute is divisible.
 * @member {Boolean} divisible
 */

GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem.prototype['divisible'] = undefined;
/**
 * Defines whether the transaction has been mined or not, as boolean. E.g. if set to \"true\", it means the transaction is mined.
 * @member {Boolean} mined
 */

GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem.prototype['mined'] = undefined;
/**
 * Represents the identifier of the tokens to send.
 * @member {Number} propertyId
 */

GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem.prototype['propertyId'] = undefined;
/**
 * Represents an object of addresses that receive the transactions.
 * @member {Array.<module:model/GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItemRecipients>} recipients
 */

GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem.prototype['recipients'] = undefined;
/**
 * Represents an object of addresses that provide the funds.
 * @member {Array.<module:model/GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItemSenders>} senders
 */

GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem.prototype['senders'] = undefined;
/**
 * Defines whether the transaction has been sent or not, as boolean. E.g. if set to \"true\", it means the transaction is sent.
 * @member {Boolean} sent
 */

GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem.prototype['sent'] = undefined;
/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */

GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem.prototype['timestamp'] = undefined;
/**
 * String representation of the transaction identifier (txid)
 * @member {String} transactionId
 */

GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem.prototype['transactionId'] = undefined;
/**
 * Defines the type of the transaction as a string.
 * @member {String} type
 */

GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem.prototype['type'] = undefined;
/**
 * Defines the type of the transaction as a number.
 * @member {Number} typeInt
 */

GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem.prototype['typeInt'] = undefined;
/**
 * Defines the specific version.
 * @member {Number} version
 */

GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem.prototype['version'] = undefined;
/**
 * @member {module:model/ListUnconfirmedOmniTransactionsByAddressResponseItemFee} fee
 */

GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem.prototype['fee'] = undefined;
var _default = GetUnconfirmedOmniTransactionByTransactionIDTxidResponseItem;
exports["default"] = _default;