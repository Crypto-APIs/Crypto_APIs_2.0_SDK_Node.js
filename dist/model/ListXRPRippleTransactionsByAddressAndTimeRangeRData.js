"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListXRPRippleTransactionsByAddressAndTimeRangeRI = _interopRequireDefault(require("./ListXRPRippleTransactionsByAddressAndTimeRangeRI"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListXRPRippleTransactionsByAddressAndTimeRangeRData model module.
 * @module model/ListXRPRippleTransactionsByAddressAndTimeRangeRData
 * @version 1.13.0
 */
var ListXRPRippleTransactionsByAddressAndTimeRangeRData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListXRPRippleTransactionsByAddressAndTimeRangeRData</code>.
   * @alias module:model/ListXRPRippleTransactionsByAddressAndTimeRangeRData
   * @param limit {Number} Defines how many items should be returned in the response per page basis.
   * @param offset {Number} The starting index of the response items, i.e. where the response should start listing the returned items.
   * @param total {Number} Defines the total number of items returned in the response.
   * @param items {Array.<module:model/ListXRPRippleTransactionsByAddressAndTimeRangeRI>} 
   */
  function ListXRPRippleTransactionsByAddressAndTimeRangeRData(limit, offset, total, items) {
    _classCallCheck(this, ListXRPRippleTransactionsByAddressAndTimeRangeRData);
    ListXRPRippleTransactionsByAddressAndTimeRangeRData.initialize(this, limit, offset, total, items);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListXRPRippleTransactionsByAddressAndTimeRangeRData, null, [{
    key: "initialize",
    value: function initialize(obj, limit, offset, total, items) {
      obj['limit'] = limit;
      obj['offset'] = offset;
      obj['total'] = total;
      obj['items'] = items;
    }

    /**
     * Constructs a <code>ListXRPRippleTransactionsByAddressAndTimeRangeRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListXRPRippleTransactionsByAddressAndTimeRangeRData} obj Optional instance to populate.
     * @return {module:model/ListXRPRippleTransactionsByAddressAndTimeRangeRData} The populated <code>ListXRPRippleTransactionsByAddressAndTimeRangeRData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListXRPRippleTransactionsByAddressAndTimeRangeRData();
        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }
        if (data.hasOwnProperty('offset')) {
          obj['offset'] = _ApiClient["default"].convertToType(data['offset'], 'Number');
        }
        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_ListXRPRippleTransactionsByAddressAndTimeRangeRI["default"]]);
        }
      }
      return obj;
    }
  }]);
  return ListXRPRippleTransactionsByAddressAndTimeRangeRData;
}();
/**
 * Defines how many items should be returned in the response per page basis.
 * @member {Number} limit
 */
ListXRPRippleTransactionsByAddressAndTimeRangeRData.prototype['limit'] = undefined;

/**
 * The starting index of the response items, i.e. where the response should start listing the returned items.
 * @member {Number} offset
 */
ListXRPRippleTransactionsByAddressAndTimeRangeRData.prototype['offset'] = undefined;

/**
 * Defines the total number of items returned in the response.
 * @member {Number} total
 */
ListXRPRippleTransactionsByAddressAndTimeRangeRData.prototype['total'] = undefined;

/**
 * @member {Array.<module:model/ListXRPRippleTransactionsByAddressAndTimeRangeRI>} items
 */
ListXRPRippleTransactionsByAddressAndTimeRangeRData.prototype['items'] = undefined;
var _default = ListXRPRippleTransactionsByAddressAndTimeRangeRData;
exports["default"] = _default;