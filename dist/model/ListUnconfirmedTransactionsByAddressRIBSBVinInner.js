"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListUnconfirmedTransactionsByAddressRIBSBVinInnerScriptSig = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSBVinInnerScriptSig"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListUnconfirmedTransactionsByAddressRIBSBVinInner model module.
 * @module model/ListUnconfirmedTransactionsByAddressRIBSBVinInner
 * @version 1.13.0
 */
var ListUnconfirmedTransactionsByAddressRIBSBVinInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListUnconfirmedTransactionsByAddressRIBSBVinInner</code>.
   * @alias module:model/ListUnconfirmedTransactionsByAddressRIBSBVinInner
   * @param addresses {Array.<String>} 
   * @param scriptSig {module:model/ListUnconfirmedTransactionsByAddressRIBSBVinInnerScriptSig} 
   * @param sequence {String} Represents the script sequence number.
   */
  function ListUnconfirmedTransactionsByAddressRIBSBVinInner(addresses, scriptSig, sequence) {
    _classCallCheck(this, ListUnconfirmedTransactionsByAddressRIBSBVinInner);
    ListUnconfirmedTransactionsByAddressRIBSBVinInner.initialize(this, addresses, scriptSig, sequence);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListUnconfirmedTransactionsByAddressRIBSBVinInner, null, [{
    key: "initialize",
    value: function initialize(obj, addresses, scriptSig, sequence) {
      obj['addresses'] = addresses;
      obj['scriptSig'] = scriptSig;
      obj['sequence'] = sequence;
    }

    /**
     * Constructs a <code>ListUnconfirmedTransactionsByAddressRIBSBVinInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnconfirmedTransactionsByAddressRIBSBVinInner} obj Optional instance to populate.
     * @return {module:model/ListUnconfirmedTransactionsByAddressRIBSBVinInner} The populated <code>ListUnconfirmedTransactionsByAddressRIBSBVinInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListUnconfirmedTransactionsByAddressRIBSBVinInner();
        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], ['String']);
        }
        if (data.hasOwnProperty('scriptSig')) {
          obj['scriptSig'] = _ListUnconfirmedTransactionsByAddressRIBSBVinInnerScriptSig["default"].constructFromObject(data['scriptSig']);
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
  return ListUnconfirmedTransactionsByAddressRIBSBVinInner;
}();
/**
 * @member {Array.<String>} addresses
 */
ListUnconfirmedTransactionsByAddressRIBSBVinInner.prototype['addresses'] = undefined;

/**
 * @member {module:model/ListUnconfirmedTransactionsByAddressRIBSBVinInnerScriptSig} scriptSig
 */
ListUnconfirmedTransactionsByAddressRIBSBVinInner.prototype['scriptSig'] = undefined;

/**
 * Represents the script sequence number.
 * @member {String} sequence
 */
ListUnconfirmedTransactionsByAddressRIBSBVinInner.prototype['sequence'] = undefined;

/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */
ListUnconfirmedTransactionsByAddressRIBSBVinInner.prototype['txid'] = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
ListUnconfirmedTransactionsByAddressRIBSBVinInner.prototype['txinwitness'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
ListUnconfirmedTransactionsByAddressRIBSBVinInner.prototype['value'] = undefined;

/**
 * Defines the vout of the transaction output, i.e. which output to spend.
 * @member {Number} vout
 */
ListUnconfirmedTransactionsByAddressRIBSBVinInner.prototype['vout'] = undefined;
var _default = ListUnconfirmedTransactionsByAddressRIBSBVinInner;
exports["default"] = _default;