"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetFeeRecommendationsRI = _interopRequireDefault(require("./GetFeeRecommendationsRI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetFeeRecommendationsRData model module.
 * @module model/GetFeeRecommendationsRData
 * @version 1.1.0
 */
var GetFeeRecommendationsRData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetFeeRecommendationsRData</code>.
   * @alias module:model/GetFeeRecommendationsRData
   * @param item {module:model/GetFeeRecommendationsRI} 
   */
  function GetFeeRecommendationsRData(item) {
    _classCallCheck(this, GetFeeRecommendationsRData);

    GetFeeRecommendationsRData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetFeeRecommendationsRData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>GetFeeRecommendationsRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFeeRecommendationsRData} obj Optional instance to populate.
     * @return {module:model/GetFeeRecommendationsRData} The populated <code>GetFeeRecommendationsRData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetFeeRecommendationsRData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _GetFeeRecommendationsRI["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return GetFeeRecommendationsRData;
}();
/**
 * @member {module:model/GetFeeRecommendationsRI} item
 */


GetFeeRecommendationsRData.prototype['item'] = undefined;
var _default = GetFeeRecommendationsRData;
exports["default"] = _default;