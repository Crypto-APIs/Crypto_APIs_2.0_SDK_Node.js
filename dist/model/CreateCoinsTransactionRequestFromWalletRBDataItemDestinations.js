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
 * The CreateCoinsTransactionRequestFromWalletRBDataItemDestinations model module.
 * @module model/CreateCoinsTransactionRequestFromWalletRBDataItemDestinations
 * @version 1.1.0
 */
var CreateCoinsTransactionRequestFromWalletRBDataItemDestinations = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateCoinsTransactionRequestFromWalletRBDataItemDestinations</code>.
   * @alias module:model/CreateCoinsTransactionRequestFromWalletRBDataItemDestinations
   * @param address {String} Defines the specific destination address.
   * @param amount {String} Represents the specific amount of the transaction's destination.
   */
  function CreateCoinsTransactionRequestFromWalletRBDataItemDestinations(address, amount) {
    _classCallCheck(this, CreateCoinsTransactionRequestFromWalletRBDataItemDestinations);

    CreateCoinsTransactionRequestFromWalletRBDataItemDestinations.initialize(this, address, amount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateCoinsTransactionRequestFromWalletRBDataItemDestinations, null, [{
    key: "initialize",
    value: function initialize(obj, address, amount) {
      obj['address'] = address;
      obj['amount'] = amount;
    }
    /**
     * Constructs a <code>CreateCoinsTransactionRequestFromWalletRBDataItemDestinations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCoinsTransactionRequestFromWalletRBDataItemDestinations} obj Optional instance to populate.
     * @return {module:model/CreateCoinsTransactionRequestFromWalletRBDataItemDestinations} The populated <code>CreateCoinsTransactionRequestFromWalletRBDataItemDestinations</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCoinsTransactionRequestFromWalletRBDataItemDestinations();

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

  return CreateCoinsTransactionRequestFromWalletRBDataItemDestinations;
}();
/**
 * Defines the specific destination address.
 * @member {String} address
 */


CreateCoinsTransactionRequestFromWalletRBDataItemDestinations.prototype['address'] = undefined;
/**
 * Represents the specific amount of the transaction's destination.
 * @member {String} amount
 */

CreateCoinsTransactionRequestFromWalletRBDataItemDestinations.prototype['amount'] = undefined;
var _default = CreateCoinsTransactionRequestFromWalletRBDataItemDestinations;
exports["default"] = _default;