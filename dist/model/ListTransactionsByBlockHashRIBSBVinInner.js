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
 * The ListTransactionsByBlockHashRIBSBVinInner model module.
 * @module model/ListTransactionsByBlockHashRIBSBVinInner
 * @version 1.13.0
 */
var ListTransactionsByBlockHashRIBSBVinInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHashRIBSBVinInner</code>.
   * @alias module:model/ListTransactionsByBlockHashRIBSBVinInner
   * @param addresses {Array.<String>} 
   * @param coinbase {String} Represents the coinbase hex.
   * @param scriptSig {module:model/GetTransactionDetailsByTransactionIDRIBSBVinInnerScriptSig} 
   * @param sequence {String} Represents the script sequence number.
   * @param txid {String} Represents the reference transaction identifier.
   * @param txinwitness {Array.<String>} 
   * @param value {String} Represents the sent/received amount.
   * @param vout {Number} It refers to the index of the output address of this transaction. The index starts from 0.
   */
  function ListTransactionsByBlockHashRIBSBVinInner(addresses, coinbase, scriptSig, sequence, txid, txinwitness, value, vout) {
    _classCallCheck(this, ListTransactionsByBlockHashRIBSBVinInner);
    ListTransactionsByBlockHashRIBSBVinInner.initialize(this, addresses, coinbase, scriptSig, sequence, txid, txinwitness, value, vout);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListTransactionsByBlockHashRIBSBVinInner, null, [{
    key: "initialize",
    value: function initialize(obj, addresses, coinbase, scriptSig, sequence, txid, txinwitness, value, vout) {
      obj['addresses'] = addresses;
      obj['coinbase'] = coinbase;
      obj['scriptSig'] = scriptSig;
      obj['sequence'] = sequence;
      obj['txid'] = txid;
      obj['txinwitness'] = txinwitness;
      obj['value'] = value;
      obj['vout'] = vout;
    }

    /**
     * Constructs a <code>ListTransactionsByBlockHashRIBSBVinInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHashRIBSBVinInner} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHashRIBSBVinInner} The populated <code>ListTransactionsByBlockHashRIBSBVinInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByBlockHashRIBSBVinInner();
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
  return ListTransactionsByBlockHashRIBSBVinInner;
}();
/**
 * @member {Array.<String>} addresses
 */
ListTransactionsByBlockHashRIBSBVinInner.prototype['addresses'] = undefined;

/**
 * Represents the coinbase hex.
 * @member {String} coinbase
 */
ListTransactionsByBlockHashRIBSBVinInner.prototype['coinbase'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSBVinInnerScriptSig} scriptSig
 */
ListTransactionsByBlockHashRIBSBVinInner.prototype['scriptSig'] = undefined;

/**
 * Represents the script sequence number.
 * @member {String} sequence
 */
ListTransactionsByBlockHashRIBSBVinInner.prototype['sequence'] = undefined;

/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */
ListTransactionsByBlockHashRIBSBVinInner.prototype['txid'] = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
ListTransactionsByBlockHashRIBSBVinInner.prototype['txinwitness'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
ListTransactionsByBlockHashRIBSBVinInner.prototype['value'] = undefined;

/**
 * It refers to the index of the output address of this transaction. The index starts from 0.
 * @member {Number} vout
 */
ListTransactionsByBlockHashRIBSBVinInner.prototype['vout'] = undefined;
var _default = ListTransactionsByBlockHashRIBSBVinInner;
exports["default"] = _default;