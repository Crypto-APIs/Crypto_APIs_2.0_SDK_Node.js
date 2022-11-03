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
 * The FreezeTronEnergyOrBandwidthRITransactionAmount model module.
 * @module model/FreezeTronEnergyOrBandwidthRITransactionAmount
 * @version 1.10.0
 */
var FreezeTronEnergyOrBandwidthRITransactionAmount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FreezeTronEnergyOrBandwidthRITransactionAmount</code>.
   * @alias module:model/FreezeTronEnergyOrBandwidthRITransactionAmount
   * @param unit {String} Represents the amounts' unit
   * @param value {String} Shows the total amount of the transaction.
   */
  function FreezeTronEnergyOrBandwidthRITransactionAmount(unit, value) {
    _classCallCheck(this, FreezeTronEnergyOrBandwidthRITransactionAmount);
    FreezeTronEnergyOrBandwidthRITransactionAmount.initialize(this, unit, value);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(FreezeTronEnergyOrBandwidthRITransactionAmount, null, [{
    key: "initialize",
    value: function initialize(obj, unit, value) {
      obj['unit'] = unit;
      obj['value'] = value;
    }

    /**
     * Constructs a <code>FreezeTronEnergyOrBandwidthRITransactionAmount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FreezeTronEnergyOrBandwidthRITransactionAmount} obj Optional instance to populate.
     * @return {module:model/FreezeTronEnergyOrBandwidthRITransactionAmount} The populated <code>FreezeTronEnergyOrBandwidthRITransactionAmount</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FreezeTronEnergyOrBandwidthRITransactionAmount();
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }
      return obj;
    }
  }]);
  return FreezeTronEnergyOrBandwidthRITransactionAmount;
}();
/**
 * Represents the amounts' unit
 * @member {String} unit
 */
FreezeTronEnergyOrBandwidthRITransactionAmount.prototype['unit'] = undefined;

/**
 * Shows the total amount of the transaction.
 * @member {String} value
 */
FreezeTronEnergyOrBandwidthRITransactionAmount.prototype['value'] = undefined;
var _default = FreezeTronEnergyOrBandwidthRITransactionAmount;
exports["default"] = _default;