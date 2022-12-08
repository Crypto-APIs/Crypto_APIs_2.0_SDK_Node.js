"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _DeleteAutomaticTokensForwardingRITSBOT = _interopRequireDefault(require("./DeleteAutomaticTokensForwardingRITSBOT"));
var _DeleteAutomaticTokensForwardingRITSET = _interopRequireDefault(require("./DeleteAutomaticTokensForwardingRITSET"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The DeleteAutomaticTokensForwardingRITS model module.
 * @module model/DeleteAutomaticTokensForwardingRITS
 * @version 1.11.0
 */
var DeleteAutomaticTokensForwardingRITS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeleteAutomaticTokensForwardingRITS</code>.
   * @alias module:model/DeleteAutomaticTokensForwardingRITS
   * @param {(module:model/DeleteAutomaticTokensForwardingRITSBOT|module:model/DeleteAutomaticTokensForwardingRITSET)} instance The actual instance to initialize DeleteAutomaticTokensForwardingRITS.
   */
  function DeleteAutomaticTokensForwardingRITS() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, DeleteAutomaticTokensForwardingRITS);
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
      if (typeof instance === "DeleteAutomaticTokensForwardingRITSBOT") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _DeleteAutomaticTokensForwardingRITSBOT["default"].validateJSON(instance); // throw an exception if no match
        // create DeleteAutomaticTokensForwardingRITSBOT from JS object
        this.actualInstance = _DeleteAutomaticTokensForwardingRITSBOT["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into DeleteAutomaticTokensForwardingRITSBOT
      errorMessages.push("Failed to construct DeleteAutomaticTokensForwardingRITSBOT: " + err);
    }
    try {
      if (typeof instance === "DeleteAutomaticTokensForwardingRITSET") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _DeleteAutomaticTokensForwardingRITSET["default"].validateJSON(instance); // throw an exception if no match
        // create DeleteAutomaticTokensForwardingRITSET from JS object
        this.actualInstance = _DeleteAutomaticTokensForwardingRITSET["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into DeleteAutomaticTokensForwardingRITSET
      errorMessages.push("Failed to construct DeleteAutomaticTokensForwardingRITSET: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `DeleteAutomaticTokensForwardingRITS` with oneOf schemas DeleteAutomaticTokensForwardingRITSBOT, DeleteAutomaticTokensForwardingRITSET. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `DeleteAutomaticTokensForwardingRITS` with oneOf schemas DeleteAutomaticTokensForwardingRITSBOT, DeleteAutomaticTokensForwardingRITSET. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>DeleteAutomaticTokensForwardingRITS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeleteAutomaticTokensForwardingRITS} obj Optional instance to populate.
   * @return {module:model/DeleteAutomaticTokensForwardingRITS} The populated <code>DeleteAutomaticTokensForwardingRITS</code> instance.
   */
  _createClass(DeleteAutomaticTokensForwardingRITS, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>DeleteAutomaticTokensForwardingRITSBOT</code>, <code>DeleteAutomaticTokensForwardingRITSET</code>.
     * @return {(module:model/DeleteAutomaticTokensForwardingRITSBOT|module:model/DeleteAutomaticTokensForwardingRITSET)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>DeleteAutomaticTokensForwardingRITSBOT</code>, <code>DeleteAutomaticTokensForwardingRITSET</code>.
     * @param {(module:model/DeleteAutomaticTokensForwardingRITSBOT|module:model/DeleteAutomaticTokensForwardingRITSET)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = DeleteAutomaticTokensForwardingRITS.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new DeleteAutomaticTokensForwardingRITS(data);
    }
  }]);
  return DeleteAutomaticTokensForwardingRITS;
}();
/**
 * Defines the `propertyId` of the Omni Layer token.
 * @member {Number} propertyId
 */
_defineProperty(DeleteAutomaticTokensForwardingRITS, "fromJSON", function (json_string) {
  return DeleteAutomaticTokensForwardingRITS.constructFromObject(JSON.parse(json_string));
});
DeleteAutomaticTokensForwardingRITS.prototype['propertyId'] = undefined;

/**
 * Represents the specific `contractAddress` of the Token that will be forwarded.
 * @member {String} contractAddress
 */
DeleteAutomaticTokensForwardingRITS.prototype['contractAddress'] = undefined;
DeleteAutomaticTokensForwardingRITS.OneOf = ["DeleteAutomaticTokensForwardingRITSBOT", "DeleteAutomaticTokensForwardingRITSET"];
var _default = DeleteAutomaticTokensForwardingRITS;
exports["default"] = _default;