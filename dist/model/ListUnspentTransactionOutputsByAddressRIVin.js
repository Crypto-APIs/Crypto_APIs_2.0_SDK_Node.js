"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetTransactionDetailsByTransactionIDRIBSBScriptSig = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSBScriptSig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListUnspentTransactionOutputsByAddressRIVin model module.
 * @module model/ListUnspentTransactionOutputsByAddressRIVin
 * @version 1.4.0
 */
var ListUnspentTransactionOutputsByAddressRIVin = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListUnspentTransactionOutputsByAddressRIVin</code>.
   * @alias module:model/ListUnspentTransactionOutputsByAddressRIVin
   * @param addresses {Array.<String>} 
   * @param scriptSig {module:model/GetTransactionDetailsByTransactionIDRIBSBScriptSig} 
   * @param sequence {String} Represents the script sequence number.
   * @param txid {String} Represents the reference transaction identifier.
   * @param value {String} Represents the sent/received amount.
   */
  function ListUnspentTransactionOutputsByAddressRIVin(addresses, scriptSig, sequence, txid, value) {
    _classCallCheck(this, ListUnspentTransactionOutputsByAddressRIVin);

    ListUnspentTransactionOutputsByAddressRIVin.initialize(this, addresses, scriptSig, sequence, txid, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListUnspentTransactionOutputsByAddressRIVin, null, [{
    key: "initialize",
    value: function initialize(obj, addresses, scriptSig, sequence, txid, value) {
      obj['addresses'] = addresses;
      obj['scriptSig'] = scriptSig;
      obj['sequence'] = sequence;
      obj['txid'] = txid;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>ListUnspentTransactionOutputsByAddressRIVin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnspentTransactionOutputsByAddressRIVin} obj Optional instance to populate.
     * @return {module:model/ListUnspentTransactionOutputsByAddressRIVin} The populated <code>ListUnspentTransactionOutputsByAddressRIVin</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListUnspentTransactionOutputsByAddressRIVin();

        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], ['String']);
        }

        if (data.hasOwnProperty('coinbase')) {
          obj['coinbase'] = _ApiClient["default"].convertToType(data['coinbase'], 'String');
        }

        if (data.hasOwnProperty('scriptSig')) {
          obj['scriptSig'] = _GetTransactionDetailsByTransactionIDRIBSBScriptSig["default"].constructFromObject(data['scriptSig']);
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

  return ListUnspentTransactionOutputsByAddressRIVin;
}();
/**
 * @member {Array.<String>} addresses
 */


ListUnspentTransactionOutputsByAddressRIVin.prototype['addresses'] = undefined;
/**
 * Represents the coinbase hex.
 * @member {String} coinbase
 */

ListUnspentTransactionOutputsByAddressRIVin.prototype['coinbase'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSBScriptSig} scriptSig
 */

ListUnspentTransactionOutputsByAddressRIVin.prototype['scriptSig'] = undefined;
/**
 * Represents the script sequence number.
 * @member {String} sequence
 */

ListUnspentTransactionOutputsByAddressRIVin.prototype['sequence'] = undefined;
/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */

ListUnspentTransactionOutputsByAddressRIVin.prototype['txid'] = undefined;
/**
 * @member {Array.<String>} txinwitness
 */

ListUnspentTransactionOutputsByAddressRIVin.prototype['txinwitness'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */

ListUnspentTransactionOutputsByAddressRIVin.prototype['value'] = undefined;
/**
 * Defines the vout of the transaction output, i.e. which output to spend.
 * @member {Number} vout
 */

ListUnspentTransactionOutputsByAddressRIVin.prototype['vout'] = undefined;
var _default = ListUnspentTransactionOutputsByAddressRIVin;
exports["default"] = _default;