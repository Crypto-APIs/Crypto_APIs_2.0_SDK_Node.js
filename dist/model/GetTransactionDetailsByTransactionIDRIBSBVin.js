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
 * The GetTransactionDetailsByTransactionIDRIBSBVin model module.
 * @module model/GetTransactionDetailsByTransactionIDRIBSBVin
 * @version 1.4.0
 */
var GetTransactionDetailsByTransactionIDRIBSBVin = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDRIBSBVin</code>.
   * @alias module:model/GetTransactionDetailsByTransactionIDRIBSBVin
   * @param addresses {Array.<String>} 
   * @param scriptSig {module:model/GetTransactionDetailsByTransactionIDRIBSBScriptSig} 
   * @param sequence {Number} Represents the script sequence number.
   * @param txinwitness {Array.<String>} 
   */
  function GetTransactionDetailsByTransactionIDRIBSBVin(addresses, scriptSig, sequence, txinwitness) {
    _classCallCheck(this, GetTransactionDetailsByTransactionIDRIBSBVin);

    GetTransactionDetailsByTransactionIDRIBSBVin.initialize(this, addresses, scriptSig, sequence, txinwitness);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetTransactionDetailsByTransactionIDRIBSBVin, null, [{
    key: "initialize",
    value: function initialize(obj, addresses, scriptSig, sequence, txinwitness) {
      obj['addresses'] = addresses;
      obj['scriptSig'] = scriptSig;
      obj['sequence'] = sequence;
      obj['txinwitness'] = txinwitness;
    }
    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDRIBSBVin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDRIBSBVin} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDRIBSBVin} The populated <code>GetTransactionDetailsByTransactionIDRIBSBVin</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionDetailsByTransactionIDRIBSBVin();

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

  return GetTransactionDetailsByTransactionIDRIBSBVin;
}();
/**
 * @member {Array.<String>} addresses
 */


GetTransactionDetailsByTransactionIDRIBSBVin.prototype['addresses'] = undefined;
/**
 * Represents the coinbase hex.
 * @member {String} coinbase
 */

GetTransactionDetailsByTransactionIDRIBSBVin.prototype['coinbase'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSBScriptSig} scriptSig
 */

GetTransactionDetailsByTransactionIDRIBSBVin.prototype['scriptSig'] = undefined;
/**
 * Represents the script sequence number.
 * @member {Number} sequence
 */

GetTransactionDetailsByTransactionIDRIBSBVin.prototype['sequence'] = undefined;
/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */

GetTransactionDetailsByTransactionIDRIBSBVin.prototype['txid'] = undefined;
/**
 * @member {Array.<String>} txinwitness
 */

GetTransactionDetailsByTransactionIDRIBSBVin.prototype['txinwitness'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */

GetTransactionDetailsByTransactionIDRIBSBVin.prototype['value'] = undefined;
/**
 * It refers to the index of the output address of this transaction. The index starts from 0.
 * @member {Number} vout
 */

GetTransactionDetailsByTransactionIDRIBSBVin.prototype['vout'] = undefined;
var _default = GetTransactionDetailsByTransactionIDRIBSBVin;
exports["default"] = _default;