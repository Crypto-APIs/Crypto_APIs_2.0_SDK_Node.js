"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateCoinsTransactionFromAddressForWholeAmountRIRecipientsInner = _interopRequireDefault(require("./CreateCoinsTransactionFromAddressForWholeAmountRIRecipientsInner"));
var _CreateCoinsTransactionFromAddressForWholeAmountRISenders = _interopRequireDefault(require("./CreateCoinsTransactionFromAddressForWholeAmountRISenders"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CreateCoinsTransactionFromAddressForWholeAmountRI model module.
 * @module model/CreateCoinsTransactionFromAddressForWholeAmountRI
 * @version 1.13.0
 */
var CreateCoinsTransactionFromAddressForWholeAmountRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateCoinsTransactionFromAddressForWholeAmountRI</code>.
   * @alias module:model/CreateCoinsTransactionFromAddressForWholeAmountRI
   * @param feePriority {module:model/CreateCoinsTransactionFromAddressForWholeAmountRI.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
   * @param recipients {Array.<module:model/CreateCoinsTransactionFromAddressForWholeAmountRIRecipientsInner>} Defines the destination for the transaction, i.e. the recipient(s).
   * @param senders {module:model/CreateCoinsTransactionFromAddressForWholeAmountRISenders} 
   * @param transactionRequestId {String} Represents a unique identifier of the transaction request (the request sent to make a transaction), which helps in identifying which callback and which `referenceId` concern that specific transaction request.
   * @param transactionRequestStatus {module:model/CreateCoinsTransactionFromAddressForWholeAmountRI.TransactionRequestStatusEnum} Defines the status of the transaction, e.g. \"created, \"await_approval\", \"pending\", \"prepared\", \"signed\", \"broadcasted\", \"success\", \"failed\", \"rejected\", mined\".
   */
  function CreateCoinsTransactionFromAddressForWholeAmountRI(feePriority, recipients, senders, transactionRequestId, transactionRequestStatus) {
    _classCallCheck(this, CreateCoinsTransactionFromAddressForWholeAmountRI);
    CreateCoinsTransactionFromAddressForWholeAmountRI.initialize(this, feePriority, recipients, senders, transactionRequestId, transactionRequestStatus);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CreateCoinsTransactionFromAddressForWholeAmountRI, null, [{
    key: "initialize",
    value: function initialize(obj, feePriority, recipients, senders, transactionRequestId, transactionRequestStatus) {
      obj['feePriority'] = feePriority;
      obj['recipients'] = recipients;
      obj['senders'] = senders;
      obj['transactionRequestId'] = transactionRequestId;
      obj['transactionRequestStatus'] = transactionRequestStatus;
    }

    /**
     * Constructs a <code>CreateCoinsTransactionFromAddressForWholeAmountRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCoinsTransactionFromAddressForWholeAmountRI} obj Optional instance to populate.
     * @return {module:model/CreateCoinsTransactionFromAddressForWholeAmountRI} The populated <code>CreateCoinsTransactionFromAddressForWholeAmountRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCoinsTransactionFromAddressForWholeAmountRI();
        if (data.hasOwnProperty('callbackSecretKey')) {
          obj['callbackSecretKey'] = _ApiClient["default"].convertToType(data['callbackSecretKey'], 'String');
        }
        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }
        if (data.hasOwnProperty('feePriority')) {
          obj['feePriority'] = _ApiClient["default"].convertToType(data['feePriority'], 'String');
        }
        if (data.hasOwnProperty('note')) {
          obj['note'] = _ApiClient["default"].convertToType(data['note'], 'String');
        }
        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_CreateCoinsTransactionFromAddressForWholeAmountRIRecipientsInner["default"]]);
        }
        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _CreateCoinsTransactionFromAddressForWholeAmountRISenders["default"].constructFromObject(data['senders']);
        }
        if (data.hasOwnProperty('transactionRequestId')) {
          obj['transactionRequestId'] = _ApiClient["default"].convertToType(data['transactionRequestId'], 'String');
        }
        if (data.hasOwnProperty('transactionRequestStatus')) {
          obj['transactionRequestStatus'] = _ApiClient["default"].convertToType(data['transactionRequestStatus'], 'String');
        }
      }
      return obj;
    }
  }]);
  return CreateCoinsTransactionFromAddressForWholeAmountRI;
}();
/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
CreateCoinsTransactionFromAddressForWholeAmountRI.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
CreateCoinsTransactionFromAddressForWholeAmountRI.prototype['callbackUrl'] = undefined;

/**
 * Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
 * @member {module:model/CreateCoinsTransactionFromAddressForWholeAmountRI.FeePriorityEnum} feePriority
 */
CreateCoinsTransactionFromAddressForWholeAmountRI.prototype['feePriority'] = undefined;

/**
 * Represents an optional note to add a free text in, explaining or providing additional detail on the transaction request.Optional Transaction note with additional details
 * @member {String} note
 */
CreateCoinsTransactionFromAddressForWholeAmountRI.prototype['note'] = undefined;

/**
 * Defines the destination for the transaction, i.e. the recipient(s).
 * @member {Array.<module:model/CreateCoinsTransactionFromAddressForWholeAmountRIRecipientsInner>} recipients
 */
CreateCoinsTransactionFromAddressForWholeAmountRI.prototype['recipients'] = undefined;

/**
 * @member {module:model/CreateCoinsTransactionFromAddressForWholeAmountRISenders} senders
 */
CreateCoinsTransactionFromAddressForWholeAmountRI.prototype['senders'] = undefined;

/**
 * Represents a unique identifier of the transaction request (the request sent to make a transaction), which helps in identifying which callback and which `referenceId` concern that specific transaction request.
 * @member {String} transactionRequestId
 */
CreateCoinsTransactionFromAddressForWholeAmountRI.prototype['transactionRequestId'] = undefined;

/**
 * Defines the status of the transaction, e.g. \"created, \"await_approval\", \"pending\", \"prepared\", \"signed\", \"broadcasted\", \"success\", \"failed\", \"rejected\", mined\".
 * @member {module:model/CreateCoinsTransactionFromAddressForWholeAmountRI.TransactionRequestStatusEnum} transactionRequestStatus
 */
CreateCoinsTransactionFromAddressForWholeAmountRI.prototype['transactionRequestStatus'] = undefined;

/**
 * Allowed values for the <code>feePriority</code> property.
 * @enum {String}
 * @readonly
 */
CreateCoinsTransactionFromAddressForWholeAmountRI['FeePriorityEnum'] = {
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
CreateCoinsTransactionFromAddressForWholeAmountRI['TransactionRequestStatusEnum'] = {
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
var _default = CreateCoinsTransactionFromAddressForWholeAmountRI;
exports["default"] = _default;