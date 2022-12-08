"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas model module.
 * @module model/GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas
 * @version 1.11.0
 */
var GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas</code>.
   * @alias module:model/GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas
   * @param fast {String} Represents the fast maximum priority fee per gas, calculated from unconfirmed transactions.
   * @param slow {String} Represents the slow maximum priority fee per gas, calculated from unconfirmed transactions.
   * @param standard {String} Represents the standard maximum priority fee per gas, calculated from unconfirmed transactions.
   * @param unit {String} Represents the unit of the maximum priority fee per gas.
   */
  function GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas(fast, slow, standard, unit) {
    _classCallCheck(this, GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas);
    GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas.initialize(this, fast, slow, standard, unit);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas, null, [{
    key: "initialize",
    value: function initialize(obj, fast, slow, standard, unit) {
      obj['fast'] = fast;
      obj['slow'] = slow;
      obj['standard'] = standard;
      obj['unit'] = unit;
    }

    /**
     * Constructs a <code>GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas} obj Optional instance to populate.
     * @return {module:model/GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas} The populated <code>GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas();
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

    /**
     * Validates the JSON data with respect to <code>GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['fast'] && !(typeof data['fast'] === 'string' || data['fast'] instanceof String)) {
        throw new Error("Expected the field `fast` to be a primitive type in the JSON string but got " + data['fast']);
      }
      // ensure the json data is a string
      if (data['slow'] && !(typeof data['slow'] === 'string' || data['slow'] instanceof String)) {
        throw new Error("Expected the field `slow` to be a primitive type in the JSON string but got " + data['slow']);
      }
      // ensure the json data is a string
      if (data['standard'] && !(typeof data['standard'] === 'string' || data['standard'] instanceof String)) {
        throw new Error("Expected the field `standard` to be a primitive type in the JSON string but got " + data['standard']);
      }
      // ensure the json data is a string
      if (data['unit'] && !(typeof data['unit'] === 'string' || data['unit'] instanceof String)) {
        throw new Error("Expected the field `unit` to be a primitive type in the JSON string but got " + data['unit']);
      }
      return true;
    }
  }]);
  return GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas;
}();
GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas.RequiredProperties = ["fast", "slow", "standard", "unit"];

/**
 * Represents the fast maximum priority fee per gas, calculated from unconfirmed transactions.
 * @member {String} fast
 */
GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas.prototype['fast'] = undefined;

/**
 * Represents the slow maximum priority fee per gas, calculated from unconfirmed transactions.
 * @member {String} slow
 */
GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas.prototype['slow'] = undefined;

/**
 * Represents the standard maximum priority fee per gas, calculated from unconfirmed transactions.
 * @member {String} standard
 */
GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas.prototype['standard'] = undefined;

/**
 * Represents the unit of the maximum priority fee per gas.
 * @member {String} unit
 */
GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas.prototype['unit'] = undefined;
var _default = GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas;
exports["default"] = _default;