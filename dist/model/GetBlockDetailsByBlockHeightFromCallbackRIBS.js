"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetBlockDetailsByBlockHeightFromCallbackRIBSB = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightFromCallbackRIBSB"));
var _GetBlockDetailsByBlockHeightFromCallbackRIBSBC = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightFromCallbackRIBSBC"));
var _GetBlockDetailsByBlockHeightFromCallbackRIBSBSC = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightFromCallbackRIBSBSC"));
var _GetBlockDetailsByBlockHeightFromCallbackRIBSD = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightFromCallbackRIBSD"));
var _GetBlockDetailsByBlockHeightFromCallbackRIBSD2 = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightFromCallbackRIBSD2"));
var _GetBlockDetailsByBlockHeightFromCallbackRIBSE = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightFromCallbackRIBSE"));
var _GetBlockDetailsByBlockHeightFromCallbackRIBSEC = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightFromCallbackRIBSEC"));
var _GetBlockDetailsByBlockHeightFromCallbackRIBSL = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightFromCallbackRIBSL"));
var _GetBlockDetailsByBlockHeightFromCallbackRIBST = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightFromCallbackRIBST"));
var _GetBlockDetailsByBlockHeightFromCallbackRIBSX = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightFromCallbackRIBSX"));
var _GetBlockDetailsByBlockHeightFromCallbackRIBSZ = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightFromCallbackRIBSZ"));
var _GetBlockDetailsByBlockHeightFromCallbackRIBSZ2 = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightFromCallbackRIBSZ2"));
var _GetLatestMinedXRPRippleBlockRITotalCoins = _interopRequireDefault(require("./GetLatestMinedXRPRippleBlockRITotalCoins"));
var _GetLatestMinedXRPRippleBlockRITotalFees = _interopRequireDefault(require("./GetLatestMinedXRPRippleBlockRITotalFees"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetBlockDetailsByBlockHeightFromCallbackRIBS model module.
 * @module model/GetBlockDetailsByBlockHeightFromCallbackRIBS
 * @version 1.11.0
 */
var GetBlockDetailsByBlockHeightFromCallbackRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetBlockDetailsByBlockHeightFromCallbackRIBS</code>.
   * @alias module:model/GetBlockDetailsByBlockHeightFromCallbackRIBS
   * @param {(module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSB|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSBC|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSBSC|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSD|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSD2|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSE|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSEC|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSL|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBST|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSX|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSZ|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSZ2)} instance The actual instance to initialize GetBlockDetailsByBlockHeightFromCallbackRIBS.
   */
  function GetBlockDetailsByBlockHeightFromCallbackRIBS() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, GetBlockDetailsByBlockHeightFromCallbackRIBS);
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
      if (typeof instance === "GetBlockDetailsByBlockHeightFromCallbackRIBSB") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHeightFromCallbackRIBSB["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHeightFromCallbackRIBSB from JS object
        this.actualInstance = _GetBlockDetailsByBlockHeightFromCallbackRIBSB["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHeightFromCallbackRIBSB
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHeightFromCallbackRIBSB: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHeightFromCallbackRIBSBC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHeightFromCallbackRIBSBC["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHeightFromCallbackRIBSBC from JS object
        this.actualInstance = _GetBlockDetailsByBlockHeightFromCallbackRIBSBC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHeightFromCallbackRIBSBC
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHeightFromCallbackRIBSBC: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHeightFromCallbackRIBSL") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHeightFromCallbackRIBSL["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHeightFromCallbackRIBSL from JS object
        this.actualInstance = _GetBlockDetailsByBlockHeightFromCallbackRIBSL["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHeightFromCallbackRIBSL
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHeightFromCallbackRIBSL: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHeightFromCallbackRIBSD") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHeightFromCallbackRIBSD["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHeightFromCallbackRIBSD from JS object
        this.actualInstance = _GetBlockDetailsByBlockHeightFromCallbackRIBSD["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHeightFromCallbackRIBSD
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHeightFromCallbackRIBSD: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHeightFromCallbackRIBSD2") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHeightFromCallbackRIBSD2["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHeightFromCallbackRIBSD2 from JS object
        this.actualInstance = _GetBlockDetailsByBlockHeightFromCallbackRIBSD2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHeightFromCallbackRIBSD2
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHeightFromCallbackRIBSD2: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHeightFromCallbackRIBSE") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHeightFromCallbackRIBSE["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHeightFromCallbackRIBSE from JS object
        this.actualInstance = _GetBlockDetailsByBlockHeightFromCallbackRIBSE["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHeightFromCallbackRIBSE
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHeightFromCallbackRIBSE: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHeightFromCallbackRIBSBSC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHeightFromCallbackRIBSBSC["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHeightFromCallbackRIBSBSC from JS object
        this.actualInstance = _GetBlockDetailsByBlockHeightFromCallbackRIBSBSC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHeightFromCallbackRIBSBSC
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHeightFromCallbackRIBSBSC: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHeightFromCallbackRIBSEC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHeightFromCallbackRIBSEC["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHeightFromCallbackRIBSEC from JS object
        this.actualInstance = _GetBlockDetailsByBlockHeightFromCallbackRIBSEC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHeightFromCallbackRIBSEC
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHeightFromCallbackRIBSEC: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHeightFromCallbackRIBSZ") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHeightFromCallbackRIBSZ["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHeightFromCallbackRIBSZ from JS object
        this.actualInstance = _GetBlockDetailsByBlockHeightFromCallbackRIBSZ["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHeightFromCallbackRIBSZ
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHeightFromCallbackRIBSZ: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHeightFromCallbackRIBSX") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHeightFromCallbackRIBSX["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHeightFromCallbackRIBSX from JS object
        this.actualInstance = _GetBlockDetailsByBlockHeightFromCallbackRIBSX["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHeightFromCallbackRIBSX
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHeightFromCallbackRIBSX: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHeightFromCallbackRIBSZ2") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHeightFromCallbackRIBSZ2["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHeightFromCallbackRIBSZ2 from JS object
        this.actualInstance = _GetBlockDetailsByBlockHeightFromCallbackRIBSZ2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHeightFromCallbackRIBSZ2
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHeightFromCallbackRIBSZ2: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHeightFromCallbackRIBST") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHeightFromCallbackRIBST["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHeightFromCallbackRIBST from JS object
        this.actualInstance = _GetBlockDetailsByBlockHeightFromCallbackRIBST["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHeightFromCallbackRIBST
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHeightFromCallbackRIBST: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `GetBlockDetailsByBlockHeightFromCallbackRIBS` with oneOf schemas GetBlockDetailsByBlockHeightFromCallbackRIBSB, GetBlockDetailsByBlockHeightFromCallbackRIBSBC, GetBlockDetailsByBlockHeightFromCallbackRIBSBSC, GetBlockDetailsByBlockHeightFromCallbackRIBSD, GetBlockDetailsByBlockHeightFromCallbackRIBSD2, GetBlockDetailsByBlockHeightFromCallbackRIBSE, GetBlockDetailsByBlockHeightFromCallbackRIBSEC, GetBlockDetailsByBlockHeightFromCallbackRIBSL, GetBlockDetailsByBlockHeightFromCallbackRIBST, GetBlockDetailsByBlockHeightFromCallbackRIBSX, GetBlockDetailsByBlockHeightFromCallbackRIBSZ, GetBlockDetailsByBlockHeightFromCallbackRIBSZ2. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `GetBlockDetailsByBlockHeightFromCallbackRIBS` with oneOf schemas GetBlockDetailsByBlockHeightFromCallbackRIBSB, GetBlockDetailsByBlockHeightFromCallbackRIBSBC, GetBlockDetailsByBlockHeightFromCallbackRIBSBSC, GetBlockDetailsByBlockHeightFromCallbackRIBSD, GetBlockDetailsByBlockHeightFromCallbackRIBSD2, GetBlockDetailsByBlockHeightFromCallbackRIBSE, GetBlockDetailsByBlockHeightFromCallbackRIBSEC, GetBlockDetailsByBlockHeightFromCallbackRIBSL, GetBlockDetailsByBlockHeightFromCallbackRIBST, GetBlockDetailsByBlockHeightFromCallbackRIBSX, GetBlockDetailsByBlockHeightFromCallbackRIBSZ, GetBlockDetailsByBlockHeightFromCallbackRIBSZ2. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>GetBlockDetailsByBlockHeightFromCallbackRIBS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBlockDetailsByBlockHeightFromCallbackRIBS} obj Optional instance to populate.
   * @return {module:model/GetBlockDetailsByBlockHeightFromCallbackRIBS} The populated <code>GetBlockDetailsByBlockHeightFromCallbackRIBS</code> instance.
   */
  _createClass(GetBlockDetailsByBlockHeightFromCallbackRIBS, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>GetBlockDetailsByBlockHeightFromCallbackRIBSB</code>, <code>GetBlockDetailsByBlockHeightFromCallbackRIBSBC</code>, <code>GetBlockDetailsByBlockHeightFromCallbackRIBSBSC</code>, <code>GetBlockDetailsByBlockHeightFromCallbackRIBSD</code>, <code>GetBlockDetailsByBlockHeightFromCallbackRIBSD2</code>, <code>GetBlockDetailsByBlockHeightFromCallbackRIBSE</code>, <code>GetBlockDetailsByBlockHeightFromCallbackRIBSEC</code>, <code>GetBlockDetailsByBlockHeightFromCallbackRIBSL</code>, <code>GetBlockDetailsByBlockHeightFromCallbackRIBST</code>, <code>GetBlockDetailsByBlockHeightFromCallbackRIBSX</code>, <code>GetBlockDetailsByBlockHeightFromCallbackRIBSZ</code>, <code>GetBlockDetailsByBlockHeightFromCallbackRIBSZ2</code>.
     * @return {(module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSB|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSBC|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSBSC|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSD|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSD2|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSE|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSEC|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSL|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBST|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSX|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSZ|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSZ2)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>GetBlockDetailsByBlockHeightFromCallbackRIBSB</code>, <code>GetBlockDetailsByBlockHeightFromCallbackRIBSBC</code>, <code>GetBlockDetailsByBlockHeightFromCallbackRIBSBSC</code>, <code>GetBlockDetailsByBlockHeightFromCallbackRIBSD</code>, <code>GetBlockDetailsByBlockHeightFromCallbackRIBSD2</code>, <code>GetBlockDetailsByBlockHeightFromCallbackRIBSE</code>, <code>GetBlockDetailsByBlockHeightFromCallbackRIBSEC</code>, <code>GetBlockDetailsByBlockHeightFromCallbackRIBSL</code>, <code>GetBlockDetailsByBlockHeightFromCallbackRIBST</code>, <code>GetBlockDetailsByBlockHeightFromCallbackRIBSX</code>, <code>GetBlockDetailsByBlockHeightFromCallbackRIBSZ</code>, <code>GetBlockDetailsByBlockHeightFromCallbackRIBSZ2</code>.
     * @param {(module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSB|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSBC|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSBSC|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSD|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSD2|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSE|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSEC|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSL|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBST|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSX|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSZ|module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSZ2)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = GetBlockDetailsByBlockHeightFromCallbackRIBS.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new GetBlockDetailsByBlockHeightFromCallbackRIBS(data);
    }
  }]);
  return GetBlockDetailsByBlockHeightFromCallbackRIBS;
}();
/**
 * Represents a specific sub-unit of Zcash. Bits have two-decimal precision
 * @member {String} bits
 */
_defineProperty(GetBlockDetailsByBlockHeightFromCallbackRIBS, "fromJSON", function (json_string) {
  return GetBlockDetailsByBlockHeightFromCallbackRIBS.constructFromObject(JSON.parse(json_string));
});
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['bits'] = undefined;

/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['chainwork'] = undefined;

/**
 * Defines how difficult it is for a specific miner to mine the block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['difficulty'] = undefined;

/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['merkleRoot'] = undefined;

/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['nonce'] = undefined;

/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['size'] = undefined;

/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['strippedSize'] = undefined;

/**
 * Represents the transaction version number.
 * @member {Number} version
 */
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['version'] = undefined;

/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['versionHex'] = undefined;

/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['weight'] = undefined;

/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedsize
 */
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['strippedsize'] = undefined;

/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['extraData'] = undefined;

/**
 * Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
 * @member {Number} gasLimit
 */
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['gasLimit'] = undefined;

/**
 * Defines how much of the gas for the block has been used.
 * @member {Number} gasUsed
 */
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['gasUsed'] = undefined;

/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['minedInSeconds'] = undefined;

/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['sha3Uncles'] = undefined;

/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['totalDifficulty'] = undefined;

/**
 * @member {Array.<String>} uncles
 */
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['uncles'] = undefined;

/**
 * Represents the Directory Service block which contains metadata about the miners who participate in the consensus protocol.
 * @member {Number} dsBlock
 */
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['dsBlock'] = undefined;

/**
 * Defines how difficult it is to mine the dsBlocks.
 * @member {String} dsDifficulty
 */
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['dsDifficulty'] = undefined;

/**
 * Represents a part of the DS Committee which leads the consensus protocol for the epoch.
 * @member {String} dsLeader
 */
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['dsLeader'] = undefined;

/**
 * @member {Array.<String>} microBlocks
 */
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['microBlocks'] = undefined;

/**
 * @member {module:model/GetLatestMinedXRPRippleBlockRITotalCoins} totalCoins
 */
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['totalCoins'] = undefined;

/**
 * @member {module:model/GetLatestMinedXRPRippleBlockRITotalFees} totalFees
 */
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['totalFees'] = undefined;

/**
 * Represents the bandwidth used for the transaction.
 * @member {String} bandwidthUsed
 */
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['bandwidthUsed'] = undefined;

/**
 * Represents the block burned TRX.
 * @member {String} burnedTrx
 */
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['burnedTrx'] = undefined;

/**
 * Representats the used energy for the transaction.
 * @member {String} energyUsed
 */
GetBlockDetailsByBlockHeightFromCallbackRIBS.prototype['energyUsed'] = undefined;
GetBlockDetailsByBlockHeightFromCallbackRIBS.OneOf = ["GetBlockDetailsByBlockHeightFromCallbackRIBSB", "GetBlockDetailsByBlockHeightFromCallbackRIBSBC", "GetBlockDetailsByBlockHeightFromCallbackRIBSBSC", "GetBlockDetailsByBlockHeightFromCallbackRIBSD", "GetBlockDetailsByBlockHeightFromCallbackRIBSD2", "GetBlockDetailsByBlockHeightFromCallbackRIBSE", "GetBlockDetailsByBlockHeightFromCallbackRIBSEC", "GetBlockDetailsByBlockHeightFromCallbackRIBSL", "GetBlockDetailsByBlockHeightFromCallbackRIBST", "GetBlockDetailsByBlockHeightFromCallbackRIBSX", "GetBlockDetailsByBlockHeightFromCallbackRIBSZ", "GetBlockDetailsByBlockHeightFromCallbackRIBSZ2"];
var _default = GetBlockDetailsByBlockHeightFromCallbackRIBS;
exports["default"] = _default;