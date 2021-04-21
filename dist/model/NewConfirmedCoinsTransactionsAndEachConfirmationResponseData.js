"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NewConfirmedCoinsTransactionsAndEachConfirmationResponseItem = _interopRequireDefault(require("./NewConfirmedCoinsTransactionsAndEachConfirmationResponseItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NewConfirmedCoinsTransactionsAndEachConfirmationResponseData model module.
 * @module model/NewConfirmedCoinsTransactionsAndEachConfirmationResponseData
 * @version 2.0.0
 */
var NewConfirmedCoinsTransactionsAndEachConfirmationResponseData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewConfirmedCoinsTransactionsAndEachConfirmationResponseData</code>.
   * @alias module:model/NewConfirmedCoinsTransactionsAndEachConfirmationResponseData
   * @param item {module:model/NewConfirmedCoinsTransactionsAndEachConfirmationResponseItem} 
   */
  function NewConfirmedCoinsTransactionsAndEachConfirmationResponseData(item) {
    _classCallCheck(this, NewConfirmedCoinsTransactionsAndEachConfirmationResponseData);

    NewConfirmedCoinsTransactionsAndEachConfirmationResponseData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewConfirmedCoinsTransactionsAndEachConfirmationResponseData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>NewConfirmedCoinsTransactionsAndEachConfirmationResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedCoinsTransactionsAndEachConfirmationResponseData} obj Optional instance to populate.
     * @return {module:model/NewConfirmedCoinsTransactionsAndEachConfirmationResponseData} The populated <code>NewConfirmedCoinsTransactionsAndEachConfirmationResponseData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewConfirmedCoinsTransactionsAndEachConfirmationResponseData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _NewConfirmedCoinsTransactionsAndEachConfirmationResponseItem["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return NewConfirmedCoinsTransactionsAndEachConfirmationResponseData;
}();
/**
 * @member {module:model/NewConfirmedCoinsTransactionsAndEachConfirmationResponseItem} item
 */


NewConfirmedCoinsTransactionsAndEachConfirmationResponseData.prototype['item'] = undefined;
var _default = NewConfirmedCoinsTransactionsAndEachConfirmationResponseData;
exports["default"] = _default;