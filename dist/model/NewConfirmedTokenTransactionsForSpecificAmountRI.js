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
 * The NewConfirmedTokenTransactionsForSpecificAmountRI model module.
 * @module model/NewConfirmedTokenTransactionsForSpecificAmountRI
 * @version 1.13.0
 */
var NewConfirmedTokenTransactionsForSpecificAmountRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewConfirmedTokenTransactionsForSpecificAmountRI</code>.
   * @alias module:model/NewConfirmedTokenTransactionsForSpecificAmountRI
   * @param amountHigherThan {Number} Represents a specific amount of coins after which the system have to send a callback to customers' callbackUrl.
   * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
   * @param contractAddress {String} Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
   * @param createdTimestamp {Number} Defines the specific time/date when the subscription was created in Unix Timestamp.
   * @param eventType {String} Defines the type of the specific event available for the customer to subscribe to for callback notification.
   * @param isActive {Boolean} Defines whether the subscription is active or not. Set as boolean.
   * @param referenceId {String} Represents a unique ID used to reference the specific callback subscription.
   */
  function NewConfirmedTokenTransactionsForSpecificAmountRI(amountHigherThan, callbackUrl, contractAddress, createdTimestamp, eventType, isActive, referenceId) {
    _classCallCheck(this, NewConfirmedTokenTransactionsForSpecificAmountRI);
    NewConfirmedTokenTransactionsForSpecificAmountRI.initialize(this, amountHigherThan, callbackUrl, contractAddress, createdTimestamp, eventType, isActive, referenceId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(NewConfirmedTokenTransactionsForSpecificAmountRI, null, [{
    key: "initialize",
    value: function initialize(obj, amountHigherThan, callbackUrl, contractAddress, createdTimestamp, eventType, isActive, referenceId) {
      obj['amountHigherThan'] = amountHigherThan;
      obj['callbackUrl'] = callbackUrl;
      obj['contractAddress'] = contractAddress;
      obj['createdTimestamp'] = createdTimestamp;
      obj['eventType'] = eventType;
      obj['isActive'] = isActive;
      obj['referenceId'] = referenceId;
    }

    /**
     * Constructs a <code>NewConfirmedTokenTransactionsForSpecificAmountRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedTokenTransactionsForSpecificAmountRI} obj Optional instance to populate.
     * @return {module:model/NewConfirmedTokenTransactionsForSpecificAmountRI} The populated <code>NewConfirmedTokenTransactionsForSpecificAmountRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewConfirmedTokenTransactionsForSpecificAmountRI();
        if (data.hasOwnProperty('amountHigherThan')) {
          obj['amountHigherThan'] = _ApiClient["default"].convertToType(data['amountHigherThan'], 'Number');
        }
        if (data.hasOwnProperty('callbackSecretKey')) {
          obj['callbackSecretKey'] = _ApiClient["default"].convertToType(data['callbackSecretKey'], 'String');
        }
        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }
        if (data.hasOwnProperty('contractAddress')) {
          obj['contractAddress'] = _ApiClient["default"].convertToType(data['contractAddress'], 'String');
        }
        if (data.hasOwnProperty('createdTimestamp')) {
          obj['createdTimestamp'] = _ApiClient["default"].convertToType(data['createdTimestamp'], 'Number');
        }
        if (data.hasOwnProperty('eventType')) {
          obj['eventType'] = _ApiClient["default"].convertToType(data['eventType'], 'String');
        }
        if (data.hasOwnProperty('isActive')) {
          obj['isActive'] = _ApiClient["default"].convertToType(data['isActive'], 'Boolean');
        }
        if (data.hasOwnProperty('referenceId')) {
          obj['referenceId'] = _ApiClient["default"].convertToType(data['referenceId'], 'String');
        }
      }
      return obj;
    }
  }]);
  return NewConfirmedTokenTransactionsForSpecificAmountRI;
}();
/**
 * Represents a specific amount of coins after which the system have to send a callback to customers' callbackUrl.
 * @member {Number} amountHigherThan
 */
NewConfirmedTokenTransactionsForSpecificAmountRI.prototype['amountHigherThan'] = undefined;

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
NewConfirmedTokenTransactionsForSpecificAmountRI.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
NewConfirmedTokenTransactionsForSpecificAmountRI.prototype['callbackUrl'] = undefined;

/**
 * Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
 * @member {String} contractAddress
 */
NewConfirmedTokenTransactionsForSpecificAmountRI.prototype['contractAddress'] = undefined;

/**
 * Defines the specific time/date when the subscription was created in Unix Timestamp.
 * @member {Number} createdTimestamp
 */
NewConfirmedTokenTransactionsForSpecificAmountRI.prototype['createdTimestamp'] = undefined;

/**
 * Defines the type of the specific event available for the customer to subscribe to for callback notification.
 * @member {String} eventType
 */
NewConfirmedTokenTransactionsForSpecificAmountRI.prototype['eventType'] = undefined;

/**
 * Defines whether the subscription is active or not. Set as boolean.
 * @member {Boolean} isActive
 */
NewConfirmedTokenTransactionsForSpecificAmountRI.prototype['isActive'] = undefined;

/**
 * Represents a unique ID used to reference the specific callback subscription.
 * @member {String} referenceId
 */
NewConfirmedTokenTransactionsForSpecificAmountRI.prototype['referenceId'] = undefined;
var _default = NewConfirmedTokenTransactionsForSpecificAmountRI;
exports["default"] = _default;