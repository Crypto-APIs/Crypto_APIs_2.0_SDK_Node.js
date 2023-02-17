"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListConfirmedTransactionsByAddressRIBSD2VinInnerScriptSig = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSD2VinInnerScriptSig"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListUnconfirmedTransactionsByAddressRIBSD2VinInner model module.
 * @module model/ListUnconfirmedTransactionsByAddressRIBSD2VinInner
 * @version 1.13.0
 */
var ListUnconfirmedTransactionsByAddressRIBSD2VinInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListUnconfirmedTransactionsByAddressRIBSD2VinInner</code>.
   * @alias module:model/ListUnconfirmedTransactionsByAddressRIBSD2VinInner
   * @param addresses {Array.<String>} 
   * @param scriptSig {module:model/ListConfirmedTransactionsByAddressRIBSD2VinInnerScriptSig} 
   * @param sequence {String} Represents the script sequence number.
   * @param txid {String} Represents the reference transaction identifier.
   * @param txinwitness {Array.<String>} 
   * @param vout {Number} It refers to the index of the output address of this transaction. The index starts from 0.
   */
  function ListUnconfirmedTransactionsByAddressRIBSD2VinInner(addresses, scriptSig, sequence, txid, txinwitness, vout) {
    _classCallCheck(this, ListUnconfirmedTransactionsByAddressRIBSD2VinInner);
    ListUnconfirmedTransactionsByAddressRIBSD2VinInner.initialize(this, addresses, scriptSig, sequence, txid, txinwitness, vout);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListUnconfirmedTransactionsByAddressRIBSD2VinInner, null, [{
    key: "initialize",
    value: function initialize(obj, addresses, scriptSig, sequence, txid, txinwitness, vout) {
      obj['addresses'] = addresses;
      obj['scriptSig'] = scriptSig;
      obj['sequence'] = sequence;
      obj['txid'] = txid;
      obj['txinwitness'] = txinwitness;
      obj['vout'] = vout;
    }

    /**
     * Constructs a <code>ListUnconfirmedTransactionsByAddressRIBSD2VinInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnconfirmedTransactionsByAddressRIBSD2VinInner} obj Optional instance to populate.
     * @return {module:model/ListUnconfirmedTransactionsByAddressRIBSD2VinInner} The populated <code>ListUnconfirmedTransactionsByAddressRIBSD2VinInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListUnconfirmedTransactionsByAddressRIBSD2VinInner();
        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], ['String']);
        }
        if (data.hasOwnProperty('scriptSig')) {
          obj['scriptSig'] = _ListConfirmedTransactionsByAddressRIBSD2VinInnerScriptSig["default"].constructFromObject(data['scriptSig']);
        }
        if (data.hasOwnProperty('sequence')) {
          obj['sequence'] = _ApiClient["default"].convertToType(data['sequence'], 'String');
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
  return ListUnconfirmedTransactionsByAddressRIBSD2VinInner;
}();
/**
 * @member {Array.<String>} addresses
 */
ListUnconfirmedTransactionsByAddressRIBSD2VinInner.prototype['addresses'] = undefined;

/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSD2VinInnerScriptSig} scriptSig
 */
ListUnconfirmedTransactionsByAddressRIBSD2VinInner.prototype['scriptSig'] = undefined;

/**
 * Represents the script sequence number.
 * @member {String} sequence
 */
ListUnconfirmedTransactionsByAddressRIBSD2VinInner.prototype['sequence'] = undefined;

/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */
ListUnconfirmedTransactionsByAddressRIBSD2VinInner.prototype['txid'] = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
ListUnconfirmedTransactionsByAddressRIBSD2VinInner.prototype['txinwitness'] = undefined;

/**
 * String representation of the amount
 * @member {String} value
 */
ListUnconfirmedTransactionsByAddressRIBSD2VinInner.prototype['value'] = undefined;

/**
 * It refers to the index of the output address of this transaction. The index starts from 0.
 * @member {Number} vout
 */
ListUnconfirmedTransactionsByAddressRIBSD2VinInner.prototype['vout'] = undefined;
var _default = ListUnconfirmedTransactionsByAddressRIBSD2VinInner;
exports["default"] = _default;