"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareTransactionFromAddressRIBSBSC = _interopRequireDefault(require("./PrepareTransactionFromAddressRIBSBSC"));
var _PrepareTransactionFromAddressRIBSBSCFee = _interopRequireDefault(require("./PrepareTransactionFromAddressRIBSBSCFee"));
var _PrepareTransactionFromAddressRIBSE = _interopRequireDefault(require("./PrepareTransactionFromAddressRIBSE"));
var _PrepareTransactionFromAddressRIBSEC = _interopRequireDefault(require("./PrepareTransactionFromAddressRIBSEC"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The PrepareTransactionFromAddressRIBS model module.
 * @module model/PrepareTransactionFromAddressRIBS
 * @version 1.11.0
 */
var PrepareTransactionFromAddressRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareTransactionFromAddressRIBS</code>.
   * @alias module:model/PrepareTransactionFromAddressRIBS
   * @param {(module:model/PrepareTransactionFromAddressRIBSBSC|module:model/PrepareTransactionFromAddressRIBSE|module:model/PrepareTransactionFromAddressRIBSEC)} instance The actual instance to initialize PrepareTransactionFromAddressRIBS.
   */
  function PrepareTransactionFromAddressRIBS() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, PrepareTransactionFromAddressRIBS);
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
      if (typeof instance === "PrepareTransactionFromAddressRIBSBSC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _PrepareTransactionFromAddressRIBSBSC["default"].validateJSON(instance); // throw an exception if no match
        // create PrepareTransactionFromAddressRIBSBSC from JS object
        this.actualInstance = _PrepareTransactionFromAddressRIBSBSC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into PrepareTransactionFromAddressRIBSBSC
      errorMessages.push("Failed to construct PrepareTransactionFromAddressRIBSBSC: " + err);
    }
    try {
      if (typeof instance === "PrepareTransactionFromAddressRIBSE") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _PrepareTransactionFromAddressRIBSE["default"].validateJSON(instance); // throw an exception if no match
        // create PrepareTransactionFromAddressRIBSE from JS object
        this.actualInstance = _PrepareTransactionFromAddressRIBSE["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into PrepareTransactionFromAddressRIBSE
      errorMessages.push("Failed to construct PrepareTransactionFromAddressRIBSE: " + err);
    }
    try {
      if (typeof instance === "PrepareTransactionFromAddressRIBSEC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _PrepareTransactionFromAddressRIBSEC["default"].validateJSON(instance); // throw an exception if no match
        // create PrepareTransactionFromAddressRIBSEC from JS object
        this.actualInstance = _PrepareTransactionFromAddressRIBSEC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into PrepareTransactionFromAddressRIBSEC
      errorMessages.push("Failed to construct PrepareTransactionFromAddressRIBSEC: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `PrepareTransactionFromAddressRIBS` with oneOf schemas PrepareTransactionFromAddressRIBSBSC, PrepareTransactionFromAddressRIBSE, PrepareTransactionFromAddressRIBSEC. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `PrepareTransactionFromAddressRIBS` with oneOf schemas PrepareTransactionFromAddressRIBSBSC, PrepareTransactionFromAddressRIBSE, PrepareTransactionFromAddressRIBSEC. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>PrepareTransactionFromAddressRIBS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrepareTransactionFromAddressRIBS} obj Optional instance to populate.
   * @return {module:model/PrepareTransactionFromAddressRIBS} The populated <code>PrepareTransactionFromAddressRIBS</code> instance.
   */
  _createClass(PrepareTransactionFromAddressRIBS, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>PrepareTransactionFromAddressRIBSBSC</code>, <code>PrepareTransactionFromAddressRIBSE</code>, <code>PrepareTransactionFromAddressRIBSEC</code>.
     * @return {(module:model/PrepareTransactionFromAddressRIBSBSC|module:model/PrepareTransactionFromAddressRIBSE|module:model/PrepareTransactionFromAddressRIBSEC)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>PrepareTransactionFromAddressRIBSBSC</code>, <code>PrepareTransactionFromAddressRIBSE</code>, <code>PrepareTransactionFromAddressRIBSEC</code>.
     * @param {(module:model/PrepareTransactionFromAddressRIBSBSC|module:model/PrepareTransactionFromAddressRIBSE|module:model/PrepareTransactionFromAddressRIBSEC)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = PrepareTransactionFromAddressRIBS.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new PrepareTransactionFromAddressRIBS(data);
    }
  }]);
  return PrepareTransactionFromAddressRIBS;
}();
/**
 * @member {module:model/PrepareTransactionFromAddressRIBSBSCFee} fee
 */
_defineProperty(PrepareTransactionFromAddressRIBS, "fromJSON", function (json_string) {
  return PrepareTransactionFromAddressRIBS.constructFromObject(JSON.parse(json_string));
});
PrepareTransactionFromAddressRIBS.prototype['fee'] = undefined;

/**
 * Representation of the transaction type
 * @member {module:model/PrepareTransactionFromAddressRIBS.TransactionTypeEnum} transactionType
 */
PrepareTransactionFromAddressRIBS.prototype['transactionType'] = undefined;

/**
 * Represents the unit of the amount transacted.
 * @member {String} unit
 */
PrepareTransactionFromAddressRIBS.prototype['unit'] = undefined;
PrepareTransactionFromAddressRIBS.OneOf = ["PrepareTransactionFromAddressRIBSBSC", "PrepareTransactionFromAddressRIBSE", "PrepareTransactionFromAddressRIBSEC"];
var _default = PrepareTransactionFromAddressRIBS;
exports["default"] = _default;