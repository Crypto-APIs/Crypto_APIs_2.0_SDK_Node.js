"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateAutomaticCoinsForwardingRequestBodyDataItem = _interopRequireDefault(require("./CreateAutomaticCoinsForwardingRequestBodyDataItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateAutomaticCoinsForwardingRequestBodyData model module.
 * @module model/CreateAutomaticCoinsForwardingRequestBodyData
 * @version 2.0.0
 */
var CreateAutomaticCoinsForwardingRequestBodyData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateAutomaticCoinsForwardingRequestBodyData</code>.
   * @alias module:model/CreateAutomaticCoinsForwardingRequestBodyData
   * @param item {module:model/CreateAutomaticCoinsForwardingRequestBodyDataItem} 
   */
  function CreateAutomaticCoinsForwardingRequestBodyData(item) {
    _classCallCheck(this, CreateAutomaticCoinsForwardingRequestBodyData);

    CreateAutomaticCoinsForwardingRequestBodyData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateAutomaticCoinsForwardingRequestBodyData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>CreateAutomaticCoinsForwardingRequestBodyData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAutomaticCoinsForwardingRequestBodyData} obj Optional instance to populate.
     * @return {module:model/CreateAutomaticCoinsForwardingRequestBodyData} The populated <code>CreateAutomaticCoinsForwardingRequestBodyData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateAutomaticCoinsForwardingRequestBodyData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _CreateAutomaticCoinsForwardingRequestBodyDataItem["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return CreateAutomaticCoinsForwardingRequestBodyData;
}();
/**
 * @member {module:model/CreateAutomaticCoinsForwardingRequestBodyDataItem} item
 */


CreateAutomaticCoinsForwardingRequestBodyData.prototype['item'] = undefined;
var _default = CreateAutomaticCoinsForwardingRequestBodyData;
exports["default"] = _default;