"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSB = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSB"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSBC = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSBC"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSD = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSD"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSD2 = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSD2"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSE = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSE"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSEC = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSEC"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSL = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSL"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBST = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBST"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSTBandwidthUsed = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSTBandwidthUsed"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSX = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSX"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSZ = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSZ"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2 = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSZVoutInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSZVoutInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVinInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVinInner"));
var _GetXRPRippleTransactionDetailsByTransactionIDRIOffer = _interopRequireDefault(require("./GetXRPRippleTransactionDetailsByTransactionIDRIOffer"));
var _GetXRPRippleTransactionDetailsByTransactionIDRIReceive = _interopRequireDefault(require("./GetXRPRippleTransactionDetailsByTransactionIDRIReceive"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetTransactionDetailsByTransactionIDFromCallbackRIBS model module.
 * @module model/GetTransactionDetailsByTransactionIDFromCallbackRIBS
 * @version 1.11.0
 */
var GetTransactionDetailsByTransactionIDFromCallbackRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDFromCallbackRIBS</code>.
   * @alias module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBS
   * @param {(module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSB|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSBC|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSD|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSD2|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSE|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSEC|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSL|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBST|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSX|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2)} instance The actual instance to initialize GetTransactionDetailsByTransactionIDFromCallbackRIBS.
   */
  function GetTransactionDetailsByTransactionIDFromCallbackRIBS() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, GetTransactionDetailsByTransactionIDFromCallbackRIBS);
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
      if (typeof instance === "GetTransactionDetailsByTransactionIDFromCallbackRIBSB") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetTransactionDetailsByTransactionIDFromCallbackRIBSB["default"].validateJSON(instance); // throw an exception if no match
        // create GetTransactionDetailsByTransactionIDFromCallbackRIBSB from JS object
        this.actualInstance = _GetTransactionDetailsByTransactionIDFromCallbackRIBSB["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetTransactionDetailsByTransactionIDFromCallbackRIBSB
      errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDFromCallbackRIBSB: " + err);
    }
    try {
      if (typeof instance === "GetTransactionDetailsByTransactionIDFromCallbackRIBSE") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetTransactionDetailsByTransactionIDFromCallbackRIBSE["default"].validateJSON(instance); // throw an exception if no match
        // create GetTransactionDetailsByTransactionIDFromCallbackRIBSE from JS object
        this.actualInstance = _GetTransactionDetailsByTransactionIDFromCallbackRIBSE["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetTransactionDetailsByTransactionIDFromCallbackRIBSE
      errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDFromCallbackRIBSE: " + err);
    }
    try {
      if (typeof instance === "GetTransactionDetailsByTransactionIDFromCallbackRIBSBC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetTransactionDetailsByTransactionIDFromCallbackRIBSBC["default"].validateJSON(instance); // throw an exception if no match
        // create GetTransactionDetailsByTransactionIDFromCallbackRIBSBC from JS object
        this.actualInstance = _GetTransactionDetailsByTransactionIDFromCallbackRIBSBC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetTransactionDetailsByTransactionIDFromCallbackRIBSBC
      errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDFromCallbackRIBSBC: " + err);
    }
    try {
      if (typeof instance === "GetTransactionDetailsByTransactionIDFromCallbackRIBSL") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetTransactionDetailsByTransactionIDFromCallbackRIBSL["default"].validateJSON(instance); // throw an exception if no match
        // create GetTransactionDetailsByTransactionIDFromCallbackRIBSL from JS object
        this.actualInstance = _GetTransactionDetailsByTransactionIDFromCallbackRIBSL["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetTransactionDetailsByTransactionIDFromCallbackRIBSL
      errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDFromCallbackRIBSL: " + err);
    }
    try {
      if (typeof instance === "GetTransactionDetailsByTransactionIDFromCallbackRIBSD") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetTransactionDetailsByTransactionIDFromCallbackRIBSD["default"].validateJSON(instance); // throw an exception if no match
        // create GetTransactionDetailsByTransactionIDFromCallbackRIBSD from JS object
        this.actualInstance = _GetTransactionDetailsByTransactionIDFromCallbackRIBSD["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetTransactionDetailsByTransactionIDFromCallbackRIBSD
      errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDFromCallbackRIBSD: " + err);
    }
    try {
      if (typeof instance === "GetTransactionDetailsByTransactionIDFromCallbackRIBSD2") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetTransactionDetailsByTransactionIDFromCallbackRIBSD2["default"].validateJSON(instance); // throw an exception if no match
        // create GetTransactionDetailsByTransactionIDFromCallbackRIBSD2 from JS object
        this.actualInstance = _GetTransactionDetailsByTransactionIDFromCallbackRIBSD2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetTransactionDetailsByTransactionIDFromCallbackRIBSD2
      errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDFromCallbackRIBSD2: " + err);
    }
    try {
      if (typeof instance === "GetTransactionDetailsByTransactionIDFromCallbackRIBSZ") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetTransactionDetailsByTransactionIDFromCallbackRIBSZ["default"].validateJSON(instance); // throw an exception if no match
        // create GetTransactionDetailsByTransactionIDFromCallbackRIBSZ from JS object
        this.actualInstance = _GetTransactionDetailsByTransactionIDFromCallbackRIBSZ["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetTransactionDetailsByTransactionIDFromCallbackRIBSZ
      errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDFromCallbackRIBSZ: " + err);
    }
    try {
      if (typeof instance === "GetTransactionDetailsByTransactionIDFromCallbackRIBSEC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetTransactionDetailsByTransactionIDFromCallbackRIBSEC["default"].validateJSON(instance); // throw an exception if no match
        // create GetTransactionDetailsByTransactionIDFromCallbackRIBSEC from JS object
        this.actualInstance = _GetTransactionDetailsByTransactionIDFromCallbackRIBSEC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetTransactionDetailsByTransactionIDFromCallbackRIBSEC
      errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDFromCallbackRIBSEC: " + err);
    }
    try {
      if (typeof instance === "GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC["default"].validateJSON(instance); // throw an exception if no match
        // create GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC from JS object
        this.actualInstance = _GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC
      errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC: " + err);
    }
    try {
      if (typeof instance === "GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2["default"].validateJSON(instance); // throw an exception if no match
        // create GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2 from JS object
        this.actualInstance = _GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2
      errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2: " + err);
    }
    try {
      if (typeof instance === "GetTransactionDetailsByTransactionIDFromCallbackRIBSX") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetTransactionDetailsByTransactionIDFromCallbackRIBSX["default"].validateJSON(instance); // throw an exception if no match
        // create GetTransactionDetailsByTransactionIDFromCallbackRIBSX from JS object
        this.actualInstance = _GetTransactionDetailsByTransactionIDFromCallbackRIBSX["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetTransactionDetailsByTransactionIDFromCallbackRIBSX
      errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDFromCallbackRIBSX: " + err);
    }
    try {
      if (typeof instance === "GetTransactionDetailsByTransactionIDFromCallbackRIBST") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetTransactionDetailsByTransactionIDFromCallbackRIBST["default"].validateJSON(instance); // throw an exception if no match
        // create GetTransactionDetailsByTransactionIDFromCallbackRIBST from JS object
        this.actualInstance = _GetTransactionDetailsByTransactionIDFromCallbackRIBST["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetTransactionDetailsByTransactionIDFromCallbackRIBST
      errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDFromCallbackRIBST: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `GetTransactionDetailsByTransactionIDFromCallbackRIBS` with oneOf schemas GetTransactionDetailsByTransactionIDFromCallbackRIBSB, GetTransactionDetailsByTransactionIDFromCallbackRIBSBC, GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC, GetTransactionDetailsByTransactionIDFromCallbackRIBSD, GetTransactionDetailsByTransactionIDFromCallbackRIBSD2, GetTransactionDetailsByTransactionIDFromCallbackRIBSE, GetTransactionDetailsByTransactionIDFromCallbackRIBSEC, GetTransactionDetailsByTransactionIDFromCallbackRIBSL, GetTransactionDetailsByTransactionIDFromCallbackRIBST, GetTransactionDetailsByTransactionIDFromCallbackRIBSX, GetTransactionDetailsByTransactionIDFromCallbackRIBSZ, GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `GetTransactionDetailsByTransactionIDFromCallbackRIBS` with oneOf schemas GetTransactionDetailsByTransactionIDFromCallbackRIBSB, GetTransactionDetailsByTransactionIDFromCallbackRIBSBC, GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC, GetTransactionDetailsByTransactionIDFromCallbackRIBSD, GetTransactionDetailsByTransactionIDFromCallbackRIBSD2, GetTransactionDetailsByTransactionIDFromCallbackRIBSE, GetTransactionDetailsByTransactionIDFromCallbackRIBSEC, GetTransactionDetailsByTransactionIDFromCallbackRIBSL, GetTransactionDetailsByTransactionIDFromCallbackRIBST, GetTransactionDetailsByTransactionIDFromCallbackRIBSX, GetTransactionDetailsByTransactionIDFromCallbackRIBSZ, GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>GetTransactionDetailsByTransactionIDFromCallbackRIBS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBS} obj Optional instance to populate.
   * @return {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBS} The populated <code>GetTransactionDetailsByTransactionIDFromCallbackRIBS</code> instance.
   */
  _createClass(GetTransactionDetailsByTransactionIDFromCallbackRIBS, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSB</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSBC</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSD</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSD2</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSE</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSEC</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSL</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBST</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSX</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSZ</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2</code>.
     * @return {(module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSB|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSBC|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSD|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSD2|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSE|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSEC|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSL|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBST|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSX|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSB</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSBC</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSD</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSD2</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSE</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSEC</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSL</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBST</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSX</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSZ</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2</code>.
     * @param {(module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSB|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSBC|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSD|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSD2|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSE|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSEC|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSL|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBST|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSX|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = GetTransactionDetailsByTransactionIDFromCallbackRIBS.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new GetTransactionDetailsByTransactionIDFromCallbackRIBS(data);
    }
  }]);
  return GetTransactionDetailsByTransactionIDFromCallbackRIBS;
}();
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_defineProperty(GetTransactionDetailsByTransactionIDFromCallbackRIBS, "fromJSON", function (json_string) {
  return GetTransactionDetailsByTransactionIDFromCallbackRIBS.constructFromObject(JSON.parse(json_string));
});
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['size'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['vSize'] = undefined;

/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['version'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVinInner>} vin
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZVoutInner>} vout
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['vout'] = undefined;

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['contract'] = undefined;

/**
 * Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
 * @member {Number} gasLimit
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice} gasPrice
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['gasPrice'] = undefined;

/**
 * Defines how much of the gas for the block has been used.
 * @member {Number} gasUsed
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['gasUsed'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['nonce'] = undefined;

/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['transactionStatus'] = undefined;

/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['bindingSig'] = undefined;

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['expiryHeight'] = undefined;

/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['joinSplitPubKey'] = undefined;

/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['joinSplitSig'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['overwintered'] = undefined;

/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner>} vJoinSplit
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['vJoinSplit'] = undefined;

/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['vShieldedOutput'] = undefined;

/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['vShieldedSpend'] = undefined;

/**
 * String representation of the transaction value balance
 * @member {String} valueBalance
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version group ID
 * @member {String} versionGroupId
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['versionGroupId'] = undefined;

/**
 * Represents additional data that may be needed.
 * @member {String} additionalData
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['additionalData'] = undefined;

/**
 * Defines the destination tag value.
 * @member {Number} destinationTag
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['destinationTag'] = undefined;

/**
 * @member {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIOffer} offer
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['offer'] = undefined;

/**
 * @member {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIReceive} receive
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['receive'] = undefined;

/**
 * Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
 * @member {Number} sequence
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['sequence'] = undefined;

/**
 * Defines the status of the transaction.
 * @member {String} status
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['status'] = undefined;

/**
 * Defines the type of the transaction.
 * @member {String} type
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['type'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue} value
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['value'] = undefined;

/**
 * Defines the amount of the transaction.
 * @member {String} amount
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['amount'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSTBandwidthUsed} bandwidthUsed
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['bandwidthUsed'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed} energyUsed
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['energyUsed'] = undefined;

/**
 * Defines if the transaction includes internal transactions (true) or not (false).
 * @member {Boolean} hasInternalTransactions
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['hasInternalTransactions'] = undefined;

/**
 * Defines if the transaction includes token transfers (true) or not (false).
 * @member {String} hasTokenTransfers
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['hasTokenTransfers'] = undefined;

/**
 * Represents the transaction's input value.
 * @member {String} input
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['input'] = undefined;

/**
 * Represents the recipient address.
 * @member {String} recipients
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['recipients'] = undefined;

/**
 * Represents the sender address.
 * @member {String} senders
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['senders'] = undefined;
GetTransactionDetailsByTransactionIDFromCallbackRIBS.OneOf = ["GetTransactionDetailsByTransactionIDFromCallbackRIBSB", "GetTransactionDetailsByTransactionIDFromCallbackRIBSBC", "GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC", "GetTransactionDetailsByTransactionIDFromCallbackRIBSD", "GetTransactionDetailsByTransactionIDFromCallbackRIBSD2", "GetTransactionDetailsByTransactionIDFromCallbackRIBSE", "GetTransactionDetailsByTransactionIDFromCallbackRIBSEC", "GetTransactionDetailsByTransactionIDFromCallbackRIBSL", "GetTransactionDetailsByTransactionIDFromCallbackRIBST", "GetTransactionDetailsByTransactionIDFromCallbackRIBSX", "GetTransactionDetailsByTransactionIDFromCallbackRIBSZ", "GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2"];
var _default = GetTransactionDetailsByTransactionIDFromCallbackRIBS;
exports["default"] = _default;