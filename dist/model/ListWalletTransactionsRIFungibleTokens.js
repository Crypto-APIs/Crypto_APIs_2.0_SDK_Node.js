"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListWalletTransactionsRIFungibleTokens model module.
 * @module model/ListWalletTransactionsRIFungibleTokens
 * @version 1.4.0
 */
var ListWalletTransactionsRIFungibleTokens = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListWalletTransactionsRIFungibleTokens</code>.
   * @alias module:model/ListWalletTransactionsRIFungibleTokens
   * @param amount {String} Defines the amount of the fungible tokens.
   * @param convertedAmount {String} Defines the tokens' converted amount value.
   * @param exchangeRateUnit {String} Represents token's exchange rate unit.
   * @param name {String} Defines the token's name as a string.
   * @param recipient {String} The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one
   * @param sender {String} Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
   * @param symbol {String} Defines the symbol of the fungible tokens.
   * @param tokenDecimals {Number} Defines the decimals of the token, i.e. the number of digits that come after the decimal coma of the token.
   * @param type {String} Defines the specific token type.
   */
  function ListWalletTransactionsRIFungibleTokens(amount, convertedAmount, exchangeRateUnit, name, recipient, sender, symbol, tokenDecimals, type) {
    _classCallCheck(this, ListWalletTransactionsRIFungibleTokens);

    ListWalletTransactionsRIFungibleTokens.initialize(this, amount, convertedAmount, exchangeRateUnit, name, recipient, sender, symbol, tokenDecimals, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListWalletTransactionsRIFungibleTokens, null, [{
    key: "initialize",
    value: function initialize(obj, amount, convertedAmount, exchangeRateUnit, name, recipient, sender, symbol, tokenDecimals, type) {
      obj['amount'] = amount;
      obj['convertedAmount'] = convertedAmount;
      obj['exchangeRateUnit'] = exchangeRateUnit;
      obj['name'] = name;
      obj['recipient'] = recipient;
      obj['sender'] = sender;
      obj['symbol'] = symbol;
      obj['tokenDecimals'] = tokenDecimals;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>ListWalletTransactionsRIFungibleTokens</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListWalletTransactionsRIFungibleTokens} obj Optional instance to populate.
     * @return {module:model/ListWalletTransactionsRIFungibleTokens} The populated <code>ListWalletTransactionsRIFungibleTokens</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListWalletTransactionsRIFungibleTokens();

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }

        if (data.hasOwnProperty('convertedAmount')) {
          obj['convertedAmount'] = _ApiClient["default"].convertToType(data['convertedAmount'], 'String');
        }

        if (data.hasOwnProperty('exchangeRateUnit')) {
          obj['exchangeRateUnit'] = _ApiClient["default"].convertToType(data['exchangeRateUnit'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _ApiClient["default"].convertToType(data['recipient'], 'String');
        }

        if (data.hasOwnProperty('sender')) {
          obj['sender'] = _ApiClient["default"].convertToType(data['sender'], 'String');
        }

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('tokenDecimals')) {
          obj['tokenDecimals'] = _ApiClient["default"].convertToType(data['tokenDecimals'], 'Number');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListWalletTransactionsRIFungibleTokens;
}();
/**
 * Defines the amount of the fungible tokens.
 * @member {String} amount
 */


ListWalletTransactionsRIFungibleTokens.prototype['amount'] = undefined;
/**
 * Defines the tokens' converted amount value.
 * @member {String} convertedAmount
 */

ListWalletTransactionsRIFungibleTokens.prototype['convertedAmount'] = undefined;
/**
 * Represents token's exchange rate unit.
 * @member {String} exchangeRateUnit
 */

ListWalletTransactionsRIFungibleTokens.prototype['exchangeRateUnit'] = undefined;
/**
 * Defines the token's name as a string.
 * @member {String} name
 */

ListWalletTransactionsRIFungibleTokens.prototype['name'] = undefined;
/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one
 * @member {String} recipient
 */

ListWalletTransactionsRIFungibleTokens.prototype['recipient'] = undefined;
/**
 * Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
 * @member {String} sender
 */

ListWalletTransactionsRIFungibleTokens.prototype['sender'] = undefined;
/**
 * Defines the symbol of the fungible tokens.
 * @member {String} symbol
 */

ListWalletTransactionsRIFungibleTokens.prototype['symbol'] = undefined;
/**
 * Defines the decimals of the token, i.e. the number of digits that come after the decimal coma of the token.
 * @member {Number} tokenDecimals
 */

ListWalletTransactionsRIFungibleTokens.prototype['tokenDecimals'] = undefined;
/**
 * Defines the specific token type.
 * @member {String} type
 */

ListWalletTransactionsRIFungibleTokens.prototype['type'] = undefined;
var _default = ListWalletTransactionsRIFungibleTokens;
exports["default"] = _default;