"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _BannedIpAddressDetailsInner = _interopRequireDefault(require("./BannedIpAddressDetailsInner"));
var _InvalidApiKey = _interopRequireDefault(require("./InvalidApiKey"));
var _MissingApiKey = _interopRequireDefault(require("./MissingApiKey"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetBlockDetailsByBlockHashE401 model module.
 * @module model/GetBlockDetailsByBlockHashE401
 * @version 1.11.0
 */
var GetBlockDetailsByBlockHashE401 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetBlockDetailsByBlockHashE401</code>.
   * @alias module:model/GetBlockDetailsByBlockHashE401
   * @param {(module:model/InvalidApiKey|module:model/MissingApiKey)} instance The actual instance to initialize GetBlockDetailsByBlockHashE401.
   */
  function GetBlockDetailsByBlockHashE401() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, GetBlockDetailsByBlockHashE401);
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
      if (typeof instance === "MissingApiKey") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _MissingApiKey["default"].validateJSON(instance); // throw an exception if no match
        // create MissingApiKey from JS object
        this.actualInstance = _MissingApiKey["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into MissingApiKey
      errorMessages.push("Failed to construct MissingApiKey: " + err);
    }
    try {
      if (typeof instance === "InvalidApiKey") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _InvalidApiKey["default"].validateJSON(instance); // throw an exception if no match
        // create InvalidApiKey from JS object
        this.actualInstance = _InvalidApiKey["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into InvalidApiKey
      errorMessages.push("Failed to construct InvalidApiKey: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `GetBlockDetailsByBlockHashE401` with oneOf schemas InvalidApiKey, MissingApiKey. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `GetBlockDetailsByBlockHashE401` with oneOf schemas InvalidApiKey, MissingApiKey. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>GetBlockDetailsByBlockHashE401</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBlockDetailsByBlockHashE401} obj Optional instance to populate.
   * @return {module:model/GetBlockDetailsByBlockHashE401} The populated <code>GetBlockDetailsByBlockHashE401</code> instance.
   */
  _createClass(GetBlockDetailsByBlockHashE401, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>InvalidApiKey</code>, <code>MissingApiKey</code>.
     * @return {(module:model/InvalidApiKey|module:model/MissingApiKey)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>InvalidApiKey</code>, <code>MissingApiKey</code>.
     * @param {(module:model/InvalidApiKey|module:model/MissingApiKey)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = GetBlockDetailsByBlockHashE401.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new GetBlockDetailsByBlockHashE401(data);
    }
  }]);
  return GetBlockDetailsByBlockHashE401;
}();
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
_defineProperty(GetBlockDetailsByBlockHashE401, "fromJSON", function (json_string) {
  return GetBlockDetailsByBlockHashE401.constructFromObject(JSON.parse(json_string));
});
GetBlockDetailsByBlockHashE401.prototype['code'] = undefined;

/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
GetBlockDetailsByBlockHashE401.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
GetBlockDetailsByBlockHashE401.prototype['details'] = undefined;
GetBlockDetailsByBlockHashE401.OneOf = ["InvalidApiKey", "MissingApiKey"];
var _default = GetBlockDetailsByBlockHashE401;
exports["default"] = _default;