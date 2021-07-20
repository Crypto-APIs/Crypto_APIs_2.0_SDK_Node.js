"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateCoinsTransactionRequestFromWalletRIRecipients = _interopRequireDefault(require("./CreateCoinsTransactionRequestFromWalletRIRecipients"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateCoinsTransactionRequestFromWalletRI model module.
 * @module model/CreateCoinsTransactionRequestFromWalletRI
 * @version 1.1.0
 */
var CreateCoinsTransactionRequestFromWalletRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateCoinsTransactionRequestFromWalletRI</code>.
   * @alias module:model/CreateCoinsTransactionRequestFromWalletRI
   * @param feePriority {module:model/CreateCoinsTransactionRequestFromWalletRI.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
   * @param recipients {Array.<module:model/CreateCoinsTransactionRequestFromWalletRIRecipients>} Defines the destination of the transaction, whether it is incoming or outgoing.
   * @param totalTransactionAmount {String} Represents the specific amount of the transaction.
   * @param transactionRequestStatus {module:model/CreateCoinsTransactionRequestFromWalletRI.TransactionRequestStatusEnum} Defines the status of the transaction, e.g. \"created, \"await_approval\", \"pending\", \"prepared\", \"signed\", \"broadcasted\", \"success\", \"failed\", \"rejected\", mined\".
   */
  function CreateCoinsTransactionRequestFromWalletRI(feePriority, recipients, totalTransactionAmount, transactionRequestStatus) {
    _classCallCheck(this, CreateCoinsTransactionRequestFromWalletRI);

    CreateCoinsTransactionRequestFromWalletRI.initialize(this, feePriority, recipients, totalTransactionAmount, transactionRequestStatus);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateCoinsTransactionRequestFromWalletRI, null, [{
    key: "initialize",
    value: function initialize(obj, feePriority, recipients, totalTransactionAmount, transactionRequestStatus) {
      obj['feePriority'] = feePriority;
      obj['recipients'] = recipients;
      obj['totalTransactionAmount'] = totalTransactionAmount;
      obj['transactionRequestStatus'] = transactionRequestStatus;
    }
    /**
     * Constructs a <code>CreateCoinsTransactionRequestFromWalletRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCoinsTransactionRequestFromWalletRI} obj Optional instance to populate.
     * @return {module:model/CreateCoinsTransactionRequestFromWalletRI} The populated <code>CreateCoinsTransactionRequestFromWalletRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCoinsTransactionRequestFromWalletRI();

        if (data.hasOwnProperty('feePriority')) {
          obj['feePriority'] = _ApiClient["default"].convertToType(data['feePriority'], 'String');
        }

        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_CreateCoinsTransactionRequestFromWalletRIRecipients["default"]]);
        }

        if (data.hasOwnProperty('totalTransactionAmount')) {
          obj['totalTransactionAmount'] = _ApiClient["default"].convertToType(data['totalTransactionAmount'], 'String');
        }

        if (data.hasOwnProperty('transactionRequestStatus')) {
          obj['transactionRequestStatus'] = _ApiClient["default"].convertToType(data['transactionRequestStatus'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateCoinsTransactionRequestFromWalletRI;
}();
/**
 * Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
 * @member {module:model/CreateCoinsTransactionRequestFromWalletRI.FeePriorityEnum} feePriority
 */


CreateCoinsTransactionRequestFromWalletRI.prototype['feePriority'] = undefined;
/**
 * Defines the destination of the transaction, whether it is incoming or outgoing.
 * @member {Array.<module:model/CreateCoinsTransactionRequestFromWalletRIRecipients>} recipients
 */

CreateCoinsTransactionRequestFromWalletRI.prototype['recipients'] = undefined;
/**
 * Represents the specific amount of the transaction.
 * @member {String} totalTransactionAmount
 */

CreateCoinsTransactionRequestFromWalletRI.prototype['totalTransactionAmount'] = undefined;
/**
 * Defines the status of the transaction, e.g. \"created, \"await_approval\", \"pending\", \"prepared\", \"signed\", \"broadcasted\", \"success\", \"failed\", \"rejected\", mined\".
 * @member {module:model/CreateCoinsTransactionRequestFromWalletRI.TransactionRequestStatusEnum} transactionRequestStatus
 */

CreateCoinsTransactionRequestFromWalletRI.prototype['transactionRequestStatus'] = undefined;
/**
 * Allowed values for the <code>feePriority</code> property.
 * @enum {String}
 * @readonly
 */

CreateCoinsTransactionRequestFromWalletRI['FeePriorityEnum'] = {
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

CreateCoinsTransactionRequestFromWalletRI['TransactionRequestStatusEnum'] = {
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
var _default = CreateCoinsTransactionRequestFromWalletRI;
exports["default"] = _default;