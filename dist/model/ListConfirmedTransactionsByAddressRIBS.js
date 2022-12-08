"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVoutInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVoutInner"));
var _ListConfirmedTransactionsByAddressRIBSB = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSB"));
var _ListConfirmedTransactionsByAddressRIBSBC = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSBC"));
var _ListConfirmedTransactionsByAddressRIBSBSC = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSBSC"));
var _ListConfirmedTransactionsByAddressRIBSD = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSD"));
var _ListConfirmedTransactionsByAddressRIBSD2 = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSD2"));
var _ListConfirmedTransactionsByAddressRIBSE = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSE"));
var _ListConfirmedTransactionsByAddressRIBSEC = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSEC"));
var _ListConfirmedTransactionsByAddressRIBSL = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSL"));
var _ListConfirmedTransactionsByAddressRIBSP = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSP"));
var _ListConfirmedTransactionsByAddressRIBSPGasPrice = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSPGasPrice"));
var _ListConfirmedTransactionsByAddressRIBST = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBST"));
var _ListConfirmedTransactionsByAddressRIBSZ = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSZ"));
var _ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner"));
var _ListConfirmedTransactionsByAddressRIBSZVinInner = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSZVinInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListConfirmedTransactionsByAddressRIBS model module.
 * @module model/ListConfirmedTransactionsByAddressRIBS
 * @version 1.11.0
 */
var ListConfirmedTransactionsByAddressRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListConfirmedTransactionsByAddressRIBS</code>.
   * @alias module:model/ListConfirmedTransactionsByAddressRIBS
   * @param {(module:model/ListConfirmedTransactionsByAddressRIBSB|module:model/ListConfirmedTransactionsByAddressRIBSBC|module:model/ListConfirmedTransactionsByAddressRIBSBSC|module:model/ListConfirmedTransactionsByAddressRIBSD|module:model/ListConfirmedTransactionsByAddressRIBSD2|module:model/ListConfirmedTransactionsByAddressRIBSE|module:model/ListConfirmedTransactionsByAddressRIBSEC|module:model/ListConfirmedTransactionsByAddressRIBSL|module:model/ListConfirmedTransactionsByAddressRIBSP|module:model/ListConfirmedTransactionsByAddressRIBST|module:model/ListConfirmedTransactionsByAddressRIBSZ)} instance The actual instance to initialize ListConfirmedTransactionsByAddressRIBS.
   */
  function ListConfirmedTransactionsByAddressRIBS() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, ListConfirmedTransactionsByAddressRIBS);
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
      if (typeof instance === "ListConfirmedTransactionsByAddressRIBSB") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListConfirmedTransactionsByAddressRIBSB["default"].validateJSON(instance); // throw an exception if no match
        // create ListConfirmedTransactionsByAddressRIBSB from JS object
        this.actualInstance = _ListConfirmedTransactionsByAddressRIBSB["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListConfirmedTransactionsByAddressRIBSB
      errorMessages.push("Failed to construct ListConfirmedTransactionsByAddressRIBSB: " + err);
    }
    try {
      if (typeof instance === "ListConfirmedTransactionsByAddressRIBSBC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListConfirmedTransactionsByAddressRIBSBC["default"].validateJSON(instance); // throw an exception if no match
        // create ListConfirmedTransactionsByAddressRIBSBC from JS object
        this.actualInstance = _ListConfirmedTransactionsByAddressRIBSBC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListConfirmedTransactionsByAddressRIBSBC
      errorMessages.push("Failed to construct ListConfirmedTransactionsByAddressRIBSBC: " + err);
    }
    try {
      if (typeof instance === "ListConfirmedTransactionsByAddressRIBSL") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListConfirmedTransactionsByAddressRIBSL["default"].validateJSON(instance); // throw an exception if no match
        // create ListConfirmedTransactionsByAddressRIBSL from JS object
        this.actualInstance = _ListConfirmedTransactionsByAddressRIBSL["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListConfirmedTransactionsByAddressRIBSL
      errorMessages.push("Failed to construct ListConfirmedTransactionsByAddressRIBSL: " + err);
    }
    try {
      if (typeof instance === "ListConfirmedTransactionsByAddressRIBSD") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListConfirmedTransactionsByAddressRIBSD["default"].validateJSON(instance); // throw an exception if no match
        // create ListConfirmedTransactionsByAddressRIBSD from JS object
        this.actualInstance = _ListConfirmedTransactionsByAddressRIBSD["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListConfirmedTransactionsByAddressRIBSD
      errorMessages.push("Failed to construct ListConfirmedTransactionsByAddressRIBSD: " + err);
    }
    try {
      if (typeof instance === "ListConfirmedTransactionsByAddressRIBSD2") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListConfirmedTransactionsByAddressRIBSD2["default"].validateJSON(instance); // throw an exception if no match
        // create ListConfirmedTransactionsByAddressRIBSD2 from JS object
        this.actualInstance = _ListConfirmedTransactionsByAddressRIBSD2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListConfirmedTransactionsByAddressRIBSD2
      errorMessages.push("Failed to construct ListConfirmedTransactionsByAddressRIBSD2: " + err);
    }
    try {
      if (typeof instance === "ListConfirmedTransactionsByAddressRIBSEC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListConfirmedTransactionsByAddressRIBSEC["default"].validateJSON(instance); // throw an exception if no match
        // create ListConfirmedTransactionsByAddressRIBSEC from JS object
        this.actualInstance = _ListConfirmedTransactionsByAddressRIBSEC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListConfirmedTransactionsByAddressRIBSEC
      errorMessages.push("Failed to construct ListConfirmedTransactionsByAddressRIBSEC: " + err);
    }
    try {
      if (typeof instance === "ListConfirmedTransactionsByAddressRIBSE") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListConfirmedTransactionsByAddressRIBSE["default"].validateJSON(instance); // throw an exception if no match
        // create ListConfirmedTransactionsByAddressRIBSE from JS object
        this.actualInstance = _ListConfirmedTransactionsByAddressRIBSE["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListConfirmedTransactionsByAddressRIBSE
      errorMessages.push("Failed to construct ListConfirmedTransactionsByAddressRIBSE: " + err);
    }
    try {
      if (typeof instance === "ListConfirmedTransactionsByAddressRIBSBSC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListConfirmedTransactionsByAddressRIBSBSC["default"].validateJSON(instance); // throw an exception if no match
        // create ListConfirmedTransactionsByAddressRIBSBSC from JS object
        this.actualInstance = _ListConfirmedTransactionsByAddressRIBSBSC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListConfirmedTransactionsByAddressRIBSBSC
      errorMessages.push("Failed to construct ListConfirmedTransactionsByAddressRIBSBSC: " + err);
    }
    try {
      if (typeof instance === "ListConfirmedTransactionsByAddressRIBSZ") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListConfirmedTransactionsByAddressRIBSZ["default"].validateJSON(instance); // throw an exception if no match
        // create ListConfirmedTransactionsByAddressRIBSZ from JS object
        this.actualInstance = _ListConfirmedTransactionsByAddressRIBSZ["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListConfirmedTransactionsByAddressRIBSZ
      errorMessages.push("Failed to construct ListConfirmedTransactionsByAddressRIBSZ: " + err);
    }
    try {
      if (typeof instance === "ListConfirmedTransactionsByAddressRIBST") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListConfirmedTransactionsByAddressRIBST["default"].validateJSON(instance); // throw an exception if no match
        // create ListConfirmedTransactionsByAddressRIBST from JS object
        this.actualInstance = _ListConfirmedTransactionsByAddressRIBST["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListConfirmedTransactionsByAddressRIBST
      errorMessages.push("Failed to construct ListConfirmedTransactionsByAddressRIBST: " + err);
    }
    try {
      if (typeof instance === "ListConfirmedTransactionsByAddressRIBSP") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListConfirmedTransactionsByAddressRIBSP["default"].validateJSON(instance); // throw an exception if no match
        // create ListConfirmedTransactionsByAddressRIBSP from JS object
        this.actualInstance = _ListConfirmedTransactionsByAddressRIBSP["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListConfirmedTransactionsByAddressRIBSP
      errorMessages.push("Failed to construct ListConfirmedTransactionsByAddressRIBSP: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `ListConfirmedTransactionsByAddressRIBS` with oneOf schemas ListConfirmedTransactionsByAddressRIBSB, ListConfirmedTransactionsByAddressRIBSBC, ListConfirmedTransactionsByAddressRIBSBSC, ListConfirmedTransactionsByAddressRIBSD, ListConfirmedTransactionsByAddressRIBSD2, ListConfirmedTransactionsByAddressRIBSE, ListConfirmedTransactionsByAddressRIBSEC, ListConfirmedTransactionsByAddressRIBSL, ListConfirmedTransactionsByAddressRIBSP, ListConfirmedTransactionsByAddressRIBST, ListConfirmedTransactionsByAddressRIBSZ. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `ListConfirmedTransactionsByAddressRIBS` with oneOf schemas ListConfirmedTransactionsByAddressRIBSB, ListConfirmedTransactionsByAddressRIBSBC, ListConfirmedTransactionsByAddressRIBSBSC, ListConfirmedTransactionsByAddressRIBSD, ListConfirmedTransactionsByAddressRIBSD2, ListConfirmedTransactionsByAddressRIBSE, ListConfirmedTransactionsByAddressRIBSEC, ListConfirmedTransactionsByAddressRIBSL, ListConfirmedTransactionsByAddressRIBSP, ListConfirmedTransactionsByAddressRIBST, ListConfirmedTransactionsByAddressRIBSZ. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>ListConfirmedTransactionsByAddressRIBS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListConfirmedTransactionsByAddressRIBS} obj Optional instance to populate.
   * @return {module:model/ListConfirmedTransactionsByAddressRIBS} The populated <code>ListConfirmedTransactionsByAddressRIBS</code> instance.
   */
  _createClass(ListConfirmedTransactionsByAddressRIBS, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>ListConfirmedTransactionsByAddressRIBSB</code>, <code>ListConfirmedTransactionsByAddressRIBSBC</code>, <code>ListConfirmedTransactionsByAddressRIBSBSC</code>, <code>ListConfirmedTransactionsByAddressRIBSD</code>, <code>ListConfirmedTransactionsByAddressRIBSD2</code>, <code>ListConfirmedTransactionsByAddressRIBSE</code>, <code>ListConfirmedTransactionsByAddressRIBSEC</code>, <code>ListConfirmedTransactionsByAddressRIBSL</code>, <code>ListConfirmedTransactionsByAddressRIBSP</code>, <code>ListConfirmedTransactionsByAddressRIBST</code>, <code>ListConfirmedTransactionsByAddressRIBSZ</code>.
     * @return {(module:model/ListConfirmedTransactionsByAddressRIBSB|module:model/ListConfirmedTransactionsByAddressRIBSBC|module:model/ListConfirmedTransactionsByAddressRIBSBSC|module:model/ListConfirmedTransactionsByAddressRIBSD|module:model/ListConfirmedTransactionsByAddressRIBSD2|module:model/ListConfirmedTransactionsByAddressRIBSE|module:model/ListConfirmedTransactionsByAddressRIBSEC|module:model/ListConfirmedTransactionsByAddressRIBSL|module:model/ListConfirmedTransactionsByAddressRIBSP|module:model/ListConfirmedTransactionsByAddressRIBST|module:model/ListConfirmedTransactionsByAddressRIBSZ)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>ListConfirmedTransactionsByAddressRIBSB</code>, <code>ListConfirmedTransactionsByAddressRIBSBC</code>, <code>ListConfirmedTransactionsByAddressRIBSBSC</code>, <code>ListConfirmedTransactionsByAddressRIBSD</code>, <code>ListConfirmedTransactionsByAddressRIBSD2</code>, <code>ListConfirmedTransactionsByAddressRIBSE</code>, <code>ListConfirmedTransactionsByAddressRIBSEC</code>, <code>ListConfirmedTransactionsByAddressRIBSL</code>, <code>ListConfirmedTransactionsByAddressRIBSP</code>, <code>ListConfirmedTransactionsByAddressRIBST</code>, <code>ListConfirmedTransactionsByAddressRIBSZ</code>.
     * @param {(module:model/ListConfirmedTransactionsByAddressRIBSB|module:model/ListConfirmedTransactionsByAddressRIBSBC|module:model/ListConfirmedTransactionsByAddressRIBSBSC|module:model/ListConfirmedTransactionsByAddressRIBSD|module:model/ListConfirmedTransactionsByAddressRIBSD2|module:model/ListConfirmedTransactionsByAddressRIBSE|module:model/ListConfirmedTransactionsByAddressRIBSEC|module:model/ListConfirmedTransactionsByAddressRIBSL|module:model/ListConfirmedTransactionsByAddressRIBSP|module:model/ListConfirmedTransactionsByAddressRIBST|module:model/ListConfirmedTransactionsByAddressRIBSZ)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = ListConfirmedTransactionsByAddressRIBS.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new ListConfirmedTransactionsByAddressRIBS(data);
    }
  }]);
  return ListConfirmedTransactionsByAddressRIBS;
}();
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_defineProperty(ListConfirmedTransactionsByAddressRIBS, "fromJSON", function (json_string) {
  return ListConfirmedTransactionsByAddressRIBS.constructFromObject(JSON.parse(json_string));
});
ListConfirmedTransactionsByAddressRIBS.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListConfirmedTransactionsByAddressRIBS.prototype['size'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
ListConfirmedTransactionsByAddressRIBS.prototype['vSize'] = undefined;

/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
ListConfirmedTransactionsByAddressRIBS.prototype['version'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVinInner>} vin
 */
ListConfirmedTransactionsByAddressRIBS.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} vout
 */
ListConfirmedTransactionsByAddressRIBS.prototype['vout'] = undefined;

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
ListConfirmedTransactionsByAddressRIBS.prototype['contract'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListConfirmedTransactionsByAddressRIBS.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSPGasPrice} gasPrice
 */
ListConfirmedTransactionsByAddressRIBS.prototype['gasPrice'] = undefined;

/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
ListConfirmedTransactionsByAddressRIBS.prototype['gasUsed'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListConfirmedTransactionsByAddressRIBS.prototype['inputData'] = undefined;

/**
 * Rrepresentation of the internal transactions count
 * @member {Number} internalTransactionsCount
 */
ListConfirmedTransactionsByAddressRIBS.prototype['internalTransactionsCount'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListConfirmedTransactionsByAddressRIBS.prototype['nonce'] = undefined;

/**
 * Representation of the token transfers count
 * @member {Number} tokenTransfersCount
 */
ListConfirmedTransactionsByAddressRIBS.prototype['tokenTransfersCount'] = undefined;

/**
 * Representation of the transaction status
 * @member {String} transactionStatus
 */
ListConfirmedTransactionsByAddressRIBS.prototype['transactionStatus'] = undefined;

/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
ListConfirmedTransactionsByAddressRIBS.prototype['bindingSig'] = undefined;

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
ListConfirmedTransactionsByAddressRIBS.prototype['expiryHeight'] = undefined;

/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
ListConfirmedTransactionsByAddressRIBS.prototype['joinSplitPubKey'] = undefined;

/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
ListConfirmedTransactionsByAddressRIBS.prototype['joinSplitSig'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
ListConfirmedTransactionsByAddressRIBS.prototype['overwintered'] = undefined;

/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner>} vJoinSplit
 */
ListConfirmedTransactionsByAddressRIBS.prototype['vJoinSplit'] = undefined;

/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
ListConfirmedTransactionsByAddressRIBS.prototype['vShieldedOutput'] = undefined;

/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
ListConfirmedTransactionsByAddressRIBS.prototype['vShieldedSpend'] = undefined;

/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
ListConfirmedTransactionsByAddressRIBS.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
ListConfirmedTransactionsByAddressRIBS.prototype['versionGroupId'] = undefined;

/**
 * Numeric representation of the transaction used bandwidth
 * @member {String} bandwidthUsed
 */
ListConfirmedTransactionsByAddressRIBS.prototype['bandwidthUsed'] = undefined;

/**
 * String representation of the transaction used energy
 * @member {String} energyUsed
 */
ListConfirmedTransactionsByAddressRIBS.prototype['energyUsed'] = undefined;

/**
 * Defines if there are internal transactions (true) or not (false)
 * @member {Boolean} hasInternalTransactions
 */
ListConfirmedTransactionsByAddressRIBS.prototype['hasInternalTransactions'] = undefined;

/**
 * Defines if there are token transfers (true) or not (false)
 * @member {Boolean} hasTokenTransfers
 */
ListConfirmedTransactionsByAddressRIBS.prototype['hasTokenTransfers'] = undefined;
ListConfirmedTransactionsByAddressRIBS.OneOf = ["ListConfirmedTransactionsByAddressRIBSB", "ListConfirmedTransactionsByAddressRIBSBC", "ListConfirmedTransactionsByAddressRIBSBSC", "ListConfirmedTransactionsByAddressRIBSD", "ListConfirmedTransactionsByAddressRIBSD2", "ListConfirmedTransactionsByAddressRIBSE", "ListConfirmedTransactionsByAddressRIBSEC", "ListConfirmedTransactionsByAddressRIBSL", "ListConfirmedTransactionsByAddressRIBSP", "ListConfirmedTransactionsByAddressRIBST", "ListConfirmedTransactionsByAddressRIBSZ"];
var _default = ListConfirmedTransactionsByAddressRIBS;
exports["default"] = _default;