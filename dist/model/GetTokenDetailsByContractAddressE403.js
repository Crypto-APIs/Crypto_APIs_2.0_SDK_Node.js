"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BannedIpAddress = _interopRequireDefault(require("./BannedIpAddress"));

var _BannedIpAddressDetails = _interopRequireDefault(require("./BannedIpAddressDetails"));

var _EndpointNotAllowedForApiKey = _interopRequireDefault(require("./EndpointNotAllowedForApiKey"));

var _EndpointNotAllowedForPlan = _interopRequireDefault(require("./EndpointNotAllowedForPlan"));

var _FeatureMainnetsNotAllowedForPlan = _interopRequireDefault(require("./FeatureMainnetsNotAllowedForPlan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetTokenDetailsByContractAddressE403 model module.
 * @module model/GetTokenDetailsByContractAddressE403
 * @version 1.4.0
 */
var GetTokenDetailsByContractAddressE403 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTokenDetailsByContractAddressE403</code>.
   * @alias module:model/GetTokenDetailsByContractAddressE403
   * @implements module:model/BannedIpAddress
   * @implements module:model/EndpointNotAllowedForPlan
   * @implements module:model/EndpointNotAllowedForApiKey
   * @implements module:model/FeatureMainnetsNotAllowedForPlan
   * @param code {String} Specifies an error code, e.g. error 404.
   * @param message {String} Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
   */
  function GetTokenDetailsByContractAddressE403(code, message) {
    _classCallCheck(this, GetTokenDetailsByContractAddressE403);

    _BannedIpAddress["default"].initialize(this, code, message);

    _EndpointNotAllowedForPlan["default"].initialize(this, code, message);

    _EndpointNotAllowedForApiKey["default"].initialize(this, code, message);

    _FeatureMainnetsNotAllowedForPlan["default"].initialize(this, code, message);

    GetTokenDetailsByContractAddressE403.initialize(this, code, message);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetTokenDetailsByContractAddressE403, null, [{
    key: "initialize",
    value: function initialize(obj, code, message) {
      obj['code'] = code;
      obj['message'] = message;
    }
    /**
     * Constructs a <code>GetTokenDetailsByContractAddressE403</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTokenDetailsByContractAddressE403} obj Optional instance to populate.
     * @return {module:model/GetTokenDetailsByContractAddressE403} The populated <code>GetTokenDetailsByContractAddressE403</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTokenDetailsByContractAddressE403();

        _BannedIpAddress["default"].constructFromObject(data, obj);

        _EndpointNotAllowedForPlan["default"].constructFromObject(data, obj);

        _EndpointNotAllowedForApiKey["default"].constructFromObject(data, obj);

        _FeatureMainnetsNotAllowedForPlan["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('details')) {
          obj['details'] = _ApiClient["default"].convertToType(data['details'], [_BannedIpAddressDetails["default"]]);
        }
      }

      return obj;
    }
  }]);

  return GetTokenDetailsByContractAddressE403;
}();
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */


GetTokenDetailsByContractAddressE403.prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */

GetTokenDetailsByContractAddressE403.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetails>} details
 */

GetTokenDetailsByContractAddressE403.prototype['details'] = undefined; // Implement BannedIpAddress interface:

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
 * @member {Array.<module:model/BannedIpAddressDetails>} details
 */

_BannedIpAddress["default"].prototype['details'] = undefined; // Implement EndpointNotAllowedForPlan interface:

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
 * @member {Array.<module:model/BannedIpAddressDetails>} details
 */

_EndpointNotAllowedForPlan["default"].prototype['details'] = undefined; // Implement EndpointNotAllowedForApiKey interface:

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
 * @member {Array.<module:model/BannedIpAddressDetails>} details
 */

_EndpointNotAllowedForApiKey["default"].prototype['details'] = undefined; // Implement FeatureMainnetsNotAllowedForPlan interface:

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
 * @member {Array.<module:model/BannedIpAddressDetails>} details
 */

_FeatureMainnetsNotAllowedForPlan["default"].prototype['details'] = undefined;
var _default = GetTokenDetailsByContractAddressE403;
exports["default"] = _default;