"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ConfirmedTokensTransactionForCertainAmountOrHigherBep = _interopRequireDefault(require("./ConfirmedTokensTransactionForCertainAmountOrHigherBep20"));
var _ConfirmedTokensTransactionForCertainAmountOrHigherErc = _interopRequireDefault(require("./ConfirmedTokensTransactionForCertainAmountOrHigherErc20"));
var _ConfirmedTokensTransactionForCertainAmountOrHigherErc2 = _interopRequireDefault(require("./ConfirmedTokensTransactionForCertainAmountOrHigherErc721"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ConfirmedTokensTransactionForCertainAmountOrHigherToken model module.
 * @module model/ConfirmedTokensTransactionForCertainAmountOrHigherToken
 * @version 1.13.0
 */
var ConfirmedTokensTransactionForCertainAmountOrHigherToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConfirmedTokensTransactionForCertainAmountOrHigherToken</code>.
   * @alias module:model/ConfirmedTokensTransactionForCertainAmountOrHigherToken
   * @implements module:model/ConfirmedTokensTransactionForCertainAmountOrHigherErc20
   * @implements module:model/ConfirmedTokensTransactionForCertainAmountOrHigherErc721
   * @implements module:model/ConfirmedTokensTransactionForCertainAmountOrHigherBep20
   * @param name {String} Specifies the name of the token.
   * @param symbol {String} Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
   * @param amount {String} Defines the amount of tokens sent with the confirmed transaction.
   * @param contractAddress {String} Defines the address of the contract.
   * @param tokenId {String} Specifies the ID of the token.
   */
  function ConfirmedTokensTransactionForCertainAmountOrHigherToken(name, symbol, amount, contractAddress, tokenId) {
    _classCallCheck(this, ConfirmedTokensTransactionForCertainAmountOrHigherToken);
    _ConfirmedTokensTransactionForCertainAmountOrHigherErc["default"].initialize(this, name, symbol, amount, contractAddress);
    _ConfirmedTokensTransactionForCertainAmountOrHigherErc2["default"].initialize(this, name, symbol, tokenId, contractAddress);
    _ConfirmedTokensTransactionForCertainAmountOrHigherBep["default"].initialize(this, name, symbol, amount, contractAddress);
    ConfirmedTokensTransactionForCertainAmountOrHigherToken.initialize(this, name, symbol, amount, contractAddress, tokenId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ConfirmedTokensTransactionForCertainAmountOrHigherToken, null, [{
    key: "initialize",
    value: function initialize(obj, name, symbol, amount, contractAddress, tokenId) {
      obj['name'] = name;
      obj['symbol'] = symbol;
      obj['amount'] = amount;
      obj['contractAddress'] = contractAddress;
      obj['tokenId'] = tokenId;
    }

    /**
     * Constructs a <code>ConfirmedTokensTransactionForCertainAmountOrHigherToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfirmedTokensTransactionForCertainAmountOrHigherToken} obj Optional instance to populate.
     * @return {module:model/ConfirmedTokensTransactionForCertainAmountOrHigherToken} The populated <code>ConfirmedTokensTransactionForCertainAmountOrHigherToken</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConfirmedTokensTransactionForCertainAmountOrHigherToken();
        _ConfirmedTokensTransactionForCertainAmountOrHigherErc["default"].constructFromObject(data, obj);
        _ConfirmedTokensTransactionForCertainAmountOrHigherErc2["default"].constructFromObject(data, obj);
        _ConfirmedTokensTransactionForCertainAmountOrHigherBep["default"].constructFromObject(data, obj);
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
      }
      return obj;
    }
  }]);
  return ConfirmedTokensTransactionForCertainAmountOrHigherToken;
}();
/**
 * Specifies the name of the token.
 * @member {String} name
 */
ConfirmedTokensTransactionForCertainAmountOrHigherToken.prototype['name'] = undefined;

/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
ConfirmedTokensTransactionForCertainAmountOrHigherToken.prototype['symbol'] = undefined;

/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */
ConfirmedTokensTransactionForCertainAmountOrHigherToken.prototype['decimals'] = undefined;

/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
ConfirmedTokensTransactionForCertainAmountOrHigherToken.prototype['amount'] = undefined;

/**
 * Defines the address of the contract.
 * @member {String} contractAddress
 */
ConfirmedTokensTransactionForCertainAmountOrHigherToken.prototype['contractAddress'] = undefined;

/**
 * Specifies the ID of the token.
 * @member {String} tokenId
 */
ConfirmedTokensTransactionForCertainAmountOrHigherToken.prototype['tokenId'] = undefined;

// Implement ConfirmedTokensTransactionForCertainAmountOrHigherErc20 interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
_ConfirmedTokensTransactionForCertainAmountOrHigherErc["default"].prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
_ConfirmedTokensTransactionForCertainAmountOrHigherErc["default"].prototype['symbol'] = undefined;
/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */
_ConfirmedTokensTransactionForCertainAmountOrHigherErc["default"].prototype['decimals'] = undefined;
/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
_ConfirmedTokensTransactionForCertainAmountOrHigherErc["default"].prototype['amount'] = undefined;
/**
 * Defines the address of the contract.
 * @member {String} contractAddress
 */
_ConfirmedTokensTransactionForCertainAmountOrHigherErc["default"].prototype['contractAddress'] = undefined;
// Implement ConfirmedTokensTransactionForCertainAmountOrHigherErc721 interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
_ConfirmedTokensTransactionForCertainAmountOrHigherErc2["default"].prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
_ConfirmedTokensTransactionForCertainAmountOrHigherErc2["default"].prototype['symbol'] = undefined;
/**
 * Specifies the ID of the token.
 * @member {String} tokenId
 */
_ConfirmedTokensTransactionForCertainAmountOrHigherErc2["default"].prototype['tokenId'] = undefined;
/**
 * Specifies the address of the contract.
 * @member {String} contractAddress
 */
_ConfirmedTokensTransactionForCertainAmountOrHigherErc2["default"].prototype['contractAddress'] = undefined;
// Implement ConfirmedTokensTransactionForCertainAmountOrHigherBep20 interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
_ConfirmedTokensTransactionForCertainAmountOrHigherBep["default"].prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
_ConfirmedTokensTransactionForCertainAmountOrHigherBep["default"].prototype['symbol'] = undefined;
/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */
_ConfirmedTokensTransactionForCertainAmountOrHigherBep["default"].prototype['decimals'] = undefined;
/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
_ConfirmedTokensTransactionForCertainAmountOrHigherBep["default"].prototype['amount'] = undefined;
/**
 * Defines the address of the contract.
 * @member {String} contractAddress
 */
_ConfirmedTokensTransactionForCertainAmountOrHigherBep["default"].prototype['contractAddress'] = undefined;
var _default = ConfirmedTokensTransactionForCertainAmountOrHigherToken;
exports["default"] = _default;