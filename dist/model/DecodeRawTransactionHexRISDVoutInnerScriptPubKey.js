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
 * The DecodeRawTransactionHexRISDVoutInnerScriptPubKey model module.
 * @module model/DecodeRawTransactionHexRISDVoutInnerScriptPubKey
 * @version 1.7.2
 */
var DecodeRawTransactionHexRISDVoutInnerScriptPubKey = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeRawTransactionHexRISDVoutInnerScriptPubKey</code>.
   * Represents the script public key.
   * @alias module:model/DecodeRawTransactionHexRISDVoutInnerScriptPubKey
   * @param address {String} Represents the addresses which send the amount
   */
  function DecodeRawTransactionHexRISDVoutInnerScriptPubKey(address) {
    _classCallCheck(this, DecodeRawTransactionHexRISDVoutInnerScriptPubKey);

    DecodeRawTransactionHexRISDVoutInnerScriptPubKey.initialize(this, address);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DecodeRawTransactionHexRISDVoutInnerScriptPubKey, null, [{
    key: "initialize",
    value: function initialize(obj, address) {
      obj['address'] = address;
    }
    /**
     * Constructs a <code>DecodeRawTransactionHexRISDVoutInnerScriptPubKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISDVoutInnerScriptPubKey} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISDVoutInnerScriptPubKey} The populated <code>DecodeRawTransactionHexRISDVoutInnerScriptPubKey</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodeRawTransactionHexRISDVoutInnerScriptPubKey();

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

  return DecodeRawTransactionHexRISDVoutInnerScriptPubKey;
}();
/**
 * Represents the addresses which send the amount
 * @member {String} address
 */


DecodeRawTransactionHexRISDVoutInnerScriptPubKey.prototype['address'] = undefined;
/**
 * Represents the assembly of the script public key of the address.
 * @member {String} asm
 */

DecodeRawTransactionHexRISDVoutInnerScriptPubKey.prototype['asm'] = undefined;
/**
 * Represents the hex of the script public key of the address.
 * @member {String} hex
 */

DecodeRawTransactionHexRISDVoutInnerScriptPubKey.prototype['hex'] = undefined;
/**
 * Represents the hex of the script public key of the address.
 * @member {String} type
 */

DecodeRawTransactionHexRISDVoutInnerScriptPubKey.prototype['type'] = undefined;
var _default = DecodeRawTransactionHexRISDVoutInnerScriptPubKey;
exports["default"] = _default;