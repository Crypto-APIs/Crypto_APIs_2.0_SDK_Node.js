"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRBDataItem model module.
 * @module model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRBDataItem
 * @version 1.13.0
 */
var CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRBDataItem</code>.
   * @alias module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRBDataItem
   * @param amount {String} Represents the specific amount of the transaction.
   * @param feeLimit {String} Fee limit of the smart contract. If \"OUT_OF_ENERGY\" error appears - It is necessary to check whether the address of the calling contract has TRX and whether it is enough to pay for the burning energy or bandwidth cost, otherwise the address needs to obtain enough TRX. If there is enough TRX, the feeLimit set by the transaction is smaller, and it needs to be increased.
   * @param recipientAddress {String} Defines the specific recipient address for the transaction.
   * @param tokenIdentifier {String} Token identifier - for BITCOIN BASED should be property id e.g 31 for ETHEREUM BASED shoud be contract e.g 0xdac17f958d2ee523a2206206994597c13d831ec7
   */
  function CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRBDataItem(amount, feeLimit, recipientAddress, tokenIdentifier) {
    _classCallCheck(this, CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRBDataItem);
    CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRBDataItem.initialize(this, amount, feeLimit, recipientAddress, tokenIdentifier);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, amount, feeLimit, recipientAddress, tokenIdentifier) {
      obj['amount'] = amount;
      obj['feeLimit'] = feeLimit;
      obj['recipientAddress'] = recipientAddress;
      obj['tokenIdentifier'] = tokenIdentifier;
    }

    /**
     * Constructs a <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRBDataItem} obj Optional instance to populate.
     * @return {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRBDataItem} The populated <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRBDataItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRBDataItem();
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
        if (data.hasOwnProperty('callbackSecretKey')) {
          obj['callbackSecretKey'] = _ApiClient["default"].convertToType(data['callbackSecretKey'], 'String');
        }
        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }
        if (data.hasOwnProperty('feeLimit')) {
          obj['feeLimit'] = _ApiClient["default"].convertToType(data['feeLimit'], 'String');
        }
        if (data.hasOwnProperty('note')) {
          obj['note'] = _ApiClient["default"].convertToType(data['note'], 'String');
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
  return CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRBDataItem;
}();
/**
 * Represents the specific amount of the transaction.
 * @member {String} amount
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRBDataItem.prototype['amount'] = undefined;

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRBDataItem.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRBDataItem.prototype['callbackUrl'] = undefined;

/**
 * Fee limit of the smart contract. If \"OUT_OF_ENERGY\" error appears - It is necessary to check whether the address of the calling contract has TRX and whether it is enough to pay for the burning energy or bandwidth cost, otherwise the address needs to obtain enough TRX. If there is enough TRX, the feeLimit set by the transaction is smaller, and it needs to be increased.
 * @member {String} feeLimit
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRBDataItem.prototype['feeLimit'] = undefined;

/**
 * Represents an optional note to add a free text in, explaining or providing additional detail on the transaction request.
 * @member {String} note
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRBDataItem.prototype['note'] = undefined;

/**
 * Defines the specific recipient address for the transaction.
 * @member {String} recipientAddress
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRBDataItem.prototype['recipientAddress'] = undefined;

/**
 * Token identifier - for BITCOIN BASED should be property id e.g 31 for ETHEREUM BASED shoud be contract e.g 0xdac17f958d2ee523a2206206994597c13d831ec7
 * @member {String} tokenIdentifier
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRBDataItem.prototype['tokenIdentifier'] = undefined;
var _default = CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRBDataItem;
exports["default"] = _default;