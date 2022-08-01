"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BannedIpAddressDetailsInner = _interopRequireDefault(require("./BannedIpAddressDetailsInner"));

var _InvalidRequestBodyStructure = _interopRequireDefault(require("./InvalidRequestBodyStructure"));

var _XpubSyncInProgress = _interopRequireDefault(require("./XpubSyncInProgress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListHDWalletXPubYPubZPubTransactionsE422 model module.
 * @module model/ListHDWalletXPubYPubZPubTransactionsE422
 * @version 1.7.2
 */
var ListHDWalletXPubYPubZPubTransactionsE422 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListHDWalletXPubYPubZPubTransactionsE422</code>.
   * @alias module:model/ListHDWalletXPubYPubZPubTransactionsE422
   * @implements module:model/InvalidRequestBodyStructure
   * @implements module:model/XpubSyncInProgress
   * @param code {String} Specifies an error code, e.g. error 404.
   * @param message {String} Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
   */
  function ListHDWalletXPubYPubZPubTransactionsE422(code, message) {
    _classCallCheck(this, ListHDWalletXPubYPubZPubTransactionsE422);

    _InvalidRequestBodyStructure["default"].initialize(this, code, message);

    _XpubSyncInProgress["default"].initialize(this, code, message);

    ListHDWalletXPubYPubZPubTransactionsE422.initialize(this, code, message);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListHDWalletXPubYPubZPubTransactionsE422, null, [{
    key: "initialize",
    value: function initialize(obj, code, message) {
      obj['code'] = code;
      obj['message'] = message;
    }
    /**
     * Constructs a <code>ListHDWalletXPubYPubZPubTransactionsE422</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListHDWalletXPubYPubZPubTransactionsE422} obj Optional instance to populate.
     * @return {module:model/ListHDWalletXPubYPubZPubTransactionsE422} The populated <code>ListHDWalletXPubYPubZPubTransactionsE422</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListHDWalletXPubYPubZPubTransactionsE422();

        _InvalidRequestBodyStructure["default"].constructFromObject(data, obj);

        _XpubSyncInProgress["default"].constructFromObject(data, obj);

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

  return ListHDWalletXPubYPubZPubTransactionsE422;
}();
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */


ListHDWalletXPubYPubZPubTransactionsE422.prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */

ListHDWalletXPubYPubZPubTransactionsE422.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */

ListHDWalletXPubYPubZPubTransactionsE422.prototype['details'] = undefined; // Implement InvalidRequestBodyStructure interface:

/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */

_InvalidRequestBodyStructure["default"].prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */

_InvalidRequestBodyStructure["default"].prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */

_InvalidRequestBodyStructure["default"].prototype['details'] = undefined; // Implement XpubSyncInProgress interface:

/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */

_XpubSyncInProgress["default"].prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */

_XpubSyncInProgress["default"].prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */

_XpubSyncInProgress["default"].prototype['details'] = undefined;
var _default = ListHDWalletXPubYPubZPubTransactionsE422;
exports["default"] = _default;