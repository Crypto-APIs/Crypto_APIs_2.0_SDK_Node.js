"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AddressTokensTransactionConfirmedBep = _interopRequireDefault(require("./AddressTokensTransactionConfirmedBep20"));
var _AddressTokensTransactionConfirmedErc = _interopRequireDefault(require("./AddressTokensTransactionConfirmedErc20"));
var _AddressTokensTransactionConfirmedErc2 = _interopRequireDefault(require("./AddressTokensTransactionConfirmedErc721"));
var _AddressTokensTransactionConfirmedOmni = _interopRequireDefault(require("./AddressTokensTransactionConfirmedOmni"));
var _AddressTokensTransactionConfirmedTrc = _interopRequireDefault(require("./AddressTokensTransactionConfirmedTrc20"));
var _AddressTokensTransactionConfirmedTrc2 = _interopRequireDefault(require("./AddressTokensTransactionConfirmedTrc721"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The AddressTokensTransactionConfirmedToken model module.
 * @module model/AddressTokensTransactionConfirmedToken
 * @version 1.13.0
 */
var AddressTokensTransactionConfirmedToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddressTokensTransactionConfirmedToken</code>.
   * @alias module:model/AddressTokensTransactionConfirmedToken
   * @implements module:model/AddressTokensTransactionConfirmedErc20
   * @implements module:model/AddressTokensTransactionConfirmedErc721
   * @implements module:model/AddressTokensTransactionConfirmedOmni
   * @implements module:model/AddressTokensTransactionConfirmedBep20
   * @implements module:model/AddressTokensTransactionConfirmedTrc20
   * @implements module:model/AddressTokensTransactionConfirmedTrc721
   * @param name {String} 
   * @param symbol {String} 
   * @param amount {String} 
   * @param contractAddress {String} 
   * @param tokenId {String} 
   * @param propertyId {String} Defines the ID of the property for Omni Layer.
   * @param transactionType {String} Defines the type of the transaction.
   * @param createdByTransactionId {String} The transaction ID used to create the token.
   */
  function AddressTokensTransactionConfirmedToken(name, symbol, amount, contractAddress, tokenId, propertyId, transactionType, createdByTransactionId) {
    _classCallCheck(this, AddressTokensTransactionConfirmedToken);
    _AddressTokensTransactionConfirmedErc["default"].initialize(this, name, symbol, amount, contractAddress);
    _AddressTokensTransactionConfirmedErc2["default"].initialize(this, name, symbol, tokenId, contractAddress);
    _AddressTokensTransactionConfirmedOmni["default"].initialize(this, name, propertyId, transactionType, createdByTransactionId, amount);
    _AddressTokensTransactionConfirmedBep["default"].initialize(this, name, symbol, amount, contractAddress);
    _AddressTokensTransactionConfirmedTrc["default"].initialize(this, name, symbol, amount, contractAddress);
    _AddressTokensTransactionConfirmedTrc2["default"].initialize(this, name, symbol, tokenId, contractAddress);
    AddressTokensTransactionConfirmedToken.initialize(this, name, symbol, amount, contractAddress, tokenId, propertyId, transactionType, createdByTransactionId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AddressTokensTransactionConfirmedToken, null, [{
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
     * Constructs a <code>AddressTokensTransactionConfirmedToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressTokensTransactionConfirmedToken} obj Optional instance to populate.
     * @return {module:model/AddressTokensTransactionConfirmedToken} The populated <code>AddressTokensTransactionConfirmedToken</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddressTokensTransactionConfirmedToken();
        _AddressTokensTransactionConfirmedErc["default"].constructFromObject(data, obj);
        _AddressTokensTransactionConfirmedErc2["default"].constructFromObject(data, obj);
        _AddressTokensTransactionConfirmedOmni["default"].constructFromObject(data, obj);
        _AddressTokensTransactionConfirmedBep["default"].constructFromObject(data, obj);
        _AddressTokensTransactionConfirmedTrc["default"].constructFromObject(data, obj);
        _AddressTokensTransactionConfirmedTrc2["default"].constructFromObject(data, obj);
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
  return AddressTokensTransactionConfirmedToken;
}();
/**
 * @member {String} name
 */
AddressTokensTransactionConfirmedToken.prototype['name'] = undefined;

/**
 * @member {String} symbol
 */
AddressTokensTransactionConfirmedToken.prototype['symbol'] = undefined;

/**
 * @member {String} decimals
 */
AddressTokensTransactionConfirmedToken.prototype['decimals'] = undefined;

/**
 * @member {String} amount
 */
AddressTokensTransactionConfirmedToken.prototype['amount'] = undefined;

/**
 * @member {String} contractAddress
 */
AddressTokensTransactionConfirmedToken.prototype['contractAddress'] = undefined;

/**
 * @member {String} tokenId
 */
AddressTokensTransactionConfirmedToken.prototype['tokenId'] = undefined;

/**
 * Defines the ID of the property for Omni Layer.
 * @member {String} propertyId
 */
AddressTokensTransactionConfirmedToken.prototype['propertyId'] = undefined;

/**
 * Defines the type of the transaction.
 * @member {String} transactionType
 */
AddressTokensTransactionConfirmedToken.prototype['transactionType'] = undefined;

/**
 * The transaction ID used to create the token.
 * @member {String} createdByTransactionId
 */
AddressTokensTransactionConfirmedToken.prototype['createdByTransactionId'] = undefined;

// Implement AddressTokensTransactionConfirmedErc20 interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
_AddressTokensTransactionConfirmedErc["default"].prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
_AddressTokensTransactionConfirmedErc["default"].prototype['symbol'] = undefined;
/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */
_AddressTokensTransactionConfirmedErc["default"].prototype['decimals'] = undefined;
/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
_AddressTokensTransactionConfirmedErc["default"].prototype['amount'] = undefined;
/**
 * Defines the address of the contract.
 * @member {String} contractAddress
 */
_AddressTokensTransactionConfirmedErc["default"].prototype['contractAddress'] = undefined;
// Implement AddressTokensTransactionConfirmedErc721 interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
_AddressTokensTransactionConfirmedErc2["default"].prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
_AddressTokensTransactionConfirmedErc2["default"].prototype['symbol'] = undefined;
/**
 * Specifies the ID of the token.
 * @member {String} tokenId
 */
_AddressTokensTransactionConfirmedErc2["default"].prototype['tokenId'] = undefined;
/**
 * Specifies the address of the contract.
 * @member {String} contractAddress
 */
_AddressTokensTransactionConfirmedErc2["default"].prototype['contractAddress'] = undefined;
// Implement AddressTokensTransactionConfirmedOmni interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
_AddressTokensTransactionConfirmedOmni["default"].prototype['name'] = undefined;
/**
 * Defines the ID of the property for Omni Layer.
 * @member {String} propertyId
 */
_AddressTokensTransactionConfirmedOmni["default"].prototype['propertyId'] = undefined;
/**
 * Defines the type of the transaction.
 * @member {String} transactionType
 */
_AddressTokensTransactionConfirmedOmni["default"].prototype['transactionType'] = undefined;
/**
 * The transaction ID used to create the token.
 * @member {String} createdByTransactionId
 */
_AddressTokensTransactionConfirmedOmni["default"].prototype['createdByTransactionId'] = undefined;
/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
_AddressTokensTransactionConfirmedOmni["default"].prototype['amount'] = undefined;
// Implement AddressTokensTransactionConfirmedBep20 interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
_AddressTokensTransactionConfirmedBep["default"].prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
_AddressTokensTransactionConfirmedBep["default"].prototype['symbol'] = undefined;
/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */
_AddressTokensTransactionConfirmedBep["default"].prototype['decimals'] = undefined;
/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
_AddressTokensTransactionConfirmedBep["default"].prototype['amount'] = undefined;
/**
 * Defines the address of the contract.
 * @member {String} contractAddress
 */
_AddressTokensTransactionConfirmedBep["default"].prototype['contractAddress'] = undefined;
// Implement AddressTokensTransactionConfirmedTrc20 interface:
/**
 * @member {String} name
 */
_AddressTokensTransactionConfirmedTrc["default"].prototype['name'] = undefined;
/**
 * @member {String} symbol
 */
_AddressTokensTransactionConfirmedTrc["default"].prototype['symbol'] = undefined;
/**
 * @member {String} decimals
 */
_AddressTokensTransactionConfirmedTrc["default"].prototype['decimals'] = undefined;
/**
 * @member {String} amount
 */
_AddressTokensTransactionConfirmedTrc["default"].prototype['amount'] = undefined;
/**
 * @member {String} contractAddress
 */
_AddressTokensTransactionConfirmedTrc["default"].prototype['contractAddress'] = undefined;
// Implement AddressTokensTransactionConfirmedTrc721 interface:
/**
 * @member {String} name
 */
_AddressTokensTransactionConfirmedTrc2["default"].prototype['name'] = undefined;
/**
 * @member {String} symbol
 */
_AddressTokensTransactionConfirmedTrc2["default"].prototype['symbol'] = undefined;
/**
 * @member {String} tokenId
 */
_AddressTokensTransactionConfirmedTrc2["default"].prototype['tokenId'] = undefined;
/**
 * @member {String} contractAddress
 */
_AddressTokensTransactionConfirmedTrc2["default"].prototype['contractAddress'] = undefined;
var _default = AddressTokensTransactionConfirmedToken;
exports["default"] = _default;