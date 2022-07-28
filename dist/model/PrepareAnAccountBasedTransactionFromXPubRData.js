"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PrepareAnAccountBasedTransactionFromXPubRI = _interopRequireDefault(require("./PrepareAnAccountBasedTransactionFromXPubRI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PrepareAnAccountBasedTransactionFromXPubRData model module.
 * @module model/PrepareAnAccountBasedTransactionFromXPubRData
 * @version 1.7.0
 */
var PrepareAnAccountBasedTransactionFromXPubRData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAnAccountBasedTransactionFromXPubRData</code>.
   * @alias module:model/PrepareAnAccountBasedTransactionFromXPubRData
   * @param item {module:model/PrepareAnAccountBasedTransactionFromXPubRI} 
   */
  function PrepareAnAccountBasedTransactionFromXPubRData(item) {
    _classCallCheck(this, PrepareAnAccountBasedTransactionFromXPubRData);

    PrepareAnAccountBasedTransactionFromXPubRData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PrepareAnAccountBasedTransactionFromXPubRData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>PrepareAnAccountBasedTransactionFromXPubRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAnAccountBasedTransactionFromXPubRData} obj Optional instance to populate.
     * @return {module:model/PrepareAnAccountBasedTransactionFromXPubRData} The populated <code>PrepareAnAccountBasedTransactionFromXPubRData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAnAccountBasedTransactionFromXPubRData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _PrepareAnAccountBasedTransactionFromXPubRI["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return PrepareAnAccountBasedTransactionFromXPubRData;
}();
/**
 * @member {module:model/PrepareAnAccountBasedTransactionFromXPubRI} item
 */


PrepareAnAccountBasedTransactionFromXPubRData.prototype['item'] = undefined;
var _default = PrepareAnAccountBasedTransactionFromXPubRData;
exports["default"] = _default;