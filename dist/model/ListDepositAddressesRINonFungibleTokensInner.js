"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListDepositAddressesRINonFungibleTokensInner model module.
 * @module model/ListDepositAddressesRINonFungibleTokensInner
 * @version 1.13.0
 */
var ListDepositAddressesRINonFungibleTokensInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListDepositAddressesRINonFungibleTokensInner</code>.
   * @alias module:model/ListDepositAddressesRINonFungibleTokensInner
   * @param identifier {String} Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
   * @param name {String} Defines the token's name as a string.
   * @param symbol {String} Defines the symbol of the non-fungible tokens.
   * @param tokenId {String} Represents tokens' unique identifier.
   * @param type {String} Defines the specific token type.
   */
  function ListDepositAddressesRINonFungibleTokensInner(identifier, name, symbol, tokenId, type) {
    _classCallCheck(this, ListDepositAddressesRINonFungibleTokensInner);
    ListDepositAddressesRINonFungibleTokensInner.initialize(this, identifier, name, symbol, tokenId, type);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListDepositAddressesRINonFungibleTokensInner, null, [{
    key: "initialize",
    value: function initialize(obj, identifier, name, symbol, tokenId, type) {
      obj['identifier'] = identifier;
      obj['name'] = name;
      obj['symbol'] = symbol;
      obj['tokenId'] = tokenId;
      obj['type'] = type;
    }

    /**
     * Constructs a <code>ListDepositAddressesRINonFungibleTokensInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListDepositAddressesRINonFungibleTokensInner} obj Optional instance to populate.
     * @return {module:model/ListDepositAddressesRINonFungibleTokensInner} The populated <code>ListDepositAddressesRINonFungibleTokensInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListDepositAddressesRINonFungibleTokensInner();
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
  return ListDepositAddressesRINonFungibleTokensInner;
}();
/**
 * Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
 * @member {String} identifier
 */
ListDepositAddressesRINonFungibleTokensInner.prototype['identifier'] = undefined;

/**
 * Defines the token's name as a string.
 * @member {String} name
 */
ListDepositAddressesRINonFungibleTokensInner.prototype['name'] = undefined;

/**
 * Defines the symbol of the non-fungible tokens.
 * @member {String} symbol
 */
ListDepositAddressesRINonFungibleTokensInner.prototype['symbol'] = undefined;

/**
 * Represents tokens' unique identifier.
 * @member {String} tokenId
 */
ListDepositAddressesRINonFungibleTokensInner.prototype['tokenId'] = undefined;

/**
 * Defines the specific token type.
 * @member {String} type
 */
ListDepositAddressesRINonFungibleTokensInner.prototype['type'] = undefined;
var _default = ListDepositAddressesRINonFungibleTokensInner;
exports["default"] = _default;