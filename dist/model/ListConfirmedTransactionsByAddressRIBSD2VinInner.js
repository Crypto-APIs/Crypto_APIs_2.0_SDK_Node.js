"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListConfirmedTransactionsByAddressRIBSD2VinInnerScriptSig = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSD2VinInnerScriptSig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListConfirmedTransactionsByAddressRIBSD2VinInner model module.
 * @module model/ListConfirmedTransactionsByAddressRIBSD2VinInner
 * @version 1.7.2
 */
var ListConfirmedTransactionsByAddressRIBSD2VinInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListConfirmedTransactionsByAddressRIBSD2VinInner</code>.
   * @alias module:model/ListConfirmedTransactionsByAddressRIBSD2VinInner
   * @param addresses {Array.<String>} 
   * @param scriptSig {module:model/ListConfirmedTransactionsByAddressRIBSD2VinInnerScriptSig} 
   * @param sequence {String} Represents the script sequence number.
   * @param txinwitness {Array.<String>} 
   * @param vout {Number} It refers to the index of the output address of this transaction. The index starts from 0.
   */
  function ListConfirmedTransactionsByAddressRIBSD2VinInner(addresses, scriptSig, sequence, txinwitness, vout) {
    _classCallCheck(this, ListConfirmedTransactionsByAddressRIBSD2VinInner);

    ListConfirmedTransactionsByAddressRIBSD2VinInner.initialize(this, addresses, scriptSig, sequence, txinwitness, vout);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListConfirmedTransactionsByAddressRIBSD2VinInner, null, [{
    key: "initialize",
    value: function initialize(obj, addresses, scriptSig, sequence, txinwitness, vout) {
      obj['addresses'] = addresses;
      obj['scriptSig'] = scriptSig;
      obj['sequence'] = sequence;
      obj['txinwitness'] = txinwitness;
      obj['vout'] = vout;
    }
    /**
     * Constructs a <code>ListConfirmedTransactionsByAddressRIBSD2VinInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTransactionsByAddressRIBSD2VinInner} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTransactionsByAddressRIBSD2VinInner} The populated <code>ListConfirmedTransactionsByAddressRIBSD2VinInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListConfirmedTransactionsByAddressRIBSD2VinInner();

        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], ['String']);
        }

        if (data.hasOwnProperty('coinbase')) {
          obj['coinbase'] = _ApiClient["default"].convertToType(data['coinbase'], 'String');
        }

        if (data.hasOwnProperty('scriptSig')) {
          obj['scriptSig'] = _ListConfirmedTransactionsByAddressRIBSD2VinInnerScriptSig["default"].constructFromObject(data['scriptSig']);
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

  return ListConfirmedTransactionsByAddressRIBSD2VinInner;
}();
/**
 * @member {Array.<String>} addresses
 */


ListConfirmedTransactionsByAddressRIBSD2VinInner.prototype['addresses'] = undefined;
/**
 * Represents the coinbase hex.
 * @member {String} coinbase
 */

ListConfirmedTransactionsByAddressRIBSD2VinInner.prototype['coinbase'] = undefined;
/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSD2VinInnerScriptSig} scriptSig
 */

ListConfirmedTransactionsByAddressRIBSD2VinInner.prototype['scriptSig'] = undefined;
/**
 * Represents the script sequence number.
 * @member {String} sequence
 */

ListConfirmedTransactionsByAddressRIBSD2VinInner.prototype['sequence'] = undefined;
/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */

ListConfirmedTransactionsByAddressRIBSD2VinInner.prototype['txid'] = undefined;
/**
 * @member {Array.<String>} txinwitness
 */

ListConfirmedTransactionsByAddressRIBSD2VinInner.prototype['txinwitness'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */

ListConfirmedTransactionsByAddressRIBSD2VinInner.prototype['value'] = undefined;
/**
 * It refers to the index of the output address of this transaction. The index starts from 0.
 * @member {Number} vout
 */

ListConfirmedTransactionsByAddressRIBSD2VinInner.prototype['vout'] = undefined;
var _default = ListConfirmedTransactionsByAddressRIBSD2VinInner;
exports["default"] = _default;