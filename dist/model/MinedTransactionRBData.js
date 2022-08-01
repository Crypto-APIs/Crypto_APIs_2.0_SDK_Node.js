"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MinedTransactionRBDataItem = _interopRequireDefault(require("./MinedTransactionRBDataItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The MinedTransactionRBData model module.
 * @module model/MinedTransactionRBData
 * @version 1.7.2
 */
var MinedTransactionRBData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MinedTransactionRBData</code>.
   * @alias module:model/MinedTransactionRBData
   * @param item {module:model/MinedTransactionRBDataItem} 
   */
  function MinedTransactionRBData(item) {
    _classCallCheck(this, MinedTransactionRBData);

    MinedTransactionRBData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MinedTransactionRBData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>MinedTransactionRBData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MinedTransactionRBData} obj Optional instance to populate.
     * @return {module:model/MinedTransactionRBData} The populated <code>MinedTransactionRBData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MinedTransactionRBData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _MinedTransactionRBDataItem["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return MinedTransactionRBData;
}();
/**
 * @member {module:model/MinedTransactionRBDataItem} item
 */


MinedTransactionRBData.prototype['item'] = undefined;
var _default = MinedTransactionRBData;
exports["default"] = _default;