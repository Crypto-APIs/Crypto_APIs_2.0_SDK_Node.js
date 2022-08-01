"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The NewConfirmedTokensTransactionsRI model module.
 * @module model/NewConfirmedTokensTransactionsRI
 * @version 1.7.2
 */
var NewConfirmedTokensTransactionsRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewConfirmedTokensTransactionsRI</code>.
   * @alias module:model/NewConfirmedTokensTransactionsRI
   * @param address {String} Represents the address of the transaction, per which the result is returned.
   * @param callbackSecretKey {String} Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
   * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
   * @param createdTimestamp {Number} Defines the specific time/date when the subscription was created in Unix Timestamp.
   * @param eventType {String} Defines the type of the specific event available for the customer to subscribe to for callback notification.
   * @param isActive {Boolean} Defines whether the subscription is active or not. Set as boolean.
   * @param receiveCallbackOn {Number} Represents the exact confirmation, on which the user wants to receive callback.
   * @param referenceId {String} Represents a unique ID used to reference the specific callback subscription.
   */
  function NewConfirmedTokensTransactionsRI(address, callbackSecretKey, callbackUrl, createdTimestamp, eventType, isActive, receiveCallbackOn, referenceId) {
    _classCallCheck(this, NewConfirmedTokensTransactionsRI);

    NewConfirmedTokensTransactionsRI.initialize(this, address, callbackSecretKey, callbackUrl, createdTimestamp, eventType, isActive, receiveCallbackOn, referenceId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewConfirmedTokensTransactionsRI, null, [{
    key: "initialize",
    value: function initialize(obj, address, callbackSecretKey, callbackUrl, createdTimestamp, eventType, isActive, receiveCallbackOn, referenceId) {
      obj['address'] = address;
      obj['callbackSecretKey'] = callbackSecretKey;
      obj['callbackUrl'] = callbackUrl;
      obj['createdTimestamp'] = createdTimestamp;
      obj['eventType'] = eventType;
      obj['isActive'] = isActive;
      obj['receiveCallbackOn'] = receiveCallbackOn;
      obj['referenceId'] = referenceId;
    }
    /**
     * Constructs a <code>NewConfirmedTokensTransactionsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedTokensTransactionsRI} obj Optional instance to populate.
     * @return {module:model/NewConfirmedTokensTransactionsRI} The populated <code>NewConfirmedTokensTransactionsRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewConfirmedTokensTransactionsRI();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('callbackSecretKey')) {
          obj['callbackSecretKey'] = _ApiClient["default"].convertToType(data['callbackSecretKey'], 'String');
        }

        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
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

        if (data.hasOwnProperty('receiveCallbackOn')) {
          obj['receiveCallbackOn'] = _ApiClient["default"].convertToType(data['receiveCallbackOn'], 'Number');
        }

        if (data.hasOwnProperty('referenceId')) {
          obj['referenceId'] = _ApiClient["default"].convertToType(data['referenceId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NewConfirmedTokensTransactionsRI;
}();
/**
 * Represents the address of the transaction, per which the result is returned.
 * @member {String} address
 */


NewConfirmedTokensTransactionsRI.prototype['address'] = undefined;
/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */

NewConfirmedTokensTransactionsRI.prototype['callbackSecretKey'] = undefined;
/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */

NewConfirmedTokensTransactionsRI.prototype['callbackUrl'] = undefined;
/**
 * Defines the specific time/date when the subscription was created in Unix Timestamp.
 * @member {Number} createdTimestamp
 */

NewConfirmedTokensTransactionsRI.prototype['createdTimestamp'] = undefined;
/**
 * Defines the type of the specific event available for the customer to subscribe to for callback notification.
 * @member {String} eventType
 */

NewConfirmedTokensTransactionsRI.prototype['eventType'] = undefined;
/**
 * Defines whether the subscription is active or not. Set as boolean.
 * @member {Boolean} isActive
 */

NewConfirmedTokensTransactionsRI.prototype['isActive'] = undefined;
/**
 * Represents the exact confirmation, on which the user wants to receive callback.
 * @member {Number} receiveCallbackOn
 */

NewConfirmedTokensTransactionsRI.prototype['receiveCallbackOn'] = undefined;
/**
 * Represents a unique ID used to reference the specific callback subscription.
 * @member {String} referenceId
 */

NewConfirmedTokensTransactionsRI.prototype['referenceId'] = undefined;
var _default = NewConfirmedTokensTransactionsRI;
exports["default"] = _default;