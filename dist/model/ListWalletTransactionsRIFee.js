"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListWalletTransactionsRIFee model module.
 * @module model/ListWalletTransactionsRIFee
 * @version 1.13.0
 */
var ListWalletTransactionsRIFee = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListWalletTransactionsRIFee</code>.
   * @alias module:model/ListWalletTransactionsRIFee
   * @param amount {String} Defines the fee for the transaction.
   * @param convertedAmount {String} Defines the converted amount of the transaction's fee.
   * @param exchangeRateUnit {String} Defines the exchange rate for the transaction's unit.
   * @param symbol {String} Defines the unit of the transaction's fee.
   */
  function ListWalletTransactionsRIFee(amount, convertedAmount, exchangeRateUnit, symbol) {
    _classCallCheck(this, ListWalletTransactionsRIFee);
    ListWalletTransactionsRIFee.initialize(this, amount, convertedAmount, exchangeRateUnit, symbol);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListWalletTransactionsRIFee, null, [{
    key: "initialize",
    value: function initialize(obj, amount, convertedAmount, exchangeRateUnit, symbol) {
      obj['amount'] = amount;
      obj['convertedAmount'] = convertedAmount;
      obj['exchangeRateUnit'] = exchangeRateUnit;
      obj['symbol'] = symbol;
    }

    /**
     * Constructs a <code>ListWalletTransactionsRIFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListWalletTransactionsRIFee} obj Optional instance to populate.
     * @return {module:model/ListWalletTransactionsRIFee} The populated <code>ListWalletTransactionsRIFee</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListWalletTransactionsRIFee();
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
        if (data.hasOwnProperty('convertedAmount')) {
          obj['convertedAmount'] = _ApiClient["default"].convertToType(data['convertedAmount'], 'String');
        }
        if (data.hasOwnProperty('exchangeRateUnit')) {
          obj['exchangeRateUnit'] = _ApiClient["default"].convertToType(data['exchangeRateUnit'], 'String');
        }
        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ListWalletTransactionsRIFee;
}();
/**
 * Defines the fee for the transaction.
 * @member {String} amount
 */
ListWalletTransactionsRIFee.prototype['amount'] = undefined;

/**
 * Defines the converted amount of the transaction's fee.
 * @member {String} convertedAmount
 */
ListWalletTransactionsRIFee.prototype['convertedAmount'] = undefined;

/**
 * Defines the exchange rate for the transaction's unit.
 * @member {String} exchangeRateUnit
 */
ListWalletTransactionsRIFee.prototype['exchangeRateUnit'] = undefined;

/**
 * Defines the unit of the transaction's fee.
 * @member {String} symbol
 */
ListWalletTransactionsRIFee.prototype['symbol'] = undefined;
var _default = ListWalletTransactionsRIFee;
exports["default"] = _default;