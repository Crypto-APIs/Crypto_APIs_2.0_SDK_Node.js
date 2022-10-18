"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI = _interopRequireDefault(require("./PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRData model module.
 * @module model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRData
 * @version 1.9.0
 */var PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRData</code>.
   * @alias module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRData
   * @param item {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI} 
   */
  function PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRData(item) {
    _classCallCheck(this, PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRData);
    PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRData.initialize(this, item);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }

    /**
     * Constructs a <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRData} obj Optional instance to populate.
     * @return {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRData} The populated <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRData();
        if (data.hasOwnProperty('item')) {
          obj['item'] = _PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI["default"].constructFromObject(data['item']);
        }
      }
      return obj;
    }
  }]);
  return PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRData;
}(); /**
      * @member {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI} item
      */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRData.prototype['item'] = undefined;
var _default = PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRData;
exports["default"] = _default;