"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The AddressTokensTransactionConfirmedEachConfirmationErc20 model module.
 * @module model/AddressTokensTransactionConfirmedEachConfirmationErc20
 * @version 1.7.2
 */
var AddressTokensTransactionConfirmedEachConfirmationErc20 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddressTokensTransactionConfirmedEachConfirmationErc20</code>.
   * ERC-20
   * @alias module:model/AddressTokensTransactionConfirmedEachConfirmationErc20
   * @param name {String} Specifies the name of the token.
   * @param symbol {String} Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
   * @param amount {String} Defines the amount of tokens sent with the confirmed transaction.
   * @param contractAddress {String} Defines the address of the contract.
   */
  function AddressTokensTransactionConfirmedEachConfirmationErc20(name, symbol, amount, contractAddress) {
    _classCallCheck(this, AddressTokensTransactionConfirmedEachConfirmationErc20);

    AddressTokensTransactionConfirmedEachConfirmationErc20.initialize(this, name, symbol, amount, contractAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddressTokensTransactionConfirmedEachConfirmationErc20, null, [{
    key: "initialize",
    value: function initialize(obj, name, symbol, amount, contractAddress) {
      obj['name'] = name;
      obj['symbol'] = symbol;
      obj['amount'] = amount;
      obj['contractAddress'] = contractAddress;
    }
    /**
     * Constructs a <code>AddressTokensTransactionConfirmedEachConfirmationErc20</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressTokensTransactionConfirmedEachConfirmationErc20} obj Optional instance to populate.
     * @return {module:model/AddressTokensTransactionConfirmedEachConfirmationErc20} The populated <code>AddressTokensTransactionConfirmedEachConfirmationErc20</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddressTokensTransactionConfirmedEachConfirmationErc20();

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

  return AddressTokensTransactionConfirmedEachConfirmationErc20;
}();
/**
 * Specifies the name of the token.
 * @member {String} name
 */


AddressTokensTransactionConfirmedEachConfirmationErc20.prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */

AddressTokensTransactionConfirmedEachConfirmationErc20.prototype['symbol'] = undefined;
/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */

AddressTokensTransactionConfirmedEachConfirmationErc20.prototype['decimals'] = undefined;
/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */

AddressTokensTransactionConfirmedEachConfirmationErc20.prototype['amount'] = undefined;
/**
 * Defines the address of the contract.
 * @member {String} contractAddress
 */

AddressTokensTransactionConfirmedEachConfirmationErc20.prototype['contractAddress'] = undefined;
var _default = AddressTokensTransactionConfirmedEachConfirmationErc20;
exports["default"] = _default;