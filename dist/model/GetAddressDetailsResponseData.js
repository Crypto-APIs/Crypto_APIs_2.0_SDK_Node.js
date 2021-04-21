"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetAddressDetailsResponseItem = _interopRequireDefault(require("./GetAddressDetailsResponseItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetAddressDetailsResponseData model module.
 * @module model/GetAddressDetailsResponseData
 * @version 2.0.0
 */
var GetAddressDetailsResponseData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetAddressDetailsResponseData</code>.
   * @alias module:model/GetAddressDetailsResponseData
   * @param item {module:model/GetAddressDetailsResponseItem} 
   */
  function GetAddressDetailsResponseData(item) {
    _classCallCheck(this, GetAddressDetailsResponseData);

    GetAddressDetailsResponseData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetAddressDetailsResponseData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>GetAddressDetailsResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAddressDetailsResponseData} obj Optional instance to populate.
     * @return {module:model/GetAddressDetailsResponseData} The populated <code>GetAddressDetailsResponseData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetAddressDetailsResponseData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _GetAddressDetailsResponseItem["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return GetAddressDetailsResponseData;
}();
/**
 * @member {module:model/GetAddressDetailsResponseItem} item
 */


GetAddressDetailsResponseData.prototype['item'] = undefined;
var _default = GetAddressDetailsResponseData;
exports["default"] = _default;