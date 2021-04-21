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
 * The GetFeeRecommendationsResponseItem model module.
 * @module model/GetFeeRecommendationsResponseItem
 * @version 2.0.0
 */
var GetFeeRecommendationsResponseItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetFeeRecommendationsResponseItem</code>.
   * @alias module:model/GetFeeRecommendationsResponseItem
   * @param unit {String} Defines the unit of the fee, e.g. BTC.
   * @param fast {String} Defines the fee priority as \"FAST\". It works per byte, for UTXO-based protocols like Bitcoin, or per gas price, for account-based protocols like Ethereum. These are calculated based on Mempool.
   * @param slow {String} Defines the fee priority as \"SLOW\". It works per byte, for UTXO-based protocols like Bitcoin, or per gas price, for account-based protocols like Ethereum. These are calculated based on Mempool.
   * @param standard {String} Defines the fee priority as \"STANDARD\". It works per byte, for UTXO-based protocols like Bitcoin, or per gas price, for account-based protocols like Ethereum. These are calculated based on Mempool.
   */
  function GetFeeRecommendationsResponseItem(unit, fast, slow, standard) {
    _classCallCheck(this, GetFeeRecommendationsResponseItem);

    GetFeeRecommendationsResponseItem.initialize(this, unit, fast, slow, standard);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetFeeRecommendationsResponseItem, null, [{
    key: "initialize",
    value: function initialize(obj, unit, fast, slow, standard) {
      obj['unit'] = unit;
      obj['fast'] = fast;
      obj['slow'] = slow;
      obj['standard'] = standard;
    }
    /**
     * Constructs a <code>GetFeeRecommendationsResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFeeRecommendationsResponseItem} obj Optional instance to populate.
     * @return {module:model/GetFeeRecommendationsResponseItem} The populated <code>GetFeeRecommendationsResponseItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetFeeRecommendationsResponseItem();

        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }

        if (data.hasOwnProperty('fast')) {
          obj['fast'] = _ApiClient["default"].convertToType(data['fast'], 'String');
        }

        if (data.hasOwnProperty('slow')) {
          obj['slow'] = _ApiClient["default"].convertToType(data['slow'], 'String');
        }

        if (data.hasOwnProperty('standard')) {
          obj['standard'] = _ApiClient["default"].convertToType(data['standard'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetFeeRecommendationsResponseItem;
}();
/**
 * Defines the unit of the fee, e.g. BTC.
 * @member {String} unit
 */


GetFeeRecommendationsResponseItem.prototype['unit'] = undefined;
/**
 * Defines the fee priority as \"FAST\". It works per byte, for UTXO-based protocols like Bitcoin, or per gas price, for account-based protocols like Ethereum. These are calculated based on Mempool.
 * @member {String} fast
 */

GetFeeRecommendationsResponseItem.prototype['fast'] = undefined;
/**
 * Defines the fee priority as \"SLOW\". It works per byte, for UTXO-based protocols like Bitcoin, or per gas price, for account-based protocols like Ethereum. These are calculated based on Mempool.
 * @member {String} slow
 */

GetFeeRecommendationsResponseItem.prototype['slow'] = undefined;
/**
 * Defines the fee priority as \"STANDARD\". It works per byte, for UTXO-based protocols like Bitcoin, or per gas price, for account-based protocols like Ethereum. These are calculated based on Mempool.
 * @member {String} standard
 */

GetFeeRecommendationsResponseItem.prototype['standard'] = undefined;
var _default = GetFeeRecommendationsResponseItem;
exports["default"] = _default;