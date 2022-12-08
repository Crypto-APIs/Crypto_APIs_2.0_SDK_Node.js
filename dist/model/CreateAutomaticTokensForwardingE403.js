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
var _TokensForwardingAutomationsLimitReached = _interopRequireDefault(require("./TokensForwardingAutomationsLimitReached"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CreateAutomaticTokensForwardingE403 model module.
 * @module model/CreateAutomaticTokensForwardingE403
 * @version 1.11.0
 */
var CreateAutomaticTokensForwardingE403 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateAutomaticTokensForwardingE403</code>.
   * @alias module:model/CreateAutomaticTokensForwardingE403
   * @param {(module:model/BannedIpAddress|module:model/EndpointNotAllowedForApiKey|module:model/EndpointNotAllowedForPlan|module:model/FeatureMainnetsNotAllowedForPlan|module:model/TokensForwardingAutomationsLimitReached)} instance The actual instance to initialize CreateAutomaticTokensForwardingE403.
   */
  function CreateAutomaticTokensForwardingE403() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, CreateAutomaticTokensForwardingE403);
    _defineProperty(this, "toJSON", function () {
      return this.getActualInstance();
    });
    if (instance === null) {
      this.actualInstance = null;
      return;
    }
    var match = 0;
    var errorMessages = [];
    try {
      if (typeof instance === "BannedIpAddress") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _BannedIpAddress["default"].validateJSON(instance); // throw an exception if no match
        // create BannedIpAddress from JS object
        this.actualInstance = _BannedIpAddress["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into BannedIpAddress
      errorMessages.push("Failed to construct BannedIpAddress: " + err);
    }
    try {
      if (typeof instance === "EndpointNotAllowedForPlan") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _EndpointNotAllowedForPlan["default"].validateJSON(instance); // throw an exception if no match
        // create EndpointNotAllowedForPlan from JS object
        this.actualInstance = _EndpointNotAllowedForPlan["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into EndpointNotAllowedForPlan
      errorMessages.push("Failed to construct EndpointNotAllowedForPlan: " + err);
    }
    try {
      if (typeof instance === "EndpointNotAllowedForApiKey") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _EndpointNotAllowedForApiKey["default"].validateJSON(instance); // throw an exception if no match
        // create EndpointNotAllowedForApiKey from JS object
        this.actualInstance = _EndpointNotAllowedForApiKey["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into EndpointNotAllowedForApiKey
      errorMessages.push("Failed to construct EndpointNotAllowedForApiKey: " + err);
    }
    try {
      if (typeof instance === "FeatureMainnetsNotAllowedForPlan") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _FeatureMainnetsNotAllowedForPlan["default"].validateJSON(instance); // throw an exception if no match
        // create FeatureMainnetsNotAllowedForPlan from JS object
        this.actualInstance = _FeatureMainnetsNotAllowedForPlan["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into FeatureMainnetsNotAllowedForPlan
      errorMessages.push("Failed to construct FeatureMainnetsNotAllowedForPlan: " + err);
    }
    try {
      if (typeof instance === "TokensForwardingAutomationsLimitReached") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _TokensForwardingAutomationsLimitReached["default"].validateJSON(instance); // throw an exception if no match
        // create TokensForwardingAutomationsLimitReached from JS object
        this.actualInstance = _TokensForwardingAutomationsLimitReached["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into TokensForwardingAutomationsLimitReached
      errorMessages.push("Failed to construct TokensForwardingAutomationsLimitReached: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `CreateAutomaticTokensForwardingE403` with oneOf schemas BannedIpAddress, EndpointNotAllowedForApiKey, EndpointNotAllowedForPlan, FeatureMainnetsNotAllowedForPlan, TokensForwardingAutomationsLimitReached. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `CreateAutomaticTokensForwardingE403` with oneOf schemas BannedIpAddress, EndpointNotAllowedForApiKey, EndpointNotAllowedForPlan, FeatureMainnetsNotAllowedForPlan, TokensForwardingAutomationsLimitReached. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>CreateAutomaticTokensForwardingE403</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateAutomaticTokensForwardingE403} obj Optional instance to populate.
   * @return {module:model/CreateAutomaticTokensForwardingE403} The populated <code>CreateAutomaticTokensForwardingE403</code> instance.
   */
  _createClass(CreateAutomaticTokensForwardingE403, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>BannedIpAddress</code>, <code>EndpointNotAllowedForApiKey</code>, <code>EndpointNotAllowedForPlan</code>, <code>FeatureMainnetsNotAllowedForPlan</code>, <code>TokensForwardingAutomationsLimitReached</code>.
     * @return {(module:model/BannedIpAddress|module:model/EndpointNotAllowedForApiKey|module:model/EndpointNotAllowedForPlan|module:model/FeatureMainnetsNotAllowedForPlan|module:model/TokensForwardingAutomationsLimitReached)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>BannedIpAddress</code>, <code>EndpointNotAllowedForApiKey</code>, <code>EndpointNotAllowedForPlan</code>, <code>FeatureMainnetsNotAllowedForPlan</code>, <code>TokensForwardingAutomationsLimitReached</code>.
     * @param {(module:model/BannedIpAddress|module:model/EndpointNotAllowedForApiKey|module:model/EndpointNotAllowedForPlan|module:model/FeatureMainnetsNotAllowedForPlan|module:model/TokensForwardingAutomationsLimitReached)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = CreateAutomaticTokensForwardingE403.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new CreateAutomaticTokensForwardingE403(data);
    }
  }]);
  return CreateAutomaticTokensForwardingE403;
}();
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
_defineProperty(CreateAutomaticTokensForwardingE403, "fromJSON", function (json_string) {
  return CreateAutomaticTokensForwardingE403.constructFromObject(JSON.parse(json_string));
});
CreateAutomaticTokensForwardingE403.prototype['code'] = undefined;

/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
CreateAutomaticTokensForwardingE403.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
CreateAutomaticTokensForwardingE403.prototype['details'] = undefined;
CreateAutomaticTokensForwardingE403.OneOf = ["BannedIpAddress", "EndpointNotAllowedForApiKey", "EndpointNotAllowedForPlan", "FeatureMainnetsNotAllowedForPlan", "TokensForwardingAutomationsLimitReached"];
var _default = CreateAutomaticTokensForwardingE403;
exports["default"] = _default;