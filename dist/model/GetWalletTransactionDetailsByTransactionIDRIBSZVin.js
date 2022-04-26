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
 * The GetWalletTransactionDetailsByTransactionIDRIBSZVin model module.
 * @module model/GetWalletTransactionDetailsByTransactionIDRIBSZVin
 * @version 1.5.0
 */
var GetWalletTransactionDetailsByTransactionIDRIBSZVin = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetWalletTransactionDetailsByTransactionIDRIBSZVin</code>.
   * @alias module:model/GetWalletTransactionDetailsByTransactionIDRIBSZVin
   * @param addresses {Array.<String>} 
   * @param scriptSig {module:model/GetTransactionDetailsByTransactionIDRIBSZScriptSig} 
   * @param sequence {Number} Represents the script sequence number.
   * @param txid {String} Represents the reference transaction identifier.
   * @param value {String} Defines the specific amount.
   * @param vout {Number} It refers to the index of the output address of this transaction. The index starts from 0.
   */
  function GetWalletTransactionDetailsByTransactionIDRIBSZVin(addresses, scriptSig, sequence, txid, value, vout) {
    _classCallCheck(this, GetWalletTransactionDetailsByTransactionIDRIBSZVin);

    GetWalletTransactionDetailsByTransactionIDRIBSZVin.initialize(this, addresses, scriptSig, sequence, txid, value, vout);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetWalletTransactionDetailsByTransactionIDRIBSZVin, null, [{
    key: "initialize",
    value: function initialize(obj, addresses, scriptSig, sequence, txid, value, vout) {
      obj['addresses'] = addresses;
      obj['scriptSig'] = scriptSig;
      obj['sequence'] = sequence;
      obj['txid'] = txid;
      obj['value'] = value;
      obj['vout'] = vout;
    }
    /**
     * Constructs a <code>GetWalletTransactionDetailsByTransactionIDRIBSZVin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWalletTransactionDetailsByTransactionIDRIBSZVin} obj Optional instance to populate.
     * @return {module:model/GetWalletTransactionDetailsByTransactionIDRIBSZVin} The populated <code>GetWalletTransactionDetailsByTransactionIDRIBSZVin</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetWalletTransactionDetailsByTransactionIDRIBSZVin();

        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], ['String']);
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

  return GetWalletTransactionDetailsByTransactionIDRIBSZVin;
}();
/**
 * @member {Array.<String>} addresses
 */


GetWalletTransactionDetailsByTransactionIDRIBSZVin.prototype['addresses'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSZScriptSig} scriptSig
 */

GetWalletTransactionDetailsByTransactionIDRIBSZVin.prototype['scriptSig'] = undefined;
/**
 * Represents the script sequence number.
 * @member {Number} sequence
 */

GetWalletTransactionDetailsByTransactionIDRIBSZVin.prototype['sequence'] = undefined;
/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */

GetWalletTransactionDetailsByTransactionIDRIBSZVin.prototype['txid'] = undefined;
/**
 * @member {Array.<String>} txinwitness
 */

GetWalletTransactionDetailsByTransactionIDRIBSZVin.prototype['txinwitness'] = undefined;
/**
 * Defines the specific amount.
 * @member {String} value
 */

GetWalletTransactionDetailsByTransactionIDRIBSZVin.prototype['value'] = undefined;
/**
 * It refers to the index of the output address of this transaction. The index starts from 0.
 * @member {Number} vout
 */

GetWalletTransactionDetailsByTransactionIDRIBSZVin.prototype['vout'] = undefined;
var _default = GetWalletTransactionDetailsByTransactionIDRIBSZVin;
exports["default"] = _default;