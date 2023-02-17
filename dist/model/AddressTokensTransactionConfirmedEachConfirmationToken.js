"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AddressTokensTransactionConfirmedEachConfirmationBep = _interopRequireDefault(require("./AddressTokensTransactionConfirmedEachConfirmationBep20"));
var _AddressTokensTransactionConfirmedEachConfirmationErc = _interopRequireDefault(require("./AddressTokensTransactionConfirmedEachConfirmationErc20"));
var _AddressTokensTransactionConfirmedEachConfirmationErc2 = _interopRequireDefault(require("./AddressTokensTransactionConfirmedEachConfirmationErc721"));
var _AddressTokensTransactionConfirmedEachConfirmationOmni = _interopRequireDefault(require("./AddressTokensTransactionConfirmedEachConfirmationOmni"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The AddressTokensTransactionConfirmedEachConfirmationToken model module.
 * @module model/AddressTokensTransactionConfirmedEachConfirmationToken
 * @version 1.13.0
 */
var AddressTokensTransactionConfirmedEachConfirmationToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddressTokensTransactionConfirmedEachConfirmationToken</code>.
   * @alias module:model/AddressTokensTransactionConfirmedEachConfirmationToken
   * @implements module:model/AddressTokensTransactionConfirmedEachConfirmationErc20
   * @implements module:model/AddressTokensTransactionConfirmedEachConfirmationErc721
   * @implements module:model/AddressTokensTransactionConfirmedEachConfirmationOmni
   * @implements module:model/AddressTokensTransactionConfirmedEachConfirmationBep20
   * @param name {String} Specifies the name of the token.
   * @param symbol {String} Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
   * @param amount {String} Defines the amount of tokens sent with the confirmed transaction.
   * @param contractAddress {String} Defines the address of the contract.
   * @param tokenId {String} Specifies the ID of the token.
   * @param propertyId {String} Defines the ID of the property for Omni Layer.
   * @param transactionType {String} Defines the type of the transaction.
   * @param createdByTransactionId {String} The transaction ID used to create the token.
   */
  function AddressTokensTransactionConfirmedEachConfirmationToken(name, symbol, amount, contractAddress, tokenId, propertyId, transactionType, createdByTransactionId) {
    _classCallCheck(this, AddressTokensTransactionConfirmedEachConfirmationToken);
    _AddressTokensTransactionConfirmedEachConfirmationErc["default"].initialize(this, name, symbol, amount, contractAddress);
    _AddressTokensTransactionConfirmedEachConfirmationErc2["default"].initialize(this, name, symbol, tokenId, contractAddress);
    _AddressTokensTransactionConfirmedEachConfirmationOmni["default"].initialize(this, name, propertyId, transactionType, createdByTransactionId, amount);
    _AddressTokensTransactionConfirmedEachConfirmationBep["default"].initialize(this, name, symbol, amount, contractAddress);
    AddressTokensTransactionConfirmedEachConfirmationToken.initialize(this, name, symbol, amount, contractAddress, tokenId, propertyId, transactionType, createdByTransactionId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AddressTokensTransactionConfirmedEachConfirmationToken, null, [{
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
     * Constructs a <code>AddressTokensTransactionConfirmedEachConfirmationToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressTokensTransactionConfirmedEachConfirmationToken} obj Optional instance to populate.
     * @return {module:model/AddressTokensTransactionConfirmedEachConfirmationToken} The populated <code>AddressTokensTransactionConfirmedEachConfirmationToken</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddressTokensTransactionConfirmedEachConfirmationToken();
        _AddressTokensTransactionConfirmedEachConfirmationErc["default"].constructFromObject(data, obj);
        _AddressTokensTransactionConfirmedEachConfirmationErc2["default"].constructFromObject(data, obj);
        _AddressTokensTransactionConfirmedEachConfirmationOmni["default"].constructFromObject(data, obj);
        _AddressTokensTransactionConfirmedEachConfirmationBep["default"].constructFromObject(data, obj);
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
  return AddressTokensTransactionConfirmedEachConfirmationToken;
}();
/**
 * Specifies the name of the token.
 * @member {String} name
 */
AddressTokensTransactionConfirmedEachConfirmationToken.prototype['name'] = undefined;

/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
AddressTokensTransactionConfirmedEachConfirmationToken.prototype['symbol'] = undefined;

/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */
AddressTokensTransactionConfirmedEachConfirmationToken.prototype['decimals'] = undefined;

/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
AddressTokensTransactionConfirmedEachConfirmationToken.prototype['amount'] = undefined;

/**
 * Defines the address of the contract.
 * @member {String} contractAddress
 */
AddressTokensTransactionConfirmedEachConfirmationToken.prototype['contractAddress'] = undefined;

/**
 * Specifies the ID of the token.
 * @member {String} tokenId
 */
AddressTokensTransactionConfirmedEachConfirmationToken.prototype['tokenId'] = undefined;

/**
 * Defines the ID of the property for Omni Layer.
 * @member {String} propertyId
 */
AddressTokensTransactionConfirmedEachConfirmationToken.prototype['propertyId'] = undefined;

/**
 * Defines the type of the transaction.
 * @member {String} transactionType
 */
AddressTokensTransactionConfirmedEachConfirmationToken.prototype['transactionType'] = undefined;

/**
 * The transaction ID used to create the token.
 * @member {String} createdByTransactionId
 */
AddressTokensTransactionConfirmedEachConfirmationToken.prototype['createdByTransactionId'] = undefined;

// Implement AddressTokensTransactionConfirmedEachConfirmationErc20 interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
_AddressTokensTransactionConfirmedEachConfirmationErc["default"].prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
_AddressTokensTransactionConfirmedEachConfirmationErc["default"].prototype['symbol'] = undefined;
/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */
_AddressTokensTransactionConfirmedEachConfirmationErc["default"].prototype['decimals'] = undefined;
/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
_AddressTokensTransactionConfirmedEachConfirmationErc["default"].prototype['amount'] = undefined;
/**
 * Defines the address of the contract.
 * @member {String} contractAddress
 */
_AddressTokensTransactionConfirmedEachConfirmationErc["default"].prototype['contractAddress'] = undefined;
// Implement AddressTokensTransactionConfirmedEachConfirmationErc721 interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
_AddressTokensTransactionConfirmedEachConfirmationErc2["default"].prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
_AddressTokensTransactionConfirmedEachConfirmationErc2["default"].prototype['symbol'] = undefined;
/**
 * Specifies the ID of the token.
 * @member {String} tokenId
 */
_AddressTokensTransactionConfirmedEachConfirmationErc2["default"].prototype['tokenId'] = undefined;
/**
 * Specifies the address of the contract.
 * @member {String} contractAddress
 */
_AddressTokensTransactionConfirmedEachConfirmationErc2["default"].prototype['contractAddress'] = undefined;
// Implement AddressTokensTransactionConfirmedEachConfirmationOmni interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
_AddressTokensTransactionConfirmedEachConfirmationOmni["default"].prototype['name'] = undefined;
/**
 * Defines the ID of the property for Omni Layer.
 * @member {String} propertyId
 */
_AddressTokensTransactionConfirmedEachConfirmationOmni["default"].prototype['propertyId'] = undefined;
/**
 * Defines the type of the transaction.
 * @member {String} transactionType
 */
_AddressTokensTransactionConfirmedEachConfirmationOmni["default"].prototype['transactionType'] = undefined;
/**
 * The transaction ID used to create the token.
 * @member {String} createdByTransactionId
 */
_AddressTokensTransactionConfirmedEachConfirmationOmni["default"].prototype['createdByTransactionId'] = undefined;
/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
_AddressTokensTransactionConfirmedEachConfirmationOmni["default"].prototype['amount'] = undefined;
// Implement AddressTokensTransactionConfirmedEachConfirmationBep20 interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
_AddressTokensTransactionConfirmedEachConfirmationBep["default"].prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
_AddressTokensTransactionConfirmedEachConfirmationBep["default"].prototype['symbol'] = undefined;
/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */
_AddressTokensTransactionConfirmedEachConfirmationBep["default"].prototype['decimals'] = undefined;
/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
_AddressTokensTransactionConfirmedEachConfirmationBep["default"].prototype['amount'] = undefined;
/**
 * Defines the address of the contract.
 * @member {String} contractAddress
 */
_AddressTokensTransactionConfirmedEachConfirmationBep["default"].prototype['contractAddress'] = undefined;
var _default = AddressTokensTransactionConfirmedEachConfirmationToken;
exports["default"] = _default;