"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AddressTokensTransactionConfirmedEachConfirmationEthereumerc20token model module.
 * @module model/AddressTokensTransactionConfirmedEachConfirmationEthereumerc20token
 * @version 1.2.1
 */
var AddressTokensTransactionConfirmedEachConfirmationEthereumerc20token = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddressTokensTransactionConfirmedEachConfirmationEthereumerc20token</code>.
   * ethereumERC20Token
   * @alias module:model/AddressTokensTransactionConfirmedEachConfirmationEthereumerc20token
   * @param name {String} Specifies the name of the token.
   * @param symbol {String} Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
   * @param amount {String} Defines the amount of tokens sent with the confirmed transaction.
   * @param contractAddress {String} Defines the address of the contract.
   */
  function AddressTokensTransactionConfirmedEachConfirmationEthereumerc20token(name, symbol, amount, contractAddress) {
    _classCallCheck(this, AddressTokensTransactionConfirmedEachConfirmationEthereumerc20token);

    AddressTokensTransactionConfirmedEachConfirmationEthereumerc20token.initialize(this, name, symbol, amount, contractAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddressTokensTransactionConfirmedEachConfirmationEthereumerc20token, null, [{
    key: "initialize",
    value: function initialize(obj, name, symbol, amount, contractAddress) {
      obj['name'] = name;
      obj['symbol'] = symbol;
      obj['amount'] = amount;
      obj['contractAddress'] = contractAddress;
    }
    /**
     * Constructs a <code>AddressTokensTransactionConfirmedEachConfirmationEthereumerc20token</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressTokensTransactionConfirmedEachConfirmationEthereumerc20token} obj Optional instance to populate.
     * @return {module:model/AddressTokensTransactionConfirmedEachConfirmationEthereumerc20token} The populated <code>AddressTokensTransactionConfirmedEachConfirmationEthereumerc20token</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddressTokensTransactionConfirmedEachConfirmationEthereumerc20token();

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
      }

      return obj;
    }
  }]);

  return AddressTokensTransactionConfirmedEachConfirmationEthereumerc20token;
}();
/**
 * Specifies the name of the token.
 * @member {String} name
 */


AddressTokensTransactionConfirmedEachConfirmationEthereumerc20token.prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */

AddressTokensTransactionConfirmedEachConfirmationEthereumerc20token.prototype['symbol'] = undefined;
/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */

AddressTokensTransactionConfirmedEachConfirmationEthereumerc20token.prototype['decimals'] = undefined;
/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */

AddressTokensTransactionConfirmedEachConfirmationEthereumerc20token.prototype['amount'] = undefined;
/**
 * Defines the address of the contract.
 * @member {String} contractAddress
 */

AddressTokensTransactionConfirmedEachConfirmationEthereumerc20token.prototype['contractAddress'] = undefined;
var _default = AddressTokensTransactionConfirmedEachConfirmationEthereumerc20token;
exports["default"] = _default;