"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListTransactionsByAddressRIBSECGasPrice model module.
 * @module model/ListTransactionsByAddressRIBSECGasPrice
 * @version 1.1.0
 */
var ListTransactionsByAddressRIBSECGasPrice = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByAddressRIBSECGasPrice</code>.
   * @alias module:model/ListTransactionsByAddressRIBSECGasPrice
   * @param amount {String} Represents the price offered to the miner to purchase this amount of gas.
   * @param unit {String} Defines the unit of the gas price amount, e.g. BTC, ETH, XRP.
   */
  function ListTransactionsByAddressRIBSECGasPrice(amount, unit) {
    _classCallCheck(this, ListTransactionsByAddressRIBSECGasPrice);

    ListTransactionsByAddressRIBSECGasPrice.initialize(this, amount, unit);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTransactionsByAddressRIBSECGasPrice, null, [{
    key: "initialize",
    value: function initialize(obj, amount, unit) {
      obj['amount'] = amount;
      obj['unit'] = unit;
    }
    /**
     * Constructs a <code>ListTransactionsByAddressRIBSECGasPrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByAddressRIBSECGasPrice} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByAddressRIBSECGasPrice} The populated <code>ListTransactionsByAddressRIBSECGasPrice</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByAddressRIBSECGasPrice();

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

  return ListTransactionsByAddressRIBSECGasPrice;
}();
/**
 * Represents the price offered to the miner to purchase this amount of gas.
 * @member {String} amount
 */


ListTransactionsByAddressRIBSECGasPrice.prototype['amount'] = undefined;
/**
 * Defines the unit of the gas price amount, e.g. BTC, ETH, XRP.
 * @member {String} unit
 */

ListTransactionsByAddressRIBSECGasPrice.prototype['unit'] = undefined;
var _default = ListTransactionsByAddressRIBSECGasPrice;
exports["default"] = _default;