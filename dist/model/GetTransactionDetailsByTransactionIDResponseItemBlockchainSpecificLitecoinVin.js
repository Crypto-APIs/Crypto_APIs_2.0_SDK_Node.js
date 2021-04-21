"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinScriptSig = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinScriptSig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVin model module.
 * @module model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVin
 * @version 2.0.0
 */
var GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVin = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVin</code>.
   * @alias module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVin
   * @param addresses {Array.<String>} 
   * @param scriptSig {module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinScriptSig} 
   * @param sequence {String} Represents the script sequence number.
   * @param txinwitness {Array.<String>} 
   */
  function GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVin(addresses, scriptSig, sequence, txinwitness) {
    _classCallCheck(this, GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVin);

    GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVin.initialize(this, addresses, scriptSig, sequence, txinwitness);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVin, null, [{
    key: "initialize",
    value: function initialize(obj, addresses, scriptSig, sequence, txinwitness) {
      obj['addresses'] = addresses;
      obj['scriptSig'] = scriptSig;
      obj['sequence'] = sequence;
      obj['txinwitness'] = txinwitness;
    }
    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVin} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVin} The populated <code>GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVin</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVin();

        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], ['String']);
        }

        if (data.hasOwnProperty('coinbase')) {
          obj['coinbase'] = _ApiClient["default"].convertToType(data['coinbase'], 'String');
        }

        if (data.hasOwnProperty('scriptSig')) {
          obj['scriptSig'] = _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinScriptSig["default"].constructFromObject(data['scriptSig']);
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

  return GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVin;
}();
/**
 * @member {Array.<String>} addresses
 */


GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVin.prototype['addresses'] = undefined;
/**
 * Represents the coinbase hex.
 * @member {String} coinbase
 */

GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVin.prototype['coinbase'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinScriptSig} scriptSig
 */

GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVin.prototype['scriptSig'] = undefined;
/**
 * Represents the script sequence number.
 * @member {String} sequence
 */

GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVin.prototype['sequence'] = undefined;
/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */

GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVin.prototype['txid'] = undefined;
/**
 * @member {Array.<String>} txinwitness
 */

GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVin.prototype['txinwitness'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */

GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVin.prototype['value'] = undefined;
/**
 * It refers to the index of the output address of this transaction. The index starts from 0.
 * @member {Number} vout
 */

GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVin.prototype['vout'] = undefined;
var _default = GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVin;
exports["default"] = _default;