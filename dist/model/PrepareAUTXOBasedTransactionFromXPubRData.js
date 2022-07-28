"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PrepareAUTXOBasedTransactionFromXPubRI = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromXPubRI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PrepareAUTXOBasedTransactionFromXPubRData model module.
 * @module model/PrepareAUTXOBasedTransactionFromXPubRData
 * @version 1.7.0
 */
var PrepareAUTXOBasedTransactionFromXPubRData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAUTXOBasedTransactionFromXPubRData</code>.
   * @alias module:model/PrepareAUTXOBasedTransactionFromXPubRData
   * @param item {module:model/PrepareAUTXOBasedTransactionFromXPubRI} 
   */
  function PrepareAUTXOBasedTransactionFromXPubRData(item) {
    _classCallCheck(this, PrepareAUTXOBasedTransactionFromXPubRData);

    PrepareAUTXOBasedTransactionFromXPubRData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PrepareAUTXOBasedTransactionFromXPubRData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>PrepareAUTXOBasedTransactionFromXPubRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAUTXOBasedTransactionFromXPubRData} obj Optional instance to populate.
     * @return {module:model/PrepareAUTXOBasedTransactionFromXPubRData} The populated <code>PrepareAUTXOBasedTransactionFromXPubRData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAUTXOBasedTransactionFromXPubRData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _PrepareAUTXOBasedTransactionFromXPubRI["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return PrepareAUTXOBasedTransactionFromXPubRData;
}();
/**
 * @member {module:model/PrepareAUTXOBasedTransactionFromXPubRI} item
 */


PrepareAUTXOBasedTransactionFromXPubRData.prototype['item'] = undefined;
var _default = PrepareAUTXOBasedTransactionFromXPubRData;
exports["default"] = _default;