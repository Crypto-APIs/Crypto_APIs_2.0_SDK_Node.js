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
 * The NewConfirmedInternalTransactionsRBDataItem model module.
 * @module model/NewConfirmedInternalTransactionsRBDataItem
 * @version 1.13.0
 */
var NewConfirmedInternalTransactionsRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewConfirmedInternalTransactionsRBDataItem</code>.
   * @alias module:model/NewConfirmedInternalTransactionsRBDataItem
   * @param address {String} Defines the specific address of the internal transaction.
   * @param allowDuplicates {Boolean} Flag that permits or denies creation of duplicates
   * @param callbackSecretKey {String} Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
   * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
   */
  function NewConfirmedInternalTransactionsRBDataItem(address, allowDuplicates, callbackSecretKey, callbackUrl) {
    _classCallCheck(this, NewConfirmedInternalTransactionsRBDataItem);
    NewConfirmedInternalTransactionsRBDataItem.initialize(this, address, allowDuplicates, callbackSecretKey, callbackUrl);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(NewConfirmedInternalTransactionsRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, address, allowDuplicates, callbackSecretKey, callbackUrl) {
      obj['address'] = address;
      obj['allowDuplicates'] = allowDuplicates || false;
      obj['callbackSecretKey'] = callbackSecretKey;
      obj['callbackUrl'] = callbackUrl;
    }

    /**
     * Constructs a <code>NewConfirmedInternalTransactionsRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedInternalTransactionsRBDataItem} obj Optional instance to populate.
     * @return {module:model/NewConfirmedInternalTransactionsRBDataItem} The populated <code>NewConfirmedInternalTransactionsRBDataItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewConfirmedInternalTransactionsRBDataItem();
        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
        if (data.hasOwnProperty('allowDuplicates')) {
          obj['allowDuplicates'] = _ApiClient["default"].convertToType(data['allowDuplicates'], 'Boolean');
        }
        if (data.hasOwnProperty('callbackSecretKey')) {
          obj['callbackSecretKey'] = _ApiClient["default"].convertToType(data['callbackSecretKey'], 'String');
        }
        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }
        if (data.hasOwnProperty('receiveCallbackOn')) {
          obj['receiveCallbackOn'] = _ApiClient["default"].convertToType(data['receiveCallbackOn'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return NewConfirmedInternalTransactionsRBDataItem;
}();
/**
 * Defines the specific address of the internal transaction.
 * @member {String} address
 */
NewConfirmedInternalTransactionsRBDataItem.prototype['address'] = undefined;

/**
 * Flag that permits or denies creation of duplicates
 * @member {Boolean} allowDuplicates
 * @default false
 */
NewConfirmedInternalTransactionsRBDataItem.prototype['allowDuplicates'] = false;

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
NewConfirmedInternalTransactionsRBDataItem.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
NewConfirmedInternalTransactionsRBDataItem.prototype['callbackUrl'] = undefined;

/**
 * Represents the exact confirmation, on which the user wants to receive callback.
 * @member {Number} receiveCallbackOn
 */
NewConfirmedInternalTransactionsRBDataItem.prototype['receiveCallbackOn'] = undefined;
var _default = NewConfirmedInternalTransactionsRBDataItem;
exports["default"] = _default;