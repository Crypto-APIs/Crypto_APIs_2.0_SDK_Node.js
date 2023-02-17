"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetAssetDetailsByAssetIDRISC = _interopRequireDefault(require("./GetAssetDetailsByAssetIDRISC"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetAssetDetailsByAssetIDRIS model module.
 * @module model/GetAssetDetailsByAssetIDRIS
 * @version 1.13.0
 */
var GetAssetDetailsByAssetIDRIS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetAssetDetailsByAssetIDRIS</code>.
   * Represents a specific asset&#39;s data depending on its type (whether it is \&quot;crypto\&quot; or \&quot;fiat\&quot;).
   * @alias module:model/GetAssetDetailsByAssetIDRIS
   * @implements module:model/GetAssetDetailsByAssetIDRISC
   * @param _1hourPriceChangeInPercentage {String} Represents the percentage of the asset's current price against the its price from 1 hour ago.
   * @param _1weekPriceChangeInPercentage {String} Represents the percentage of the asset's current price against the its price from 1 week ago.
   * @param _24hoursPriceChangeInPercentage {String} Represents the percentage of the asset's current price against the its price from 24 hours ago.
   * @param _24hoursTradingVolume {String} Represents the trading volume of the asset for the time frame of 24 hours.
   * @param assetType {module:model/GetAssetDetailsByAssetIDRIS.AssetTypeEnum} Represent a subtype of the crypto assets. Could be COIN or TOKEN.
   * @param circulatingSupply {String} Represents the amount of the asset that is circulating on the market and in public hands.
   * @param marketCapInUSD {String} Defines the total market value of the asset's circulating supply in USD.
   * @param maxSupply {String} Represents the maximum amount of all coins of a specific asset that will ever exist in its lifetime.
   */
  function GetAssetDetailsByAssetIDRIS(_1hourPriceChangeInPercentage, _1weekPriceChangeInPercentage, _24hoursPriceChangeInPercentage, _24hoursTradingVolume, assetType, circulatingSupply, marketCapInUSD, maxSupply) {
    _classCallCheck(this, GetAssetDetailsByAssetIDRIS);
    _GetAssetDetailsByAssetIDRISC["default"].initialize(this, _1hourPriceChangeInPercentage, _1weekPriceChangeInPercentage, _24hoursPriceChangeInPercentage, _24hoursTradingVolume, assetType, circulatingSupply, marketCapInUSD, maxSupply);
    GetAssetDetailsByAssetIDRIS.initialize(this, _1hourPriceChangeInPercentage, _1weekPriceChangeInPercentage, _24hoursPriceChangeInPercentage, _24hoursTradingVolume, assetType, circulatingSupply, marketCapInUSD, maxSupply);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetAssetDetailsByAssetIDRIS, null, [{
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
     * Constructs a <code>GetAssetDetailsByAssetIDRIS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAssetDetailsByAssetIDRIS} obj Optional instance to populate.
     * @return {module:model/GetAssetDetailsByAssetIDRIS} The populated <code>GetAssetDetailsByAssetIDRIS</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetAssetDetailsByAssetIDRIS();
        _GetAssetDetailsByAssetIDRISC["default"].constructFromObject(data, obj);
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
  }]);
  return GetAssetDetailsByAssetIDRIS;
}();
/**
 * Represents the percentage of the asset's current price against the its price from 1 hour ago.
 * @member {String} 1HourPriceChangeInPercentage
 */
GetAssetDetailsByAssetIDRIS.prototype['1HourPriceChangeInPercentage'] = undefined;

/**
 * Represents the percentage of the asset's current price against the its price from 1 week ago.
 * @member {String} 1WeekPriceChangeInPercentage
 */
GetAssetDetailsByAssetIDRIS.prototype['1WeekPriceChangeInPercentage'] = undefined;

/**
 * Represents the percentage of the asset's current price against the its price from 24 hours ago.
 * @member {String} 24HoursPriceChangeInPercentage
 */
GetAssetDetailsByAssetIDRIS.prototype['24HoursPriceChangeInPercentage'] = undefined;

/**
 * Represents the trading volume of the asset for the time frame of 24 hours.
 * @member {String} 24HoursTradingVolume
 */
GetAssetDetailsByAssetIDRIS.prototype['24HoursTradingVolume'] = undefined;

/**
 * Represent a subtype of the crypto assets. Could be COIN or TOKEN.
 * @member {module:model/GetAssetDetailsByAssetIDRIS.AssetTypeEnum} assetType
 */
GetAssetDetailsByAssetIDRIS.prototype['assetType'] = undefined;

/**
 * Represents the amount of the asset that is circulating on the market and in public hands.
 * @member {String} circulatingSupply
 */
GetAssetDetailsByAssetIDRIS.prototype['circulatingSupply'] = undefined;

/**
 * Defines the total market value of the asset's circulating supply in USD.
 * @member {String} marketCapInUSD
 */
GetAssetDetailsByAssetIDRIS.prototype['marketCapInUSD'] = undefined;

/**
 * Represents the maximum amount of all coins of a specific asset that will ever exist in its lifetime.
 * @member {String} maxSupply
 */
GetAssetDetailsByAssetIDRIS.prototype['maxSupply'] = undefined;

// Implement GetAssetDetailsByAssetIDRISC interface:
/**
 * Represents the percentage of the asset's current price against the its price from 1 hour ago.
 * @member {String} 1HourPriceChangeInPercentage
 */
_GetAssetDetailsByAssetIDRISC["default"].prototype['1HourPriceChangeInPercentage'] = undefined;
/**
 * Represents the percentage of the asset's current price against the its price from 1 week ago.
 * @member {String} 1WeekPriceChangeInPercentage
 */
_GetAssetDetailsByAssetIDRISC["default"].prototype['1WeekPriceChangeInPercentage'] = undefined;
/**
 * Represents the percentage of the asset's current price against the its price from 24 hours ago.
 * @member {String} 24HoursPriceChangeInPercentage
 */
_GetAssetDetailsByAssetIDRISC["default"].prototype['24HoursPriceChangeInPercentage'] = undefined;
/**
 * Represents the trading volume of the asset for the time frame of 24 hours.
 * @member {String} 24HoursTradingVolume
 */
_GetAssetDetailsByAssetIDRISC["default"].prototype['24HoursTradingVolume'] = undefined;
/**
 * Represent a subtype of the crypto assets. Could be COIN or TOKEN.
 * @member {module:model/GetAssetDetailsByAssetIDRISC.AssetTypeEnum} assetType
 */
_GetAssetDetailsByAssetIDRISC["default"].prototype['assetType'] = undefined;
/**
 * Represents the amount of the asset that is circulating on the market and in public hands.
 * @member {String} circulatingSupply
 */
_GetAssetDetailsByAssetIDRISC["default"].prototype['circulatingSupply'] = undefined;
/**
 * Defines the total market value of the asset's circulating supply in USD.
 * @member {String} marketCapInUSD
 */
_GetAssetDetailsByAssetIDRISC["default"].prototype['marketCapInUSD'] = undefined;
/**
 * Represents the maximum amount of all coins of a specific asset that will ever exist in its lifetime.
 * @member {String} maxSupply
 */
_GetAssetDetailsByAssetIDRISC["default"].prototype['maxSupply'] = undefined;

/**
 * Allowed values for the <code>assetType</code> property.
 * @enum {String}
 * @readonly
 */
GetAssetDetailsByAssetIDRIS['AssetTypeEnum'] = {
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
var _default = GetAssetDetailsByAssetIDRIS;
exports["default"] = _default;