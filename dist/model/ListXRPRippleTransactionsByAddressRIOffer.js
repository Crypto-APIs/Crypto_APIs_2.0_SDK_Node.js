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
 * The ListXRPRippleTransactionsByAddressRIOffer model module.
 * @module model/ListXRPRippleTransactionsByAddressRIOffer
 * @version 1.4.0
 */
var ListXRPRippleTransactionsByAddressRIOffer = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListXRPRippleTransactionsByAddressRIOffer</code>.
   * @alias module:model/ListXRPRippleTransactionsByAddressRIOffer
   * @param amount {String} Defines the amount of the offer.
   * @param unit {String} Defines the unit of the offer.
   */
  function ListXRPRippleTransactionsByAddressRIOffer(amount, unit) {
    _classCallCheck(this, ListXRPRippleTransactionsByAddressRIOffer);

    ListXRPRippleTransactionsByAddressRIOffer.initialize(this, amount, unit);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListXRPRippleTransactionsByAddressRIOffer, null, [{
    key: "initialize",
    value: function initialize(obj, amount, unit) {
      obj['amount'] = amount;
      obj['unit'] = unit;
    }
    /**
     * Constructs a <code>ListXRPRippleTransactionsByAddressRIOffer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListXRPRippleTransactionsByAddressRIOffer} obj Optional instance to populate.
     * @return {module:model/ListXRPRippleTransactionsByAddressRIOffer} The populated <code>ListXRPRippleTransactionsByAddressRIOffer</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListXRPRippleTransactionsByAddressRIOffer();

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

  return ListXRPRippleTransactionsByAddressRIOffer;
}();
/**
 * Defines the amount of the offer.
 * @member {String} amount
 */


ListXRPRippleTransactionsByAddressRIOffer.prototype['amount'] = undefined;
/**
 * Defines the unit of the offer.
 * @member {String} unit
 */

ListXRPRippleTransactionsByAddressRIOffer.prototype['unit'] = undefined;
var _default = ListXRPRippleTransactionsByAddressRIOffer;
exports["default"] = _default;