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
 * The GetAddressDetailsResponseItemTotalSpent model module.
 * @module model/GetAddressDetailsResponseItemTotalSpent
 * @version 2.0.0
 */
var GetAddressDetailsResponseItemTotalSpent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetAddressDetailsResponseItemTotalSpent</code>.
   * @alias module:model/GetAddressDetailsResponseItemTotalSpent
   * @param amount {String} Defines the total amount of all spent by this address coins, based on confirmed transactions.
   * @param unit {String} Defines the unit of the spent amount, e.g. BTC, ETH, XRP.
   */
  function GetAddressDetailsResponseItemTotalSpent(amount, unit) {
    _classCallCheck(this, GetAddressDetailsResponseItemTotalSpent);

    GetAddressDetailsResponseItemTotalSpent.initialize(this, amount, unit);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetAddressDetailsResponseItemTotalSpent, null, [{
    key: "initialize",
    value: function initialize(obj, amount, unit) {
      obj['amount'] = amount;
      obj['unit'] = unit;
    }
    /**
     * Constructs a <code>GetAddressDetailsResponseItemTotalSpent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAddressDetailsResponseItemTotalSpent} obj Optional instance to populate.
     * @return {module:model/GetAddressDetailsResponseItemTotalSpent} The populated <code>GetAddressDetailsResponseItemTotalSpent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetAddressDetailsResponseItemTotalSpent();

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

  return GetAddressDetailsResponseItemTotalSpent;
}();
/**
 * Defines the total amount of all spent by this address coins, based on confirmed transactions.
 * @member {String} amount
 */


GetAddressDetailsResponseItemTotalSpent.prototype['amount'] = undefined;
/**
 * Defines the unit of the spent amount, e.g. BTC, ETH, XRP.
 * @member {String} unit
 */

GetAddressDetailsResponseItemTotalSpent.prototype['unit'] = undefined;
var _default = GetAddressDetailsResponseItemTotalSpent;
exports["default"] = _default;