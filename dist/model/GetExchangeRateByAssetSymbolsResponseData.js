"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetExchangeRateByAssetSymbolsResponseItem = _interopRequireDefault(require("./GetExchangeRateByAssetSymbolsResponseItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetExchangeRateByAssetSymbolsResponseData model module.
 * @module model/GetExchangeRateByAssetSymbolsResponseData
 * @version 2.0.0
 */
var GetExchangeRateByAssetSymbolsResponseData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetExchangeRateByAssetSymbolsResponseData</code>.
   * @alias module:model/GetExchangeRateByAssetSymbolsResponseData
   * @param item {module:model/GetExchangeRateByAssetSymbolsResponseItem} 
   */
  function GetExchangeRateByAssetSymbolsResponseData(item) {
    _classCallCheck(this, GetExchangeRateByAssetSymbolsResponseData);

    GetExchangeRateByAssetSymbolsResponseData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetExchangeRateByAssetSymbolsResponseData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>GetExchangeRateByAssetSymbolsResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetExchangeRateByAssetSymbolsResponseData} obj Optional instance to populate.
     * @return {module:model/GetExchangeRateByAssetSymbolsResponseData} The populated <code>GetExchangeRateByAssetSymbolsResponseData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetExchangeRateByAssetSymbolsResponseData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _GetExchangeRateByAssetSymbolsResponseItem["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return GetExchangeRateByAssetSymbolsResponseData;
}();
/**
 * @member {module:model/GetExchangeRateByAssetSymbolsResponseItem} item
 */


GetExchangeRateByAssetSymbolsResponseData.prototype['item'] = undefined;
var _default = GetExchangeRateByAssetSymbolsResponseData;
exports["default"] = _default;