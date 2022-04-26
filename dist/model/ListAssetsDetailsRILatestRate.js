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
 * The ListAssetsDetailsRILatestRate model module.
 * @module model/ListAssetsDetailsRILatestRate
 * @version 1.5.0
 */
var ListAssetsDetailsRILatestRate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAssetsDetailsRILatestRate</code>.
   * Specifies the latest price of the asset.
   * @alias module:model/ListAssetsDetailsRILatestRate
   * @param amount {String} Specifies the amount of the latest price of the asset.
   * @param unit {String} Specifies the unit of the latest price of the asset.
   */
  function ListAssetsDetailsRILatestRate(amount, unit) {
    _classCallCheck(this, ListAssetsDetailsRILatestRate);

    ListAssetsDetailsRILatestRate.initialize(this, amount, unit);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListAssetsDetailsRILatestRate, null, [{
    key: "initialize",
    value: function initialize(obj, amount, unit) {
      obj['amount'] = amount;
      obj['unit'] = unit;
    }
    /**
     * Constructs a <code>ListAssetsDetailsRILatestRate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAssetsDetailsRILatestRate} obj Optional instance to populate.
     * @return {module:model/ListAssetsDetailsRILatestRate} The populated <code>ListAssetsDetailsRILatestRate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAssetsDetailsRILatestRate();

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }

        if (data.hasOwnProperty('calculationTimestamp')) {
          obj['calculationTimestamp'] = _ApiClient["default"].convertToType(data['calculationTimestamp'], 'Number');
        }

        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListAssetsDetailsRILatestRate;
}();
/**
 * Specifies the amount of the latest price of the asset.
 * @member {String} amount
 */


ListAssetsDetailsRILatestRate.prototype['amount'] = undefined;
/**
 * Defines when the price was calculated in UNIX timestamp.
 * @member {Number} calculationTimestamp
 */

ListAssetsDetailsRILatestRate.prototype['calculationTimestamp'] = undefined;
/**
 * Specifies the unit of the latest price of the asset.
 * @member {String} unit
 */

ListAssetsDetailsRILatestRate.prototype['unit'] = undefined;
var _default = ListAssetsDetailsRILatestRate;
exports["default"] = _default;