"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVinInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVinInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVoutInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVoutInner"));
var _ListConfirmedTransactionsByAddressRIBSBSCGasPrice = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSBSCGasPrice"));
var _ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner"));
var _ListUnconfirmedTransactionsByAddressRIBSB = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSB"));
var _ListUnconfirmedTransactionsByAddressRIBSBC = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSBC"));
var _ListUnconfirmedTransactionsByAddressRIBSBSC = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSBSC"));
var _ListUnconfirmedTransactionsByAddressRIBSD = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSD"));
var _ListUnconfirmedTransactionsByAddressRIBSD2 = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSD2"));
var _ListUnconfirmedTransactionsByAddressRIBSE = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSE"));
var _ListUnconfirmedTransactionsByAddressRIBSEC = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSEC"));
var _ListUnconfirmedTransactionsByAddressRIBSECFee = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSECFee"));
var _ListUnconfirmedTransactionsByAddressRIBSL = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSL"));
var _ListUnconfirmedTransactionsByAddressRIBSZ = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSZ"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListUnconfirmedTransactionsByAddressRIBS model module.
 * @module model/ListUnconfirmedTransactionsByAddressRIBS
 * @version 1.11.0
 */
var ListUnconfirmedTransactionsByAddressRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListUnconfirmedTransactionsByAddressRIBS</code>.
   * @alias module:model/ListUnconfirmedTransactionsByAddressRIBS
   * @param {(module:model/ListUnconfirmedTransactionsByAddressRIBSB|module:model/ListUnconfirmedTransactionsByAddressRIBSBC|module:model/ListUnconfirmedTransactionsByAddressRIBSBSC|module:model/ListUnconfirmedTransactionsByAddressRIBSD|module:model/ListUnconfirmedTransactionsByAddressRIBSD2|module:model/ListUnconfirmedTransactionsByAddressRIBSE|module:model/ListUnconfirmedTransactionsByAddressRIBSEC|module:model/ListUnconfirmedTransactionsByAddressRIBSL|module:model/ListUnconfirmedTransactionsByAddressRIBSZ)} instance The actual instance to initialize ListUnconfirmedTransactionsByAddressRIBS.
   */
  function ListUnconfirmedTransactionsByAddressRIBS() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, ListUnconfirmedTransactionsByAddressRIBS);
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
      if (typeof instance === "ListUnconfirmedTransactionsByAddressRIBSB") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListUnconfirmedTransactionsByAddressRIBSB["default"].validateJSON(instance); // throw an exception if no match
        // create ListUnconfirmedTransactionsByAddressRIBSB from JS object
        this.actualInstance = _ListUnconfirmedTransactionsByAddressRIBSB["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListUnconfirmedTransactionsByAddressRIBSB
      errorMessages.push("Failed to construct ListUnconfirmedTransactionsByAddressRIBSB: " + err);
    }
    try {
      if (typeof instance === "ListUnconfirmedTransactionsByAddressRIBSBC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListUnconfirmedTransactionsByAddressRIBSBC["default"].validateJSON(instance); // throw an exception if no match
        // create ListUnconfirmedTransactionsByAddressRIBSBC from JS object
        this.actualInstance = _ListUnconfirmedTransactionsByAddressRIBSBC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListUnconfirmedTransactionsByAddressRIBSBC
      errorMessages.push("Failed to construct ListUnconfirmedTransactionsByAddressRIBSBC: " + err);
    }
    try {
      if (typeof instance === "ListUnconfirmedTransactionsByAddressRIBSL") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListUnconfirmedTransactionsByAddressRIBSL["default"].validateJSON(instance); // throw an exception if no match
        // create ListUnconfirmedTransactionsByAddressRIBSL from JS object
        this.actualInstance = _ListUnconfirmedTransactionsByAddressRIBSL["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListUnconfirmedTransactionsByAddressRIBSL
      errorMessages.push("Failed to construct ListUnconfirmedTransactionsByAddressRIBSL: " + err);
    }
    try {
      if (typeof instance === "ListUnconfirmedTransactionsByAddressRIBSD") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListUnconfirmedTransactionsByAddressRIBSD["default"].validateJSON(instance); // throw an exception if no match
        // create ListUnconfirmedTransactionsByAddressRIBSD from JS object
        this.actualInstance = _ListUnconfirmedTransactionsByAddressRIBSD["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListUnconfirmedTransactionsByAddressRIBSD
      errorMessages.push("Failed to construct ListUnconfirmedTransactionsByAddressRIBSD: " + err);
    }
    try {
      if (typeof instance === "ListUnconfirmedTransactionsByAddressRIBSD2") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListUnconfirmedTransactionsByAddressRIBSD2["default"].validateJSON(instance); // throw an exception if no match
        // create ListUnconfirmedTransactionsByAddressRIBSD2 from JS object
        this.actualInstance = _ListUnconfirmedTransactionsByAddressRIBSD2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListUnconfirmedTransactionsByAddressRIBSD2
      errorMessages.push("Failed to construct ListUnconfirmedTransactionsByAddressRIBSD2: " + err);
    }
    try {
      if (typeof instance === "ListUnconfirmedTransactionsByAddressRIBSE") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListUnconfirmedTransactionsByAddressRIBSE["default"].validateJSON(instance); // throw an exception if no match
        // create ListUnconfirmedTransactionsByAddressRIBSE from JS object
        this.actualInstance = _ListUnconfirmedTransactionsByAddressRIBSE["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListUnconfirmedTransactionsByAddressRIBSE
      errorMessages.push("Failed to construct ListUnconfirmedTransactionsByAddressRIBSE: " + err);
    }
    try {
      if (typeof instance === "ListUnconfirmedTransactionsByAddressRIBSEC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListUnconfirmedTransactionsByAddressRIBSEC["default"].validateJSON(instance); // throw an exception if no match
        // create ListUnconfirmedTransactionsByAddressRIBSEC from JS object
        this.actualInstance = _ListUnconfirmedTransactionsByAddressRIBSEC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListUnconfirmedTransactionsByAddressRIBSEC
      errorMessages.push("Failed to construct ListUnconfirmedTransactionsByAddressRIBSEC: " + err);
    }
    try {
      if (typeof instance === "ListUnconfirmedTransactionsByAddressRIBSZ") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListUnconfirmedTransactionsByAddressRIBSZ["default"].validateJSON(instance); // throw an exception if no match
        // create ListUnconfirmedTransactionsByAddressRIBSZ from JS object
        this.actualInstance = _ListUnconfirmedTransactionsByAddressRIBSZ["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListUnconfirmedTransactionsByAddressRIBSZ
      errorMessages.push("Failed to construct ListUnconfirmedTransactionsByAddressRIBSZ: " + err);
    }
    try {
      if (typeof instance === "ListUnconfirmedTransactionsByAddressRIBSBSC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListUnconfirmedTransactionsByAddressRIBSBSC["default"].validateJSON(instance); // throw an exception if no match
        // create ListUnconfirmedTransactionsByAddressRIBSBSC from JS object
        this.actualInstance = _ListUnconfirmedTransactionsByAddressRIBSBSC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListUnconfirmedTransactionsByAddressRIBSBSC
      errorMessages.push("Failed to construct ListUnconfirmedTransactionsByAddressRIBSBSC: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `ListUnconfirmedTransactionsByAddressRIBS` with oneOf schemas ListUnconfirmedTransactionsByAddressRIBSB, ListUnconfirmedTransactionsByAddressRIBSBC, ListUnconfirmedTransactionsByAddressRIBSBSC, ListUnconfirmedTransactionsByAddressRIBSD, ListUnconfirmedTransactionsByAddressRIBSD2, ListUnconfirmedTransactionsByAddressRIBSE, ListUnconfirmedTransactionsByAddressRIBSEC, ListUnconfirmedTransactionsByAddressRIBSL, ListUnconfirmedTransactionsByAddressRIBSZ. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `ListUnconfirmedTransactionsByAddressRIBS` with oneOf schemas ListUnconfirmedTransactionsByAddressRIBSB, ListUnconfirmedTransactionsByAddressRIBSBC, ListUnconfirmedTransactionsByAddressRIBSBSC, ListUnconfirmedTransactionsByAddressRIBSD, ListUnconfirmedTransactionsByAddressRIBSD2, ListUnconfirmedTransactionsByAddressRIBSE, ListUnconfirmedTransactionsByAddressRIBSEC, ListUnconfirmedTransactionsByAddressRIBSL, ListUnconfirmedTransactionsByAddressRIBSZ. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>ListUnconfirmedTransactionsByAddressRIBS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListUnconfirmedTransactionsByAddressRIBS} obj Optional instance to populate.
   * @return {module:model/ListUnconfirmedTransactionsByAddressRIBS} The populated <code>ListUnconfirmedTransactionsByAddressRIBS</code> instance.
   */
  _createClass(ListUnconfirmedTransactionsByAddressRIBS, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>ListUnconfirmedTransactionsByAddressRIBSB</code>, <code>ListUnconfirmedTransactionsByAddressRIBSBC</code>, <code>ListUnconfirmedTransactionsByAddressRIBSBSC</code>, <code>ListUnconfirmedTransactionsByAddressRIBSD</code>, <code>ListUnconfirmedTransactionsByAddressRIBSD2</code>, <code>ListUnconfirmedTransactionsByAddressRIBSE</code>, <code>ListUnconfirmedTransactionsByAddressRIBSEC</code>, <code>ListUnconfirmedTransactionsByAddressRIBSL</code>, <code>ListUnconfirmedTransactionsByAddressRIBSZ</code>.
     * @return {(module:model/ListUnconfirmedTransactionsByAddressRIBSB|module:model/ListUnconfirmedTransactionsByAddressRIBSBC|module:model/ListUnconfirmedTransactionsByAddressRIBSBSC|module:model/ListUnconfirmedTransactionsByAddressRIBSD|module:model/ListUnconfirmedTransactionsByAddressRIBSD2|module:model/ListUnconfirmedTransactionsByAddressRIBSE|module:model/ListUnconfirmedTransactionsByAddressRIBSEC|module:model/ListUnconfirmedTransactionsByAddressRIBSL|module:model/ListUnconfirmedTransactionsByAddressRIBSZ)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>ListUnconfirmedTransactionsByAddressRIBSB</code>, <code>ListUnconfirmedTransactionsByAddressRIBSBC</code>, <code>ListUnconfirmedTransactionsByAddressRIBSBSC</code>, <code>ListUnconfirmedTransactionsByAddressRIBSD</code>, <code>ListUnconfirmedTransactionsByAddressRIBSD2</code>, <code>ListUnconfirmedTransactionsByAddressRIBSE</code>, <code>ListUnconfirmedTransactionsByAddressRIBSEC</code>, <code>ListUnconfirmedTransactionsByAddressRIBSL</code>, <code>ListUnconfirmedTransactionsByAddressRIBSZ</code>.
     * @param {(module:model/ListUnconfirmedTransactionsByAddressRIBSB|module:model/ListUnconfirmedTransactionsByAddressRIBSBC|module:model/ListUnconfirmedTransactionsByAddressRIBSBSC|module:model/ListUnconfirmedTransactionsByAddressRIBSD|module:model/ListUnconfirmedTransactionsByAddressRIBSD2|module:model/ListUnconfirmedTransactionsByAddressRIBSE|module:model/ListUnconfirmedTransactionsByAddressRIBSEC|module:model/ListUnconfirmedTransactionsByAddressRIBSL|module:model/ListUnconfirmedTransactionsByAddressRIBSZ)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = ListUnconfirmedTransactionsByAddressRIBS.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new ListUnconfirmedTransactionsByAddressRIBS(data);
    }
  }]);
  return ListUnconfirmedTransactionsByAddressRIBS;
}();
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_defineProperty(ListUnconfirmedTransactionsByAddressRIBS, "fromJSON", function (json_string) {
  return ListUnconfirmedTransactionsByAddressRIBS.constructFromObject(JSON.parse(json_string));
});
ListUnconfirmedTransactionsByAddressRIBS.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['size'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['vSize'] = undefined;

/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['version'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVinInner>} vin
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} vout
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['vout'] = undefined;

/**
 * @member {module:model/ListUnconfirmedTransactionsByAddressRIBSECFee} fee
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['fee'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSBSCGasPrice} gasPrice
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['gasPrice'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['nonce'] = undefined;

/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['transactionStatus'] = undefined;

/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['bindingSig'] = undefined;

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['expiryHeight'] = undefined;

/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['joinSplitPubKey'] = undefined;

/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['joinSplitSig'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['overwintered'] = undefined;

/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner>} vJoinSplit
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['vJoinSplit'] = undefined;

/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['vShieldedOutput'] = undefined;

/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['vShieldedSpend'] = undefined;

/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['versionGroupId'] = undefined;
ListUnconfirmedTransactionsByAddressRIBS.OneOf = ["ListUnconfirmedTransactionsByAddressRIBSB", "ListUnconfirmedTransactionsByAddressRIBSBC", "ListUnconfirmedTransactionsByAddressRIBSBSC", "ListUnconfirmedTransactionsByAddressRIBSD", "ListUnconfirmedTransactionsByAddressRIBSD2", "ListUnconfirmedTransactionsByAddressRIBSE", "ListUnconfirmedTransactionsByAddressRIBSEC", "ListUnconfirmedTransactionsByAddressRIBSL", "ListUnconfirmedTransactionsByAddressRIBSZ"];
var _default = ListUnconfirmedTransactionsByAddressRIBS;
exports["default"] = _default;