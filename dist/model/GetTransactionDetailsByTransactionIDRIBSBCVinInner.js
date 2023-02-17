"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDRIBSBVinInnerScriptSig = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSBVinInnerScriptSig"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetTransactionDetailsByTransactionIDRIBSBCVinInner model module.
 * @module model/GetTransactionDetailsByTransactionIDRIBSBCVinInner
 * @version 1.13.0
 */
var GetTransactionDetailsByTransactionIDRIBSBCVinInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDRIBSBCVinInner</code>.
   * @alias module:model/GetTransactionDetailsByTransactionIDRIBSBCVinInner
   * @param addresses {Array.<String>} 
   * @param scriptSig {module:model/GetTransactionDetailsByTransactionIDRIBSBVinInnerScriptSig} 
   * @param sequence {Number} Represents the script sequence number.
   * @param txinwitness {Array.<String>} 
   */
  function GetTransactionDetailsByTransactionIDRIBSBCVinInner(addresses, scriptSig, sequence, txinwitness) {
    _classCallCheck(this, GetTransactionDetailsByTransactionIDRIBSBCVinInner);
    GetTransactionDetailsByTransactionIDRIBSBCVinInner.initialize(this, addresses, scriptSig, sequence, txinwitness);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetTransactionDetailsByTransactionIDRIBSBCVinInner, null, [{
    key: "initialize",
    value: function initialize(obj, addresses, scriptSig, sequence, txinwitness) {
      obj['addresses'] = addresses;
      obj['scriptSig'] = scriptSig;
      obj['sequence'] = sequence;
      obj['txinwitness'] = txinwitness;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDRIBSBCVinInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDRIBSBCVinInner} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDRIBSBCVinInner} The populated <code>GetTransactionDetailsByTransactionIDRIBSBCVinInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionDetailsByTransactionIDRIBSBCVinInner();
        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], ['String']);
        }
        if (data.hasOwnProperty('coinbase')) {
          obj['coinbase'] = _ApiClient["default"].convertToType(data['coinbase'], 'String');
        }
        if (data.hasOwnProperty('scriptSig')) {
          obj['scriptSig'] = _GetTransactionDetailsByTransactionIDRIBSBVinInnerScriptSig["default"].constructFromObject(data['scriptSig']);
        }
        if (data.hasOwnProperty('sequence')) {
          obj['sequence'] = _ApiClient["default"].convertToType(data['sequence'], 'Number');
        }
        if (data.hasOwnProperty('txid')) {
          obj['txid'] = _ApiClient["default"].convertToType(data['txid'], 'String');
        }
        if (data.hasOwnProperty('txinwitness')) {
          obj['txinwitness'] = _ApiClient["default"].convertToType(data['txinwitness'], ['String']);
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return GetTransactionDetailsByTransactionIDRIBSBCVinInner;
}();
/**
 * @member {Array.<String>} addresses
 */
GetTransactionDetailsByTransactionIDRIBSBCVinInner.prototype['addresses'] = undefined;

/**
 * Represents the coinbase hex.
 * @member {String} coinbase
 */
GetTransactionDetailsByTransactionIDRIBSBCVinInner.prototype['coinbase'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSBVinInnerScriptSig} scriptSig
 */
GetTransactionDetailsByTransactionIDRIBSBCVinInner.prototype['scriptSig'] = undefined;

/**
 * Represents the script sequence number.
 * @member {Number} sequence
 */
GetTransactionDetailsByTransactionIDRIBSBCVinInner.prototype['sequence'] = undefined;

/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */
GetTransactionDetailsByTransactionIDRIBSBCVinInner.prototype['txid'] = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
GetTransactionDetailsByTransactionIDRIBSBCVinInner.prototype['txinwitness'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
GetTransactionDetailsByTransactionIDRIBSBCVinInner.prototype['value'] = undefined;

/**
 * It refers to the index of the output address of this transaction. The index starts from 0.
 * @member {Number} vout
 */
GetTransactionDetailsByTransactionIDRIBSBCVinInner.prototype['vout'] = undefined;
var _default = GetTransactionDetailsByTransactionIDRIBSBCVinInner;
exports["default"] = _default;