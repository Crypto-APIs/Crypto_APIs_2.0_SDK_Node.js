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
 * The PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSECFee model module.
 * @module model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSECFee
 * @version 1.9.0
 */var PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSECFee = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSECFee</code>.
   * When isConfirmed is True - Defines the amount of the transaction fee When isConfirmed is False - For ETH-based blockchains this attribute represents the max fee value.
   * @alias module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSECFee
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {String} Represents the price offered to the miner to purchase this amount of gas.
   */
  function PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSECFee(gasLimit, gasPrice) {
    _classCallCheck(this, PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSECFee);
    PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSECFee.initialize(this, gasLimit, gasPrice);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSECFee, null, [{
    key: "initialize",
    value: function initialize(obj, gasLimit, gasPrice) {
      obj['gasLimit'] = gasLimit;
      obj['gasPrice'] = gasPrice;
    }

    /**
     * Constructs a <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSECFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSECFee} obj Optional instance to populate.
     * @return {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSECFee} The populated <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSECFee</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSECFee();
        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }
        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _ApiClient["default"].convertToType(data['gasPrice'], 'String');
        }
      }
      return obj;
    }
  }]);
  return PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSECFee;
}(); /**
      * Represents the amount of gas used by this specific transaction alone.
      * @member {String} gasLimit
      */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSECFee.prototype['gasLimit'] = undefined;

/**
 * Represents the price offered to the miner to purchase this amount of gas.
 * @member {String} gasPrice
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSECFee.prototype['gasPrice'] = undefined;
var _default = PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSECFee;
exports["default"] = _default;