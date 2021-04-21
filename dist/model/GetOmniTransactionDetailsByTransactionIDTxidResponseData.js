"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetOmniTransactionDetailsByTransactionIDTxidResponseItem = _interopRequireDefault(require("./GetOmniTransactionDetailsByTransactionIDTxidResponseItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetOmniTransactionDetailsByTransactionIDTxidResponseData model module.
 * @module model/GetOmniTransactionDetailsByTransactionIDTxidResponseData
 * @version 2.0.0
 */
var GetOmniTransactionDetailsByTransactionIDTxidResponseData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetOmniTransactionDetailsByTransactionIDTxidResponseData</code>.
   * @alias module:model/GetOmniTransactionDetailsByTransactionIDTxidResponseData
   * @param item {module:model/GetOmniTransactionDetailsByTransactionIDTxidResponseItem} 
   */
  function GetOmniTransactionDetailsByTransactionIDTxidResponseData(item) {
    _classCallCheck(this, GetOmniTransactionDetailsByTransactionIDTxidResponseData);

    GetOmniTransactionDetailsByTransactionIDTxidResponseData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetOmniTransactionDetailsByTransactionIDTxidResponseData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>GetOmniTransactionDetailsByTransactionIDTxidResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetOmniTransactionDetailsByTransactionIDTxidResponseData} obj Optional instance to populate.
     * @return {module:model/GetOmniTransactionDetailsByTransactionIDTxidResponseData} The populated <code>GetOmniTransactionDetailsByTransactionIDTxidResponseData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetOmniTransactionDetailsByTransactionIDTxidResponseData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _GetOmniTransactionDetailsByTransactionIDTxidResponseItem["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return GetOmniTransactionDetailsByTransactionIDTxidResponseData;
}();
/**
 * @member {module:model/GetOmniTransactionDetailsByTransactionIDTxidResponseItem} item
 */


GetOmniTransactionDetailsByTransactionIDTxidResponseData.prototype['item'] = undefined;
var _default = GetOmniTransactionDetailsByTransactionIDTxidResponseData;
exports["default"] = _default;