"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDRIBSB = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSB"));
var _GetTransactionDetailsByTransactionIDRIBSBC = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSBC"));
var _GetTransactionDetailsByTransactionIDRIBSBSC = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSBSC"));
var _GetTransactionDetailsByTransactionIDRIBSBSCGasPrice = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSBSCGasPrice"));
var _GetTransactionDetailsByTransactionIDRIBSD = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSD"));
var _GetTransactionDetailsByTransactionIDRIBSD2 = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSD2"));
var _GetTransactionDetailsByTransactionIDRIBSE = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSE"));
var _GetTransactionDetailsByTransactionIDRIBSEC = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSEC"));
var _GetTransactionDetailsByTransactionIDRIBSL = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSL"));
var _GetTransactionDetailsByTransactionIDRIBSZ = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZ"));
var _GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVinInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVinInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVoutInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVoutInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetTransactionDetailsByTransactionIDRIBS model module.
 * @module model/GetTransactionDetailsByTransactionIDRIBS
 * @version 1.11.0
 */
var GetTransactionDetailsByTransactionIDRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDRIBS</code>.
   * @alias module:model/GetTransactionDetailsByTransactionIDRIBS
   * @param {(module:model/GetTransactionDetailsByTransactionIDRIBSB|module:model/GetTransactionDetailsByTransactionIDRIBSBC|module:model/GetTransactionDetailsByTransactionIDRIBSBSC|module:model/GetTransactionDetailsByTransactionIDRIBSD|module:model/GetTransactionDetailsByTransactionIDRIBSD2|module:model/GetTransactionDetailsByTransactionIDRIBSE|module:model/GetTransactionDetailsByTransactionIDRIBSEC|module:model/GetTransactionDetailsByTransactionIDRIBSL|module:model/GetTransactionDetailsByTransactionIDRIBSZ)} instance The actual instance to initialize GetTransactionDetailsByTransactionIDRIBS.
   */
  function GetTransactionDetailsByTransactionIDRIBS() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, GetTransactionDetailsByTransactionIDRIBS);
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
      if (typeof instance === "GetTransactionDetailsByTransactionIDRIBSB") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetTransactionDetailsByTransactionIDRIBSB["default"].validateJSON(instance); // throw an exception if no match
        // create GetTransactionDetailsByTransactionIDRIBSB from JS object
        this.actualInstance = _GetTransactionDetailsByTransactionIDRIBSB["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetTransactionDetailsByTransactionIDRIBSB
      errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDRIBSB: " + err);
    }
    try {
      if (typeof instance === "GetTransactionDetailsByTransactionIDRIBSBC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetTransactionDetailsByTransactionIDRIBSBC["default"].validateJSON(instance); // throw an exception if no match
        // create GetTransactionDetailsByTransactionIDRIBSBC from JS object
        this.actualInstance = _GetTransactionDetailsByTransactionIDRIBSBC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetTransactionDetailsByTransactionIDRIBSBC
      errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDRIBSBC: " + err);
    }
    try {
      if (typeof instance === "GetTransactionDetailsByTransactionIDRIBSL") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetTransactionDetailsByTransactionIDRIBSL["default"].validateJSON(instance); // throw an exception if no match
        // create GetTransactionDetailsByTransactionIDRIBSL from JS object
        this.actualInstance = _GetTransactionDetailsByTransactionIDRIBSL["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetTransactionDetailsByTransactionIDRIBSL
      errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDRIBSL: " + err);
    }
    try {
      if (typeof instance === "GetTransactionDetailsByTransactionIDRIBSD") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetTransactionDetailsByTransactionIDRIBSD["default"].validateJSON(instance); // throw an exception if no match
        // create GetTransactionDetailsByTransactionIDRIBSD from JS object
        this.actualInstance = _GetTransactionDetailsByTransactionIDRIBSD["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetTransactionDetailsByTransactionIDRIBSD
      errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDRIBSD: " + err);
    }
    try {
      if (typeof instance === "GetTransactionDetailsByTransactionIDRIBSD2") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetTransactionDetailsByTransactionIDRIBSD2["default"].validateJSON(instance); // throw an exception if no match
        // create GetTransactionDetailsByTransactionIDRIBSD2 from JS object
        this.actualInstance = _GetTransactionDetailsByTransactionIDRIBSD2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetTransactionDetailsByTransactionIDRIBSD2
      errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDRIBSD2: " + err);
    }
    try {
      if (typeof instance === "GetTransactionDetailsByTransactionIDRIBSE") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetTransactionDetailsByTransactionIDRIBSE["default"].validateJSON(instance); // throw an exception if no match
        // create GetTransactionDetailsByTransactionIDRIBSE from JS object
        this.actualInstance = _GetTransactionDetailsByTransactionIDRIBSE["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetTransactionDetailsByTransactionIDRIBSE
      errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDRIBSE: " + err);
    }
    try {
      if (typeof instance === "GetTransactionDetailsByTransactionIDRIBSEC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetTransactionDetailsByTransactionIDRIBSEC["default"].validateJSON(instance); // throw an exception if no match
        // create GetTransactionDetailsByTransactionIDRIBSEC from JS object
        this.actualInstance = _GetTransactionDetailsByTransactionIDRIBSEC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetTransactionDetailsByTransactionIDRIBSEC
      errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDRIBSEC: " + err);
    }
    try {
      if (typeof instance === "GetTransactionDetailsByTransactionIDRIBSBSC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetTransactionDetailsByTransactionIDRIBSBSC["default"].validateJSON(instance); // throw an exception if no match
        // create GetTransactionDetailsByTransactionIDRIBSBSC from JS object
        this.actualInstance = _GetTransactionDetailsByTransactionIDRIBSBSC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetTransactionDetailsByTransactionIDRIBSBSC
      errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDRIBSBSC: " + err);
    }
    try {
      if (typeof instance === "GetTransactionDetailsByTransactionIDRIBSZ") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetTransactionDetailsByTransactionIDRIBSZ["default"].validateJSON(instance); // throw an exception if no match
        // create GetTransactionDetailsByTransactionIDRIBSZ from JS object
        this.actualInstance = _GetTransactionDetailsByTransactionIDRIBSZ["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetTransactionDetailsByTransactionIDRIBSZ
      errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDRIBSZ: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `GetTransactionDetailsByTransactionIDRIBS` with oneOf schemas GetTransactionDetailsByTransactionIDRIBSB, GetTransactionDetailsByTransactionIDRIBSBC, GetTransactionDetailsByTransactionIDRIBSBSC, GetTransactionDetailsByTransactionIDRIBSD, GetTransactionDetailsByTransactionIDRIBSD2, GetTransactionDetailsByTransactionIDRIBSE, GetTransactionDetailsByTransactionIDRIBSEC, GetTransactionDetailsByTransactionIDRIBSL, GetTransactionDetailsByTransactionIDRIBSZ. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `GetTransactionDetailsByTransactionIDRIBS` with oneOf schemas GetTransactionDetailsByTransactionIDRIBSB, GetTransactionDetailsByTransactionIDRIBSBC, GetTransactionDetailsByTransactionIDRIBSBSC, GetTransactionDetailsByTransactionIDRIBSD, GetTransactionDetailsByTransactionIDRIBSD2, GetTransactionDetailsByTransactionIDRIBSE, GetTransactionDetailsByTransactionIDRIBSEC, GetTransactionDetailsByTransactionIDRIBSL, GetTransactionDetailsByTransactionIDRIBSZ. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>GetTransactionDetailsByTransactionIDRIBS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetTransactionDetailsByTransactionIDRIBS} obj Optional instance to populate.
   * @return {module:model/GetTransactionDetailsByTransactionIDRIBS} The populated <code>GetTransactionDetailsByTransactionIDRIBS</code> instance.
   */
  _createClass(GetTransactionDetailsByTransactionIDRIBS, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>GetTransactionDetailsByTransactionIDRIBSB</code>, <code>GetTransactionDetailsByTransactionIDRIBSBC</code>, <code>GetTransactionDetailsByTransactionIDRIBSBSC</code>, <code>GetTransactionDetailsByTransactionIDRIBSD</code>, <code>GetTransactionDetailsByTransactionIDRIBSD2</code>, <code>GetTransactionDetailsByTransactionIDRIBSE</code>, <code>GetTransactionDetailsByTransactionIDRIBSEC</code>, <code>GetTransactionDetailsByTransactionIDRIBSL</code>, <code>GetTransactionDetailsByTransactionIDRIBSZ</code>.
     * @return {(module:model/GetTransactionDetailsByTransactionIDRIBSB|module:model/GetTransactionDetailsByTransactionIDRIBSBC|module:model/GetTransactionDetailsByTransactionIDRIBSBSC|module:model/GetTransactionDetailsByTransactionIDRIBSD|module:model/GetTransactionDetailsByTransactionIDRIBSD2|module:model/GetTransactionDetailsByTransactionIDRIBSE|module:model/GetTransactionDetailsByTransactionIDRIBSEC|module:model/GetTransactionDetailsByTransactionIDRIBSL|module:model/GetTransactionDetailsByTransactionIDRIBSZ)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>GetTransactionDetailsByTransactionIDRIBSB</code>, <code>GetTransactionDetailsByTransactionIDRIBSBC</code>, <code>GetTransactionDetailsByTransactionIDRIBSBSC</code>, <code>GetTransactionDetailsByTransactionIDRIBSD</code>, <code>GetTransactionDetailsByTransactionIDRIBSD2</code>, <code>GetTransactionDetailsByTransactionIDRIBSE</code>, <code>GetTransactionDetailsByTransactionIDRIBSEC</code>, <code>GetTransactionDetailsByTransactionIDRIBSL</code>, <code>GetTransactionDetailsByTransactionIDRIBSZ</code>.
     * @param {(module:model/GetTransactionDetailsByTransactionIDRIBSB|module:model/GetTransactionDetailsByTransactionIDRIBSBC|module:model/GetTransactionDetailsByTransactionIDRIBSBSC|module:model/GetTransactionDetailsByTransactionIDRIBSD|module:model/GetTransactionDetailsByTransactionIDRIBSD2|module:model/GetTransactionDetailsByTransactionIDRIBSE|module:model/GetTransactionDetailsByTransactionIDRIBSEC|module:model/GetTransactionDetailsByTransactionIDRIBSL|module:model/GetTransactionDetailsByTransactionIDRIBSZ)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = GetTransactionDetailsByTransactionIDRIBS.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new GetTransactionDetailsByTransactionIDRIBS(data);
    }
  }]);
  return GetTransactionDetailsByTransactionIDRIBS;
}();
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_defineProperty(GetTransactionDetailsByTransactionIDRIBS, "fromJSON", function (json_string) {
  return GetTransactionDetailsByTransactionIDRIBS.constructFromObject(JSON.parse(json_string));
});
GetTransactionDetailsByTransactionIDRIBS.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['size'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['vSize'] = undefined;

/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['version'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVinInner>} vin
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} vout
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['vout'] = undefined;

/**
 * Represents the specific transaction contract
 * @member {String} contract
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['contract'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSBSCGasPrice} gasPrice
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['gasPrice'] = undefined;

/**
 * Defines the unit of the gas price amount, e.g. BTC, ETH, XRP.
 * @member {String} gasUsed
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['gasUsed'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['nonce'] = undefined;

/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['transactionStatus'] = undefined;

/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['bindingSig'] = undefined;

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['expiryHeight'] = undefined;

/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['joinSplitPubKey'] = undefined;

/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['joinSplitSig'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['overwintered'] = undefined;

/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner>} vJoinSplit
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['vJoinSplit'] = undefined;

/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['vShieldedOutput'] = undefined;

/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['vShieldedSpend'] = undefined;

/**
 * String representation of the transaction value balance
 * @member {String} valueBalance
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['versionGroupId'] = undefined;
GetTransactionDetailsByTransactionIDRIBS.OneOf = ["GetTransactionDetailsByTransactionIDRIBSB", "GetTransactionDetailsByTransactionIDRIBSBC", "GetTransactionDetailsByTransactionIDRIBSBSC", "GetTransactionDetailsByTransactionIDRIBSD", "GetTransactionDetailsByTransactionIDRIBSD2", "GetTransactionDetailsByTransactionIDRIBSE", "GetTransactionDetailsByTransactionIDRIBSEC", "GetTransactionDetailsByTransactionIDRIBSL", "GetTransactionDetailsByTransactionIDRIBSZ"];
var _default = GetTransactionDetailsByTransactionIDRIBS;
exports["default"] = _default;