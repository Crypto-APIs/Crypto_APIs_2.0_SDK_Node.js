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
 * The GetOmniTransactionDetailsByTransactionIDTxidResponseItemSenders model module.
 * @module model/GetOmniTransactionDetailsByTransactionIDTxidResponseItemSenders
 * @version 2.0.0
 */
var GetOmniTransactionDetailsByTransactionIDTxidResponseItemSenders = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetOmniTransactionDetailsByTransactionIDTxidResponseItemSenders</code>.
   * @alias module:model/GetOmniTransactionDetailsByTransactionIDTxidResponseItemSenders
   * @param address {String} Represents the hash of the address that provides the funds.
   * @param amount {String} Defines the amount of the sent funds as a string.
   */
  function GetOmniTransactionDetailsByTransactionIDTxidResponseItemSenders(address, amount) {
    _classCallCheck(this, GetOmniTransactionDetailsByTransactionIDTxidResponseItemSenders);

    GetOmniTransactionDetailsByTransactionIDTxidResponseItemSenders.initialize(this, address, amount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetOmniTransactionDetailsByTransactionIDTxidResponseItemSenders, null, [{
    key: "initialize",
    value: function initialize(obj, address, amount) {
      obj['address'] = address;
      obj['amount'] = amount;
    }
    /**
     * Constructs a <code>GetOmniTransactionDetailsByTransactionIDTxidResponseItemSenders</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetOmniTransactionDetailsByTransactionIDTxidResponseItemSenders} obj Optional instance to populate.
     * @return {module:model/GetOmniTransactionDetailsByTransactionIDTxidResponseItemSenders} The populated <code>GetOmniTransactionDetailsByTransactionIDTxidResponseItemSenders</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetOmniTransactionDetailsByTransactionIDTxidResponseItemSenders();

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

  return GetOmniTransactionDetailsByTransactionIDTxidResponseItemSenders;
}();
/**
 * Represents the hash of the address that provides the funds.
 * @member {String} address
 */


GetOmniTransactionDetailsByTransactionIDTxidResponseItemSenders.prototype['address'] = undefined;
/**
 * Defines the amount of the sent funds as a string.
 * @member {String} amount
 */

GetOmniTransactionDetailsByTransactionIDTxidResponseItemSenders.prototype['amount'] = undefined;
var _default = GetOmniTransactionDetailsByTransactionIDTxidResponseItemSenders;
exports["default"] = _default;