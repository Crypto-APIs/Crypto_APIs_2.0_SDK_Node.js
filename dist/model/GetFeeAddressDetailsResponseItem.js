"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetFeeAddressDetailsResponseItemBalance = _interopRequireDefault(require("./GetFeeAddressDetailsResponseItemBalance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetFeeAddressDetailsResponseItem model module.
 * @module model/GetFeeAddressDetailsResponseItem
 * @version 2.0.0
 */
var GetFeeAddressDetailsResponseItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetFeeAddressDetailsResponseItem</code>.
   * @alias module:model/GetFeeAddressDetailsResponseItem
   * @param address {String} Represents the specific fee address, which is always automatically generated. Users must fund it.
   * @param balance {module:model/GetFeeAddressDetailsResponseItemBalance} 
   * @param minimumTransferAmount {String} Represents the minimum transfer amount of the currency in the `fromAddress` that can be allowed for an automatic forwarding.
   */
  function GetFeeAddressDetailsResponseItem(address, balance, minimumTransferAmount) {
    _classCallCheck(this, GetFeeAddressDetailsResponseItem);

    GetFeeAddressDetailsResponseItem.initialize(this, address, balance, minimumTransferAmount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetFeeAddressDetailsResponseItem, null, [{
    key: "initialize",
    value: function initialize(obj, address, balance, minimumTransferAmount) {
      obj['address'] = address;
      obj['balance'] = balance;
      obj['minimumTransferAmount'] = minimumTransferAmount;
    }
    /**
     * Constructs a <code>GetFeeAddressDetailsResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFeeAddressDetailsResponseItem} obj Optional instance to populate.
     * @return {module:model/GetFeeAddressDetailsResponseItem} The populated <code>GetFeeAddressDetailsResponseItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetFeeAddressDetailsResponseItem();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('balance')) {
          obj['balance'] = _GetFeeAddressDetailsResponseItemBalance["default"].constructFromObject(data['balance']);
        }

        if (data.hasOwnProperty('minimumTransferAmount')) {
          obj['minimumTransferAmount'] = _ApiClient["default"].convertToType(data['minimumTransferAmount'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetFeeAddressDetailsResponseItem;
}();
/**
 * Represents the specific fee address, which is always automatically generated. Users must fund it.
 * @member {String} address
 */


GetFeeAddressDetailsResponseItem.prototype['address'] = undefined;
/**
 * @member {module:model/GetFeeAddressDetailsResponseItemBalance} balance
 */

GetFeeAddressDetailsResponseItem.prototype['balance'] = undefined;
/**
 * Represents the minimum transfer amount of the currency in the `fromAddress` that can be allowed for an automatic forwarding.
 * @member {String} minimumTransferAmount
 */

GetFeeAddressDetailsResponseItem.prototype['minimumTransferAmount'] = undefined;
var _default = GetFeeAddressDetailsResponseItem;
exports["default"] = _default;