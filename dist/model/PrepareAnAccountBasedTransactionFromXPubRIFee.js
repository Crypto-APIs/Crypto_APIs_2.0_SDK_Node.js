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
 * The PrepareAnAccountBasedTransactionFromXPubRIFee model module.
 * @module model/PrepareAnAccountBasedTransactionFromXPubRIFee
 * @version 1.7.0
 */
var PrepareAnAccountBasedTransactionFromXPubRIFee = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAnAccountBasedTransactionFromXPubRIFee</code>.
   * When isConfirmed is True - Defines the amount of the transaction fee When isConfirmed is False - For ETH-based blockchains this attribute represents the max fee value.
   * @alias module:model/PrepareAnAccountBasedTransactionFromXPubRIFee
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {String} Represents the price offered to the miner to purchase this amount of gas.
   * @param maxFeePerGas {String} Representation of the max fee per gas value
   * @param maxPriorityFeePerGas {String} Rrepresentation of the max priority fee per gas value
   */
  function PrepareAnAccountBasedTransactionFromXPubRIFee(gasLimit, gasPrice, maxFeePerGas, maxPriorityFeePerGas) {
    _classCallCheck(this, PrepareAnAccountBasedTransactionFromXPubRIFee);

    PrepareAnAccountBasedTransactionFromXPubRIFee.initialize(this, gasLimit, gasPrice, maxFeePerGas, maxPriorityFeePerGas);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PrepareAnAccountBasedTransactionFromXPubRIFee, null, [{
    key: "initialize",
    value: function initialize(obj, gasLimit, gasPrice, maxFeePerGas, maxPriorityFeePerGas) {
      obj['gasLimit'] = gasLimit;
      obj['gasPrice'] = gasPrice;
      obj['maxFeePerGas'] = maxFeePerGas;
      obj['maxPriorityFeePerGas'] = maxPriorityFeePerGas;
    }
    /**
     * Constructs a <code>PrepareAnAccountBasedTransactionFromXPubRIFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAnAccountBasedTransactionFromXPubRIFee} obj Optional instance to populate.
     * @return {module:model/PrepareAnAccountBasedTransactionFromXPubRIFee} The populated <code>PrepareAnAccountBasedTransactionFromXPubRIFee</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAnAccountBasedTransactionFromXPubRIFee();

        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }

        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _ApiClient["default"].convertToType(data['gasPrice'], 'String');
        }

        if (data.hasOwnProperty('maxFeePerGas')) {
          obj['maxFeePerGas'] = _ApiClient["default"].convertToType(data['maxFeePerGas'], 'String');
        }

        if (data.hasOwnProperty('maxPriorityFeePerGas')) {
          obj['maxPriorityFeePerGas'] = _ApiClient["default"].convertToType(data['maxPriorityFeePerGas'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PrepareAnAccountBasedTransactionFromXPubRIFee;
}();
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */


PrepareAnAccountBasedTransactionFromXPubRIFee.prototype['gasLimit'] = undefined;
/**
 * Represents the price offered to the miner to purchase this amount of gas.
 * @member {String} gasPrice
 */

PrepareAnAccountBasedTransactionFromXPubRIFee.prototype['gasPrice'] = undefined;
/**
 * Representation of the max fee per gas value
 * @member {String} maxFeePerGas
 */

PrepareAnAccountBasedTransactionFromXPubRIFee.prototype['maxFeePerGas'] = undefined;
/**
 * Rrepresentation of the max priority fee per gas value
 * @member {String} maxPriorityFeePerGas
 */

PrepareAnAccountBasedTransactionFromXPubRIFee.prototype['maxPriorityFeePerGas'] = undefined;
var _default = PrepareAnAccountBasedTransactionFromXPubRIFee;
exports["default"] = _default;