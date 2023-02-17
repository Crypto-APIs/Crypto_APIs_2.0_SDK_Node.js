"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _DecodeRawTransactionHexRISD2VinInnerScriptSig = _interopRequireDefault(require("./DecodeRawTransactionHexRISD2VinInnerScriptSig"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The DecodeRawTransactionHexRISD2VinInner model module.
 * @module model/DecodeRawTransactionHexRISD2VinInner
 * @version 1.13.0
 */
var DecodeRawTransactionHexRISD2VinInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeRawTransactionHexRISD2VinInner</code>.
   * @alias module:model/DecodeRawTransactionHexRISD2VinInner
   * @param scriptSig {module:model/DecodeRawTransactionHexRISD2VinInnerScriptSig} 
   */
  function DecodeRawTransactionHexRISD2VinInner(scriptSig) {
    _classCallCheck(this, DecodeRawTransactionHexRISD2VinInner);
    DecodeRawTransactionHexRISD2VinInner.initialize(this, scriptSig);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(DecodeRawTransactionHexRISD2VinInner, null, [{
    key: "initialize",
    value: function initialize(obj, scriptSig) {
      obj['scriptSig'] = scriptSig;
    }

    /**
     * Constructs a <code>DecodeRawTransactionHexRISD2VinInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISD2VinInner} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISD2VinInner} The populated <code>DecodeRawTransactionHexRISD2VinInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodeRawTransactionHexRISD2VinInner();
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
          obj['scriptSig'] = _DecodeRawTransactionHexRISD2VinInnerScriptSig["default"].constructFromObject(data['scriptSig']);
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
  return DecodeRawTransactionHexRISD2VinInner;
}();
/**
 * Represents the addresses which send/receive the amount.
 * @member {String} address
 */
DecodeRawTransactionHexRISD2VinInner.prototype['address'] = undefined;

/**
 * Represents the transaction inputs' indentifier.
 * @member {String} inputHash
 */
DecodeRawTransactionHexRISD2VinInner.prototype['inputHash'] = undefined;

/**
 * Defines the output index of a transaction.
 * @member {String} outputIndex
 */
DecodeRawTransactionHexRISD2VinInner.prototype['outputIndex'] = undefined;

/**
 * @member {module:model/DecodeRawTransactionHexRISD2VinInnerScriptSig} scriptSig
 */
DecodeRawTransactionHexRISD2VinInner.prototype['scriptSig'] = undefined;

/**
 * Represents the script sequence number
 * @member {String} sequence
 */
DecodeRawTransactionHexRISD2VinInner.prototype['sequence'] = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
DecodeRawTransactionHexRISD2VinInner.prototype['txinwitness'] = undefined;
var _default = DecodeRawTransactionHexRISD2VinInner;
exports["default"] = _default;