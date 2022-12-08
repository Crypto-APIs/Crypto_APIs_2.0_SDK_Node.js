"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVoutInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVoutInner"));
var _ListConfirmedTransactionsByAddressAndTimeRangeRIBSB = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressAndTimeRangeRIBSB"));
var _ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC"));
var _ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC"));
var _ListConfirmedTransactionsByAddressAndTimeRangeRIBSD = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressAndTimeRangeRIBSD"));
var _ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2 = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2"));
var _ListConfirmedTransactionsByAddressAndTimeRangeRIBSE = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressAndTimeRangeRIBSE"));
var _ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC"));
var _ListConfirmedTransactionsByAddressAndTimeRangeRIBSL = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressAndTimeRangeRIBSL"));
var _ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ"));
var _ListConfirmedTransactionsByAddressRIBSBSCGasPrice = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSBSCGasPrice"));
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
 * The ListConfirmedTransactionsByAddressAndTimeRangeRIBS model module.
 * @module model/ListConfirmedTransactionsByAddressAndTimeRangeRIBS
 * @version 1.11.0
 */
var ListConfirmedTransactionsByAddressAndTimeRangeRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBS</code>.
   * @alias module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBS
   * @param {(module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSB|module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC|module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC|module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSD|module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2|module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSE|module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC|module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSL|module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ)} instance The actual instance to initialize ListConfirmedTransactionsByAddressAndTimeRangeRIBS.
   */
  function ListConfirmedTransactionsByAddressAndTimeRangeRIBS() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, ListConfirmedTransactionsByAddressAndTimeRangeRIBS);
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
      if (typeof instance === "ListConfirmedTransactionsByAddressAndTimeRangeRIBSB") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListConfirmedTransactionsByAddressAndTimeRangeRIBSB["default"].validateJSON(instance); // throw an exception if no match
        // create ListConfirmedTransactionsByAddressAndTimeRangeRIBSB from JS object
        this.actualInstance = _ListConfirmedTransactionsByAddressAndTimeRangeRIBSB["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListConfirmedTransactionsByAddressAndTimeRangeRIBSB
      errorMessages.push("Failed to construct ListConfirmedTransactionsByAddressAndTimeRangeRIBSB: " + err);
    }
    try {
      if (typeof instance === "ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC["default"].validateJSON(instance); // throw an exception if no match
        // create ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC from JS object
        this.actualInstance = _ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC
      errorMessages.push("Failed to construct ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC: " + err);
    }
    try {
      if (typeof instance === "ListConfirmedTransactionsByAddressAndTimeRangeRIBSL") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListConfirmedTransactionsByAddressAndTimeRangeRIBSL["default"].validateJSON(instance); // throw an exception if no match
        // create ListConfirmedTransactionsByAddressAndTimeRangeRIBSL from JS object
        this.actualInstance = _ListConfirmedTransactionsByAddressAndTimeRangeRIBSL["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListConfirmedTransactionsByAddressAndTimeRangeRIBSL
      errorMessages.push("Failed to construct ListConfirmedTransactionsByAddressAndTimeRangeRIBSL: " + err);
    }
    try {
      if (typeof instance === "ListConfirmedTransactionsByAddressAndTimeRangeRIBSD") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListConfirmedTransactionsByAddressAndTimeRangeRIBSD["default"].validateJSON(instance); // throw an exception if no match
        // create ListConfirmedTransactionsByAddressAndTimeRangeRIBSD from JS object
        this.actualInstance = _ListConfirmedTransactionsByAddressAndTimeRangeRIBSD["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListConfirmedTransactionsByAddressAndTimeRangeRIBSD
      errorMessages.push("Failed to construct ListConfirmedTransactionsByAddressAndTimeRangeRIBSD: " + err);
    }
    try {
      if (typeof instance === "ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2["default"].validateJSON(instance); // throw an exception if no match
        // create ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2 from JS object
        this.actualInstance = _ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2
      errorMessages.push("Failed to construct ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2: " + err);
    }
    try {
      if (typeof instance === "ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC["default"].validateJSON(instance); // throw an exception if no match
        // create ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC from JS object
        this.actualInstance = _ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC
      errorMessages.push("Failed to construct ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC: " + err);
    }
    try {
      if (typeof instance === "ListConfirmedTransactionsByAddressAndTimeRangeRIBSE") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListConfirmedTransactionsByAddressAndTimeRangeRIBSE["default"].validateJSON(instance); // throw an exception if no match
        // create ListConfirmedTransactionsByAddressAndTimeRangeRIBSE from JS object
        this.actualInstance = _ListConfirmedTransactionsByAddressAndTimeRangeRIBSE["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListConfirmedTransactionsByAddressAndTimeRangeRIBSE
      errorMessages.push("Failed to construct ListConfirmedTransactionsByAddressAndTimeRangeRIBSE: " + err);
    }
    try {
      if (typeof instance === "ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC["default"].validateJSON(instance); // throw an exception if no match
        // create ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC from JS object
        this.actualInstance = _ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC
      errorMessages.push("Failed to construct ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC: " + err);
    }
    try {
      if (typeof instance === "ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ["default"].validateJSON(instance); // throw an exception if no match
        // create ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ from JS object
        this.actualInstance = _ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ
      errorMessages.push("Failed to construct ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `ListConfirmedTransactionsByAddressAndTimeRangeRIBS` with oneOf schemas ListConfirmedTransactionsByAddressAndTimeRangeRIBSB, ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC, ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC, ListConfirmedTransactionsByAddressAndTimeRangeRIBSD, ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2, ListConfirmedTransactionsByAddressAndTimeRangeRIBSE, ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC, ListConfirmedTransactionsByAddressAndTimeRangeRIBSL, ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `ListConfirmedTransactionsByAddressAndTimeRangeRIBS` with oneOf schemas ListConfirmedTransactionsByAddressAndTimeRangeRIBSB, ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC, ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC, ListConfirmedTransactionsByAddressAndTimeRangeRIBSD, ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2, ListConfirmedTransactionsByAddressAndTimeRangeRIBSE, ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC, ListConfirmedTransactionsByAddressAndTimeRangeRIBSL, ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBS} obj Optional instance to populate.
   * @return {module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBS} The populated <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBS</code> instance.
   */
  _createClass(ListConfirmedTransactionsByAddressAndTimeRangeRIBS, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBSB</code>, <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC</code>, <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC</code>, <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBSD</code>, <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2</code>, <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBSE</code>, <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC</code>, <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBSL</code>, <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ</code>.
     * @return {(module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSB|module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC|module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC|module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSD|module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2|module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSE|module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC|module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSL|module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBSB</code>, <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC</code>, <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC</code>, <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBSD</code>, <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2</code>, <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBSE</code>, <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC</code>, <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBSL</code>, <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ</code>.
     * @param {(module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSB|module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC|module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC|module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSD|module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2|module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSE|module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC|module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSL|module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = ListConfirmedTransactionsByAddressAndTimeRangeRIBS.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new ListConfirmedTransactionsByAddressAndTimeRangeRIBS(data);
    }
  }]);
  return ListConfirmedTransactionsByAddressAndTimeRangeRIBS;
}();
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_defineProperty(ListConfirmedTransactionsByAddressAndTimeRangeRIBS, "fromJSON", function (json_string) {
  return ListConfirmedTransactionsByAddressAndTimeRangeRIBS.constructFromObject(JSON.parse(json_string));
});
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['size'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['vSize'] = undefined;

/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['version'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVinInner>} vin
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} vout
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['vout'] = undefined;

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['contract'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSBSCGasPrice} gasPrice
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['gasPrice'] = undefined;

/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['gasUsed'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['nonce'] = undefined;

/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['transactionStatus'] = undefined;

/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['bindingSig'] = undefined;

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['expiryHeight'] = undefined;

/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['joinSplitPubKey'] = undefined;

/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['joinSplitSig'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['overwintered'] = undefined;

/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner>} vJoinSplit
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['vJoinSplit'] = undefined;

/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['vShieldedOutput'] = undefined;

/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['vShieldedSpend'] = undefined;

/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['versionGroupId'] = undefined;
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.OneOf = ["ListConfirmedTransactionsByAddressAndTimeRangeRIBSB", "ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC", "ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC", "ListConfirmedTransactionsByAddressAndTimeRangeRIBSD", "ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2", "ListConfirmedTransactionsByAddressAndTimeRangeRIBSE", "ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC", "ListConfirmedTransactionsByAddressAndTimeRangeRIBSL", "ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ"];
var _default = ListConfirmedTransactionsByAddressAndTimeRangeRIBS;
exports["default"] = _default;