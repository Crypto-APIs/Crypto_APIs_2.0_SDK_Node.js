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
 * The NewConfirmedInternalTransactionsForSpecificAmountRBDataItem model module.
 * @module model/NewConfirmedInternalTransactionsForSpecificAmountRBDataItem
 * @version 1.13.0
 */
var NewConfirmedInternalTransactionsForSpecificAmountRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewConfirmedInternalTransactionsForSpecificAmountRBDataItem</code>.
   * @alias module:model/NewConfirmedInternalTransactionsForSpecificAmountRBDataItem
   * @param amountHigherThan {Number} Represents a specific amount of coins after which the system have to send a callback to customers' callbackUrl.
   * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
   */
  function NewConfirmedInternalTransactionsForSpecificAmountRBDataItem(amountHigherThan, callbackUrl) {
    _classCallCheck(this, NewConfirmedInternalTransactionsForSpecificAmountRBDataItem);
    NewConfirmedInternalTransactionsForSpecificAmountRBDataItem.initialize(this, amountHigherThan, callbackUrl);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(NewConfirmedInternalTransactionsForSpecificAmountRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, amountHigherThan, callbackUrl) {
      obj['amountHigherThan'] = amountHigherThan;
      obj['callbackUrl'] = callbackUrl;
    }

    /**
     * Constructs a <code>NewConfirmedInternalTransactionsForSpecificAmountRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedInternalTransactionsForSpecificAmountRBDataItem} obj Optional instance to populate.
     * @return {module:model/NewConfirmedInternalTransactionsForSpecificAmountRBDataItem} The populated <code>NewConfirmedInternalTransactionsForSpecificAmountRBDataItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewConfirmedInternalTransactionsForSpecificAmountRBDataItem();
        if (data.hasOwnProperty('allowDuplicates')) {
          obj['allowDuplicates'] = _ApiClient["default"].convertToType(data['allowDuplicates'], 'Boolean');
        }
        if (data.hasOwnProperty('amountHigherThan')) {
          obj['amountHigherThan'] = _ApiClient["default"].convertToType(data['amountHigherThan'], 'Number');
        }
        if (data.hasOwnProperty('callbackSecretKey')) {
          obj['callbackSecretKey'] = _ApiClient["default"].convertToType(data['callbackSecretKey'], 'String');
        }
        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }
      }
      return obj;
    }
  }]);
  return NewConfirmedInternalTransactionsForSpecificAmountRBDataItem;
}();
/**
 * Specifies a flag that permits or denies the creation of duplicate addresses.
 * @member {Boolean} allowDuplicates
 * @default false
 */
NewConfirmedInternalTransactionsForSpecificAmountRBDataItem.prototype['allowDuplicates'] = false;

/**
 * Represents a specific amount of coins after which the system have to send a callback to customers' callbackUrl.
 * @member {Number} amountHigherThan
 */
NewConfirmedInternalTransactionsForSpecificAmountRBDataItem.prototype['amountHigherThan'] = undefined;

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs 2.0. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
NewConfirmedInternalTransactionsForSpecificAmountRBDataItem.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
NewConfirmedInternalTransactionsForSpecificAmountRBDataItem.prototype['callbackUrl'] = undefined;
var _default = NewConfirmedInternalTransactionsForSpecificAmountRBDataItem;
exports["default"] = _default;