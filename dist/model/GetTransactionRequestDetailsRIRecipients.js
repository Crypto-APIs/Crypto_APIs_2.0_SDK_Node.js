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
 * The GetTransactionRequestDetailsRIRecipients model module.
 * @module model/GetTransactionRequestDetailsRIRecipients
 * @version 1.5.0
 */
var GetTransactionRequestDetailsRIRecipients = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionRequestDetailsRIRecipients</code>.
   * @alias module:model/GetTransactionRequestDetailsRIRecipients
   * @param address {String} The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
   * @param amount {String} Represents the amount received to this address.
   * @param unit {String} Defines the unit of the amount.
   */
  function GetTransactionRequestDetailsRIRecipients(address, amount, unit) {
    _classCallCheck(this, GetTransactionRequestDetailsRIRecipients);

    GetTransactionRequestDetailsRIRecipients.initialize(this, address, amount, unit);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetTransactionRequestDetailsRIRecipients, null, [{
    key: "initialize",
    value: function initialize(obj, address, amount, unit) {
      obj['address'] = address;
      obj['amount'] = amount;
      obj['unit'] = unit;
    }
    /**
     * Constructs a <code>GetTransactionRequestDetailsRIRecipients</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionRequestDetailsRIRecipients} obj Optional instance to populate.
     * @return {module:model/GetTransactionRequestDetailsRIRecipients} The populated <code>GetTransactionRequestDetailsRIRecipients</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionRequestDetailsRIRecipients();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('addressTag')) {
          obj['addressTag'] = _ApiClient["default"].convertToType(data['addressTag'], 'Number');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }

        if (data.hasOwnProperty('classicAddress')) {
          obj['classicAddress'] = _ApiClient["default"].convertToType(data['classicAddress'], 'String');
        }

        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetTransactionRequestDetailsRIRecipients;
}();
/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} address
 */


GetTransactionRequestDetailsRIRecipients.prototype['address'] = undefined;
/**
 * Defines a specific Tag that is an additional XRP address feature. It helps identify a transaction recipient beyond a wallet address. The tag that was encoded into the x-Address along with the Classic Address.
 * @member {Number} addressTag
 */

GetTransactionRequestDetailsRIRecipients.prototype['addressTag'] = undefined;
/**
 * Represents the amount received to this address.
 * @member {String} amount
 */

GetTransactionRequestDetailsRIRecipients.prototype['amount'] = undefined;
/**
 * Represents the public address, which is a compressed and shortened form of a public key. A classic address is shown when the destination address is an x-Address.
 * @member {String} classicAddress
 */

GetTransactionRequestDetailsRIRecipients.prototype['classicAddress'] = undefined;
/**
 * Defines the unit of the amount.
 * @member {String} unit
 */

GetTransactionRequestDetailsRIRecipients.prototype['unit'] = undefined;
var _default = GetTransactionRequestDetailsRIRecipients;
exports["default"] = _default;