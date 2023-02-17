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
 * The GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey model module.
 * @module model/GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey
 * @version 1.13.0
 */
var GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey</code>.
   * Represents the script public key.
   * @alias module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey
   * @param addresses {Array.<String>} 
   * @param asm {String} Represents the assembly of the script public key of the address.
   * @param hex {String} Represents the hex of the script public key of the address.
   * @param reqSigs {Number} Represents the required signatures.
   * @param type {String} Represents the script type.
   */
  function GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey(addresses, asm, hex, reqSigs, type) {
    _classCallCheck(this, GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey);
    GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey.initialize(this, addresses, asm, hex, reqSigs, type);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey, null, [{
    key: "initialize",
    value: function initialize(obj, addresses, asm, hex, reqSigs, type) {
      obj['addresses'] = addresses;
      obj['asm'] = asm;
      obj['hex'] = hex;
      obj['reqSigs'] = reqSigs;
      obj['type'] = type;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey} The populated <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey();
        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], ['String']);
        }
        if (data.hasOwnProperty('asm')) {
          obj['asm'] = _ApiClient["default"].convertToType(data['asm'], 'String');
        }
        if (data.hasOwnProperty('hex')) {
          obj['hex'] = _ApiClient["default"].convertToType(data['hex'], 'String');
        }
        if (data.hasOwnProperty('reqSigs')) {
          obj['reqSigs'] = _ApiClient["default"].convertToType(data['reqSigs'], 'Number');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey;
}();
/**
 * @member {Array.<String>} addresses
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey.prototype['addresses'] = undefined;

/**
 * Represents the assembly of the script public key of the address.
 * @member {String} asm
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey.prototype['asm'] = undefined;

/**
 * Represents the hex of the script public key of the address.
 * @member {String} hex
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey.prototype['hex'] = undefined;

/**
 * Represents the required signatures.
 * @member {Number} reqSigs
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey.prototype['reqSigs'] = undefined;

/**
 * Represents the script type.
 * @member {String} type
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey.prototype['type'] = undefined;
var _default = GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey;
exports["default"] = _default;