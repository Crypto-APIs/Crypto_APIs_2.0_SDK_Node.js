"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _BannedIpAddressDetailsInner = _interopRequireDefault(require("./BannedIpAddressDetailsInner"));
var _InvalidBlockchain = _interopRequireDefault(require("./InvalidBlockchain"));
var _InvalidNetwork = _interopRequireDefault(require("./InvalidNetwork"));
var _InvalidPagination = _interopRequireDefault(require("./InvalidPagination"));
var _LimitGreaterThanAllowed = _interopRequireDefault(require("./LimitGreaterThanAllowed"));
var _UriNotFound = _interopRequireDefault(require("./UriNotFound"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The EncodeXAddressE400 model module.
 * @module model/EncodeXAddressE400
 * @version 1.11.0
 */
var EncodeXAddressE400 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EncodeXAddressE400</code>.
   * @alias module:model/EncodeXAddressE400
   * @param {(module:model/InvalidBlockchain|module:model/InvalidNetwork|module:model/InvalidPagination|module:model/LimitGreaterThanAllowed|module:model/UriNotFound)} instance The actual instance to initialize EncodeXAddressE400.
   */
  function EncodeXAddressE400() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, EncodeXAddressE400);
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
      if (typeof instance === "UriNotFound") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _UriNotFound["default"].validateJSON(instance); // throw an exception if no match
        // create UriNotFound from JS object
        this.actualInstance = _UriNotFound["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into UriNotFound
      errorMessages.push("Failed to construct UriNotFound: " + err);
    }
    try {
      if (typeof instance === "LimitGreaterThanAllowed") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _LimitGreaterThanAllowed["default"].validateJSON(instance); // throw an exception if no match
        // create LimitGreaterThanAllowed from JS object
        this.actualInstance = _LimitGreaterThanAllowed["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into LimitGreaterThanAllowed
      errorMessages.push("Failed to construct LimitGreaterThanAllowed: " + err);
    }
    try {
      if (typeof instance === "InvalidPagination") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _InvalidPagination["default"].validateJSON(instance); // throw an exception if no match
        // create InvalidPagination from JS object
        this.actualInstance = _InvalidPagination["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into InvalidPagination
      errorMessages.push("Failed to construct InvalidPagination: " + err);
    }
    try {
      if (typeof instance === "InvalidBlockchain") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _InvalidBlockchain["default"].validateJSON(instance); // throw an exception if no match
        // create InvalidBlockchain from JS object
        this.actualInstance = _InvalidBlockchain["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into InvalidBlockchain
      errorMessages.push("Failed to construct InvalidBlockchain: " + err);
    }
    try {
      if (typeof instance === "InvalidNetwork") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _InvalidNetwork["default"].validateJSON(instance); // throw an exception if no match
        // create InvalidNetwork from JS object
        this.actualInstance = _InvalidNetwork["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into InvalidNetwork
      errorMessages.push("Failed to construct InvalidNetwork: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `EncodeXAddressE400` with oneOf schemas InvalidBlockchain, InvalidNetwork, InvalidPagination, LimitGreaterThanAllowed, UriNotFound. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `EncodeXAddressE400` with oneOf schemas InvalidBlockchain, InvalidNetwork, InvalidPagination, LimitGreaterThanAllowed, UriNotFound. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>EncodeXAddressE400</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EncodeXAddressE400} obj Optional instance to populate.
   * @return {module:model/EncodeXAddressE400} The populated <code>EncodeXAddressE400</code> instance.
   */
  _createClass(EncodeXAddressE400, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>InvalidBlockchain</code>, <code>InvalidNetwork</code>, <code>InvalidPagination</code>, <code>LimitGreaterThanAllowed</code>, <code>UriNotFound</code>.
     * @return {(module:model/InvalidBlockchain|module:model/InvalidNetwork|module:model/InvalidPagination|module:model/LimitGreaterThanAllowed|module:model/UriNotFound)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>InvalidBlockchain</code>, <code>InvalidNetwork</code>, <code>InvalidPagination</code>, <code>LimitGreaterThanAllowed</code>, <code>UriNotFound</code>.
     * @param {(module:model/InvalidBlockchain|module:model/InvalidNetwork|module:model/InvalidPagination|module:model/LimitGreaterThanAllowed|module:model/UriNotFound)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = EncodeXAddressE400.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new EncodeXAddressE400(data);
    }
  }]);
  return EncodeXAddressE400;
}();
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
_defineProperty(EncodeXAddressE400, "fromJSON", function (json_string) {
  return EncodeXAddressE400.constructFromObject(JSON.parse(json_string));
});
EncodeXAddressE400.prototype['code'] = undefined;

/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
EncodeXAddressE400.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
EncodeXAddressE400.prototype['details'] = undefined;
EncodeXAddressE400.OneOf = ["InvalidBlockchain", "InvalidNetwork", "InvalidPagination", "LimitGreaterThanAllowed", "UriNotFound"];
var _default = EncodeXAddressE400;
exports["default"] = _default;