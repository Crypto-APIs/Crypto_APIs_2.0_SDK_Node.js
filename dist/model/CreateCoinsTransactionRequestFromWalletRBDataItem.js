"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateCoinsTransactionRequestFromWalletRBDataItemRecipientsInner = _interopRequireDefault(require("./CreateCoinsTransactionRequestFromWalletRBDataItemRecipientsInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CreateCoinsTransactionRequestFromWalletRBDataItem model module.
 * @module model/CreateCoinsTransactionRequestFromWalletRBDataItem
 * @version 1.13.0
 */
var CreateCoinsTransactionRequestFromWalletRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateCoinsTransactionRequestFromWalletRBDataItem</code>.
   * @alias module:model/CreateCoinsTransactionRequestFromWalletRBDataItem
   * @param feePriority {module:model/CreateCoinsTransactionRequestFromWalletRBDataItem.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
   * @param recipients {Array.<module:model/CreateCoinsTransactionRequestFromWalletRBDataItemRecipientsInner>} Defines the destination of the transaction, whether it is incoming or outgoing.
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
        if (data.hasOwnProperty('note')) {
          obj['note'] = _ApiClient["default"].convertToType(data['note'], 'String');
        }
        if (data.hasOwnProperty('prepareStrategy')) {
          obj['prepareStrategy'] = _ApiClient["default"].convertToType(data['prepareStrategy'], 'String');
        }
        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_CreateCoinsTransactionRequestFromWalletRBDataItemRecipientsInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return CreateCoinsTransactionRequestFromWalletRBDataItem;
}();
/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
CreateCoinsTransactionRequestFromWalletRBDataItem.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
CreateCoinsTransactionRequestFromWalletRBDataItem.prototype['callbackUrl'] = undefined;

/**
 * Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
 * @member {module:model/CreateCoinsTransactionRequestFromWalletRBDataItem.FeePriorityEnum} feePriority
 */
CreateCoinsTransactionRequestFromWalletRBDataItem.prototype['feePriority'] = undefined;

/**
 * Represents an optional note to add a free text in, explaining or providing additional detail on the transaction request.
 * @member {String} note
 */
CreateCoinsTransactionRequestFromWalletRBDataItem.prototype['note'] = undefined;

/**
 * Refers to a model of a UTXO spending strategy, where customers can choose how to spend their transaction outputs from multiple Bitcoin addresses. Two options available - \"minimize-dust\" (select lower amounts from multiple addresses) or \"optimize-size\" (select higher amounts from less addresses).
 * @member {module:model/CreateCoinsTransactionRequestFromWalletRBDataItem.PrepareStrategyEnum} prepareStrategy
 * @default 'minimize-dust'
 */
CreateCoinsTransactionRequestFromWalletRBDataItem.prototype['prepareStrategy'] = 'minimize-dust';

/**
 * Defines the destination of the transaction, whether it is incoming or outgoing.
 * @member {Array.<module:model/CreateCoinsTransactionRequestFromWalletRBDataItemRecipientsInner>} recipients
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

/**
 * Allowed values for the <code>prepareStrategy</code> property.
 * @enum {String}
 * @readonly
 */
CreateCoinsTransactionRequestFromWalletRBDataItem['PrepareStrategyEnum'] = {
  /**
   * value: "minimize-dust"
   * @const
   */
  "minimize-dust": "minimize-dust",
  /**
   * value: "optimize-size"
   * @const
   */
  "optimize-size": "optimize-size"
};
var _default = CreateCoinsTransactionRequestFromWalletRBDataItem;
exports["default"] = _default;