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
 * The GetHDWalletxPubYPubZPubDetailsResponseItem model module.
 * @module model/GetHDWalletxPubYPubZPubDetailsResponseItem
 * @version 2.0.0
 */
var GetHDWalletxPubYPubZPubDetailsResponseItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetHDWalletxPubYPubZPubDetailsResponseItem</code>.
   * @alias module:model/GetHDWalletxPubYPubZPubDetailsResponseItem
   * @param confirmedBalance {String} Specifies the confirmed coins balance of the Wallet.
   * @param totalReceived {String} Defines the total currency received to the Wallet.
   * @param totalSpent {String} Defines the total currency spent from the Wallet.
   */
  function GetHDWalletxPubYPubZPubDetailsResponseItem(confirmedBalance, totalReceived, totalSpent) {
    _classCallCheck(this, GetHDWalletxPubYPubZPubDetailsResponseItem);

    GetHDWalletxPubYPubZPubDetailsResponseItem.initialize(this, confirmedBalance, totalReceived, totalSpent);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetHDWalletxPubYPubZPubDetailsResponseItem, null, [{
    key: "initialize",
    value: function initialize(obj, confirmedBalance, totalReceived, totalSpent) {
      obj['confirmedBalance'] = confirmedBalance;
      obj['totalReceived'] = totalReceived;
      obj['totalSpent'] = totalSpent;
    }
    /**
     * Constructs a <code>GetHDWalletxPubYPubZPubDetailsResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetHDWalletxPubYPubZPubDetailsResponseItem} obj Optional instance to populate.
     * @return {module:model/GetHDWalletxPubYPubZPubDetailsResponseItem} The populated <code>GetHDWalletxPubYPubZPubDetailsResponseItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetHDWalletxPubYPubZPubDetailsResponseItem();

        if (data.hasOwnProperty('confirmedBalance')) {
          obj['confirmedBalance'] = _ApiClient["default"].convertToType(data['confirmedBalance'], 'String');
        }

        if (data.hasOwnProperty('totalReceived')) {
          obj['totalReceived'] = _ApiClient["default"].convertToType(data['totalReceived'], 'String');
        }

        if (data.hasOwnProperty('totalSpent')) {
          obj['totalSpent'] = _ApiClient["default"].convertToType(data['totalSpent'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetHDWalletxPubYPubZPubDetailsResponseItem;
}();
/**
 * Specifies the confirmed coins balance of the Wallet.
 * @member {String} confirmedBalance
 */


GetHDWalletxPubYPubZPubDetailsResponseItem.prototype['confirmedBalance'] = undefined;
/**
 * Defines the total currency received to the Wallet.
 * @member {String} totalReceived
 */

GetHDWalletxPubYPubZPubDetailsResponseItem.prototype['totalReceived'] = undefined;
/**
 * Defines the total currency spent from the Wallet.
 * @member {String} totalSpent
 */

GetHDWalletxPubYPubZPubDetailsResponseItem.prototype['totalSpent'] = undefined;
var _default = GetHDWalletxPubYPubZPubDetailsResponseItem;
exports["default"] = _default;