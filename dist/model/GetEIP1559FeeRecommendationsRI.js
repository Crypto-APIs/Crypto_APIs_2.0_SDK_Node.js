"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetEIP1559FeeRecommendationsRIBaseFeePerGas = _interopRequireDefault(require("./GetEIP1559FeeRecommendationsRIBaseFeePerGas"));
var _GetEIP1559FeeRecommendationsRIMaxFeePerGas = _interopRequireDefault(require("./GetEIP1559FeeRecommendationsRIMaxFeePerGas"));
var _GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas = _interopRequireDefault(require("./GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetEIP1559FeeRecommendationsRI model module.
 * @module model/GetEIP1559FeeRecommendationsRI
 * @version 1.13.0
 */
var GetEIP1559FeeRecommendationsRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetEIP1559FeeRecommendationsRI</code>.
   * @alias module:model/GetEIP1559FeeRecommendationsRI
   * @param baseFeePerGas {module:model/GetEIP1559FeeRecommendationsRIBaseFeePerGas} 
   * @param maxFeePerGas {module:model/GetEIP1559FeeRecommendationsRIMaxFeePerGas} 
   * @param maxPriorityFeePerGas {module:model/GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas} 
   */
  function GetEIP1559FeeRecommendationsRI(baseFeePerGas, maxFeePerGas, maxPriorityFeePerGas) {
    _classCallCheck(this, GetEIP1559FeeRecommendationsRI);
    GetEIP1559FeeRecommendationsRI.initialize(this, baseFeePerGas, maxFeePerGas, maxPriorityFeePerGas);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetEIP1559FeeRecommendationsRI, null, [{
    key: "initialize",
    value: function initialize(obj, baseFeePerGas, maxFeePerGas, maxPriorityFeePerGas) {
      obj['baseFeePerGas'] = baseFeePerGas;
      obj['maxFeePerGas'] = maxFeePerGas;
      obj['maxPriorityFeePerGas'] = maxPriorityFeePerGas;
    }

    /**
     * Constructs a <code>GetEIP1559FeeRecommendationsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEIP1559FeeRecommendationsRI} obj Optional instance to populate.
     * @return {module:model/GetEIP1559FeeRecommendationsRI} The populated <code>GetEIP1559FeeRecommendationsRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetEIP1559FeeRecommendationsRI();
        if (data.hasOwnProperty('baseFeePerGas')) {
          obj['baseFeePerGas'] = _GetEIP1559FeeRecommendationsRIBaseFeePerGas["default"].constructFromObject(data['baseFeePerGas']);
        }
        if (data.hasOwnProperty('maxFeePerGas')) {
          obj['maxFeePerGas'] = _GetEIP1559FeeRecommendationsRIMaxFeePerGas["default"].constructFromObject(data['maxFeePerGas']);
        }
        if (data.hasOwnProperty('maxPriorityFeePerGas')) {
          obj['maxPriorityFeePerGas'] = _GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas["default"].constructFromObject(data['maxPriorityFeePerGas']);
        }
      }
      return obj;
    }
  }]);
  return GetEIP1559FeeRecommendationsRI;
}();
/**
 * @member {module:model/GetEIP1559FeeRecommendationsRIBaseFeePerGas} baseFeePerGas
 */
GetEIP1559FeeRecommendationsRI.prototype['baseFeePerGas'] = undefined;

/**
 * @member {module:model/GetEIP1559FeeRecommendationsRIMaxFeePerGas} maxFeePerGas
 */
GetEIP1559FeeRecommendationsRI.prototype['maxFeePerGas'] = undefined;

/**
 * @member {module:model/GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas} maxPriorityFeePerGas
 */
GetEIP1559FeeRecommendationsRI.prototype['maxPriorityFeePerGas'] = undefined;
var _default = GetEIP1559FeeRecommendationsRI;
exports["default"] = _default;