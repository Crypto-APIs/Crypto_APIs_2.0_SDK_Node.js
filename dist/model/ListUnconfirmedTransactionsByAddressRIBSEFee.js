"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListUnconfirmedTransactionsByAddressRIBSEFee model module.
 * @module model/ListUnconfirmedTransactionsByAddressRIBSEFee
 * @version 1.7.2
 */
var ListUnconfirmedTransactionsByAddressRIBSEFee = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListUnconfirmedTransactionsByAddressRIBSEFee</code>.
   * Object representation of the transaction fee
   * @alias module:model/ListUnconfirmedTransactionsByAddressRIBSEFee
   * @param amount {String} String representation of the fee value
   * @param unit {String} 
   */
  function ListUnconfirmedTransactionsByAddressRIBSEFee(amount, unit) {
    _classCallCheck(this, ListUnconfirmedTransactionsByAddressRIBSEFee);

    ListUnconfirmedTransactionsByAddressRIBSEFee.initialize(this, amount, unit);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListUnconfirmedTransactionsByAddressRIBSEFee, null, [{
    key: "initialize",
    value: function initialize(obj, amount, unit) {
      obj['amount'] = amount;
      obj['unit'] = unit;
    }
    /**
     * Constructs a <code>ListUnconfirmedTransactionsByAddressRIBSEFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnconfirmedTransactionsByAddressRIBSEFee} obj Optional instance to populate.
     * @return {module:model/ListUnconfirmedTransactionsByAddressRIBSEFee} The populated <code>ListUnconfirmedTransactionsByAddressRIBSEFee</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListUnconfirmedTransactionsByAddressRIBSEFee();

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

  return ListUnconfirmedTransactionsByAddressRIBSEFee;
}();
/**
 * String representation of the fee value
 * @member {String} amount
 */


ListUnconfirmedTransactionsByAddressRIBSEFee.prototype['amount'] = undefined;
/**
 * @member {String} unit
 */

ListUnconfirmedTransactionsByAddressRIBSEFee.prototype['unit'] = undefined;
var _default = ListUnconfirmedTransactionsByAddressRIBSEFee;
exports["default"] = _default;