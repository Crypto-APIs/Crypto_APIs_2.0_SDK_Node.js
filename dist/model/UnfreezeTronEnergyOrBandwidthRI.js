"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _FreezeTronEnergyOrBandwidthRIDestinationsInner = _interopRequireDefault(require("./FreezeTronEnergyOrBandwidthRIDestinationsInner"));
var _UnfreezeTronEnergyOrBandwidthRITransactionAmount = _interopRequireDefault(require("./UnfreezeTronEnergyOrBandwidthRITransactionAmount"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The UnfreezeTronEnergyOrBandwidthRI model module.
 * @module model/UnfreezeTronEnergyOrBandwidthRI
 * @version 1.10.0
 */
var UnfreezeTronEnergyOrBandwidthRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UnfreezeTronEnergyOrBandwidthRI</code>.
   * @alias module:model/UnfreezeTronEnergyOrBandwidthRI
   * @param additionalData {String} Defines a transaction note with additional details
   * @param address {String} Defines the sender's public address.
   * @param destinations {Array.<module:model/FreezeTronEnergyOrBandwidthRIDestinationsInner>} Defines the destination of the transaction
   * @param resource {String} Defines the resource staking for (eg. Bandwidth, Energy)
   * @param status {module:model/UnfreezeTronEnergyOrBandwidthRI.StatusEnum} Represents the status of the transaction.
   * @param transactionId {String} Defines the created transaction
   * @param transactionType {module:model/UnfreezeTronEnergyOrBandwidthRI.TransactionTypeEnum} Defines the type of the transacted units.
   * @param walletId {String} Represents the sender's specific and unique Wallet ID of the sender.
   * @param transactionAmount {module:model/UnfreezeTronEnergyOrBandwidthRITransactionAmount} 
   */
  function UnfreezeTronEnergyOrBandwidthRI(additionalData, address, destinations, resource, status, transactionId, transactionType, walletId, transactionAmount) {
    _classCallCheck(this, UnfreezeTronEnergyOrBandwidthRI);
    UnfreezeTronEnergyOrBandwidthRI.initialize(this, additionalData, address, destinations, resource, status, transactionId, transactionType, walletId, transactionAmount);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(UnfreezeTronEnergyOrBandwidthRI, null, [{
    key: "initialize",
    value: function initialize(obj, additionalData, address, destinations, resource, status, transactionId, transactionType, walletId, transactionAmount) {
      obj['additionalData'] = additionalData;
      obj['address'] = address;
      obj['destinations'] = destinations;
      obj['resource'] = resource;
      obj['status'] = status;
      obj['transactionId'] = transactionId;
      obj['transactionType'] = transactionType;
      obj['walletId'] = walletId;
      obj['transactionAmount'] = transactionAmount;
    }

    /**
     * Constructs a <code>UnfreezeTronEnergyOrBandwidthRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnfreezeTronEnergyOrBandwidthRI} obj Optional instance to populate.
     * @return {module:model/UnfreezeTronEnergyOrBandwidthRI} The populated <code>UnfreezeTronEnergyOrBandwidthRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UnfreezeTronEnergyOrBandwidthRI();
        if (data.hasOwnProperty('additionalData')) {
          obj['additionalData'] = _ApiClient["default"].convertToType(data['additionalData'], 'String');
        }
        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
        if (data.hasOwnProperty('callbackSecretKey')) {
          obj['callbackSecretKey'] = _ApiClient["default"].convertToType(data['callbackSecretKey'], 'String');
        }
        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }
        if (data.hasOwnProperty('destinations')) {
          obj['destinations'] = _ApiClient["default"].convertToType(data['destinations'], [_FreezeTronEnergyOrBandwidthRIDestinationsInner["default"]]);
        }
        if (data.hasOwnProperty('resource')) {
          obj['resource'] = _ApiClient["default"].convertToType(data['resource'], 'String');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
        if (data.hasOwnProperty('transactionId')) {
          obj['transactionId'] = _ApiClient["default"].convertToType(data['transactionId'], 'String');
        }
        if (data.hasOwnProperty('transactionType')) {
          obj['transactionType'] = _ApiClient["default"].convertToType(data['transactionType'], 'String');
        }
        if (data.hasOwnProperty('walletId')) {
          obj['walletId'] = _ApiClient["default"].convertToType(data['walletId'], 'String');
        }
        if (data.hasOwnProperty('transactionAmount')) {
          obj['transactionAmount'] = _UnfreezeTronEnergyOrBandwidthRITransactionAmount["default"].constructFromObject(data['transactionAmount']);
        }
      }
      return obj;
    }
  }]);
  return UnfreezeTronEnergyOrBandwidthRI;
}();
/**
 * Defines a transaction note with additional details
 * @member {String} additionalData
 */
UnfreezeTronEnergyOrBandwidthRI.prototype['additionalData'] = undefined;

/**
 * Defines the sender's public address.
 * @member {String} address
 */
UnfreezeTronEnergyOrBandwidthRI.prototype['address'] = undefined;

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our Documentation.
 * @member {String} callbackSecretKey
 */
UnfreezeTronEnergyOrBandwidthRI.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. We support ONLY httpS type of protocol.
 * @member {String} callbackUrl
 */
UnfreezeTronEnergyOrBandwidthRI.prototype['callbackUrl'] = undefined;

/**
 * Defines the destination of the transaction
 * @member {Array.<module:model/FreezeTronEnergyOrBandwidthRIDestinationsInner>} destinations
 */
UnfreezeTronEnergyOrBandwidthRI.prototype['destinations'] = undefined;

/**
 * Defines the resource staking for (eg. Bandwidth, Energy)
 * @member {String} resource
 */
UnfreezeTronEnergyOrBandwidthRI.prototype['resource'] = undefined;

/**
 * Represents the status of the transaction.
 * @member {module:model/UnfreezeTronEnergyOrBandwidthRI.StatusEnum} status
 */
UnfreezeTronEnergyOrBandwidthRI.prototype['status'] = undefined;

/**
 * Defines the created transaction
 * @member {String} transactionId
 */
UnfreezeTronEnergyOrBandwidthRI.prototype['transactionId'] = undefined;

/**
 * Defines the type of the transacted units.
 * @member {module:model/UnfreezeTronEnergyOrBandwidthRI.TransactionTypeEnum} transactionType
 */
UnfreezeTronEnergyOrBandwidthRI.prototype['transactionType'] = undefined;

/**
 * Represents the sender's specific and unique Wallet ID of the sender.
 * @member {String} walletId
 */
UnfreezeTronEnergyOrBandwidthRI.prototype['walletId'] = undefined;

/**
 * @member {module:model/UnfreezeTronEnergyOrBandwidthRITransactionAmount} transactionAmount
 */
UnfreezeTronEnergyOrBandwidthRI.prototype['transactionAmount'] = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
UnfreezeTronEnergyOrBandwidthRI['StatusEnum'] = {
  /**
   * value: "created"
   * @const
   */
  "created": "created",
  /**
   * value: "await-approval"
   * @const
   */
  "await-approval": "await-approval",
  /**
   * value: "pending"
   * @const
   */
  "pending": "pending",
  /**
   * value: "prepared"
   * @const
   */
  "prepared": "prepared",
  /**
   * value: "signed"
   * @const
   */
  "signed": "signed",
  /**
   * value: "broadcasted"
   * @const
   */
  "broadcasted": "broadcasted",
  /**
   * value: "success"
   * @const
   */
  "success": "success",
  /**
   * value: "failed"
   * @const
   */
  "failed": "failed",
  /**
   * value: "rejected"
   * @const
   */
  "rejected": "rejected",
  /**
   * value: "mined"
   * @const
   */
  "mined": "mined",
  /**
   * value: "mined-with-errors"
   * @const
   */
  "mined-with-errors": "mined-with-errors"
};

/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
UnfreezeTronEnergyOrBandwidthRI['TransactionTypeEnum'] = {
  /**
   * value: "staking"
   * @const
   */
  "staking": "staking",
  /**
   * value: "unstaking"
   * @const
   */
  "unstaking": "unstaking"
};
var _default = UnfreezeTronEnergyOrBandwidthRI;
exports["default"] = _default;