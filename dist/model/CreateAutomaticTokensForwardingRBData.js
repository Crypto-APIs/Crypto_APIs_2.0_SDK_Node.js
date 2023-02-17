"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateAutomaticTokensForwardingRBDataItem = _interopRequireDefault(require("./CreateAutomaticTokensForwardingRBDataItem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CreateAutomaticTokensForwardingRBData model module.
 * @module model/CreateAutomaticTokensForwardingRBData
 * @version 1.13.0
 */
var CreateAutomaticTokensForwardingRBData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateAutomaticTokensForwardingRBData</code>.
   * @alias module:model/CreateAutomaticTokensForwardingRBData
   * @param item {module:model/CreateAutomaticTokensForwardingRBDataItem} 
   */
  function CreateAutomaticTokensForwardingRBData(item) {
    _classCallCheck(this, CreateAutomaticTokensForwardingRBData);
    CreateAutomaticTokensForwardingRBData.initialize(this, item);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CreateAutomaticTokensForwardingRBData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }

    /**
     * Constructs a <code>CreateAutomaticTokensForwardingRBData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAutomaticTokensForwardingRBData} obj Optional instance to populate.
     * @return {module:model/CreateAutomaticTokensForwardingRBData} The populated <code>CreateAutomaticTokensForwardingRBData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateAutomaticTokensForwardingRBData();
        if (data.hasOwnProperty('item')) {
          obj['item'] = _CreateAutomaticTokensForwardingRBDataItem["default"].constructFromObject(data['item']);
        }
      }
      return obj;
    }
  }]);
  return CreateAutomaticTokensForwardingRBData;
}();
/**
 * @member {module:model/CreateAutomaticTokensForwardingRBDataItem} item
 */
CreateAutomaticTokensForwardingRBData.prototype['item'] = undefined;
var _default = CreateAutomaticTokensForwardingRBData;
exports["default"] = _default;