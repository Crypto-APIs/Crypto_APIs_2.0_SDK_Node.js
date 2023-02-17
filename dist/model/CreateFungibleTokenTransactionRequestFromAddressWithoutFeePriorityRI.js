"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner = _interopRequireDefault(require("./CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner"));
var _CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS = _interopRequireDefault(require("./CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS"));
var _CreateSingleTransactionRequestFromAddressWithoutFeePriorityRISender = _interopRequireDefault(require("./CreateSingleTransactionRequestFromAddressWithoutFeePriorityRISender"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI model module.
 * @module model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI
 * @version 1.13.0
 */
var CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI</code>.
   * @alias module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI
   * @param recipient {Array.<module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner>} Defines the destination for the transaction, i.e. the recipient(s).
   * @param sender {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRISender} 
   * @param tokenTypeSpecificData {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS} 
   * @param transactionRequestId {String} Represents a unique identifier of the transaction request (the request sent to make a transaction), which helps in identifying which callback and which `referenceId` concern that specific transaction request.
   */
  function CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI(recipient, sender, tokenTypeSpecificData, transactionRequestId) {
    _classCallCheck(this, CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI);
    CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI.initialize(this, recipient, sender, tokenTypeSpecificData, transactionRequestId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI, null, [{
    key: "initialize",
    value: function initialize(obj, recipient, sender, tokenTypeSpecificData, transactionRequestId) {
      obj['recipient'] = recipient;
      obj['sender'] = sender;
      obj['tokenTypeSpecificData'] = tokenTypeSpecificData;
      obj['transactionRequestId'] = transactionRequestId;
    }

    /**
     * Constructs a <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI} obj Optional instance to populate.
     * @return {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI} The populated <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI();
        if (data.hasOwnProperty('callbackSecretKey')) {
          obj['callbackSecretKey'] = _ApiClient["default"].convertToType(data['callbackSecretKey'], 'String');
        }
        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }
        if (data.hasOwnProperty('note')) {
          obj['note'] = _ApiClient["default"].convertToType(data['note'], 'String');
        }
        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _ApiClient["default"].convertToType(data['recipient'], [_CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner["default"]]);
        }
        if (data.hasOwnProperty('sender')) {
          obj['sender'] = _CreateSingleTransactionRequestFromAddressWithoutFeePriorityRISender["default"].constructFromObject(data['sender']);
        }
        if (data.hasOwnProperty('tokenTypeSpecificData')) {
          obj['tokenTypeSpecificData'] = _CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS["default"].constructFromObject(data['tokenTypeSpecificData']);
        }
        if (data.hasOwnProperty('transactionRequestId')) {
          obj['transactionRequestId'] = _ApiClient["default"].convertToType(data['transactionRequestId'], 'String');
        }
      }
      return obj;
    }
  }]);
  return CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI;
}();
/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI.prototype['callbackUrl'] = undefined;

/**
 * Represents an optional note to add a free text in, explaining or providing additional detail on the transaction request.
 * @member {String} note
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI.prototype['note'] = undefined;

/**
 * Defines the destination for the transaction, i.e. the recipient(s).
 * @member {Array.<module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner>} recipient
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI.prototype['recipient'] = undefined;

/**
 * @member {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRISender} sender
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI.prototype['sender'] = undefined;

/**
 * @member {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS} tokenTypeSpecificData
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI.prototype['tokenTypeSpecificData'] = undefined;

/**
 * Represents a unique identifier of the transaction request (the request sent to make a transaction), which helps in identifying which callback and which `referenceId` concern that specific transaction request.
 * @member {String} transactionRequestId
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI.prototype['transactionRequestId'] = undefined;
var _default = CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI;
exports["default"] = _default;