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
 * The BroadcastLocallySignedTransactionRBDataItem model module.
 * @module model/BroadcastLocallySignedTransactionRBDataItem
 * @version 1.7.2
 */
var BroadcastLocallySignedTransactionRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BroadcastLocallySignedTransactionRBDataItem</code>.
   * @alias module:model/BroadcastLocallySignedTransactionRBDataItem
   * @param signedTransactionHex {String} Represents the signed transaction's specific hex.
   */
  function BroadcastLocallySignedTransactionRBDataItem(signedTransactionHex) {
    _classCallCheck(this, BroadcastLocallySignedTransactionRBDataItem);

    BroadcastLocallySignedTransactionRBDataItem.initialize(this, signedTransactionHex);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BroadcastLocallySignedTransactionRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, signedTransactionHex) {
      obj['signedTransactionHex'] = signedTransactionHex;
    }
    /**
     * Constructs a <code>BroadcastLocallySignedTransactionRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BroadcastLocallySignedTransactionRBDataItem} obj Optional instance to populate.
     * @return {module:model/BroadcastLocallySignedTransactionRBDataItem} The populated <code>BroadcastLocallySignedTransactionRBDataItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BroadcastLocallySignedTransactionRBDataItem();

        if (data.hasOwnProperty('callbackSecretKey')) {
          obj['callbackSecretKey'] = _ApiClient["default"].convertToType(data['callbackSecretKey'], 'String');
        }

        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }

        if (data.hasOwnProperty('signedTransactionHex')) {
          obj['signedTransactionHex'] = _ApiClient["default"].convertToType(data['signedTransactionHex'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BroadcastLocallySignedTransactionRBDataItem;
}();
/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */


BroadcastLocallySignedTransactionRBDataItem.prototype['callbackSecretKey'] = undefined;
/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */

BroadcastLocallySignedTransactionRBDataItem.prototype['callbackUrl'] = undefined;
/**
 * Represents the signed transaction's specific hex.
 * @member {String} signedTransactionHex
 */

BroadcastLocallySignedTransactionRBDataItem.prototype['signedTransactionHex'] = undefined;
var _default = BroadcastLocallySignedTransactionRBDataItem;
exports["default"] = _default;