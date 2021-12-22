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
 * The ListWalletTransactionsRINonFungibleTokens model module.
 * @module model/ListWalletTransactionsRINonFungibleTokens
 * @version 1.4.0
 */
var ListWalletTransactionsRINonFungibleTokens = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListWalletTransactionsRINonFungibleTokens</code>.
   * @alias module:model/ListWalletTransactionsRINonFungibleTokens
   * @param convertedAmount {String} Defines the tokens' converted amount value.
   * @param exchangeRateUnit {String} Represents token's exchange rate unit.
   * @param name {String} Defines the token's name as a string.
   * @param recipient {String} Defines the address to which the recipient receives the transferred tokens.
   * @param sender {String} Defines the address from which the sender transfers tokens.
   * @param symbol {String} Defines the symbol of the non-fungible tokens.
   * @param tokenId {String} Represents tokens' unique identifier.
   * @param type {String} Defines the specific token type.
   */
  function ListWalletTransactionsRINonFungibleTokens(convertedAmount, exchangeRateUnit, name, recipient, sender, symbol, tokenId, type) {
    _classCallCheck(this, ListWalletTransactionsRINonFungibleTokens);

    ListWalletTransactionsRINonFungibleTokens.initialize(this, convertedAmount, exchangeRateUnit, name, recipient, sender, symbol, tokenId, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListWalletTransactionsRINonFungibleTokens, null, [{
    key: "initialize",
    value: function initialize(obj, convertedAmount, exchangeRateUnit, name, recipient, sender, symbol, tokenId, type) {
      obj['convertedAmount'] = convertedAmount;
      obj['exchangeRateUnit'] = exchangeRateUnit;
      obj['name'] = name;
      obj['recipient'] = recipient;
      obj['sender'] = sender;
      obj['symbol'] = symbol;
      obj['tokenId'] = tokenId;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>ListWalletTransactionsRINonFungibleTokens</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListWalletTransactionsRINonFungibleTokens} obj Optional instance to populate.
     * @return {module:model/ListWalletTransactionsRINonFungibleTokens} The populated <code>ListWalletTransactionsRINonFungibleTokens</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListWalletTransactionsRINonFungibleTokens();

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

        if (data.hasOwnProperty('tokenId')) {
          obj['tokenId'] = _ApiClient["default"].convertToType(data['tokenId'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListWalletTransactionsRINonFungibleTokens;
}();
/**
 * Defines the tokens' converted amount value.
 * @member {String} convertedAmount
 */


ListWalletTransactionsRINonFungibleTokens.prototype['convertedAmount'] = undefined;
/**
 * Represents token's exchange rate unit.
 * @member {String} exchangeRateUnit
 */

ListWalletTransactionsRINonFungibleTokens.prototype['exchangeRateUnit'] = undefined;
/**
 * Defines the token's name as a string.
 * @member {String} name
 */

ListWalletTransactionsRINonFungibleTokens.prototype['name'] = undefined;
/**
 * Defines the address to which the recipient receives the transferred tokens.
 * @member {String} recipient
 */

ListWalletTransactionsRINonFungibleTokens.prototype['recipient'] = undefined;
/**
 * Defines the address from which the sender transfers tokens.
 * @member {String} sender
 */

ListWalletTransactionsRINonFungibleTokens.prototype['sender'] = undefined;
/**
 * Defines the symbol of the non-fungible tokens.
 * @member {String} symbol
 */

ListWalletTransactionsRINonFungibleTokens.prototype['symbol'] = undefined;
/**
 * Represents tokens' unique identifier.
 * @member {String} tokenId
 */

ListWalletTransactionsRINonFungibleTokens.prototype['tokenId'] = undefined;
/**
 * Defines the specific token type.
 * @member {String} type
 */

ListWalletTransactionsRINonFungibleTokens.prototype['type'] = undefined;
var _default = ListWalletTransactionsRINonFungibleTokens;
exports["default"] = _default;