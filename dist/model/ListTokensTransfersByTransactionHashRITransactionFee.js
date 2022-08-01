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
 * The ListTokensTransfersByTransactionHashRITransactionFee model module.
 * @module model/ListTokensTransfersByTransactionHashRITransactionFee
 * @version 1.7.2
 */
var ListTokensTransfersByTransactionHashRITransactionFee = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTokensTransfersByTransactionHashRITransactionFee</code>.
   * @alias module:model/ListTokensTransfersByTransactionHashRITransactionFee
   * @param amount {String} Represents the total fee of a transaction which includes token transfers.
   * @param unit {String} Represents the unit of the fee.
   */
  function ListTokensTransfersByTransactionHashRITransactionFee(amount, unit) {
    _classCallCheck(this, ListTokensTransfersByTransactionHashRITransactionFee);

    ListTokensTransfersByTransactionHashRITransactionFee.initialize(this, amount, unit);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTokensTransfersByTransactionHashRITransactionFee, null, [{
    key: "initialize",
    value: function initialize(obj, amount, unit) {
      obj['amount'] = amount;
      obj['unit'] = unit;
    }
    /**
     * Constructs a <code>ListTokensTransfersByTransactionHashRITransactionFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTokensTransfersByTransactionHashRITransactionFee} obj Optional instance to populate.
     * @return {module:model/ListTokensTransfersByTransactionHashRITransactionFee} The populated <code>ListTokensTransfersByTransactionHashRITransactionFee</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTokensTransfersByTransactionHashRITransactionFee();

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

  return ListTokensTransfersByTransactionHashRITransactionFee;
}();
/**
 * Represents the total fee of a transaction which includes token transfers.
 * @member {String} amount
 */


ListTokensTransfersByTransactionHashRITransactionFee.prototype['amount'] = undefined;
/**
 * Represents the unit of the fee.
 * @member {String} unit
 */

ListTokensTransfersByTransactionHashRITransactionFee.prototype['unit'] = undefined;
var _default = ListTokensTransfersByTransactionHashRITransactionFee;
exports["default"] = _default;