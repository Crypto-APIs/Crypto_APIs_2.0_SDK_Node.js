"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NewConfirmedCoinsTransactionsRequestBodyDataItem = _interopRequireDefault(require("./NewConfirmedCoinsTransactionsRequestBodyDataItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NewConfirmedCoinsTransactionsRequestBodyData model module.
 * @module model/NewConfirmedCoinsTransactionsRequestBodyData
 * @version 2.0.0
 */
var NewConfirmedCoinsTransactionsRequestBodyData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewConfirmedCoinsTransactionsRequestBodyData</code>.
   * @alias module:model/NewConfirmedCoinsTransactionsRequestBodyData
   * @param item {module:model/NewConfirmedCoinsTransactionsRequestBodyDataItem} 
   */
  function NewConfirmedCoinsTransactionsRequestBodyData(item) {
    _classCallCheck(this, NewConfirmedCoinsTransactionsRequestBodyData);

    NewConfirmedCoinsTransactionsRequestBodyData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewConfirmedCoinsTransactionsRequestBodyData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>NewConfirmedCoinsTransactionsRequestBodyData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedCoinsTransactionsRequestBodyData} obj Optional instance to populate.
     * @return {module:model/NewConfirmedCoinsTransactionsRequestBodyData} The populated <code>NewConfirmedCoinsTransactionsRequestBodyData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewConfirmedCoinsTransactionsRequestBodyData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _NewConfirmedCoinsTransactionsRequestBodyDataItem["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return NewConfirmedCoinsTransactionsRequestBodyData;
}();
/**
 * @member {module:model/NewConfirmedCoinsTransactionsRequestBodyDataItem} item
 */


NewConfirmedCoinsTransactionsRequestBodyData.prototype['item'] = undefined;
var _default = NewConfirmedCoinsTransactionsRequestBodyData;
exports["default"] = _default;