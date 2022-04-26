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
 * The ListOmniTransactionsByAddressRIRecipients model module.
 * @module model/ListOmniTransactionsByAddressRIRecipients
 * @version 1.5.0
 */
var ListOmniTransactionsByAddressRIRecipients = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListOmniTransactionsByAddressRIRecipients</code>.
   * @alias module:model/ListOmniTransactionsByAddressRIRecipients
   * @param address {String} Represents the hash of the address that receives the funds.
   * @param amount {String} Defines the amount of the received funds as a string.
   */
  function ListOmniTransactionsByAddressRIRecipients(address, amount) {
    _classCallCheck(this, ListOmniTransactionsByAddressRIRecipients);

    ListOmniTransactionsByAddressRIRecipients.initialize(this, address, amount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListOmniTransactionsByAddressRIRecipients, null, [{
    key: "initialize",
    value: function initialize(obj, address, amount) {
      obj['address'] = address;
      obj['amount'] = amount;
    }
    /**
     * Constructs a <code>ListOmniTransactionsByAddressRIRecipients</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListOmniTransactionsByAddressRIRecipients} obj Optional instance to populate.
     * @return {module:model/ListOmniTransactionsByAddressRIRecipients} The populated <code>ListOmniTransactionsByAddressRIRecipients</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListOmniTransactionsByAddressRIRecipients();

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

  return ListOmniTransactionsByAddressRIRecipients;
}();
/**
 * Represents the hash of the address that receives the funds.
 * @member {String} address
 */


ListOmniTransactionsByAddressRIRecipients.prototype['address'] = undefined;
/**
 * Defines the amount of the received funds as a string.
 * @member {String} amount
 */

ListOmniTransactionsByAddressRIRecipients.prototype['amount'] = undefined;
var _default = ListOmniTransactionsByAddressRIRecipients;
exports["default"] = _default;