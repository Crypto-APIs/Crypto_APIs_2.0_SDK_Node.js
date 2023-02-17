"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetEIP1559FeeRecommendationsRIBaseFeePerGas model module.
 * @module model/GetEIP1559FeeRecommendationsRIBaseFeePerGas
 * @version 1.13.0
 */
var GetEIP1559FeeRecommendationsRIBaseFeePerGas = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetEIP1559FeeRecommendationsRIBaseFeePerGas</code>.
   * @alias module:model/GetEIP1559FeeRecommendationsRIBaseFeePerGas
   * @param unit {String} Represents the unit of the base fee per gas.
   * @param value {String} Represents the expected base fee per gas of the upcoming block, calculated from the previous block data.
   */
  function GetEIP1559FeeRecommendationsRIBaseFeePerGas(unit, value) {
    _classCallCheck(this, GetEIP1559FeeRecommendationsRIBaseFeePerGas);
    GetEIP1559FeeRecommendationsRIBaseFeePerGas.initialize(this, unit, value);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetEIP1559FeeRecommendationsRIBaseFeePerGas, null, [{
    key: "initialize",
    value: function initialize(obj, unit, value) {
      obj['unit'] = unit;
      obj['value'] = value;
    }

    /**
     * Constructs a <code>GetEIP1559FeeRecommendationsRIBaseFeePerGas</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEIP1559FeeRecommendationsRIBaseFeePerGas} obj Optional instance to populate.
     * @return {module:model/GetEIP1559FeeRecommendationsRIBaseFeePerGas} The populated <code>GetEIP1559FeeRecommendationsRIBaseFeePerGas</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetEIP1559FeeRecommendationsRIBaseFeePerGas();
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GetEIP1559FeeRecommendationsRIBaseFeePerGas;
}();
/**
 * Represents the unit of the base fee per gas.
 * @member {String} unit
 */
GetEIP1559FeeRecommendationsRIBaseFeePerGas.prototype['unit'] = undefined;

/**
 * Represents the expected base fee per gas of the upcoming block, calculated from the previous block data.
 * @member {String} value
 */
GetEIP1559FeeRecommendationsRIBaseFeePerGas.prototype['value'] = undefined;
var _default = GetEIP1559FeeRecommendationsRIBaseFeePerGas;
exports["default"] = _default;