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
 * The ListXRPRippleTransactionsByBlockHeightRIRecipientsInner model module.
 * @module model/ListXRPRippleTransactionsByBlockHeightRIRecipientsInner
 * @version 1.7.2
 */
var ListXRPRippleTransactionsByBlockHeightRIRecipientsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListXRPRippleTransactionsByBlockHeightRIRecipientsInner</code>.
   * @alias module:model/ListXRPRippleTransactionsByBlockHeightRIRecipientsInner
   * @param address {String} String representation of the receiver address
   * @param amount {String} String representation of the amount
   */
  function ListXRPRippleTransactionsByBlockHeightRIRecipientsInner(address, amount) {
    _classCallCheck(this, ListXRPRippleTransactionsByBlockHeightRIRecipientsInner);

    ListXRPRippleTransactionsByBlockHeightRIRecipientsInner.initialize(this, address, amount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListXRPRippleTransactionsByBlockHeightRIRecipientsInner, null, [{
    key: "initialize",
    value: function initialize(obj, address, amount) {
      obj['address'] = address;
      obj['amount'] = amount;
    }
    /**
     * Constructs a <code>ListXRPRippleTransactionsByBlockHeightRIRecipientsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListXRPRippleTransactionsByBlockHeightRIRecipientsInner} obj Optional instance to populate.
     * @return {module:model/ListXRPRippleTransactionsByBlockHeightRIRecipientsInner} The populated <code>ListXRPRippleTransactionsByBlockHeightRIRecipientsInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListXRPRippleTransactionsByBlockHeightRIRecipientsInner();

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

  return ListXRPRippleTransactionsByBlockHeightRIRecipientsInner;
}();
/**
 * String representation of the receiver address
 * @member {String} address
 */


ListXRPRippleTransactionsByBlockHeightRIRecipientsInner.prototype['address'] = undefined;
/**
 * String representation of the amount
 * @member {String} amount
 */

ListXRPRippleTransactionsByBlockHeightRIRecipientsInner.prototype['amount'] = undefined;
var _default = ListXRPRippleTransactionsByBlockHeightRIRecipientsInner;
exports["default"] = _default;