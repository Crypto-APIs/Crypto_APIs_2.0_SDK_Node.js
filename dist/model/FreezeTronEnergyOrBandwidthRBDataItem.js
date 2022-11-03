"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The FreezeTronEnergyOrBandwidthRBDataItem model module.
 * @module model/FreezeTronEnergyOrBandwidthRBDataItem
 * @version 1.10.0
 */
var FreezeTronEnergyOrBandwidthRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FreezeTronEnergyOrBandwidthRBDataItem</code>.
   * @alias module:model/FreezeTronEnergyOrBandwidthRBDataItem
   * @param amount {String} Defines the amount that has to be transferred
   * @param resource {module:model/FreezeTronEnergyOrBandwidthRBDataItem.ResourceEnum} Transaction note with additional details
   */
  function FreezeTronEnergyOrBandwidthRBDataItem(amount, resource) {
    _classCallCheck(this, FreezeTronEnergyOrBandwidthRBDataItem);
    FreezeTronEnergyOrBandwidthRBDataItem.initialize(this, amount, resource);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(FreezeTronEnergyOrBandwidthRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, amount, resource) {
      obj['amount'] = amount;
      obj['resource'] = resource;
    }

    /**
     * Constructs a <code>FreezeTronEnergyOrBandwidthRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FreezeTronEnergyOrBandwidthRBDataItem} obj Optional instance to populate.
     * @return {module:model/FreezeTronEnergyOrBandwidthRBDataItem} The populated <code>FreezeTronEnergyOrBandwidthRBDataItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FreezeTronEnergyOrBandwidthRBDataItem();
        if (data.hasOwnProperty('additionalData')) {
          obj['additionalData'] = _ApiClient["default"].convertToType(data['additionalData'], 'String');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
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
  }]);
  return FreezeTronEnergyOrBandwidthRBDataItem;
}();
/**
 * Represents an optional note to add a free text in, explaining or providing additional detail on the transaction request.
 * @member {String} additionalData
 */
FreezeTronEnergyOrBandwidthRBDataItem.prototype['additionalData'] = undefined;

/**
 * Defines the amount that has to be transferred
 * @member {String} amount
 */
FreezeTronEnergyOrBandwidthRBDataItem.prototype['amount'] = undefined;

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our Documentation.
 * @member {String} callbackSecretKey
 */
FreezeTronEnergyOrBandwidthRBDataItem.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. We support ONLY httpS type of protocol.
 * @member {String} callbackUrl
 */
FreezeTronEnergyOrBandwidthRBDataItem.prototype['callbackUrl'] = undefined;

/**
 * Defines the specific recipient address for the transaction.
 * @member {String} recipient
 */
FreezeTronEnergyOrBandwidthRBDataItem.prototype['recipient'] = undefined;

/**
 * Transaction note with additional details
 * @member {module:model/FreezeTronEnergyOrBandwidthRBDataItem.ResourceEnum} resource
 */
FreezeTronEnergyOrBandwidthRBDataItem.prototype['resource'] = undefined;

/**
 * Allowed values for the <code>resource</code> property.
 * @enum {String}
 * @readonly
 */
FreezeTronEnergyOrBandwidthRBDataItem['ResourceEnum'] = {
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
var _default = FreezeTronEnergyOrBandwidthRBDataItem;
exports["default"] = _default;