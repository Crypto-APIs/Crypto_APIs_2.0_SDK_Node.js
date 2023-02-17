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
 * The ListAllAssetsFromAllWalletsRIFungibleTokensInner model module.
 * @module model/ListAllAssetsFromAllWalletsRIFungibleTokensInner
 * @version 1.13.0
 */
var ListAllAssetsFromAllWalletsRIFungibleTokensInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAllAssetsFromAllWalletsRIFungibleTokensInner</code>.
   * @alias module:model/ListAllAssetsFromAllWalletsRIFungibleTokensInner
   * @param amount {String} Defines the amount of the fungible tokens.
   * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param identifier {String} Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
   * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
   * @param symbol {String} Defines the symbol of the fungible tokens.
   * @param type {String} Defines the specific token type.
   */
  function ListAllAssetsFromAllWalletsRIFungibleTokensInner(amount, blockchain, identifier, network, symbol, type) {
    _classCallCheck(this, ListAllAssetsFromAllWalletsRIFungibleTokensInner);
    ListAllAssetsFromAllWalletsRIFungibleTokensInner.initialize(this, amount, blockchain, identifier, network, symbol, type);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListAllAssetsFromAllWalletsRIFungibleTokensInner, null, [{
    key: "initialize",
    value: function initialize(obj, amount, blockchain, identifier, network, symbol, type) {
      obj['amount'] = amount;
      obj['blockchain'] = blockchain;
      obj['identifier'] = identifier;
      obj['network'] = network;
      obj['symbol'] = symbol;
      obj['type'] = type;
    }

    /**
     * Constructs a <code>ListAllAssetsFromAllWalletsRIFungibleTokensInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllAssetsFromAllWalletsRIFungibleTokensInner} obj Optional instance to populate.
     * @return {module:model/ListAllAssetsFromAllWalletsRIFungibleTokensInner} The populated <code>ListAllAssetsFromAllWalletsRIFungibleTokensInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAllAssetsFromAllWalletsRIFungibleTokensInner();
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
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
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ListAllAssetsFromAllWalletsRIFungibleTokensInner;
}();
/**
 * Defines the amount of the fungible tokens.
 * @member {String} amount
 */
ListAllAssetsFromAllWalletsRIFungibleTokensInner.prototype['amount'] = undefined;

/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
ListAllAssetsFromAllWalletsRIFungibleTokensInner.prototype['blockchain'] = undefined;

/**
 * Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
 * @member {String} identifier
 */
ListAllAssetsFromAllWalletsRIFungibleTokensInner.prototype['identifier'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
 * @member {String} network
 */
ListAllAssetsFromAllWalletsRIFungibleTokensInner.prototype['network'] = undefined;

/**
 * Defines the symbol of the fungible tokens.
 * @member {String} symbol
 */
ListAllAssetsFromAllWalletsRIFungibleTokensInner.prototype['symbol'] = undefined;

/**
 * Defines the specific token type.
 * @member {String} type
 */
ListAllAssetsFromAllWalletsRIFungibleTokensInner.prototype['type'] = undefined;
var _default = ListAllAssetsFromAllWalletsRIFungibleTokensInner;
exports["default"] = _default;