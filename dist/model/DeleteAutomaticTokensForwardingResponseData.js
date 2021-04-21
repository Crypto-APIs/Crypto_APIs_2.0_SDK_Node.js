"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeleteAutomaticTokensForwardingResponseItem = _interopRequireDefault(require("./DeleteAutomaticTokensForwardingResponseItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeleteAutomaticTokensForwardingResponseData model module.
 * @module model/DeleteAutomaticTokensForwardingResponseData
 * @version 2.0.0
 */
var DeleteAutomaticTokensForwardingResponseData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeleteAutomaticTokensForwardingResponseData</code>.
   * @alias module:model/DeleteAutomaticTokensForwardingResponseData
   * @param item {module:model/DeleteAutomaticTokensForwardingResponseItem} 
   */
  function DeleteAutomaticTokensForwardingResponseData(item) {
    _classCallCheck(this, DeleteAutomaticTokensForwardingResponseData);

    DeleteAutomaticTokensForwardingResponseData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteAutomaticTokensForwardingResponseData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>DeleteAutomaticTokensForwardingResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteAutomaticTokensForwardingResponseData} obj Optional instance to populate.
     * @return {module:model/DeleteAutomaticTokensForwardingResponseData} The populated <code>DeleteAutomaticTokensForwardingResponseData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteAutomaticTokensForwardingResponseData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _DeleteAutomaticTokensForwardingResponseItem["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return DeleteAutomaticTokensForwardingResponseData;
}();
/**
 * @member {module:model/DeleteAutomaticTokensForwardingResponseItem} item
 */


DeleteAutomaticTokensForwardingResponseData.prototype['item'] = undefined;
var _default = DeleteAutomaticTokensForwardingResponseData;
exports["default"] = _default;