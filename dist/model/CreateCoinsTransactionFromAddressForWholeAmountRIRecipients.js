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
 * The CreateCoinsTransactionFromAddressForWholeAmountRIRecipients model module.
 * @module model/CreateCoinsTransactionFromAddressForWholeAmountRIRecipients
 * @version 1.4.0
 */
var CreateCoinsTransactionFromAddressForWholeAmountRIRecipients = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateCoinsTransactionFromAddressForWholeAmountRIRecipients</code>.
   * @alias module:model/CreateCoinsTransactionFromAddressForWholeAmountRIRecipients
   * @param address {String} Defines the destination address.
   * @param amount {String} Defines the amount sent to the destination address.
   */
  function CreateCoinsTransactionFromAddressForWholeAmountRIRecipients(address, amount) {
    _classCallCheck(this, CreateCoinsTransactionFromAddressForWholeAmountRIRecipients);

    CreateCoinsTransactionFromAddressForWholeAmountRIRecipients.initialize(this, address, amount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateCoinsTransactionFromAddressForWholeAmountRIRecipients, null, [{
    key: "initialize",
    value: function initialize(obj, address, amount) {
      obj['address'] = address;
      obj['amount'] = amount;
    }
    /**
     * Constructs a <code>CreateCoinsTransactionFromAddressForWholeAmountRIRecipients</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCoinsTransactionFromAddressForWholeAmountRIRecipients} obj Optional instance to populate.
     * @return {module:model/CreateCoinsTransactionFromAddressForWholeAmountRIRecipients} The populated <code>CreateCoinsTransactionFromAddressForWholeAmountRIRecipients</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCoinsTransactionFromAddressForWholeAmountRIRecipients();

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

  return CreateCoinsTransactionFromAddressForWholeAmountRIRecipients;
}();
/**
 * Defines the destination address.
 * @member {String} address
 */


CreateCoinsTransactionFromAddressForWholeAmountRIRecipients.prototype['address'] = undefined;
/**
 * Defines the amount sent to the destination address.
 * @member {String} amount
 */

CreateCoinsTransactionFromAddressForWholeAmountRIRecipients.prototype['amount'] = undefined;
var _default = CreateCoinsTransactionFromAddressForWholeAmountRIRecipients;
exports["default"] = _default;