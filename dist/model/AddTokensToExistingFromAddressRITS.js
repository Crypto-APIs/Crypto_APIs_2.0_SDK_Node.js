"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AddTokensToExistingFromAddressRITSBOT = _interopRequireDefault(require("./AddTokensToExistingFromAddressRITSBOT"));
var _AddTokensToExistingFromAddressRITSET = _interopRequireDefault(require("./AddTokensToExistingFromAddressRITSET"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The AddTokensToExistingFromAddressRITS model module.
 * @module model/AddTokensToExistingFromAddressRITS
 * @version 1.11.0
 */
var AddTokensToExistingFromAddressRITS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddTokensToExistingFromAddressRITS</code>.
   * @alias module:model/AddTokensToExistingFromAddressRITS
   * @param {(module:model/AddTokensToExistingFromAddressRITSBOT|module:model/AddTokensToExistingFromAddressRITSET)} instance The actual instance to initialize AddTokensToExistingFromAddressRITS.
   */
  function AddTokensToExistingFromAddressRITS() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, AddTokensToExistingFromAddressRITS);
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
      if (typeof instance === "AddTokensToExistingFromAddressRITSBOT") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _AddTokensToExistingFromAddressRITSBOT["default"].validateJSON(instance); // throw an exception if no match
        // create AddTokensToExistingFromAddressRITSBOT from JS object
        this.actualInstance = _AddTokensToExistingFromAddressRITSBOT["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into AddTokensToExistingFromAddressRITSBOT
      errorMessages.push("Failed to construct AddTokensToExistingFromAddressRITSBOT: " + err);
    }
    try {
      if (typeof instance === "AddTokensToExistingFromAddressRITSET") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _AddTokensToExistingFromAddressRITSET["default"].validateJSON(instance); // throw an exception if no match
        // create AddTokensToExistingFromAddressRITSET from JS object
        this.actualInstance = _AddTokensToExistingFromAddressRITSET["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into AddTokensToExistingFromAddressRITSET
      errorMessages.push("Failed to construct AddTokensToExistingFromAddressRITSET: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `AddTokensToExistingFromAddressRITS` with oneOf schemas AddTokensToExistingFromAddressRITSBOT, AddTokensToExistingFromAddressRITSET. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `AddTokensToExistingFromAddressRITS` with oneOf schemas AddTokensToExistingFromAddressRITSBOT, AddTokensToExistingFromAddressRITSET. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>AddTokensToExistingFromAddressRITS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddTokensToExistingFromAddressRITS} obj Optional instance to populate.
   * @return {module:model/AddTokensToExistingFromAddressRITS} The populated <code>AddTokensToExistingFromAddressRITS</code> instance.
   */
  _createClass(AddTokensToExistingFromAddressRITS, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>AddTokensToExistingFromAddressRITSBOT</code>, <code>AddTokensToExistingFromAddressRITSET</code>.
     * @return {(module:model/AddTokensToExistingFromAddressRITSBOT|module:model/AddTokensToExistingFromAddressRITSET)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>AddTokensToExistingFromAddressRITSBOT</code>, <code>AddTokensToExistingFromAddressRITSET</code>.
     * @param {(module:model/AddTokensToExistingFromAddressRITSBOT|module:model/AddTokensToExistingFromAddressRITSET)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = AddTokensToExistingFromAddressRITS.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new AddTokensToExistingFromAddressRITS(data);
    }
  }]);
  return AddTokensToExistingFromAddressRITS;
}();
/**
 * Defines the `propertyId` of the Omni Layer token.
 * @member {Number} propertyId
 */
_defineProperty(AddTokensToExistingFromAddressRITS, "fromJSON", function (json_string) {
  return AddTokensToExistingFromAddressRITS.constructFromObject(JSON.parse(json_string));
});
AddTokensToExistingFromAddressRITS.prototype['propertyId'] = undefined;

/**
 * Token contract address to be transferred
 * @member {String} contractAddress
 */
AddTokensToExistingFromAddressRITS.prototype['contractAddress'] = undefined;
AddTokensToExistingFromAddressRITS.OneOf = ["AddTokensToExistingFromAddressRITSBOT", "AddTokensToExistingFromAddressRITSET"];
var _default = AddTokensToExistingFromAddressRITS;
exports["default"] = _default;