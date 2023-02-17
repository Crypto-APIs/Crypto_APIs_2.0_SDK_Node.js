"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee model module.
 * @module model/PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee
 * @version 1.13.0
 */
var PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee</code>.
   * @alias module:model/PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {String} Represents the price offered to the miner to purchase this amount of gas.
   */
  function PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee(gasLimit, gasPrice) {
    _classCallCheck(this, PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee);
    PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee.initialize(this, gasLimit, gasPrice);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee, null, [{
    key: "initialize",
    value: function initialize(obj, gasLimit, gasPrice) {
      obj['gasLimit'] = gasLimit;
      obj['gasPrice'] = gasPrice;
    }

    /**
     * Constructs a <code>PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee} obj Optional instance to populate.
     * @return {module:model/PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee} The populated <code>PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee();
        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }
        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _ApiClient["default"].convertToType(data['gasPrice'], 'String');
        }
      }
      return obj;
    }
  }]);
  return PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee;
}();
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee.prototype['gasLimit'] = undefined;

/**
 * Represents the price offered to the miner to purchase this amount of gas.
 * @member {String} gasPrice
 */
PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee.prototype['gasPrice'] = undefined;
var _default = PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee;
exports["default"] = _default;