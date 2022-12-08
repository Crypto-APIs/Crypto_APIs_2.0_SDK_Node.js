"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareTransactionFromAddressRIBSBSCFee = _interopRequireDefault(require("./PrepareTransactionFromAddressRIBSBSCFee"));
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
 * The PrepareTransactionFromAddressRIBSE model module.
 * @module model/PrepareTransactionFromAddressRIBSE
 * @version 1.11.0
 */
var PrepareTransactionFromAddressRIBSE = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareTransactionFromAddressRIBSE</code>.
   * Ethereum
   * @alias module:model/PrepareTransactionFromAddressRIBSE
   * @param fee {module:model/PrepareTransactionFromAddressRIBSBSCFee} 
   * @param transactionType {module:model/PrepareTransactionFromAddressRIBSE.TransactionTypeEnum} Representation of the transaction type
   * @param unit {String} Represents the unit of the amount transacted.
   */
  function PrepareTransactionFromAddressRIBSE(fee, transactionType, unit) {
    _classCallCheck(this, PrepareTransactionFromAddressRIBSE);
    PrepareTransactionFromAddressRIBSE.initialize(this, fee, transactionType, unit);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareTransactionFromAddressRIBSE, null, [{
    key: "initialize",
    value: function initialize(obj, fee, transactionType, unit) {
      obj['fee'] = fee;
      obj['transactionType'] = transactionType;
      obj['unit'] = unit;
    }

    /**
     * Constructs a <code>PrepareTransactionFromAddressRIBSE</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareTransactionFromAddressRIBSE} obj Optional instance to populate.
     * @return {module:model/PrepareTransactionFromAddressRIBSE} The populated <code>PrepareTransactionFromAddressRIBSE</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareTransactionFromAddressRIBSE();
        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _PrepareTransactionFromAddressRIBSBSCFee["default"].constructFromObject(data['fee']);
        }
        if (data.hasOwnProperty('transactionType')) {
          obj['transactionType'] = _ApiClient["default"].convertToType(data['transactionType'], 'String');
        }
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PrepareTransactionFromAddressRIBSE</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PrepareTransactionFromAddressRIBSE</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(PrepareTransactionFromAddressRIBSE.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // validate the optional field `fee`
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['fee']) {
        // data not null
        _PrepareTransactionFromAddressRIBSBSCFee["default"].validateJSON(data['fee']);
      }
      // ensure the json data is a string
      if (data['transactionType'] && !(typeof data['transactionType'] === 'string' || data['transactionType'] instanceof String)) {
        throw new Error("Expected the field `transactionType` to be a primitive type in the JSON string but got " + data['transactionType']);
      }
      // ensure the json data is a string
      if (data['unit'] && !(typeof data['unit'] === 'string' || data['unit'] instanceof String)) {
        throw new Error("Expected the field `unit` to be a primitive type in the JSON string but got " + data['unit']);
      }
      return true;
    }
  }]);
  return PrepareTransactionFromAddressRIBSE;
}();
PrepareTransactionFromAddressRIBSE.RequiredProperties = ["fee", "transactionType", "unit"];

/**
 * @member {module:model/PrepareTransactionFromAddressRIBSBSCFee} fee
 */
PrepareTransactionFromAddressRIBSE.prototype['fee'] = undefined;

/**
 * Representation of the transaction type
 * @member {module:model/PrepareTransactionFromAddressRIBSE.TransactionTypeEnum} transactionType
 */
PrepareTransactionFromAddressRIBSE.prototype['transactionType'] = undefined;

/**
 * Represents the unit of the amount transacted.
 * @member {String} unit
 */
PrepareTransactionFromAddressRIBSE.prototype['unit'] = undefined;

/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
PrepareTransactionFromAddressRIBSE['TransactionTypeEnum'] = {
  /**
   * value: "legacy-transaction"
   * @const
   */
  "legacy-transaction": "legacy-transaction",
  /**
   * value: "access-list-transaction"
   * @const
   */
  "access-list-transaction": "access-list-transaction",
  /**
   * value: "gas-fee-market-transaction"
   * @const
   */
  "gas-fee-market-transaction": "gas-fee-market-transaction"
};
var _default = PrepareTransactionFromAddressRIBSE;
exports["default"] = _default;