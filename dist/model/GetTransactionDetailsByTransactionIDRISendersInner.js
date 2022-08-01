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
 * The GetTransactionDetailsByTransactionIDRISendersInner model module.
 * @module model/GetTransactionDetailsByTransactionIDRISendersInner
 * @version 1.7.2
 */
var GetTransactionDetailsByTransactionIDRISendersInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDRISendersInner</code>.
   * @alias module:model/GetTransactionDetailsByTransactionIDRISendersInner
   * @param address {String} Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
   * @param amount {String} Represents the total amount sent by this address including the fee.
   */
  function GetTransactionDetailsByTransactionIDRISendersInner(address, amount) {
    _classCallCheck(this, GetTransactionDetailsByTransactionIDRISendersInner);

    GetTransactionDetailsByTransactionIDRISendersInner.initialize(this, address, amount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetTransactionDetailsByTransactionIDRISendersInner, null, [{
    key: "initialize",
    value: function initialize(obj, address, amount) {
      obj['address'] = address;
      obj['amount'] = amount;
    }
    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDRISendersInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDRISendersInner} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDRISendersInner} The populated <code>GetTransactionDetailsByTransactionIDRISendersInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionDetailsByTransactionIDRISendersInner();

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

  return GetTransactionDetailsByTransactionIDRISendersInner;
}();
/**
 * Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
 * @member {String} address
 */


GetTransactionDetailsByTransactionIDRISendersInner.prototype['address'] = undefined;
/**
 * Represents the total amount sent by this address including the fee.
 * @member {String} amount
 */

GetTransactionDetailsByTransactionIDRISendersInner.prototype['amount'] = undefined;
var _default = GetTransactionDetailsByTransactionIDRISendersInner;
exports["default"] = _default;