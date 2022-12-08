"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The DecodeRawTransactionHexRISLVinInnerScriptSig model module.
 * @module model/DecodeRawTransactionHexRISLVinInnerScriptSig
 * @version 1.11.0
 */
var DecodeRawTransactionHexRISLVinInnerScriptSig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeRawTransactionHexRISLVinInnerScriptSig</code>.
   * Specifies the required signatures.
   * @alias module:model/DecodeRawTransactionHexRISLVinInnerScriptSig
   */
  function DecodeRawTransactionHexRISLVinInnerScriptSig() {
    _classCallCheck(this, DecodeRawTransactionHexRISLVinInnerScriptSig);
    DecodeRawTransactionHexRISLVinInnerScriptSig.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(DecodeRawTransactionHexRISLVinInnerScriptSig, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>DecodeRawTransactionHexRISLVinInnerScriptSig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISLVinInnerScriptSig} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISLVinInnerScriptSig} The populated <code>DecodeRawTransactionHexRISLVinInnerScriptSig</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodeRawTransactionHexRISLVinInnerScriptSig();
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

    /**
     * Validates the JSON data with respect to <code>DecodeRawTransactionHexRISLVinInnerScriptSig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DecodeRawTransactionHexRISLVinInnerScriptSig</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['asm'] && !(typeof data['asm'] === 'string' || data['asm'] instanceof String)) {
        throw new Error("Expected the field `asm` to be a primitive type in the JSON string but got " + data['asm']);
      }
      // ensure the json data is a string
      if (data['hex'] && !(typeof data['hex'] === 'string' || data['hex'] instanceof String)) {
        throw new Error("Expected the field `hex` to be a primitive type in the JSON string but got " + data['hex']);
      }
      // ensure the json data is a string
      if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
        throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
      }
      return true;
    }
  }]);
  return DecodeRawTransactionHexRISLVinInnerScriptSig;
}();
/**
 * The asm strands for assembly, which is the symbolic representation of the Bitcoin's Script language op-codes.
 * @member {String} asm
 */
DecodeRawTransactionHexRISLVinInnerScriptSig.prototype['asm'] = undefined;

/**
 * Represents the hex of the public key of the address.
 * @member {String} hex
 */
DecodeRawTransactionHexRISLVinInnerScriptSig.prototype['hex'] = undefined;

/**
 * Represents the script type of the reference transaction identifier.
 * @member {String} type
 */
DecodeRawTransactionHexRISLVinInnerScriptSig.prototype['type'] = undefined;
var _default = DecodeRawTransactionHexRISLVinInnerScriptSig;
exports["default"] = _default;