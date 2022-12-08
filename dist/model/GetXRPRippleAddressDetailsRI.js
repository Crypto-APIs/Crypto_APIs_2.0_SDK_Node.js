"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetXRPRippleAddressDetailsRIBalance = _interopRequireDefault(require("./GetXRPRippleAddressDetailsRIBalance"));
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
 * The GetXRPRippleAddressDetailsRI model module.
 * @module model/GetXRPRippleAddressDetailsRI
 * @version 1.11.0
 */
var GetXRPRippleAddressDetailsRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetXRPRippleAddressDetailsRI</code>.
   * @alias module:model/GetXRPRippleAddressDetailsRI
   * @param balance {module:model/GetXRPRippleAddressDetailsRIBalance} 
   * @param incomingTransactionsCount {Number} Defines the count of all confirmed incoming transactions from the address for coins. This applies to coins only, not to tokens transfers
   * @param outgoingTransactionsCount {Number} Defines the count of all confirmed outgoing transactions for coins. This applies to coins only, not to tokens transfers
   * @param sequence {Number} Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
   * @param transactionsCount {Number} Represents the total number of all transactions as part of this block.
   */
  function GetXRPRippleAddressDetailsRI(balance, incomingTransactionsCount, outgoingTransactionsCount, sequence, transactionsCount) {
    _classCallCheck(this, GetXRPRippleAddressDetailsRI);
    GetXRPRippleAddressDetailsRI.initialize(this, balance, incomingTransactionsCount, outgoingTransactionsCount, sequence, transactionsCount);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetXRPRippleAddressDetailsRI, null, [{
    key: "initialize",
    value: function initialize(obj, balance, incomingTransactionsCount, outgoingTransactionsCount, sequence, transactionsCount) {
      obj['balance'] = balance;
      obj['incomingTransactionsCount'] = incomingTransactionsCount;
      obj['outgoingTransactionsCount'] = outgoingTransactionsCount;
      obj['sequence'] = sequence;
      obj['transactionsCount'] = transactionsCount;
    }

    /**
     * Constructs a <code>GetXRPRippleAddressDetailsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetXRPRippleAddressDetailsRI} obj Optional instance to populate.
     * @return {module:model/GetXRPRippleAddressDetailsRI} The populated <code>GetXRPRippleAddressDetailsRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetXRPRippleAddressDetailsRI();
        if (data.hasOwnProperty('balance')) {
          obj['balance'] = _GetXRPRippleAddressDetailsRIBalance["default"].constructFromObject(data['balance']);
        }
        if (data.hasOwnProperty('incomingTransactionsCount')) {
          obj['incomingTransactionsCount'] = _ApiClient["default"].convertToType(data['incomingTransactionsCount'], 'Number');
        }
        if (data.hasOwnProperty('outgoingTransactionsCount')) {
          obj['outgoingTransactionsCount'] = _ApiClient["default"].convertToType(data['outgoingTransactionsCount'], 'Number');
        }
        if (data.hasOwnProperty('sequence')) {
          obj['sequence'] = _ApiClient["default"].convertToType(data['sequence'], 'Number');
        }
        if (data.hasOwnProperty('transactionsCount')) {
          obj['transactionsCount'] = _ApiClient["default"].convertToType(data['transactionsCount'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetXRPRippleAddressDetailsRI</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetXRPRippleAddressDetailsRI</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(GetXRPRippleAddressDetailsRI.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // validate the optional field `balance`
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['balance']) {
        // data not null
        _GetXRPRippleAddressDetailsRIBalance["default"].validateJSON(data['balance']);
      }
      return true;
    }
  }]);
  return GetXRPRippleAddressDetailsRI;
}();
GetXRPRippleAddressDetailsRI.RequiredProperties = ["balance", "incomingTransactionsCount", "outgoingTransactionsCount", "sequence", "transactionsCount"];

/**
 * @member {module:model/GetXRPRippleAddressDetailsRIBalance} balance
 */
GetXRPRippleAddressDetailsRI.prototype['balance'] = undefined;

/**
 * Defines the count of all confirmed incoming transactions from the address for coins. This applies to coins only, not to tokens transfers
 * @member {Number} incomingTransactionsCount
 */
GetXRPRippleAddressDetailsRI.prototype['incomingTransactionsCount'] = undefined;

/**
 * Defines the count of all confirmed outgoing transactions for coins. This applies to coins only, not to tokens transfers
 * @member {Number} outgoingTransactionsCount
 */
GetXRPRippleAddressDetailsRI.prototype['outgoingTransactionsCount'] = undefined;

/**
 * Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
 * @member {Number} sequence
 */
GetXRPRippleAddressDetailsRI.prototype['sequence'] = undefined;

/**
 * Represents the total number of all transactions as part of this block.
 * @member {Number} transactionsCount
 */
GetXRPRippleAddressDetailsRI.prototype['transactionsCount'] = undefined;
var _default = GetXRPRippleAddressDetailsRI;
exports["default"] = _default;