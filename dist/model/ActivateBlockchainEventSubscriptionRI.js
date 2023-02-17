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
 * The ActivateBlockchainEventSubscriptionRI model module.
 * @module model/ActivateBlockchainEventSubscriptionRI
 * @version 1.13.0
 */
var ActivateBlockchainEventSubscriptionRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActivateBlockchainEventSubscriptionRI</code>.
   * @alias module:model/ActivateBlockchainEventSubscriptionRI
   * @param address {String} Represents the address of the transaction, per which the result is returned.
   * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param callbackSecretKey {String} Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our Documentation.
   * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
   * @param confirmationsCount {Number} Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block.
   * @param createdTimestamp {Number} Defines the specific time/date when the subscription was created in Unix Timestamp.
   * @param eventType {String} Defines the type of the specific event available for the customer to subscribe to for callback notification.
   * @param isActive {Boolean} Defines whether the subscription is active or not. Set as boolean.
   * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
   * @param referenceId {String} Represents a unique ID used to reference the specific callback subscription.
   * @param transactionId {String} Represents the unique identification string that defines the transaction.
   */
  function ActivateBlockchainEventSubscriptionRI(address, blockchain, callbackSecretKey, callbackUrl, confirmationsCount, createdTimestamp, eventType, isActive, network, referenceId, transactionId) {
    _classCallCheck(this, ActivateBlockchainEventSubscriptionRI);
    ActivateBlockchainEventSubscriptionRI.initialize(this, address, blockchain, callbackSecretKey, callbackUrl, confirmationsCount, createdTimestamp, eventType, isActive, network, referenceId, transactionId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ActivateBlockchainEventSubscriptionRI, null, [{
    key: "initialize",
    value: function initialize(obj, address, blockchain, callbackSecretKey, callbackUrl, confirmationsCount, createdTimestamp, eventType, isActive, network, referenceId, transactionId) {
      obj['address'] = address;
      obj['blockchain'] = blockchain;
      obj['callbackSecretKey'] = callbackSecretKey;
      obj['callbackUrl'] = callbackUrl;
      obj['confirmationsCount'] = confirmationsCount;
      obj['createdTimestamp'] = createdTimestamp;
      obj['eventType'] = eventType;
      obj['isActive'] = isActive;
      obj['network'] = network;
      obj['referenceId'] = referenceId;
      obj['transactionId'] = transactionId;
    }

    /**
     * Constructs a <code>ActivateBlockchainEventSubscriptionRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActivateBlockchainEventSubscriptionRI} obj Optional instance to populate.
     * @return {module:model/ActivateBlockchainEventSubscriptionRI} The populated <code>ActivateBlockchainEventSubscriptionRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActivateBlockchainEventSubscriptionRI();
        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
        if (data.hasOwnProperty('blockchain')) {
          obj['blockchain'] = _ApiClient["default"].convertToType(data['blockchain'], 'String');
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
        if (data.hasOwnProperty('createdTimestamp')) {
          obj['createdTimestamp'] = _ApiClient["default"].convertToType(data['createdTimestamp'], 'Number');
        }
        if (data.hasOwnProperty('eventType')) {
          obj['eventType'] = _ApiClient["default"].convertToType(data['eventType'], 'String');
        }
        if (data.hasOwnProperty('isActive')) {
          obj['isActive'] = _ApiClient["default"].convertToType(data['isActive'], 'Boolean');
        }
        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }
        if (data.hasOwnProperty('referenceId')) {
          obj['referenceId'] = _ApiClient["default"].convertToType(data['referenceId'], 'String');
        }
        if (data.hasOwnProperty('transactionId')) {
          obj['transactionId'] = _ApiClient["default"].convertToType(data['transactionId'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ActivateBlockchainEventSubscriptionRI;
}();
/**
 * Represents the address of the transaction, per which the result is returned.
 * @member {String} address
 */
ActivateBlockchainEventSubscriptionRI.prototype['address'] = undefined;

/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
ActivateBlockchainEventSubscriptionRI.prototype['blockchain'] = undefined;

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our Documentation.
 * @member {String} callbackSecretKey
 */
ActivateBlockchainEventSubscriptionRI.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
ActivateBlockchainEventSubscriptionRI.prototype['callbackUrl'] = undefined;

/**
 * Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block.
 * @member {Number} confirmationsCount
 */
ActivateBlockchainEventSubscriptionRI.prototype['confirmationsCount'] = undefined;

/**
 * Defines the specific time/date when the subscription was created in Unix Timestamp.
 * @member {Number} createdTimestamp
 */
ActivateBlockchainEventSubscriptionRI.prototype['createdTimestamp'] = undefined;

/**
 * Defines the type of the specific event available for the customer to subscribe to for callback notification.
 * @member {String} eventType
 */
ActivateBlockchainEventSubscriptionRI.prototype['eventType'] = undefined;

/**
 * Defines whether the subscription is active or not. Set as boolean.
 * @member {Boolean} isActive
 */
ActivateBlockchainEventSubscriptionRI.prototype['isActive'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
 * @member {String} network
 */
ActivateBlockchainEventSubscriptionRI.prototype['network'] = undefined;

/**
 * Represents a unique ID used to reference the specific callback subscription.
 * @member {String} referenceId
 */
ActivateBlockchainEventSubscriptionRI.prototype['referenceId'] = undefined;

/**
 * Represents the unique identification string that defines the transaction.
 * @member {String} transactionId
 */
ActivateBlockchainEventSubscriptionRI.prototype['transactionId'] = undefined;
var _default = ActivateBlockchainEventSubscriptionRI;
exports["default"] = _default;