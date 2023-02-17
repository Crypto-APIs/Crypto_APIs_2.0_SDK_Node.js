"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _TokensForwardingSuccessErc = _interopRequireDefault(require("./TokensForwardingSuccessErc20"));
var _TokensForwardingSuccessErc2 = _interopRequireDefault(require("./TokensForwardingSuccessErc721"));
var _TokensForwardingSuccessOmni = _interopRequireDefault(require("./TokensForwardingSuccessOmni"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The TokensForwardingSuccessToken model module.
 * @module model/TokensForwardingSuccessToken
 * @version 1.13.0
 */
var TokensForwardingSuccessToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TokensForwardingSuccessToken</code>.
   * @alias module:model/TokensForwardingSuccessToken
   * @implements module:model/TokensForwardingSuccessErc20
   * @implements module:model/TokensForwardingSuccessErc721
   * @implements module:model/TokensForwardingSuccessOmni
   * @param name {String} Specifies the name of the token.
   * @param symbol {String} Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
   * @param amount {String} Defines the amount of tokens sent with the confirmed transaction.
   * @param contractAddress {String} Specifies the address of the contract.
   * @param tokenId {String} Specifies the ID of the token.
   * @param propertyId {String} Defines the ID of the property for Omni Layer.
   * @param transactionType {String} Defines the type of the transaction.
   * @param createdByTransactionId {String} The transaction ID used to create the token.
   */
  function TokensForwardingSuccessToken(name, symbol, amount, contractAddress, tokenId, propertyId, transactionType, createdByTransactionId) {
    _classCallCheck(this, TokensForwardingSuccessToken);
    _TokensForwardingSuccessErc["default"].initialize(this, name, symbol, amount, contractAddress);
    _TokensForwardingSuccessErc2["default"].initialize(this, name, symbol, tokenId, contractAddress);
    _TokensForwardingSuccessOmni["default"].initialize(this, name, propertyId, transactionType, createdByTransactionId, amount);
    TokensForwardingSuccessToken.initialize(this, name, symbol, amount, contractAddress, tokenId, propertyId, transactionType, createdByTransactionId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(TokensForwardingSuccessToken, null, [{
    key: "initialize",
    value: function initialize(obj, name, symbol, amount, contractAddress, tokenId, propertyId, transactionType, createdByTransactionId) {
      obj['name'] = name;
      obj['symbol'] = symbol;
      obj['amount'] = amount;
      obj['contractAddress'] = contractAddress;
      obj['tokenId'] = tokenId;
      obj['propertyId'] = propertyId;
      obj['transactionType'] = transactionType;
      obj['createdByTransactionId'] = createdByTransactionId;
    }

    /**
     * Constructs a <code>TokensForwardingSuccessToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokensForwardingSuccessToken} obj Optional instance to populate.
     * @return {module:model/TokensForwardingSuccessToken} The populated <code>TokensForwardingSuccessToken</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TokensForwardingSuccessToken();
        _TokensForwardingSuccessErc["default"].constructFromObject(data, obj);
        _TokensForwardingSuccessErc2["default"].constructFromObject(data, obj);
        _TokensForwardingSuccessOmni["default"].constructFromObject(data, obj);
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }
        if (data.hasOwnProperty('decimals')) {
          obj['decimals'] = _ApiClient["default"].convertToType(data['decimals'], 'String');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
        if (data.hasOwnProperty('contractAddress')) {
          obj['contractAddress'] = _ApiClient["default"].convertToType(data['contractAddress'], 'String');
        }
        if (data.hasOwnProperty('tokenId')) {
          obj['tokenId'] = _ApiClient["default"].convertToType(data['tokenId'], 'String');
        }
        if (data.hasOwnProperty('propertyId')) {
          obj['propertyId'] = _ApiClient["default"].convertToType(data['propertyId'], 'String');
        }
        if (data.hasOwnProperty('transactionType')) {
          obj['transactionType'] = _ApiClient["default"].convertToType(data['transactionType'], 'String');
        }
        if (data.hasOwnProperty('createdByTransactionId')) {
          obj['createdByTransactionId'] = _ApiClient["default"].convertToType(data['createdByTransactionId'], 'String');
        }
      }
      return obj;
    }
  }]);
  return TokensForwardingSuccessToken;
}();
/**
 * Specifies the name of the token.
 * @member {String} name
 */
TokensForwardingSuccessToken.prototype['name'] = undefined;

/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
TokensForwardingSuccessToken.prototype['symbol'] = undefined;

/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */
TokensForwardingSuccessToken.prototype['decimals'] = undefined;

/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
TokensForwardingSuccessToken.prototype['amount'] = undefined;

/**
 * Specifies the address of the contract.
 * @member {String} contractAddress
 */
TokensForwardingSuccessToken.prototype['contractAddress'] = undefined;

/**
 * Specifies the ID of the token.
 * @member {String} tokenId
 */
TokensForwardingSuccessToken.prototype['tokenId'] = undefined;

/**
 * Defines the ID of the property for Omni Layer.
 * @member {String} propertyId
 */
TokensForwardingSuccessToken.prototype['propertyId'] = undefined;

/**
 * Defines the type of the transaction.
 * @member {String} transactionType
 */
TokensForwardingSuccessToken.prototype['transactionType'] = undefined;

/**
 * The transaction ID used to create the token.
 * @member {String} createdByTransactionId
 */
TokensForwardingSuccessToken.prototype['createdByTransactionId'] = undefined;

// Implement TokensForwardingSuccessErc20 interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
_TokensForwardingSuccessErc["default"].prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
_TokensForwardingSuccessErc["default"].prototype['symbol'] = undefined;
/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */
_TokensForwardingSuccessErc["default"].prototype['decimals'] = undefined;
/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
_TokensForwardingSuccessErc["default"].prototype['amount'] = undefined;
/**
 * Defines the address of the contract.
 * @member {String} contractAddress
 */
_TokensForwardingSuccessErc["default"].prototype['contractAddress'] = undefined;
// Implement TokensForwardingSuccessErc721 interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
_TokensForwardingSuccessErc2["default"].prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
_TokensForwardingSuccessErc2["default"].prototype['symbol'] = undefined;
/**
 * Specifies the ID of the token.
 * @member {String} tokenId
 */
_TokensForwardingSuccessErc2["default"].prototype['tokenId'] = undefined;
/**
 * Specifies the address of the contract.
 * @member {String} contractAddress
 */
_TokensForwardingSuccessErc2["default"].prototype['contractAddress'] = undefined;
// Implement TokensForwardingSuccessOmni interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
_TokensForwardingSuccessOmni["default"].prototype['name'] = undefined;
/**
 * Defines the ID of the property for Omni Layer.
 * @member {String} propertyId
 */
_TokensForwardingSuccessOmni["default"].prototype['propertyId'] = undefined;
/**
 * Defines the type of the transaction.
 * @member {String} transactionType
 */
_TokensForwardingSuccessOmni["default"].prototype['transactionType'] = undefined;
/**
 * The transaction ID used to create the token.
 * @member {String} createdByTransactionId
 */
_TokensForwardingSuccessOmni["default"].prototype['createdByTransactionId'] = undefined;
/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
_TokensForwardingSuccessOmni["default"].prototype['amount'] = undefined;
var _default = TokensForwardingSuccessToken;
exports["default"] = _default;