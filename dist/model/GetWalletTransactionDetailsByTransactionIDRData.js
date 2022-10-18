"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetWalletTransactionDetailsByTransactionIDRI = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRI"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The GetWalletTransactionDetailsByTransactionIDRData model module.
 * @module model/GetWalletTransactionDetailsByTransactionIDRData
 * @version 1.9.0
 */var GetWalletTransactionDetailsByTransactionIDRData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetWalletTransactionDetailsByTransactionIDRData</code>.
   * @alias module:model/GetWalletTransactionDetailsByTransactionIDRData
   * @param item {module:model/GetWalletTransactionDetailsByTransactionIDRI} 
   */
  function GetWalletTransactionDetailsByTransactionIDRData(item) {
    _classCallCheck(this, GetWalletTransactionDetailsByTransactionIDRData);
    GetWalletTransactionDetailsByTransactionIDRData.initialize(this, item);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetWalletTransactionDetailsByTransactionIDRData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }

    /**
     * Constructs a <code>GetWalletTransactionDetailsByTransactionIDRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWalletTransactionDetailsByTransactionIDRData} obj Optional instance to populate.
     * @return {module:model/GetWalletTransactionDetailsByTransactionIDRData} The populated <code>GetWalletTransactionDetailsByTransactionIDRData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetWalletTransactionDetailsByTransactionIDRData();
        if (data.hasOwnProperty('item')) {
          obj['item'] = _GetWalletTransactionDetailsByTransactionIDRI["default"].constructFromObject(data['item']);
        }
      }
      return obj;
    }
  }]);
  return GetWalletTransactionDetailsByTransactionIDRData;
}(); /**
      * @member {module:model/GetWalletTransactionDetailsByTransactionIDRI} item
      */
GetWalletTransactionDetailsByTransactionIDRData.prototype['item'] = undefined;
var _default = GetWalletTransactionDetailsByTransactionIDRData;
exports["default"] = _default;