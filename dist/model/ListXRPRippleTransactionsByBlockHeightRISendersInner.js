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
 * The ListXRPRippleTransactionsByBlockHeightRISendersInner model module.
 * @module model/ListXRPRippleTransactionsByBlockHeightRISendersInner
 * @version 1.7.2
 */
var ListXRPRippleTransactionsByBlockHeightRISendersInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListXRPRippleTransactionsByBlockHeightRISendersInner</code>.
   * @alias module:model/ListXRPRippleTransactionsByBlockHeightRISendersInner
   * @param address {String} String array representation of the sender address
   * @param amount {String} String representation of the amount
   */
  function ListXRPRippleTransactionsByBlockHeightRISendersInner(address, amount) {
    _classCallCheck(this, ListXRPRippleTransactionsByBlockHeightRISendersInner);

    ListXRPRippleTransactionsByBlockHeightRISendersInner.initialize(this, address, amount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListXRPRippleTransactionsByBlockHeightRISendersInner, null, [{
    key: "initialize",
    value: function initialize(obj, address, amount) {
      obj['address'] = address;
      obj['amount'] = amount;
    }
    /**
     * Constructs a <code>ListXRPRippleTransactionsByBlockHeightRISendersInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListXRPRippleTransactionsByBlockHeightRISendersInner} obj Optional instance to populate.
     * @return {module:model/ListXRPRippleTransactionsByBlockHeightRISendersInner} The populated <code>ListXRPRippleTransactionsByBlockHeightRISendersInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListXRPRippleTransactionsByBlockHeightRISendersInner();

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

  return ListXRPRippleTransactionsByBlockHeightRISendersInner;
}();
/**
 * String array representation of the sender address
 * @member {String} address
 */


ListXRPRippleTransactionsByBlockHeightRISendersInner.prototype['address'] = undefined;
/**
 * String representation of the amount
 * @member {String} amount
 */

ListXRPRippleTransactionsByBlockHeightRISendersInner.prototype['amount'] = undefined;
var _default = ListXRPRippleTransactionsByBlockHeightRISendersInner;
exports["default"] = _default;