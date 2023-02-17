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
 * The NewConfirmedCoinsTransactionsAndEachConfirmationRBDataItem model module.
 * @module model/NewConfirmedCoinsTransactionsAndEachConfirmationRBDataItem
 * @version 1.13.0
 */
var NewConfirmedCoinsTransactionsAndEachConfirmationRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewConfirmedCoinsTransactionsAndEachConfirmationRBDataItem</code>.
   * @alias module:model/NewConfirmedCoinsTransactionsAndEachConfirmationRBDataItem
   * @param address {String} Represents the address of the transaction, per which the result is returned.
   * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
   * @param confirmationsCount {Number} Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block.
   */
  function NewConfirmedCoinsTransactionsAndEachConfirmationRBDataItem(address, callbackUrl, confirmationsCount) {
    _classCallCheck(this, NewConfirmedCoinsTransactionsAndEachConfirmationRBDataItem);
    NewConfirmedCoinsTransactionsAndEachConfirmationRBDataItem.initialize(this, address, callbackUrl, confirmationsCount);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(NewConfirmedCoinsTransactionsAndEachConfirmationRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, address, callbackUrl, confirmationsCount) {
      obj['address'] = address;
      obj['callbackUrl'] = callbackUrl;
      obj['confirmationsCount'] = confirmationsCount;
    }

    /**
     * Constructs a <code>NewConfirmedCoinsTransactionsAndEachConfirmationRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedCoinsTransactionsAndEachConfirmationRBDataItem} obj Optional instance to populate.
     * @return {module:model/NewConfirmedCoinsTransactionsAndEachConfirmationRBDataItem} The populated <code>NewConfirmedCoinsTransactionsAndEachConfirmationRBDataItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewConfirmedCoinsTransactionsAndEachConfirmationRBDataItem();
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
        if (data.hasOwnProperty('confirmationsCount')) {
          obj['confirmationsCount'] = _ApiClient["default"].convertToType(data['confirmationsCount'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return NewConfirmedCoinsTransactionsAndEachConfirmationRBDataItem;
}();
/**
 * Represents the address of the transaction, per which the result is returned.
 * @member {String} address
 */
NewConfirmedCoinsTransactionsAndEachConfirmationRBDataItem.prototype['address'] = undefined;

/**
 * Specifies a flag that permits or denies the creation of duplicate addresses.
 * @member {Boolean} allowDuplicates
 * @default false
 */
NewConfirmedCoinsTransactionsAndEachConfirmationRBDataItem.prototype['allowDuplicates'] = false;

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
NewConfirmedCoinsTransactionsAndEachConfirmationRBDataItem.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
NewConfirmedCoinsTransactionsAndEachConfirmationRBDataItem.prototype['callbackUrl'] = undefined;

/**
 * Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block.
 * @member {Number} confirmationsCount
 */
NewConfirmedCoinsTransactionsAndEachConfirmationRBDataItem.prototype['confirmationsCount'] = undefined;
var _default = NewConfirmedCoinsTransactionsAndEachConfirmationRBDataItem;
exports["default"] = _default;