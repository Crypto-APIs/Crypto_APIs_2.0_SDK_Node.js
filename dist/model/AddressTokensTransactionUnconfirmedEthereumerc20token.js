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
 * The AddressTokensTransactionUnconfirmedEthereumerc20token model module.
 * @module model/AddressTokensTransactionUnconfirmedEthereumerc20token
 * @version 1.1.0
 */
var AddressTokensTransactionUnconfirmedEthereumerc20token = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddressTokensTransactionUnconfirmedEthereumerc20token</code>.
   * ethereumERC20Token
   * @alias module:model/AddressTokensTransactionUnconfirmedEthereumerc20token
   * @param name {String} Specifies the name of the token.
   * @param symbol {String} Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
   * @param amount {String} Defines the amount of tokens sent with the transaction that is pending confirmation.
   * @param contractAddress {String} Defines the address of the contract.
   */
  function AddressTokensTransactionUnconfirmedEthereumerc20token(name, symbol, amount, contractAddress) {
    _classCallCheck(this, AddressTokensTransactionUnconfirmedEthereumerc20token);

    AddressTokensTransactionUnconfirmedEthereumerc20token.initialize(this, name, symbol, amount, contractAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddressTokensTransactionUnconfirmedEthereumerc20token, null, [{
    key: "initialize",
    value: function initialize(obj, name, symbol, amount, contractAddress) {
      obj['name'] = name;
      obj['symbol'] = symbol;
      obj['amount'] = amount;
      obj['contractAddress'] = contractAddress;
    }
    /**
     * Constructs a <code>AddressTokensTransactionUnconfirmedEthereumerc20token</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressTokensTransactionUnconfirmedEthereumerc20token} obj Optional instance to populate.
     * @return {module:model/AddressTokensTransactionUnconfirmedEthereumerc20token} The populated <code>AddressTokensTransactionUnconfirmedEthereumerc20token</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddressTokensTransactionUnconfirmedEthereumerc20token();

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

  return AddressTokensTransactionUnconfirmedEthereumerc20token;
}();
/**
 * Specifies the name of the token.
 * @member {String} name
 */


AddressTokensTransactionUnconfirmedEthereumerc20token.prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */

AddressTokensTransactionUnconfirmedEthereumerc20token.prototype['symbol'] = undefined;
/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */

AddressTokensTransactionUnconfirmedEthereumerc20token.prototype['decimals'] = undefined;
/**
 * Defines the amount of tokens sent with the transaction that is pending confirmation.
 * @member {String} amount
 */

AddressTokensTransactionUnconfirmedEthereumerc20token.prototype['amount'] = undefined;
/**
 * Defines the address of the contract.
 * @member {String} contractAddress
 */

AddressTokensTransactionUnconfirmedEthereumerc20token.prototype['contractAddress'] = undefined;
var _default = AddressTokensTransactionUnconfirmedEthereumerc20token;
exports["default"] = _default;