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
 * The GetAddressDetailsFromCallbackRIConfirmedBalance model module.
 * @module model/GetAddressDetailsFromCallbackRIConfirmedBalance
 * @version 1.9.0
 */var GetAddressDetailsFromCallbackRIConfirmedBalance = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetAddressDetailsFromCallbackRIConfirmedBalance</code>.
   * @alias module:model/GetAddressDetailsFromCallbackRIConfirmedBalance
   * @param amount {String} Defines the total balance of the address that is confirmed. It doesn't include unconfirmed transactions.
   * @param unit {String} Represents the unit of the confirmed balance.
   */
  function GetAddressDetailsFromCallbackRIConfirmedBalance(amount, unit) {
    _classCallCheck(this, GetAddressDetailsFromCallbackRIConfirmedBalance);
    GetAddressDetailsFromCallbackRIConfirmedBalance.initialize(this, amount, unit);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetAddressDetailsFromCallbackRIConfirmedBalance, null, [{
    key: "initialize",
    value: function initialize(obj, amount, unit) {
      obj['amount'] = amount;
      obj['unit'] = unit;
    }

    /**
     * Constructs a <code>GetAddressDetailsFromCallbackRIConfirmedBalance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAddressDetailsFromCallbackRIConfirmedBalance} obj Optional instance to populate.
     * @return {module:model/GetAddressDetailsFromCallbackRIConfirmedBalance} The populated <code>GetAddressDetailsFromCallbackRIConfirmedBalance</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetAddressDetailsFromCallbackRIConfirmedBalance();
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
  return GetAddressDetailsFromCallbackRIConfirmedBalance;
}(); /**
      * Defines the total balance of the address that is confirmed. It doesn't include unconfirmed transactions.
      * @member {String} amount
      */
GetAddressDetailsFromCallbackRIConfirmedBalance.prototype['amount'] = undefined;

/**
 * Represents the unit of the confirmed balance.
 * @member {String} unit
 */
GetAddressDetailsFromCallbackRIConfirmedBalance.prototype['unit'] = undefined;
var _default = GetAddressDetailsFromCallbackRIConfirmedBalance;
exports["default"] = _default;