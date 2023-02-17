"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListTransactionsByBlockHashRIBSZVinInnerScriptSig = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSZVinInnerScriptSig"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListTransactionsByBlockHashRIBSZVinInner model module.
 * @module model/ListTransactionsByBlockHashRIBSZVinInner
 * @version 1.13.0
 */
var ListTransactionsByBlockHashRIBSZVinInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHashRIBSZVinInner</code>.
   * @alias module:model/ListTransactionsByBlockHashRIBSZVinInner
   * @param addresses {Array.<String>} 
   * @param coinbase {String} Represents the coinbase hex.
   * @param scriptSig {module:model/ListTransactionsByBlockHashRIBSZVinInnerScriptSig} 
   * @param sequence {Number} Represents the script sequence number.
   * @param txid {String} Represents the reference transaction identifier.
   * @param txinwitness {Array.<String>} 
   * @param value {String} Defines the specific amount.
   * @param vout {Number} It refers to the index of the output address of this transaction. The index starts from 0.
   */
  function ListTransactionsByBlockHashRIBSZVinInner(addresses, coinbase, scriptSig, sequence, txid, txinwitness, value, vout) {
    _classCallCheck(this, ListTransactionsByBlockHashRIBSZVinInner);
    ListTransactionsByBlockHashRIBSZVinInner.initialize(this, addresses, coinbase, scriptSig, sequence, txid, txinwitness, value, vout);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListTransactionsByBlockHashRIBSZVinInner, null, [{
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
     * Constructs a <code>ListTransactionsByBlockHashRIBSZVinInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHashRIBSZVinInner} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHashRIBSZVinInner} The populated <code>ListTransactionsByBlockHashRIBSZVinInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByBlockHashRIBSZVinInner();
        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], ['String']);
        }
        if (data.hasOwnProperty('coinbase')) {
          obj['coinbase'] = _ApiClient["default"].convertToType(data['coinbase'], 'String');
        }
        if (data.hasOwnProperty('scriptSig')) {
          obj['scriptSig'] = _ListTransactionsByBlockHashRIBSZVinInnerScriptSig["default"].constructFromObject(data['scriptSig']);
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
  return ListTransactionsByBlockHashRIBSZVinInner;
}();
/**
 * @member {Array.<String>} addresses
 */
ListTransactionsByBlockHashRIBSZVinInner.prototype['addresses'] = undefined;

/**
 * Represents the coinbase hex.
 * @member {String} coinbase
 */
ListTransactionsByBlockHashRIBSZVinInner.prototype['coinbase'] = undefined;

/**
 * @member {module:model/ListTransactionsByBlockHashRIBSZVinInnerScriptSig} scriptSig
 */
ListTransactionsByBlockHashRIBSZVinInner.prototype['scriptSig'] = undefined;

/**
 * Represents the script sequence number.
 * @member {Number} sequence
 */
ListTransactionsByBlockHashRIBSZVinInner.prototype['sequence'] = undefined;

/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */
ListTransactionsByBlockHashRIBSZVinInner.prototype['txid'] = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
ListTransactionsByBlockHashRIBSZVinInner.prototype['txinwitness'] = undefined;

/**
 * Defines the specific amount.
 * @member {String} value
 */
ListTransactionsByBlockHashRIBSZVinInner.prototype['value'] = undefined;

/**
 * It refers to the index of the output address of this transaction. The index starts from 0.
 * @member {Number} vout
 */
ListTransactionsByBlockHashRIBSZVinInner.prototype['vout'] = undefined;
var _default = ListTransactionsByBlockHashRIBSZVinInner;
exports["default"] = _default;