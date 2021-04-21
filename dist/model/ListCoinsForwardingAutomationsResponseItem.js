"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListCoinsForwardingAutomationsResponseItem model module.
 * @module model/ListCoinsForwardingAutomationsResponseItem
 * @version 2.0.0
 */
var ListCoinsForwardingAutomationsResponseItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListCoinsForwardingAutomationsResponseItem</code>.
   * @alias module:model/ListCoinsForwardingAutomationsResponseItem
   * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs.
   * @param confirmationsCountTrigger {Number} Represents the total count of the transaction confirmations before triggering the event.
   * @param createdTimestamp {Number} Defines the specific time/date when the automatic forwarding was created in Unix Timestamp.
   * @param feePriority {module:model/ListCoinsForwardingAutomationsResponseItem.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"SLOW\", \"STANDARD\" OR \"FAST\".
   * @param fromAddress {String} Represents the hash of the address that forwards the currency.
   * @param minimumTransferAmount {String} Represents the minimum transfer amount of the currency in the `fromAddress` that can be allowed for an automatic forwarding.
   * @param referenceId {String} Represents a unique ID used to reference the specific forwarding automation.
   * @param toAddress {String} Represents the hash of the address the currency is forwarded to.
   */
  function ListCoinsForwardingAutomationsResponseItem(callbackUrl, confirmationsCountTrigger, createdTimestamp, feePriority, fromAddress, minimumTransferAmount, referenceId, toAddress) {
    _classCallCheck(this, ListCoinsForwardingAutomationsResponseItem);

    ListCoinsForwardingAutomationsResponseItem.initialize(this, callbackUrl, confirmationsCountTrigger, createdTimestamp, feePriority, fromAddress, minimumTransferAmount, referenceId, toAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListCoinsForwardingAutomationsResponseItem, null, [{
    key: "initialize",
    value: function initialize(obj, callbackUrl, confirmationsCountTrigger, createdTimestamp, feePriority, fromAddress, minimumTransferAmount, referenceId, toAddress) {
      obj['callbackUrl'] = callbackUrl;
      obj['confirmationsCountTrigger'] = confirmationsCountTrigger;
      obj['createdTimestamp'] = createdTimestamp;
      obj['feePriority'] = feePriority;
      obj['fromAddress'] = fromAddress;
      obj['minimumTransferAmount'] = minimumTransferAmount;
      obj['referenceId'] = referenceId;
      obj['toAddress'] = toAddress;
    }
    /**
     * Constructs a <code>ListCoinsForwardingAutomationsResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListCoinsForwardingAutomationsResponseItem} obj Optional instance to populate.
     * @return {module:model/ListCoinsForwardingAutomationsResponseItem} The populated <code>ListCoinsForwardingAutomationsResponseItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListCoinsForwardingAutomationsResponseItem();

        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }

        if (data.hasOwnProperty('confirmationsCountTrigger')) {
          obj['confirmationsCountTrigger'] = _ApiClient["default"].convertToType(data['confirmationsCountTrigger'], 'Number');
        }

        if (data.hasOwnProperty('createdTimestamp')) {
          obj['createdTimestamp'] = _ApiClient["default"].convertToType(data['createdTimestamp'], 'Number');
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
      }

      return obj;
    }
  }]);

  return ListCoinsForwardingAutomationsResponseItem;
}();
/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs.
 * @member {String} callbackUrl
 */


ListCoinsForwardingAutomationsResponseItem.prototype['callbackUrl'] = undefined;
/**
 * Represents the total count of the transaction confirmations before triggering the event.
 * @member {Number} confirmationsCountTrigger
 */

ListCoinsForwardingAutomationsResponseItem.prototype['confirmationsCountTrigger'] = undefined;
/**
 * Defines the specific time/date when the automatic forwarding was created in Unix Timestamp.
 * @member {Number} createdTimestamp
 */

ListCoinsForwardingAutomationsResponseItem.prototype['createdTimestamp'] = undefined;
/**
 * Represents the fee priority of the automation, whether it is \"SLOW\", \"STANDARD\" OR \"FAST\".
 * @member {module:model/ListCoinsForwardingAutomationsResponseItem.FeePriorityEnum} feePriority
 */

ListCoinsForwardingAutomationsResponseItem.prototype['feePriority'] = undefined;
/**
 * Represents the hash of the address that forwards the currency.
 * @member {String} fromAddress
 */

ListCoinsForwardingAutomationsResponseItem.prototype['fromAddress'] = undefined;
/**
 * Represents the minimum transfer amount of the currency in the `fromAddress` that can be allowed for an automatic forwarding.
 * @member {String} minimumTransferAmount
 */

ListCoinsForwardingAutomationsResponseItem.prototype['minimumTransferAmount'] = undefined;
/**
 * Represents a unique ID used to reference the specific forwarding automation.
 * @member {String} referenceId
 */

ListCoinsForwardingAutomationsResponseItem.prototype['referenceId'] = undefined;
/**
 * Represents the hash of the address the currency is forwarded to.
 * @member {String} toAddress
 */

ListCoinsForwardingAutomationsResponseItem.prototype['toAddress'] = undefined;
/**
 * Allowed values for the <code>feePriority</code> property.
 * @enum {String}
 * @readonly
 */

ListCoinsForwardingAutomationsResponseItem['FeePriorityEnum'] = {
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
var _default = ListCoinsForwardingAutomationsResponseItem;
exports["default"] = _default;