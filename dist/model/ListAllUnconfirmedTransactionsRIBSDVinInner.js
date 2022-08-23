"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListConfirmedTransactionsByAddressRIBSDVinInnerScriptSig = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSDVinInnerScriptSig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListAllUnconfirmedTransactionsRIBSDVinInner model module.
 * @module model/ListAllUnconfirmedTransactionsRIBSDVinInner
 * @version 1.7.3
 */
var ListAllUnconfirmedTransactionsRIBSDVinInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAllUnconfirmedTransactionsRIBSDVinInner</code>.
   * @alias module:model/ListAllUnconfirmedTransactionsRIBSDVinInner
   * @param addresses {Array.<String>} 
   * @param scriptSig {module:model/ListConfirmedTransactionsByAddressRIBSDVinInnerScriptSig} 
   * @param sequence {Number} Represents the script sequence number.
   * @param txid {String} Represents the reference transaction identifier.
   * @param txinwitness {Array.<String>} 
   * @param value {String} Represents the sent/received amount.
   */
  function ListAllUnconfirmedTransactionsRIBSDVinInner(addresses, scriptSig, sequence, txid, txinwitness, value) {
    _classCallCheck(this, ListAllUnconfirmedTransactionsRIBSDVinInner);

    ListAllUnconfirmedTransactionsRIBSDVinInner.initialize(this, addresses, scriptSig, sequence, txid, txinwitness, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListAllUnconfirmedTransactionsRIBSDVinInner, null, [{
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
     * Constructs a <code>ListAllUnconfirmedTransactionsRIBSDVinInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllUnconfirmedTransactionsRIBSDVinInner} obj Optional instance to populate.
     * @return {module:model/ListAllUnconfirmedTransactionsRIBSDVinInner} The populated <code>ListAllUnconfirmedTransactionsRIBSDVinInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAllUnconfirmedTransactionsRIBSDVinInner();

        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], ['String']);
        }

        if (data.hasOwnProperty('scriptSig')) {
          obj['scriptSig'] = _ListConfirmedTransactionsByAddressRIBSDVinInnerScriptSig["default"].constructFromObject(data['scriptSig']);
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

  return ListAllUnconfirmedTransactionsRIBSDVinInner;
}();
/**
 * @member {Array.<String>} addresses
 */


ListAllUnconfirmedTransactionsRIBSDVinInner.prototype['addresses'] = undefined;
/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSDVinInnerScriptSig} scriptSig
 */

ListAllUnconfirmedTransactionsRIBSDVinInner.prototype['scriptSig'] = undefined;
/**
 * Represents the script sequence number.
 * @member {Number} sequence
 */

ListAllUnconfirmedTransactionsRIBSDVinInner.prototype['sequence'] = undefined;
/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */

ListAllUnconfirmedTransactionsRIBSDVinInner.prototype['txid'] = undefined;
/**
 * @member {Array.<String>} txinwitness
 */

ListAllUnconfirmedTransactionsRIBSDVinInner.prototype['txinwitness'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */

ListAllUnconfirmedTransactionsRIBSDVinInner.prototype['value'] = undefined;
/**
 * It refers to the index of the output address of this transaction. The index starts from 0.
 * @member {Number} vout
 */

ListAllUnconfirmedTransactionsRIBSDVinInner.prototype['vout'] = undefined;
var _default = ListAllUnconfirmedTransactionsRIBSDVinInner;
exports["default"] = _default;