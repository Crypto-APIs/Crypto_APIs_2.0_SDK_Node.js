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
 * The ListAllAssetsFromAllWalletsRINonFungibleTokens model module.
 * @module model/ListAllAssetsFromAllWalletsRINonFungibleTokens
 * @version 1.5.0
 */
var ListAllAssetsFromAllWalletsRINonFungibleTokens = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAllAssetsFromAllWalletsRINonFungibleTokens</code>.
   * @alias module:model/ListAllAssetsFromAllWalletsRINonFungibleTokens
   * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param identifier {String} Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
   * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
   * @param symbol {String} Defines the symbol of the non-fungible tokens.
   * @param tokenId {String} Represents tokens' unique identifier.
   * @param type {String} Defines the specific token type.
   */
  function ListAllAssetsFromAllWalletsRINonFungibleTokens(blockchain, identifier, network, symbol, tokenId, type) {
    _classCallCheck(this, ListAllAssetsFromAllWalletsRINonFungibleTokens);

    ListAllAssetsFromAllWalletsRINonFungibleTokens.initialize(this, blockchain, identifier, network, symbol, tokenId, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListAllAssetsFromAllWalletsRINonFungibleTokens, null, [{
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
     * Constructs a <code>ListAllAssetsFromAllWalletsRINonFungibleTokens</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllAssetsFromAllWalletsRINonFungibleTokens} obj Optional instance to populate.
     * @return {module:model/ListAllAssetsFromAllWalletsRINonFungibleTokens} The populated <code>ListAllAssetsFromAllWalletsRINonFungibleTokens</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAllAssetsFromAllWalletsRINonFungibleTokens();

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

  return ListAllAssetsFromAllWalletsRINonFungibleTokens;
}();
/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */


ListAllAssetsFromAllWalletsRINonFungibleTokens.prototype['blockchain'] = undefined;
/**
 * Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
 * @member {String} identifier
 */

ListAllAssetsFromAllWalletsRINonFungibleTokens.prototype['identifier'] = undefined;
/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
 * @member {String} network
 */

ListAllAssetsFromAllWalletsRINonFungibleTokens.prototype['network'] = undefined;
/**
 * Defines the symbol of the non-fungible tokens.
 * @member {String} symbol
 */

ListAllAssetsFromAllWalletsRINonFungibleTokens.prototype['symbol'] = undefined;
/**
 * Represents tokens' unique identifier.
 * @member {String} tokenId
 */

ListAllAssetsFromAllWalletsRINonFungibleTokens.prototype['tokenId'] = undefined;
/**
 * Defines the specific token type.
 * @member {String} type
 */

ListAllAssetsFromAllWalletsRINonFungibleTokens.prototype['type'] = undefined;
var _default = ListAllAssetsFromAllWalletsRINonFungibleTokens;
exports["default"] = _default;