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
 * The ListDepositAddressesRINonFungibleTokens model module.
 * @module model/ListDepositAddressesRINonFungibleTokens
 * @version 1.5.0
 */
var ListDepositAddressesRINonFungibleTokens = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListDepositAddressesRINonFungibleTokens</code>.
   * @alias module:model/ListDepositAddressesRINonFungibleTokens
   * @param identifier {String} Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
   * @param name {String} Defines the token's name as a string.
   * @param symbol {String} Defines the symbol of the non-fungible tokens.
   * @param tokenId {String} Represents tokens' unique identifier.
   * @param type {String} Defines the specific token type.
   */
  function ListDepositAddressesRINonFungibleTokens(identifier, name, symbol, tokenId, type) {
    _classCallCheck(this, ListDepositAddressesRINonFungibleTokens);

    ListDepositAddressesRINonFungibleTokens.initialize(this, identifier, name, symbol, tokenId, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListDepositAddressesRINonFungibleTokens, null, [{
    key: "initialize",
    value: function initialize(obj, identifier, name, symbol, tokenId, type) {
      obj['identifier'] = identifier;
      obj['name'] = name;
      obj['symbol'] = symbol;
      obj['tokenId'] = tokenId;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>ListDepositAddressesRINonFungibleTokens</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListDepositAddressesRINonFungibleTokens} obj Optional instance to populate.
     * @return {module:model/ListDepositAddressesRINonFungibleTokens} The populated <code>ListDepositAddressesRINonFungibleTokens</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListDepositAddressesRINonFungibleTokens();

        if (data.hasOwnProperty('identifier')) {
          obj['identifier'] = _ApiClient["default"].convertToType(data['identifier'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
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

  return ListDepositAddressesRINonFungibleTokens;
}();
/**
 * Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
 * @member {String} identifier
 */


ListDepositAddressesRINonFungibleTokens.prototype['identifier'] = undefined;
/**
 * Defines the token's name as a string.
 * @member {String} name
 */

ListDepositAddressesRINonFungibleTokens.prototype['name'] = undefined;
/**
 * Defines the symbol of the non-fungible tokens.
 * @member {String} symbol
 */

ListDepositAddressesRINonFungibleTokens.prototype['symbol'] = undefined;
/**
 * Represents tokens' unique identifier.
 * @member {String} tokenId
 */

ListDepositAddressesRINonFungibleTokens.prototype['tokenId'] = undefined;
/**
 * Defines the specific token type.
 * @member {String} type
 */

ListDepositAddressesRINonFungibleTokens.prototype['type'] = undefined;
var _default = ListDepositAddressesRINonFungibleTokens;
exports["default"] = _default;