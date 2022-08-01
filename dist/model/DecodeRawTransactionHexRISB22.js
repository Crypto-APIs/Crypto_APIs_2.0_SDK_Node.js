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
 * The DecodeRawTransactionHexRISB22 model module.
 * @module model/DecodeRawTransactionHexRISB22
 * @version 1.7.2
 */
var DecodeRawTransactionHexRISB22 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeRawTransactionHexRISB22</code>.
   * Binance Smart Chain
   * @alias module:model/DecodeRawTransactionHexRISB22
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param recipient {String} The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
   * @param sender {String} Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
   * @param type {Number} Specifies the transaction type as one from three options: if response returns a `\"0\"` it means the raw transaction includes legacy transaction data, if it is `\"1\"` - includes access lists for EIP2930, and if it is `\"2\"` - EIP1559 data.
   */
  function DecodeRawTransactionHexRISB22(gasLimit, nonce, recipient, sender, type) {
    _classCallCheck(this, DecodeRawTransactionHexRISB22);

    DecodeRawTransactionHexRISB22.initialize(this, gasLimit, nonce, recipient, sender, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DecodeRawTransactionHexRISB22, null, [{
    key: "initialize",
    value: function initialize(obj, gasLimit, nonce, recipient, sender, type) {
      obj['gasLimit'] = gasLimit;
      obj['nonce'] = nonce;
      obj['recipient'] = recipient;
      obj['sender'] = sender;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>DecodeRawTransactionHexRISB22</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISB22} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISB22} The populated <code>DecodeRawTransactionHexRISB22</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodeRawTransactionHexRISB22();

        if (data.hasOwnProperty('approximateFee')) {
          obj['approximateFee'] = _ApiClient["default"].convertToType(data['approximateFee'], 'String');
        }

        if (data.hasOwnProperty('approximateMinimumRequiredFee')) {
          obj['approximateMinimumRequiredFee'] = _ApiClient["default"].convertToType(data['approximateMinimumRequiredFee'], 'String');
        }

        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }

        if (data.hasOwnProperty('gasPaidForData')) {
          obj['gasPaidForData'] = _ApiClient["default"].convertToType(data['gasPaidForData'], 'String');
        }

        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _ApiClient["default"].convertToType(data['gasPrice'], 'String');
        }

        if (data.hasOwnProperty('inputData')) {
          obj['inputData'] = _ApiClient["default"].convertToType(data['inputData'], 'String');
        }

        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'Number');
        }

        if (data.hasOwnProperty('r')) {
          obj['r'] = _ApiClient["default"].convertToType(data['r'], 'String');
        }

        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _ApiClient["default"].convertToType(data['recipient'], 'String');
        }

        if (data.hasOwnProperty('s')) {
          obj['s'] = _ApiClient["default"].convertToType(data['s'], 'String');
        }

        if (data.hasOwnProperty('sender')) {
          obj['sender'] = _ApiClient["default"].convertToType(data['sender'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'Number');
        }

        if (data.hasOwnProperty('v')) {
          obj['v'] = _ApiClient["default"].convertToType(data['v'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DecodeRawTransactionHexRISB22;
}();
/**
 * Defines the approximate fee value. When isConfirmed is True - Defines the amount of the transaction fee When isConfirmed is False - For ETH-based blockchains this attribute represents the max fee value.
 * @member {String} approximateFee
 */


DecodeRawTransactionHexRISB22.prototype['approximateFee'] = undefined;
/**
 * Defines the approximate minimum fee that is required for the transaction.
 * @member {String} approximateMinimumRequiredFee
 */

DecodeRawTransactionHexRISB22.prototype['approximateMinimumRequiredFee'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

DecodeRawTransactionHexRISB22.prototype['gasLimit'] = undefined;
/**
 * Represents the amount of gas paid for the data in the transaction.
 * @member {String} gasPaidForData
 */

DecodeRawTransactionHexRISB22.prototype['gasPaidForData'] = undefined;
/**
 * Represents the price offered to the miner to purchase this amount of gas.
 * @member {String} gasPrice
 */

DecodeRawTransactionHexRISB22.prototype['gasPrice'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

DecodeRawTransactionHexRISB22.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */

DecodeRawTransactionHexRISB22.prototype['nonce'] = undefined;
/**
 * Represents output of an ECDSA signature.
 * @member {String} r
 */

DecodeRawTransactionHexRISB22.prototype['r'] = undefined;
/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} recipient
 */

DecodeRawTransactionHexRISB22.prototype['recipient'] = undefined;
/**
 * Represents output of an ECDSA signature.
 * @member {String} s
 */

DecodeRawTransactionHexRISB22.prototype['s'] = undefined;
/**
 * Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
 * @member {String} sender
 */

DecodeRawTransactionHexRISB22.prototype['sender'] = undefined;
/**
 * Specifies the transaction type as one from three options: if response returns a `\"0\"` it means the raw transaction includes legacy transaction data, if it is `\"1\"` - includes access lists for EIP2930, and if it is `\"2\"` - EIP1559 data.
 * @member {Number} type
 */

DecodeRawTransactionHexRISB22.prototype['type'] = undefined;
/**
 * Defines the the recovery id.
 * @member {String} v
 */

DecodeRawTransactionHexRISB22.prototype['v'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */

DecodeRawTransactionHexRISB22.prototype['value'] = undefined;
var _default = DecodeRawTransactionHexRISB22;
exports["default"] = _default;