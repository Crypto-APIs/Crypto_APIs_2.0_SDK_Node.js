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
 * The UnfreezeTronEnergyOrBandwidthRBDataItem model module.
 * @module model/UnfreezeTronEnergyOrBandwidthRBDataItem
 * @version 1.11.0
 */
var UnfreezeTronEnergyOrBandwidthRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UnfreezeTronEnergyOrBandwidthRBDataItem</code>.
   * @alias module:model/UnfreezeTronEnergyOrBandwidthRBDataItem
   * @param resource {module:model/UnfreezeTronEnergyOrBandwidthRBDataItem.ResourceEnum} Transaction note with additional details
   */
  function UnfreezeTronEnergyOrBandwidthRBDataItem(resource) {
    _classCallCheck(this, UnfreezeTronEnergyOrBandwidthRBDataItem);
    UnfreezeTronEnergyOrBandwidthRBDataItem.initialize(this, resource);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(UnfreezeTronEnergyOrBandwidthRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, resource) {
      obj['resource'] = resource;
    }

    /**
     * Constructs a <code>UnfreezeTronEnergyOrBandwidthRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnfreezeTronEnergyOrBandwidthRBDataItem} obj Optional instance to populate.
     * @return {module:model/UnfreezeTronEnergyOrBandwidthRBDataItem} The populated <code>UnfreezeTronEnergyOrBandwidthRBDataItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UnfreezeTronEnergyOrBandwidthRBDataItem();
        if (data.hasOwnProperty('additionalData')) {
          obj['additionalData'] = _ApiClient["default"].convertToType(data['additionalData'], 'String');
        }
        if (data.hasOwnProperty('callbackSecretKey')) {
          obj['callbackSecretKey'] = _ApiClient["default"].convertToType(data['callbackSecretKey'], 'String');
        }
        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }
        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _ApiClient["default"].convertToType(data['recipient'], 'String');
        }
        if (data.hasOwnProperty('resource')) {
          obj['resource'] = _ApiClient["default"].convertToType(data['resource'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UnfreezeTronEnergyOrBandwidthRBDataItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UnfreezeTronEnergyOrBandwidthRBDataItem</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(UnfreezeTronEnergyOrBandwidthRBDataItem.RequiredProperties),
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
      if (data['additionalData'] && !(typeof data['additionalData'] === 'string' || data['additionalData'] instanceof String)) {
        throw new Error("Expected the field `additionalData` to be a primitive type in the JSON string but got " + data['additionalData']);
      }
      // ensure the json data is a string
      if (data['callbackSecretKey'] && !(typeof data['callbackSecretKey'] === 'string' || data['callbackSecretKey'] instanceof String)) {
        throw new Error("Expected the field `callbackSecretKey` to be a primitive type in the JSON string but got " + data['callbackSecretKey']);
      }
      // ensure the json data is a string
      if (data['callbackUrl'] && !(typeof data['callbackUrl'] === 'string' || data['callbackUrl'] instanceof String)) {
        throw new Error("Expected the field `callbackUrl` to be a primitive type in the JSON string but got " + data['callbackUrl']);
      }
      // ensure the json data is a string
      if (data['recipient'] && !(typeof data['recipient'] === 'string' || data['recipient'] instanceof String)) {
        throw new Error("Expected the field `recipient` to be a primitive type in the JSON string but got " + data['recipient']);
      }
      // ensure the json data is a string
      if (data['resource'] && !(typeof data['resource'] === 'string' || data['resource'] instanceof String)) {
        throw new Error("Expected the field `resource` to be a primitive type in the JSON string but got " + data['resource']);
      }
      return true;
    }
  }]);
  return UnfreezeTronEnergyOrBandwidthRBDataItem;
}();
UnfreezeTronEnergyOrBandwidthRBDataItem.RequiredProperties = ["resource"];

/**
 * Represents an optional note to add a free text in, explaining or providing additional detail on the transaction request.
 * @member {String} additionalData
 */
UnfreezeTronEnergyOrBandwidthRBDataItem.prototype['additionalData'] = undefined;

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our Documentation.
 * @member {String} callbackSecretKey
 */
UnfreezeTronEnergyOrBandwidthRBDataItem.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. We support ONLY httpS type of protocol.
 * @member {String} callbackUrl
 */
UnfreezeTronEnergyOrBandwidthRBDataItem.prototype['callbackUrl'] = undefined;

/**
 * Defines the specific recipient address for the transaction.
 * @member {String} recipient
 */
UnfreezeTronEnergyOrBandwidthRBDataItem.prototype['recipient'] = undefined;

/**
 * Transaction note with additional details
 * @member {module:model/UnfreezeTronEnergyOrBandwidthRBDataItem.ResourceEnum} resource
 */
UnfreezeTronEnergyOrBandwidthRBDataItem.prototype['resource'] = undefined;

/**
 * Allowed values for the <code>resource</code> property.
 * @enum {String}
 * @readonly
 */
UnfreezeTronEnergyOrBandwidthRBDataItem['ResourceEnum'] = {
  /**
   * value: "bandwidth"
   * @const
   */
  "bandwidth": "bandwidth",
  /**
   * value: "energy"
   * @const
   */
  "energy": "energy"
};
var _default = UnfreezeTronEnergyOrBandwidthRBDataItem;
exports["default"] = _default;