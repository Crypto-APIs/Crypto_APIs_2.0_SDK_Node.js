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
 * The NewConfirmedTokenTransactionsForSpecificAmountRBDataItem model module.
 * @module model/NewConfirmedTokenTransactionsForSpecificAmountRBDataItem
 * @version 1.7.2
 */
var NewConfirmedTokenTransactionsForSpecificAmountRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewConfirmedTokenTransactionsForSpecificAmountRBDataItem</code>.
   * @alias module:model/NewConfirmedTokenTransactionsForSpecificAmountRBDataItem
   * @param amountHigherThan {Number} Represents a specific amount of tokens after which the system have to send a callback to customers' callbackUrl.
   * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
   * @param contractAddress {String} Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
   */
  function NewConfirmedTokenTransactionsForSpecificAmountRBDataItem(amountHigherThan, callbackUrl, contractAddress) {
    _classCallCheck(this, NewConfirmedTokenTransactionsForSpecificAmountRBDataItem);

    NewConfirmedTokenTransactionsForSpecificAmountRBDataItem.initialize(this, amountHigherThan, callbackUrl, contractAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewConfirmedTokenTransactionsForSpecificAmountRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, amountHigherThan, callbackUrl, contractAddress) {
      obj['amountHigherThan'] = amountHigherThan;
      obj['callbackUrl'] = callbackUrl;
      obj['contractAddress'] = contractAddress;
    }
    /**
     * Constructs a <code>NewConfirmedTokenTransactionsForSpecificAmountRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedTokenTransactionsForSpecificAmountRBDataItem} obj Optional instance to populate.
     * @return {module:model/NewConfirmedTokenTransactionsForSpecificAmountRBDataItem} The populated <code>NewConfirmedTokenTransactionsForSpecificAmountRBDataItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewConfirmedTokenTransactionsForSpecificAmountRBDataItem();

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

        if (data.hasOwnProperty('contractAddress')) {
          obj['contractAddress'] = _ApiClient["default"].convertToType(data['contractAddress'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NewConfirmedTokenTransactionsForSpecificAmountRBDataItem;
}();
/**
 * Specifies a flag that permits or denies the creation of duplicate addresses.
 * @member {Boolean} allowDuplicates
 * @default false
 */


NewConfirmedTokenTransactionsForSpecificAmountRBDataItem.prototype['allowDuplicates'] = false;
/**
 * Represents a specific amount of tokens after which the system have to send a callback to customers' callbackUrl.
 * @member {Number} amountHigherThan
 */

NewConfirmedTokenTransactionsForSpecificAmountRBDataItem.prototype['amountHigherThan'] = undefined;
/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs 2.0. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */

NewConfirmedTokenTransactionsForSpecificAmountRBDataItem.prototype['callbackSecretKey'] = undefined;
/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */

NewConfirmedTokenTransactionsForSpecificAmountRBDataItem.prototype['callbackUrl'] = undefined;
/**
 * Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
 * @member {String} contractAddress
 */

NewConfirmedTokenTransactionsForSpecificAmountRBDataItem.prototype['contractAddress'] = undefined;
var _default = NewConfirmedTokenTransactionsForSpecificAmountRBDataItem;
exports["default"] = _default;