"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BroadcastLocallySignedTransactionRI = _interopRequireDefault(require("./BroadcastLocallySignedTransactionRI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The BroadcastLocallySignedTransactionRData model module.
 * @module model/BroadcastLocallySignedTransactionRData
 * @version 1.7.2
 */
var BroadcastLocallySignedTransactionRData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BroadcastLocallySignedTransactionRData</code>.
   * @alias module:model/BroadcastLocallySignedTransactionRData
   * @param item {module:model/BroadcastLocallySignedTransactionRI} 
   */
  function BroadcastLocallySignedTransactionRData(item) {
    _classCallCheck(this, BroadcastLocallySignedTransactionRData);

    BroadcastLocallySignedTransactionRData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BroadcastLocallySignedTransactionRData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>BroadcastLocallySignedTransactionRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BroadcastLocallySignedTransactionRData} obj Optional instance to populate.
     * @return {module:model/BroadcastLocallySignedTransactionRData} The populated <code>BroadcastLocallySignedTransactionRData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BroadcastLocallySignedTransactionRData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _BroadcastLocallySignedTransactionRI["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return BroadcastLocallySignedTransactionRData;
}();
/**
 * @member {module:model/BroadcastLocallySignedTransactionRI} item
 */


BroadcastLocallySignedTransactionRData.prototype['item'] = undefined;
var _default = BroadcastLocallySignedTransactionRData;
exports["default"] = _default;