"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateAutomaticTokensForwardingRBTokenData = _interopRequireDefault(require("./CreateAutomaticTokensForwardingRBTokenData"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CreateAutomaticTokensForwardingRBDataItem model module.
 * @module model/CreateAutomaticTokensForwardingRBDataItem
 * @version 1.13.0
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
  }]);
  return CreateAutomaticTokensForwardingRBDataItem;
}();
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