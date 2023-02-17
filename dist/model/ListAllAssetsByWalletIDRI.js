"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListAllAssetsFromAllWalletsRICoinsInner = _interopRequireDefault(require("./ListAllAssetsFromAllWalletsRICoinsInner"));
var _ListAllAssetsFromAllWalletsRIFungibleTokensInner = _interopRequireDefault(require("./ListAllAssetsFromAllWalletsRIFungibleTokensInner"));
var _ListAllAssetsFromAllWalletsRINonFungibleTokensInner = _interopRequireDefault(require("./ListAllAssetsFromAllWalletsRINonFungibleTokensInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListAllAssetsByWalletIDRI model module.
 * @module model/ListAllAssetsByWalletIDRI
 * @version 1.13.0
 */
var ListAllAssetsByWalletIDRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAllAssetsByWalletIDRI</code>.
   * @alias module:model/ListAllAssetsByWalletIDRI
   * @param coins {Array.<module:model/ListAllAssetsFromAllWalletsRICoinsInner>} 
   * @param fungibleTokens {Array.<module:model/ListAllAssetsFromAllWalletsRIFungibleTokensInner>} Represents fungible tokens'es detailed information
   * @param nonFungibleTokens {Array.<module:model/ListAllAssetsFromAllWalletsRINonFungibleTokensInner>} Represents non-fungible tokens'es detailed information.
   * @param walletId {String} Defines the unique ID of the Wallet.
   * @param walletName {String} Represents the name of the wallet.
   */
  function ListAllAssetsByWalletIDRI(coins, fungibleTokens, nonFungibleTokens, walletId, walletName) {
    _classCallCheck(this, ListAllAssetsByWalletIDRI);
    ListAllAssetsByWalletIDRI.initialize(this, coins, fungibleTokens, nonFungibleTokens, walletId, walletName);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListAllAssetsByWalletIDRI, null, [{
    key: "initialize",
    value: function initialize(obj, coins, fungibleTokens, nonFungibleTokens, walletId, walletName) {
      obj['coins'] = coins;
      obj['fungibleTokens'] = fungibleTokens;
      obj['nonFungibleTokens'] = nonFungibleTokens;
      obj['walletId'] = walletId;
      obj['walletName'] = walletName;
    }

    /**
     * Constructs a <code>ListAllAssetsByWalletIDRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllAssetsByWalletIDRI} obj Optional instance to populate.
     * @return {module:model/ListAllAssetsByWalletIDRI} The populated <code>ListAllAssetsByWalletIDRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAllAssetsByWalletIDRI();
        if (data.hasOwnProperty('coins')) {
          obj['coins'] = _ApiClient["default"].convertToType(data['coins'], [_ListAllAssetsFromAllWalletsRICoinsInner["default"]]);
        }
        if (data.hasOwnProperty('fungibleTokens')) {
          obj['fungibleTokens'] = _ApiClient["default"].convertToType(data['fungibleTokens'], [_ListAllAssetsFromAllWalletsRIFungibleTokensInner["default"]]);
        }
        if (data.hasOwnProperty('nonFungibleTokens')) {
          obj['nonFungibleTokens'] = _ApiClient["default"].convertToType(data['nonFungibleTokens'], [_ListAllAssetsFromAllWalletsRINonFungibleTokensInner["default"]]);
        }
        if (data.hasOwnProperty('walletId')) {
          obj['walletId'] = _ApiClient["default"].convertToType(data['walletId'], 'String');
        }
        if (data.hasOwnProperty('walletName')) {
          obj['walletName'] = _ApiClient["default"].convertToType(data['walletName'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ListAllAssetsByWalletIDRI;
}();
/**
 * @member {Array.<module:model/ListAllAssetsFromAllWalletsRICoinsInner>} coins
 */
ListAllAssetsByWalletIDRI.prototype['coins'] = undefined;

/**
 * Represents fungible tokens'es detailed information
 * @member {Array.<module:model/ListAllAssetsFromAllWalletsRIFungibleTokensInner>} fungibleTokens
 */
ListAllAssetsByWalletIDRI.prototype['fungibleTokens'] = undefined;

/**
 * Represents non-fungible tokens'es detailed information.
 * @member {Array.<module:model/ListAllAssetsFromAllWalletsRINonFungibleTokensInner>} nonFungibleTokens
 */
ListAllAssetsByWalletIDRI.prototype['nonFungibleTokens'] = undefined;

/**
 * Defines the unique ID of the Wallet.
 * @member {String} walletId
 */
ListAllAssetsByWalletIDRI.prototype['walletId'] = undefined;

/**
 * Represents the name of the wallet.
 * @member {String} walletName
 */
ListAllAssetsByWalletIDRI.prototype['walletName'] = undefined;
var _default = ListAllAssetsByWalletIDRI;
exports["default"] = _default;