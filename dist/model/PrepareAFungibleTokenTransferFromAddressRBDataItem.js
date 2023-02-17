"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareAFungibleTokenTransferFromAddressRBDataItemFee = _interopRequireDefault(require("./PrepareAFungibleTokenTransferFromAddressRBDataItemFee"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The PrepareAFungibleTokenTransferFromAddressRBDataItem model module.
 * @module model/PrepareAFungibleTokenTransferFromAddressRBDataItem
 * @version 1.13.0
 */
var PrepareAFungibleTokenTransferFromAddressRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAFungibleTokenTransferFromAddressRBDataItem</code>.
   * @alias module:model/PrepareAFungibleTokenTransferFromAddressRBDataItem
   * @param amount {String} Representation of the amount to be transferred
   * @param contract {String} Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
   * @param recipient {String} The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
   * @param sender {String} Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
   * @param fee {module:model/PrepareAFungibleTokenTransferFromAddressRBDataItemFee} 
   */
  function PrepareAFungibleTokenTransferFromAddressRBDataItem(amount, contract, recipient, sender, fee) {
    _classCallCheck(this, PrepareAFungibleTokenTransferFromAddressRBDataItem);
    PrepareAFungibleTokenTransferFromAddressRBDataItem.initialize(this, amount, contract, recipient, sender, fee);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareAFungibleTokenTransferFromAddressRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, amount, contract, recipient, sender, fee) {
      obj['amount'] = amount;
      obj['contract'] = contract;
      obj['recipient'] = recipient;
      obj['sender'] = sender;
      obj['fee'] = fee;
    }

    /**
     * Constructs a <code>PrepareAFungibleTokenTransferFromAddressRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAFungibleTokenTransferFromAddressRBDataItem} obj Optional instance to populate.
     * @return {module:model/PrepareAFungibleTokenTransferFromAddressRBDataItem} The populated <code>PrepareAFungibleTokenTransferFromAddressRBDataItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAFungibleTokenTransferFromAddressRBDataItem();
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
        if (data.hasOwnProperty('contract')) {
          obj['contract'] = _ApiClient["default"].convertToType(data['contract'], 'String');
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
        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _PrepareAFungibleTokenTransferFromAddressRBDataItemFee["default"].constructFromObject(data['fee']);
        }
        if (data.hasOwnProperty('transactionType')) {
          obj['transactionType'] = _ApiClient["default"].convertToType(data['transactionType'], 'String');
        }
      }
      return obj;
    }
  }]);
  return PrepareAFungibleTokenTransferFromAddressRBDataItem;
}();
/**
 * Representation of the amount to be transferred
 * @member {String} amount
 */
PrepareAFungibleTokenTransferFromAddressRBDataItem.prototype['amount'] = undefined;

/**
 * Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
 * @member {String} contract
 */
PrepareAFungibleTokenTransferFromAddressRBDataItem.prototype['contract'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
PrepareAFungibleTokenTransferFromAddressRBDataItem.prototype['nonce'] = undefined;

/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} recipient
 */
PrepareAFungibleTokenTransferFromAddressRBDataItem.prototype['recipient'] = undefined;

/**
 * Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
 * @member {String} sender
 */
PrepareAFungibleTokenTransferFromAddressRBDataItem.prototype['sender'] = undefined;

/**
 * @member {module:model/PrepareAFungibleTokenTransferFromAddressRBDataItemFee} fee
 */
PrepareAFungibleTokenTransferFromAddressRBDataItem.prototype['fee'] = undefined;

/**
 * Representation of the transaction type. For Ethereum-Classic and Binance Smart Chain there is no need to provide \"transactionType\" in the request.
 * @member {module:model/PrepareAFungibleTokenTransferFromAddressRBDataItem.TransactionTypeEnum} transactionType
 */
PrepareAFungibleTokenTransferFromAddressRBDataItem.prototype['transactionType'] = undefined;

/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
PrepareAFungibleTokenTransferFromAddressRBDataItem['TransactionTypeEnum'] = {
  /**
   * value: "legacy-transaction"
   * @const
   */
  "legacy-transaction": "legacy-transaction"
};
var _default = PrepareAFungibleTokenTransferFromAddressRBDataItem;
exports["default"] = _default;