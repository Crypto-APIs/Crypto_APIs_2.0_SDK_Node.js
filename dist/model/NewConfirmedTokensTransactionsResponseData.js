"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NewConfirmedTokensTransactionsResponseItem = _interopRequireDefault(require("./NewConfirmedTokensTransactionsResponseItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NewConfirmedTokensTransactionsResponseData model module.
 * @module model/NewConfirmedTokensTransactionsResponseData
 * @version 2.0.0
 */
var NewConfirmedTokensTransactionsResponseData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewConfirmedTokensTransactionsResponseData</code>.
   * @alias module:model/NewConfirmedTokensTransactionsResponseData
   * @param item {module:model/NewConfirmedTokensTransactionsResponseItem} 
   */
  function NewConfirmedTokensTransactionsResponseData(item) {
    _classCallCheck(this, NewConfirmedTokensTransactionsResponseData);

    NewConfirmedTokensTransactionsResponseData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewConfirmedTokensTransactionsResponseData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>NewConfirmedTokensTransactionsResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedTokensTransactionsResponseData} obj Optional instance to populate.
     * @return {module:model/NewConfirmedTokensTransactionsResponseData} The populated <code>NewConfirmedTokensTransactionsResponseData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewConfirmedTokensTransactionsResponseData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _NewConfirmedTokensTransactionsResponseItem["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return NewConfirmedTokensTransactionsResponseData;
}();
/**
 * @member {module:model/NewConfirmedTokensTransactionsResponseItem} item
 */


NewConfirmedTokensTransactionsResponseData.prototype['item'] = undefined;
var _default = NewConfirmedTokensTransactionsResponseData;
exports["default"] = _default;