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
 * The ListHDWalletxPubYPubZPubTransactionsResponseItemFee model module.
 * @module model/ListHDWalletxPubYPubZPubTransactionsResponseItemFee
 * @version 2.0.0
 */
var ListHDWalletxPubYPubZPubTransactionsResponseItemFee = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListHDWalletxPubYPubZPubTransactionsResponseItemFee</code>.
   * @alias module:model/ListHDWalletxPubYPubZPubTransactionsResponseItemFee
   * @param amount {String} Defines the amount of the transaction fee.
   */
  function ListHDWalletxPubYPubZPubTransactionsResponseItemFee(amount) {
    _classCallCheck(this, ListHDWalletxPubYPubZPubTransactionsResponseItemFee);

    ListHDWalletxPubYPubZPubTransactionsResponseItemFee.initialize(this, amount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListHDWalletxPubYPubZPubTransactionsResponseItemFee, null, [{
    key: "initialize",
    value: function initialize(obj, amount) {
      obj['amount'] = amount;
    }
    /**
     * Constructs a <code>ListHDWalletxPubYPubZPubTransactionsResponseItemFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListHDWalletxPubYPubZPubTransactionsResponseItemFee} obj Optional instance to populate.
     * @return {module:model/ListHDWalletxPubYPubZPubTransactionsResponseItemFee} The populated <code>ListHDWalletxPubYPubZPubTransactionsResponseItemFee</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListHDWalletxPubYPubZPubTransactionsResponseItemFee();

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListHDWalletxPubYPubZPubTransactionsResponseItemFee;
}();
/**
 * Defines the amount of the transaction fee.
 * @member {String} amount
 */


ListHDWalletxPubYPubZPubTransactionsResponseItemFee.prototype['amount'] = undefined;
var _default = ListHDWalletxPubYPubZPubTransactionsResponseItemFee;
exports["default"] = _default;