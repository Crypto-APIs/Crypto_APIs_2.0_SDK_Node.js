"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListXRPRippleTransactionsByAddressRI = _interopRequireDefault(require("./ListXRPRippleTransactionsByAddressRI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListXRPRippleTransactionsByAddressRData model module.
 * @module model/ListXRPRippleTransactionsByAddressRData
 * @version 1.1.0
 */
var ListXRPRippleTransactionsByAddressRData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListXRPRippleTransactionsByAddressRData</code>.
   * @alias module:model/ListXRPRippleTransactionsByAddressRData
   * @param offset {Number} The starting index of the response items, i.e. where the response should start listing the returned items.
   * @param limit {Number} Defines how many items should be returned in the response per page basis.
   * @param total {Number} Defines the total number of items returned in the response.
   * @param items {Array.<module:model/ListXRPRippleTransactionsByAddressRI>} 
   */
  function ListXRPRippleTransactionsByAddressRData(offset, limit, total, items) {
    _classCallCheck(this, ListXRPRippleTransactionsByAddressRData);

    ListXRPRippleTransactionsByAddressRData.initialize(this, offset, limit, total, items);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListXRPRippleTransactionsByAddressRData, null, [{
    key: "initialize",
    value: function initialize(obj, offset, limit, total, items) {
      obj['offset'] = offset;
      obj['limit'] = limit;
      obj['total'] = total;
      obj['items'] = items;
    }
    /**
     * Constructs a <code>ListXRPRippleTransactionsByAddressRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListXRPRippleTransactionsByAddressRData} obj Optional instance to populate.
     * @return {module:model/ListXRPRippleTransactionsByAddressRData} The populated <code>ListXRPRippleTransactionsByAddressRData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListXRPRippleTransactionsByAddressRData();

        if (data.hasOwnProperty('offset')) {
          obj['offset'] = _ApiClient["default"].convertToType(data['offset'], 'Number');
        }

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_ListXRPRippleTransactionsByAddressRI["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ListXRPRippleTransactionsByAddressRData;
}();
/**
 * The starting index of the response items, i.e. where the response should start listing the returned items.
 * @member {Number} offset
 */


ListXRPRippleTransactionsByAddressRData.prototype['offset'] = undefined;
/**
 * Defines how many items should be returned in the response per page basis.
 * @member {Number} limit
 */

ListXRPRippleTransactionsByAddressRData.prototype['limit'] = undefined;
/**
 * Defines the total number of items returned in the response.
 * @member {Number} total
 */

ListXRPRippleTransactionsByAddressRData.prototype['total'] = undefined;
/**
 * @member {Array.<module:model/ListXRPRippleTransactionsByAddressRI>} items
 */

ListXRPRippleTransactionsByAddressRData.prototype['items'] = undefined;
var _default = ListXRPRippleTransactionsByAddressRData;
exports["default"] = _default;