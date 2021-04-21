"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListAssetsDetailsResponseItemSpecificDataCryptoTypeData model module.
 * @module model/ListAssetsDetailsResponseItemSpecificDataCryptoTypeData
 * @version 2.0.0
 */
var ListAssetsDetailsResponseItemSpecificDataCryptoTypeData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAssetsDetailsResponseItemSpecificDataCryptoTypeData</code>.
   * Crypto Type Data
   * @alias module:model/ListAssetsDetailsResponseItemSpecificDataCryptoTypeData
   * @param _1hourPriceChangeInPercentage {String} Represents the percentage of the asset's current price against the its price from 1 hour ago.
   * @param _1weekPriceChangeInPercentage {String} Represents the percentage of the asset's current price against the its price from 1 week ago.
   * @param _24hoursPriceChangeInPercentage {String} Represents the percentage of the asset's current price against the its price from 24 hours ago.
   * @param _24hoursTradingVolume {String} Represents the trading volume of the asset for the time frame of 24 hours.
   * @param circulatingSupply {String} Represents the amount of the asset that is circulating on the market and in public hands.
   * @param marketCapInUSD {String} Defines the total market value of the asset's circulating supply in USD.
   * @param maxSupply {String} Represents the maximum amount of all coins of a specific asset that will ever exist in its lifetime.
   */
  function ListAssetsDetailsResponseItemSpecificDataCryptoTypeData(_1hourPriceChangeInPercentage, _1weekPriceChangeInPercentage, _24hoursPriceChangeInPercentage, _24hoursTradingVolume, circulatingSupply, marketCapInUSD, maxSupply) {
    _classCallCheck(this, ListAssetsDetailsResponseItemSpecificDataCryptoTypeData);

    ListAssetsDetailsResponseItemSpecificDataCryptoTypeData.initialize(this, _1hourPriceChangeInPercentage, _1weekPriceChangeInPercentage, _24hoursPriceChangeInPercentage, _24hoursTradingVolume, circulatingSupply, marketCapInUSD, maxSupply);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListAssetsDetailsResponseItemSpecificDataCryptoTypeData, null, [{
    key: "initialize",
    value: function initialize(obj, _1hourPriceChangeInPercentage, _1weekPriceChangeInPercentage, _24hoursPriceChangeInPercentage, _24hoursTradingVolume, circulatingSupply, marketCapInUSD, maxSupply) {
      obj['1HourPriceChangeInPercentage'] = _1hourPriceChangeInPercentage;
      obj['1WeekPriceChangeInPercentage'] = _1weekPriceChangeInPercentage;
      obj['24HoursPriceChangeInPercentage'] = _24hoursPriceChangeInPercentage;
      obj['24HoursTradingVolume'] = _24hoursTradingVolume;
      obj['circulatingSupply'] = circulatingSupply;
      obj['marketCapInUSD'] = marketCapInUSD;
      obj['maxSupply'] = maxSupply;
    }
    /**
     * Constructs a <code>ListAssetsDetailsResponseItemSpecificDataCryptoTypeData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAssetsDetailsResponseItemSpecificDataCryptoTypeData} obj Optional instance to populate.
     * @return {module:model/ListAssetsDetailsResponseItemSpecificDataCryptoTypeData} The populated <code>ListAssetsDetailsResponseItemSpecificDataCryptoTypeData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAssetsDetailsResponseItemSpecificDataCryptoTypeData();

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

  return ListAssetsDetailsResponseItemSpecificDataCryptoTypeData;
}();
/**
 * Represents the percentage of the asset's current price against the its price from 1 hour ago.
 * @member {String} 1HourPriceChangeInPercentage
 */


ListAssetsDetailsResponseItemSpecificDataCryptoTypeData.prototype['1HourPriceChangeInPercentage'] = undefined;
/**
 * Represents the percentage of the asset's current price against the its price from 1 week ago.
 * @member {String} 1WeekPriceChangeInPercentage
 */

ListAssetsDetailsResponseItemSpecificDataCryptoTypeData.prototype['1WeekPriceChangeInPercentage'] = undefined;
/**
 * Represents the percentage of the asset's current price against the its price from 24 hours ago.
 * @member {String} 24HoursPriceChangeInPercentage
 */

ListAssetsDetailsResponseItemSpecificDataCryptoTypeData.prototype['24HoursPriceChangeInPercentage'] = undefined;
/**
 * Represents the trading volume of the asset for the time frame of 24 hours.
 * @member {String} 24HoursTradingVolume
 */

ListAssetsDetailsResponseItemSpecificDataCryptoTypeData.prototype['24HoursTradingVolume'] = undefined;
/**
 * Represents the amount of the asset that is circulating on the market and in public hands.
 * @member {String} circulatingSupply
 */

ListAssetsDetailsResponseItemSpecificDataCryptoTypeData.prototype['circulatingSupply'] = undefined;
/**
 * Defines the total market value of the asset's circulating supply in USD.
 * @member {String} marketCapInUSD
 */

ListAssetsDetailsResponseItemSpecificDataCryptoTypeData.prototype['marketCapInUSD'] = undefined;
/**
 * Represents the maximum amount of all coins of a specific asset that will ever exist in its lifetime.
 * @member {String} maxSupply
 */

ListAssetsDetailsResponseItemSpecificDataCryptoTypeData.prototype['maxSupply'] = undefined;
var _default = ListAssetsDetailsResponseItemSpecificDataCryptoTypeData;
exports["default"] = _default;