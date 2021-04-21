"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateAutomaticTokensForwardingResponseItem = _interopRequireDefault(require("./CreateAutomaticTokensForwardingResponseItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateAutomaticTokensForwardingResponseData model module.
 * @module model/CreateAutomaticTokensForwardingResponseData
 * @version 2.0.0
 */
var CreateAutomaticTokensForwardingResponseData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateAutomaticTokensForwardingResponseData</code>.
   * @alias module:model/CreateAutomaticTokensForwardingResponseData
   * @param item {module:model/CreateAutomaticTokensForwardingResponseItem} 
   */
  function CreateAutomaticTokensForwardingResponseData(item) {
    _classCallCheck(this, CreateAutomaticTokensForwardingResponseData);

    CreateAutomaticTokensForwardingResponseData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateAutomaticTokensForwardingResponseData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>CreateAutomaticTokensForwardingResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAutomaticTokensForwardingResponseData} obj Optional instance to populate.
     * @return {module:model/CreateAutomaticTokensForwardingResponseData} The populated <code>CreateAutomaticTokensForwardingResponseData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateAutomaticTokensForwardingResponseData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _CreateAutomaticTokensForwardingResponseItem["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return CreateAutomaticTokensForwardingResponseData;
}();
/**
 * @member {module:model/CreateAutomaticTokensForwardingResponseItem} item
 */


CreateAutomaticTokensForwardingResponseData.prototype['item'] = undefined;
var _default = CreateAutomaticTokensForwardingResponseData;
exports["default"] = _default;