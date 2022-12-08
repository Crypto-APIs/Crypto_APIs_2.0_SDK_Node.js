"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC = _interopRequireDefault(require("./PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC"));
var _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE = _interopRequireDefault(require("./PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE"));
var _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC = _interopRequireDefault(require("./PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC"));
var _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST = _interopRequireDefault(require("./PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST"));
var _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawData = _interopRequireDefault(require("./PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawData"));
var _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX = _interopRequireDefault(require("./PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX"));
var _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSXFee = _interopRequireDefault(require("./PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSXFee"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS model module.
 * @module model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS
 * @version 1.11.0
 */
var PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS</code>.
   * @alias module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS
   * @param {(module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC|module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE|module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC|module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST|module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX)} instance The actual instance to initialize PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.
   */
  function PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS);
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
      if (typeof instance === "PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE["default"].validateJSON(instance); // throw an exception if no match
        // create PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE from JS object
        this.actualInstance = _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE
      errorMessages.push("Failed to construct PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE: " + err);
    }
    try {
      if (typeof instance === "PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC["default"].validateJSON(instance); // throw an exception if no match
        // create PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC from JS object
        this.actualInstance = _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC
      errorMessages.push("Failed to construct PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC: " + err);
    }
    try {
      if (typeof instance === "PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC["default"].validateJSON(instance); // throw an exception if no match
        // create PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC from JS object
        this.actualInstance = _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC
      errorMessages.push("Failed to construct PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC: " + err);
    }
    try {
      if (typeof instance === "PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST["default"].validateJSON(instance); // throw an exception if no match
        // create PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST from JS object
        this.actualInstance = _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST
      errorMessages.push("Failed to construct PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST: " + err);
    }
    try {
      if (typeof instance === "PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX["default"].validateJSON(instance); // throw an exception if no match
        // create PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX from JS object
        this.actualInstance = _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX
      errorMessages.push("Failed to construct PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS` with oneOf schemas PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC, PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE, PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC, PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST, PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS` with oneOf schemas PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC, PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE, PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC, PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST, PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS} obj Optional instance to populate.
   * @return {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS} The populated <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS</code> instance.
   */
  _createClass(PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC</code>, <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE</code>, <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC</code>, <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST</code>, <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX</code>.
     * @return {(module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC|module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE|module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC|module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST|module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC</code>, <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE</code>, <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC</code>, <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST</code>, <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX</code>.
     * @param {(module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC|module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE|module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC|module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST|module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS(data);
    }
  }]);
  return PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS;
}();
/**
 * Representation of the data in hex value
 * @member {String} dataHex
 */
_defineProperty(PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS, "fromJSON", function (json_string) {
  return PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.constructFromObject(JSON.parse(json_string));
});
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['dataHex'] = undefined;

/**
 * Representation of the derivation index of the xpub address
 * @member {Number} derivationIndex
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['derivationIndex'] = undefined;

/**
 * @member {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSXFee} fee
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['fee'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['nonce'] = undefined;

/**
 * Representation of the transaction type
 * @member {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.TransactionTypeEnum} transactionType
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['transactionType'] = undefined;

/**
 * Represents the unit of the amount to be sent.
 * @member {String} unit
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['unit'] = undefined;

/**
 * String representation of the data
 * @member {String} data
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['data'] = undefined;

/**
 * Rrepresentation of the expiration value
 * @member {Number} expiration
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['expiration'] = undefined;

/**
 * @member {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawData} rawData
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['rawData'] = undefined;

/**
 * Representation of the raw data in hex format
 * @member {String} rawDataHex
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['rawDataHex'] = undefined;

/**
 * Rrepresentation of the recipients' address
 * @member {String} recipient
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['recipient'] = undefined;

/**
 * Representation of the block bytes
 * @member {String} refBlockBytes
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['refBlockBytes'] = undefined;

/**
 * Representation of the block hash refference
 * @member {String} refBlockHash
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['refBlockHash'] = undefined;

/**
 * Representation of the sender
 * @member {String} sender
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['sender'] = undefined;

/**
 * Representation of the timestamp
 * @member {Number} timestamp
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['timestamp'] = undefined;

/**
 * Represents the reference transaction identifier.
 * @member {String} transactionId
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['transactionId'] = undefined;

/**
 * Representation of the transfer type.
 * @member {String} type
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['type'] = undefined;

/**
 * Representation of the URL
 * @member {String} typeUrl
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['typeUrl'] = undefined;

/**
 * Representation of the address visibility
 * @member {Boolean} visible
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['visible'] = undefined;

/**
 * Representation of the public key.
 * @member {String} publicKey
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['publicKey'] = undefined;

/**
 * Representation of the sequence
 * @member {String} sequence
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['sequence'] = undefined;
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.OneOf = ["PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC", "PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE", "PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC", "PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST", "PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX"];
var _default = PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS;
exports["default"] = _default;