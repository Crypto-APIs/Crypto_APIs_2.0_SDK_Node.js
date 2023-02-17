"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _TokensForwardingSuccessToken = _interopRequireDefault(require("./TokensForwardingSuccessToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The TokensForwardingSuccessDataItem model module.
 * @module model/TokensForwardingSuccessDataItem
 * @version 1.13.0
 */
var TokensForwardingSuccessDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TokensForwardingSuccessDataItem</code>.
   * Defines an &#x60;item&#x60; as one result.
   * @alias module:model/TokensForwardingSuccessDataItem
   * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
   * @param fromAddress {String} Represents the hash of the address that provides the tokens.
   * @param toAddress {String} Represents the hash of the address to forward the tokens to.
   * @param spentFeesAmount {String} Represents the amount of the fee spent for the tokens to be forwarded.
   * @param spentFeesUnit {String} Represents the unit of the fee spent for the tokens to be forwarded, e.g. BTC.
   * @param triggerTransactionId {String} Defines the unique Transaction ID that triggered the token forwarding.
   * @param forwardingTransactionId {String} Defines the unique Transaction ID that forwarded the tokens.
   * @param tokenType {module:model/TokensForwardingSuccessDataItem.TokenTypeEnum} Defines the type of token sent with the transaction, e.g. ERC 20.
   * @param token {module:model/TokensForwardingSuccessToken} 
   */
  function TokensForwardingSuccessDataItem(blockchain, network, fromAddress, toAddress, spentFeesAmount, spentFeesUnit, triggerTransactionId, forwardingTransactionId, tokenType, token) {
    _classCallCheck(this, TokensForwardingSuccessDataItem);
    TokensForwardingSuccessDataItem.initialize(this, blockchain, network, fromAddress, toAddress, spentFeesAmount, spentFeesUnit, triggerTransactionId, forwardingTransactionId, tokenType, token);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(TokensForwardingSuccessDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, blockchain, network, fromAddress, toAddress, spentFeesAmount, spentFeesUnit, triggerTransactionId, forwardingTransactionId, tokenType, token) {
      obj['blockchain'] = blockchain;
      obj['network'] = network;
      obj['fromAddress'] = fromAddress;
      obj['toAddress'] = toAddress;
      obj['spentFeesAmount'] = spentFeesAmount;
      obj['spentFeesUnit'] = spentFeesUnit;
      obj['triggerTransactionId'] = triggerTransactionId;
      obj['forwardingTransactionId'] = forwardingTransactionId;
      obj['tokenType'] = tokenType;
      obj['token'] = token;
    }

    /**
     * Constructs a <code>TokensForwardingSuccessDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokensForwardingSuccessDataItem} obj Optional instance to populate.
     * @return {module:model/TokensForwardingSuccessDataItem} The populated <code>TokensForwardingSuccessDataItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TokensForwardingSuccessDataItem();
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
        if (data.hasOwnProperty('tokenType')) {
          obj['tokenType'] = _ApiClient["default"].convertToType(data['tokenType'], 'String');
        }
        if (data.hasOwnProperty('token')) {
          obj['token'] = _TokensForwardingSuccessToken["default"].constructFromObject(data['token']);
        }
      }
      return obj;
    }
  }]);
  return TokensForwardingSuccessDataItem;
}();
/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
TokensForwardingSuccessDataItem.prototype['blockchain'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
 * @member {String} network
 */
TokensForwardingSuccessDataItem.prototype['network'] = undefined;

/**
 * Represents the hash of the address that provides the tokens.
 * @member {String} fromAddress
 */
TokensForwardingSuccessDataItem.prototype['fromAddress'] = undefined;

/**
 * Represents the hash of the address to forward the tokens to.
 * @member {String} toAddress
 */
TokensForwardingSuccessDataItem.prototype['toAddress'] = undefined;

/**
 * Represents the amount of the fee spent for the tokens to be forwarded.
 * @member {String} spentFeesAmount
 */
TokensForwardingSuccessDataItem.prototype['spentFeesAmount'] = undefined;

/**
 * Represents the unit of the fee spent for the tokens to be forwarded, e.g. BTC.
 * @member {String} spentFeesUnit
 */
TokensForwardingSuccessDataItem.prototype['spentFeesUnit'] = undefined;

/**
 * Defines the unique Transaction ID that triggered the token forwarding.
 * @member {String} triggerTransactionId
 */
TokensForwardingSuccessDataItem.prototype['triggerTransactionId'] = undefined;

/**
 * Defines the unique Transaction ID that forwarded the tokens.
 * @member {String} forwardingTransactionId
 */
TokensForwardingSuccessDataItem.prototype['forwardingTransactionId'] = undefined;

/**
 * Defines the type of token sent with the transaction, e.g. ERC 20.
 * @member {module:model/TokensForwardingSuccessDataItem.TokenTypeEnum} tokenType
 */
TokensForwardingSuccessDataItem.prototype['tokenType'] = undefined;

/**
 * @member {module:model/TokensForwardingSuccessToken} token
 */
TokensForwardingSuccessDataItem.prototype['token'] = undefined;

/**
 * Allowed values for the <code>tokenType</code> property.
 * @enum {String}
 * @readonly
 */
TokensForwardingSuccessDataItem['TokenTypeEnum'] = {
  /**
   * value: "ERC-20"
   * @const
   */
  "ERC-20": "ERC-20",
  /**
   * value: "ERC-721"
   * @const
   */
  "ERC-721": "ERC-721",
  /**
   * value: "OMNI"
   * @const
   */
  "OMNI": "OMNI"
};
var _default = TokensForwardingSuccessDataItem;
exports["default"] = _default;