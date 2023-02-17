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
 * The GetTokenDetailsByContractAddressRI model module.
 * @module model/GetTokenDetailsByContractAddressRI
 * @version 1.13.0
 */
var GetTokenDetailsByContractAddressRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTokenDetailsByContractAddressRI</code>.
   * @alias module:model/GetTokenDetailsByContractAddressRI
   * @param tokenDecimals {String} Defines the number of decimals that the token possesses.
   * @param tokenType {String} Defines the type of the token.
   * @param totalSupply {String} Defines the total number of tokens created that exist on the market minus the ones that have been burned.
   */
  function GetTokenDetailsByContractAddressRI(tokenDecimals, tokenType, totalSupply) {
    _classCallCheck(this, GetTokenDetailsByContractAddressRI);
    GetTokenDetailsByContractAddressRI.initialize(this, tokenDecimals, tokenType, totalSupply);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetTokenDetailsByContractAddressRI, null, [{
    key: "initialize",
    value: function initialize(obj, tokenDecimals, tokenType, totalSupply) {
      obj['tokenDecimals'] = tokenDecimals;
      obj['tokenType'] = tokenType;
      obj['totalSupply'] = totalSupply;
    }

    /**
     * Constructs a <code>GetTokenDetailsByContractAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTokenDetailsByContractAddressRI} obj Optional instance to populate.
     * @return {module:model/GetTokenDetailsByContractAddressRI} The populated <code>GetTokenDetailsByContractAddressRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTokenDetailsByContractAddressRI();
        if (data.hasOwnProperty('tokenDecimals')) {
          obj['tokenDecimals'] = _ApiClient["default"].convertToType(data['tokenDecimals'], 'String');
        }
        if (data.hasOwnProperty('tokenName')) {
          obj['tokenName'] = _ApiClient["default"].convertToType(data['tokenName'], 'String');
        }
        if (data.hasOwnProperty('tokenSymbol')) {
          obj['tokenSymbol'] = _ApiClient["default"].convertToType(data['tokenSymbol'], 'String');
        }
        if (data.hasOwnProperty('tokenType')) {
          obj['tokenType'] = _ApiClient["default"].convertToType(data['tokenType'], 'String');
        }
        if (data.hasOwnProperty('totalSupply')) {
          obj['totalSupply'] = _ApiClient["default"].convertToType(data['totalSupply'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GetTokenDetailsByContractAddressRI;
}();
/**
 * Defines the number of decimals that the token possesses.
 * @member {String} tokenDecimals
 */
GetTokenDetailsByContractAddressRI.prototype['tokenDecimals'] = undefined;

/**
 * Specifies the token's name.
 * @member {String} tokenName
 */
GetTokenDetailsByContractAddressRI.prototype['tokenName'] = undefined;

/**
 * Defines the unique symbol of the token.
 * @member {String} tokenSymbol
 */
GetTokenDetailsByContractAddressRI.prototype['tokenSymbol'] = undefined;

/**
 * Defines the type of the token.
 * @member {String} tokenType
 */
GetTokenDetailsByContractAddressRI.prototype['tokenType'] = undefined;

/**
 * Defines the total number of tokens created that exist on the market minus the ones that have been burned.
 * @member {String} totalSupply
 */
GetTokenDetailsByContractAddressRI.prototype['totalSupply'] = undefined;
var _default = GetTokenDetailsByContractAddressRI;
exports["default"] = _default;