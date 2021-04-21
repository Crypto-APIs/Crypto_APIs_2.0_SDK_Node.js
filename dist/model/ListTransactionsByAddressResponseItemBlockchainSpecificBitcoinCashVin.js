"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinScriptSig = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinScriptSig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCashVin model module.
 * @module model/ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCashVin
 * @version 2.0.0
 */
var ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCashVin = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCashVin</code>.
   * @alias module:model/ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCashVin
   * @param addresses {Array.<String>} 
   * @param scriptSig {module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinScriptSig} 
   * @param sequence {String} Represents the script sequence number.
   * @param txid {String} Represents the reference transaction identifier.
   * @param txinwitness {Array.<String>} 
   * @param value {String} Represents the sent/received amount.
   */
  function ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCashVin(addresses, scriptSig, sequence, txid, txinwitness, value) {
    _classCallCheck(this, ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCashVin);

    ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCashVin.initialize(this, addresses, scriptSig, sequence, txid, txinwitness, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCashVin, null, [{
    key: "initialize",
    value: function initialize(obj, addresses, scriptSig, sequence, txid, txinwitness, value) {
      obj['addresses'] = addresses;
      obj['scriptSig'] = scriptSig;
      obj['sequence'] = sequence;
      obj['txid'] = txid;
      obj['txinwitness'] = txinwitness;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCashVin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCashVin} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCashVin} The populated <code>ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCashVin</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCashVin();

        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], ['String']);
        }

        if (data.hasOwnProperty('coinbase')) {
          obj['coinbase'] = _ApiClient["default"].convertToType(data['coinbase'], 'String');
        }

        if (data.hasOwnProperty('scriptSig')) {
          obj['scriptSig'] = _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinScriptSig["default"].constructFromObject(data['scriptSig']);
        }

        if (data.hasOwnProperty('sequence')) {
          obj['sequence'] = _ApiClient["default"].convertToType(data['sequence'], 'String');
        }

        if (data.hasOwnProperty('txid')) {
          obj['txid'] = _ApiClient["default"].convertToType(data['txid'], 'String');
        }

        if (data.hasOwnProperty('txinwitness')) {
          obj['txinwitness'] = _ApiClient["default"].convertToType(data['txinwitness'], ['String']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCashVin;
}();
/**
 * @member {Array.<String>} addresses
 */


ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCashVin.prototype['addresses'] = undefined;
/**
 * Represents the coinbase hex.
 * @member {String} coinbase
 */

ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCashVin.prototype['coinbase'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinScriptSig} scriptSig
 */

ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCashVin.prototype['scriptSig'] = undefined;
/**
 * Represents the script sequence number.
 * @member {String} sequence
 */

ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCashVin.prototype['sequence'] = undefined;
/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */

ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCashVin.prototype['txid'] = undefined;
/**
 * @member {Array.<String>} txinwitness
 */

ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCashVin.prototype['txinwitness'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */

ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCashVin.prototype['value'] = undefined;
/**
 * Defines the vout of the transaction output, i.e. which output to spend.
 * @member {Number} vout
 */

ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCashVin.prototype['vout'] = undefined;
var _default = ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCashVin;
exports["default"] = _default;