"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _DecodeRawTransactionHexRISB2VoutInnerScriptPubKey = _interopRequireDefault(require("./DecodeRawTransactionHexRISB2VoutInnerScriptPubKey"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The DecodeRawTransactionHexRISB2VoutInner model module.
 * @module model/DecodeRawTransactionHexRISB2VoutInner
 * @version 1.13.0
 */
var DecodeRawTransactionHexRISB2VoutInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeRawTransactionHexRISB2VoutInner</code>.
   * @alias module:model/DecodeRawTransactionHexRISB2VoutInner
   * @param scriptPubKey {module:model/DecodeRawTransactionHexRISB2VoutInnerScriptPubKey} 
   */
  function DecodeRawTransactionHexRISB2VoutInner(scriptPubKey) {
    _classCallCheck(this, DecodeRawTransactionHexRISB2VoutInner);
    DecodeRawTransactionHexRISB2VoutInner.initialize(this, scriptPubKey);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(DecodeRawTransactionHexRISB2VoutInner, null, [{
    key: "initialize",
    value: function initialize(obj, scriptPubKey) {
      obj['scriptPubKey'] = scriptPubKey;
    }

    /**
     * Constructs a <code>DecodeRawTransactionHexRISB2VoutInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISB2VoutInner} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISB2VoutInner} The populated <code>DecodeRawTransactionHexRISB2VoutInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodeRawTransactionHexRISB2VoutInner();
        if (data.hasOwnProperty('scriptPubKey')) {
          obj['scriptPubKey'] = _DecodeRawTransactionHexRISB2VoutInnerScriptPubKey["default"].constructFromObject(data['scriptPubKey']);
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }
      return obj;
    }
  }]);
  return DecodeRawTransactionHexRISB2VoutInner;
}();
/**
 * @member {module:model/DecodeRawTransactionHexRISB2VoutInnerScriptPubKey} scriptPubKey
 */
DecodeRawTransactionHexRISB2VoutInner.prototype['scriptPubKey'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
DecodeRawTransactionHexRISB2VoutInner.prototype['value'] = undefined;
var _default = DecodeRawTransactionHexRISB2VoutInner;
exports["default"] = _default;