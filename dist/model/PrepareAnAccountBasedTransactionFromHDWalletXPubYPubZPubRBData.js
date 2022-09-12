"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem = _interopRequireDefault(require("./PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBData model module.
 * @module model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBData
 * @version 1.8.0
 */
var PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBData</code>.
   * @alias module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBData
   * @param item {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem} 
   */
  function PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBData(item) {
    _classCallCheck(this, PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBData);

    PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBData} obj Optional instance to populate.
     * @return {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBData} The populated <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBData;
}();
/**
 * @member {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem} item
 */


PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBData.prototype['item'] = undefined;
var _default = PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBData;
exports["default"] = _default;