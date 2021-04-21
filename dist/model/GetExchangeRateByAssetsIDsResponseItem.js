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
 * The GetExchangeRateByAssetsIDsResponseItem model module.
 * @module model/GetExchangeRateByAssetsIDsResponseItem
 * @version 2.0.0
 */
var GetExchangeRateByAssetsIDsResponseItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetExchangeRateByAssetsIDsResponseItem</code>.
   * @alias module:model/GetExchangeRateByAssetsIDsResponseItem
   * @param calculationTimestamp {Number} Defines the time of the market data used to calculate the exchange rate in UNIX Timestamp.
   * @param fromAssetId {String} Defines the base asset Reference ID to get a rate for.
   * @param fromAssetSymbol {String} Defines the base asset symbol to get a rate for.
   * @param rate {String} Defines the exchange rate between assets calculated by weighted average of the last trades in every exchange for the last 24 hours by giving more weight to exchanges with higher volume.
   * @param toAssetId {String} Defines the relation asset Reference ID in which the base asset rate will be displayed.
   * @param toAssetSymbol {String} Defines the relation asset symbol in which the base asset rate will be displayed.
   */
  function GetExchangeRateByAssetsIDsResponseItem(calculationTimestamp, fromAssetId, fromAssetSymbol, rate, toAssetId, toAssetSymbol) {
    _classCallCheck(this, GetExchangeRateByAssetsIDsResponseItem);

    GetExchangeRateByAssetsIDsResponseItem.initialize(this, calculationTimestamp, fromAssetId, fromAssetSymbol, rate, toAssetId, toAssetSymbol);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetExchangeRateByAssetsIDsResponseItem, null, [{
    key: "initialize",
    value: function initialize(obj, calculationTimestamp, fromAssetId, fromAssetSymbol, rate, toAssetId, toAssetSymbol) {
      obj['calculationTimestamp'] = calculationTimestamp;
      obj['fromAssetId'] = fromAssetId;
      obj['fromAssetSymbol'] = fromAssetSymbol;
      obj['rate'] = rate;
      obj['toAssetId'] = toAssetId;
      obj['toAssetSymbol'] = toAssetSymbol;
    }
    /**
     * Constructs a <code>GetExchangeRateByAssetsIDsResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetExchangeRateByAssetsIDsResponseItem} obj Optional instance to populate.
     * @return {module:model/GetExchangeRateByAssetsIDsResponseItem} The populated <code>GetExchangeRateByAssetsIDsResponseItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetExchangeRateByAssetsIDsResponseItem();

        if (data.hasOwnProperty('calculationTimestamp')) {
          obj['calculationTimestamp'] = _ApiClient["default"].convertToType(data['calculationTimestamp'], 'Number');
        }

        if (data.hasOwnProperty('fromAssetId')) {
          obj['fromAssetId'] = _ApiClient["default"].convertToType(data['fromAssetId'], 'String');
        }

        if (data.hasOwnProperty('fromAssetSymbol')) {
          obj['fromAssetSymbol'] = _ApiClient["default"].convertToType(data['fromAssetSymbol'], 'String');
        }

        if (data.hasOwnProperty('rate')) {
          obj['rate'] = _ApiClient["default"].convertToType(data['rate'], 'String');
        }

        if (data.hasOwnProperty('toAssetId')) {
          obj['toAssetId'] = _ApiClient["default"].convertToType(data['toAssetId'], 'String');
        }

        if (data.hasOwnProperty('toAssetSymbol')) {
          obj['toAssetSymbol'] = _ApiClient["default"].convertToType(data['toAssetSymbol'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetExchangeRateByAssetsIDsResponseItem;
}();
/**
 * Defines the time of the market data used to calculate the exchange rate in UNIX Timestamp.
 * @member {Number} calculationTimestamp
 */


GetExchangeRateByAssetsIDsResponseItem.prototype['calculationTimestamp'] = undefined;
/**
 * Defines the base asset Reference ID to get a rate for.
 * @member {String} fromAssetId
 */

GetExchangeRateByAssetsIDsResponseItem.prototype['fromAssetId'] = undefined;
/**
 * Defines the base asset symbol to get a rate for.
 * @member {String} fromAssetSymbol
 */

GetExchangeRateByAssetsIDsResponseItem.prototype['fromAssetSymbol'] = undefined;
/**
 * Defines the exchange rate between assets calculated by weighted average of the last trades in every exchange for the last 24 hours by giving more weight to exchanges with higher volume.
 * @member {String} rate
 */

GetExchangeRateByAssetsIDsResponseItem.prototype['rate'] = undefined;
/**
 * Defines the relation asset Reference ID in which the base asset rate will be displayed.
 * @member {String} toAssetId
 */

GetExchangeRateByAssetsIDsResponseItem.prototype['toAssetId'] = undefined;
/**
 * Defines the relation asset symbol in which the base asset rate will be displayed.
 * @member {String} toAssetSymbol
 */

GetExchangeRateByAssetsIDsResponseItem.prototype['toAssetSymbol'] = undefined;
var _default = GetExchangeRateByAssetsIDsResponseItem;
exports["default"] = _default;