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
 * The DecodeRawTransactionHexRISZVinInnerScriptSig model module.
 * @module model/DecodeRawTransactionHexRISZVinInnerScriptSig
 * @version 1.7.2
 */
var DecodeRawTransactionHexRISZVinInnerScriptSig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeRawTransactionHexRISZVinInnerScriptSig</code>.
   * Specifies the required signatures.
   * @alias module:model/DecodeRawTransactionHexRISZVinInnerScriptSig
   */
  function DecodeRawTransactionHexRISZVinInnerScriptSig() {
    _classCallCheck(this, DecodeRawTransactionHexRISZVinInnerScriptSig);

    DecodeRawTransactionHexRISZVinInnerScriptSig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DecodeRawTransactionHexRISZVinInnerScriptSig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DecodeRawTransactionHexRISZVinInnerScriptSig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISZVinInnerScriptSig} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISZVinInnerScriptSig} The populated <code>DecodeRawTransactionHexRISZVinInnerScriptSig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodeRawTransactionHexRISZVinInnerScriptSig();

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

  return DecodeRawTransactionHexRISZVinInnerScriptSig;
}();
/**
 * The asm strands for assembly, which is the symbolic representation of the Bitcoin's Script language op-codes.
 * @member {String} asm
 */


DecodeRawTransactionHexRISZVinInnerScriptSig.prototype['asm'] = undefined;
/**
 * Represents the hex of the public key of the address.
 * @member {String} hex
 */

DecodeRawTransactionHexRISZVinInnerScriptSig.prototype['hex'] = undefined;
/**
 * Represents the script type of the reference transaction identifier.
 * @member {String} type
 */

DecodeRawTransactionHexRISZVinInnerScriptSig.prototype['type'] = undefined;
var _default = DecodeRawTransactionHexRISZVinInnerScriptSig;
exports["default"] = _default;