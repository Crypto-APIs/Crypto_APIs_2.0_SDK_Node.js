"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ConfirmedCoinsTransactionForCertainAmountOrHigherDataItem = _interopRequireDefault(require("./ConfirmedCoinsTransactionForCertainAmountOrHigherDataItem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ConfirmedCoinsTransactionForCertainAmountOrHigherData model module.
 * @module model/ConfirmedCoinsTransactionForCertainAmountOrHigherData
 * @version 1.13.0
 */
var ConfirmedCoinsTransactionForCertainAmountOrHigherData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConfirmedCoinsTransactionForCertainAmountOrHigherData</code>.
   * Specifies all data, as attributes, included into the callback notification, which depends on the &#x60;event&#x60;.
   * @alias module:model/ConfirmedCoinsTransactionForCertainAmountOrHigherData
   * @param product {String} Represents the Crypto APIs 2.0 product which sends the callback.
   * @param event {String} Defines the specific event, for which a callback subscription is set.
   * @param item {module:model/ConfirmedCoinsTransactionForCertainAmountOrHigherDataItem} 
   */
  function ConfirmedCoinsTransactionForCertainAmountOrHigherData(product, event, item) {
    _classCallCheck(this, ConfirmedCoinsTransactionForCertainAmountOrHigherData);
    ConfirmedCoinsTransactionForCertainAmountOrHigherData.initialize(this, product, event, item);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ConfirmedCoinsTransactionForCertainAmountOrHigherData, null, [{
    key: "initialize",
    value: function initialize(obj, product, event, item) {
      obj['product'] = product;
      obj['event'] = event;
      obj['item'] = item;
    }

    /**
     * Constructs a <code>ConfirmedCoinsTransactionForCertainAmountOrHigherData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfirmedCoinsTransactionForCertainAmountOrHigherData} obj Optional instance to populate.
     * @return {module:model/ConfirmedCoinsTransactionForCertainAmountOrHigherData} The populated <code>ConfirmedCoinsTransactionForCertainAmountOrHigherData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConfirmedCoinsTransactionForCertainAmountOrHigherData();
        if (data.hasOwnProperty('product')) {
          obj['product'] = _ApiClient["default"].convertToType(data['product'], 'String');
        }
        if (data.hasOwnProperty('event')) {
          obj['event'] = _ApiClient["default"].convertToType(data['event'], 'String');
        }
        if (data.hasOwnProperty('item')) {
          obj['item'] = _ConfirmedCoinsTransactionForCertainAmountOrHigherDataItem["default"].constructFromObject(data['item']);
        }
      }
      return obj;
    }
  }]);
  return ConfirmedCoinsTransactionForCertainAmountOrHigherData;
}();
/**
 * Represents the Crypto APIs 2.0 product which sends the callback.
 * @member {String} product
 */
ConfirmedCoinsTransactionForCertainAmountOrHigherData.prototype['product'] = undefined;

/**
 * Defines the specific event, for which a callback subscription is set.
 * @member {String} event
 */
ConfirmedCoinsTransactionForCertainAmountOrHigherData.prototype['event'] = undefined;

/**
 * @member {module:model/ConfirmedCoinsTransactionForCertainAmountOrHigherDataItem} item
 */
ConfirmedCoinsTransactionForCertainAmountOrHigherData.prototype['item'] = undefined;
var _default = ConfirmedCoinsTransactionForCertainAmountOrHigherData;
exports["default"] = _default;