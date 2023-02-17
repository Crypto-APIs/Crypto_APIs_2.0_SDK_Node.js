"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _BannedIpAddressDetailsInner = _interopRequireDefault(require("./BannedIpAddressDetailsInner"));
var _InvalidData = _interopRequireDefault(require("./InvalidData"));
var _WalletAsAServiceAddressBalanceNotEnough = _interopRequireDefault(require("./WalletAsAServiceAddressBalanceNotEnough"));
var _WalletAsAServiceWalletBalanceNotEnough = _interopRequireDefault(require("./WalletAsAServiceWalletBalanceNotEnough"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CreateCoinsTransactionRequestFromAddressE409 model module.
 * @module model/CreateCoinsTransactionRequestFromAddressE409
 * @version 1.13.0
 */
var CreateCoinsTransactionRequestFromAddressE409 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateCoinsTransactionRequestFromAddressE409</code>.
   * @alias module:model/CreateCoinsTransactionRequestFromAddressE409
   * @implements module:model/InvalidData
   * @implements module:model/WalletAsAServiceWalletBalanceNotEnough
   * @implements module:model/WalletAsAServiceAddressBalanceNotEnough
   * @param code {String} Specifies an error code, e.g. error 404.
   * @param message {String} Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
   */
  function CreateCoinsTransactionRequestFromAddressE409(code, message) {
    _classCallCheck(this, CreateCoinsTransactionRequestFromAddressE409);
    _InvalidData["default"].initialize(this, code, message);
    _WalletAsAServiceWalletBalanceNotEnough["default"].initialize(this, code, message);
    _WalletAsAServiceAddressBalanceNotEnough["default"].initialize(this, code, message);
    CreateCoinsTransactionRequestFromAddressE409.initialize(this, code, message);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CreateCoinsTransactionRequestFromAddressE409, null, [{
    key: "initialize",
    value: function initialize(obj, code, message) {
      obj['code'] = code;
      obj['message'] = message;
    }

    /**
     * Constructs a <code>CreateCoinsTransactionRequestFromAddressE409</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCoinsTransactionRequestFromAddressE409} obj Optional instance to populate.
     * @return {module:model/CreateCoinsTransactionRequestFromAddressE409} The populated <code>CreateCoinsTransactionRequestFromAddressE409</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCoinsTransactionRequestFromAddressE409();
        _InvalidData["default"].constructFromObject(data, obj);
        _WalletAsAServiceWalletBalanceNotEnough["default"].constructFromObject(data, obj);
        _WalletAsAServiceAddressBalanceNotEnough["default"].constructFromObject(data, obj);
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
  return CreateCoinsTransactionRequestFromAddressE409;
}();
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
CreateCoinsTransactionRequestFromAddressE409.prototype['code'] = undefined;

/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
CreateCoinsTransactionRequestFromAddressE409.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
CreateCoinsTransactionRequestFromAddressE409.prototype['details'] = undefined;

// Implement InvalidData interface:
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
_InvalidData["default"].prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
_InvalidData["default"].prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
_InvalidData["default"].prototype['details'] = undefined;
// Implement WalletAsAServiceWalletBalanceNotEnough interface:
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
_WalletAsAServiceWalletBalanceNotEnough["default"].prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
_WalletAsAServiceWalletBalanceNotEnough["default"].prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
_WalletAsAServiceWalletBalanceNotEnough["default"].prototype['details'] = undefined;
// Implement WalletAsAServiceAddressBalanceNotEnough interface:
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
_WalletAsAServiceAddressBalanceNotEnough["default"].prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
_WalletAsAServiceAddressBalanceNotEnough["default"].prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
_WalletAsAServiceAddressBalanceNotEnough["default"].prototype['details'] = undefined;
var _default = CreateCoinsTransactionRequestFromAddressE409;
exports["default"] = _default;