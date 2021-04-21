"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetLatestMinedXRPRippleBlockResponseItem = _interopRequireDefault(require("./GetLatestMinedXRPRippleBlockResponseItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetLatestMinedXRPRippleBlockResponseData model module.
 * @module model/GetLatestMinedXRPRippleBlockResponseData
 * @version 2.0.0
 */
var GetLatestMinedXRPRippleBlockResponseData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetLatestMinedXRPRippleBlockResponseData</code>.
   * @alias module:model/GetLatestMinedXRPRippleBlockResponseData
   * @param item {module:model/GetLatestMinedXRPRippleBlockResponseItem} 
   */
  function GetLatestMinedXRPRippleBlockResponseData(item) {
    _classCallCheck(this, GetLatestMinedXRPRippleBlockResponseData);

    GetLatestMinedXRPRippleBlockResponseData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetLatestMinedXRPRippleBlockResponseData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>GetLatestMinedXRPRippleBlockResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLatestMinedXRPRippleBlockResponseData} obj Optional instance to populate.
     * @return {module:model/GetLatestMinedXRPRippleBlockResponseData} The populated <code>GetLatestMinedXRPRippleBlockResponseData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetLatestMinedXRPRippleBlockResponseData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _GetLatestMinedXRPRippleBlockResponseItem["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return GetLatestMinedXRPRippleBlockResponseData;
}();
/**
 * @member {module:model/GetLatestMinedXRPRippleBlockResponseItem} item
 */


GetLatestMinedXRPRippleBlockResponseData.prototype['item'] = undefined;
var _default = GetLatestMinedXRPRippleBlockResponseData;
exports["default"] = _default;