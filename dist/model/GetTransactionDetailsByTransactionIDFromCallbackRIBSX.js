"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue"));
var _GetXRPRippleTransactionDetailsByTransactionIDRIOffer = _interopRequireDefault(require("./GetXRPRippleTransactionDetailsByTransactionIDRIOffer"));
var _GetXRPRippleTransactionDetailsByTransactionIDRIReceive = _interopRequireDefault(require("./GetXRPRippleTransactionDetailsByTransactionIDRIReceive"));
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
 * The GetTransactionDetailsByTransactionIDFromCallbackRIBSX model module.
 * @module model/GetTransactionDetailsByTransactionIDFromCallbackRIBSX
 * @version 1.11.0
 */
var GetTransactionDetailsByTransactionIDFromCallbackRIBSX = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSX</code>.
   * XRP
   * @alias module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSX
   * @param additionalData {String} Represents additional data that may be needed.
   * @param offer {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIOffer} 
   * @param receive {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIReceive} 
   * @param sequence {Number} Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
   * @param status {String} Defines the status of the transaction.
   * @param type {String} Defines the type of the transaction.
   * @param value {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue} 
   */
  function GetTransactionDetailsByTransactionIDFromCallbackRIBSX(additionalData, offer, receive, sequence, status, type, value) {
    _classCallCheck(this, GetTransactionDetailsByTransactionIDFromCallbackRIBSX);
    GetTransactionDetailsByTransactionIDFromCallbackRIBSX.initialize(this, additionalData, offer, receive, sequence, status, type, value);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetTransactionDetailsByTransactionIDFromCallbackRIBSX, null, [{
    key: "initialize",
    value: function initialize(obj, additionalData, offer, receive, sequence, status, type, value) {
      obj['additionalData'] = additionalData;
      obj['offer'] = offer;
      obj['receive'] = receive;
      obj['sequence'] = sequence;
      obj['status'] = status;
      obj['type'] = type;
      obj['value'] = value;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSX</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSX} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSX} The populated <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSX</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionDetailsByTransactionIDFromCallbackRIBSX();
        if (data.hasOwnProperty('additionalData')) {
          obj['additionalData'] = _ApiClient["default"].convertToType(data['additionalData'], 'String');
        }
        if (data.hasOwnProperty('destinationTag')) {
          obj['destinationTag'] = _ApiClient["default"].convertToType(data['destinationTag'], 'Number');
        }
        if (data.hasOwnProperty('offer')) {
          obj['offer'] = _GetXRPRippleTransactionDetailsByTransactionIDRIOffer["default"].constructFromObject(data['offer']);
        }
        if (data.hasOwnProperty('receive')) {
          obj['receive'] = _GetXRPRippleTransactionDetailsByTransactionIDRIReceive["default"].constructFromObject(data['receive']);
        }
        if (data.hasOwnProperty('sequence')) {
          obj['sequence'] = _ApiClient["default"].convertToType(data['sequence'], 'Number');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue["default"].constructFromObject(data['value']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSX</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSX</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(GetTransactionDetailsByTransactionIDFromCallbackRIBSX.RequiredProperties),
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
      // validate the optional field `offer`
      if (data['offer']) {
        // data not null
        _GetXRPRippleTransactionDetailsByTransactionIDRIOffer["default"].validateJSON(data['offer']);
      }
      // validate the optional field `receive`
      if (data['receive']) {
        // data not null
        _GetXRPRippleTransactionDetailsByTransactionIDRIReceive["default"].validateJSON(data['receive']);
      }
      // ensure the json data is a string
      if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
        throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
      }
      // ensure the json data is a string
      if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
        throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
      }
      // validate the optional field `value`
      if (data['value']) {
        // data not null
        _GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue["default"].validateJSON(data['value']);
      }
      return true;
    }
  }]);
  return GetTransactionDetailsByTransactionIDFromCallbackRIBSX;
}();
GetTransactionDetailsByTransactionIDFromCallbackRIBSX.RequiredProperties = ["additionalData", "offer", "receive", "sequence", "status", "type", "value"];

/**
 * Represents additional data that may be needed.
 * @member {String} additionalData
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSX.prototype['additionalData'] = undefined;

/**
 * Defines the destination tag value.
 * @member {Number} destinationTag
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSX.prototype['destinationTag'] = undefined;

/**
 * @member {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIOffer} offer
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSX.prototype['offer'] = undefined;

/**
 * @member {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIReceive} receive
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSX.prototype['receive'] = undefined;

/**
 * Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
 * @member {Number} sequence
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSX.prototype['sequence'] = undefined;

/**
 * Defines the status of the transaction.
 * @member {String} status
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSX.prototype['status'] = undefined;

/**
 * Defines the type of the transaction.
 * @member {String} type
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSX.prototype['type'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue} value
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSX.prototype['value'] = undefined;
var _default = GetTransactionDetailsByTransactionIDFromCallbackRIBSX;
exports["default"] = _default;