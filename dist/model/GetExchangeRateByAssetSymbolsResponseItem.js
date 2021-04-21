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
 * The GetExchangeRateByAssetSymbolsResponseItem model module.
 * @module model/GetExchangeRateByAssetSymbolsResponseItem
 * @version 2.0.0
 */
var GetExchangeRateByAssetSymbolsResponseItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetExchangeRateByAssetSymbolsResponseItem</code>.
   * @alias module:model/GetExchangeRateByAssetSymbolsResponseItem
   * @param calculationTimestamp {Number} Defines the time of the market data used to calculate the exchange rate in UNIX Timestamp.
   * @param fromAssetId {String} Defines the base asset Reference ID to get a rate for.
   * @param fromAssetSymbol {String} Defines the base asset symbol to get a rate for.
   * @param rate {String} Defines the exchange rate between assets calculated by weighted average of the last trades in every exchange for the last 24 hours by giving more weight to exchanges with higher volume.
   * @param toAssetId {String} Defines the relation asset Reference ID in which the base asset rate will be displayed.
   * @param toAssetSymbol {String} Defines the relation asset symbol in which the base asset rate will be displayed.
   */
  function GetExchangeRateByAssetSymbolsResponseItem(calculationTimestamp, fromAssetId, fromAssetSymbol, rate, toAssetId, toAssetSymbol) {
    _classCallCheck(this, GetExchangeRateByAssetSymbolsResponseItem);

    GetExchangeRateByAssetSymbolsResponseItem.initialize(this, calculationTimestamp, fromAssetId, fromAssetSymbol, rate, toAssetId, toAssetSymbol);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetExchangeRateByAssetSymbolsResponseItem, null, [{
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
     * Constructs a <code>GetExchangeRateByAssetSymbolsResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetExchangeRateByAssetSymbolsResponseItem} obj Optional instance to populate.
     * @return {module:model/GetExchangeRateByAssetSymbolsResponseItem} The populated <code>GetExchangeRateByAssetSymbolsResponseItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetExchangeRateByAssetSymbolsResponseItem();

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

  return GetExchangeRateByAssetSymbolsResponseItem;
}();
/**
 * Defines the time of the market data used to calculate the exchange rate in UNIX Timestamp.
 * @member {Number} calculationTimestamp
 */


GetExchangeRateByAssetSymbolsResponseItem.prototype['calculationTimestamp'] = undefined;
/**
 * Defines the base asset Reference ID to get a rate for.
 * @member {String} fromAssetId
 */

GetExchangeRateByAssetSymbolsResponseItem.prototype['fromAssetId'] = undefined;
/**
 * Defines the base asset symbol to get a rate for.
 * @member {String} fromAssetSymbol
 */

GetExchangeRateByAssetSymbolsResponseItem.prototype['fromAssetSymbol'] = undefined;
/**
 * Defines the exchange rate between assets calculated by weighted average of the last trades in every exchange for the last 24 hours by giving more weight to exchanges with higher volume.
 * @member {String} rate
 */

GetExchangeRateByAssetSymbolsResponseItem.prototype['rate'] = undefined;
/**
 * Defines the relation asset Reference ID in which the base asset rate will be displayed.
 * @member {String} toAssetId
 */

GetExchangeRateByAssetSymbolsResponseItem.prototype['toAssetId'] = undefined;
/**
 * Defines the relation asset symbol in which the base asset rate will be displayed.
 * @member {String} toAssetSymbol
 */

GetExchangeRateByAssetSymbolsResponseItem.prototype['toAssetSymbol'] = undefined;
var _default = GetExchangeRateByAssetSymbolsResponseItem;
exports["default"] = _default;