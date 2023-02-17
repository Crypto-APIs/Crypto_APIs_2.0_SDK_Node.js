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
 * The ListTransactionsByBlockHeightRIBSBSCGasPrice model module.
 * @module model/ListTransactionsByBlockHeightRIBSBSCGasPrice
 * @version 1.13.0
 */
var ListTransactionsByBlockHeightRIBSBSCGasPrice = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHeightRIBSBSCGasPrice</code>.
   * @alias module:model/ListTransactionsByBlockHeightRIBSBSCGasPrice
   * @param amount {String} Represents the price offered to the miner to purchase this amount of gas.
   * @param unit {String} Defines the unit of the gas price amount, e.g. BTC, ETH, XRP.
   */
  function ListTransactionsByBlockHeightRIBSBSCGasPrice(amount, unit) {
    _classCallCheck(this, ListTransactionsByBlockHeightRIBSBSCGasPrice);
    ListTransactionsByBlockHeightRIBSBSCGasPrice.initialize(this, amount, unit);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListTransactionsByBlockHeightRIBSBSCGasPrice, null, [{
    key: "initialize",
    value: function initialize(obj, amount, unit) {
      obj['amount'] = amount;
      obj['unit'] = unit;
    }

    /**
     * Constructs a <code>ListTransactionsByBlockHeightRIBSBSCGasPrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightRIBSBSCGasPrice} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightRIBSBSCGasPrice} The populated <code>ListTransactionsByBlockHeightRIBSBSCGasPrice</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByBlockHeightRIBSBSCGasPrice();
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ListTransactionsByBlockHeightRIBSBSCGasPrice;
}();
/**
 * Represents the price offered to the miner to purchase this amount of gas.
 * @member {String} amount
 */
ListTransactionsByBlockHeightRIBSBSCGasPrice.prototype['amount'] = undefined;

/**
 * Defines the unit of the gas price amount, e.g. BTC, ETH, XRP.
 * @member {String} unit
 */
ListTransactionsByBlockHeightRIBSBSCGasPrice.prototype['unit'] = undefined;
var _default = ListTransactionsByBlockHeightRIBSBSCGasPrice;
exports["default"] = _default;