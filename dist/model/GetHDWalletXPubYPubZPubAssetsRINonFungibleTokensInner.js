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
 * The GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner model module.
 * @module model/GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner
 * @version 1.7.2
 */
var GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner</code>.
   * @alias module:model/GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner
   * @param identifier {String} Represents tokens' contract address.
   * @param symbol {String} Defines the symbol of the non-fungible token.
   * @param tokenId {String} Represents tokens' unique identifier.
   * @param type {String} Defines the specific token type.
   */
  function GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner(identifier, symbol, tokenId, type) {
    _classCallCheck(this, GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner);

    GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner.initialize(this, identifier, symbol, tokenId, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner, null, [{
    key: "initialize",
    value: function initialize(obj, identifier, symbol, tokenId, type) {
      obj['identifier'] = identifier;
      obj['symbol'] = symbol;
      obj['tokenId'] = tokenId;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner} obj Optional instance to populate.
     * @return {module:model/GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner} The populated <code>GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner();

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

  return GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner;
}();
/**
 * Represents tokens' contract address.
 * @member {String} identifier
 */


GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner.prototype['identifier'] = undefined;
/**
 * Defines the symbol of the non-fungible token.
 * @member {String} symbol
 */

GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner.prototype['symbol'] = undefined;
/**
 * Represents tokens' unique identifier.
 * @member {String} tokenId
 */

GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner.prototype['tokenId'] = undefined;
/**
 * Defines the specific token type.
 * @member {String} type
 */

GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner.prototype['type'] = undefined;
var _default = GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner;
exports["default"] = _default;