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
 * The GetWalletAssetDetailsRIFungibleTokens model module.
 * @module model/GetWalletAssetDetailsRIFungibleTokens
 * @version 1.4.0
 */
var GetWalletAssetDetailsRIFungibleTokens = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetWalletAssetDetailsRIFungibleTokens</code>.
   * @alias module:model/GetWalletAssetDetailsRIFungibleTokens
   * @param confirmedAmount {String} Defines the amount of the fungible tokens.
   * @param identifier {String} Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
   * @param symbol {String} Defines the symbol of the fungible tokens.
   * @param type {String} Defines the specific token type.
   */
  function GetWalletAssetDetailsRIFungibleTokens(confirmedAmount, identifier, symbol, type) {
    _classCallCheck(this, GetWalletAssetDetailsRIFungibleTokens);

    GetWalletAssetDetailsRIFungibleTokens.initialize(this, confirmedAmount, identifier, symbol, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetWalletAssetDetailsRIFungibleTokens, null, [{
    key: "initialize",
    value: function initialize(obj, confirmedAmount, identifier, symbol, type) {
      obj['confirmedAmount'] = confirmedAmount;
      obj['identifier'] = identifier;
      obj['symbol'] = symbol;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>GetWalletAssetDetailsRIFungibleTokens</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWalletAssetDetailsRIFungibleTokens} obj Optional instance to populate.
     * @return {module:model/GetWalletAssetDetailsRIFungibleTokens} The populated <code>GetWalletAssetDetailsRIFungibleTokens</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetWalletAssetDetailsRIFungibleTokens();

        if (data.hasOwnProperty('confirmedAmount')) {
          obj['confirmedAmount'] = _ApiClient["default"].convertToType(data['confirmedAmount'], 'String');
        }

        if (data.hasOwnProperty('identifier')) {
          obj['identifier'] = _ApiClient["default"].convertToType(data['identifier'], 'String');
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

  return GetWalletAssetDetailsRIFungibleTokens;
}();
/**
 * Defines the amount of the fungible tokens.
 * @member {String} confirmedAmount
 */


GetWalletAssetDetailsRIFungibleTokens.prototype['confirmedAmount'] = undefined;
/**
 * Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
 * @member {String} identifier
 */

GetWalletAssetDetailsRIFungibleTokens.prototype['identifier'] = undefined;
/**
 * Defines the symbol of the fungible tokens.
 * @member {String} symbol
 */

GetWalletAssetDetailsRIFungibleTokens.prototype['symbol'] = undefined;
/**
 * Defines the specific token type.
 * @member {String} type
 */

GetWalletAssetDetailsRIFungibleTokens.prototype['type'] = undefined;
var _default = GetWalletAssetDetailsRIFungibleTokens;
exports["default"] = _default;