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
 * The GetFeeRecommendationsRI model module.
 * @module model/GetFeeRecommendationsRI
 * @version 1.2.0
 */
var GetFeeRecommendationsRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetFeeRecommendationsRI</code>.
   * @alias module:model/GetFeeRecommendationsRI
   * @param unit {String} Defines the unit of the fee, e.g. BTC.
   * @param fast {String} Defines the fee priority as \"FAST\". It works per byte, for UTXO-based protocols like Bitcoin, or per gas price, for account-based protocols like Ethereum. These are calculated based on Mempool.
   * @param slow {String} Defines the fee priority as \"SLOW\". It works per byte, for UTXO-based protocols like Bitcoin, or per gas price, for account-based protocols like Ethereum. These are calculated based on Mempool.
   * @param standard {String} Defines the fee priority as \"STANDARD\". It works per byte, for UTXO-based protocols like Bitcoin, or per gas price, for account-based protocols like Ethereum. These are calculated based on Mempool.
   */
  function GetFeeRecommendationsRI(unit, fast, slow, standard) {
    _classCallCheck(this, GetFeeRecommendationsRI);

    GetFeeRecommendationsRI.initialize(this, unit, fast, slow, standard);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetFeeRecommendationsRI, null, [{
    key: "initialize",
    value: function initialize(obj, unit, fast, slow, standard) {
      obj['unit'] = unit;
      obj['fast'] = fast;
      obj['slow'] = slow;
      obj['standard'] = standard;
    }
    /**
     * Constructs a <code>GetFeeRecommendationsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFeeRecommendationsRI} obj Optional instance to populate.
     * @return {module:model/GetFeeRecommendationsRI} The populated <code>GetFeeRecommendationsRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetFeeRecommendationsRI();

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

  return GetFeeRecommendationsRI;
}();
/**
 * Defines the unit of the fee, e.g. BTC.
 * @member {String} unit
 */


GetFeeRecommendationsRI.prototype['unit'] = undefined;
/**
 * Defines the fee priority as \"FAST\". It works per byte, for UTXO-based protocols like Bitcoin, or per gas price, for account-based protocols like Ethereum. These are calculated based on Mempool.
 * @member {String} fast
 */

GetFeeRecommendationsRI.prototype['fast'] = undefined;
/**
 * Defines the fee priority as \"SLOW\". It works per byte, for UTXO-based protocols like Bitcoin, or per gas price, for account-based protocols like Ethereum. These are calculated based on Mempool.
 * @member {String} slow
 */

GetFeeRecommendationsRI.prototype['slow'] = undefined;
/**
 * Defines the fee priority as \"STANDARD\". It works per byte, for UTXO-based protocols like Bitcoin, or per gas price, for account-based protocols like Ethereum. These are calculated based on Mempool.
 * @member {String} standard
 */

GetFeeRecommendationsRI.prototype['standard'] = undefined;
var _default = GetFeeRecommendationsRI;
exports["default"] = _default;