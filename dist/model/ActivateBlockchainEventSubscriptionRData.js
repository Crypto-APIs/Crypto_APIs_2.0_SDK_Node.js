"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ActivateBlockchainEventSubscriptionRI = _interopRequireDefault(require("./ActivateBlockchainEventSubscriptionRI"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ActivateBlockchainEventSubscriptionRData model module.
 * @module model/ActivateBlockchainEventSubscriptionRData
 * @version 1.13.0
 */
var ActivateBlockchainEventSubscriptionRData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActivateBlockchainEventSubscriptionRData</code>.
   * @alias module:model/ActivateBlockchainEventSubscriptionRData
   * @param item {module:model/ActivateBlockchainEventSubscriptionRI} 
   */
  function ActivateBlockchainEventSubscriptionRData(item) {
    _classCallCheck(this, ActivateBlockchainEventSubscriptionRData);
    ActivateBlockchainEventSubscriptionRData.initialize(this, item);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ActivateBlockchainEventSubscriptionRData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }

    /**
     * Constructs a <code>ActivateBlockchainEventSubscriptionRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActivateBlockchainEventSubscriptionRData} obj Optional instance to populate.
     * @return {module:model/ActivateBlockchainEventSubscriptionRData} The populated <code>ActivateBlockchainEventSubscriptionRData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActivateBlockchainEventSubscriptionRData();
        if (data.hasOwnProperty('item')) {
          obj['item'] = _ActivateBlockchainEventSubscriptionRI["default"].constructFromObject(data['item']);
        }
      }
      return obj;
    }
  }]);
  return ActivateBlockchainEventSubscriptionRData;
}();
/**
 * @member {module:model/ActivateBlockchainEventSubscriptionRI} item
 */
ActivateBlockchainEventSubscriptionRData.prototype['item'] = undefined;
var _default = ActivateBlockchainEventSubscriptionRData;
exports["default"] = _default;