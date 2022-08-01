"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetBlockDetailsByBlockHeightRI = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightRI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetBlockDetailsByBlockHeightRData model module.
 * @module model/GetBlockDetailsByBlockHeightRData
 * @version 1.7.2
 */
var GetBlockDetailsByBlockHeightRData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetBlockDetailsByBlockHeightRData</code>.
   * @alias module:model/GetBlockDetailsByBlockHeightRData
   * @param item {module:model/GetBlockDetailsByBlockHeightRI} 
   */
  function GetBlockDetailsByBlockHeightRData(item) {
    _classCallCheck(this, GetBlockDetailsByBlockHeightRData);

    GetBlockDetailsByBlockHeightRData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetBlockDetailsByBlockHeightRData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>GetBlockDetailsByBlockHeightRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHeightRData} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHeightRData} The populated <code>GetBlockDetailsByBlockHeightRData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetBlockDetailsByBlockHeightRData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _GetBlockDetailsByBlockHeightRI["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return GetBlockDetailsByBlockHeightRData;
}();
/**
 * @member {module:model/GetBlockDetailsByBlockHeightRI} item
 */


GetBlockDetailsByBlockHeightRData.prototype['item'] = undefined;
var _default = GetBlockDetailsByBlockHeightRData;
exports["default"] = _default;