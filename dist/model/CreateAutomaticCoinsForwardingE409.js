"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AlreadyExists = _interopRequireDefault(require("./AlreadyExists"));
var _BannedIpAddressDetailsInner = _interopRequireDefault(require("./BannedIpAddressDetailsInner"));
var _InvalidData = _interopRequireDefault(require("./InvalidData"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CreateAutomaticCoinsForwardingE409 model module.
 * @module model/CreateAutomaticCoinsForwardingE409
 * @version 1.13.0
 */
var CreateAutomaticCoinsForwardingE409 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateAutomaticCoinsForwardingE409</code>.
   * @alias module:model/CreateAutomaticCoinsForwardingE409
   * @implements module:model/InvalidData
   * @implements module:model/AlreadyExists
   * @param code {String} Specifies an error code, e.g. error 404.
   * @param message {String} Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
   */
  function CreateAutomaticCoinsForwardingE409(code, message) {
    _classCallCheck(this, CreateAutomaticCoinsForwardingE409);
    _InvalidData["default"].initialize(this, code, message);
    _AlreadyExists["default"].initialize(this, code, message);
    CreateAutomaticCoinsForwardingE409.initialize(this, code, message);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CreateAutomaticCoinsForwardingE409, null, [{
    key: "initialize",
    value: function initialize(obj, code, message) {
      obj['code'] = code;
      obj['message'] = message;
    }

    /**
     * Constructs a <code>CreateAutomaticCoinsForwardingE409</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAutomaticCoinsForwardingE409} obj Optional instance to populate.
     * @return {module:model/CreateAutomaticCoinsForwardingE409} The populated <code>CreateAutomaticCoinsForwardingE409</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateAutomaticCoinsForwardingE409();
        _InvalidData["default"].constructFromObject(data, obj);
        _AlreadyExists["default"].constructFromObject(data, obj);
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
  return CreateAutomaticCoinsForwardingE409;
}();
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
CreateAutomaticCoinsForwardingE409.prototype['code'] = undefined;

/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
CreateAutomaticCoinsForwardingE409.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
CreateAutomaticCoinsForwardingE409.prototype['details'] = undefined;

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
// Implement AlreadyExists interface:
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
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
_AlreadyExists["default"].prototype['details'] = undefined;
var _default = CreateAutomaticCoinsForwardingE409;
exports["default"] = _default;