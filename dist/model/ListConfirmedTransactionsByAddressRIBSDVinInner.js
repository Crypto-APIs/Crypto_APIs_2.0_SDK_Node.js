"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListConfirmedTransactionsByAddressRIBSDVinInnerScriptSig = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSDVinInnerScriptSig"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListConfirmedTransactionsByAddressRIBSDVinInner model module.
 * @module model/ListConfirmedTransactionsByAddressRIBSDVinInner
 * @version 1.11.0
 */
var ListConfirmedTransactionsByAddressRIBSDVinInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListConfirmedTransactionsByAddressRIBSDVinInner</code>.
   * @alias module:model/ListConfirmedTransactionsByAddressRIBSDVinInner
   * @param addresses {Array.<String>} 
   * @param coinbase {String} Represents the coinbase hex.
   * @param scriptSig {module:model/ListConfirmedTransactionsByAddressRIBSDVinInnerScriptSig} 
   * @param sequence {String} Represents the script sequence number.
   * @param txinwitness {Array.<String>} 
   * @param value {String} Represents the sent/received amount.
   */
  function ListConfirmedTransactionsByAddressRIBSDVinInner(addresses, coinbase, scriptSig, sequence, txinwitness, value) {
    _classCallCheck(this, ListConfirmedTransactionsByAddressRIBSDVinInner);
    ListConfirmedTransactionsByAddressRIBSDVinInner.initialize(this, addresses, coinbase, scriptSig, sequence, txinwitness, value);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListConfirmedTransactionsByAddressRIBSDVinInner, null, [{
    key: "initialize",
    value: function initialize(obj, addresses, coinbase, scriptSig, sequence, txinwitness, value) {
      obj['addresses'] = addresses;
      obj['coinbase'] = coinbase;
      obj['scriptSig'] = scriptSig;
      obj['sequence'] = sequence;
      obj['txinwitness'] = txinwitness;
      obj['value'] = value;
    }

    /**
     * Constructs a <code>ListConfirmedTransactionsByAddressRIBSDVinInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTransactionsByAddressRIBSDVinInner} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTransactionsByAddressRIBSDVinInner} The populated <code>ListConfirmedTransactionsByAddressRIBSDVinInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListConfirmedTransactionsByAddressRIBSDVinInner();
        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], ['String']);
        }
        if (data.hasOwnProperty('coinbase')) {
          obj['coinbase'] = _ApiClient["default"].convertToType(data['coinbase'], 'String');
        }
        if (data.hasOwnProperty('scriptSig')) {
          obj['scriptSig'] = _ListConfirmedTransactionsByAddressRIBSDVinInnerScriptSig["default"].constructFromObject(data['scriptSig']);
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

    /**
     * Validates the JSON data with respect to <code>ListConfirmedTransactionsByAddressRIBSDVinInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListConfirmedTransactionsByAddressRIBSDVinInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(ListConfirmedTransactionsByAddressRIBSDVinInner.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is an array
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (!Array.isArray(data['addresses'])) {
        throw new Error("Expected the field `addresses` to be an array in the JSON data but got " + data['addresses']);
      }
      // ensure the json data is a string
      if (data['coinbase'] && !(typeof data['coinbase'] === 'string' || data['coinbase'] instanceof String)) {
        throw new Error("Expected the field `coinbase` to be a primitive type in the JSON string but got " + data['coinbase']);
      }
      // validate the optional field `scriptSig`
      if (data['scriptSig']) {
        // data not null
        _ListConfirmedTransactionsByAddressRIBSDVinInnerScriptSig["default"].validateJSON(data['scriptSig']);
      }
      // ensure the json data is a string
      if (data['sequence'] && !(typeof data['sequence'] === 'string' || data['sequence'] instanceof String)) {
        throw new Error("Expected the field `sequence` to be a primitive type in the JSON string but got " + data['sequence']);
      }
      // ensure the json data is a string
      if (data['txid'] && !(typeof data['txid'] === 'string' || data['txid'] instanceof String)) {
        throw new Error("Expected the field `txid` to be a primitive type in the JSON string but got " + data['txid']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['txinwitness'])) {
        throw new Error("Expected the field `txinwitness` to be an array in the JSON data but got " + data['txinwitness']);
      }
      // ensure the json data is a string
      if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
        throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
      }
      return true;
    }
  }]);
  return ListConfirmedTransactionsByAddressRIBSDVinInner;
}();
ListConfirmedTransactionsByAddressRIBSDVinInner.RequiredProperties = ["addresses", "coinbase", "scriptSig", "sequence", "txinwitness", "value"];

/**
 * @member {Array.<String>} addresses
 */
ListConfirmedTransactionsByAddressRIBSDVinInner.prototype['addresses'] = undefined;

/**
 * Represents the coinbase hex.
 * @member {String} coinbase
 */
ListConfirmedTransactionsByAddressRIBSDVinInner.prototype['coinbase'] = undefined;

/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSDVinInnerScriptSig} scriptSig
 */
ListConfirmedTransactionsByAddressRIBSDVinInner.prototype['scriptSig'] = undefined;

/**
 * Represents the script sequence number.
 * @member {String} sequence
 */
ListConfirmedTransactionsByAddressRIBSDVinInner.prototype['sequence'] = undefined;

/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */
ListConfirmedTransactionsByAddressRIBSDVinInner.prototype['txid'] = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
ListConfirmedTransactionsByAddressRIBSDVinInner.prototype['txinwitness'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
ListConfirmedTransactionsByAddressRIBSDVinInner.prototype['value'] = undefined;

/**
 * It refers to the index of the output address of this transaction. The index starts from 0.
 * @member {Number} vout
 */
ListConfirmedTransactionsByAddressRIBSDVinInner.prototype['vout'] = undefined;
var _default = ListConfirmedTransactionsByAddressRIBSDVinInner;
exports["default"] = _default;