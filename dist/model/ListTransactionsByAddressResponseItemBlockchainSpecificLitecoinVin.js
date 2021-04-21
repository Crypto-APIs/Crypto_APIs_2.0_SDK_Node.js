"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinScriptSig = _interopRequireDefault(require("./ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinScriptSig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinVin model module.
 * @module model/ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinVin
 * @version 2.0.0
 */
var ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinVin = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinVin</code>.
   * @alias module:model/ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinVin
   * @param addresses {Array.<String>} 
   * @param scriptSig {module:model/ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinScriptSig} 
   * @param sequence {String} Represents the script sequence number.
   * @param txid {String} Represents the reference transaction identifier.
   * @param txinwitness {Array.<String>} 
   */
  function ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinVin(addresses, scriptSig, sequence, txid, txinwitness) {
    _classCallCheck(this, ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinVin);

    ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinVin.initialize(this, addresses, scriptSig, sequence, txid, txinwitness);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinVin, null, [{
    key: "initialize",
    value: function initialize(obj, addresses, scriptSig, sequence, txid, txinwitness) {
      obj['addresses'] = addresses;
      obj['scriptSig'] = scriptSig;
      obj['sequence'] = sequence;
      obj['txid'] = txid;
      obj['txinwitness'] = txinwitness;
    }
    /**
     * Constructs a <code>ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinVin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinVin} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinVin} The populated <code>ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinVin</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinVin();

        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], ['String']);
        }

        if (data.hasOwnProperty('coinbase')) {
          obj['coinbase'] = _ApiClient["default"].convertToType(data['coinbase'], 'String');
        }

        if (data.hasOwnProperty('scriptSig')) {
          obj['scriptSig'] = _ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinScriptSig["default"].constructFromObject(data['scriptSig']);
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

  return ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinVin;
}();
/**
 * @member {Array.<String>} addresses
 */


ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinVin.prototype['addresses'] = undefined;
/**
 * Represents the coinbase hex.
 * @member {String} coinbase
 */

ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinVin.prototype['coinbase'] = undefined;
/**
 * @member {module:model/ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinScriptSig} scriptSig
 */

ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinVin.prototype['scriptSig'] = undefined;
/**
 * Represents the script sequence number.
 * @member {String} sequence
 */

ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinVin.prototype['sequence'] = undefined;
/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */

ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinVin.prototype['txid'] = undefined;
/**
 * @member {Array.<String>} txinwitness
 */

ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinVin.prototype['txinwitness'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */

ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinVin.prototype['value'] = undefined;
/**
 * Defines the vout of the transaction output, i.e. which output to spend.
 * @member {Number} vout
 */

ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinVin.prototype['vout'] = undefined;
var _default = ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinVin;
exports["default"] = _default;