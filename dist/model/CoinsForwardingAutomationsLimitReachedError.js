"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BannedIpAddressErrorDetails = _interopRequireDefault(require("./BannedIpAddressErrorDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CoinsForwardingAutomationsLimitReachedError model module.
 * @module model/CoinsForwardingAutomationsLimitReachedError
 * @version 1.2.0
 */
var CoinsForwardingAutomationsLimitReachedError = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CoinsForwardingAutomationsLimitReachedError</code>.
   * @alias module:model/CoinsForwardingAutomationsLimitReachedError
   * @param code {String} Specifies an error code, e.g. error 404.
   * @param message {String} Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
   */
  function CoinsForwardingAutomationsLimitReachedError(code, message) {
    _classCallCheck(this, CoinsForwardingAutomationsLimitReachedError);

    CoinsForwardingAutomationsLimitReachedError.initialize(this, code, message);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CoinsForwardingAutomationsLimitReachedError, null, [{
    key: "initialize",
    value: function initialize(obj, code, message) {
      obj['code'] = code;
      obj['message'] = message;
    }
    /**
     * Constructs a <code>CoinsForwardingAutomationsLimitReachedError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoinsForwardingAutomationsLimitReachedError} obj Optional instance to populate.
     * @return {module:model/CoinsForwardingAutomationsLimitReachedError} The populated <code>CoinsForwardingAutomationsLimitReachedError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CoinsForwardingAutomationsLimitReachedError();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('details')) {
          obj['details'] = _ApiClient["default"].convertToType(data['details'], [_BannedIpAddressErrorDetails["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CoinsForwardingAutomationsLimitReachedError;
}();
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */


CoinsForwardingAutomationsLimitReachedError.prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */

CoinsForwardingAutomationsLimitReachedError.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressErrorDetails>} details
 */

CoinsForwardingAutomationsLimitReachedError.prototype['details'] = undefined;
var _default = CoinsForwardingAutomationsLimitReachedError;
exports["default"] = _default;