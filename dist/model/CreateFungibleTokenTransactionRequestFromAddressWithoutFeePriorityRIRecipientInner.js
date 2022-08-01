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
 * The CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner model module.
 * @module model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner
 * @version 1.7.2
 */
var CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner</code>.
   * @alias module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner
   * @param address {String} Defines the destination address.
   * @param amount {String} Defines the amount sent to the destination address.
   * @param unit {String} Represents the unit of the tokens amount recieved.
   */
  function CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner(address, amount, unit) {
    _classCallCheck(this, CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner);

    CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner.initialize(this, address, amount, unit);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner, null, [{
    key: "initialize",
    value: function initialize(obj, address, amount, unit) {
      obj['address'] = address;
      obj['amount'] = amount;
      obj['unit'] = unit;
    }
    /**
     * Constructs a <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner} obj Optional instance to populate.
     * @return {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner} The populated <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

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

  return CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner;
}();
/**
 * Defines the destination address.
 * @member {String} address
 */


CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner.prototype['address'] = undefined;
/**
 * Defines the amount sent to the destination address.
 * @member {String} amount
 */

CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner.prototype['amount'] = undefined;
/**
 * Represents the unit of the tokens amount recieved.
 * @member {String} unit
 */

CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner.prototype['unit'] = undefined;
var _default = CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner;
exports["default"] = _default;