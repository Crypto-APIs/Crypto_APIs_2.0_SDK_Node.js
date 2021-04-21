"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateAutomaticTokensForwardingResponseItemTokenData = _interopRequireDefault(require("./CreateAutomaticTokensForwardingResponseItemTokenData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateAutomaticTokensForwardingResponseItem model module.
 * @module model/CreateAutomaticTokensForwardingResponseItem
 * @version 2.0.0
 */
var CreateAutomaticTokensForwardingResponseItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateAutomaticTokensForwardingResponseItem</code>.
   * @alias module:model/CreateAutomaticTokensForwardingResponseItem
   * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs.
   * @param confirmationsCount {Number} Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block.
   * @param createdTimestamp {Number} Defines the specific time/date when the automatic forwarding was created in Unix Timestamp.
   * @param feeAddress {String} Represents the specific fee address, which is always automatically generated. Users must fund it.
   * @param feePriority {module:model/CreateAutomaticTokensForwardingResponseItem.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"SLOW\", \"STANDARD\" or \"FAST\".
   * @param fromAddress {String} Represents the hash of the address that forwards the tokens.
   * @param minimumTransferAmount {String} Represents the minimum transfer amount of the tokens in the `fromAddress` that can be allowed for an automatic forwarding.
   * @param referenceId {String} Represents a unique ID used to reference the specific callback subscription.
   * @param toAddress {String} Represents the hash of the address the tokens are forwarded to.
   * @param tokenData {module:model/CreateAutomaticTokensForwardingResponseItemTokenData} 
   */
  function CreateAutomaticTokensForwardingResponseItem(callbackUrl, confirmationsCount, createdTimestamp, feeAddress, feePriority, fromAddress, minimumTransferAmount, referenceId, toAddress, tokenData) {
    _classCallCheck(this, CreateAutomaticTokensForwardingResponseItem);

    CreateAutomaticTokensForwardingResponseItem.initialize(this, callbackUrl, confirmationsCount, createdTimestamp, feeAddress, feePriority, fromAddress, minimumTransferAmount, referenceId, toAddress, tokenData);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateAutomaticTokensForwardingResponseItem, null, [{
    key: "initialize",
    value: function initialize(obj, callbackUrl, confirmationsCount, createdTimestamp, feeAddress, feePriority, fromAddress, minimumTransferAmount, referenceId, toAddress, tokenData) {
      obj['callbackUrl'] = callbackUrl;
      obj['confirmationsCount'] = confirmationsCount;
      obj['createdTimestamp'] = createdTimestamp;
      obj['feeAddress'] = feeAddress;
      obj['feePriority'] = feePriority;
      obj['fromAddress'] = fromAddress;
      obj['minimumTransferAmount'] = minimumTransferAmount;
      obj['referenceId'] = referenceId;
      obj['toAddress'] = toAddress;
      obj['tokenData'] = tokenData;
    }
    /**
     * Constructs a <code>CreateAutomaticTokensForwardingResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAutomaticTokensForwardingResponseItem} obj Optional instance to populate.
     * @return {module:model/CreateAutomaticTokensForwardingResponseItem} The populated <code>CreateAutomaticTokensForwardingResponseItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateAutomaticTokensForwardingResponseItem();

        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }

        if (data.hasOwnProperty('confirmationsCount')) {
          obj['confirmationsCount'] = _ApiClient["default"].convertToType(data['confirmationsCount'], 'Number');
        }

        if (data.hasOwnProperty('createdTimestamp')) {
          obj['createdTimestamp'] = _ApiClient["default"].convertToType(data['createdTimestamp'], 'Number');
        }

        if (data.hasOwnProperty('feeAddress')) {
          obj['feeAddress'] = _ApiClient["default"].convertToType(data['feeAddress'], 'String');
        }

        if (data.hasOwnProperty('feePriority')) {
          obj['feePriority'] = _ApiClient["default"].convertToType(data['feePriority'], 'String');
        }

        if (data.hasOwnProperty('fromAddress')) {
          obj['fromAddress'] = _ApiClient["default"].convertToType(data['fromAddress'], 'String');
        }

        if (data.hasOwnProperty('minimumTransferAmount')) {
          obj['minimumTransferAmount'] = _ApiClient["default"].convertToType(data['minimumTransferAmount'], 'String');
        }

        if (data.hasOwnProperty('referenceId')) {
          obj['referenceId'] = _ApiClient["default"].convertToType(data['referenceId'], 'String');
        }

        if (data.hasOwnProperty('toAddress')) {
          obj['toAddress'] = _ApiClient["default"].convertToType(data['toAddress'], 'String');
        }

        if (data.hasOwnProperty('tokenData')) {
          obj['tokenData'] = _CreateAutomaticTokensForwardingResponseItemTokenData["default"].constructFromObject(data['tokenData']);
        }
      }

      return obj;
    }
  }]);

  return CreateAutomaticTokensForwardingResponseItem;
}();
/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs.
 * @member {String} callbackUrl
 */


CreateAutomaticTokensForwardingResponseItem.prototype['callbackUrl'] = undefined;
/**
 * Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block.
 * @member {Number} confirmationsCount
 */

CreateAutomaticTokensForwardingResponseItem.prototype['confirmationsCount'] = undefined;
/**
 * Defines the specific time/date when the automatic forwarding was created in Unix Timestamp.
 * @member {Number} createdTimestamp
 */

CreateAutomaticTokensForwardingResponseItem.prototype['createdTimestamp'] = undefined;
/**
 * Represents the specific fee address, which is always automatically generated. Users must fund it.
 * @member {String} feeAddress
 */

CreateAutomaticTokensForwardingResponseItem.prototype['feeAddress'] = undefined;
/**
 * Represents the fee priority of the automation, whether it is \"SLOW\", \"STANDARD\" or \"FAST\".
 * @member {module:model/CreateAutomaticTokensForwardingResponseItem.FeePriorityEnum} feePriority
 */

CreateAutomaticTokensForwardingResponseItem.prototype['feePriority'] = undefined;
/**
 * Represents the hash of the address that forwards the tokens.
 * @member {String} fromAddress
 */

CreateAutomaticTokensForwardingResponseItem.prototype['fromAddress'] = undefined;
/**
 * Represents the minimum transfer amount of the tokens in the `fromAddress` that can be allowed for an automatic forwarding.
 * @member {String} minimumTransferAmount
 */

CreateAutomaticTokensForwardingResponseItem.prototype['minimumTransferAmount'] = undefined;
/**
 * Represents a unique ID used to reference the specific callback subscription.
 * @member {String} referenceId
 */

CreateAutomaticTokensForwardingResponseItem.prototype['referenceId'] = undefined;
/**
 * Represents the hash of the address the tokens are forwarded to.
 * @member {String} toAddress
 */

CreateAutomaticTokensForwardingResponseItem.prototype['toAddress'] = undefined;
/**
 * @member {module:model/CreateAutomaticTokensForwardingResponseItemTokenData} tokenData
 */

CreateAutomaticTokensForwardingResponseItem.prototype['tokenData'] = undefined;
/**
 * Allowed values for the <code>feePriority</code> property.
 * @enum {String}
 * @readonly
 */

CreateAutomaticTokensForwardingResponseItem['FeePriorityEnum'] = {
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
var _default = CreateAutomaticTokensForwardingResponseItem;
exports["default"] = _default;