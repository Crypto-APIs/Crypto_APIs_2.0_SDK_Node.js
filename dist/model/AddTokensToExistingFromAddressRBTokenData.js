"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken = _interopRequireDefault(require("./AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken"));
var _AddTokensToExistingFromAddressRBTokenDataEthereumToken = _interopRequireDefault(require("./AddTokensToExistingFromAddressRBTokenDataEthereumToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The AddTokensToExistingFromAddressRBTokenData model module.
 * @module model/AddTokensToExistingFromAddressRBTokenData
 * @version 1.13.0
 */
var AddTokensToExistingFromAddressRBTokenData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddTokensToExistingFromAddressRBTokenData</code>.
   * @alias module:model/AddTokensToExistingFromAddressRBTokenData
   * @implements module:model/AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken
   * @implements module:model/AddTokensToExistingFromAddressRBTokenDataEthereumToken
   * @param propertyId {Number} Represents the specific `propertyId` of the token data that will be forwarded.
   * @param contractAddress {String} Represents the specific `contractAddress` of the Token that will be forwarded.
   */
  function AddTokensToExistingFromAddressRBTokenData(propertyId, contractAddress) {
    _classCallCheck(this, AddTokensToExistingFromAddressRBTokenData);
    _AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken["default"].initialize(this, propertyId);
    _AddTokensToExistingFromAddressRBTokenDataEthereumToken["default"].initialize(this, contractAddress);
    AddTokensToExistingFromAddressRBTokenData.initialize(this, propertyId, contractAddress);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AddTokensToExistingFromAddressRBTokenData, null, [{
    key: "initialize",
    value: function initialize(obj, propertyId, contractAddress) {
      obj['propertyId'] = propertyId;
      obj['contractAddress'] = contractAddress;
    }

    /**
     * Constructs a <code>AddTokensToExistingFromAddressRBTokenData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddTokensToExistingFromAddressRBTokenData} obj Optional instance to populate.
     * @return {module:model/AddTokensToExistingFromAddressRBTokenData} The populated <code>AddTokensToExistingFromAddressRBTokenData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddTokensToExistingFromAddressRBTokenData();
        _AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken["default"].constructFromObject(data, obj);
        _AddTokensToExistingFromAddressRBTokenDataEthereumToken["default"].constructFromObject(data, obj);
        if (data.hasOwnProperty('propertyId')) {
          obj['propertyId'] = _ApiClient["default"].convertToType(data['propertyId'], 'Number');
        }
        if (data.hasOwnProperty('contractAddress')) {
          obj['contractAddress'] = _ApiClient["default"].convertToType(data['contractAddress'], 'String');
        }
      }
      return obj;
    }
  }]);
  return AddTokensToExistingFromAddressRBTokenData;
}();
/**
 * Represents the specific `propertyId` of the token data that will be forwarded.
 * @member {Number} propertyId
 */
AddTokensToExistingFromAddressRBTokenData.prototype['propertyId'] = undefined;

/**
 * Represents the specific `contractAddress` of the Token that will be forwarded.
 * @member {String} contractAddress
 */
AddTokensToExistingFromAddressRBTokenData.prototype['contractAddress'] = undefined;

// Implement AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken interface:
/**
 * Represents the specific `propertyId` of the token data that will be forwarded.
 * @member {Number} propertyId
 */
_AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken["default"].prototype['propertyId'] = undefined;
// Implement AddTokensToExistingFromAddressRBTokenDataEthereumToken interface:
/**
 * Represents the specific `contractAddress` of the Token that will be forwarded.
 * @member {String} contractAddress
 */
_AddTokensToExistingFromAddressRBTokenDataEthereumToken["default"].prototype['contractAddress'] = undefined;
var _default = AddTokensToExistingFromAddressRBTokenData;
exports["default"] = _default;