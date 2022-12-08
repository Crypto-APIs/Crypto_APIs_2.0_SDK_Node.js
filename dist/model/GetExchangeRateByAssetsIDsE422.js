"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _BannedIpAddressDetailsInner = _interopRequireDefault(require("./BannedIpAddressDetailsInner"));
var _CouldNotCalculateRateForPair = _interopRequireDefault(require("./CouldNotCalculateRateForPair"));
var _InvalidRequestBodyStructure = _interopRequireDefault(require("./InvalidRequestBodyStructure"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetExchangeRateByAssetsIDsE422 model module.
 * @module model/GetExchangeRateByAssetsIDsE422
 * @version 1.11.0
 */
var GetExchangeRateByAssetsIDsE422 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetExchangeRateByAssetsIDsE422</code>.
   * @alias module:model/GetExchangeRateByAssetsIDsE422
   * @param {(module:model/CouldNotCalculateRateForPair|module:model/InvalidRequestBodyStructure)} instance The actual instance to initialize GetExchangeRateByAssetsIDsE422.
   */
  function GetExchangeRateByAssetsIDsE422() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, GetExchangeRateByAssetsIDsE422);
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
      if (typeof instance === "InvalidRequestBodyStructure") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _InvalidRequestBodyStructure["default"].validateJSON(instance); // throw an exception if no match
        // create InvalidRequestBodyStructure from JS object
        this.actualInstance = _InvalidRequestBodyStructure["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into InvalidRequestBodyStructure
      errorMessages.push("Failed to construct InvalidRequestBodyStructure: " + err);
    }
    try {
      if (typeof instance === "CouldNotCalculateRateForPair") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _CouldNotCalculateRateForPair["default"].validateJSON(instance); // throw an exception if no match
        // create CouldNotCalculateRateForPair from JS object
        this.actualInstance = _CouldNotCalculateRateForPair["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into CouldNotCalculateRateForPair
      errorMessages.push("Failed to construct CouldNotCalculateRateForPair: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `GetExchangeRateByAssetsIDsE422` with oneOf schemas CouldNotCalculateRateForPair, InvalidRequestBodyStructure. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `GetExchangeRateByAssetsIDsE422` with oneOf schemas CouldNotCalculateRateForPair, InvalidRequestBodyStructure. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>GetExchangeRateByAssetsIDsE422</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetExchangeRateByAssetsIDsE422} obj Optional instance to populate.
   * @return {module:model/GetExchangeRateByAssetsIDsE422} The populated <code>GetExchangeRateByAssetsIDsE422</code> instance.
   */
  _createClass(GetExchangeRateByAssetsIDsE422, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>CouldNotCalculateRateForPair</code>, <code>InvalidRequestBodyStructure</code>.
     * @return {(module:model/CouldNotCalculateRateForPair|module:model/InvalidRequestBodyStructure)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>CouldNotCalculateRateForPair</code>, <code>InvalidRequestBodyStructure</code>.
     * @param {(module:model/CouldNotCalculateRateForPair|module:model/InvalidRequestBodyStructure)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = GetExchangeRateByAssetsIDsE422.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new GetExchangeRateByAssetsIDsE422(data);
    }
  }]);
  return GetExchangeRateByAssetsIDsE422;
}();
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
_defineProperty(GetExchangeRateByAssetsIDsE422, "fromJSON", function (json_string) {
  return GetExchangeRateByAssetsIDsE422.constructFromObject(JSON.parse(json_string));
});
GetExchangeRateByAssetsIDsE422.prototype['code'] = undefined;

/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
GetExchangeRateByAssetsIDsE422.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
GetExchangeRateByAssetsIDsE422.prototype['details'] = undefined;
GetExchangeRateByAssetsIDsE422.OneOf = ["CouldNotCalculateRateForPair", "InvalidRequestBodyStructure"];
var _default = GetExchangeRateByAssetsIDsE422;
exports["default"] = _default;