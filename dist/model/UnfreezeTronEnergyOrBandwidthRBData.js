"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _UnfreezeTronEnergyOrBandwidthRBDataItem = _interopRequireDefault(require("./UnfreezeTronEnergyOrBandwidthRBDataItem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The UnfreezeTronEnergyOrBandwidthRBData model module.
 * @module model/UnfreezeTronEnergyOrBandwidthRBData
 * @version 1.10.0
 */
var UnfreezeTronEnergyOrBandwidthRBData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UnfreezeTronEnergyOrBandwidthRBData</code>.
   * @alias module:model/UnfreezeTronEnergyOrBandwidthRBData
   * @param item {module:model/UnfreezeTronEnergyOrBandwidthRBDataItem} 
   */
  function UnfreezeTronEnergyOrBandwidthRBData(item) {
    _classCallCheck(this, UnfreezeTronEnergyOrBandwidthRBData);
    UnfreezeTronEnergyOrBandwidthRBData.initialize(this, item);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(UnfreezeTronEnergyOrBandwidthRBData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }

    /**
     * Constructs a <code>UnfreezeTronEnergyOrBandwidthRBData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnfreezeTronEnergyOrBandwidthRBData} obj Optional instance to populate.
     * @return {module:model/UnfreezeTronEnergyOrBandwidthRBData} The populated <code>UnfreezeTronEnergyOrBandwidthRBData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UnfreezeTronEnergyOrBandwidthRBData();
        if (data.hasOwnProperty('item')) {
          obj['item'] = _UnfreezeTronEnergyOrBandwidthRBDataItem["default"].constructFromObject(data['item']);
        }
      }
      return obj;
    }
  }]);
  return UnfreezeTronEnergyOrBandwidthRBData;
}();
/**
 * @member {module:model/UnfreezeTronEnergyOrBandwidthRBDataItem} item
 */
UnfreezeTronEnergyOrBandwidthRBData.prototype['item'] = undefined;
var _default = UnfreezeTronEnergyOrBandwidthRBData;
exports["default"] = _default;