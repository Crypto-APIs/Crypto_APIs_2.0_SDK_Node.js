"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareANonFungibleTokenTransferFromAddressRBDataItemFee = _interopRequireDefault(require("./PrepareANonFungibleTokenTransferFromAddressRBDataItemFee"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The PrepareANonFungibleTokenTransferFromAddressRBDataItem model module.
 * @module model/PrepareANonFungibleTokenTransferFromAddressRBDataItem
 * @version 1.13.0
 */
var PrepareANonFungibleTokenTransferFromAddressRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareANonFungibleTokenTransferFromAddressRBDataItem</code>.
   * @alias module:model/PrepareANonFungibleTokenTransferFromAddressRBDataItem
   * @param contract {String} Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
   * @param recipient {String} The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
   * @param sender {String} Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sende
   * @param tokenId {String} Represents the unique token identifier.
   * @param fee {module:model/PrepareANonFungibleTokenTransferFromAddressRBDataItemFee} 
   */
  function PrepareANonFungibleTokenTransferFromAddressRBDataItem(contract, recipient, sender, tokenId, fee) {
    _classCallCheck(this, PrepareANonFungibleTokenTransferFromAddressRBDataItem);
    PrepareANonFungibleTokenTransferFromAddressRBDataItem.initialize(this, contract, recipient, sender, tokenId, fee);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareANonFungibleTokenTransferFromAddressRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, contract, recipient, sender, tokenId, fee) {
      obj['contract'] = contract;
      obj['recipient'] = recipient;
      obj['sender'] = sender;
      obj['tokenId'] = tokenId;
      obj['fee'] = fee;
    }

    /**
     * Constructs a <code>PrepareANonFungibleTokenTransferFromAddressRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareANonFungibleTokenTransferFromAddressRBDataItem} obj Optional instance to populate.
     * @return {module:model/PrepareANonFungibleTokenTransferFromAddressRBDataItem} The populated <code>PrepareANonFungibleTokenTransferFromAddressRBDataItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareANonFungibleTokenTransferFromAddressRBDataItem();
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
        if (data.hasOwnProperty('tokenId')) {
          obj['tokenId'] = _ApiClient["default"].convertToType(data['tokenId'], 'String');
        }
        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _PrepareANonFungibleTokenTransferFromAddressRBDataItemFee["default"].constructFromObject(data['fee']);
        }
        if (data.hasOwnProperty('transactionType')) {
          obj['transactionType'] = _ApiClient["default"].convertToType(data['transactionType'], 'String');
        }
      }
      return obj;
    }
  }]);
  return PrepareANonFungibleTokenTransferFromAddressRBDataItem;
}();
/**
 * Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
 * @member {String} contract
 */
PrepareANonFungibleTokenTransferFromAddressRBDataItem.prototype['contract'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
PrepareANonFungibleTokenTransferFromAddressRBDataItem.prototype['nonce'] = undefined;

/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} recipient
 */
PrepareANonFungibleTokenTransferFromAddressRBDataItem.prototype['recipient'] = undefined;

/**
 * Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sende
 * @member {String} sender
 */
PrepareANonFungibleTokenTransferFromAddressRBDataItem.prototype['sender'] = undefined;

/**
 * Represents the unique token identifier.
 * @member {String} tokenId
 */
PrepareANonFungibleTokenTransferFromAddressRBDataItem.prototype['tokenId'] = undefined;

/**
 * @member {module:model/PrepareANonFungibleTokenTransferFromAddressRBDataItemFee} fee
 */
PrepareANonFungibleTokenTransferFromAddressRBDataItem.prototype['fee'] = undefined;

/**
 * Representation of the transaction type. For Ethereum-Classic and Binance Smart Chain there is no need to provide \"transactionType\" in the request.
 * @member {module:model/PrepareANonFungibleTokenTransferFromAddressRBDataItem.TransactionTypeEnum} transactionType
 */
PrepareANonFungibleTokenTransferFromAddressRBDataItem.prototype['transactionType'] = undefined;

/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
PrepareANonFungibleTokenTransferFromAddressRBDataItem['TransactionTypeEnum'] = {
  /**
   * value: "legacy-transaction"
   * @const
   */
  "legacy-transaction": "legacy-transaction"
};
var _default = PrepareANonFungibleTokenTransferFromAddressRBDataItem;
exports["default"] = _default;