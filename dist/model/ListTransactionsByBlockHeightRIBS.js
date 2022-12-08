"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner"));
var _ListTransactionsByBlockHeightRIBSB = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSB"));
var _ListTransactionsByBlockHeightRIBSBC = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSBC"));
var _ListTransactionsByBlockHeightRIBSBSC = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSBSC"));
var _ListTransactionsByBlockHeightRIBSBSCGasPrice = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSBSCGasPrice"));
var _ListTransactionsByBlockHeightRIBSD = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSD"));
var _ListTransactionsByBlockHeightRIBSD2 = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSD2"));
var _ListTransactionsByBlockHeightRIBSE = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSE"));
var _ListTransactionsByBlockHeightRIBSEC = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSEC"));
var _ListTransactionsByBlockHeightRIBSL = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSL"));
var _ListTransactionsByBlockHeightRIBSZ = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSZ"));
var _ListTransactionsByBlockHeightRIBSZVJoinSplitInner = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSZVJoinSplitInner"));
var _ListTransactionsByBlockHeightRIBSZVShieldedOutputInner = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSZVShieldedOutputInner"));
var _ListTransactionsByBlockHeightRIBSZVinInner = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSZVinInner"));
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
 * The ListTransactionsByBlockHeightRIBS model module.
 * @module model/ListTransactionsByBlockHeightRIBS
 * @version 1.11.0
 */
var ListTransactionsByBlockHeightRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHeightRIBS</code>.
   * @alias module:model/ListTransactionsByBlockHeightRIBS
   * @param {(module:model/ListTransactionsByBlockHeightRIBSB|module:model/ListTransactionsByBlockHeightRIBSBC|module:model/ListTransactionsByBlockHeightRIBSBSC|module:model/ListTransactionsByBlockHeightRIBSD|module:model/ListTransactionsByBlockHeightRIBSD2|module:model/ListTransactionsByBlockHeightRIBSE|module:model/ListTransactionsByBlockHeightRIBSEC|module:model/ListTransactionsByBlockHeightRIBSL|module:model/ListTransactionsByBlockHeightRIBSZ)} instance The actual instance to initialize ListTransactionsByBlockHeightRIBS.
   */
  function ListTransactionsByBlockHeightRIBS() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, ListTransactionsByBlockHeightRIBS);
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
      if (typeof instance === "ListTransactionsByBlockHeightRIBSB") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListTransactionsByBlockHeightRIBSB["default"].validateJSON(instance); // throw an exception if no match
        // create ListTransactionsByBlockHeightRIBSB from JS object
        this.actualInstance = _ListTransactionsByBlockHeightRIBSB["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListTransactionsByBlockHeightRIBSB
      errorMessages.push("Failed to construct ListTransactionsByBlockHeightRIBSB: " + err);
    }
    try {
      if (typeof instance === "ListTransactionsByBlockHeightRIBSE") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListTransactionsByBlockHeightRIBSE["default"].validateJSON(instance); // throw an exception if no match
        // create ListTransactionsByBlockHeightRIBSE from JS object
        this.actualInstance = _ListTransactionsByBlockHeightRIBSE["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListTransactionsByBlockHeightRIBSE
      errorMessages.push("Failed to construct ListTransactionsByBlockHeightRIBSE: " + err);
    }
    try {
      if (typeof instance === "ListTransactionsByBlockHeightRIBSD") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListTransactionsByBlockHeightRIBSD["default"].validateJSON(instance); // throw an exception if no match
        // create ListTransactionsByBlockHeightRIBSD from JS object
        this.actualInstance = _ListTransactionsByBlockHeightRIBSD["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListTransactionsByBlockHeightRIBSD
      errorMessages.push("Failed to construct ListTransactionsByBlockHeightRIBSD: " + err);
    }
    try {
      if (typeof instance === "ListTransactionsByBlockHeightRIBSD2") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListTransactionsByBlockHeightRIBSD2["default"].validateJSON(instance); // throw an exception if no match
        // create ListTransactionsByBlockHeightRIBSD2 from JS object
        this.actualInstance = _ListTransactionsByBlockHeightRIBSD2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListTransactionsByBlockHeightRIBSD2
      errorMessages.push("Failed to construct ListTransactionsByBlockHeightRIBSD2: " + err);
    }
    try {
      if (typeof instance === "ListTransactionsByBlockHeightRIBSL") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListTransactionsByBlockHeightRIBSL["default"].validateJSON(instance); // throw an exception if no match
        // create ListTransactionsByBlockHeightRIBSL from JS object
        this.actualInstance = _ListTransactionsByBlockHeightRIBSL["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListTransactionsByBlockHeightRIBSL
      errorMessages.push("Failed to construct ListTransactionsByBlockHeightRIBSL: " + err);
    }
    try {
      if (typeof instance === "ListTransactionsByBlockHeightRIBSBC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListTransactionsByBlockHeightRIBSBC["default"].validateJSON(instance); // throw an exception if no match
        // create ListTransactionsByBlockHeightRIBSBC from JS object
        this.actualInstance = _ListTransactionsByBlockHeightRIBSBC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListTransactionsByBlockHeightRIBSBC
      errorMessages.push("Failed to construct ListTransactionsByBlockHeightRIBSBC: " + err);
    }
    try {
      if (typeof instance === "ListTransactionsByBlockHeightRIBSEC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListTransactionsByBlockHeightRIBSEC["default"].validateJSON(instance); // throw an exception if no match
        // create ListTransactionsByBlockHeightRIBSEC from JS object
        this.actualInstance = _ListTransactionsByBlockHeightRIBSEC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListTransactionsByBlockHeightRIBSEC
      errorMessages.push("Failed to construct ListTransactionsByBlockHeightRIBSEC: " + err);
    }
    try {
      if (typeof instance === "ListTransactionsByBlockHeightRIBSBSC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListTransactionsByBlockHeightRIBSBSC["default"].validateJSON(instance); // throw an exception if no match
        // create ListTransactionsByBlockHeightRIBSBSC from JS object
        this.actualInstance = _ListTransactionsByBlockHeightRIBSBSC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListTransactionsByBlockHeightRIBSBSC
      errorMessages.push("Failed to construct ListTransactionsByBlockHeightRIBSBSC: " + err);
    }
    try {
      if (typeof instance === "ListTransactionsByBlockHeightRIBSZ") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListTransactionsByBlockHeightRIBSZ["default"].validateJSON(instance); // throw an exception if no match
        // create ListTransactionsByBlockHeightRIBSZ from JS object
        this.actualInstance = _ListTransactionsByBlockHeightRIBSZ["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListTransactionsByBlockHeightRIBSZ
      errorMessages.push("Failed to construct ListTransactionsByBlockHeightRIBSZ: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `ListTransactionsByBlockHeightRIBS` with oneOf schemas ListTransactionsByBlockHeightRIBSB, ListTransactionsByBlockHeightRIBSBC, ListTransactionsByBlockHeightRIBSBSC, ListTransactionsByBlockHeightRIBSD, ListTransactionsByBlockHeightRIBSD2, ListTransactionsByBlockHeightRIBSE, ListTransactionsByBlockHeightRIBSEC, ListTransactionsByBlockHeightRIBSL, ListTransactionsByBlockHeightRIBSZ. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `ListTransactionsByBlockHeightRIBS` with oneOf schemas ListTransactionsByBlockHeightRIBSB, ListTransactionsByBlockHeightRIBSBC, ListTransactionsByBlockHeightRIBSBSC, ListTransactionsByBlockHeightRIBSD, ListTransactionsByBlockHeightRIBSD2, ListTransactionsByBlockHeightRIBSE, ListTransactionsByBlockHeightRIBSEC, ListTransactionsByBlockHeightRIBSL, ListTransactionsByBlockHeightRIBSZ. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>ListTransactionsByBlockHeightRIBS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListTransactionsByBlockHeightRIBS} obj Optional instance to populate.
   * @return {module:model/ListTransactionsByBlockHeightRIBS} The populated <code>ListTransactionsByBlockHeightRIBS</code> instance.
   */
  _createClass(ListTransactionsByBlockHeightRIBS, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>ListTransactionsByBlockHeightRIBSB</code>, <code>ListTransactionsByBlockHeightRIBSBC</code>, <code>ListTransactionsByBlockHeightRIBSBSC</code>, <code>ListTransactionsByBlockHeightRIBSD</code>, <code>ListTransactionsByBlockHeightRIBSD2</code>, <code>ListTransactionsByBlockHeightRIBSE</code>, <code>ListTransactionsByBlockHeightRIBSEC</code>, <code>ListTransactionsByBlockHeightRIBSL</code>, <code>ListTransactionsByBlockHeightRIBSZ</code>.
     * @return {(module:model/ListTransactionsByBlockHeightRIBSB|module:model/ListTransactionsByBlockHeightRIBSBC|module:model/ListTransactionsByBlockHeightRIBSBSC|module:model/ListTransactionsByBlockHeightRIBSD|module:model/ListTransactionsByBlockHeightRIBSD2|module:model/ListTransactionsByBlockHeightRIBSE|module:model/ListTransactionsByBlockHeightRIBSEC|module:model/ListTransactionsByBlockHeightRIBSL|module:model/ListTransactionsByBlockHeightRIBSZ)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>ListTransactionsByBlockHeightRIBSB</code>, <code>ListTransactionsByBlockHeightRIBSBC</code>, <code>ListTransactionsByBlockHeightRIBSBSC</code>, <code>ListTransactionsByBlockHeightRIBSD</code>, <code>ListTransactionsByBlockHeightRIBSD2</code>, <code>ListTransactionsByBlockHeightRIBSE</code>, <code>ListTransactionsByBlockHeightRIBSEC</code>, <code>ListTransactionsByBlockHeightRIBSL</code>, <code>ListTransactionsByBlockHeightRIBSZ</code>.
     * @param {(module:model/ListTransactionsByBlockHeightRIBSB|module:model/ListTransactionsByBlockHeightRIBSBC|module:model/ListTransactionsByBlockHeightRIBSBSC|module:model/ListTransactionsByBlockHeightRIBSD|module:model/ListTransactionsByBlockHeightRIBSD2|module:model/ListTransactionsByBlockHeightRIBSE|module:model/ListTransactionsByBlockHeightRIBSEC|module:model/ListTransactionsByBlockHeightRIBSL|module:model/ListTransactionsByBlockHeightRIBSZ)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = ListTransactionsByBlockHeightRIBS.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new ListTransactionsByBlockHeightRIBS(data);
    }
  }]);
  return ListTransactionsByBlockHeightRIBS;
}();
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
_defineProperty(ListTransactionsByBlockHeightRIBS, "fromJSON", function (json_string) {
  return ListTransactionsByBlockHeightRIBS.constructFromObject(JSON.parse(json_string));
});
ListTransactionsByBlockHeightRIBS.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByBlockHeightRIBS.prototype['size'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
ListTransactionsByBlockHeightRIBS.prototype['vSize'] = undefined;

/**
 * Represents the transaction version number.
 * @member {Number} version
 */
ListTransactionsByBlockHeightRIBS.prototype['version'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVinInner>} vin
 */
ListTransactionsByBlockHeightRIBS.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVoutInner>} vout
 */
ListTransactionsByBlockHeightRIBS.prototype['vout'] = undefined;

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
ListTransactionsByBlockHeightRIBS.prototype['contract'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListTransactionsByBlockHeightRIBS.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/ListTransactionsByBlockHeightRIBSBSCGasPrice} gasPrice
 */
ListTransactionsByBlockHeightRIBS.prototype['gasPrice'] = undefined;

/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
ListTransactionsByBlockHeightRIBS.prototype['gasUsed'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListTransactionsByBlockHeightRIBS.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListTransactionsByBlockHeightRIBS.prototype['nonce'] = undefined;

/**
 * Represents the status of this transaction
 * @member {String} transactionStatus
 */
ListTransactionsByBlockHeightRIBS.prototype['transactionStatus'] = undefined;

/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
ListTransactionsByBlockHeightRIBS.prototype['bindingSig'] = undefined;

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
ListTransactionsByBlockHeightRIBS.prototype['expiryHeight'] = undefined;

/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
ListTransactionsByBlockHeightRIBS.prototype['joinSplitPubKey'] = undefined;

/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
ListTransactionsByBlockHeightRIBS.prototype['joinSplitSig'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
ListTransactionsByBlockHeightRIBS.prototype['overwintered'] = undefined;

/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVJoinSplitInner>} vJoinSplit
 */
ListTransactionsByBlockHeightRIBS.prototype['vJoinSplit'] = undefined;

/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVShieldedOutputInner>} vShieldedOutput
 */
ListTransactionsByBlockHeightRIBS.prototype['vShieldedOutput'] = undefined;

/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
ListTransactionsByBlockHeightRIBS.prototype['vShieldedSpend'] = undefined;

/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
ListTransactionsByBlockHeightRIBS.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
ListTransactionsByBlockHeightRIBS.prototype['versionGroupId'] = undefined;
ListTransactionsByBlockHeightRIBS.OneOf = ["ListTransactionsByBlockHeightRIBSB", "ListTransactionsByBlockHeightRIBSBC", "ListTransactionsByBlockHeightRIBSBSC", "ListTransactionsByBlockHeightRIBSD", "ListTransactionsByBlockHeightRIBSD2", "ListTransactionsByBlockHeightRIBSE", "ListTransactionsByBlockHeightRIBSEC", "ListTransactionsByBlockHeightRIBSL", "ListTransactionsByBlockHeightRIBSZ"];
var _default = ListTransactionsByBlockHeightRIBS;
exports["default"] = _default;