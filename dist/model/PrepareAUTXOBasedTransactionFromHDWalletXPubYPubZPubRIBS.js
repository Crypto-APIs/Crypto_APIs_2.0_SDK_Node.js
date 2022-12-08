"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBC = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBC"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2 = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZ = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZ"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVinInner = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVinInner"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVoutInner = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVoutInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS model module.
 * @module model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS
 * @version 1.11.0
 */
var PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS</code>.
   * @alias module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS
   * @param {(module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB|module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBC|module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD|module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2|module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL|module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZ)} instance The actual instance to initialize PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS.
   */
  function PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS);
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
      if (typeof instance === "PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB["default"].validateJSON(instance); // throw an exception if no match
        // create PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB from JS object
        this.actualInstance = _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB
      errorMessages.push("Failed to construct PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB: " + err);
    }
    try {
      if (typeof instance === "PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBC["default"].validateJSON(instance); // throw an exception if no match
        // create PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBC from JS object
        this.actualInstance = _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBC
      errorMessages.push("Failed to construct PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBC: " + err);
    }
    try {
      if (typeof instance === "PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL["default"].validateJSON(instance); // throw an exception if no match
        // create PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL from JS object
        this.actualInstance = _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL
      errorMessages.push("Failed to construct PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL: " + err);
    }
    try {
      if (typeof instance === "PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD["default"].validateJSON(instance); // throw an exception if no match
        // create PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD from JS object
        this.actualInstance = _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD
      errorMessages.push("Failed to construct PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD: " + err);
    }
    try {
      if (typeof instance === "PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2["default"].validateJSON(instance); // throw an exception if no match
        // create PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2 from JS object
        this.actualInstance = _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2
      errorMessages.push("Failed to construct PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2: " + err);
    }
    try {
      if (typeof instance === "PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZ") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZ["default"].validateJSON(instance); // throw an exception if no match
        // create PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZ from JS object
        this.actualInstance = _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZ["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZ
      errorMessages.push("Failed to construct PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZ: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS` with oneOf schemas PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB, PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBC, PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD, PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2, PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL, PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZ. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS` with oneOf schemas PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB, PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBC, PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD, PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2, PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL, PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZ. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS} obj Optional instance to populate.
   * @return {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS} The populated <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS</code> instance.
   */
  _createClass(PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB</code>, <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBC</code>, <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD</code>, <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2</code>, <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL</code>, <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZ</code>.
     * @return {(module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB|module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBC|module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD|module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2|module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL|module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZ)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB</code>, <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBC</code>, <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD</code>, <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2</code>, <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL</code>, <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZ</code>.
     * @param {(module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB|module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBC|module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD|module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2|module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL|module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZ)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS(data);
    }
  }]);
  return PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS;
}();
/**
 * Representation of whether the transaction is replaceable
 * @member {Boolean} replaceable
 */
_defineProperty(PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS, "fromJSON", function (json_string) {
  return PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS.constructFromObject(JSON.parse(json_string));
});
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS.prototype['replaceable'] = undefined;

/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVinInner>} vin
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS.prototype['vin'] = undefined;

/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVoutInner>} vout
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS.prototype['vout'] = undefined;
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS.OneOf = ["PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB", "PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBC", "PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD", "PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2", "PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL", "PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZ"];
var _default = PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS;
exports["default"] = _default;