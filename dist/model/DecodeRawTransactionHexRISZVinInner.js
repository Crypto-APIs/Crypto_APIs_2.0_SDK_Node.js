"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _DecodeRawTransactionHexRISZVinInnerScriptSig = _interopRequireDefault(require("./DecodeRawTransactionHexRISZVinInnerScriptSig"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The DecodeRawTransactionHexRISZVinInner model module.
 * @module model/DecodeRawTransactionHexRISZVinInner
 * @version 1.13.0
 */
var DecodeRawTransactionHexRISZVinInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeRawTransactionHexRISZVinInner</code>.
   * @alias module:model/DecodeRawTransactionHexRISZVinInner
   * @param scriptSig {module:model/DecodeRawTransactionHexRISZVinInnerScriptSig} 
   */
  function DecodeRawTransactionHexRISZVinInner(scriptSig) {
    _classCallCheck(this, DecodeRawTransactionHexRISZVinInner);
    DecodeRawTransactionHexRISZVinInner.initialize(this, scriptSig);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(DecodeRawTransactionHexRISZVinInner, null, [{
    key: "initialize",
    value: function initialize(obj, scriptSig) {
      obj['scriptSig'] = scriptSig;
    }

    /**
     * Constructs a <code>DecodeRawTransactionHexRISZVinInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISZVinInner} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISZVinInner} The populated <code>DecodeRawTransactionHexRISZVinInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodeRawTransactionHexRISZVinInner();
        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
        if (data.hasOwnProperty('inputHash')) {
          obj['inputHash'] = _ApiClient["default"].convertToType(data['inputHash'], 'String');
        }
        if (data.hasOwnProperty('outputIndex')) {
          obj['outputIndex'] = _ApiClient["default"].convertToType(data['outputIndex'], 'String');
        }
        if (data.hasOwnProperty('scriptSig')) {
          obj['scriptSig'] = _DecodeRawTransactionHexRISZVinInnerScriptSig["default"].constructFromObject(data['scriptSig']);
        }
        if (data.hasOwnProperty('sequence')) {
          obj['sequence'] = _ApiClient["default"].convertToType(data['sequence'], 'String');
        }
      }
      return obj;
    }
  }]);
  return DecodeRawTransactionHexRISZVinInner;
}();
/**
 * Represents the addresses which send/receive the amount.
 * @member {String} address
 */
DecodeRawTransactionHexRISZVinInner.prototype['address'] = undefined;

/**
 * Represents the transaction inputs' indentifier.
 * @member {String} inputHash
 */
DecodeRawTransactionHexRISZVinInner.prototype['inputHash'] = undefined;

/**
 * Defines the output index of a transaction.
 * @member {String} outputIndex
 */
DecodeRawTransactionHexRISZVinInner.prototype['outputIndex'] = undefined;

/**
 * @member {module:model/DecodeRawTransactionHexRISZVinInnerScriptSig} scriptSig
 */
DecodeRawTransactionHexRISZVinInner.prototype['scriptSig'] = undefined;

/**
 * Represents the script sequence number.
 * @member {String} sequence
 */
DecodeRawTransactionHexRISZVinInner.prototype['sequence'] = undefined;
var _default = DecodeRawTransactionHexRISZVinInner;
exports["default"] = _default;