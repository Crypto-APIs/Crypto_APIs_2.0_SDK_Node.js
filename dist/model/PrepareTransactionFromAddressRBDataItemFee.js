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
 * The PrepareTransactionFromAddressRBDataItemFee model module.
 * @module model/PrepareTransactionFromAddressRBDataItemFee
 * @version 1.11.0
 */
var PrepareTransactionFromAddressRBDataItemFee = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareTransactionFromAddressRBDataItemFee</code>.
   * Defines the amount of the transaction fee.
   * @alias module:model/PrepareTransactionFromAddressRBDataItemFee
   * @param priority {module:model/PrepareTransactionFromAddressRBDataItemFee.PriorityEnum} Enum representation of the fee priority
   */
  function PrepareTransactionFromAddressRBDataItemFee(priority) {
    _classCallCheck(this, PrepareTransactionFromAddressRBDataItemFee);
    PrepareTransactionFromAddressRBDataItemFee.initialize(this, priority);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareTransactionFromAddressRBDataItemFee, null, [{
    key: "initialize",
    value: function initialize(obj, priority) {
      obj['priority'] = priority;
    }

    /**
     * Constructs a <code>PrepareTransactionFromAddressRBDataItemFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareTransactionFromAddressRBDataItemFee} obj Optional instance to populate.
     * @return {module:model/PrepareTransactionFromAddressRBDataItemFee} The populated <code>PrepareTransactionFromAddressRBDataItemFee</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareTransactionFromAddressRBDataItemFee();
        if (data.hasOwnProperty('exactAmount')) {
          obj['exactAmount'] = _ApiClient["default"].convertToType(data['exactAmount'], 'String');
        }
        if (data.hasOwnProperty('priority')) {
          obj['priority'] = _ApiClient["default"].convertToType(data['priority'], 'String');
        }
        if (data.hasOwnProperty('substractFromAmount')) {
          obj['substractFromAmount'] = _ApiClient["default"].convertToType(data['substractFromAmount'], 'Boolean');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PrepareTransactionFromAddressRBDataItemFee</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PrepareTransactionFromAddressRBDataItemFee</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(PrepareTransactionFromAddressRBDataItemFee.RequiredProperties),
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
      if (data['exactAmount'] && !(typeof data['exactAmount'] === 'string' || data['exactAmount'] instanceof String)) {
        throw new Error("Expected the field `exactAmount` to be a primitive type in the JSON string but got " + data['exactAmount']);
      }
      // ensure the json data is a string
      if (data['priority'] && !(typeof data['priority'] === 'string' || data['priority'] instanceof String)) {
        throw new Error("Expected the field `priority` to be a primitive type in the JSON string but got " + data['priority']);
      }
      return true;
    }
  }]);
  return PrepareTransactionFromAddressRBDataItemFee;
}();
PrepareTransactionFromAddressRBDataItemFee.RequiredProperties = ["priority"];

/**
 * String representation of the exact amount
 * @member {String} exactAmount
 */
PrepareTransactionFromAddressRBDataItemFee.prototype['exactAmount'] = undefined;

/**
 * Enum representation of the fee priority
 * @member {module:model/PrepareTransactionFromAddressRBDataItemFee.PriorityEnum} priority
 */
PrepareTransactionFromAddressRBDataItemFee.prototype['priority'] = undefined;

/**
 * Representation of the subtract from amount whether it is \"true\",  or \"false\".
 * @member {Boolean} substractFromAmount
 */
PrepareTransactionFromAddressRBDataItemFee.prototype['substractFromAmount'] = undefined;

/**
 * Allowed values for the <code>priority</code> property.
 * @enum {String}
 * @readonly
 */
PrepareTransactionFromAddressRBDataItemFee['PriorityEnum'] = {
  /**
   * value: "slow"
   * @const
   */
  "slow": "slow",
  /**
   * value: "standard"
   * @const
   */
  "standard": "standard",
  /**
   * value: "fast"
   * @const
   */
  "fast": "fast"
};
var _default = PrepareTransactionFromAddressRBDataItemFee;
exports["default"] = _default;