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
 * The GetExchangeRateByAssetsIDsRI model module.
 * @module model/GetExchangeRateByAssetsIDsRI
 * @version 1.11.0
 */
var GetExchangeRateByAssetsIDsRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetExchangeRateByAssetsIDsRI</code>.
   * @alias module:model/GetExchangeRateByAssetsIDsRI
   * @param calculationTimestamp {Number} Defines the time of the market data used to calculate the exchange rate in UNIX Timestamp. Oldest possible timestamp is 30 days.
   * @param fromAssetId {String} Defines the base asset Reference ID to get a rate for.
   * @param fromAssetSymbol {String} Defines the base asset symbol to get a rate for.
   * @param rate {String} Defines the exchange rate between assets calculated by weighted average of the last trades in every exchange for the last 24 hours by giving more weight to exchanges with higher volume.
   * @param toAssetId {String} Defines the relation asset Reference ID in which the base asset rate will be displayed.
   * @param toAssetSymbol {String} Defines the relation asset symbol in which the base asset rate will be displayed.
   */
  function GetExchangeRateByAssetsIDsRI(calculationTimestamp, fromAssetId, fromAssetSymbol, rate, toAssetId, toAssetSymbol) {
    _classCallCheck(this, GetExchangeRateByAssetsIDsRI);
    GetExchangeRateByAssetsIDsRI.initialize(this, calculationTimestamp, fromAssetId, fromAssetSymbol, rate, toAssetId, toAssetSymbol);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetExchangeRateByAssetsIDsRI, null, [{
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
     * Constructs a <code>GetExchangeRateByAssetsIDsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetExchangeRateByAssetsIDsRI} obj Optional instance to populate.
     * @return {module:model/GetExchangeRateByAssetsIDsRI} The populated <code>GetExchangeRateByAssetsIDsRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetExchangeRateByAssetsIDsRI();
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

    /**
     * Validates the JSON data with respect to <code>GetExchangeRateByAssetsIDsRI</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetExchangeRateByAssetsIDsRI</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(GetExchangeRateByAssetsIDsRI.RequiredProperties),
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
      if (data['fromAssetId'] && !(typeof data['fromAssetId'] === 'string' || data['fromAssetId'] instanceof String)) {
        throw new Error("Expected the field `fromAssetId` to be a primitive type in the JSON string but got " + data['fromAssetId']);
      }
      // ensure the json data is a string
      if (data['fromAssetSymbol'] && !(typeof data['fromAssetSymbol'] === 'string' || data['fromAssetSymbol'] instanceof String)) {
        throw new Error("Expected the field `fromAssetSymbol` to be a primitive type in the JSON string but got " + data['fromAssetSymbol']);
      }
      // ensure the json data is a string
      if (data['rate'] && !(typeof data['rate'] === 'string' || data['rate'] instanceof String)) {
        throw new Error("Expected the field `rate` to be a primitive type in the JSON string but got " + data['rate']);
      }
      // ensure the json data is a string
      if (data['toAssetId'] && !(typeof data['toAssetId'] === 'string' || data['toAssetId'] instanceof String)) {
        throw new Error("Expected the field `toAssetId` to be a primitive type in the JSON string but got " + data['toAssetId']);
      }
      // ensure the json data is a string
      if (data['toAssetSymbol'] && !(typeof data['toAssetSymbol'] === 'string' || data['toAssetSymbol'] instanceof String)) {
        throw new Error("Expected the field `toAssetSymbol` to be a primitive type in the JSON string but got " + data['toAssetSymbol']);
      }
      return true;
    }
  }]);
  return GetExchangeRateByAssetsIDsRI;
}();
GetExchangeRateByAssetsIDsRI.RequiredProperties = ["calculationTimestamp", "fromAssetId", "fromAssetSymbol", "rate", "toAssetId", "toAssetSymbol"];

/**
 * Defines the time of the market data used to calculate the exchange rate in UNIX Timestamp. Oldest possible timestamp is 30 days.
 * @member {Number} calculationTimestamp
 */
GetExchangeRateByAssetsIDsRI.prototype['calculationTimestamp'] = undefined;

/**
 * Defines the base asset Reference ID to get a rate for.
 * @member {String} fromAssetId
 */
GetExchangeRateByAssetsIDsRI.prototype['fromAssetId'] = undefined;

/**
 * Defines the base asset symbol to get a rate for.
 * @member {String} fromAssetSymbol
 */
GetExchangeRateByAssetsIDsRI.prototype['fromAssetSymbol'] = undefined;

/**
 * Defines the exchange rate between assets calculated by weighted average of the last trades in every exchange for the last 24 hours by giving more weight to exchanges with higher volume.
 * @member {String} rate
 */
GetExchangeRateByAssetsIDsRI.prototype['rate'] = undefined;

/**
 * Defines the relation asset Reference ID in which the base asset rate will be displayed.
 * @member {String} toAssetId
 */
GetExchangeRateByAssetsIDsRI.prototype['toAssetId'] = undefined;

/**
 * Defines the relation asset symbol in which the base asset rate will be displayed.
 * @member {String} toAssetSymbol
 */
GetExchangeRateByAssetsIDsRI.prototype['toAssetSymbol'] = undefined;
var _default = GetExchangeRateByAssetsIDsRI;
exports["default"] = _default;