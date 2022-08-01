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
 * The ListDepositAddressesRIFungibleTokensInner model module.
 * @module model/ListDepositAddressesRIFungibleTokensInner
 * @version 1.7.2
 */
var ListDepositAddressesRIFungibleTokensInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListDepositAddressesRIFungibleTokensInner</code>.
   * @alias module:model/ListDepositAddressesRIFungibleTokensInner
   * @param amount {String} Defines the amount of the fungible tokens.
   * @param identifier {String} Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
   * @param name {String} Defines the token's name as a string.
   * @param symbol {String} Defines the symbol of the fungible tokens.
   * @param tokenDecimals {Number} Defines the decimals of the token, i.e. the number of digits that come after the decimal coma of the token.
   * @param type {String} Defines the specific token type.
   */
  function ListDepositAddressesRIFungibleTokensInner(amount, identifier, name, symbol, tokenDecimals, type) {
    _classCallCheck(this, ListDepositAddressesRIFungibleTokensInner);

    ListDepositAddressesRIFungibleTokensInner.initialize(this, amount, identifier, name, symbol, tokenDecimals, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListDepositAddressesRIFungibleTokensInner, null, [{
    key: "initialize",
    value: function initialize(obj, amount, identifier, name, symbol, tokenDecimals, type) {
      obj['amount'] = amount;
      obj['identifier'] = identifier;
      obj['name'] = name;
      obj['symbol'] = symbol;
      obj['tokenDecimals'] = tokenDecimals;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>ListDepositAddressesRIFungibleTokensInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListDepositAddressesRIFungibleTokensInner} obj Optional instance to populate.
     * @return {module:model/ListDepositAddressesRIFungibleTokensInner} The populated <code>ListDepositAddressesRIFungibleTokensInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListDepositAddressesRIFungibleTokensInner();

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }

        if (data.hasOwnProperty('identifier')) {
          obj['identifier'] = _ApiClient["default"].convertToType(data['identifier'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
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

  return ListDepositAddressesRIFungibleTokensInner;
}();
/**
 * Defines the amount of the fungible tokens.
 * @member {String} amount
 */


ListDepositAddressesRIFungibleTokensInner.prototype['amount'] = undefined;
/**
 * Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
 * @member {String} identifier
 */

ListDepositAddressesRIFungibleTokensInner.prototype['identifier'] = undefined;
/**
 * Defines the token's name as a string.
 * @member {String} name
 */

ListDepositAddressesRIFungibleTokensInner.prototype['name'] = undefined;
/**
 * Defines the symbol of the fungible tokens.
 * @member {String} symbol
 */

ListDepositAddressesRIFungibleTokensInner.prototype['symbol'] = undefined;
/**
 * Defines the decimals of the token, i.e. the number of digits that come after the decimal coma of the token.
 * @member {Number} tokenDecimals
 */

ListDepositAddressesRIFungibleTokensInner.prototype['tokenDecimals'] = undefined;
/**
 * Defines the specific token type.
 * @member {String} type
 */

ListDepositAddressesRIFungibleTokensInner.prototype['type'] = undefined;
var _default = ListDepositAddressesRIFungibleTokensInner;
exports["default"] = _default;