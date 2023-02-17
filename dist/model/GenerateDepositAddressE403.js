"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _BannedIpAddress = _interopRequireDefault(require("./BannedIpAddress"));
var _BannedIpAddressDetailsInner = _interopRequireDefault(require("./BannedIpAddressDetailsInner"));
var _EndpointNotAllowedForApiKey = _interopRequireDefault(require("./EndpointNotAllowedForApiKey"));
var _EndpointNotAllowedForPlan = _interopRequireDefault(require("./EndpointNotAllowedForPlan"));
var _FeatureMainnetsNotAllowedForPlan = _interopRequireDefault(require("./FeatureMainnetsNotAllowedForPlan"));
var _WalletAsAServiceDepositAddressesLimitReached = _interopRequireDefault(require("./WalletAsAServiceDepositAddressesLimitReached"));
var _WalletAsAServiceProvidedNetworkIsNotSuitableForThisWalletType = _interopRequireDefault(require("./WalletAsAServiceProvidedNetworkIsNotSuitableForThisWalletType"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GenerateDepositAddressE403 model module.
 * @module model/GenerateDepositAddressE403
 * @version 1.13.0
 */
var GenerateDepositAddressE403 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GenerateDepositAddressE403</code>.
   * @alias module:model/GenerateDepositAddressE403
   * @implements module:model/BannedIpAddress
   * @implements module:model/EndpointNotAllowedForPlan
   * @implements module:model/EndpointNotAllowedForApiKey
   * @implements module:model/FeatureMainnetsNotAllowedForPlan
   * @implements module:model/WalletAsAServiceDepositAddressesLimitReached
   * @implements module:model/WalletAsAServiceProvidedNetworkIsNotSuitableForThisWalletType
   * @param code {String} Specifies an error code, e.g. error 404.
   * @param message {String} Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
   */
  function GenerateDepositAddressE403(code, message) {
    _classCallCheck(this, GenerateDepositAddressE403);
    _BannedIpAddress["default"].initialize(this, code, message);
    _EndpointNotAllowedForPlan["default"].initialize(this, code, message);
    _EndpointNotAllowedForApiKey["default"].initialize(this, code, message);
    _FeatureMainnetsNotAllowedForPlan["default"].initialize(this, code, message);
    _WalletAsAServiceDepositAddressesLimitReached["default"].initialize(this, code, message);
    _WalletAsAServiceProvidedNetworkIsNotSuitableForThisWalletType["default"].initialize(this, code, message);
    GenerateDepositAddressE403.initialize(this, code, message);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GenerateDepositAddressE403, null, [{
    key: "initialize",
    value: function initialize(obj, code, message) {
      obj['code'] = code;
      obj['message'] = message;
    }

    /**
     * Constructs a <code>GenerateDepositAddressE403</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateDepositAddressE403} obj Optional instance to populate.
     * @return {module:model/GenerateDepositAddressE403} The populated <code>GenerateDepositAddressE403</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GenerateDepositAddressE403();
        _BannedIpAddress["default"].constructFromObject(data, obj);
        _EndpointNotAllowedForPlan["default"].constructFromObject(data, obj);
        _EndpointNotAllowedForApiKey["default"].constructFromObject(data, obj);
        _FeatureMainnetsNotAllowedForPlan["default"].constructFromObject(data, obj);
        _WalletAsAServiceDepositAddressesLimitReached["default"].constructFromObject(data, obj);
        _WalletAsAServiceProvidedNetworkIsNotSuitableForThisWalletType["default"].constructFromObject(data, obj);
        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }
        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }
        if (data.hasOwnProperty('details')) {
          obj['details'] = _ApiClient["default"].convertToType(data['details'], [_BannedIpAddressDetailsInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return GenerateDepositAddressE403;
}();
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
GenerateDepositAddressE403.prototype['code'] = undefined;

/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
GenerateDepositAddressE403.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
GenerateDepositAddressE403.prototype['details'] = undefined;

// Implement BannedIpAddress interface:
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
_BannedIpAddress["default"].prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
_BannedIpAddress["default"].prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
_BannedIpAddress["default"].prototype['details'] = undefined;
// Implement EndpointNotAllowedForPlan interface:
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
_EndpointNotAllowedForPlan["default"].prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
_EndpointNotAllowedForPlan["default"].prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
_EndpointNotAllowedForPlan["default"].prototype['details'] = undefined;
// Implement EndpointNotAllowedForApiKey interface:
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
_EndpointNotAllowedForApiKey["default"].prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
_EndpointNotAllowedForApiKey["default"].prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
_EndpointNotAllowedForApiKey["default"].prototype['details'] = undefined;
// Implement FeatureMainnetsNotAllowedForPlan interface:
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
_FeatureMainnetsNotAllowedForPlan["default"].prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
_FeatureMainnetsNotAllowedForPlan["default"].prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
_FeatureMainnetsNotAllowedForPlan["default"].prototype['details'] = undefined;
// Implement WalletAsAServiceDepositAddressesLimitReached interface:
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
_WalletAsAServiceDepositAddressesLimitReached["default"].prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
_WalletAsAServiceDepositAddressesLimitReached["default"].prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
_WalletAsAServiceDepositAddressesLimitReached["default"].prototype['details'] = undefined;
// Implement WalletAsAServiceProvidedNetworkIsNotSuitableForThisWalletType interface:
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
_WalletAsAServiceProvidedNetworkIsNotSuitableForThisWalletType["default"].prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
_WalletAsAServiceProvidedNetworkIsNotSuitableForThisWalletType["default"].prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
_WalletAsAServiceProvidedNetworkIsNotSuitableForThisWalletType["default"].prototype['details'] = undefined;
var _default = GenerateDepositAddressE403;
exports["default"] = _default;