"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _FreezeTronEnergyOrBandwidthRI = _interopRequireDefault(require("./FreezeTronEnergyOrBandwidthRI"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The FreezeTronEnergyOrBandwidthRData model module.
 * @module model/FreezeTronEnergyOrBandwidthRData
 * @version 1.10.0
 */
var FreezeTronEnergyOrBandwidthRData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FreezeTronEnergyOrBandwidthRData</code>.
   * @alias module:model/FreezeTronEnergyOrBandwidthRData
   * @param item {module:model/FreezeTronEnergyOrBandwidthRI} 
   */
  function FreezeTronEnergyOrBandwidthRData(item) {
    _classCallCheck(this, FreezeTronEnergyOrBandwidthRData);
    FreezeTronEnergyOrBandwidthRData.initialize(this, item);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(FreezeTronEnergyOrBandwidthRData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }

    /**
     * Constructs a <code>FreezeTronEnergyOrBandwidthRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FreezeTronEnergyOrBandwidthRData} obj Optional instance to populate.
     * @return {module:model/FreezeTronEnergyOrBandwidthRData} The populated <code>FreezeTronEnergyOrBandwidthRData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FreezeTronEnergyOrBandwidthRData();
        if (data.hasOwnProperty('item')) {
          obj['item'] = _FreezeTronEnergyOrBandwidthRI["default"].constructFromObject(data['item']);
        }
      }
      return obj;
    }
  }]);
  return FreezeTronEnergyOrBandwidthRData;
}();
/**
 * @member {module:model/FreezeTronEnergyOrBandwidthRI} item
 */
FreezeTronEnergyOrBandwidthRData.prototype['item'] = undefined;
var _default = FreezeTronEnergyOrBandwidthRData;
exports["default"] = _default;