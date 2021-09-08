"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateCoinsTransactionRequestFromWalletRBDataItemRecipients = _interopRequireDefault(require("./CreateCoinsTransactionRequestFromWalletRBDataItemRecipients"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateCoinsTransactionRequestFromWalletRBDataItem model module.
 * @module model/CreateCoinsTransactionRequestFromWalletRBDataItem
 * @version 1.2.1
 */
var CreateCoinsTransactionRequestFromWalletRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateCoinsTransactionRequestFromWalletRBDataItem</code>.
   * @alias module:model/CreateCoinsTransactionRequestFromWalletRBDataItem
   * @param feePriority {module:model/CreateCoinsTransactionRequestFromWalletRBDataItem.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
   * @param recipients {Array.<module:model/CreateCoinsTransactionRequestFromWalletRBDataItemRecipients>} Defines the destination of the transaction, whether it is incoming or outgoing.
   */
  function CreateCoinsTransactionRequestFromWalletRBDataItem(feePriority, recipients) {
    _classCallCheck(this, CreateCoinsTransactionRequestFromWalletRBDataItem);

    CreateCoinsTransactionRequestFromWalletRBDataItem.initialize(this, feePriority, recipients);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateCoinsTransactionRequestFromWalletRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, feePriority, recipients) {
      obj['feePriority'] = feePriority;
      obj['recipients'] = recipients;
    }
    /**
     * Constructs a <code>CreateCoinsTransactionRequestFromWalletRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCoinsTransactionRequestFromWalletRBDataItem} obj Optional instance to populate.
     * @return {module:model/CreateCoinsTransactionRequestFromWalletRBDataItem} The populated <code>CreateCoinsTransactionRequestFromWalletRBDataItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCoinsTransactionRequestFromWalletRBDataItem();

        if (data.hasOwnProperty('callbackSecretKey')) {
          obj['callbackSecretKey'] = _ApiClient["default"].convertToType(data['callbackSecretKey'], 'String');
        }

        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }

        if (data.hasOwnProperty('feePriority')) {
          obj['feePriority'] = _ApiClient["default"].convertToType(data['feePriority'], 'String');
        }

        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_CreateCoinsTransactionRequestFromWalletRBDataItemRecipients["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CreateCoinsTransactionRequestFromWalletRBDataItem;
}();
/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs.
 * @member {String} callbackSecretKey
 */


CreateCoinsTransactionRequestFromWalletRBDataItem.prototype['callbackSecretKey'] = undefined;
/**
 * Verified URL for sending callbacks
 * @member {String} callbackUrl
 */

CreateCoinsTransactionRequestFromWalletRBDataItem.prototype['callbackUrl'] = undefined;
/**
 * Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
 * @member {module:model/CreateCoinsTransactionRequestFromWalletRBDataItem.FeePriorityEnum} feePriority
 */

CreateCoinsTransactionRequestFromWalletRBDataItem.prototype['feePriority'] = undefined;
/**
 * Defines the destination of the transaction, whether it is incoming or outgoing.
 * @member {Array.<module:model/CreateCoinsTransactionRequestFromWalletRBDataItemRecipients>} recipients
 */

CreateCoinsTransactionRequestFromWalletRBDataItem.prototype['recipients'] = undefined;
/**
 * Allowed values for the <code>feePriority</code> property.
 * @enum {String}
 * @readonly
 */

CreateCoinsTransactionRequestFromWalletRBDataItem['FeePriorityEnum'] = {
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
var _default = CreateCoinsTransactionRequestFromWalletRBDataItem;
exports["default"] = _default;