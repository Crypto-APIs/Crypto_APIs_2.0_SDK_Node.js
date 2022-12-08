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
 * The GetAssetDetailsByAssetSymbolRISC model module.
 * @module model/GetAssetDetailsByAssetSymbolRISC
 * @version 1.11.0
 */
var GetAssetDetailsByAssetSymbolRISC = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetAssetDetailsByAssetSymbolRISC</code>.
   * Crypto Type Data
   * @alias module:model/GetAssetDetailsByAssetSymbolRISC
   * @param _1hourPriceChangeInPercentage {String} Represents the percentage of the asset's current price against the its price from 1 hour ago.
   * @param _1weekPriceChangeInPercentage {String} Represents the percentage of the asset's current price against the its price from 1 week ago.
   * @param _24hoursPriceChangeInPercentage {String} Represents the percentage of the asset's current price against the its price from 24 hours ago.
   * @param _24hoursTradingVolume {String} Represents the trading volume of the asset for the time frame of 24 hours.
   * @param assetType {module:model/GetAssetDetailsByAssetSymbolRISC.AssetTypeEnum} Defines the type of the supported asset. This could be either \"crypto\" or \"fiat\".
   * @param circulatingSupply {String} Represents the amount of the asset that is circulating on the market and in public hands.
   * @param marketCapInUSD {String} Defines the total market value of the asset's circulating supply in USD.
   * @param maxSupply {String} Represents the maximum amount of all coins of a specific asset that will ever exist in its lifetime.
   */
  function GetAssetDetailsByAssetSymbolRISC(_1hourPriceChangeInPercentage, _1weekPriceChangeInPercentage, _24hoursPriceChangeInPercentage, _24hoursTradingVolume, assetType, circulatingSupply, marketCapInUSD, maxSupply) {
    _classCallCheck(this, GetAssetDetailsByAssetSymbolRISC);
    GetAssetDetailsByAssetSymbolRISC.initialize(this, _1hourPriceChangeInPercentage, _1weekPriceChangeInPercentage, _24hoursPriceChangeInPercentage, _24hoursTradingVolume, assetType, circulatingSupply, marketCapInUSD, maxSupply);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetAssetDetailsByAssetSymbolRISC, null, [{
    key: "initialize",
    value: function initialize(obj, _1hourPriceChangeInPercentage, _1weekPriceChangeInPercentage, _24hoursPriceChangeInPercentage, _24hoursTradingVolume, assetType, circulatingSupply, marketCapInUSD, maxSupply) {
      obj['1HourPriceChangeInPercentage'] = _1hourPriceChangeInPercentage;
      obj['1WeekPriceChangeInPercentage'] = _1weekPriceChangeInPercentage;
      obj['24HoursPriceChangeInPercentage'] = _24hoursPriceChangeInPercentage;
      obj['24HoursTradingVolume'] = _24hoursTradingVolume;
      obj['assetType'] = assetType;
      obj['circulatingSupply'] = circulatingSupply;
      obj['marketCapInUSD'] = marketCapInUSD;
      obj['maxSupply'] = maxSupply;
    }

    /**
     * Constructs a <code>GetAssetDetailsByAssetSymbolRISC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAssetDetailsByAssetSymbolRISC} obj Optional instance to populate.
     * @return {module:model/GetAssetDetailsByAssetSymbolRISC} The populated <code>GetAssetDetailsByAssetSymbolRISC</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetAssetDetailsByAssetSymbolRISC();
        if (data.hasOwnProperty('1HourPriceChangeInPercentage')) {
          obj['1HourPriceChangeInPercentage'] = _ApiClient["default"].convertToType(data['1HourPriceChangeInPercentage'], 'String');
        }
        if (data.hasOwnProperty('1WeekPriceChangeInPercentage')) {
          obj['1WeekPriceChangeInPercentage'] = _ApiClient["default"].convertToType(data['1WeekPriceChangeInPercentage'], 'String');
        }
        if (data.hasOwnProperty('24HoursPriceChangeInPercentage')) {
          obj['24HoursPriceChangeInPercentage'] = _ApiClient["default"].convertToType(data['24HoursPriceChangeInPercentage'], 'String');
        }
        if (data.hasOwnProperty('24HoursTradingVolume')) {
          obj['24HoursTradingVolume'] = _ApiClient["default"].convertToType(data['24HoursTradingVolume'], 'String');
        }
        if (data.hasOwnProperty('assetType')) {
          obj['assetType'] = _ApiClient["default"].convertToType(data['assetType'], 'String');
        }
        if (data.hasOwnProperty('circulatingSupply')) {
          obj['circulatingSupply'] = _ApiClient["default"].convertToType(data['circulatingSupply'], 'String');
        }
        if (data.hasOwnProperty('marketCapInUSD')) {
          obj['marketCapInUSD'] = _ApiClient["default"].convertToType(data['marketCapInUSD'], 'String');
        }
        if (data.hasOwnProperty('maxSupply')) {
          obj['maxSupply'] = _ApiClient["default"].convertToType(data['maxSupply'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetAssetDetailsByAssetSymbolRISC</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetAssetDetailsByAssetSymbolRISC</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(GetAssetDetailsByAssetSymbolRISC.RequiredProperties),
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
      if (data['1HourPriceChangeInPercentage'] && !(typeof data['1HourPriceChangeInPercentage'] === 'string' || data['1HourPriceChangeInPercentage'] instanceof String)) {
        throw new Error("Expected the field `1HourPriceChangeInPercentage` to be a primitive type in the JSON string but got " + data['1HourPriceChangeInPercentage']);
      }
      // ensure the json data is a string
      if (data['1WeekPriceChangeInPercentage'] && !(typeof data['1WeekPriceChangeInPercentage'] === 'string' || data['1WeekPriceChangeInPercentage'] instanceof String)) {
        throw new Error("Expected the field `1WeekPriceChangeInPercentage` to be a primitive type in the JSON string but got " + data['1WeekPriceChangeInPercentage']);
      }
      // ensure the json data is a string
      if (data['24HoursPriceChangeInPercentage'] && !(typeof data['24HoursPriceChangeInPercentage'] === 'string' || data['24HoursPriceChangeInPercentage'] instanceof String)) {
        throw new Error("Expected the field `24HoursPriceChangeInPercentage` to be a primitive type in the JSON string but got " + data['24HoursPriceChangeInPercentage']);
      }
      // ensure the json data is a string
      if (data['24HoursTradingVolume'] && !(typeof data['24HoursTradingVolume'] === 'string' || data['24HoursTradingVolume'] instanceof String)) {
        throw new Error("Expected the field `24HoursTradingVolume` to be a primitive type in the JSON string but got " + data['24HoursTradingVolume']);
      }
      // ensure the json data is a string
      if (data['assetType'] && !(typeof data['assetType'] === 'string' || data['assetType'] instanceof String)) {
        throw new Error("Expected the field `assetType` to be a primitive type in the JSON string but got " + data['assetType']);
      }
      // ensure the json data is a string
      if (data['circulatingSupply'] && !(typeof data['circulatingSupply'] === 'string' || data['circulatingSupply'] instanceof String)) {
        throw new Error("Expected the field `circulatingSupply` to be a primitive type in the JSON string but got " + data['circulatingSupply']);
      }
      // ensure the json data is a string
      if (data['marketCapInUSD'] && !(typeof data['marketCapInUSD'] === 'string' || data['marketCapInUSD'] instanceof String)) {
        throw new Error("Expected the field `marketCapInUSD` to be a primitive type in the JSON string but got " + data['marketCapInUSD']);
      }
      // ensure the json data is a string
      if (data['maxSupply'] && !(typeof data['maxSupply'] === 'string' || data['maxSupply'] instanceof String)) {
        throw new Error("Expected the field `maxSupply` to be a primitive type in the JSON string but got " + data['maxSupply']);
      }
      return true;
    }
  }]);
  return GetAssetDetailsByAssetSymbolRISC;
}();
GetAssetDetailsByAssetSymbolRISC.RequiredProperties = ["1HourPriceChangeInPercentage", "1WeekPriceChangeInPercentage", "24HoursPriceChangeInPercentage", "24HoursTradingVolume", "assetType", "circulatingSupply", "marketCapInUSD", "maxSupply"];

/**
 * Represents the percentage of the asset's current price against the its price from 1 hour ago.
 * @member {String} 1HourPriceChangeInPercentage
 */
GetAssetDetailsByAssetSymbolRISC.prototype['1HourPriceChangeInPercentage'] = undefined;

/**
 * Represents the percentage of the asset's current price against the its price from 1 week ago.
 * @member {String} 1WeekPriceChangeInPercentage
 */
GetAssetDetailsByAssetSymbolRISC.prototype['1WeekPriceChangeInPercentage'] = undefined;

/**
 * Represents the percentage of the asset's current price against the its price from 24 hours ago.
 * @member {String} 24HoursPriceChangeInPercentage
 */
GetAssetDetailsByAssetSymbolRISC.prototype['24HoursPriceChangeInPercentage'] = undefined;

/**
 * Represents the trading volume of the asset for the time frame of 24 hours.
 * @member {String} 24HoursTradingVolume
 */
GetAssetDetailsByAssetSymbolRISC.prototype['24HoursTradingVolume'] = undefined;

/**
 * Defines the type of the supported asset. This could be either \"crypto\" or \"fiat\".
 * @member {module:model/GetAssetDetailsByAssetSymbolRISC.AssetTypeEnum} assetType
 */
GetAssetDetailsByAssetSymbolRISC.prototype['assetType'] = undefined;

/**
 * Represents the amount of the asset that is circulating on the market and in public hands.
 * @member {String} circulatingSupply
 */
GetAssetDetailsByAssetSymbolRISC.prototype['circulatingSupply'] = undefined;

/**
 * Defines the total market value of the asset's circulating supply in USD.
 * @member {String} marketCapInUSD
 */
GetAssetDetailsByAssetSymbolRISC.prototype['marketCapInUSD'] = undefined;

/**
 * Represents the maximum amount of all coins of a specific asset that will ever exist in its lifetime.
 * @member {String} maxSupply
 */
GetAssetDetailsByAssetSymbolRISC.prototype['maxSupply'] = undefined;

/**
 * Allowed values for the <code>assetType</code> property.
 * @enum {String}
 * @readonly
 */
GetAssetDetailsByAssetSymbolRISC['AssetTypeEnum'] = {
  /**
   * value: "coin"
   * @const
   */
  "coin": "coin",
  /**
   * value: "token"
   * @const
   */
  "token": "token"
};
var _default = GetAssetDetailsByAssetSymbolRISC;
exports["default"] = _default;