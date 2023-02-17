"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItemFee = _interopRequireDefault(require("./PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItemFee"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem model module.
 * @module model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem
 * @version 1.13.0
 */
var PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem</code>.
   * @alias module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem
   * @param amount {String} Representation of the amount of the transaction
   * @param recipient {String} Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
   * @param sender {String} Represents a  sender address with the respective amount. In account-based protocols like Ethereum there is only one address in this list.
   * @param xpub {String} Defines the account extended publicly known key which is used to derive all child public keys.
   * @param fee {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItemFee} 
   * @param sequence {String} String representation of the sequence
   */
  function PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem(amount, recipient, sender, xpub, fee, sequence) {
    _classCallCheck(this, PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem);
    PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem.initialize(this, amount, recipient, sender, xpub, fee, sequence);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, amount, recipient, sender, xpub, fee, sequence) {
      obj['amount'] = amount;
      obj['recipient'] = recipient;
      obj['sender'] = sender;
      obj['xpub'] = xpub;
      obj['fee'] = fee;
      obj['sequence'] = sequence;
    }

    /**
     * Constructs a <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem} obj Optional instance to populate.
     * @return {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem} The populated <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem();
        if (data.hasOwnProperty('additionalData')) {
          obj['additionalData'] = _ApiClient["default"].convertToType(data['additionalData'], 'String');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _ApiClient["default"].convertToType(data['recipient'], 'String');
        }
        if (data.hasOwnProperty('sender')) {
          obj['sender'] = _ApiClient["default"].convertToType(data['sender'], 'String');
        }
        if (data.hasOwnProperty('xpub')) {
          obj['xpub'] = _ApiClient["default"].convertToType(data['xpub'], 'String');
        }
        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItemFee["default"].constructFromObject(data['fee']);
        }
        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'String');
        }
        if (data.hasOwnProperty('transactionType')) {
          obj['transactionType'] = _ApiClient["default"].convertToType(data['transactionType'], 'String');
        }
        if (data.hasOwnProperty('sequence')) {
          obj['sequence'] = _ApiClient["default"].convertToType(data['sequence'], 'String');
        }
      }
      return obj;
    }
  }]);
  return PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem;
}();
/**
 * Representation of the additional data.
 * @member {String} additionalData
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem.prototype['additionalData'] = undefined;

/**
 * Representation of the amount of the transaction
 * @member {String} amount
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem.prototype['amount'] = undefined;

/**
 * Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {String} recipient
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem.prototype['recipient'] = undefined;

/**
 * Represents a  sender address with the respective amount. In account-based protocols like Ethereum there is only one address in this list.
 * @member {String} sender
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem.prototype['sender'] = undefined;

/**
 * Defines the account extended publicly known key which is used to derive all child public keys.
 * @member {String} xpub
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem.prototype['xpub'] = undefined;

/**
 * @member {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItemFee} fee
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem.prototype['fee'] = undefined;

/**
 * Representation of the nonce value
 * @member {String} nonce
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem.prototype['nonce'] = undefined;

/**
 * Representation of the transaction type. For Ethereum-Classic and Binance Smart Chain there is no need to provide \"transactionType\" in the request.
 * @member {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem.TransactionTypeEnum} transactionType
 * @default 'gas-fee-market-transaction'
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem.prototype['transactionType'] = 'gas-fee-market-transaction';

/**
 * String representation of the sequence
 * @member {String} sequence
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem.prototype['sequence'] = undefined;

/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem['TransactionTypeEnum'] = {
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
var _default = PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem;
exports["default"] = _default;