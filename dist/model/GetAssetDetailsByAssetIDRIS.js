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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetAssetDetailsByAssetIDRIS model module.
 * @module model/GetAssetDetailsByAssetIDRIS
 * @version 1.11.0
 */
var GetAssetDetailsByAssetIDRIS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetAssetDetailsByAssetIDRIS</code>.
   * Represents a specific asset&#39;s data depending on its type (whether it is \&quot;crypto\&quot; or \&quot;fiat\&quot;).
   * @alias module:model/GetAssetDetailsByAssetIDRIS
   * @param {(module:model/GetAssetDetailsByAssetIDRISC)} instance The actual instance to initialize GetAssetDetailsByAssetIDRIS.
   */
  function GetAssetDetailsByAssetIDRIS() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, GetAssetDetailsByAssetIDRIS);
    _defineProperty(this, "toJSON", function () {
      return this.getActualInstance();
    });
    if (instance === null) {
      this.actualInstance = null;
      return;
    }
    var match = 0;
    var errorMessages = [];
    try {
      if (typeof instance === "GetAssetDetailsByAssetIDRISC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetAssetDetailsByAssetIDRISC["default"].validateJSON(instance); // throw an exception if no match
        // create GetAssetDetailsByAssetIDRISC from JS object
        this.actualInstance = _GetAssetDetailsByAssetIDRISC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetAssetDetailsByAssetIDRISC
      errorMessages.push("Failed to construct GetAssetDetailsByAssetIDRISC: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `GetAssetDetailsByAssetIDRIS` with oneOf schemas GetAssetDetailsByAssetIDRISC. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `GetAssetDetailsByAssetIDRIS` with oneOf schemas GetAssetDetailsByAssetIDRISC. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>GetAssetDetailsByAssetIDRIS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAssetDetailsByAssetIDRIS} obj Optional instance to populate.
   * @return {module:model/GetAssetDetailsByAssetIDRIS} The populated <code>GetAssetDetailsByAssetIDRIS</code> instance.
   */
  _createClass(GetAssetDetailsByAssetIDRIS, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>GetAssetDetailsByAssetIDRISC</code>.
     * @return {(module:model/GetAssetDetailsByAssetIDRISC)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>GetAssetDetailsByAssetIDRISC</code>.
     * @param {(module:model/GetAssetDetailsByAssetIDRISC)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = GetAssetDetailsByAssetIDRIS.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new GetAssetDetailsByAssetIDRIS(data);
    }
  }]);
  return GetAssetDetailsByAssetIDRIS;
}();
/**
 * Represents the percentage of the asset's current price against the its price from 1 hour ago.
 * @member {String} 1HourPriceChangeInPercentage
 */
_defineProperty(GetAssetDetailsByAssetIDRIS, "fromJSON", function (json_string) {
  return GetAssetDetailsByAssetIDRIS.constructFromObject(JSON.parse(json_string));
});
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
GetAssetDetailsByAssetIDRIS.OneOf = ["GetAssetDetailsByAssetIDRISC"];
var _default = GetAssetDetailsByAssetIDRIS;
exports["default"] = _default;