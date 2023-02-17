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
 * The ListWalletTransactionsRIInternalTransactionsInner model module.
 * @module model/ListWalletTransactionsRIInternalTransactionsInner
 * @version 1.13.0
 */
var ListWalletTransactionsRIInternalTransactionsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListWalletTransactionsRIInternalTransactionsInner</code>.
   * @alias module:model/ListWalletTransactionsRIInternalTransactionsInner
   * @param amount {String} Defines the specific amount of the transaction.
   * @param convertedAmount {String} Represents the converted amount.
   * @param exchangeRateUnit {String} Defines the base asset symbol to get a rate for.
   * @param operationId {String} Represents the unique internal transaction ID in regards to the parent transaction (type trace address).
   * @param recipient {String} Represents the recipient address with the respective amount.
   * @param sender {String} Represents the sender address with the respective amount.
   * @param symbol {String} Represents the unique unit symbol.
   */
  function ListWalletTransactionsRIInternalTransactionsInner(amount, convertedAmount, exchangeRateUnit, operationId, recipient, sender, symbol) {
    _classCallCheck(this, ListWalletTransactionsRIInternalTransactionsInner);
    ListWalletTransactionsRIInternalTransactionsInner.initialize(this, amount, convertedAmount, exchangeRateUnit, operationId, recipient, sender, symbol);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListWalletTransactionsRIInternalTransactionsInner, null, [{
    key: "initialize",
    value: function initialize(obj, amount, convertedAmount, exchangeRateUnit, operationId, recipient, sender, symbol) {
      obj['amount'] = amount;
      obj['convertedAmount'] = convertedAmount;
      obj['exchangeRateUnit'] = exchangeRateUnit;
      obj['operationId'] = operationId;
      obj['recipient'] = recipient;
      obj['sender'] = sender;
      obj['symbol'] = symbol;
    }

    /**
     * Constructs a <code>ListWalletTransactionsRIInternalTransactionsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListWalletTransactionsRIInternalTransactionsInner} obj Optional instance to populate.
     * @return {module:model/ListWalletTransactionsRIInternalTransactionsInner} The populated <code>ListWalletTransactionsRIInternalTransactionsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListWalletTransactionsRIInternalTransactionsInner();
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
        if (data.hasOwnProperty('convertedAmount')) {
          obj['convertedAmount'] = _ApiClient["default"].convertToType(data['convertedAmount'], 'String');
        }
        if (data.hasOwnProperty('exchangeRateUnit')) {
          obj['exchangeRateUnit'] = _ApiClient["default"].convertToType(data['exchangeRateUnit'], 'String');
        }
        if (data.hasOwnProperty('operationId')) {
          obj['operationId'] = _ApiClient["default"].convertToType(data['operationId'], 'String');
        }
        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _ApiClient["default"].convertToType(data['recipient'], 'String');
        }
        if (data.hasOwnProperty('sender')) {
          obj['sender'] = _ApiClient["default"].convertToType(data['sender'], 'String');
        }
        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ListWalletTransactionsRIInternalTransactionsInner;
}();
/**
 * Defines the specific amount of the transaction.
 * @member {String} amount
 */
ListWalletTransactionsRIInternalTransactionsInner.prototype['amount'] = undefined;

/**
 * Represents the converted amount.
 * @member {String} convertedAmount
 */
ListWalletTransactionsRIInternalTransactionsInner.prototype['convertedAmount'] = undefined;

/**
 * Defines the base asset symbol to get a rate for.
 * @member {String} exchangeRateUnit
 */
ListWalletTransactionsRIInternalTransactionsInner.prototype['exchangeRateUnit'] = undefined;

/**
 * Represents the unique internal transaction ID in regards to the parent transaction (type trace address).
 * @member {String} operationId
 */
ListWalletTransactionsRIInternalTransactionsInner.prototype['operationId'] = undefined;

/**
 * Represents the recipient address with the respective amount.
 * @member {String} recipient
 */
ListWalletTransactionsRIInternalTransactionsInner.prototype['recipient'] = undefined;

/**
 * Represents the sender address with the respective amount.
 * @member {String} sender
 */
ListWalletTransactionsRIInternalTransactionsInner.prototype['sender'] = undefined;

/**
 * Represents the unique unit symbol.
 * @member {String} symbol
 */
ListWalletTransactionsRIInternalTransactionsInner.prototype['symbol'] = undefined;
var _default = ListWalletTransactionsRIInternalTransactionsInner;
exports["default"] = _default;