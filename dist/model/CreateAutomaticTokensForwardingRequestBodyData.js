"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateAutomaticTokensForwardingRequestBodyDataItem = _interopRequireDefault(require("./CreateAutomaticTokensForwardingRequestBodyDataItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateAutomaticTokensForwardingRequestBodyData model module.
 * @module model/CreateAutomaticTokensForwardingRequestBodyData
 * @version 2.0.0
 */
var CreateAutomaticTokensForwardingRequestBodyData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateAutomaticTokensForwardingRequestBodyData</code>.
   * @alias module:model/CreateAutomaticTokensForwardingRequestBodyData
   * @param item {module:model/CreateAutomaticTokensForwardingRequestBodyDataItem} 
   */
  function CreateAutomaticTokensForwardingRequestBodyData(item) {
    _classCallCheck(this, CreateAutomaticTokensForwardingRequestBodyData);

    CreateAutomaticTokensForwardingRequestBodyData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateAutomaticTokensForwardingRequestBodyData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>CreateAutomaticTokensForwardingRequestBodyData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAutomaticTokensForwardingRequestBodyData} obj Optional instance to populate.
     * @return {module:model/CreateAutomaticTokensForwardingRequestBodyData} The populated <code>CreateAutomaticTokensForwardingRequestBodyData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateAutomaticTokensForwardingRequestBodyData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _CreateAutomaticTokensForwardingRequestBodyDataItem["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return CreateAutomaticTokensForwardingRequestBodyData;
}();
/**
 * @member {module:model/CreateAutomaticTokensForwardingRequestBodyDataItem} item
 */


CreateAutomaticTokensForwardingRequestBodyData.prototype['item'] = undefined;
var _default = CreateAutomaticTokensForwardingRequestBodyData;
exports["default"] = _default;