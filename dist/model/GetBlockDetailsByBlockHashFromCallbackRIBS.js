"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetBlockDetailsByBlockHashFromCallbackRIBSB = _interopRequireDefault(require("./GetBlockDetailsByBlockHashFromCallbackRIBSB"));
var _GetBlockDetailsByBlockHashFromCallbackRIBSBC = _interopRequireDefault(require("./GetBlockDetailsByBlockHashFromCallbackRIBSBC"));
var _GetBlockDetailsByBlockHashFromCallbackRIBSBSC = _interopRequireDefault(require("./GetBlockDetailsByBlockHashFromCallbackRIBSBSC"));
var _GetBlockDetailsByBlockHashFromCallbackRIBSD = _interopRequireDefault(require("./GetBlockDetailsByBlockHashFromCallbackRIBSD"));
var _GetBlockDetailsByBlockHashFromCallbackRIBSD2 = _interopRequireDefault(require("./GetBlockDetailsByBlockHashFromCallbackRIBSD2"));
var _GetBlockDetailsByBlockHashFromCallbackRIBSE = _interopRequireDefault(require("./GetBlockDetailsByBlockHashFromCallbackRIBSE"));
var _GetBlockDetailsByBlockHashFromCallbackRIBSEC = _interopRequireDefault(require("./GetBlockDetailsByBlockHashFromCallbackRIBSEC"));
var _GetBlockDetailsByBlockHashFromCallbackRIBSL = _interopRequireDefault(require("./GetBlockDetailsByBlockHashFromCallbackRIBSL"));
var _GetBlockDetailsByBlockHashFromCallbackRIBST = _interopRequireDefault(require("./GetBlockDetailsByBlockHashFromCallbackRIBST"));
var _GetBlockDetailsByBlockHashFromCallbackRIBSX = _interopRequireDefault(require("./GetBlockDetailsByBlockHashFromCallbackRIBSX"));
var _GetBlockDetailsByBlockHashFromCallbackRIBSZ = _interopRequireDefault(require("./GetBlockDetailsByBlockHashFromCallbackRIBSZ"));
var _GetBlockDetailsByBlockHashFromCallbackRIBSZ2 = _interopRequireDefault(require("./GetBlockDetailsByBlockHashFromCallbackRIBSZ2"));
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
 * The GetBlockDetailsByBlockHashFromCallbackRIBS model module.
 * @module model/GetBlockDetailsByBlockHashFromCallbackRIBS
 * @version 1.11.0
 */
var GetBlockDetailsByBlockHashFromCallbackRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetBlockDetailsByBlockHashFromCallbackRIBS</code>.
   * @alias module:model/GetBlockDetailsByBlockHashFromCallbackRIBS
   * @param {(module:model/GetBlockDetailsByBlockHashFromCallbackRIBSB|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSBC|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSBSC|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSD|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSD2|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSE|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSEC|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSL|module:model/GetBlockDetailsByBlockHashFromCallbackRIBST|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSX|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSZ|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSZ2)} instance The actual instance to initialize GetBlockDetailsByBlockHashFromCallbackRIBS.
   */
  function GetBlockDetailsByBlockHashFromCallbackRIBS() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, GetBlockDetailsByBlockHashFromCallbackRIBS);
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
      if (typeof instance === "GetBlockDetailsByBlockHashFromCallbackRIBSB") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHashFromCallbackRIBSB["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHashFromCallbackRIBSB from JS object
        this.actualInstance = _GetBlockDetailsByBlockHashFromCallbackRIBSB["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHashFromCallbackRIBSB
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHashFromCallbackRIBSB: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHashFromCallbackRIBSBC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHashFromCallbackRIBSBC["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHashFromCallbackRIBSBC from JS object
        this.actualInstance = _GetBlockDetailsByBlockHashFromCallbackRIBSBC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHashFromCallbackRIBSBC
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHashFromCallbackRIBSBC: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHashFromCallbackRIBSL") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHashFromCallbackRIBSL["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHashFromCallbackRIBSL from JS object
        this.actualInstance = _GetBlockDetailsByBlockHashFromCallbackRIBSL["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHashFromCallbackRIBSL
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHashFromCallbackRIBSL: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHashFromCallbackRIBSD") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHashFromCallbackRIBSD["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHashFromCallbackRIBSD from JS object
        this.actualInstance = _GetBlockDetailsByBlockHashFromCallbackRIBSD["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHashFromCallbackRIBSD
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHashFromCallbackRIBSD: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHashFromCallbackRIBSD2") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHashFromCallbackRIBSD2["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHashFromCallbackRIBSD2 from JS object
        this.actualInstance = _GetBlockDetailsByBlockHashFromCallbackRIBSD2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHashFromCallbackRIBSD2
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHashFromCallbackRIBSD2: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHashFromCallbackRIBSE") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHashFromCallbackRIBSE["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHashFromCallbackRIBSE from JS object
        this.actualInstance = _GetBlockDetailsByBlockHashFromCallbackRIBSE["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHashFromCallbackRIBSE
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHashFromCallbackRIBSE: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHashFromCallbackRIBSBSC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHashFromCallbackRIBSBSC["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHashFromCallbackRIBSBSC from JS object
        this.actualInstance = _GetBlockDetailsByBlockHashFromCallbackRIBSBSC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHashFromCallbackRIBSBSC
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHashFromCallbackRIBSBSC: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHashFromCallbackRIBSEC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHashFromCallbackRIBSEC["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHashFromCallbackRIBSEC from JS object
        this.actualInstance = _GetBlockDetailsByBlockHashFromCallbackRIBSEC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHashFromCallbackRIBSEC
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHashFromCallbackRIBSEC: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHashFromCallbackRIBSZ") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHashFromCallbackRIBSZ["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHashFromCallbackRIBSZ from JS object
        this.actualInstance = _GetBlockDetailsByBlockHashFromCallbackRIBSZ["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHashFromCallbackRIBSZ
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHashFromCallbackRIBSZ: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHashFromCallbackRIBSX") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHashFromCallbackRIBSX["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHashFromCallbackRIBSX from JS object
        this.actualInstance = _GetBlockDetailsByBlockHashFromCallbackRIBSX["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHashFromCallbackRIBSX
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHashFromCallbackRIBSX: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHashFromCallbackRIBSZ2") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHashFromCallbackRIBSZ2["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHashFromCallbackRIBSZ2 from JS object
        this.actualInstance = _GetBlockDetailsByBlockHashFromCallbackRIBSZ2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHashFromCallbackRIBSZ2
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHashFromCallbackRIBSZ2: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHashFromCallbackRIBST") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHashFromCallbackRIBST["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHashFromCallbackRIBST from JS object
        this.actualInstance = _GetBlockDetailsByBlockHashFromCallbackRIBST["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHashFromCallbackRIBST
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHashFromCallbackRIBST: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `GetBlockDetailsByBlockHashFromCallbackRIBS` with oneOf schemas GetBlockDetailsByBlockHashFromCallbackRIBSB, GetBlockDetailsByBlockHashFromCallbackRIBSBC, GetBlockDetailsByBlockHashFromCallbackRIBSBSC, GetBlockDetailsByBlockHashFromCallbackRIBSD, GetBlockDetailsByBlockHashFromCallbackRIBSD2, GetBlockDetailsByBlockHashFromCallbackRIBSE, GetBlockDetailsByBlockHashFromCallbackRIBSEC, GetBlockDetailsByBlockHashFromCallbackRIBSL, GetBlockDetailsByBlockHashFromCallbackRIBST, GetBlockDetailsByBlockHashFromCallbackRIBSX, GetBlockDetailsByBlockHashFromCallbackRIBSZ, GetBlockDetailsByBlockHashFromCallbackRIBSZ2. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `GetBlockDetailsByBlockHashFromCallbackRIBS` with oneOf schemas GetBlockDetailsByBlockHashFromCallbackRIBSB, GetBlockDetailsByBlockHashFromCallbackRIBSBC, GetBlockDetailsByBlockHashFromCallbackRIBSBSC, GetBlockDetailsByBlockHashFromCallbackRIBSD, GetBlockDetailsByBlockHashFromCallbackRIBSD2, GetBlockDetailsByBlockHashFromCallbackRIBSE, GetBlockDetailsByBlockHashFromCallbackRIBSEC, GetBlockDetailsByBlockHashFromCallbackRIBSL, GetBlockDetailsByBlockHashFromCallbackRIBST, GetBlockDetailsByBlockHashFromCallbackRIBSX, GetBlockDetailsByBlockHashFromCallbackRIBSZ, GetBlockDetailsByBlockHashFromCallbackRIBSZ2. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>GetBlockDetailsByBlockHashFromCallbackRIBS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBlockDetailsByBlockHashFromCallbackRIBS} obj Optional instance to populate.
   * @return {module:model/GetBlockDetailsByBlockHashFromCallbackRIBS} The populated <code>GetBlockDetailsByBlockHashFromCallbackRIBS</code> instance.
   */
  _createClass(GetBlockDetailsByBlockHashFromCallbackRIBS, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>GetBlockDetailsByBlockHashFromCallbackRIBSB</code>, <code>GetBlockDetailsByBlockHashFromCallbackRIBSBC</code>, <code>GetBlockDetailsByBlockHashFromCallbackRIBSBSC</code>, <code>GetBlockDetailsByBlockHashFromCallbackRIBSD</code>, <code>GetBlockDetailsByBlockHashFromCallbackRIBSD2</code>, <code>GetBlockDetailsByBlockHashFromCallbackRIBSE</code>, <code>GetBlockDetailsByBlockHashFromCallbackRIBSEC</code>, <code>GetBlockDetailsByBlockHashFromCallbackRIBSL</code>, <code>GetBlockDetailsByBlockHashFromCallbackRIBST</code>, <code>GetBlockDetailsByBlockHashFromCallbackRIBSX</code>, <code>GetBlockDetailsByBlockHashFromCallbackRIBSZ</code>, <code>GetBlockDetailsByBlockHashFromCallbackRIBSZ2</code>.
     * @return {(module:model/GetBlockDetailsByBlockHashFromCallbackRIBSB|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSBC|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSBSC|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSD|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSD2|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSE|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSEC|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSL|module:model/GetBlockDetailsByBlockHashFromCallbackRIBST|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSX|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSZ|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSZ2)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>GetBlockDetailsByBlockHashFromCallbackRIBSB</code>, <code>GetBlockDetailsByBlockHashFromCallbackRIBSBC</code>, <code>GetBlockDetailsByBlockHashFromCallbackRIBSBSC</code>, <code>GetBlockDetailsByBlockHashFromCallbackRIBSD</code>, <code>GetBlockDetailsByBlockHashFromCallbackRIBSD2</code>, <code>GetBlockDetailsByBlockHashFromCallbackRIBSE</code>, <code>GetBlockDetailsByBlockHashFromCallbackRIBSEC</code>, <code>GetBlockDetailsByBlockHashFromCallbackRIBSL</code>, <code>GetBlockDetailsByBlockHashFromCallbackRIBST</code>, <code>GetBlockDetailsByBlockHashFromCallbackRIBSX</code>, <code>GetBlockDetailsByBlockHashFromCallbackRIBSZ</code>, <code>GetBlockDetailsByBlockHashFromCallbackRIBSZ2</code>.
     * @param {(module:model/GetBlockDetailsByBlockHashFromCallbackRIBSB|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSBC|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSBSC|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSD|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSD2|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSE|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSEC|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSL|module:model/GetBlockDetailsByBlockHashFromCallbackRIBST|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSX|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSZ|module:model/GetBlockDetailsByBlockHashFromCallbackRIBSZ2)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = GetBlockDetailsByBlockHashFromCallbackRIBS.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new GetBlockDetailsByBlockHashFromCallbackRIBS(data);
    }
  }]);
  return GetBlockDetailsByBlockHashFromCallbackRIBS;
}();
/**
 * Represents a specific sub-unit of Zcash. Bits have two-decimal precision
 * @member {String} bits
 */
_defineProperty(GetBlockDetailsByBlockHashFromCallbackRIBS, "fromJSON", function (json_string) {
  return GetBlockDetailsByBlockHashFromCallbackRIBS.constructFromObject(JSON.parse(json_string));
});
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['bits'] = undefined;

/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['chainwork'] = undefined;

/**
 * Defines how difficult it is for a specific miner to mine the block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['difficulty'] = undefined;

/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['merkleRoot'] = undefined;

/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['nonce'] = undefined;

/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['size'] = undefined;

/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['strippedSize'] = undefined;

/**
 * Represents the transaction version number.
 * @member {Number} version
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['version'] = undefined;

/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['versionHex'] = undefined;

/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['weight'] = undefined;

/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedsize
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['strippedsize'] = undefined;

/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['extraData'] = undefined;

/**
 * Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
 * @member {Number} gasLimit
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['gasLimit'] = undefined;

/**
 * Defines how much of the gas for the block has been used.
 * @member {Number} gasUsed
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['gasUsed'] = undefined;

/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['minedInSeconds'] = undefined;

/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['sha3Uncles'] = undefined;

/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['totalDifficulty'] = undefined;

/**
 * @member {Array.<String>} uncles
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['uncles'] = undefined;

/**
 * Represents the Directory Service block which contains metadata about the miners who participate in the consensus protocol.
 * @member {Number} dsBlock
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['dsBlock'] = undefined;

/**
 * Defines how difficult it is to mine the dsBlocks.
 * @member {String} dsDifficulty
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['dsDifficulty'] = undefined;

/**
 * Represents a part of the DS Committee which leads the consensus protocol for the epoch.
 * @member {String} dsLeader
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['dsLeader'] = undefined;

/**
 * @member {Array.<String>} microBlocks
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['microBlocks'] = undefined;

/**
 * @member {module:model/GetLatestMinedXRPRippleBlockRITotalCoins} totalCoins
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['totalCoins'] = undefined;

/**
 * @member {module:model/GetLatestMinedXRPRippleBlockRITotalFees} totalFees
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['totalFees'] = undefined;

/**
 * Represents the bandwidth used for the transaction.
 * @member {String} bandwidthUsed
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['bandwidthUsed'] = undefined;

/**
 * Represents the block burned TRX.
 * @member {String} burnedTrx
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['burnedTrx'] = undefined;

/**
 * Representats the used energy for the transaction.
 * @member {String} energyUsed
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['energyUsed'] = undefined;
GetBlockDetailsByBlockHashFromCallbackRIBS.OneOf = ["GetBlockDetailsByBlockHashFromCallbackRIBSB", "GetBlockDetailsByBlockHashFromCallbackRIBSBC", "GetBlockDetailsByBlockHashFromCallbackRIBSBSC", "GetBlockDetailsByBlockHashFromCallbackRIBSD", "GetBlockDetailsByBlockHashFromCallbackRIBSD2", "GetBlockDetailsByBlockHashFromCallbackRIBSE", "GetBlockDetailsByBlockHashFromCallbackRIBSEC", "GetBlockDetailsByBlockHashFromCallbackRIBSL", "GetBlockDetailsByBlockHashFromCallbackRIBST", "GetBlockDetailsByBlockHashFromCallbackRIBSX", "GetBlockDetailsByBlockHashFromCallbackRIBSZ", "GetBlockDetailsByBlockHashFromCallbackRIBSZ2"];
var _default = GetBlockDetailsByBlockHashFromCallbackRIBS;
exports["default"] = _default;