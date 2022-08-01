"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BannedIpAddressDetailsInner = _interopRequireDefault(require("./BannedIpAddressDetailsInner"));

var _InvalidData = _interopRequireDefault(require("./InvalidData"));

var _WalletAsAServiceAddressBalanceNotEnough = _interopRequireDefault(require("./WalletAsAServiceAddressBalanceNotEnough"));

var _WalletAsAServiceNoDepositAddressesFound = _interopRequireDefault(require("./WalletAsAServiceNoDepositAddressesFound"));

var _WalletAsAServiceWalletBalanceNotEnough = _interopRequireDefault(require("./WalletAsAServiceWalletBalanceNotEnough"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CreateCoinsTransactionRequestFromWalletE409 model module.
 * @module model/CreateCoinsTransactionRequestFromWalletE409
 * @version 1.7.2
 */
var CreateCoinsTransactionRequestFromWalletE409 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateCoinsTransactionRequestFromWalletE409</code>.
   * @alias module:model/CreateCoinsTransactionRequestFromWalletE409
   * @implements module:model/InvalidData
   * @implements module:model/WalletAsAServiceWalletBalanceNotEnough
   * @implements module:model/WalletAsAServiceAddressBalanceNotEnough
   * @implements module:model/WalletAsAServiceNoDepositAddressesFound
   * @param code {String} Specifies an error code, e.g. error 404.
   * @param message {String} Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
   */
  function CreateCoinsTransactionRequestFromWalletE409(code, message) {
    _classCallCheck(this, CreateCoinsTransactionRequestFromWalletE409);

    _InvalidData["default"].initialize(this, code, message);

    _WalletAsAServiceWalletBalanceNotEnough["default"].initialize(this, code, message);

    _WalletAsAServiceAddressBalanceNotEnough["default"].initialize(this, code, message);

    _WalletAsAServiceNoDepositAddressesFound["default"].initialize(this, code, message);

    CreateCoinsTransactionRequestFromWalletE409.initialize(this, code, message);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateCoinsTransactionRequestFromWalletE409, null, [{
    key: "initialize",
    value: function initialize(obj, code, message) {
      obj['code'] = code;
      obj['message'] = message;
    }
    /**
     * Constructs a <code>CreateCoinsTransactionRequestFromWalletE409</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCoinsTransactionRequestFromWalletE409} obj Optional instance to populate.
     * @return {module:model/CreateCoinsTransactionRequestFromWalletE409} The populated <code>CreateCoinsTransactionRequestFromWalletE409</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCoinsTransactionRequestFromWalletE409();

        _InvalidData["default"].constructFromObject(data, obj);

        _WalletAsAServiceWalletBalanceNotEnough["default"].constructFromObject(data, obj);

        _WalletAsAServiceAddressBalanceNotEnough["default"].constructFromObject(data, obj);

        _WalletAsAServiceNoDepositAddressesFound["default"].constructFromObject(data, obj);

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

  return CreateCoinsTransactionRequestFromWalletE409;
}();
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */


CreateCoinsTransactionRequestFromWalletE409.prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */

CreateCoinsTransactionRequestFromWalletE409.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */

CreateCoinsTransactionRequestFromWalletE409.prototype['details'] = undefined; // Implement InvalidData interface:

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

_InvalidData["default"].prototype['details'] = undefined; // Implement WalletAsAServiceWalletBalanceNotEnough interface:

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

_WalletAsAServiceWalletBalanceNotEnough["default"].prototype['details'] = undefined; // Implement WalletAsAServiceAddressBalanceNotEnough interface:

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

_WalletAsAServiceAddressBalanceNotEnough["default"].prototype['details'] = undefined; // Implement WalletAsAServiceNoDepositAddressesFound interface:

/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */

_WalletAsAServiceNoDepositAddressesFound["default"].prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */

_WalletAsAServiceNoDepositAddressesFound["default"].prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */

_WalletAsAServiceNoDepositAddressesFound["default"].prototype['details'] = undefined;
var _default = CreateCoinsTransactionRequestFromWalletE409;
exports["default"] = _default;