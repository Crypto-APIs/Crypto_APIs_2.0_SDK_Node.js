"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetFeeAddressDetailsRIBalance = _interopRequireDefault(require("./GetFeeAddressDetailsRIBalance"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetFeeAddressDetailsRI model module.
 * @module model/GetFeeAddressDetailsRI
 * @version 1.13.0
 */
var GetFeeAddressDetailsRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetFeeAddressDetailsRI</code>.
   * @alias module:model/GetFeeAddressDetailsRI
   * @param address {String} Represents the specific fee address, which is always automatically generated. Users must fund it.
   * @param balance {module:model/GetFeeAddressDetailsRIBalance} 
   * @param minimumTransferAmount {String} Represents the minimum transfer amount of the currency in the `fromAddress` that can be allowed for an automatic forwarding.
   */
  function GetFeeAddressDetailsRI(address, balance, minimumTransferAmount) {
    _classCallCheck(this, GetFeeAddressDetailsRI);
    GetFeeAddressDetailsRI.initialize(this, address, balance, minimumTransferAmount);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetFeeAddressDetailsRI, null, [{
    key: "initialize",
    value: function initialize(obj, address, balance, minimumTransferAmount) {
      obj['address'] = address;
      obj['balance'] = balance;
      obj['minimumTransferAmount'] = minimumTransferAmount;
    }

    /**
     * Constructs a <code>GetFeeAddressDetailsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFeeAddressDetailsRI} obj Optional instance to populate.
     * @return {module:model/GetFeeAddressDetailsRI} The populated <code>GetFeeAddressDetailsRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetFeeAddressDetailsRI();
        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
        if (data.hasOwnProperty('balance')) {
          obj['balance'] = _GetFeeAddressDetailsRIBalance["default"].constructFromObject(data['balance']);
        }
        if (data.hasOwnProperty('minimumTransferAmount')) {
          obj['minimumTransferAmount'] = _ApiClient["default"].convertToType(data['minimumTransferAmount'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GetFeeAddressDetailsRI;
}();
/**
 * Represents the specific fee address, which is always automatically generated. Users must fund it.
 * @member {String} address
 */
GetFeeAddressDetailsRI.prototype['address'] = undefined;

/**
 * @member {module:model/GetFeeAddressDetailsRIBalance} balance
 */
GetFeeAddressDetailsRI.prototype['balance'] = undefined;

/**
 * Represents the minimum transfer amount of the currency in the `fromAddress` that can be allowed for an automatic forwarding.
 * @member {String} minimumTransferAmount
 */
GetFeeAddressDetailsRI.prototype['minimumTransferAmount'] = undefined;
var _default = GetFeeAddressDetailsRI;
exports["default"] = _default;