"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EstimateTokenGasLimitRI = _interopRequireDefault(require("./EstimateTokenGasLimitRI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EstimateTokenGasLimitRData model module.
 * @module model/EstimateTokenGasLimitRData
 * @version 1.7.2
 */
var EstimateTokenGasLimitRData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EstimateTokenGasLimitRData</code>.
   * @alias module:model/EstimateTokenGasLimitRData
   * @param item {module:model/EstimateTokenGasLimitRI} 
   */
  function EstimateTokenGasLimitRData(item) {
    _classCallCheck(this, EstimateTokenGasLimitRData);

    EstimateTokenGasLimitRData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EstimateTokenGasLimitRData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>EstimateTokenGasLimitRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EstimateTokenGasLimitRData} obj Optional instance to populate.
     * @return {module:model/EstimateTokenGasLimitRData} The populated <code>EstimateTokenGasLimitRData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EstimateTokenGasLimitRData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _EstimateTokenGasLimitRI["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return EstimateTokenGasLimitRData;
}();
/**
 * @member {module:model/EstimateTokenGasLimitRI} item
 */


EstimateTokenGasLimitRData.prototype['item'] = undefined;
var _default = EstimateTokenGasLimitRData;
exports["default"] = _default;