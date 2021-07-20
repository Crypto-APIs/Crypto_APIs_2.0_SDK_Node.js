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
 * The ListHDWalletXPubYPubZPubTransactionsRIRecipients model module.
 * @module model/ListHDWalletXPubYPubZPubTransactionsRIRecipients
 * @version 1.1.0
 */
var ListHDWalletXPubYPubZPubTransactionsRIRecipients = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListHDWalletXPubYPubZPubTransactionsRIRecipients</code>.
   * @alias module:model/ListHDWalletXPubYPubZPubTransactionsRIRecipients
   * @param address {String} The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
   * @param amount {String} Represents the amount received to this address.
   * @param isMember {Boolean} Defines whether an address is a child address derived from the HD wallet (xPub, yPub, zPub) as boolean.
   */
  function ListHDWalletXPubYPubZPubTransactionsRIRecipients(address, amount, isMember) {
    _classCallCheck(this, ListHDWalletXPubYPubZPubTransactionsRIRecipients);

    ListHDWalletXPubYPubZPubTransactionsRIRecipients.initialize(this, address, amount, isMember);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListHDWalletXPubYPubZPubTransactionsRIRecipients, null, [{
    key: "initialize",
    value: function initialize(obj, address, amount, isMember) {
      obj['address'] = address;
      obj['amount'] = amount;
      obj['isMember'] = isMember;
    }
    /**
     * Constructs a <code>ListHDWalletXPubYPubZPubTransactionsRIRecipients</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListHDWalletXPubYPubZPubTransactionsRIRecipients} obj Optional instance to populate.
     * @return {module:model/ListHDWalletXPubYPubZPubTransactionsRIRecipients} The populated <code>ListHDWalletXPubYPubZPubTransactionsRIRecipients</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListHDWalletXPubYPubZPubTransactionsRIRecipients();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }

        if (data.hasOwnProperty('isMember')) {
          obj['isMember'] = _ApiClient["default"].convertToType(data['isMember'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ListHDWalletXPubYPubZPubTransactionsRIRecipients;
}();
/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} address
 */


ListHDWalletXPubYPubZPubTransactionsRIRecipients.prototype['address'] = undefined;
/**
 * Represents the amount received to this address.
 * @member {String} amount
 */

ListHDWalletXPubYPubZPubTransactionsRIRecipients.prototype['amount'] = undefined;
/**
 * Defines whether an address is a child address derived from the HD wallet (xPub, yPub, zPub) as boolean.
 * @member {Boolean} isMember
 */

ListHDWalletXPubYPubZPubTransactionsRIRecipients.prototype['isMember'] = undefined;
var _default = ListHDWalletXPubYPubZPubTransactionsRIRecipients;
exports["default"] = _default;