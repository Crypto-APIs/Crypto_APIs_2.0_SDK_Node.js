"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateCoinsTransactionRequestFromAddressRISenders = _interopRequireDefault(require("./CreateCoinsTransactionRequestFromAddressRISenders"));
var _CreateFungibleTokensTransactionRequestFromAddressRIRecipientsInner = _interopRequireDefault(require("./CreateFungibleTokensTransactionRequestFromAddressRIRecipientsInner"));
var _CreateFungibleTokensTransactionRequestFromAddressRIS = _interopRequireDefault(require("./CreateFungibleTokensTransactionRequestFromAddressRIS"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CreateFungibleTokensTransactionRequestFromAddressRI model module.
 * @module model/CreateFungibleTokensTransactionRequestFromAddressRI
 * @version 1.13.0
 */
var CreateFungibleTokensTransactionRequestFromAddressRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateFungibleTokensTransactionRequestFromAddressRI</code>.
   * @alias module:model/CreateFungibleTokensTransactionRequestFromAddressRI
   * @param callbackSecretKey {String} Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
   * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
   * @param feePriority {module:model/CreateFungibleTokensTransactionRequestFromAddressRI.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
   * @param recipients {Array.<module:model/CreateFungibleTokensTransactionRequestFromAddressRIRecipientsInner>} Defines the destination for the transaction, i.e. the recipient(s).
   * @param senders {module:model/CreateCoinsTransactionRequestFromAddressRISenders} 
   * @param tokenTypeSpecificData {module:model/CreateFungibleTokensTransactionRequestFromAddressRIS} 
   * @param transactionRequestId {String} Represents a unique identifier of the transaction request (the request sent to make a transaction), which helps in identifying which callback and which `referenceId` concern that specific transaction request.
   */
  function CreateFungibleTokensTransactionRequestFromAddressRI(callbackSecretKey, callbackUrl, feePriority, recipients, senders, tokenTypeSpecificData, transactionRequestId) {
    _classCallCheck(this, CreateFungibleTokensTransactionRequestFromAddressRI);
    CreateFungibleTokensTransactionRequestFromAddressRI.initialize(this, callbackSecretKey, callbackUrl, feePriority, recipients, senders, tokenTypeSpecificData, transactionRequestId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CreateFungibleTokensTransactionRequestFromAddressRI, null, [{
    key: "initialize",
    value: function initialize(obj, callbackSecretKey, callbackUrl, feePriority, recipients, senders, tokenTypeSpecificData, transactionRequestId) {
      obj['callbackSecretKey'] = callbackSecretKey;
      obj['callbackUrl'] = callbackUrl;
      obj['feePriority'] = feePriority;
      obj['recipients'] = recipients;
      obj['senders'] = senders;
      obj['tokenTypeSpecificData'] = tokenTypeSpecificData;
      obj['transactionRequestId'] = transactionRequestId;
    }

    /**
     * Constructs a <code>CreateFungibleTokensTransactionRequestFromAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFungibleTokensTransactionRequestFromAddressRI} obj Optional instance to populate.
     * @return {module:model/CreateFungibleTokensTransactionRequestFromAddressRI} The populated <code>CreateFungibleTokensTransactionRequestFromAddressRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateFungibleTokensTransactionRequestFromAddressRI();
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
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_CreateFungibleTokensTransactionRequestFromAddressRIRecipientsInner["default"]]);
        }
        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _CreateCoinsTransactionRequestFromAddressRISenders["default"].constructFromObject(data['senders']);
        }
        if (data.hasOwnProperty('tokenTypeSpecificData')) {
          obj['tokenTypeSpecificData'] = _CreateFungibleTokensTransactionRequestFromAddressRIS["default"].constructFromObject(data['tokenTypeSpecificData']);
        }
        if (data.hasOwnProperty('transactionRequestId')) {
          obj['transactionRequestId'] = _ApiClient["default"].convertToType(data['transactionRequestId'], 'String');
        }
      }
      return obj;
    }
  }]);
  return CreateFungibleTokensTransactionRequestFromAddressRI;
}();
/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
CreateFungibleTokensTransactionRequestFromAddressRI.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
CreateFungibleTokensTransactionRequestFromAddressRI.prototype['callbackUrl'] = undefined;

/**
 * Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
 * @member {module:model/CreateFungibleTokensTransactionRequestFromAddressRI.FeePriorityEnum} feePriority
 */
CreateFungibleTokensTransactionRequestFromAddressRI.prototype['feePriority'] = undefined;

/**
 * Represents an optional note to add a free text in, explaining or providing additional detail on the transaction request.
 * @member {String} note
 */
CreateFungibleTokensTransactionRequestFromAddressRI.prototype['note'] = undefined;

/**
 * Defines the destination for the transaction, i.e. the recipient(s).
 * @member {Array.<module:model/CreateFungibleTokensTransactionRequestFromAddressRIRecipientsInner>} recipients
 */
CreateFungibleTokensTransactionRequestFromAddressRI.prototype['recipients'] = undefined;

/**
 * @member {module:model/CreateCoinsTransactionRequestFromAddressRISenders} senders
 */
CreateFungibleTokensTransactionRequestFromAddressRI.prototype['senders'] = undefined;

/**
 * @member {module:model/CreateFungibleTokensTransactionRequestFromAddressRIS} tokenTypeSpecificData
 */
CreateFungibleTokensTransactionRequestFromAddressRI.prototype['tokenTypeSpecificData'] = undefined;

/**
 * Represents a unique identifier of the transaction request (the request sent to make a transaction), which helps in identifying which callback and which `referenceId` concern that specific transaction request.
 * @member {String} transactionRequestId
 */
CreateFungibleTokensTransactionRequestFromAddressRI.prototype['transactionRequestId'] = undefined;

/**
 * Allowed values for the <code>feePriority</code> property.
 * @enum {String}
 * @readonly
 */
CreateFungibleTokensTransactionRequestFromAddressRI['FeePriorityEnum'] = {
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
var _default = CreateFungibleTokensTransactionRequestFromAddressRI;
exports["default"] = _default;