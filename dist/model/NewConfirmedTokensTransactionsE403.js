"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _BannedIpAddress = _interopRequireDefault(require("./BannedIpAddress"));
var _BannedIpAddressDetailsInner = _interopRequireDefault(require("./BannedIpAddressDetailsInner"));
var _BlockchainEventsCallbacksLimitReached = _interopRequireDefault(require("./BlockchainEventsCallbacksLimitReached"));
var _EndpointNotAllowedForApiKey = _interopRequireDefault(require("./EndpointNotAllowedForApiKey"));
var _EndpointNotAllowedForPlan = _interopRequireDefault(require("./EndpointNotAllowedForPlan"));
var _FeatureMainnetsNotAllowedForPlan = _interopRequireDefault(require("./FeatureMainnetsNotAllowedForPlan"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The NewConfirmedTokensTransactionsE403 model module.
 * @module model/NewConfirmedTokensTransactionsE403
 * @version 1.11.0
 */
var NewConfirmedTokensTransactionsE403 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewConfirmedTokensTransactionsE403</code>.
   * @alias module:model/NewConfirmedTokensTransactionsE403
   * @param {(module:model/BannedIpAddress|module:model/BlockchainEventsCallbacksLimitReached|module:model/EndpointNotAllowedForApiKey|module:model/EndpointNotAllowedForPlan|module:model/FeatureMainnetsNotAllowedForPlan)} instance The actual instance to initialize NewConfirmedTokensTransactionsE403.
   */
  function NewConfirmedTokensTransactionsE403() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, NewConfirmedTokensTransactionsE403);
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
      if (typeof instance === "BlockchainEventsCallbacksLimitReached") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _BlockchainEventsCallbacksLimitReached["default"].validateJSON(instance); // throw an exception if no match
        // create BlockchainEventsCallbacksLimitReached from JS object
        this.actualInstance = _BlockchainEventsCallbacksLimitReached["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into BlockchainEventsCallbacksLimitReached
      errorMessages.push("Failed to construct BlockchainEventsCallbacksLimitReached: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `NewConfirmedTokensTransactionsE403` with oneOf schemas BannedIpAddress, BlockchainEventsCallbacksLimitReached, EndpointNotAllowedForApiKey, EndpointNotAllowedForPlan, FeatureMainnetsNotAllowedForPlan. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `NewConfirmedTokensTransactionsE403` with oneOf schemas BannedIpAddress, BlockchainEventsCallbacksLimitReached, EndpointNotAllowedForApiKey, EndpointNotAllowedForPlan, FeatureMainnetsNotAllowedForPlan. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>NewConfirmedTokensTransactionsE403</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewConfirmedTokensTransactionsE403} obj Optional instance to populate.
   * @return {module:model/NewConfirmedTokensTransactionsE403} The populated <code>NewConfirmedTokensTransactionsE403</code> instance.
   */
  _createClass(NewConfirmedTokensTransactionsE403, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>BannedIpAddress</code>, <code>BlockchainEventsCallbacksLimitReached</code>, <code>EndpointNotAllowedForApiKey</code>, <code>EndpointNotAllowedForPlan</code>, <code>FeatureMainnetsNotAllowedForPlan</code>.
     * @return {(module:model/BannedIpAddress|module:model/BlockchainEventsCallbacksLimitReached|module:model/EndpointNotAllowedForApiKey|module:model/EndpointNotAllowedForPlan|module:model/FeatureMainnetsNotAllowedForPlan)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>BannedIpAddress</code>, <code>BlockchainEventsCallbacksLimitReached</code>, <code>EndpointNotAllowedForApiKey</code>, <code>EndpointNotAllowedForPlan</code>, <code>FeatureMainnetsNotAllowedForPlan</code>.
     * @param {(module:model/BannedIpAddress|module:model/BlockchainEventsCallbacksLimitReached|module:model/EndpointNotAllowedForApiKey|module:model/EndpointNotAllowedForPlan|module:model/FeatureMainnetsNotAllowedForPlan)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = NewConfirmedTokensTransactionsE403.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new NewConfirmedTokensTransactionsE403(data);
    }
  }]);
  return NewConfirmedTokensTransactionsE403;
}();
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
_defineProperty(NewConfirmedTokensTransactionsE403, "fromJSON", function (json_string) {
  return NewConfirmedTokensTransactionsE403.constructFromObject(JSON.parse(json_string));
});
NewConfirmedTokensTransactionsE403.prototype['code'] = undefined;

/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
NewConfirmedTokensTransactionsE403.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
NewConfirmedTokensTransactionsE403.prototype['details'] = undefined;
NewConfirmedTokensTransactionsE403.OneOf = ["BannedIpAddress", "BlockchainEventsCallbacksLimitReached", "EndpointNotAllowedForApiKey", "EndpointNotAllowedForPlan", "FeatureMainnetsNotAllowedForPlan"];
var _default = NewConfirmedTokensTransactionsE403;
exports["default"] = _default;