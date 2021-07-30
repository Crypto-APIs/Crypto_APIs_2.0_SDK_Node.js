"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateCoinsTransactionRequestFromAddressRIRecipients = _interopRequireDefault(require("./CreateCoinsTransactionRequestFromAddressRIRecipients"));

var _CreateCoinsTransactionRequestFromAddressRISenders = _interopRequireDefault(require("./CreateCoinsTransactionRequestFromAddressRISenders"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateCoinsTransactionRequestFromAddressRI model module.
 * @module model/CreateCoinsTransactionRequestFromAddressRI
 * @version 1.2.0
 */
var CreateCoinsTransactionRequestFromAddressRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateCoinsTransactionRequestFromAddressRI</code>.
   * @alias module:model/CreateCoinsTransactionRequestFromAddressRI
   * @param feePriority {module:model/CreateCoinsTransactionRequestFromAddressRI.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
   * @param recipients {Array.<module:model/CreateCoinsTransactionRequestFromAddressRIRecipients>} Defines the destination for the transaction, i.e. the recipient(s).
   * @param senders {module:model/CreateCoinsTransactionRequestFromAddressRISenders} 
   * @param transactionRequestStatus {module:model/CreateCoinsTransactionRequestFromAddressRI.TransactionRequestStatusEnum} Defines the status of the transaction request, e.g. \"created, \"await_approval\", \"pending\", \"prepared\", \"signed\", \"broadcasted\", \"success\", \"failed\", \"rejected\", mined\".
   */
  function CreateCoinsTransactionRequestFromAddressRI(feePriority, recipients, senders, transactionRequestStatus) {
    _classCallCheck(this, CreateCoinsTransactionRequestFromAddressRI);

    CreateCoinsTransactionRequestFromAddressRI.initialize(this, feePriority, recipients, senders, transactionRequestStatus);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateCoinsTransactionRequestFromAddressRI, null, [{
    key: "initialize",
    value: function initialize(obj, feePriority, recipients, senders, transactionRequestStatus) {
      obj['feePriority'] = feePriority;
      obj['recipients'] = recipients;
      obj['senders'] = senders;
      obj['transactionRequestStatus'] = transactionRequestStatus;
    }
    /**
     * Constructs a <code>CreateCoinsTransactionRequestFromAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCoinsTransactionRequestFromAddressRI} obj Optional instance to populate.
     * @return {module:model/CreateCoinsTransactionRequestFromAddressRI} The populated <code>CreateCoinsTransactionRequestFromAddressRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCoinsTransactionRequestFromAddressRI();

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
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_CreateCoinsTransactionRequestFromAddressRIRecipients["default"]]);
        }

        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _CreateCoinsTransactionRequestFromAddressRISenders["default"].constructFromObject(data['senders']);
        }

        if (data.hasOwnProperty('transactionRequestStatus')) {
          obj['transactionRequestStatus'] = _ApiClient["default"].convertToType(data['transactionRequestStatus'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateCoinsTransactionRequestFromAddressRI;
}();
/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs.
 * @member {String} callbackSecretKey
 */


CreateCoinsTransactionRequestFromAddressRI.prototype['callbackSecretKey'] = undefined;
/**
 * Verified URL for sending callbacks
 * @member {String} callbackUrl
 */

CreateCoinsTransactionRequestFromAddressRI.prototype['callbackUrl'] = undefined;
/**
 * Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
 * @member {module:model/CreateCoinsTransactionRequestFromAddressRI.FeePriorityEnum} feePriority
 */

CreateCoinsTransactionRequestFromAddressRI.prototype['feePriority'] = undefined;
/**
 * Defines the destination for the transaction, i.e. the recipient(s).
 * @member {Array.<module:model/CreateCoinsTransactionRequestFromAddressRIRecipients>} recipients
 */

CreateCoinsTransactionRequestFromAddressRI.prototype['recipients'] = undefined;
/**
 * @member {module:model/CreateCoinsTransactionRequestFromAddressRISenders} senders
 */

CreateCoinsTransactionRequestFromAddressRI.prototype['senders'] = undefined;
/**
 * Defines the status of the transaction request, e.g. \"created, \"await_approval\", \"pending\", \"prepared\", \"signed\", \"broadcasted\", \"success\", \"failed\", \"rejected\", mined\".
 * @member {module:model/CreateCoinsTransactionRequestFromAddressRI.TransactionRequestStatusEnum} transactionRequestStatus
 */

CreateCoinsTransactionRequestFromAddressRI.prototype['transactionRequestStatus'] = undefined;
/**
 * Allowed values for the <code>feePriority</code> property.
 * @enum {String}
 * @readonly
 */

CreateCoinsTransactionRequestFromAddressRI['FeePriorityEnum'] = {
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
/**
 * Allowed values for the <code>transactionRequestStatus</code> property.
 * @enum {String}
 * @readonly
 */

CreateCoinsTransactionRequestFromAddressRI['TransactionRequestStatusEnum'] = {
  /**
   * value: "created"
   * @const
   */
  "created": "created",

  /**
   * value: "await-approval"
   * @const
   */
  "await-approval": "await-approval",

  /**
   * value: "pending"
   * @const
   */
  "pending": "pending",

  /**
   * value: "prepared"
   * @const
   */
  "prepared": "prepared",

  /**
   * value: "signed"
   * @const
   */
  "signed": "signed",

  /**
   * value: "broadcasted"
   * @const
   */
  "broadcasted": "broadcasted",

  /**
   * value: "success"
   * @const
   */
  "success": "success",

  /**
   * value: "failed"
   * @const
   */
  "failed": "failed",

  /**
   * value: "rejected"
   * @const
   */
  "rejected": "rejected",

  /**
   * value: "mined"
   * @const
   */
  "mined": "mined"
};
var _default = CreateCoinsTransactionRequestFromAddressRI;
exports["default"] = _default;