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
 * The CreateFungibleTokensTransactionRequestFromAddressRIRecipients model module.
 * @module model/CreateFungibleTokensTransactionRequestFromAddressRIRecipients
 * @version 1.5.0
 */
var CreateFungibleTokensTransactionRequestFromAddressRIRecipients = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateFungibleTokensTransactionRequestFromAddressRIRecipients</code>.
   * @alias module:model/CreateFungibleTokensTransactionRequestFromAddressRIRecipients
   * @param address {String} Defines the destination address.
   * @param amount {String} Defines the amount sent to the destination address.
   */
  function CreateFungibleTokensTransactionRequestFromAddressRIRecipients(address, amount) {
    _classCallCheck(this, CreateFungibleTokensTransactionRequestFromAddressRIRecipients);

    CreateFungibleTokensTransactionRequestFromAddressRIRecipients.initialize(this, address, amount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateFungibleTokensTransactionRequestFromAddressRIRecipients, null, [{
    key: "initialize",
    value: function initialize(obj, address, amount) {
      obj['address'] = address;
      obj['amount'] = amount;
    }
    /**
     * Constructs a <code>CreateFungibleTokensTransactionRequestFromAddressRIRecipients</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFungibleTokensTransactionRequestFromAddressRIRecipients} obj Optional instance to populate.
     * @return {module:model/CreateFungibleTokensTransactionRequestFromAddressRIRecipients} The populated <code>CreateFungibleTokensTransactionRequestFromAddressRIRecipients</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateFungibleTokensTransactionRequestFromAddressRIRecipients();

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

  return CreateFungibleTokensTransactionRequestFromAddressRIRecipients;
}();
/**
 * Defines the destination address.
 * @member {String} address
 */


CreateFungibleTokensTransactionRequestFromAddressRIRecipients.prototype['address'] = undefined;
/**
 * Defines the amount sent to the destination address.
 * @member {String} amount
 */

CreateFungibleTokensTransactionRequestFromAddressRIRecipients.prototype['amount'] = undefined;
var _default = CreateFungibleTokensTransactionRequestFromAddressRIRecipients;
exports["default"] = _default;