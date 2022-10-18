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
 * The ConvertBitcoinCashAddressRBDataItem model module.
 * @module model/ConvertBitcoinCashAddressRBDataItem
 * @version 1.9.0
 */var ConvertBitcoinCashAddressRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConvertBitcoinCashAddressRBDataItem</code>.
   * @alias module:model/ConvertBitcoinCashAddressRBDataItem
   * @param address {String} Represents the public address, which is a compressed and shortened form of a public key.
   */
  function ConvertBitcoinCashAddressRBDataItem(address) {
    _classCallCheck(this, ConvertBitcoinCashAddressRBDataItem);
    ConvertBitcoinCashAddressRBDataItem.initialize(this, address);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ConvertBitcoinCashAddressRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, address) {
      obj['address'] = address;
    }

    /**
     * Constructs a <code>ConvertBitcoinCashAddressRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConvertBitcoinCashAddressRBDataItem} obj Optional instance to populate.
     * @return {module:model/ConvertBitcoinCashAddressRBDataItem} The populated <code>ConvertBitcoinCashAddressRBDataItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConvertBitcoinCashAddressRBDataItem();
        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ConvertBitcoinCashAddressRBDataItem;
}(); /**
      * Represents the public address, which is a compressed and shortened form of a public key.
      * @member {String} address
      */
ConvertBitcoinCashAddressRBDataItem.prototype['address'] = undefined;
var _default = ConvertBitcoinCashAddressRBDataItem;
exports["default"] = _default;