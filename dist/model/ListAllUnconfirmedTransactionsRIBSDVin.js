"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListConfirmedTransactionsByAddressRIBSDScriptSig = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSDScriptSig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListAllUnconfirmedTransactionsRIBSDVin model module.
 * @module model/ListAllUnconfirmedTransactionsRIBSDVin
 * @version 1.4.0
 */
var ListAllUnconfirmedTransactionsRIBSDVin = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAllUnconfirmedTransactionsRIBSDVin</code>.
   * @alias module:model/ListAllUnconfirmedTransactionsRIBSDVin
   * @param addresses {Array.<String>} 
   * @param scriptSig {module:model/ListConfirmedTransactionsByAddressRIBSDScriptSig} 
   * @param sequence {Number} Represents the script sequence number.
   * @param txid {String} Represents the reference transaction identifier.
   * @param txinwitness {Array.<String>} 
   * @param value {String} Represents the sent/received amount.
   */
  function ListAllUnconfirmedTransactionsRIBSDVin(addresses, scriptSig, sequence, txid, txinwitness, value) {
    _classCallCheck(this, ListAllUnconfirmedTransactionsRIBSDVin);

    ListAllUnconfirmedTransactionsRIBSDVin.initialize(this, addresses, scriptSig, sequence, txid, txinwitness, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListAllUnconfirmedTransactionsRIBSDVin, null, [{
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
     * Constructs a <code>ListAllUnconfirmedTransactionsRIBSDVin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllUnconfirmedTransactionsRIBSDVin} obj Optional instance to populate.
     * @return {module:model/ListAllUnconfirmedTransactionsRIBSDVin} The populated <code>ListAllUnconfirmedTransactionsRIBSDVin</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAllUnconfirmedTransactionsRIBSDVin();

        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], ['String']);
        }

        if (data.hasOwnProperty('scriptSig')) {
          obj['scriptSig'] = _ListConfirmedTransactionsByAddressRIBSDScriptSig["default"].constructFromObject(data['scriptSig']);
        }

        if (data.hasOwnProperty('sequence')) {
          obj['sequence'] = _ApiClient["default"].convertToType(data['sequence'], 'Number');
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

  return ListAllUnconfirmedTransactionsRIBSDVin;
}();
/**
 * @member {Array.<String>} addresses
 */


ListAllUnconfirmedTransactionsRIBSDVin.prototype['addresses'] = undefined;
/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSDScriptSig} scriptSig
 */

ListAllUnconfirmedTransactionsRIBSDVin.prototype['scriptSig'] = undefined;
/**
 * Represents the script sequence number.
 * @member {Number} sequence
 */

ListAllUnconfirmedTransactionsRIBSDVin.prototype['sequence'] = undefined;
/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */

ListAllUnconfirmedTransactionsRIBSDVin.prototype['txid'] = undefined;
/**
 * @member {Array.<String>} txinwitness
 */

ListAllUnconfirmedTransactionsRIBSDVin.prototype['txinwitness'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */

ListAllUnconfirmedTransactionsRIBSDVin.prototype['value'] = undefined;
/**
 * It refers to the index of the output address of this transaction. The index starts from 0.
 * @member {Number} vout
 */

ListAllUnconfirmedTransactionsRIBSDVin.prototype['vout'] = undefined;
var _default = ListAllUnconfirmedTransactionsRIBSDVin;
exports["default"] = _default;