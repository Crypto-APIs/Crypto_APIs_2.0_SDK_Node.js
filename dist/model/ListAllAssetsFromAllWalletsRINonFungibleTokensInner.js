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
 * The ListAllAssetsFromAllWalletsRINonFungibleTokensInner model module.
 * @module model/ListAllAssetsFromAllWalletsRINonFungibleTokensInner
 * @version 1.13.0
 */
var ListAllAssetsFromAllWalletsRINonFungibleTokensInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAllAssetsFromAllWalletsRINonFungibleTokensInner</code>.
   * @alias module:model/ListAllAssetsFromAllWalletsRINonFungibleTokensInner
   * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param identifier {String} Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
   * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
   * @param symbol {String} Defines the symbol of the non-fungible tokens.
   * @param tokenId {String} Represents tokens' unique identifier.
   * @param type {String} Defines the specific token type.
   */
  function ListAllAssetsFromAllWalletsRINonFungibleTokensInner(blockchain, identifier, network, symbol, tokenId, type) {
    _classCallCheck(this, ListAllAssetsFromAllWalletsRINonFungibleTokensInner);
    ListAllAssetsFromAllWalletsRINonFungibleTokensInner.initialize(this, blockchain, identifier, network, symbol, tokenId, type);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListAllAssetsFromAllWalletsRINonFungibleTokensInner, null, [{
    key: "initialize",
    value: function initialize(obj, blockchain, identifier, network, symbol, tokenId, type) {
      obj['blockchain'] = blockchain;
      obj['identifier'] = identifier;
      obj['network'] = network;
      obj['symbol'] = symbol;
      obj['tokenId'] = tokenId;
      obj['type'] = type;
    }

    /**
     * Constructs a <code>ListAllAssetsFromAllWalletsRINonFungibleTokensInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllAssetsFromAllWalletsRINonFungibleTokensInner} obj Optional instance to populate.
     * @return {module:model/ListAllAssetsFromAllWalletsRINonFungibleTokensInner} The populated <code>ListAllAssetsFromAllWalletsRINonFungibleTokensInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAllAssetsFromAllWalletsRINonFungibleTokensInner();
        if (data.hasOwnProperty('blockchain')) {
          obj['blockchain'] = _ApiClient["default"].convertToType(data['blockchain'], 'String');
        }
        if (data.hasOwnProperty('identifier')) {
          obj['identifier'] = _ApiClient["default"].convertToType(data['identifier'], 'String');
        }
        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
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
  return ListAllAssetsFromAllWalletsRINonFungibleTokensInner;
}();
/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
ListAllAssetsFromAllWalletsRINonFungibleTokensInner.prototype['blockchain'] = undefined;

/**
 * Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
 * @member {String} identifier
 */
ListAllAssetsFromAllWalletsRINonFungibleTokensInner.prototype['identifier'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
 * @member {String} network
 */
ListAllAssetsFromAllWalletsRINonFungibleTokensInner.prototype['network'] = undefined;

/**
 * Defines the symbol of the non-fungible tokens.
 * @member {String} symbol
 */
ListAllAssetsFromAllWalletsRINonFungibleTokensInner.prototype['symbol'] = undefined;

/**
 * Represents tokens' unique identifier.
 * @member {String} tokenId
 */
ListAllAssetsFromAllWalletsRINonFungibleTokensInner.prototype['tokenId'] = undefined;

/**
 * Defines the specific token type.
 * @member {String} type
 */
ListAllAssetsFromAllWalletsRINonFungibleTokensInner.prototype['type'] = undefined;
var _default = ListAllAssetsFromAllWalletsRINonFungibleTokensInner;
exports["default"] = _default;