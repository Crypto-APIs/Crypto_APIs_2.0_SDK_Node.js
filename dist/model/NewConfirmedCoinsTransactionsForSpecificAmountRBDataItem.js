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
 * The NewConfirmedCoinsTransactionsForSpecificAmountRBDataItem model module.
 * @module model/NewConfirmedCoinsTransactionsForSpecificAmountRBDataItem
 * @version 1.7.0
 */
var NewConfirmedCoinsTransactionsForSpecificAmountRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewConfirmedCoinsTransactionsForSpecificAmountRBDataItem</code>.
   * @alias module:model/NewConfirmedCoinsTransactionsForSpecificAmountRBDataItem
   * @param amountHigherThan {Number} Represents a specific amount of coins after which the system have to send a callback to customers' callbackUrl.
   * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
   */
  function NewConfirmedCoinsTransactionsForSpecificAmountRBDataItem(amountHigherThan, callbackUrl) {
    _classCallCheck(this, NewConfirmedCoinsTransactionsForSpecificAmountRBDataItem);

    NewConfirmedCoinsTransactionsForSpecificAmountRBDataItem.initialize(this, amountHigherThan, callbackUrl);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewConfirmedCoinsTransactionsForSpecificAmountRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, amountHigherThan, callbackUrl) {
      obj['amountHigherThan'] = amountHigherThan;
      obj['callbackUrl'] = callbackUrl;
    }
    /**
     * Constructs a <code>NewConfirmedCoinsTransactionsForSpecificAmountRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedCoinsTransactionsForSpecificAmountRBDataItem} obj Optional instance to populate.
     * @return {module:model/NewConfirmedCoinsTransactionsForSpecificAmountRBDataItem} The populated <code>NewConfirmedCoinsTransactionsForSpecificAmountRBDataItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewConfirmedCoinsTransactionsForSpecificAmountRBDataItem();

        if (data.hasOwnProperty('allowDuplicates')) {
          obj['allowDuplicates'] = _ApiClient["default"].convertToType(data['allowDuplicates'], 'Boolean');
        }

        if (data.hasOwnProperty('amountHigherThan')) {
          obj['amountHigherThan'] = _ApiClient["default"].convertToType(data['amountHigherThan'], 'Number');
        }

        if (data.hasOwnProperty('callbackSecretKey')) {
          obj['callbackSecretKey'] = _ApiClient["default"].convertToType(data['callbackSecretKey'], 'String');
        }

        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NewConfirmedCoinsTransactionsForSpecificAmountRBDataItem;
}();
/**
 * Specifies a flag that permits or denies the creation of duplicate addresses.
 * @member {Boolean} allowDuplicates
 * @default false
 */


NewConfirmedCoinsTransactionsForSpecificAmountRBDataItem.prototype['allowDuplicates'] = false;
/**
 * Represents a specific amount of coins after which the system have to send a callback to customers' callbackUrl.
 * @member {Number} amountHigherThan
 */

NewConfirmedCoinsTransactionsForSpecificAmountRBDataItem.prototype['amountHigherThan'] = undefined;
/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs 2.0. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */

NewConfirmedCoinsTransactionsForSpecificAmountRBDataItem.prototype['callbackSecretKey'] = undefined;
/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */

NewConfirmedCoinsTransactionsForSpecificAmountRBDataItem.prototype['callbackUrl'] = undefined;
var _default = NewConfirmedCoinsTransactionsForSpecificAmountRBDataItem;
exports["default"] = _default;