"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The DecodeRawTransactionHexRISBScriptPubKey model module.
 * @module model/DecodeRawTransactionHexRISBScriptPubKey
 * @version 1.5.0
 */
var DecodeRawTransactionHexRISBScriptPubKey = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeRawTransactionHexRISBScriptPubKey</code>.
   * Script pub key of the transaction
   * @alias module:model/DecodeRawTransactionHexRISBScriptPubKey
   * @param address {String} Represents the address which send the amount.
   */
  function DecodeRawTransactionHexRISBScriptPubKey(address) {
    _classCallCheck(this, DecodeRawTransactionHexRISBScriptPubKey);

    DecodeRawTransactionHexRISBScriptPubKey.initialize(this, address);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DecodeRawTransactionHexRISBScriptPubKey, null, [{
    key: "initialize",
    value: function initialize(obj, address) {
      obj['address'] = address;
    }
    /**
     * Constructs a <code>DecodeRawTransactionHexRISBScriptPubKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISBScriptPubKey} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISBScriptPubKey} The populated <code>DecodeRawTransactionHexRISBScriptPubKey</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodeRawTransactionHexRISBScriptPubKey();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('asm')) {
          obj['asm'] = _ApiClient["default"].convertToType(data['asm'], 'String');
        }

        if (data.hasOwnProperty('hex')) {
          obj['hex'] = _ApiClient["default"].convertToType(data['hex'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DecodeRawTransactionHexRISBScriptPubKey;
}();
/**
 * Represents the address which send the amount.
 * @member {String} address
 */


DecodeRawTransactionHexRISBScriptPubKey.prototype['address'] = undefined;
/**
 * Represents the assembly of the script public key of the address.
 * @member {String} asm
 */

DecodeRawTransactionHexRISBScriptPubKey.prototype['asm'] = undefined;
/**
 * Represents the hex of the script public key of the address.
 * @member {String} hex
 */

DecodeRawTransactionHexRISBScriptPubKey.prototype['hex'] = undefined;
/**
 * Represents the script type.
 * @member {String} type
 */

DecodeRawTransactionHexRISBScriptPubKey.prototype['type'] = undefined;
var _default = DecodeRawTransactionHexRISBScriptPubKey;
exports["default"] = _default;