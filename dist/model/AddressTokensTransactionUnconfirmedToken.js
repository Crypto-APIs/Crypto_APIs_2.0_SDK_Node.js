"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AddressTokensTransactionUnconfirmedErc = _interopRequireDefault(require("./AddressTokensTransactionUnconfirmedErc20"));

var _AddressTokensTransactionUnconfirmedErc2 = _interopRequireDefault(require("./AddressTokensTransactionUnconfirmedErc721"));

var _AddressTokensTransactionUnconfirmedOmni = _interopRequireDefault(require("./AddressTokensTransactionUnconfirmedOmni"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The AddressTokensTransactionUnconfirmedToken model module.
 * @module model/AddressTokensTransactionUnconfirmedToken
 * @version 1.7.2
 */
var AddressTokensTransactionUnconfirmedToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddressTokensTransactionUnconfirmedToken</code>.
   * @alias module:model/AddressTokensTransactionUnconfirmedToken
   * @implements module:model/AddressTokensTransactionUnconfirmedErc20
   * @implements module:model/AddressTokensTransactionUnconfirmedErc721
   * @implements module:model/AddressTokensTransactionUnconfirmedOmni
   * @param name {String} Specifies the name of the token.
   * @param symbol {String} Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
   * @param amount {String} Defines the amount of tokens sent with the transaction that is pending confirmation.
   * @param contractAddress {String} Specifies the address of the contract.
   * @param tokenId {String} Specifies the unique ID of the token.
   * @param propertyId {String} Defines the ID of the property for Omni Layer.
   * @param transactionType {String} Defines the type of the transaction made.
   * @param createdByTransactionId {String} The transaction ID used to create the token.
   */
  function AddressTokensTransactionUnconfirmedToken(name, symbol, amount, contractAddress, tokenId, propertyId, transactionType, createdByTransactionId) {
    _classCallCheck(this, AddressTokensTransactionUnconfirmedToken);

    _AddressTokensTransactionUnconfirmedErc["default"].initialize(this, name, symbol, amount, contractAddress);

    _AddressTokensTransactionUnconfirmedErc2["default"].initialize(this, name, symbol, tokenId, contractAddress);

    _AddressTokensTransactionUnconfirmedOmni["default"].initialize(this, name, propertyId, transactionType, createdByTransactionId, amount);

    AddressTokensTransactionUnconfirmedToken.initialize(this, name, symbol, amount, contractAddress, tokenId, propertyId, transactionType, createdByTransactionId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddressTokensTransactionUnconfirmedToken, null, [{
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
     * Constructs a <code>AddressTokensTransactionUnconfirmedToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressTokensTransactionUnconfirmedToken} obj Optional instance to populate.
     * @return {module:model/AddressTokensTransactionUnconfirmedToken} The populated <code>AddressTokensTransactionUnconfirmedToken</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddressTokensTransactionUnconfirmedToken();

        _AddressTokensTransactionUnconfirmedErc["default"].constructFromObject(data, obj);

        _AddressTokensTransactionUnconfirmedErc2["default"].constructFromObject(data, obj);

        _AddressTokensTransactionUnconfirmedOmni["default"].constructFromObject(data, obj);

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

  return AddressTokensTransactionUnconfirmedToken;
}();
/**
 * Specifies the name of the token.
 * @member {String} name
 */


AddressTokensTransactionUnconfirmedToken.prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */

AddressTokensTransactionUnconfirmedToken.prototype['symbol'] = undefined;
/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */

AddressTokensTransactionUnconfirmedToken.prototype['decimals'] = undefined;
/**
 * Defines the amount of tokens sent with the transaction that is pending confirmation.
 * @member {String} amount
 */

AddressTokensTransactionUnconfirmedToken.prototype['amount'] = undefined;
/**
 * Specifies the address of the contract.
 * @member {String} contractAddress
 */

AddressTokensTransactionUnconfirmedToken.prototype['contractAddress'] = undefined;
/**
 * Specifies the unique ID of the token.
 * @member {String} tokenId
 */

AddressTokensTransactionUnconfirmedToken.prototype['tokenId'] = undefined;
/**
 * Defines the ID of the property for Omni Layer.
 * @member {String} propertyId
 */

AddressTokensTransactionUnconfirmedToken.prototype['propertyId'] = undefined;
/**
 * Defines the type of the transaction made.
 * @member {String} transactionType
 */

AddressTokensTransactionUnconfirmedToken.prototype['transactionType'] = undefined;
/**
 * The transaction ID used to create the token.
 * @member {String} createdByTransactionId
 */

AddressTokensTransactionUnconfirmedToken.prototype['createdByTransactionId'] = undefined; // Implement AddressTokensTransactionUnconfirmedErc20 interface:

/**
 * Specifies the name of the token.
 * @member {String} name
 */

_AddressTokensTransactionUnconfirmedErc["default"].prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */

_AddressTokensTransactionUnconfirmedErc["default"].prototype['symbol'] = undefined;
/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */

_AddressTokensTransactionUnconfirmedErc["default"].prototype['decimals'] = undefined;
/**
 * Defines the amount of tokens sent with the transaction that is pending confirmation.
 * @member {String} amount
 */

_AddressTokensTransactionUnconfirmedErc["default"].prototype['amount'] = undefined;
/**
 * Defines the address of the contract.
 * @member {String} contractAddress
 */

_AddressTokensTransactionUnconfirmedErc["default"].prototype['contractAddress'] = undefined; // Implement AddressTokensTransactionUnconfirmedErc721 interface:

/**
 * Specifies the name of the token.
 * @member {String} name
 */

_AddressTokensTransactionUnconfirmedErc2["default"].prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */

_AddressTokensTransactionUnconfirmedErc2["default"].prototype['symbol'] = undefined;
/**
 * Specifies the unique ID of the token.
 * @member {String} tokenId
 */

_AddressTokensTransactionUnconfirmedErc2["default"].prototype['tokenId'] = undefined;
/**
 * Specifies the address of the contract.
 * @member {String} contractAddress
 */

_AddressTokensTransactionUnconfirmedErc2["default"].prototype['contractAddress'] = undefined; // Implement AddressTokensTransactionUnconfirmedOmni interface:

/**
 * Specifies the name of the token.
 * @member {String} name
 */

_AddressTokensTransactionUnconfirmedOmni["default"].prototype['name'] = undefined;
/**
 * Defines the ID of the property for Omni Layer.
 * @member {String} propertyId
 */

_AddressTokensTransactionUnconfirmedOmni["default"].prototype['propertyId'] = undefined;
/**
 * Defines the type of the transaction made.
 * @member {String} transactionType
 */

_AddressTokensTransactionUnconfirmedOmni["default"].prototype['transactionType'] = undefined;
/**
 * The transaction ID used to create the token.
 * @member {String} createdByTransactionId
 */

_AddressTokensTransactionUnconfirmedOmni["default"].prototype['createdByTransactionId'] = undefined;
/**
 * Defines the amount of tokens sent with the transaction that is pending confirmation.
 * @member {String} amount
 */

_AddressTokensTransactionUnconfirmedOmni["default"].prototype['amount'] = undefined;
var _default = AddressTokensTransactionUnconfirmedToken;
exports["default"] = _default;