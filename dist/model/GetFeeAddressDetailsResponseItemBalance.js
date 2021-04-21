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
 * The GetFeeAddressDetailsResponseItemBalance model module.
 * @module model/GetFeeAddressDetailsResponseItemBalance
 * @version 2.0.0
 */
var GetFeeAddressDetailsResponseItemBalance = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetFeeAddressDetailsResponseItemBalance</code>.
   * Specifies the balance of the fee address.
   * @alias module:model/GetFeeAddressDetailsResponseItemBalance
   * @param amount {String} Represents the amount of the units in fee address.
   * @param unit {String} Represents the unit of the fee spent for the forwarded tokens, e.g. BTC.
   */
  function GetFeeAddressDetailsResponseItemBalance(amount, unit) {
    _classCallCheck(this, GetFeeAddressDetailsResponseItemBalance);

    GetFeeAddressDetailsResponseItemBalance.initialize(this, amount, unit);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetFeeAddressDetailsResponseItemBalance, null, [{
    key: "initialize",
    value: function initialize(obj, amount, unit) {
      obj['amount'] = amount;
      obj['unit'] = unit;
    }
    /**
     * Constructs a <code>GetFeeAddressDetailsResponseItemBalance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFeeAddressDetailsResponseItemBalance} obj Optional instance to populate.
     * @return {module:model/GetFeeAddressDetailsResponseItemBalance} The populated <code>GetFeeAddressDetailsResponseItemBalance</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetFeeAddressDetailsResponseItemBalance();

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

  return GetFeeAddressDetailsResponseItemBalance;
}();
/**
 * Represents the amount of the units in fee address.
 * @member {String} amount
 */


GetFeeAddressDetailsResponseItemBalance.prototype['amount'] = undefined;
/**
 * Represents the unit of the fee spent for the forwarded tokens, e.g. BTC.
 * @member {String} unit
 */

GetFeeAddressDetailsResponseItemBalance.prototype['unit'] = undefined;
var _default = GetFeeAddressDetailsResponseItemBalance;
exports["default"] = _default;