"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NewConfirmedInternalTransactionsRBDataItem = _interopRequireDefault(require("./NewConfirmedInternalTransactionsRBDataItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NewConfirmedInternalTransactionsRBData model module.
 * @module model/NewConfirmedInternalTransactionsRBData
 * @version 1.3.0
 */
var NewConfirmedInternalTransactionsRBData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewConfirmedInternalTransactionsRBData</code>.
   * @alias module:model/NewConfirmedInternalTransactionsRBData
   * @param item {module:model/NewConfirmedInternalTransactionsRBDataItem} 
   */
  function NewConfirmedInternalTransactionsRBData(item) {
    _classCallCheck(this, NewConfirmedInternalTransactionsRBData);

    NewConfirmedInternalTransactionsRBData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewConfirmedInternalTransactionsRBData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>NewConfirmedInternalTransactionsRBData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedInternalTransactionsRBData} obj Optional instance to populate.
     * @return {module:model/NewConfirmedInternalTransactionsRBData} The populated <code>NewConfirmedInternalTransactionsRBData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewConfirmedInternalTransactionsRBData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _NewConfirmedInternalTransactionsRBDataItem["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return NewConfirmedInternalTransactionsRBData;
}();
/**
 * @member {module:model/NewConfirmedInternalTransactionsRBDataItem} item
 */


NewConfirmedInternalTransactionsRBData.prototype['item'] = undefined;
var _default = NewConfirmedInternalTransactionsRBData;
exports["default"] = _default;