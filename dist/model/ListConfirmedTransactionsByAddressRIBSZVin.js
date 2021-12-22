"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetTransactionDetailsByTransactionIDRIBSZScriptSig = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZScriptSig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListConfirmedTransactionsByAddressRIBSZVin model module.
 * @module model/ListConfirmedTransactionsByAddressRIBSZVin
 * @version 1.4.0
 */
var ListConfirmedTransactionsByAddressRIBSZVin = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListConfirmedTransactionsByAddressRIBSZVin</code>.
   * @alias module:model/ListConfirmedTransactionsByAddressRIBSZVin
   * @param addresses {Array.<String>} 
   * @param coinbase {String} Represents the coinbase hex.
   * @param scriptSig {module:model/GetTransactionDetailsByTransactionIDRIBSZScriptSig} 
   * @param sequence {Number} Represents the script sequence number.
   * @param txid {String} Represents the reference transaction identifier.
   * @param txinwitness {Array.<String>} 
   * @param value {String} Defines the specific amount.
   * @param vout {Number} It refers to the index of the output address of this transaction. The index starts from 0.
   */
  function ListConfirmedTransactionsByAddressRIBSZVin(addresses, coinbase, scriptSig, sequence, txid, txinwitness, value, vout) {
    _classCallCheck(this, ListConfirmedTransactionsByAddressRIBSZVin);

    ListConfirmedTransactionsByAddressRIBSZVin.initialize(this, addresses, coinbase, scriptSig, sequence, txid, txinwitness, value, vout);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListConfirmedTransactionsByAddressRIBSZVin, null, [{
    key: "initialize",
    value: function initialize(obj, addresses, coinbase, scriptSig, sequence, txid, txinwitness, value, vout) {
      obj['addresses'] = addresses;
      obj['coinbase'] = coinbase;
      obj['scriptSig'] = scriptSig;
      obj['sequence'] = sequence;
      obj['txid'] = txid;
      obj['txinwitness'] = txinwitness;
      obj['value'] = value;
      obj['vout'] = vout;
    }
    /**
     * Constructs a <code>ListConfirmedTransactionsByAddressRIBSZVin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTransactionsByAddressRIBSZVin} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTransactionsByAddressRIBSZVin} The populated <code>ListConfirmedTransactionsByAddressRIBSZVin</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListConfirmedTransactionsByAddressRIBSZVin();

        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], ['String']);
        }

        if (data.hasOwnProperty('coinbase')) {
          obj['coinbase'] = _ApiClient["default"].convertToType(data['coinbase'], 'String');
        }

        if (data.hasOwnProperty('scriptSig')) {
          obj['scriptSig'] = _GetTransactionDetailsByTransactionIDRIBSZScriptSig["default"].constructFromObject(data['scriptSig']);
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

  return ListConfirmedTransactionsByAddressRIBSZVin;
}();
/**
 * @member {Array.<String>} addresses
 */


ListConfirmedTransactionsByAddressRIBSZVin.prototype['addresses'] = undefined;
/**
 * Represents the coinbase hex.
 * @member {String} coinbase
 */

ListConfirmedTransactionsByAddressRIBSZVin.prototype['coinbase'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSZScriptSig} scriptSig
 */

ListConfirmedTransactionsByAddressRIBSZVin.prototype['scriptSig'] = undefined;
/**
 * Represents the script sequence number.
 * @member {Number} sequence
 */

ListConfirmedTransactionsByAddressRIBSZVin.prototype['sequence'] = undefined;
/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */

ListConfirmedTransactionsByAddressRIBSZVin.prototype['txid'] = undefined;
/**
 * @member {Array.<String>} txinwitness
 */

ListConfirmedTransactionsByAddressRIBSZVin.prototype['txinwitness'] = undefined;
/**
 * Defines the specific amount.
 * @member {String} value
 */

ListConfirmedTransactionsByAddressRIBSZVin.prototype['value'] = undefined;
/**
 * It refers to the index of the output address of this transaction. The index starts from 0.
 * @member {Number} vout
 */

ListConfirmedTransactionsByAddressRIBSZVin.prototype['vout'] = undefined;
var _default = ListConfirmedTransactionsByAddressRIBSZVin;
exports["default"] = _default;