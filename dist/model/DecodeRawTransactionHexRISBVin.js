"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DecodeRawTransactionHexRISBScriptSig = _interopRequireDefault(require("./DecodeRawTransactionHexRISBScriptSig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The DecodeRawTransactionHexRISBVin model module.
 * @module model/DecodeRawTransactionHexRISBVin
 * @version 1.5.0
 */
var DecodeRawTransactionHexRISBVin = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeRawTransactionHexRISBVin</code>.
   * @alias module:model/DecodeRawTransactionHexRISBVin
   * @param scriptSig {module:model/DecodeRawTransactionHexRISBScriptSig} 
   */
  function DecodeRawTransactionHexRISBVin(scriptSig) {
    _classCallCheck(this, DecodeRawTransactionHexRISBVin);

    DecodeRawTransactionHexRISBVin.initialize(this, scriptSig);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DecodeRawTransactionHexRISBVin, null, [{
    key: "initialize",
    value: function initialize(obj, scriptSig) {
      obj['scriptSig'] = scriptSig;
    }
    /**
     * Constructs a <code>DecodeRawTransactionHexRISBVin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISBVin} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISBVin} The populated <code>DecodeRawTransactionHexRISBVin</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodeRawTransactionHexRISBVin();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('inputHash')) {
          obj['inputHash'] = _ApiClient["default"].convertToType(data['inputHash'], 'String');
        }

        if (data.hasOwnProperty('outputIndex')) {
          obj['outputIndex'] = _ApiClient["default"].convertToType(data['outputIndex'], 'Number');
        }

        if (data.hasOwnProperty('scriptSig')) {
          obj['scriptSig'] = _DecodeRawTransactionHexRISBScriptSig["default"].constructFromObject(data['scriptSig']);
        }

        if (data.hasOwnProperty('sequence')) {
          obj['sequence'] = _ApiClient["default"].convertToType(data['sequence'], 'String');
        }

        if (data.hasOwnProperty('txinwitness')) {
          obj['txinwitness'] = _ApiClient["default"].convertToType(data['txinwitness'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DecodeRawTransactionHexRISBVin;
}();
/**
 * Represents the address which send/receive the amount.
 * @member {String} address
 */


DecodeRawTransactionHexRISBVin.prototype['address'] = undefined;
/**
 * Represents the transaction inputs' indentifier.
 * @member {String} inputHash
 */

DecodeRawTransactionHexRISBVin.prototype['inputHash'] = undefined;
/**
 * Represents the output of a transaction.
 * @member {Number} outputIndex
 */

DecodeRawTransactionHexRISBVin.prototype['outputIndex'] = undefined;
/**
 * @member {module:model/DecodeRawTransactionHexRISBScriptSig} scriptSig
 */

DecodeRawTransactionHexRISBVin.prototype['scriptSig'] = undefined;
/**
 * Represents the script sequence number.
 * @member {String} sequence
 */

DecodeRawTransactionHexRISBVin.prototype['sequence'] = undefined;
/**
 * @member {Array.<String>} txinwitness
 */

DecodeRawTransactionHexRISBVin.prototype['txinwitness'] = undefined;
var _default = DecodeRawTransactionHexRISBVin;
exports["default"] = _default;