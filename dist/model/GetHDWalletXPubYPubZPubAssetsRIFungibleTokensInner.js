"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
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
 * The GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner model module.
 * @module model/GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner
 * @version 1.11.0
 */
var GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner</code>.
   * @alias module:model/GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner
   * @param amount {String} Defines the amount of the fungible tokens.
   * @param identifier {String} Represents tokens' contract address.
   * @param symbol {String} Defines the symbol of the fungible token.
   * @param type {String} Defines the specific token type.
   */
  function GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner(amount, identifier, symbol, type) {
    _classCallCheck(this, GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner);
    GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner.initialize(this, amount, identifier, symbol, type);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner, null, [{
    key: "initialize",
    value: function initialize(obj, amount, identifier, symbol, type) {
      obj['amount'] = amount;
      obj['identifier'] = identifier;
      obj['symbol'] = symbol;
      obj['type'] = type;
    }

    /**
     * Constructs a <code>GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner} obj Optional instance to populate.
     * @return {module:model/GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner} The populated <code>GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner();
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
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

    /**
     * Validates the JSON data with respect to <code>GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
        throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
      }
      // ensure the json data is a string
      if (data['identifier'] && !(typeof data['identifier'] === 'string' || data['identifier'] instanceof String)) {
        throw new Error("Expected the field `identifier` to be a primitive type in the JSON string but got " + data['identifier']);
      }
      // ensure the json data is a string
      if (data['symbol'] && !(typeof data['symbol'] === 'string' || data['symbol'] instanceof String)) {
        throw new Error("Expected the field `symbol` to be a primitive type in the JSON string but got " + data['symbol']);
      }
      // ensure the json data is a string
      if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
        throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
      }
      return true;
    }
  }]);
  return GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner;
}();
GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner.RequiredProperties = ["amount", "identifier", "symbol", "type"];

/**
 * Defines the amount of the fungible tokens.
 * @member {String} amount
 */
GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner.prototype['amount'] = undefined;

/**
 * Represents tokens' contract address.
 * @member {String} identifier
 */
GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner.prototype['identifier'] = undefined;

/**
 * Defines the symbol of the fungible token.
 * @member {String} symbol
 */
GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner.prototype['symbol'] = undefined;

/**
 * Defines the specific token type.
 * @member {String} type
 */
GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner.prototype['type'] = undefined;
var _default = GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner;
exports["default"] = _default;