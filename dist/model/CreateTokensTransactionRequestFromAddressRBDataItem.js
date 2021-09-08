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
 * The CreateTokensTransactionRequestFromAddressRBDataItem model module.
 * @module model/CreateTokensTransactionRequestFromAddressRBDataItem
 * @version 1.2.1
 */
var CreateTokensTransactionRequestFromAddressRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateTokensTransactionRequestFromAddressRBDataItem</code>.
   * @alias module:model/CreateTokensTransactionRequestFromAddressRBDataItem
   * @param amount {String} Represents the specific amount of the transaction.
   * @param feePriority {module:model/CreateTokensTransactionRequestFromAddressRBDataItem.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
   * @param recipientAddress {String} Defines the specific recipient address for the transaction.
   * @param tokenIdentifier {String} Defines the specific token identifier. For Bitcoin-based transactions it should be the `propertyId` and for Ethereum-based transactions - the `contract`.
   */
  function CreateTokensTransactionRequestFromAddressRBDataItem(amount, feePriority, recipientAddress, tokenIdentifier) {
    _classCallCheck(this, CreateTokensTransactionRequestFromAddressRBDataItem);

    CreateTokensTransactionRequestFromAddressRBDataItem.initialize(this, amount, feePriority, recipientAddress, tokenIdentifier);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateTokensTransactionRequestFromAddressRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, amount, feePriority, recipientAddress, tokenIdentifier) {
      obj['amount'] = amount;
      obj['feePriority'] = feePriority;
      obj['recipientAddress'] = recipientAddress;
      obj['tokenIdentifier'] = tokenIdentifier;
    }
    /**
     * Constructs a <code>CreateTokensTransactionRequestFromAddressRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTokensTransactionRequestFromAddressRBDataItem} obj Optional instance to populate.
     * @return {module:model/CreateTokensTransactionRequestFromAddressRBDataItem} The populated <code>CreateTokensTransactionRequestFromAddressRBDataItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTokensTransactionRequestFromAddressRBDataItem();

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }

        if (data.hasOwnProperty('callbackSecretKey')) {
          obj['callbackSecretKey'] = _ApiClient["default"].convertToType(data['callbackSecretKey'], 'String');
        }

        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }

        if (data.hasOwnProperty('feePriority')) {
          obj['feePriority'] = _ApiClient["default"].convertToType(data['feePriority'], 'String');
        }

        if (data.hasOwnProperty('recipientAddress')) {
          obj['recipientAddress'] = _ApiClient["default"].convertToType(data['recipientAddress'], 'String');
        }

        if (data.hasOwnProperty('tokenIdentifier')) {
          obj['tokenIdentifier'] = _ApiClient["default"].convertToType(data['tokenIdentifier'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateTokensTransactionRequestFromAddressRBDataItem;
}();
/**
 * Represents the specific amount of the transaction.
 * @member {String} amount
 */


CreateTokensTransactionRequestFromAddressRBDataItem.prototype['amount'] = undefined;
/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs.
 * @member {String} callbackSecretKey
 */

CreateTokensTransactionRequestFromAddressRBDataItem.prototype['callbackSecretKey'] = undefined;
/**
 * Verified URL for sending callbacks
 * @member {String} callbackUrl
 */

CreateTokensTransactionRequestFromAddressRBDataItem.prototype['callbackUrl'] = undefined;
/**
 * Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
 * @member {module:model/CreateTokensTransactionRequestFromAddressRBDataItem.FeePriorityEnum} feePriority
 */

CreateTokensTransactionRequestFromAddressRBDataItem.prototype['feePriority'] = undefined;
/**
 * Defines the specific recipient address for the transaction.
 * @member {String} recipientAddress
 */

CreateTokensTransactionRequestFromAddressRBDataItem.prototype['recipientAddress'] = undefined;
/**
 * Defines the specific token identifier. For Bitcoin-based transactions it should be the `propertyId` and for Ethereum-based transactions - the `contract`.
 * @member {String} tokenIdentifier
 */

CreateTokensTransactionRequestFromAddressRBDataItem.prototype['tokenIdentifier'] = undefined;
/**
 * Allowed values for the <code>feePriority</code> property.
 * @enum {String}
 * @readonly
 */

CreateTokensTransactionRequestFromAddressRBDataItem['FeePriorityEnum'] = {
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
var _default = CreateTokensTransactionRequestFromAddressRBDataItem;
exports["default"] = _default;