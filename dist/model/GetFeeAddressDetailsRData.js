"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetFeeAddressDetailsRI = _interopRequireDefault(require("./GetFeeAddressDetailsRI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetFeeAddressDetailsRData model module.
 * @module model/GetFeeAddressDetailsRData
 * @version 1.5.0
 */
var GetFeeAddressDetailsRData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetFeeAddressDetailsRData</code>.
   * @alias module:model/GetFeeAddressDetailsRData
   * @param item {module:model/GetFeeAddressDetailsRI} 
   */
  function GetFeeAddressDetailsRData(item) {
    _classCallCheck(this, GetFeeAddressDetailsRData);

    GetFeeAddressDetailsRData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetFeeAddressDetailsRData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>GetFeeAddressDetailsRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFeeAddressDetailsRData} obj Optional instance to populate.
     * @return {module:model/GetFeeAddressDetailsRData} The populated <code>GetFeeAddressDetailsRData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetFeeAddressDetailsRData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _GetFeeAddressDetailsRI["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return GetFeeAddressDetailsRData;
}();
/**
 * @member {module:model/GetFeeAddressDetailsRI} item
 */


GetFeeAddressDetailsRData.prototype['item'] = undefined;
var _default = GetFeeAddressDetailsRData;
exports["default"] = _default;