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
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListAllAssetsByWalletIDRI model module.
 * @module model/ListAllAssetsByWalletIDRI
 * @version 1.11.0
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

    /**
     * Validates the JSON data with respect to <code>ListAllAssetsByWalletIDRI</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListAllAssetsByWalletIDRI</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(ListAllAssetsByWalletIDRI.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['coins']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['coins'])) {
          throw new Error("Expected the field `coins` to be an array in the JSON data but got " + data['coins']);
        }
        // validate the optional field `coins` (array)
        var _iterator2 = _createForOfIteratorHelper(data['coins']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _ListAllAssetsFromAllWalletsRICoinsInner["default"].validateJsonObject(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      if (data['fungibleTokens']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['fungibleTokens'])) {
          throw new Error("Expected the field `fungibleTokens` to be an array in the JSON data but got " + data['fungibleTokens']);
        }
        // validate the optional field `fungibleTokens` (array)
        var _iterator3 = _createForOfIteratorHelper(data['fungibleTokens']),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _item = _step3.value;
            _ListAllAssetsFromAllWalletsRIFungibleTokensInner["default"].validateJsonObject(_item);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        ;
      }
      if (data['nonFungibleTokens']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['nonFungibleTokens'])) {
          throw new Error("Expected the field `nonFungibleTokens` to be an array in the JSON data but got " + data['nonFungibleTokens']);
        }
        // validate the optional field `nonFungibleTokens` (array)
        var _iterator4 = _createForOfIteratorHelper(data['nonFungibleTokens']),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _item2 = _step4.value;
            _ListAllAssetsFromAllWalletsRINonFungibleTokensInner["default"].validateJsonObject(_item2);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['walletId'] && !(typeof data['walletId'] === 'string' || data['walletId'] instanceof String)) {
        throw new Error("Expected the field `walletId` to be a primitive type in the JSON string but got " + data['walletId']);
      }
      // ensure the json data is a string
      if (data['walletName'] && !(typeof data['walletName'] === 'string' || data['walletName'] instanceof String)) {
        throw new Error("Expected the field `walletName` to be a primitive type in the JSON string but got " + data['walletName']);
      }
      return true;
    }
  }]);
  return ListAllAssetsByWalletIDRI;
}();
ListAllAssetsByWalletIDRI.RequiredProperties = ["coins", "fungibleTokens", "nonFungibleTokens", "walletId", "walletName"];

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