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
 * The GetHDWalletXPubYPubZPubAssetsRINonFungibleTokens model module.
 * @module model/GetHDWalletXPubYPubZPubAssetsRINonFungibleTokens
 * @version 1.5.0
 */
var GetHDWalletXPubYPubZPubAssetsRINonFungibleTokens = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetHDWalletXPubYPubZPubAssetsRINonFungibleTokens</code>.
   * @alias module:model/GetHDWalletXPubYPubZPubAssetsRINonFungibleTokens
   * @param identifier {String} Represents tokens' contract address.
   * @param symbol {String} Defines the symbol of the non-fungible token.
   * @param tokenId {String} Represents tokens' unique identifier.
   * @param type {String} Defines the specific token type.
   */
  function GetHDWalletXPubYPubZPubAssetsRINonFungibleTokens(identifier, symbol, tokenId, type) {
    _classCallCheck(this, GetHDWalletXPubYPubZPubAssetsRINonFungibleTokens);

    GetHDWalletXPubYPubZPubAssetsRINonFungibleTokens.initialize(this, identifier, symbol, tokenId, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetHDWalletXPubYPubZPubAssetsRINonFungibleTokens, null, [{
    key: "initialize",
    value: function initialize(obj, identifier, symbol, tokenId, type) {
      obj['identifier'] = identifier;
      obj['symbol'] = symbol;
      obj['tokenId'] = tokenId;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>GetHDWalletXPubYPubZPubAssetsRINonFungibleTokens</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetHDWalletXPubYPubZPubAssetsRINonFungibleTokens} obj Optional instance to populate.
     * @return {module:model/GetHDWalletXPubYPubZPubAssetsRINonFungibleTokens} The populated <code>GetHDWalletXPubYPubZPubAssetsRINonFungibleTokens</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetHDWalletXPubYPubZPubAssetsRINonFungibleTokens();

        if (data.hasOwnProperty('identifier')) {
          obj['identifier'] = _ApiClient["default"].convertToType(data['identifier'], 'String');
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

  return GetHDWalletXPubYPubZPubAssetsRINonFungibleTokens;
}();
/**
 * Represents tokens' contract address.
 * @member {String} identifier
 */


GetHDWalletXPubYPubZPubAssetsRINonFungibleTokens.prototype['identifier'] = undefined;
/**
 * Defines the symbol of the non-fungible token.
 * @member {String} symbol
 */

GetHDWalletXPubYPubZPubAssetsRINonFungibleTokens.prototype['symbol'] = undefined;
/**
 * Represents tokens' unique identifier.
 * @member {String} tokenId
 */

GetHDWalletXPubYPubZPubAssetsRINonFungibleTokens.prototype['tokenId'] = undefined;
/**
 * Defines the specific token type.
 * @member {String} type
 */

GetHDWalletXPubYPubZPubAssetsRINonFungibleTokens.prototype['type'] = undefined;
var _default = GetHDWalletXPubYPubZPubAssetsRINonFungibleTokens;
exports["default"] = _default;