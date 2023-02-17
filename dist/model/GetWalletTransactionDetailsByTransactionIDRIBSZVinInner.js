"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDRIBSZVinInnerScriptSig = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVinInnerScriptSig"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetWalletTransactionDetailsByTransactionIDRIBSZVinInner model module.
 * @module model/GetWalletTransactionDetailsByTransactionIDRIBSZVinInner
 * @version 1.13.0
 */
var GetWalletTransactionDetailsByTransactionIDRIBSZVinInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetWalletTransactionDetailsByTransactionIDRIBSZVinInner</code>.
   * @alias module:model/GetWalletTransactionDetailsByTransactionIDRIBSZVinInner
   * @param addresses {Array.<String>} 
   * @param scriptSig {module:model/GetTransactionDetailsByTransactionIDRIBSZVinInnerScriptSig} 
   * @param sequence {Number} Represents the script sequence number.
   * @param txid {String} Represents the reference transaction identifier.
   * @param value {String} Defines the specific amount.
   * @param vout {Number} It refers to the index of the output address of this transaction. The index starts from 0.
   */
  function GetWalletTransactionDetailsByTransactionIDRIBSZVinInner(addresses, scriptSig, sequence, txid, value, vout) {
    _classCallCheck(this, GetWalletTransactionDetailsByTransactionIDRIBSZVinInner);
    GetWalletTransactionDetailsByTransactionIDRIBSZVinInner.initialize(this, addresses, scriptSig, sequence, txid, value, vout);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetWalletTransactionDetailsByTransactionIDRIBSZVinInner, null, [{
    key: "initialize",
    value: function initialize(obj, addresses, scriptSig, sequence, txid, value, vout) {
      obj['addresses'] = addresses;
      obj['scriptSig'] = scriptSig;
      obj['sequence'] = sequence;
      obj['txid'] = txid;
      obj['value'] = value;
      obj['vout'] = vout;
    }

    /**
     * Constructs a <code>GetWalletTransactionDetailsByTransactionIDRIBSZVinInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWalletTransactionDetailsByTransactionIDRIBSZVinInner} obj Optional instance to populate.
     * @return {module:model/GetWalletTransactionDetailsByTransactionIDRIBSZVinInner} The populated <code>GetWalletTransactionDetailsByTransactionIDRIBSZVinInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetWalletTransactionDetailsByTransactionIDRIBSZVinInner();
        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], ['String']);
        }
        if (data.hasOwnProperty('scriptSig')) {
          obj['scriptSig'] = _GetTransactionDetailsByTransactionIDRIBSZVinInnerScriptSig["default"].constructFromObject(data['scriptSig']);
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
  return GetWalletTransactionDetailsByTransactionIDRIBSZVinInner;
}();
/**
 * @member {Array.<String>} addresses
 */
GetWalletTransactionDetailsByTransactionIDRIBSZVinInner.prototype['addresses'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSZVinInnerScriptSig} scriptSig
 */
GetWalletTransactionDetailsByTransactionIDRIBSZVinInner.prototype['scriptSig'] = undefined;

/**
 * Represents the script sequence number.
 * @member {Number} sequence
 */
GetWalletTransactionDetailsByTransactionIDRIBSZVinInner.prototype['sequence'] = undefined;

/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */
GetWalletTransactionDetailsByTransactionIDRIBSZVinInner.prototype['txid'] = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
GetWalletTransactionDetailsByTransactionIDRIBSZVinInner.prototype['txinwitness'] = undefined;

/**
 * Defines the specific amount.
 * @member {String} value
 */
GetWalletTransactionDetailsByTransactionIDRIBSZVinInner.prototype['value'] = undefined;

/**
 * It refers to the index of the output address of this transaction. The index starts from 0.
 * @member {Number} vout
 */
GetWalletTransactionDetailsByTransactionIDRIBSZVinInner.prototype['vout'] = undefined;
var _default = GetWalletTransactionDetailsByTransactionIDRIBSZVinInner;
exports["default"] = _default;