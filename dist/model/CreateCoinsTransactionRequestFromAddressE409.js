"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _BannedIpAddressDetailsInner = _interopRequireDefault(require("./BannedIpAddressDetailsInner"));
var _InvalidData = _interopRequireDefault(require("./InvalidData"));
var _WalletAsAServiceAddressBalanceNotEnough = _interopRequireDefault(require("./WalletAsAServiceAddressBalanceNotEnough"));
var _WalletAsAServiceWalletBalanceNotEnough = _interopRequireDefault(require("./WalletAsAServiceWalletBalanceNotEnough"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CreateCoinsTransactionRequestFromAddressE409 model module.
 * @module model/CreateCoinsTransactionRequestFromAddressE409
 * @version 1.11.0
 */
var CreateCoinsTransactionRequestFromAddressE409 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateCoinsTransactionRequestFromAddressE409</code>.
   * @alias module:model/CreateCoinsTransactionRequestFromAddressE409
   * @param {(module:model/InvalidData|module:model/WalletAsAServiceAddressBalanceNotEnough|module:model/WalletAsAServiceWalletBalanceNotEnough)} instance The actual instance to initialize CreateCoinsTransactionRequestFromAddressE409.
   */
  function CreateCoinsTransactionRequestFromAddressE409() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, CreateCoinsTransactionRequestFromAddressE409);
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
      if (typeof instance === "InvalidData") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _InvalidData["default"].validateJSON(instance); // throw an exception if no match
        // create InvalidData from JS object
        this.actualInstance = _InvalidData["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into InvalidData
      errorMessages.push("Failed to construct InvalidData: " + err);
    }
    try {
      if (typeof instance === "WalletAsAServiceWalletBalanceNotEnough") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _WalletAsAServiceWalletBalanceNotEnough["default"].validateJSON(instance); // throw an exception if no match
        // create WalletAsAServiceWalletBalanceNotEnough from JS object
        this.actualInstance = _WalletAsAServiceWalletBalanceNotEnough["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into WalletAsAServiceWalletBalanceNotEnough
      errorMessages.push("Failed to construct WalletAsAServiceWalletBalanceNotEnough: " + err);
    }
    try {
      if (typeof instance === "WalletAsAServiceAddressBalanceNotEnough") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _WalletAsAServiceAddressBalanceNotEnough["default"].validateJSON(instance); // throw an exception if no match
        // create WalletAsAServiceAddressBalanceNotEnough from JS object
        this.actualInstance = _WalletAsAServiceAddressBalanceNotEnough["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into WalletAsAServiceAddressBalanceNotEnough
      errorMessages.push("Failed to construct WalletAsAServiceAddressBalanceNotEnough: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `CreateCoinsTransactionRequestFromAddressE409` with oneOf schemas InvalidData, WalletAsAServiceAddressBalanceNotEnough, WalletAsAServiceWalletBalanceNotEnough. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `CreateCoinsTransactionRequestFromAddressE409` with oneOf schemas InvalidData, WalletAsAServiceAddressBalanceNotEnough, WalletAsAServiceWalletBalanceNotEnough. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>CreateCoinsTransactionRequestFromAddressE409</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateCoinsTransactionRequestFromAddressE409} obj Optional instance to populate.
   * @return {module:model/CreateCoinsTransactionRequestFromAddressE409} The populated <code>CreateCoinsTransactionRequestFromAddressE409</code> instance.
   */
  _createClass(CreateCoinsTransactionRequestFromAddressE409, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>InvalidData</code>, <code>WalletAsAServiceAddressBalanceNotEnough</code>, <code>WalletAsAServiceWalletBalanceNotEnough</code>.
     * @return {(module:model/InvalidData|module:model/WalletAsAServiceAddressBalanceNotEnough|module:model/WalletAsAServiceWalletBalanceNotEnough)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>InvalidData</code>, <code>WalletAsAServiceAddressBalanceNotEnough</code>, <code>WalletAsAServiceWalletBalanceNotEnough</code>.
     * @param {(module:model/InvalidData|module:model/WalletAsAServiceAddressBalanceNotEnough|module:model/WalletAsAServiceWalletBalanceNotEnough)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = CreateCoinsTransactionRequestFromAddressE409.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new CreateCoinsTransactionRequestFromAddressE409(data);
    }
  }]);
  return CreateCoinsTransactionRequestFromAddressE409;
}();
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
_defineProperty(CreateCoinsTransactionRequestFromAddressE409, "fromJSON", function (json_string) {
  return CreateCoinsTransactionRequestFromAddressE409.constructFromObject(JSON.parse(json_string));
});
CreateCoinsTransactionRequestFromAddressE409.prototype['code'] = undefined;

/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
CreateCoinsTransactionRequestFromAddressE409.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
CreateCoinsTransactionRequestFromAddressE409.prototype['details'] = undefined;
CreateCoinsTransactionRequestFromAddressE409.OneOf = ["InvalidData", "WalletAsAServiceAddressBalanceNotEnough", "WalletAsAServiceWalletBalanceNotEnough"];
var _default = CreateCoinsTransactionRequestFromAddressE409;
exports["default"] = _default;