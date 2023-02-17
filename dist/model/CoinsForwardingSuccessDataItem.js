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
 * The CoinsForwardingSuccessDataItem model module.
 * @module model/CoinsForwardingSuccessDataItem
 * @version 1.13.0
 */
var CoinsForwardingSuccessDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CoinsForwardingSuccessDataItem</code>.
   * Defines an &#x60;item&#x60; as one result.
   * @alias module:model/CoinsForwardingSuccessDataItem
   * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
   * @param fromAddress {String} Represents the hash of the address that provides the coins.
   * @param toAddress {String} Represents the hash of the address to forward the coins to.
   * @param forwardedAmount {String} Represents the amount of coins that have been forwarded.
   * @param forwardedUnit {String} Represents the unit of coins that have been forwarded, e.g. BTC.
   * @param spentFeesAmount {String} Represents the amount of the fee spent for the coins to be forwarded.
   * @param spentFeesUnit {String} Represents the unit of the fee spent for the coins to be forwarded, e.g. BTC.
   * @param triggerTransactionId {String} Defines the unique Transaction ID that triggered the coin forwarding.
   * @param forwardingTransactionId {String} Defines the unique Transaction ID that forwarded the coins.
   */
  function CoinsForwardingSuccessDataItem(blockchain, network, fromAddress, toAddress, forwardedAmount, forwardedUnit, spentFeesAmount, spentFeesUnit, triggerTransactionId, forwardingTransactionId) {
    _classCallCheck(this, CoinsForwardingSuccessDataItem);
    CoinsForwardingSuccessDataItem.initialize(this, blockchain, network, fromAddress, toAddress, forwardedAmount, forwardedUnit, spentFeesAmount, spentFeesUnit, triggerTransactionId, forwardingTransactionId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CoinsForwardingSuccessDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, blockchain, network, fromAddress, toAddress, forwardedAmount, forwardedUnit, spentFeesAmount, spentFeesUnit, triggerTransactionId, forwardingTransactionId) {
      obj['blockchain'] = blockchain;
      obj['network'] = network;
      obj['fromAddress'] = fromAddress;
      obj['toAddress'] = toAddress;
      obj['forwardedAmount'] = forwardedAmount;
      obj['forwardedUnit'] = forwardedUnit;
      obj['spentFeesAmount'] = spentFeesAmount;
      obj['spentFeesUnit'] = spentFeesUnit;
      obj['triggerTransactionId'] = triggerTransactionId;
      obj['forwardingTransactionId'] = forwardingTransactionId;
    }

    /**
     * Constructs a <code>CoinsForwardingSuccessDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoinsForwardingSuccessDataItem} obj Optional instance to populate.
     * @return {module:model/CoinsForwardingSuccessDataItem} The populated <code>CoinsForwardingSuccessDataItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CoinsForwardingSuccessDataItem();
        if (data.hasOwnProperty('blockchain')) {
          obj['blockchain'] = _ApiClient["default"].convertToType(data['blockchain'], 'String');
        }
        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }
        if (data.hasOwnProperty('fromAddress')) {
          obj['fromAddress'] = _ApiClient["default"].convertToType(data['fromAddress'], 'String');
        }
        if (data.hasOwnProperty('toAddress')) {
          obj['toAddress'] = _ApiClient["default"].convertToType(data['toAddress'], 'String');
        }
        if (data.hasOwnProperty('forwardedAmount')) {
          obj['forwardedAmount'] = _ApiClient["default"].convertToType(data['forwardedAmount'], 'String');
        }
        if (data.hasOwnProperty('forwardedUnit')) {
          obj['forwardedUnit'] = _ApiClient["default"].convertToType(data['forwardedUnit'], 'String');
        }
        if (data.hasOwnProperty('spentFeesAmount')) {
          obj['spentFeesAmount'] = _ApiClient["default"].convertToType(data['spentFeesAmount'], 'String');
        }
        if (data.hasOwnProperty('spentFeesUnit')) {
          obj['spentFeesUnit'] = _ApiClient["default"].convertToType(data['spentFeesUnit'], 'String');
        }
        if (data.hasOwnProperty('triggerTransactionId')) {
          obj['triggerTransactionId'] = _ApiClient["default"].convertToType(data['triggerTransactionId'], 'String');
        }
        if (data.hasOwnProperty('forwardingTransactionId')) {
          obj['forwardingTransactionId'] = _ApiClient["default"].convertToType(data['forwardingTransactionId'], 'String');
        }
      }
      return obj;
    }
  }]);
  return CoinsForwardingSuccessDataItem;
}();
/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
CoinsForwardingSuccessDataItem.prototype['blockchain'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
 * @member {String} network
 */
CoinsForwardingSuccessDataItem.prototype['network'] = undefined;

/**
 * Represents the hash of the address that provides the coins.
 * @member {String} fromAddress
 */
CoinsForwardingSuccessDataItem.prototype['fromAddress'] = undefined;

/**
 * Represents the hash of the address to forward the coins to.
 * @member {String} toAddress
 */
CoinsForwardingSuccessDataItem.prototype['toAddress'] = undefined;

/**
 * Represents the amount of coins that have been forwarded.
 * @member {String} forwardedAmount
 */
CoinsForwardingSuccessDataItem.prototype['forwardedAmount'] = undefined;

/**
 * Represents the unit of coins that have been forwarded, e.g. BTC.
 * @member {String} forwardedUnit
 */
CoinsForwardingSuccessDataItem.prototype['forwardedUnit'] = undefined;

/**
 * Represents the amount of the fee spent for the coins to be forwarded.
 * @member {String} spentFeesAmount
 */
CoinsForwardingSuccessDataItem.prototype['spentFeesAmount'] = undefined;

/**
 * Represents the unit of the fee spent for the coins to be forwarded, e.g. BTC.
 * @member {String} spentFeesUnit
 */
CoinsForwardingSuccessDataItem.prototype['spentFeesUnit'] = undefined;

/**
 * Defines the unique Transaction ID that triggered the coin forwarding.
 * @member {String} triggerTransactionId
 */
CoinsForwardingSuccessDataItem.prototype['triggerTransactionId'] = undefined;

/**
 * Defines the unique Transaction ID that forwarded the coins.
 * @member {String} forwardingTransactionId
 */
CoinsForwardingSuccessDataItem.prototype['forwardingTransactionId'] = undefined;
var _default = CoinsForwardingSuccessDataItem;
exports["default"] = _default;