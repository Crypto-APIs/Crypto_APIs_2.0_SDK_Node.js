"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NewUnconfirmedCoinsTransactionsResponseItem = _interopRequireDefault(require("./NewUnconfirmedCoinsTransactionsResponseItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NewUnconfirmedCoinsTransactionsResponseData model module.
 * @module model/NewUnconfirmedCoinsTransactionsResponseData
 * @version 2.0.0
 */
var NewUnconfirmedCoinsTransactionsResponseData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewUnconfirmedCoinsTransactionsResponseData</code>.
   * @alias module:model/NewUnconfirmedCoinsTransactionsResponseData
   * @param item {module:model/NewUnconfirmedCoinsTransactionsResponseItem} 
   */
  function NewUnconfirmedCoinsTransactionsResponseData(item) {
    _classCallCheck(this, NewUnconfirmedCoinsTransactionsResponseData);

    NewUnconfirmedCoinsTransactionsResponseData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewUnconfirmedCoinsTransactionsResponseData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>NewUnconfirmedCoinsTransactionsResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewUnconfirmedCoinsTransactionsResponseData} obj Optional instance to populate.
     * @return {module:model/NewUnconfirmedCoinsTransactionsResponseData} The populated <code>NewUnconfirmedCoinsTransactionsResponseData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewUnconfirmedCoinsTransactionsResponseData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _NewUnconfirmedCoinsTransactionsResponseItem["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return NewUnconfirmedCoinsTransactionsResponseData;
}();
/**
 * @member {module:model/NewUnconfirmedCoinsTransactionsResponseItem} item
 */


NewUnconfirmedCoinsTransactionsResponseData.prototype['item'] = undefined;
var _default = NewUnconfirmedCoinsTransactionsResponseData;
exports["default"] = _default;