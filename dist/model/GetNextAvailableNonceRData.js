"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetNextAvailableNonceRI = _interopRequireDefault(require("./GetNextAvailableNonceRI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetNextAvailableNonceRData model module.
 * @module model/GetNextAvailableNonceRData
 * @version 1.7.2
 */
var GetNextAvailableNonceRData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetNextAvailableNonceRData</code>.
   * @alias module:model/GetNextAvailableNonceRData
   * @param item {module:model/GetNextAvailableNonceRI} 
   */
  function GetNextAvailableNonceRData(item) {
    _classCallCheck(this, GetNextAvailableNonceRData);

    GetNextAvailableNonceRData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetNextAvailableNonceRData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>GetNextAvailableNonceRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetNextAvailableNonceRData} obj Optional instance to populate.
     * @return {module:model/GetNextAvailableNonceRData} The populated <code>GetNextAvailableNonceRData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetNextAvailableNonceRData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _GetNextAvailableNonceRI["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return GetNextAvailableNonceRData;
}();
/**
 * @member {module:model/GetNextAvailableNonceRI} item
 */


GetNextAvailableNonceRData.prototype['item'] = undefined;
var _default = GetNextAvailableNonceRData;
exports["default"] = _default;