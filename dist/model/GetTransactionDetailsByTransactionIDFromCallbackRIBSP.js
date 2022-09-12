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
 * The GetTransactionDetailsByTransactionIDFromCallbackRIBSP model module.
 * @module model/GetTransactionDetailsByTransactionIDFromCallbackRIBSP
 * @version 1.8.0
 */
var GetTransactionDetailsByTransactionIDFromCallbackRIBSP = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSP</code>.
   * Polygon
   * @alias module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSP
   * @param amount {String} Representation of the amount value.
   * @param contract {String} Represents the specific transaction contract.
   * @param gas {String} Represents the price offered to the miner to purchase this amount of gas.
   * @param gasPrice {String} Represents the price offered to the miner to purchase this amount of gas.
   * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
   * @param input {String} Represents additional information that is required for the transaction.
   * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param recipients {String} Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
   * @param senders {String} Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
   * @param transactionStatus {String} Represents the status of this transaction.
   * @param txid {String} Represents the unique identifier of a transaction, i.e. it could be transactionId in UTXO-based protocols like Bitcoin, and transaction hash in Ethereum blockchain.
   */
  function GetTransactionDetailsByTransactionIDFromCallbackRIBSP(amount, contract, gas, gasPrice, gasUsed, input, nonce, recipients, senders, transactionStatus, txid) {
    _classCallCheck(this, GetTransactionDetailsByTransactionIDFromCallbackRIBSP);

    GetTransactionDetailsByTransactionIDFromCallbackRIBSP.initialize(this, amount, contract, gas, gasPrice, gasUsed, input, nonce, recipients, senders, transactionStatus, txid);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetTransactionDetailsByTransactionIDFromCallbackRIBSP, null, [{
    key: "initialize",
    value: function initialize(obj, amount, contract, gas, gasPrice, gasUsed, input, nonce, recipients, senders, transactionStatus, txid) {
      obj['amount'] = amount;
      obj['contract'] = contract;
      obj['gas'] = gas;
      obj['gasPrice'] = gasPrice;
      obj['gasUsed'] = gasUsed;
      obj['input'] = input;
      obj['nonce'] = nonce;
      obj['recipients'] = recipients;
      obj['senders'] = senders;
      obj['transactionStatus'] = transactionStatus;
      obj['txid'] = txid;
    }
    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSP</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSP} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSP} The populated <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSP</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionDetailsByTransactionIDFromCallbackRIBSP();

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }

        if (data.hasOwnProperty('contract')) {
          obj['contract'] = _ApiClient["default"].convertToType(data['contract'], 'String');
        }

        if (data.hasOwnProperty('gas')) {
          obj['gas'] = _ApiClient["default"].convertToType(data['gas'], 'String');
        }

        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _ApiClient["default"].convertToType(data['gasPrice'], 'String');
        }

        if (data.hasOwnProperty('gasUsed')) {
          obj['gasUsed'] = _ApiClient["default"].convertToType(data['gasUsed'], 'String');
        }

        if (data.hasOwnProperty('input')) {
          obj['input'] = _ApiClient["default"].convertToType(data['input'], 'String');
        }

        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'Number');
        }

        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], 'String');
        }

        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _ApiClient["default"].convertToType(data['senders'], 'String');
        }

        if (data.hasOwnProperty('transactionStatus')) {
          obj['transactionStatus'] = _ApiClient["default"].convertToType(data['transactionStatus'], 'String');
        }

        if (data.hasOwnProperty('txid')) {
          obj['txid'] = _ApiClient["default"].convertToType(data['txid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetTransactionDetailsByTransactionIDFromCallbackRIBSP;
}();
/**
 * Representation of the amount value.
 * @member {String} amount
 */


GetTransactionDetailsByTransactionIDFromCallbackRIBSP.prototype['amount'] = undefined;
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */

GetTransactionDetailsByTransactionIDFromCallbackRIBSP.prototype['contract'] = undefined;
/**
 * Represents the price offered to the miner to purchase this amount of gas.
 * @member {String} gas
 */

GetTransactionDetailsByTransactionIDFromCallbackRIBSP.prototype['gas'] = undefined;
/**
 * Represents the price offered to the miner to purchase this amount of gas.
 * @member {String} gasPrice
 */

GetTransactionDetailsByTransactionIDFromCallbackRIBSP.prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */

GetTransactionDetailsByTransactionIDFromCallbackRIBSP.prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} input
 */

GetTransactionDetailsByTransactionIDFromCallbackRIBSP.prototype['input'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */

GetTransactionDetailsByTransactionIDFromCallbackRIBSP.prototype['nonce'] = undefined;
/**
 * Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {String} recipients
 */

GetTransactionDetailsByTransactionIDFromCallbackRIBSP.prototype['recipients'] = undefined;
/**
 * Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {String} senders
 */

GetTransactionDetailsByTransactionIDFromCallbackRIBSP.prototype['senders'] = undefined;
/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */

GetTransactionDetailsByTransactionIDFromCallbackRIBSP.prototype['transactionStatus'] = undefined;
/**
 * Represents the unique identifier of a transaction, i.e. it could be transactionId in UTXO-based protocols like Bitcoin, and transaction hash in Ethereum blockchain.
 * @member {String} txid
 */

GetTransactionDetailsByTransactionIDFromCallbackRIBSP.prototype['txid'] = undefined;
var _default = GetTransactionDetailsByTransactionIDFromCallbackRIBSP;
exports["default"] = _default;