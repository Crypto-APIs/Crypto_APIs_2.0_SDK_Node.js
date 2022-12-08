"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDRIBSBSCGasPrice = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSBSCGasPrice"));
var _GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner"));
var _GetWalletTransactionDetailsByTransactionIDRIBSB = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRIBSB"));
var _GetWalletTransactionDetailsByTransactionIDRIBSBC = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRIBSBC"));
var _GetWalletTransactionDetailsByTransactionIDRIBSBSC = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRIBSBSC"));
var _GetWalletTransactionDetailsByTransactionIDRIBSD = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRIBSD"));
var _GetWalletTransactionDetailsByTransactionIDRIBSD2 = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRIBSD2"));
var _GetWalletTransactionDetailsByTransactionIDRIBSE = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRIBSE"));
var _GetWalletTransactionDetailsByTransactionIDRIBSEC = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRIBSEC"));
var _GetWalletTransactionDetailsByTransactionIDRIBSL = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRIBSL"));
var _GetWalletTransactionDetailsByTransactionIDRIBST = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRIBST"));
var _GetWalletTransactionDetailsByTransactionIDRIBSZ = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRIBSZ"));
var _GetWalletTransactionDetailsByTransactionIDRIBSZVinInner = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRIBSZVinInner"));
var _ListTransactionsByBlockHeightRIBSZVoutInner = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSZVoutInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetWalletTransactionDetailsByTransactionIDRIBS model module.
 * @module model/GetWalletTransactionDetailsByTransactionIDRIBS
 * @version 1.11.0
 */
var GetWalletTransactionDetailsByTransactionIDRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetWalletTransactionDetailsByTransactionIDRIBS</code>.
   * @alias module:model/GetWalletTransactionDetailsByTransactionIDRIBS
   * @param {(module:model/GetWalletTransactionDetailsByTransactionIDRIBSB|module:model/GetWalletTransactionDetailsByTransactionIDRIBSBC|module:model/GetWalletTransactionDetailsByTransactionIDRIBSBSC|module:model/GetWalletTransactionDetailsByTransactionIDRIBSD|module:model/GetWalletTransactionDetailsByTransactionIDRIBSD2|module:model/GetWalletTransactionDetailsByTransactionIDRIBSE|module:model/GetWalletTransactionDetailsByTransactionIDRIBSEC|module:model/GetWalletTransactionDetailsByTransactionIDRIBSL|module:model/GetWalletTransactionDetailsByTransactionIDRIBST|module:model/GetWalletTransactionDetailsByTransactionIDRIBSZ)} instance The actual instance to initialize GetWalletTransactionDetailsByTransactionIDRIBS.
   */
  function GetWalletTransactionDetailsByTransactionIDRIBS() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, GetWalletTransactionDetailsByTransactionIDRIBS);
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
      if (typeof instance === "GetWalletTransactionDetailsByTransactionIDRIBSB") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetWalletTransactionDetailsByTransactionIDRIBSB["default"].validateJSON(instance); // throw an exception if no match
        // create GetWalletTransactionDetailsByTransactionIDRIBSB from JS object
        this.actualInstance = _GetWalletTransactionDetailsByTransactionIDRIBSB["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetWalletTransactionDetailsByTransactionIDRIBSB
      errorMessages.push("Failed to construct GetWalletTransactionDetailsByTransactionIDRIBSB: " + err);
    }
    try {
      if (typeof instance === "GetWalletTransactionDetailsByTransactionIDRIBSE") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetWalletTransactionDetailsByTransactionIDRIBSE["default"].validateJSON(instance); // throw an exception if no match
        // create GetWalletTransactionDetailsByTransactionIDRIBSE from JS object
        this.actualInstance = _GetWalletTransactionDetailsByTransactionIDRIBSE["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetWalletTransactionDetailsByTransactionIDRIBSE
      errorMessages.push("Failed to construct GetWalletTransactionDetailsByTransactionIDRIBSE: " + err);
    }
    try {
      if (typeof instance === "GetWalletTransactionDetailsByTransactionIDRIBSL") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetWalletTransactionDetailsByTransactionIDRIBSL["default"].validateJSON(instance); // throw an exception if no match
        // create GetWalletTransactionDetailsByTransactionIDRIBSL from JS object
        this.actualInstance = _GetWalletTransactionDetailsByTransactionIDRIBSL["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetWalletTransactionDetailsByTransactionIDRIBSL
      errorMessages.push("Failed to construct GetWalletTransactionDetailsByTransactionIDRIBSL: " + err);
    }
    try {
      if (typeof instance === "GetWalletTransactionDetailsByTransactionIDRIBSBC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetWalletTransactionDetailsByTransactionIDRIBSBC["default"].validateJSON(instance); // throw an exception if no match
        // create GetWalletTransactionDetailsByTransactionIDRIBSBC from JS object
        this.actualInstance = _GetWalletTransactionDetailsByTransactionIDRIBSBC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetWalletTransactionDetailsByTransactionIDRIBSBC
      errorMessages.push("Failed to construct GetWalletTransactionDetailsByTransactionIDRIBSBC: " + err);
    }
    try {
      if (typeof instance === "GetWalletTransactionDetailsByTransactionIDRIBSEC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetWalletTransactionDetailsByTransactionIDRIBSEC["default"].validateJSON(instance); // throw an exception if no match
        // create GetWalletTransactionDetailsByTransactionIDRIBSEC from JS object
        this.actualInstance = _GetWalletTransactionDetailsByTransactionIDRIBSEC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetWalletTransactionDetailsByTransactionIDRIBSEC
      errorMessages.push("Failed to construct GetWalletTransactionDetailsByTransactionIDRIBSEC: " + err);
    }
    try {
      if (typeof instance === "GetWalletTransactionDetailsByTransactionIDRIBSD") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetWalletTransactionDetailsByTransactionIDRIBSD["default"].validateJSON(instance); // throw an exception if no match
        // create GetWalletTransactionDetailsByTransactionIDRIBSD from JS object
        this.actualInstance = _GetWalletTransactionDetailsByTransactionIDRIBSD["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetWalletTransactionDetailsByTransactionIDRIBSD
      errorMessages.push("Failed to construct GetWalletTransactionDetailsByTransactionIDRIBSD: " + err);
    }
    try {
      if (typeof instance === "GetWalletTransactionDetailsByTransactionIDRIBSD2") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetWalletTransactionDetailsByTransactionIDRIBSD2["default"].validateJSON(instance); // throw an exception if no match
        // create GetWalletTransactionDetailsByTransactionIDRIBSD2 from JS object
        this.actualInstance = _GetWalletTransactionDetailsByTransactionIDRIBSD2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetWalletTransactionDetailsByTransactionIDRIBSD2
      errorMessages.push("Failed to construct GetWalletTransactionDetailsByTransactionIDRIBSD2: " + err);
    }
    try {
      if (typeof instance === "GetWalletTransactionDetailsByTransactionIDRIBSZ") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetWalletTransactionDetailsByTransactionIDRIBSZ["default"].validateJSON(instance); // throw an exception if no match
        // create GetWalletTransactionDetailsByTransactionIDRIBSZ from JS object
        this.actualInstance = _GetWalletTransactionDetailsByTransactionIDRIBSZ["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetWalletTransactionDetailsByTransactionIDRIBSZ
      errorMessages.push("Failed to construct GetWalletTransactionDetailsByTransactionIDRIBSZ: " + err);
    }
    try {
      if (typeof instance === "GetWalletTransactionDetailsByTransactionIDRIBSBSC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetWalletTransactionDetailsByTransactionIDRIBSBSC["default"].validateJSON(instance); // throw an exception if no match
        // create GetWalletTransactionDetailsByTransactionIDRIBSBSC from JS object
        this.actualInstance = _GetWalletTransactionDetailsByTransactionIDRIBSBSC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetWalletTransactionDetailsByTransactionIDRIBSBSC
      errorMessages.push("Failed to construct GetWalletTransactionDetailsByTransactionIDRIBSBSC: " + err);
    }
    try {
      if (typeof instance === "GetWalletTransactionDetailsByTransactionIDRIBST") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetWalletTransactionDetailsByTransactionIDRIBST["default"].validateJSON(instance); // throw an exception if no match
        // create GetWalletTransactionDetailsByTransactionIDRIBST from JS object
        this.actualInstance = _GetWalletTransactionDetailsByTransactionIDRIBST["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetWalletTransactionDetailsByTransactionIDRIBST
      errorMessages.push("Failed to construct GetWalletTransactionDetailsByTransactionIDRIBST: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `GetWalletTransactionDetailsByTransactionIDRIBS` with oneOf schemas GetWalletTransactionDetailsByTransactionIDRIBSB, GetWalletTransactionDetailsByTransactionIDRIBSBC, GetWalletTransactionDetailsByTransactionIDRIBSBSC, GetWalletTransactionDetailsByTransactionIDRIBSD, GetWalletTransactionDetailsByTransactionIDRIBSD2, GetWalletTransactionDetailsByTransactionIDRIBSE, GetWalletTransactionDetailsByTransactionIDRIBSEC, GetWalletTransactionDetailsByTransactionIDRIBSL, GetWalletTransactionDetailsByTransactionIDRIBST, GetWalletTransactionDetailsByTransactionIDRIBSZ. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `GetWalletTransactionDetailsByTransactionIDRIBS` with oneOf schemas GetWalletTransactionDetailsByTransactionIDRIBSB, GetWalletTransactionDetailsByTransactionIDRIBSBC, GetWalletTransactionDetailsByTransactionIDRIBSBSC, GetWalletTransactionDetailsByTransactionIDRIBSD, GetWalletTransactionDetailsByTransactionIDRIBSD2, GetWalletTransactionDetailsByTransactionIDRIBSE, GetWalletTransactionDetailsByTransactionIDRIBSEC, GetWalletTransactionDetailsByTransactionIDRIBSL, GetWalletTransactionDetailsByTransactionIDRIBST, GetWalletTransactionDetailsByTransactionIDRIBSZ. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>GetWalletTransactionDetailsByTransactionIDRIBS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetWalletTransactionDetailsByTransactionIDRIBS} obj Optional instance to populate.
   * @return {module:model/GetWalletTransactionDetailsByTransactionIDRIBS} The populated <code>GetWalletTransactionDetailsByTransactionIDRIBS</code> instance.
   */
  _createClass(GetWalletTransactionDetailsByTransactionIDRIBS, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>GetWalletTransactionDetailsByTransactionIDRIBSB</code>, <code>GetWalletTransactionDetailsByTransactionIDRIBSBC</code>, <code>GetWalletTransactionDetailsByTransactionIDRIBSBSC</code>, <code>GetWalletTransactionDetailsByTransactionIDRIBSD</code>, <code>GetWalletTransactionDetailsByTransactionIDRIBSD2</code>, <code>GetWalletTransactionDetailsByTransactionIDRIBSE</code>, <code>GetWalletTransactionDetailsByTransactionIDRIBSEC</code>, <code>GetWalletTransactionDetailsByTransactionIDRIBSL</code>, <code>GetWalletTransactionDetailsByTransactionIDRIBST</code>, <code>GetWalletTransactionDetailsByTransactionIDRIBSZ</code>.
     * @return {(module:model/GetWalletTransactionDetailsByTransactionIDRIBSB|module:model/GetWalletTransactionDetailsByTransactionIDRIBSBC|module:model/GetWalletTransactionDetailsByTransactionIDRIBSBSC|module:model/GetWalletTransactionDetailsByTransactionIDRIBSD|module:model/GetWalletTransactionDetailsByTransactionIDRIBSD2|module:model/GetWalletTransactionDetailsByTransactionIDRIBSE|module:model/GetWalletTransactionDetailsByTransactionIDRIBSEC|module:model/GetWalletTransactionDetailsByTransactionIDRIBSL|module:model/GetWalletTransactionDetailsByTransactionIDRIBST|module:model/GetWalletTransactionDetailsByTransactionIDRIBSZ)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>GetWalletTransactionDetailsByTransactionIDRIBSB</code>, <code>GetWalletTransactionDetailsByTransactionIDRIBSBC</code>, <code>GetWalletTransactionDetailsByTransactionIDRIBSBSC</code>, <code>GetWalletTransactionDetailsByTransactionIDRIBSD</code>, <code>GetWalletTransactionDetailsByTransactionIDRIBSD2</code>, <code>GetWalletTransactionDetailsByTransactionIDRIBSE</code>, <code>GetWalletTransactionDetailsByTransactionIDRIBSEC</code>, <code>GetWalletTransactionDetailsByTransactionIDRIBSL</code>, <code>GetWalletTransactionDetailsByTransactionIDRIBST</code>, <code>GetWalletTransactionDetailsByTransactionIDRIBSZ</code>.
     * @param {(module:model/GetWalletTransactionDetailsByTransactionIDRIBSB|module:model/GetWalletTransactionDetailsByTransactionIDRIBSBC|module:model/GetWalletTransactionDetailsByTransactionIDRIBSBSC|module:model/GetWalletTransactionDetailsByTransactionIDRIBSD|module:model/GetWalletTransactionDetailsByTransactionIDRIBSD2|module:model/GetWalletTransactionDetailsByTransactionIDRIBSE|module:model/GetWalletTransactionDetailsByTransactionIDRIBSEC|module:model/GetWalletTransactionDetailsByTransactionIDRIBSL|module:model/GetWalletTransactionDetailsByTransactionIDRIBST|module:model/GetWalletTransactionDetailsByTransactionIDRIBSZ)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = GetWalletTransactionDetailsByTransactionIDRIBS.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new GetWalletTransactionDetailsByTransactionIDRIBS(data);
    }
  }]);
  return GetWalletTransactionDetailsByTransactionIDRIBS;
}();
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
_defineProperty(GetWalletTransactionDetailsByTransactionIDRIBS, "fromJSON", function (json_string) {
  return GetWalletTransactionDetailsByTransactionIDRIBS.constructFromObject(JSON.parse(json_string));
});
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['size'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['vSize'] = undefined;

/**
 * Represents the transaction version number.
 * @member {Number} version
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['version'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetWalletTransactionDetailsByTransactionIDRIBSZVinInner>} vin
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVoutInner>} vout
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['vout'] = undefined;

/**
 * Numeric representation of the transaction contract
 * @member {String} contract
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['contract'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSBSCGasPrice} gasPrice
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['gasPrice'] = undefined;

/**
 * Defines the unit of the gas price amount, e.g. BTC, ETH, XRP.
 * @member {String} gasUsed
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['gasUsed'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['nonce'] = undefined;

/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['transactionStatus'] = undefined;

/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['bindingSig'] = undefined;

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['expiryHeight'] = undefined;

/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['joinSplitPubKey'] = undefined;

/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['joinSplitSig'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['overwintered'] = undefined;

/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner>} vJoinSplit
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['vJoinSplit'] = undefined;

/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['vShieldedOutput'] = undefined;

/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['vShieldedSpend'] = undefined;

/**
 * String representation of the transaction value balance
 * @member {String} valueBalance
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['versionGroupId'] = undefined;

/**
 * String representation of the amount value
 * @member {String} amount
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['amount'] = undefined;

/**
 * Numeric representation of the transaction used bandwidth
 * @member {String} bandwidthUsed
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['bandwidthUsed'] = undefined;

/**
 * String representation of the transaction used energy
 * @member {String} energyUsed
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['energyUsed'] = undefined;

/**
 * @member {Boolean} hasInternalTransactions
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['hasInternalTransactions'] = undefined;

/**
 * @member {Boolean} hasTokenTransfers
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['hasTokenTransfers'] = undefined;

/**
 * Numeric representation of the transaction input
 * @member {String} input
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['input'] = undefined;

/**
 * String representation of the transaction status
 * @member {String} status
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['status'] = undefined;
GetWalletTransactionDetailsByTransactionIDRIBS.OneOf = ["GetWalletTransactionDetailsByTransactionIDRIBSB", "GetWalletTransactionDetailsByTransactionIDRIBSBC", "GetWalletTransactionDetailsByTransactionIDRIBSBSC", "GetWalletTransactionDetailsByTransactionIDRIBSD", "GetWalletTransactionDetailsByTransactionIDRIBSD2", "GetWalletTransactionDetailsByTransactionIDRIBSE", "GetWalletTransactionDetailsByTransactionIDRIBSEC", "GetWalletTransactionDetailsByTransactionIDRIBSL", "GetWalletTransactionDetailsByTransactionIDRIBST", "GetWalletTransactionDetailsByTransactionIDRIBSZ"];
var _default = GetWalletTransactionDetailsByTransactionIDRIBS;
exports["default"] = _default;