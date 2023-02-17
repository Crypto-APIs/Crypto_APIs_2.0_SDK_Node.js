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
 * The GetEIP1559FeeRecommendationsRIMaxFeePerGas model module.
 * @module model/GetEIP1559FeeRecommendationsRIMaxFeePerGas
 * @version 1.13.0
 */
var GetEIP1559FeeRecommendationsRIMaxFeePerGas = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetEIP1559FeeRecommendationsRIMaxFeePerGas</code>.
   * @alias module:model/GetEIP1559FeeRecommendationsRIMaxFeePerGas
   * @param fast {String} Represents the fast maximum fee per gas, calculated from unconfirmed transactions.
   * @param slow {String} Represents the slow maximum fee per gas, calculated from unconfirmed transactions.
   * @param standard {String} Represents the standard maximum fee per gas, calculated from unconfirmed transactions.
   * @param unit {String} Represents the unit of the maximum fee per gas.
   */
  function GetEIP1559FeeRecommendationsRIMaxFeePerGas(fast, slow, standard, unit) {
    _classCallCheck(this, GetEIP1559FeeRecommendationsRIMaxFeePerGas);
    GetEIP1559FeeRecommendationsRIMaxFeePerGas.initialize(this, fast, slow, standard, unit);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetEIP1559FeeRecommendationsRIMaxFeePerGas, null, [{
    key: "initialize",
    value: function initialize(obj, fast, slow, standard, unit) {
      obj['fast'] = fast;
      obj['slow'] = slow;
      obj['standard'] = standard;
      obj['unit'] = unit;
    }

    /**
     * Constructs a <code>GetEIP1559FeeRecommendationsRIMaxFeePerGas</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEIP1559FeeRecommendationsRIMaxFeePerGas} obj Optional instance to populate.
     * @return {module:model/GetEIP1559FeeRecommendationsRIMaxFeePerGas} The populated <code>GetEIP1559FeeRecommendationsRIMaxFeePerGas</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetEIP1559FeeRecommendationsRIMaxFeePerGas();
        if (data.hasOwnProperty('fast')) {
          obj['fast'] = _ApiClient["default"].convertToType(data['fast'], 'String');
        }
        if (data.hasOwnProperty('slow')) {
          obj['slow'] = _ApiClient["default"].convertToType(data['slow'], 'String');
        }
        if (data.hasOwnProperty('standard')) {
          obj['standard'] = _ApiClient["default"].convertToType(data['standard'], 'String');
        }
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GetEIP1559FeeRecommendationsRIMaxFeePerGas;
}();
/**
 * Represents the fast maximum fee per gas, calculated from unconfirmed transactions.
 * @member {String} fast
 */
GetEIP1559FeeRecommendationsRIMaxFeePerGas.prototype['fast'] = undefined;

/**
 * Represents the slow maximum fee per gas, calculated from unconfirmed transactions.
 * @member {String} slow
 */
GetEIP1559FeeRecommendationsRIMaxFeePerGas.prototype['slow'] = undefined;

/**
 * Represents the standard maximum fee per gas, calculated from unconfirmed transactions.
 * @member {String} standard
 */
GetEIP1559FeeRecommendationsRIMaxFeePerGas.prototype['standard'] = undefined;

/**
 * Represents the unit of the maximum fee per gas.
 * @member {String} unit
 */
GetEIP1559FeeRecommendationsRIMaxFeePerGas.prototype['unit'] = undefined;
var _default = GetEIP1559FeeRecommendationsRIMaxFeePerGas;
exports["default"] = _default;