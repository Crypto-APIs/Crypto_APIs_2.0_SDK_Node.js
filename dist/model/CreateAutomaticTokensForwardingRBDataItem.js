"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateAutomaticTokensForwardingRBTokenData = _interopRequireDefault(require("./CreateAutomaticTokensForwardingRBTokenData"));
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
 * The CreateAutomaticTokensForwardingRBDataItem model module.
 * @module model/CreateAutomaticTokensForwardingRBDataItem
 * @version 1.11.0
 */
var CreateAutomaticTokensForwardingRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateAutomaticTokensForwardingRBDataItem</code>.
   * @alias module:model/CreateAutomaticTokensForwardingRBDataItem
   * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
   * @param confirmationsCount {String} Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block.
   * @param feePriority {module:model/CreateAutomaticTokensForwardingRBDataItem.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"SLOW\", \"STANDARD\" or \"FAST\".
   * @param minimumTransferAmount {String} Represents the minimum transfer amount of the currency in the `fromAddress` that can be allowed for an automatic forwarding.
   * @param toAddress {String} Represents the hash of the address the currency is forwarded to.
   * @param tokenData {module:model/CreateAutomaticTokensForwardingRBTokenData} 
   */
  function CreateAutomaticTokensForwardingRBDataItem(callbackUrl, confirmationsCount, feePriority, minimumTransferAmount, toAddress, tokenData) {
    _classCallCheck(this, CreateAutomaticTokensForwardingRBDataItem);
    CreateAutomaticTokensForwardingRBDataItem.initialize(this, callbackUrl, confirmationsCount, feePriority, minimumTransferAmount, toAddress, tokenData);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CreateAutomaticTokensForwardingRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, callbackUrl, confirmationsCount, feePriority, minimumTransferAmount, toAddress, tokenData) {
      obj['callbackUrl'] = callbackUrl;
      obj['confirmationsCount'] = confirmationsCount;
      obj['feePriority'] = feePriority;
      obj['minimumTransferAmount'] = minimumTransferAmount;
      obj['toAddress'] = toAddress;
      obj['tokenData'] = tokenData;
    }

    /**
     * Constructs a <code>CreateAutomaticTokensForwardingRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAutomaticTokensForwardingRBDataItem} obj Optional instance to populate.
     * @return {module:model/CreateAutomaticTokensForwardingRBDataItem} The populated <code>CreateAutomaticTokensForwardingRBDataItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateAutomaticTokensForwardingRBDataItem();
        if (data.hasOwnProperty('callbackSecretKey')) {
          obj['callbackSecretKey'] = _ApiClient["default"].convertToType(data['callbackSecretKey'], 'String');
        }
        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }
        if (data.hasOwnProperty('confirmationsCount')) {
          obj['confirmationsCount'] = _ApiClient["default"].convertToType(data['confirmationsCount'], 'String');
        }
        if (data.hasOwnProperty('feePriority')) {
          obj['feePriority'] = _ApiClient["default"].convertToType(data['feePriority'], 'String');
        }
        if (data.hasOwnProperty('minimumTransferAmount')) {
          obj['minimumTransferAmount'] = _ApiClient["default"].convertToType(data['minimumTransferAmount'], 'String');
        }
        if (data.hasOwnProperty('toAddress')) {
          obj['toAddress'] = _ApiClient["default"].convertToType(data['toAddress'], 'String');
        }
        if (data.hasOwnProperty('tokenData')) {
          obj['tokenData'] = _CreateAutomaticTokensForwardingRBTokenData["default"].constructFromObject(data['tokenData']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateAutomaticTokensForwardingRBDataItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateAutomaticTokensForwardingRBDataItem</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(CreateAutomaticTokensForwardingRBDataItem.RequiredProperties),
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
      if (data['callbackSecretKey'] && !(typeof data['callbackSecretKey'] === 'string' || data['callbackSecretKey'] instanceof String)) {
        throw new Error("Expected the field `callbackSecretKey` to be a primitive type in the JSON string but got " + data['callbackSecretKey']);
      }
      // ensure the json data is a string
      if (data['callbackUrl'] && !(typeof data['callbackUrl'] === 'string' || data['callbackUrl'] instanceof String)) {
        throw new Error("Expected the field `callbackUrl` to be a primitive type in the JSON string but got " + data['callbackUrl']);
      }
      // ensure the json data is a string
      if (data['confirmationsCount'] && !(typeof data['confirmationsCount'] === 'string' || data['confirmationsCount'] instanceof String)) {
        throw new Error("Expected the field `confirmationsCount` to be a primitive type in the JSON string but got " + data['confirmationsCount']);
      }
      // ensure the json data is a string
      if (data['feePriority'] && !(typeof data['feePriority'] === 'string' || data['feePriority'] instanceof String)) {
        throw new Error("Expected the field `feePriority` to be a primitive type in the JSON string but got " + data['feePriority']);
      }
      // ensure the json data is a string
      if (data['minimumTransferAmount'] && !(typeof data['minimumTransferAmount'] === 'string' || data['minimumTransferAmount'] instanceof String)) {
        throw new Error("Expected the field `minimumTransferAmount` to be a primitive type in the JSON string but got " + data['minimumTransferAmount']);
      }
      // ensure the json data is a string
      if (data['toAddress'] && !(typeof data['toAddress'] === 'string' || data['toAddress'] instanceof String)) {
        throw new Error("Expected the field `toAddress` to be a primitive type in the JSON string but got " + data['toAddress']);
      }
      // validate the optional field `tokenData`
      if (data['tokenData']) {
        // data not null
        _CreateAutomaticTokensForwardingRBTokenData["default"].validateJSON(data['tokenData']);
      }
      return true;
    }
  }]);
  return CreateAutomaticTokensForwardingRBDataItem;
}();
CreateAutomaticTokensForwardingRBDataItem.RequiredProperties = ["callbackUrl", "confirmationsCount", "feePriority", "minimumTransferAmount", "toAddress", "tokenData"];

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
CreateAutomaticTokensForwardingRBDataItem.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
CreateAutomaticTokensForwardingRBDataItem.prototype['callbackUrl'] = undefined;

/**
 * Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block.
 * @member {String} confirmationsCount
 */
CreateAutomaticTokensForwardingRBDataItem.prototype['confirmationsCount'] = undefined;

/**
 * Represents the fee priority of the automation, whether it is \"SLOW\", \"STANDARD\" or \"FAST\".
 * @member {module:model/CreateAutomaticTokensForwardingRBDataItem.FeePriorityEnum} feePriority
 */
CreateAutomaticTokensForwardingRBDataItem.prototype['feePriority'] = undefined;

/**
 * Represents the minimum transfer amount of the currency in the `fromAddress` that can be allowed for an automatic forwarding.
 * @member {String} minimumTransferAmount
 */
CreateAutomaticTokensForwardingRBDataItem.prototype['minimumTransferAmount'] = undefined;

/**
 * Represents the hash of the address the currency is forwarded to.
 * @member {String} toAddress
 */
CreateAutomaticTokensForwardingRBDataItem.prototype['toAddress'] = undefined;

/**
 * @member {module:model/CreateAutomaticTokensForwardingRBTokenData} tokenData
 */
CreateAutomaticTokensForwardingRBDataItem.prototype['tokenData'] = undefined;

/**
 * Allowed values for the <code>feePriority</code> property.
 * @enum {String}
 * @readonly
 */
CreateAutomaticTokensForwardingRBDataItem['FeePriorityEnum'] = {
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
var _default = CreateAutomaticTokensForwardingRBDataItem;
exports["default"] = _default;