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
 * The CreateSingleTransactionRequestFromAddressWithoutFeePriorityRBDataItem model module.
 * @module model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRBDataItem
 * @version 1.13.0
 */
var CreateSingleTransactionRequestFromAddressWithoutFeePriorityRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateSingleTransactionRequestFromAddressWithoutFeePriorityRBDataItem</code>.
   * @alias module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRBDataItem
   * @param amount {String} Represents the specific amount of the transaction's destination.
   * @param recipientAddress {String} Defines the specific recipient/destination address.
   */
  function CreateSingleTransactionRequestFromAddressWithoutFeePriorityRBDataItem(amount, recipientAddress) {
    _classCallCheck(this, CreateSingleTransactionRequestFromAddressWithoutFeePriorityRBDataItem);
    CreateSingleTransactionRequestFromAddressWithoutFeePriorityRBDataItem.initialize(this, amount, recipientAddress);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CreateSingleTransactionRequestFromAddressWithoutFeePriorityRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, amount, recipientAddress) {
      obj['amount'] = amount;
      obj['recipientAddress'] = recipientAddress;
    }

    /**
     * Constructs a <code>CreateSingleTransactionRequestFromAddressWithoutFeePriorityRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRBDataItem} obj Optional instance to populate.
     * @return {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRBDataItem} The populated <code>CreateSingleTransactionRequestFromAddressWithoutFeePriorityRBDataItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateSingleTransactionRequestFromAddressWithoutFeePriorityRBDataItem();
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
        if (data.hasOwnProperty('callbackSecretKey')) {
          obj['callbackSecretKey'] = _ApiClient["default"].convertToType(data['callbackSecretKey'], 'String');
        }
        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }
        if (data.hasOwnProperty('note')) {
          obj['note'] = _ApiClient["default"].convertToType(data['note'], 'String');
        }
        if (data.hasOwnProperty('recipientAddress')) {
          obj['recipientAddress'] = _ApiClient["default"].convertToType(data['recipientAddress'], 'String');
        }
      }
      return obj;
    }
  }]);
  return CreateSingleTransactionRequestFromAddressWithoutFeePriorityRBDataItem;
}();
/**
 * Represents the specific amount of the transaction's destination.
 * @member {String} amount
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRBDataItem.prototype['amount'] = undefined;

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRBDataItem.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRBDataItem.prototype['callbackUrl'] = undefined;

/**
 * Represents an optional note to add a free text in, explaining or providing additional detail on the transaction request.
 * @member {String} note
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRBDataItem.prototype['note'] = undefined;

/**
 * Defines the specific recipient/destination address.
 * @member {String} recipientAddress
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRBDataItem.prototype['recipientAddress'] = undefined;
var _default = CreateSingleTransactionRequestFromAddressWithoutFeePriorityRBDataItem;
exports["default"] = _default;