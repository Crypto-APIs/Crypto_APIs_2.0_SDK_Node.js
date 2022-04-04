"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetTransactionDetailsByTransactionIDRIBSD2ScriptSig = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSD2ScriptSig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetWalletTransactionDetailsByTransactionIDRIBSD2Vin model module.
 * @module model/GetWalletTransactionDetailsByTransactionIDRIBSD2Vin
 * @version 1.4.0
 */
var GetWalletTransactionDetailsByTransactionIDRIBSD2Vin = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetWalletTransactionDetailsByTransactionIDRIBSD2Vin</code>.
   * @alias module:model/GetWalletTransactionDetailsByTransactionIDRIBSD2Vin
   * @param addresses {Array.<String>} 
   * @param scriptSig {module:model/GetTransactionDetailsByTransactionIDRIBSD2ScriptSig} 
   * @param sequence {Number} Represents the script sequence number.
   */
  function GetWalletTransactionDetailsByTransactionIDRIBSD2Vin(addresses, scriptSig, sequence) {
    _classCallCheck(this, GetWalletTransactionDetailsByTransactionIDRIBSD2Vin);

    GetWalletTransactionDetailsByTransactionIDRIBSD2Vin.initialize(this, addresses, scriptSig, sequence);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetWalletTransactionDetailsByTransactionIDRIBSD2Vin, null, [{
    key: "initialize",
    value: function initialize(obj, addresses, scriptSig, sequence) {
      obj['addresses'] = addresses;
      obj['scriptSig'] = scriptSig;
      obj['sequence'] = sequence;
    }
    /**
     * Constructs a <code>GetWalletTransactionDetailsByTransactionIDRIBSD2Vin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWalletTransactionDetailsByTransactionIDRIBSD2Vin} obj Optional instance to populate.
     * @return {module:model/GetWalletTransactionDetailsByTransactionIDRIBSD2Vin} The populated <code>GetWalletTransactionDetailsByTransactionIDRIBSD2Vin</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetWalletTransactionDetailsByTransactionIDRIBSD2Vin();

        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], ['String']);
        }

        if (data.hasOwnProperty('coinbase')) {
          obj['coinbase'] = _ApiClient["default"].convertToType(data['coinbase'], 'String');
        }

        if (data.hasOwnProperty('scriptSig')) {
          obj['scriptSig'] = _GetTransactionDetailsByTransactionIDRIBSD2ScriptSig["default"].constructFromObject(data['scriptSig']);
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

  return GetWalletTransactionDetailsByTransactionIDRIBSD2Vin;
}();
/**
 * @member {Array.<String>} addresses
 */


GetWalletTransactionDetailsByTransactionIDRIBSD2Vin.prototype['addresses'] = undefined;
/**
 * Represents the coinbase hex.
 * @member {String} coinbase
 */

GetWalletTransactionDetailsByTransactionIDRIBSD2Vin.prototype['coinbase'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSD2ScriptSig} scriptSig
 */

GetWalletTransactionDetailsByTransactionIDRIBSD2Vin.prototype['scriptSig'] = undefined;
/**
 * Represents the script sequence number.
 * @member {Number} sequence
 */

GetWalletTransactionDetailsByTransactionIDRIBSD2Vin.prototype['sequence'] = undefined;
/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */

GetWalletTransactionDetailsByTransactionIDRIBSD2Vin.prototype['txid'] = undefined;
/**
 * @member {Array.<String>} txinwitness
 */

GetWalletTransactionDetailsByTransactionIDRIBSD2Vin.prototype['txinwitness'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */

GetWalletTransactionDetailsByTransactionIDRIBSD2Vin.prototype['value'] = undefined;
/**
 * It refers to the index of the output address of this transaction. The index starts from 0.
 * @member {Number} vout
 */

GetWalletTransactionDetailsByTransactionIDRIBSD2Vin.prototype['vout'] = undefined;
var _default = GetWalletTransactionDetailsByTransactionIDRIBSD2Vin;
exports["default"] = _default;