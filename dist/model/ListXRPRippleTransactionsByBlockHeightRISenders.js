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
 * The ListXRPRippleTransactionsByBlockHeightRISenders model module.
 * @module model/ListXRPRippleTransactionsByBlockHeightRISenders
 * @version 1.3.0
 */
var ListXRPRippleTransactionsByBlockHeightRISenders = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListXRPRippleTransactionsByBlockHeightRISenders</code>.
   * @alias module:model/ListXRPRippleTransactionsByBlockHeightRISenders
   * @param address {String} String array representation of the sender address
   * @param amount {String} String representation of the amount
   */
  function ListXRPRippleTransactionsByBlockHeightRISenders(address, amount) {
    _classCallCheck(this, ListXRPRippleTransactionsByBlockHeightRISenders);

    ListXRPRippleTransactionsByBlockHeightRISenders.initialize(this, address, amount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListXRPRippleTransactionsByBlockHeightRISenders, null, [{
    key: "initialize",
    value: function initialize(obj, address, amount) {
      obj['address'] = address;
      obj['amount'] = amount;
    }
    /**
     * Constructs a <code>ListXRPRippleTransactionsByBlockHeightRISenders</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListXRPRippleTransactionsByBlockHeightRISenders} obj Optional instance to populate.
     * @return {module:model/ListXRPRippleTransactionsByBlockHeightRISenders} The populated <code>ListXRPRippleTransactionsByBlockHeightRISenders</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListXRPRippleTransactionsByBlockHeightRISenders();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListXRPRippleTransactionsByBlockHeightRISenders;
}();
/**
 * String array representation of the sender address
 * @member {String} address
 */


ListXRPRippleTransactionsByBlockHeightRISenders.prototype['address'] = undefined;
/**
 * String representation of the amount
 * @member {String} amount
 */

ListXRPRippleTransactionsByBlockHeightRISenders.prototype['amount'] = undefined;
var _default = ListXRPRippleTransactionsByBlockHeightRISenders;
exports["default"] = _default;