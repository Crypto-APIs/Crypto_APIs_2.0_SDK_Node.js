"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListTokensForwardingAutomationsRITSBOT = _interopRequireDefault(require("./ListTokensForwardingAutomationsRITSBOT"));
var _ListTokensForwardingAutomationsRITSET = _interopRequireDefault(require("./ListTokensForwardingAutomationsRITSET"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListTokensForwardingAutomationsRITS model module.
 * @module model/ListTokensForwardingAutomationsRITS
 * @version 1.11.0
 */
var ListTokensForwardingAutomationsRITS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTokensForwardingAutomationsRITS</code>.
   * @alias module:model/ListTokensForwardingAutomationsRITS
   * @param {(module:model/ListTokensForwardingAutomationsRITSBOT|module:model/ListTokensForwardingAutomationsRITSET)} instance The actual instance to initialize ListTokensForwardingAutomationsRITS.
   */
  function ListTokensForwardingAutomationsRITS() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, ListTokensForwardingAutomationsRITS);
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
      if (typeof instance === "ListTokensForwardingAutomationsRITSBOT") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListTokensForwardingAutomationsRITSBOT["default"].validateJSON(instance); // throw an exception if no match
        // create ListTokensForwardingAutomationsRITSBOT from JS object
        this.actualInstance = _ListTokensForwardingAutomationsRITSBOT["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListTokensForwardingAutomationsRITSBOT
      errorMessages.push("Failed to construct ListTokensForwardingAutomationsRITSBOT: " + err);
    }
    try {
      if (typeof instance === "ListTokensForwardingAutomationsRITSET") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListTokensForwardingAutomationsRITSET["default"].validateJSON(instance); // throw an exception if no match
        // create ListTokensForwardingAutomationsRITSET from JS object
        this.actualInstance = _ListTokensForwardingAutomationsRITSET["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListTokensForwardingAutomationsRITSET
      errorMessages.push("Failed to construct ListTokensForwardingAutomationsRITSET: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `ListTokensForwardingAutomationsRITS` with oneOf schemas ListTokensForwardingAutomationsRITSBOT, ListTokensForwardingAutomationsRITSET. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `ListTokensForwardingAutomationsRITS` with oneOf schemas ListTokensForwardingAutomationsRITSBOT, ListTokensForwardingAutomationsRITSET. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>ListTokensForwardingAutomationsRITS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListTokensForwardingAutomationsRITS} obj Optional instance to populate.
   * @return {module:model/ListTokensForwardingAutomationsRITS} The populated <code>ListTokensForwardingAutomationsRITS</code> instance.
   */
  _createClass(ListTokensForwardingAutomationsRITS, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>ListTokensForwardingAutomationsRITSBOT</code>, <code>ListTokensForwardingAutomationsRITSET</code>.
     * @return {(module:model/ListTokensForwardingAutomationsRITSBOT|module:model/ListTokensForwardingAutomationsRITSET)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>ListTokensForwardingAutomationsRITSBOT</code>, <code>ListTokensForwardingAutomationsRITSET</code>.
     * @param {(module:model/ListTokensForwardingAutomationsRITSBOT|module:model/ListTokensForwardingAutomationsRITSET)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = ListTokensForwardingAutomationsRITS.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new ListTokensForwardingAutomationsRITS(data);
    }
  }]);
  return ListTokensForwardingAutomationsRITS;
}();
/**
 * Defines the Property ID of the Omni Layer token.
 * @member {Number} propertyId
 */
_defineProperty(ListTokensForwardingAutomationsRITS, "fromJSON", function (json_string) {
  return ListTokensForwardingAutomationsRITS.constructFromObject(JSON.parse(json_string));
});
ListTokensForwardingAutomationsRITS.prototype['propertyId'] = undefined;

/**
 * Defines the token contract address.
 * @member {String} contractAddress
 */
ListTokensForwardingAutomationsRITS.prototype['contractAddress'] = undefined;
ListTokensForwardingAutomationsRITS.OneOf = ["ListTokensForwardingAutomationsRITSBOT", "ListTokensForwardingAutomationsRITSET"];
var _default = ListTokensForwardingAutomationsRITS;
exports["default"] = _default;