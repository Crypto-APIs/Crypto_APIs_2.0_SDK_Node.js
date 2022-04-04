"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AlreadyExists = _interopRequireDefault(require("./AlreadyExists"));

var _BannedIpAddressDetails = _interopRequireDefault(require("./BannedIpAddressDetails"));

var _InvalidData = _interopRequireDefault(require("./InvalidData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The NewBlockE409 model module.
 * @module model/NewBlockE409
 * @version 1.4.0
 */
var NewBlockE409 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewBlockE409</code>.
   * @alias module:model/NewBlockE409
   * @implements module:model/InvalidData
   * @implements module:model/AlreadyExists
   * @param code {String} Specifies an error code, e.g. error 404.
   * @param message {String} Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
   */
  function NewBlockE409(code, message) {
    _classCallCheck(this, NewBlockE409);

    _InvalidData["default"].initialize(this, code, message);

    _AlreadyExists["default"].initialize(this, code, message);

    NewBlockE409.initialize(this, code, message);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewBlockE409, null, [{
    key: "initialize",
    value: function initialize(obj, code, message) {
      obj['code'] = code;
      obj['message'] = message;
    }
    /**
     * Constructs a <code>NewBlockE409</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewBlockE409} obj Optional instance to populate.
     * @return {module:model/NewBlockE409} The populated <code>NewBlockE409</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewBlockE409();

        _InvalidData["default"].constructFromObject(data, obj);

        _AlreadyExists["default"].constructFromObject(data, obj);

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

  return NewBlockE409;
}();
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */


NewBlockE409.prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */

NewBlockE409.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetails>} details
 */

NewBlockE409.prototype['details'] = undefined; // Implement InvalidData interface:

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
 * @member {Array.<module:model/BannedIpAddressDetails>} details
 */

_InvalidData["default"].prototype['details'] = undefined; // Implement AlreadyExists interface:

/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */

_AlreadyExists["default"].prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */

_AlreadyExists["default"].prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetails>} details
 */

_AlreadyExists["default"].prototype['details'] = undefined;
var _default = NewBlockE409;
exports["default"] = _default;