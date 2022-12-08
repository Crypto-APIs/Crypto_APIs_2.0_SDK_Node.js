"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateAutomaticTokensForwardingRBTokenDataBitcoinOmniToken = _interopRequireDefault(require("./CreateAutomaticTokensForwardingRBTokenDataBitcoinOmniToken"));
var _CreateAutomaticTokensForwardingRBTokenDataEthereumToken = _interopRequireDefault(require("./CreateAutomaticTokensForwardingRBTokenDataEthereumToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CreateAutomaticTokensForwardingRBTokenData model module.
 * @module model/CreateAutomaticTokensForwardingRBTokenData
 * @version 1.11.0
 */
var CreateAutomaticTokensForwardingRBTokenData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateAutomaticTokensForwardingRBTokenData</code>.
   * @alias module:model/CreateAutomaticTokensForwardingRBTokenData
   * @param {(module:model/CreateAutomaticTokensForwardingRBTokenDataBitcoinOmniToken|module:model/CreateAutomaticTokensForwardingRBTokenDataEthereumToken)} instance The actual instance to initialize CreateAutomaticTokensForwardingRBTokenData.
   */
  function CreateAutomaticTokensForwardingRBTokenData() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, CreateAutomaticTokensForwardingRBTokenData);
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
      if (typeof instance === "CreateAutomaticTokensForwardingRBTokenDataBitcoinOmniToken") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _CreateAutomaticTokensForwardingRBTokenDataBitcoinOmniToken["default"].validateJSON(instance); // throw an exception if no match
        // create CreateAutomaticTokensForwardingRBTokenDataBitcoinOmniToken from JS object
        this.actualInstance = _CreateAutomaticTokensForwardingRBTokenDataBitcoinOmniToken["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into CreateAutomaticTokensForwardingRBTokenDataBitcoinOmniToken
      errorMessages.push("Failed to construct CreateAutomaticTokensForwardingRBTokenDataBitcoinOmniToken: " + err);
    }
    try {
      if (typeof instance === "CreateAutomaticTokensForwardingRBTokenDataEthereumToken") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _CreateAutomaticTokensForwardingRBTokenDataEthereumToken["default"].validateJSON(instance); // throw an exception if no match
        // create CreateAutomaticTokensForwardingRBTokenDataEthereumToken from JS object
        this.actualInstance = _CreateAutomaticTokensForwardingRBTokenDataEthereumToken["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into CreateAutomaticTokensForwardingRBTokenDataEthereumToken
      errorMessages.push("Failed to construct CreateAutomaticTokensForwardingRBTokenDataEthereumToken: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `CreateAutomaticTokensForwardingRBTokenData` with oneOf schemas CreateAutomaticTokensForwardingRBTokenDataBitcoinOmniToken, CreateAutomaticTokensForwardingRBTokenDataEthereumToken. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `CreateAutomaticTokensForwardingRBTokenData` with oneOf schemas CreateAutomaticTokensForwardingRBTokenDataBitcoinOmniToken, CreateAutomaticTokensForwardingRBTokenDataEthereumToken. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>CreateAutomaticTokensForwardingRBTokenData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateAutomaticTokensForwardingRBTokenData} obj Optional instance to populate.
   * @return {module:model/CreateAutomaticTokensForwardingRBTokenData} The populated <code>CreateAutomaticTokensForwardingRBTokenData</code> instance.
   */
  _createClass(CreateAutomaticTokensForwardingRBTokenData, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>CreateAutomaticTokensForwardingRBTokenDataBitcoinOmniToken</code>, <code>CreateAutomaticTokensForwardingRBTokenDataEthereumToken</code>.
     * @return {(module:model/CreateAutomaticTokensForwardingRBTokenDataBitcoinOmniToken|module:model/CreateAutomaticTokensForwardingRBTokenDataEthereumToken)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>CreateAutomaticTokensForwardingRBTokenDataBitcoinOmniToken</code>, <code>CreateAutomaticTokensForwardingRBTokenDataEthereumToken</code>.
     * @param {(module:model/CreateAutomaticTokensForwardingRBTokenDataBitcoinOmniToken|module:model/CreateAutomaticTokensForwardingRBTokenDataEthereumToken)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = CreateAutomaticTokensForwardingRBTokenData.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new CreateAutomaticTokensForwardingRBTokenData(data);
    }
  }]);
  return CreateAutomaticTokensForwardingRBTokenData;
}();
/**
 * Represents the specific `propertyId` of the token data that will be forwarded.
 * @member {Number} propertyId
 */
_defineProperty(CreateAutomaticTokensForwardingRBTokenData, "fromJSON", function (json_string) {
  return CreateAutomaticTokensForwardingRBTokenData.constructFromObject(JSON.parse(json_string));
});
CreateAutomaticTokensForwardingRBTokenData.prototype['propertyId'] = undefined;

/**
 * Represents the specific `contractAddress` of the Token that will be forwarded.
 * @member {String} contractAddress
 */
CreateAutomaticTokensForwardingRBTokenData.prototype['contractAddress'] = undefined;
CreateAutomaticTokensForwardingRBTokenData.OneOf = ["CreateAutomaticTokensForwardingRBTokenDataBitcoinOmniToken", "CreateAutomaticTokensForwardingRBTokenDataEthereumToken"];
var _default = CreateAutomaticTokensForwardingRBTokenData;
exports["default"] = _default;