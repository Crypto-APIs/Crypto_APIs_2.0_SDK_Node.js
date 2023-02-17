"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner = _interopRequireDefault(require("./CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner"));
var _CreateSingleTransactionRequestFromAddressWithoutFeePriorityRISender = _interopRequireDefault(require("./CreateSingleTransactionRequestFromAddressWithoutFeePriorityRISender"));
var _CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount = _interopRequireDefault(require("./CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI model module.
 * @module model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI
 * @version 1.13.0
 */
var CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI</code>.
   * @alias module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI
   * @param recipient {Array.<module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner>} Defines the destination for the transaction, i.e. the recipient(s).
   * @param sender {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRISender} 
   * @param transactionRequestId {String} Represents a unique identifier of the transaction request (the request sent to make a transaction), which helps in identifying which callback and which `referenceId` concern that specific transaction request.
   * @param transactionRequestStatus {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.TransactionRequestStatusEnum} Defines the status of the transaction, e.g. \"created, \"await_approval\", \"pending\", \"prepared\", \"signed\", \"broadcasted\", \"success\", \"failed\", \"rejected\", mined\".
   */
  function CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI(recipient, sender, transactionRequestId, transactionRequestStatus) {
    _classCallCheck(this, CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI);
    CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.initialize(this, recipient, sender, transactionRequestId, transactionRequestStatus);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI, null, [{
    key: "initialize",
    value: function initialize(obj, recipient, sender, transactionRequestId, transactionRequestStatus) {
      obj['recipient'] = recipient;
      obj['sender'] = sender;
      obj['transactionRequestId'] = transactionRequestId;
      obj['transactionRequestStatus'] = transactionRequestStatus;
    }

    /**
     * Constructs a <code>CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI} obj Optional instance to populate.
     * @return {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI} The populated <code>CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI();
        if (data.hasOwnProperty('callbackSecretKey')) {
          obj['callbackSecretKey'] = _ApiClient["default"].convertToType(data['callbackSecretKey'], 'String');
        }
        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }
        if (data.hasOwnProperty('classicAddress')) {
          obj['classicAddress'] = _ApiClient["default"].convertToType(data['classicAddress'], 'String');
        }
        if (data.hasOwnProperty('note')) {
          obj['note'] = _ApiClient["default"].convertToType(data['note'], 'String');
        }
        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _ApiClient["default"].convertToType(data['recipient'], [_CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner["default"]]);
        }
        if (data.hasOwnProperty('sender')) {
          obj['sender'] = _CreateSingleTransactionRequestFromAddressWithoutFeePriorityRISender["default"].constructFromObject(data['sender']);
        }
        if (data.hasOwnProperty('transactionRequestId')) {
          obj['transactionRequestId'] = _ApiClient["default"].convertToType(data['transactionRequestId'], 'String');
        }
        if (data.hasOwnProperty('transactionRequestStatus')) {
          obj['transactionRequestStatus'] = _ApiClient["default"].convertToType(data['transactionRequestStatus'], 'String');
        }
        if (data.hasOwnProperty('totalAmount')) {
          obj['totalAmount'] = _CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount["default"].constructFromObject(data['totalAmount']);
        }
      }
      return obj;
    }
  }]);
  return CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI;
}();
/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['callbackUrl'] = undefined;

/**
 * Represents the public address, which is a compressed and shortened form of a public key. The classic address is shown when the source address is an x-Address.
 * @member {String} classicAddress
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['classicAddress'] = undefined;

/**
 * Represents an optional note to add a free text in, explaining or providing additional detail on the transaction request.
 * @member {String} note
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['note'] = undefined;

/**
 * Defines the destination for the transaction, i.e. the recipient(s).
 * @member {Array.<module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner>} recipient
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['recipient'] = undefined;

/**
 * @member {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRISender} sender
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['sender'] = undefined;

/**
 * Represents a unique identifier of the transaction request (the request sent to make a transaction), which helps in identifying which callback and which `referenceId` concern that specific transaction request.
 * @member {String} transactionRequestId
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['transactionRequestId'] = undefined;

/**
 * Defines the status of the transaction, e.g. \"created, \"await_approval\", \"pending\", \"prepared\", \"signed\", \"broadcasted\", \"success\", \"failed\", \"rejected\", mined\".
 * @member {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.TransactionRequestStatusEnum} transactionRequestStatus
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['transactionRequestStatus'] = undefined;

/**
 * @member {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount} totalAmount
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['totalAmount'] = undefined;

/**
 * Allowed values for the <code>transactionRequestStatus</code> property.
 * @enum {String}
 * @readonly
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI['TransactionRequestStatusEnum'] = {
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
  "mined": "mined",
  /**
   * value: "mined-with-errors"
   * @const
   */
  "mined-with-errors": "mined-with-errors"
};
var _default = CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI;
exports["default"] = _default;