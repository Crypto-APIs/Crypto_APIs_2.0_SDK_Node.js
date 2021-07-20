"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListTransactionsByAddressRIBSD2ScriptSig = _interopRequireDefault(require("./ListTransactionsByAddressRIBSD2ScriptSig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListTransactionsByAddressRIBSD2Vin model module.
 * @module model/ListTransactionsByAddressRIBSD2Vin
 * @version 1.1.0
 */
var ListTransactionsByAddressRIBSD2Vin = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByAddressRIBSD2Vin</code>.
   * @alias module:model/ListTransactionsByAddressRIBSD2Vin
   * @param addresses {Array.<String>} 
   * @param scriptSig {module:model/ListTransactionsByAddressRIBSD2ScriptSig} 
   * @param sequence {String} Represents the script sequence number.
   * @param txinwitness {Array.<String>} 
   * @param vout {Number} It refers to the index of the output address of this transaction. The index starts from 0.
   */
  function ListTransactionsByAddressRIBSD2Vin(addresses, scriptSig, sequence, txinwitness, vout) {
    _classCallCheck(this, ListTransactionsByAddressRIBSD2Vin);

    ListTransactionsByAddressRIBSD2Vin.initialize(this, addresses, scriptSig, sequence, txinwitness, vout);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTransactionsByAddressRIBSD2Vin, null, [{
    key: "initialize",
    value: function initialize(obj, addresses, scriptSig, sequence, txinwitness, vout) {
      obj['addresses'] = addresses;
      obj['scriptSig'] = scriptSig;
      obj['sequence'] = sequence;
      obj['txinwitness'] = txinwitness;
      obj['vout'] = vout;
    }
    /**
     * Constructs a <code>ListTransactionsByAddressRIBSD2Vin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByAddressRIBSD2Vin} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByAddressRIBSD2Vin} The populated <code>ListTransactionsByAddressRIBSD2Vin</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByAddressRIBSD2Vin();

        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], ['String']);
        }

        if (data.hasOwnProperty('coinbase')) {
          obj['coinbase'] = _ApiClient["default"].convertToType(data['coinbase'], 'String');
        }

        if (data.hasOwnProperty('scriptSig')) {
          obj['scriptSig'] = _ListTransactionsByAddressRIBSD2ScriptSig["default"].constructFromObject(data['scriptSig']);
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

  return ListTransactionsByAddressRIBSD2Vin;
}();
/**
 * @member {Array.<String>} addresses
 */


ListTransactionsByAddressRIBSD2Vin.prototype['addresses'] = undefined;
/**
 * Represents the coinbase hex.
 * @member {String} coinbase
 */

ListTransactionsByAddressRIBSD2Vin.prototype['coinbase'] = undefined;
/**
 * @member {module:model/ListTransactionsByAddressRIBSD2ScriptSig} scriptSig
 */

ListTransactionsByAddressRIBSD2Vin.prototype['scriptSig'] = undefined;
/**
 * Represents the script sequence number.
 * @member {String} sequence
 */

ListTransactionsByAddressRIBSD2Vin.prototype['sequence'] = undefined;
/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */

ListTransactionsByAddressRIBSD2Vin.prototype['txid'] = undefined;
/**
 * @member {Array.<String>} txinwitness
 */

ListTransactionsByAddressRIBSD2Vin.prototype['txinwitness'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */

ListTransactionsByAddressRIBSD2Vin.prototype['value'] = undefined;
/**
 * It refers to the index of the output address of this transaction. The index starts from 0.
 * @member {Number} vout
 */

ListTransactionsByAddressRIBSD2Vin.prototype['vout'] = undefined;
var _default = ListTransactionsByAddressRIBSD2Vin;
exports["default"] = _default;