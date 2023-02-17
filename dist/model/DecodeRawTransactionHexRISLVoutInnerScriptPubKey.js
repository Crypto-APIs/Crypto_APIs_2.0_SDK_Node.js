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
 * The DecodeRawTransactionHexRISLVoutInnerScriptPubKey model module.
 * @module model/DecodeRawTransactionHexRISLVoutInnerScriptPubKey
 * @version 1.13.0
 */
var DecodeRawTransactionHexRISLVoutInnerScriptPubKey = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeRawTransactionHexRISLVoutInnerScriptPubKey</code>.
   * Represents the script public key.
   * @alias module:model/DecodeRawTransactionHexRISLVoutInnerScriptPubKey
   * @param address {String} Represents the addresses which send the amount.
   */
  function DecodeRawTransactionHexRISLVoutInnerScriptPubKey(address) {
    _classCallCheck(this, DecodeRawTransactionHexRISLVoutInnerScriptPubKey);
    DecodeRawTransactionHexRISLVoutInnerScriptPubKey.initialize(this, address);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(DecodeRawTransactionHexRISLVoutInnerScriptPubKey, null, [{
    key: "initialize",
    value: function initialize(obj, address) {
      obj['address'] = address;
    }

    /**
     * Constructs a <code>DecodeRawTransactionHexRISLVoutInnerScriptPubKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISLVoutInnerScriptPubKey} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISLVoutInnerScriptPubKey} The populated <code>DecodeRawTransactionHexRISLVoutInnerScriptPubKey</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodeRawTransactionHexRISLVoutInnerScriptPubKey();
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
  return DecodeRawTransactionHexRISLVoutInnerScriptPubKey;
}();
/**
 * Represents the addresses which send the amount.
 * @member {String} address
 */
DecodeRawTransactionHexRISLVoutInnerScriptPubKey.prototype['address'] = undefined;

/**
 * Represents the assembly of the script public key of the address.
 * @member {String} asm
 */
DecodeRawTransactionHexRISLVoutInnerScriptPubKey.prototype['asm'] = undefined;

/**
 * Represents the hex of the script public key of the address.
 * @member {String} hex
 */
DecodeRawTransactionHexRISLVoutInnerScriptPubKey.prototype['hex'] = undefined;

/**
 * Represents the script type.
 * @member {String} type
 */
DecodeRawTransactionHexRISLVoutInnerScriptPubKey.prototype['type'] = undefined;
var _default = DecodeRawTransactionHexRISLVoutInnerScriptPubKey;
exports["default"] = _default;