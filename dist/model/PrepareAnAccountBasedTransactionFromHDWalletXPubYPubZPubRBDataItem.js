"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee = _interopRequireDefault(require("./PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem model module.
 * @module model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem
 * @version 1.7.2
 */
var PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem</code>.
   * @alias module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem
   * @param amount {String} Representation of the amount of the transaction
   * @param fee {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee} 
   * @param recipient {String} Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
   * @param sender {String} Represents a  sender address with the respective amount. In account-based protocols like Ethereum there is only one address in this list.
   * @param xpub {String} Defines the account extended publicly known key which is used to derive all child public keys.
   */
  function PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem(amount, fee, recipient, sender, xpub) {
    _classCallCheck(this, PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem);

    PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.initialize(this, amount, fee, recipient, sender, xpub);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, amount, fee, recipient, sender, xpub) {
      obj['amount'] = amount;
      obj['fee'] = fee;
      obj['recipient'] = recipient;
      obj['sender'] = sender;
      obj['xpub'] = xpub;
    }
    /**
     * Constructs a <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem} obj Optional instance to populate.
     * @return {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem} The populated <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem();

        if (data.hasOwnProperty('additionalData')) {
          obj['additionalData'] = _ApiClient["default"].convertToType(data['additionalData'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }

        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee["default"].constructFromObject(data['fee']);
        }

        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'String');
        }

        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _ApiClient["default"].convertToType(data['recipient'], 'String');
        }

        if (data.hasOwnProperty('sender')) {
          obj['sender'] = _ApiClient["default"].convertToType(data['sender'], 'String');
        }

        if (data.hasOwnProperty('transactionType')) {
          obj['transactionType'] = _ApiClient["default"].convertToType(data['transactionType'], 'String');
        }

        if (data.hasOwnProperty('xpub')) {
          obj['xpub'] = _ApiClient["default"].convertToType(data['xpub'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem;
}();
/**
 * Representation of the additional data.
 * @member {String} additionalData
 */


PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['additionalData'] = undefined;
/**
 * Representation of the amount of the transaction
 * @member {String} amount
 */

PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['amount'] = undefined;
/**
 * @member {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee} fee
 */

PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['fee'] = undefined;
/**
 * Representation of the nonce value
 * @member {String} nonce
 */

PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['nonce'] = undefined;
/**
 * Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {String} recipient
 */

PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['recipient'] = undefined;
/**
 * Represents a  sender address with the respective amount. In account-based protocols like Ethereum there is only one address in this list.
 * @member {String} sender
 */

PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['sender'] = undefined;
/**
 * Representation of the transaction type
 * @member {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.TransactionTypeEnum} transactionType
 */

PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['transactionType'] = undefined;
/**
 * Defines the account extended publicly known key which is used to derive all child public keys.
 * @member {String} xpub
 */

PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['xpub'] = undefined;
/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */

PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem['TransactionTypeEnum'] = {
  /**
   * value: "legacy-transaction"
   * @const
   */
  "legacy-transaction": "legacy-transaction",

  /**
   * value: "access-list-transaction"
   * @const
   */
  "access-list-transaction": "access-list-transaction",

  /**
   * value: "gas-fee-market-transaction"
   * @const
   */
  "gas-fee-market-transaction": "gas-fee-market-transaction"
};
var _default = PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem;
exports["default"] = _default;