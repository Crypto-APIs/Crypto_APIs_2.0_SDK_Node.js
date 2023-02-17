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
 * The PrepareAFungibleTokenTransferFromAddressRIBSEFee model module.
 * @module model/PrepareAFungibleTokenTransferFromAddressRIBSEFee
 * @version 1.13.0
 */
var PrepareAFungibleTokenTransferFromAddressRIBSEFee = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAFungibleTokenTransferFromAddressRIBSEFee</code>.
   * Defines the amount of the transaction fee.
   * @alias module:model/PrepareAFungibleTokenTransferFromAddressRIBSEFee
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {String} Represents the price offered to the miner to purchase this amount of gas.
   * @param maxFeePerGas {String} Representation of the max fee per gas value
   * @param maxPriorityFeePerGas {String} Representation of the max priority fee per gas value
   */
  function PrepareAFungibleTokenTransferFromAddressRIBSEFee(gasLimit, gasPrice, maxFeePerGas, maxPriorityFeePerGas) {
    _classCallCheck(this, PrepareAFungibleTokenTransferFromAddressRIBSEFee);
    PrepareAFungibleTokenTransferFromAddressRIBSEFee.initialize(this, gasLimit, gasPrice, maxFeePerGas, maxPriorityFeePerGas);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareAFungibleTokenTransferFromAddressRIBSEFee, null, [{
    key: "initialize",
    value: function initialize(obj, gasLimit, gasPrice, maxFeePerGas, maxPriorityFeePerGas) {
      obj['gasLimit'] = gasLimit;
      obj['gasPrice'] = gasPrice;
      obj['maxFeePerGas'] = maxFeePerGas;
      obj['maxPriorityFeePerGas'] = maxPriorityFeePerGas;
    }

    /**
     * Constructs a <code>PrepareAFungibleTokenTransferFromAddressRIBSEFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAFungibleTokenTransferFromAddressRIBSEFee} obj Optional instance to populate.
     * @return {module:model/PrepareAFungibleTokenTransferFromAddressRIBSEFee} The populated <code>PrepareAFungibleTokenTransferFromAddressRIBSEFee</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAFungibleTokenTransferFromAddressRIBSEFee();
        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }
        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _ApiClient["default"].convertToType(data['gasPrice'], 'String');
        }
        if (data.hasOwnProperty('maxFeePerGas')) {
          obj['maxFeePerGas'] = _ApiClient["default"].convertToType(data['maxFeePerGas'], 'String');
        }
        if (data.hasOwnProperty('maxPriorityFeePerGas')) {
          obj['maxPriorityFeePerGas'] = _ApiClient["default"].convertToType(data['maxPriorityFeePerGas'], 'String');
        }
      }
      return obj;
    }
  }]);
  return PrepareAFungibleTokenTransferFromAddressRIBSEFee;
}();
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
PrepareAFungibleTokenTransferFromAddressRIBSEFee.prototype['gasLimit'] = undefined;

/**
 * Represents the price offered to the miner to purchase this amount of gas.
 * @member {String} gasPrice
 */
PrepareAFungibleTokenTransferFromAddressRIBSEFee.prototype['gasPrice'] = undefined;

/**
 * Representation of the max fee per gas value
 * @member {String} maxFeePerGas
 */
PrepareAFungibleTokenTransferFromAddressRIBSEFee.prototype['maxFeePerGas'] = undefined;

/**
 * Representation of the max priority fee per gas value
 * @member {String} maxPriorityFeePerGas
 */
PrepareAFungibleTokenTransferFromAddressRIBSEFee.prototype['maxPriorityFeePerGas'] = undefined;
var _default = PrepareAFungibleTokenTransferFromAddressRIBSEFee;
exports["default"] = _default;