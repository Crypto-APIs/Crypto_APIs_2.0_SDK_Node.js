"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVoutInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVoutInner"));
var _ListTransactionsByBlockHashRIBSB = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSB"));
var _ListTransactionsByBlockHashRIBSBC = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSBC"));
var _ListTransactionsByBlockHashRIBSBSC = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSBSC"));
var _ListTransactionsByBlockHashRIBSBSCGasPrice = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSBSCGasPrice"));
var _ListTransactionsByBlockHashRIBSD = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSD"));
var _ListTransactionsByBlockHashRIBSD2 = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSD2"));
var _ListTransactionsByBlockHashRIBSE = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSE"));
var _ListTransactionsByBlockHashRIBSEC = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSEC"));
var _ListTransactionsByBlockHashRIBSL = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSL"));
var _ListTransactionsByBlockHashRIBSZ = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSZ"));
var _ListTransactionsByBlockHashRIBSZVJoinSplitInner = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSZVJoinSplitInner"));
var _ListTransactionsByBlockHashRIBSZVinInner = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSZVinInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListTransactionsByBlockHashRIBS model module.
 * @module model/ListTransactionsByBlockHashRIBS
 * @version 1.11.0
 */
var ListTransactionsByBlockHashRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHashRIBS</code>.
   * @alias module:model/ListTransactionsByBlockHashRIBS
   * @param {(module:model/ListTransactionsByBlockHashRIBSB|module:model/ListTransactionsByBlockHashRIBSBC|module:model/ListTransactionsByBlockHashRIBSBSC|module:model/ListTransactionsByBlockHashRIBSD|module:model/ListTransactionsByBlockHashRIBSD2|module:model/ListTransactionsByBlockHashRIBSE|module:model/ListTransactionsByBlockHashRIBSEC|module:model/ListTransactionsByBlockHashRIBSL|module:model/ListTransactionsByBlockHashRIBSZ)} instance The actual instance to initialize ListTransactionsByBlockHashRIBS.
   */
  function ListTransactionsByBlockHashRIBS() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, ListTransactionsByBlockHashRIBS);
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
      if (typeof instance === "ListTransactionsByBlockHashRIBSB") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListTransactionsByBlockHashRIBSB["default"].validateJSON(instance); // throw an exception if no match
        // create ListTransactionsByBlockHashRIBSB from JS object
        this.actualInstance = _ListTransactionsByBlockHashRIBSB["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListTransactionsByBlockHashRIBSB
      errorMessages.push("Failed to construct ListTransactionsByBlockHashRIBSB: " + err);
    }
    try {
      if (typeof instance === "ListTransactionsByBlockHashRIBSBC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListTransactionsByBlockHashRIBSBC["default"].validateJSON(instance); // throw an exception if no match
        // create ListTransactionsByBlockHashRIBSBC from JS object
        this.actualInstance = _ListTransactionsByBlockHashRIBSBC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListTransactionsByBlockHashRIBSBC
      errorMessages.push("Failed to construct ListTransactionsByBlockHashRIBSBC: " + err);
    }
    try {
      if (typeof instance === "ListTransactionsByBlockHashRIBSL") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListTransactionsByBlockHashRIBSL["default"].validateJSON(instance); // throw an exception if no match
        // create ListTransactionsByBlockHashRIBSL from JS object
        this.actualInstance = _ListTransactionsByBlockHashRIBSL["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListTransactionsByBlockHashRIBSL
      errorMessages.push("Failed to construct ListTransactionsByBlockHashRIBSL: " + err);
    }
    try {
      if (typeof instance === "ListTransactionsByBlockHashRIBSD") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListTransactionsByBlockHashRIBSD["default"].validateJSON(instance); // throw an exception if no match
        // create ListTransactionsByBlockHashRIBSD from JS object
        this.actualInstance = _ListTransactionsByBlockHashRIBSD["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListTransactionsByBlockHashRIBSD
      errorMessages.push("Failed to construct ListTransactionsByBlockHashRIBSD: " + err);
    }
    try {
      if (typeof instance === "ListTransactionsByBlockHashRIBSD2") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListTransactionsByBlockHashRIBSD2["default"].validateJSON(instance); // throw an exception if no match
        // create ListTransactionsByBlockHashRIBSD2 from JS object
        this.actualInstance = _ListTransactionsByBlockHashRIBSD2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListTransactionsByBlockHashRIBSD2
      errorMessages.push("Failed to construct ListTransactionsByBlockHashRIBSD2: " + err);
    }
    try {
      if (typeof instance === "ListTransactionsByBlockHashRIBSE") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListTransactionsByBlockHashRIBSE["default"].validateJSON(instance); // throw an exception if no match
        // create ListTransactionsByBlockHashRIBSE from JS object
        this.actualInstance = _ListTransactionsByBlockHashRIBSE["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListTransactionsByBlockHashRIBSE
      errorMessages.push("Failed to construct ListTransactionsByBlockHashRIBSE: " + err);
    }
    try {
      if (typeof instance === "ListTransactionsByBlockHashRIBSEC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListTransactionsByBlockHashRIBSEC["default"].validateJSON(instance); // throw an exception if no match
        // create ListTransactionsByBlockHashRIBSEC from JS object
        this.actualInstance = _ListTransactionsByBlockHashRIBSEC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListTransactionsByBlockHashRIBSEC
      errorMessages.push("Failed to construct ListTransactionsByBlockHashRIBSEC: " + err);
    }
    try {
      if (typeof instance === "ListTransactionsByBlockHashRIBSBSC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListTransactionsByBlockHashRIBSBSC["default"].validateJSON(instance); // throw an exception if no match
        // create ListTransactionsByBlockHashRIBSBSC from JS object
        this.actualInstance = _ListTransactionsByBlockHashRIBSBSC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListTransactionsByBlockHashRIBSBSC
      errorMessages.push("Failed to construct ListTransactionsByBlockHashRIBSBSC: " + err);
    }
    try {
      if (typeof instance === "ListTransactionsByBlockHashRIBSZ") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListTransactionsByBlockHashRIBSZ["default"].validateJSON(instance); // throw an exception if no match
        // create ListTransactionsByBlockHashRIBSZ from JS object
        this.actualInstance = _ListTransactionsByBlockHashRIBSZ["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListTransactionsByBlockHashRIBSZ
      errorMessages.push("Failed to construct ListTransactionsByBlockHashRIBSZ: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `ListTransactionsByBlockHashRIBS` with oneOf schemas ListTransactionsByBlockHashRIBSB, ListTransactionsByBlockHashRIBSBC, ListTransactionsByBlockHashRIBSBSC, ListTransactionsByBlockHashRIBSD, ListTransactionsByBlockHashRIBSD2, ListTransactionsByBlockHashRIBSE, ListTransactionsByBlockHashRIBSEC, ListTransactionsByBlockHashRIBSL, ListTransactionsByBlockHashRIBSZ. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `ListTransactionsByBlockHashRIBS` with oneOf schemas ListTransactionsByBlockHashRIBSB, ListTransactionsByBlockHashRIBSBC, ListTransactionsByBlockHashRIBSBSC, ListTransactionsByBlockHashRIBSD, ListTransactionsByBlockHashRIBSD2, ListTransactionsByBlockHashRIBSE, ListTransactionsByBlockHashRIBSEC, ListTransactionsByBlockHashRIBSL, ListTransactionsByBlockHashRIBSZ. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>ListTransactionsByBlockHashRIBS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListTransactionsByBlockHashRIBS} obj Optional instance to populate.
   * @return {module:model/ListTransactionsByBlockHashRIBS} The populated <code>ListTransactionsByBlockHashRIBS</code> instance.
   */
  _createClass(ListTransactionsByBlockHashRIBS, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>ListTransactionsByBlockHashRIBSB</code>, <code>ListTransactionsByBlockHashRIBSBC</code>, <code>ListTransactionsByBlockHashRIBSBSC</code>, <code>ListTransactionsByBlockHashRIBSD</code>, <code>ListTransactionsByBlockHashRIBSD2</code>, <code>ListTransactionsByBlockHashRIBSE</code>, <code>ListTransactionsByBlockHashRIBSEC</code>, <code>ListTransactionsByBlockHashRIBSL</code>, <code>ListTransactionsByBlockHashRIBSZ</code>.
     * @return {(module:model/ListTransactionsByBlockHashRIBSB|module:model/ListTransactionsByBlockHashRIBSBC|module:model/ListTransactionsByBlockHashRIBSBSC|module:model/ListTransactionsByBlockHashRIBSD|module:model/ListTransactionsByBlockHashRIBSD2|module:model/ListTransactionsByBlockHashRIBSE|module:model/ListTransactionsByBlockHashRIBSEC|module:model/ListTransactionsByBlockHashRIBSL|module:model/ListTransactionsByBlockHashRIBSZ)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>ListTransactionsByBlockHashRIBSB</code>, <code>ListTransactionsByBlockHashRIBSBC</code>, <code>ListTransactionsByBlockHashRIBSBSC</code>, <code>ListTransactionsByBlockHashRIBSD</code>, <code>ListTransactionsByBlockHashRIBSD2</code>, <code>ListTransactionsByBlockHashRIBSE</code>, <code>ListTransactionsByBlockHashRIBSEC</code>, <code>ListTransactionsByBlockHashRIBSL</code>, <code>ListTransactionsByBlockHashRIBSZ</code>.
     * @param {(module:model/ListTransactionsByBlockHashRIBSB|module:model/ListTransactionsByBlockHashRIBSBC|module:model/ListTransactionsByBlockHashRIBSBSC|module:model/ListTransactionsByBlockHashRIBSD|module:model/ListTransactionsByBlockHashRIBSD2|module:model/ListTransactionsByBlockHashRIBSE|module:model/ListTransactionsByBlockHashRIBSEC|module:model/ListTransactionsByBlockHashRIBSL|module:model/ListTransactionsByBlockHashRIBSZ)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = ListTransactionsByBlockHashRIBS.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new ListTransactionsByBlockHashRIBS(data);
    }
  }]);
  return ListTransactionsByBlockHashRIBS;
}();
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
_defineProperty(ListTransactionsByBlockHashRIBS, "fromJSON", function (json_string) {
  return ListTransactionsByBlockHashRIBS.constructFromObject(JSON.parse(json_string));
});
ListTransactionsByBlockHashRIBS.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByBlockHashRIBS.prototype['size'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
ListTransactionsByBlockHashRIBS.prototype['vSize'] = undefined;

/**
 * Numeric representation of the transaction Represents the transaction version number.
 * @member {Number} version
 */
ListTransactionsByBlockHashRIBS.prototype['version'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSZVinInner>} vin
 */
ListTransactionsByBlockHashRIBS.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} vout
 */
ListTransactionsByBlockHashRIBS.prototype['vout'] = undefined;

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
ListTransactionsByBlockHashRIBS.prototype['contract'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListTransactionsByBlockHashRIBS.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/ListTransactionsByBlockHashRIBSBSCGasPrice} gasPrice
 */
ListTransactionsByBlockHashRIBS.prototype['gasPrice'] = undefined;

/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
ListTransactionsByBlockHashRIBS.prototype['gasUsed'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListTransactionsByBlockHashRIBS.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListTransactionsByBlockHashRIBS.prototype['nonce'] = undefined;

/**
 * Represents the status of this transaction
 * @member {String} transactionStatus
 */
ListTransactionsByBlockHashRIBS.prototype['transactionStatus'] = undefined;

/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
ListTransactionsByBlockHashRIBS.prototype['bindingSig'] = undefined;

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
ListTransactionsByBlockHashRIBS.prototype['expiryHeight'] = undefined;

/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
ListTransactionsByBlockHashRIBS.prototype['joinSplitPubKey'] = undefined;

/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
ListTransactionsByBlockHashRIBS.prototype['joinSplitSig'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
ListTransactionsByBlockHashRIBS.prototype['overwintered'] = undefined;

/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSZVJoinSplitInner>} vJoinSplit
 */
ListTransactionsByBlockHashRIBS.prototype['vJoinSplit'] = undefined;

/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
ListTransactionsByBlockHashRIBS.prototype['vShieldedOutput'] = undefined;

/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
ListTransactionsByBlockHashRIBS.prototype['vShieldedSpend'] = undefined;

/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
ListTransactionsByBlockHashRIBS.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
ListTransactionsByBlockHashRIBS.prototype['versionGroupId'] = undefined;
ListTransactionsByBlockHashRIBS.OneOf = ["ListTransactionsByBlockHashRIBSB", "ListTransactionsByBlockHashRIBSBC", "ListTransactionsByBlockHashRIBSBSC", "ListTransactionsByBlockHashRIBSD", "ListTransactionsByBlockHashRIBSD2", "ListTransactionsByBlockHashRIBSE", "ListTransactionsByBlockHashRIBSEC", "ListTransactionsByBlockHashRIBSL", "ListTransactionsByBlockHashRIBSZ"];
var _default = ListTransactionsByBlockHashRIBS;
exports["default"] = _default;