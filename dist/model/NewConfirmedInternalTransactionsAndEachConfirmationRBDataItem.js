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
 * The NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem model module.
 * @module model/NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem
 * @version 1.7.2
 */
var NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem</code>.
   * @alias module:model/NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem
   * @param address {String} Defines the specific address of the internal transaction.
   * @param allowDuplicates {Boolean} Specifies a flag that permits or denies the creation of duplicate addresses.
   * @param callbackSecretKey {String} Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
   * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
   * @param confirmationsCount {Number} Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block.
   */
  function NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem(address, allowDuplicates, callbackSecretKey, callbackUrl, confirmationsCount) {
    _classCallCheck(this, NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem);

    NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem.initialize(this, address, allowDuplicates, callbackSecretKey, callbackUrl, confirmationsCount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, address, allowDuplicates, callbackSecretKey, callbackUrl, confirmationsCount) {
      obj['address'] = address;
      obj['allowDuplicates'] = allowDuplicates || false;
      obj['callbackSecretKey'] = callbackSecretKey;
      obj['callbackUrl'] = callbackUrl;
      obj['confirmationsCount'] = confirmationsCount;
    }
    /**
     * Constructs a <code>NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem} obj Optional instance to populate.
     * @return {module:model/NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem} The populated <code>NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('allowDuplicates')) {
          obj['allowDuplicates'] = _ApiClient["default"].convertToType(data['allowDuplicates'], 'Boolean');
        }

        if (data.hasOwnProperty('callbackSecretKey')) {
          obj['callbackSecretKey'] = _ApiClient["default"].convertToType(data['callbackSecretKey'], 'String');
        }

        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }

        if (data.hasOwnProperty('confirmationsCount')) {
          obj['confirmationsCount'] = _ApiClient["default"].convertToType(data['confirmationsCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem;
}();
/**
 * Defines the specific address of the internal transaction.
 * @member {String} address
 */


NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem.prototype['address'] = undefined;
/**
 * Specifies a flag that permits or denies the creation of duplicate addresses.
 * @member {Boolean} allowDuplicates
 * @default false
 */

NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem.prototype['allowDuplicates'] = false;
/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */

NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem.prototype['callbackSecretKey'] = undefined;
/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */

NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem.prototype['callbackUrl'] = undefined;
/**
 * Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block.
 * @member {Number} confirmationsCount
 */

NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem.prototype['confirmationsCount'] = undefined;
var _default = NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem;
exports["default"] = _default;