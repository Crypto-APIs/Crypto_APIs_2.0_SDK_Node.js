"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetLastMinedBlockRIBSB = _interopRequireDefault(require("./GetLastMinedBlockRIBSB"));
var _GetLastMinedBlockRIBSBC = _interopRequireDefault(require("./GetLastMinedBlockRIBSBC"));
var _GetLastMinedBlockRIBSBSC = _interopRequireDefault(require("./GetLastMinedBlockRIBSBSC"));
var _GetLastMinedBlockRIBSD = _interopRequireDefault(require("./GetLastMinedBlockRIBSD"));
var _GetLastMinedBlockRIBSD2 = _interopRequireDefault(require("./GetLastMinedBlockRIBSD2"));
var _GetLastMinedBlockRIBSE = _interopRequireDefault(require("./GetLastMinedBlockRIBSE"));
var _GetLastMinedBlockRIBSEC = _interopRequireDefault(require("./GetLastMinedBlockRIBSEC"));
var _GetLastMinedBlockRIBSL = _interopRequireDefault(require("./GetLastMinedBlockRIBSL"));
var _GetLastMinedBlockRIBST = _interopRequireDefault(require("./GetLastMinedBlockRIBST"));
var _GetLastMinedBlockRIBSZ = _interopRequireDefault(require("./GetLastMinedBlockRIBSZ"));
var _GetLastMinedBlockRIBSZ2 = _interopRequireDefault(require("./GetLastMinedBlockRIBSZ2"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetLastMinedBlockRIBS model module.
 * @module model/GetLastMinedBlockRIBS
 * @version 1.11.0
 */
var GetLastMinedBlockRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetLastMinedBlockRIBS</code>.
   * @alias module:model/GetLastMinedBlockRIBS
   * @param {(module:model/GetLastMinedBlockRIBSB|module:model/GetLastMinedBlockRIBSBC|module:model/GetLastMinedBlockRIBSBSC|module:model/GetLastMinedBlockRIBSD|module:model/GetLastMinedBlockRIBSD2|module:model/GetLastMinedBlockRIBSE|module:model/GetLastMinedBlockRIBSEC|module:model/GetLastMinedBlockRIBSL|module:model/GetLastMinedBlockRIBST|module:model/GetLastMinedBlockRIBSZ|module:model/GetLastMinedBlockRIBSZ2)} instance The actual instance to initialize GetLastMinedBlockRIBS.
   */
  function GetLastMinedBlockRIBS() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, GetLastMinedBlockRIBS);
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
      if (typeof instance === "GetLastMinedBlockRIBSB") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetLastMinedBlockRIBSB["default"].validateJSON(instance); // throw an exception if no match
        // create GetLastMinedBlockRIBSB from JS object
        this.actualInstance = _GetLastMinedBlockRIBSB["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetLastMinedBlockRIBSB
      errorMessages.push("Failed to construct GetLastMinedBlockRIBSB: " + err);
    }
    try {
      if (typeof instance === "GetLastMinedBlockRIBSE") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetLastMinedBlockRIBSE["default"].validateJSON(instance); // throw an exception if no match
        // create GetLastMinedBlockRIBSE from JS object
        this.actualInstance = _GetLastMinedBlockRIBSE["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetLastMinedBlockRIBSE
      errorMessages.push("Failed to construct GetLastMinedBlockRIBSE: " + err);
    }
    try {
      if (typeof instance === "GetLastMinedBlockRIBSEC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetLastMinedBlockRIBSEC["default"].validateJSON(instance); // throw an exception if no match
        // create GetLastMinedBlockRIBSEC from JS object
        this.actualInstance = _GetLastMinedBlockRIBSEC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetLastMinedBlockRIBSEC
      errorMessages.push("Failed to construct GetLastMinedBlockRIBSEC: " + err);
    }
    try {
      if (typeof instance === "GetLastMinedBlockRIBSBC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetLastMinedBlockRIBSBC["default"].validateJSON(instance); // throw an exception if no match
        // create GetLastMinedBlockRIBSBC from JS object
        this.actualInstance = _GetLastMinedBlockRIBSBC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetLastMinedBlockRIBSBC
      errorMessages.push("Failed to construct GetLastMinedBlockRIBSBC: " + err);
    }
    try {
      if (typeof instance === "GetLastMinedBlockRIBSL") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetLastMinedBlockRIBSL["default"].validateJSON(instance); // throw an exception if no match
        // create GetLastMinedBlockRIBSL from JS object
        this.actualInstance = _GetLastMinedBlockRIBSL["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetLastMinedBlockRIBSL
      errorMessages.push("Failed to construct GetLastMinedBlockRIBSL: " + err);
    }
    try {
      if (typeof instance === "GetLastMinedBlockRIBSD") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetLastMinedBlockRIBSD["default"].validateJSON(instance); // throw an exception if no match
        // create GetLastMinedBlockRIBSD from JS object
        this.actualInstance = _GetLastMinedBlockRIBSD["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetLastMinedBlockRIBSD
      errorMessages.push("Failed to construct GetLastMinedBlockRIBSD: " + err);
    }
    try {
      if (typeof instance === "GetLastMinedBlockRIBSD2") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetLastMinedBlockRIBSD2["default"].validateJSON(instance); // throw an exception if no match
        // create GetLastMinedBlockRIBSD2 from JS object
        this.actualInstance = _GetLastMinedBlockRIBSD2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetLastMinedBlockRIBSD2
      errorMessages.push("Failed to construct GetLastMinedBlockRIBSD2: " + err);
    }
    try {
      if (typeof instance === "GetLastMinedBlockRIBSBSC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetLastMinedBlockRIBSBSC["default"].validateJSON(instance); // throw an exception if no match
        // create GetLastMinedBlockRIBSBSC from JS object
        this.actualInstance = _GetLastMinedBlockRIBSBSC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetLastMinedBlockRIBSBSC
      errorMessages.push("Failed to construct GetLastMinedBlockRIBSBSC: " + err);
    }
    try {
      if (typeof instance === "GetLastMinedBlockRIBSZ") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetLastMinedBlockRIBSZ["default"].validateJSON(instance); // throw an exception if no match
        // create GetLastMinedBlockRIBSZ from JS object
        this.actualInstance = _GetLastMinedBlockRIBSZ["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetLastMinedBlockRIBSZ
      errorMessages.push("Failed to construct GetLastMinedBlockRIBSZ: " + err);
    }
    try {
      if (typeof instance === "GetLastMinedBlockRIBSZ2") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetLastMinedBlockRIBSZ2["default"].validateJSON(instance); // throw an exception if no match
        // create GetLastMinedBlockRIBSZ2 from JS object
        this.actualInstance = _GetLastMinedBlockRIBSZ2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetLastMinedBlockRIBSZ2
      errorMessages.push("Failed to construct GetLastMinedBlockRIBSZ2: " + err);
    }
    try {
      if (typeof instance === "GetLastMinedBlockRIBST") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetLastMinedBlockRIBST["default"].validateJSON(instance); // throw an exception if no match
        // create GetLastMinedBlockRIBST from JS object
        this.actualInstance = _GetLastMinedBlockRIBST["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetLastMinedBlockRIBST
      errorMessages.push("Failed to construct GetLastMinedBlockRIBST: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `GetLastMinedBlockRIBS` with oneOf schemas GetLastMinedBlockRIBSB, GetLastMinedBlockRIBSBC, GetLastMinedBlockRIBSBSC, GetLastMinedBlockRIBSD, GetLastMinedBlockRIBSD2, GetLastMinedBlockRIBSE, GetLastMinedBlockRIBSEC, GetLastMinedBlockRIBSL, GetLastMinedBlockRIBST, GetLastMinedBlockRIBSZ, GetLastMinedBlockRIBSZ2. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `GetLastMinedBlockRIBS` with oneOf schemas GetLastMinedBlockRIBSB, GetLastMinedBlockRIBSBC, GetLastMinedBlockRIBSBSC, GetLastMinedBlockRIBSD, GetLastMinedBlockRIBSD2, GetLastMinedBlockRIBSE, GetLastMinedBlockRIBSEC, GetLastMinedBlockRIBSL, GetLastMinedBlockRIBST, GetLastMinedBlockRIBSZ, GetLastMinedBlockRIBSZ2. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>GetLastMinedBlockRIBS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetLastMinedBlockRIBS} obj Optional instance to populate.
   * @return {module:model/GetLastMinedBlockRIBS} The populated <code>GetLastMinedBlockRIBS</code> instance.
   */
  _createClass(GetLastMinedBlockRIBS, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>GetLastMinedBlockRIBSB</code>, <code>GetLastMinedBlockRIBSBC</code>, <code>GetLastMinedBlockRIBSBSC</code>, <code>GetLastMinedBlockRIBSD</code>, <code>GetLastMinedBlockRIBSD2</code>, <code>GetLastMinedBlockRIBSE</code>, <code>GetLastMinedBlockRIBSEC</code>, <code>GetLastMinedBlockRIBSL</code>, <code>GetLastMinedBlockRIBST</code>, <code>GetLastMinedBlockRIBSZ</code>, <code>GetLastMinedBlockRIBSZ2</code>.
     * @return {(module:model/GetLastMinedBlockRIBSB|module:model/GetLastMinedBlockRIBSBC|module:model/GetLastMinedBlockRIBSBSC|module:model/GetLastMinedBlockRIBSD|module:model/GetLastMinedBlockRIBSD2|module:model/GetLastMinedBlockRIBSE|module:model/GetLastMinedBlockRIBSEC|module:model/GetLastMinedBlockRIBSL|module:model/GetLastMinedBlockRIBST|module:model/GetLastMinedBlockRIBSZ|module:model/GetLastMinedBlockRIBSZ2)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>GetLastMinedBlockRIBSB</code>, <code>GetLastMinedBlockRIBSBC</code>, <code>GetLastMinedBlockRIBSBSC</code>, <code>GetLastMinedBlockRIBSD</code>, <code>GetLastMinedBlockRIBSD2</code>, <code>GetLastMinedBlockRIBSE</code>, <code>GetLastMinedBlockRIBSEC</code>, <code>GetLastMinedBlockRIBSL</code>, <code>GetLastMinedBlockRIBST</code>, <code>GetLastMinedBlockRIBSZ</code>, <code>GetLastMinedBlockRIBSZ2</code>.
     * @param {(module:model/GetLastMinedBlockRIBSB|module:model/GetLastMinedBlockRIBSBC|module:model/GetLastMinedBlockRIBSBSC|module:model/GetLastMinedBlockRIBSD|module:model/GetLastMinedBlockRIBSD2|module:model/GetLastMinedBlockRIBSE|module:model/GetLastMinedBlockRIBSEC|module:model/GetLastMinedBlockRIBSL|module:model/GetLastMinedBlockRIBST|module:model/GetLastMinedBlockRIBSZ|module:model/GetLastMinedBlockRIBSZ2)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = GetLastMinedBlockRIBS.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new GetLastMinedBlockRIBS(data);
    }
  }]);
  return GetLastMinedBlockRIBS;
}();
/**
 * Represents a specific sub-unit of Zcash. Bits have two-decimal precision
 * @member {String} bits
 */
_defineProperty(GetLastMinedBlockRIBS, "fromJSON", function (json_string) {
  return GetLastMinedBlockRIBS.constructFromObject(JSON.parse(json_string));
});
GetLastMinedBlockRIBS.prototype['bits'] = undefined;

/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetLastMinedBlockRIBS.prototype['chainwork'] = undefined;

/**
 * String representation of the difficulty
 * @member {String} difficulty
 */
GetLastMinedBlockRIBS.prototype['difficulty'] = undefined;

/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetLastMinedBlockRIBS.prototype['merkleRoot'] = undefined;

/**
 * Represents a random value that can be adjusted to satisfy the proof of work.
 * @member {String} nonce
 */
GetLastMinedBlockRIBS.prototype['nonce'] = undefined;

/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetLastMinedBlockRIBS.prototype['size'] = undefined;

/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
GetLastMinedBlockRIBS.prototype['strippedSize'] = undefined;

/**
 * Represents the transaction version number.
 * @member {Number} version
 */
GetLastMinedBlockRIBS.prototype['version'] = undefined;

/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
GetLastMinedBlockRIBS.prototype['versionHex'] = undefined;

/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
GetLastMinedBlockRIBS.prototype['weight'] = undefined;

/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
GetLastMinedBlockRIBS.prototype['extraData'] = undefined;

/**
 * Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
 * @member {Number} gasLimit
 */
GetLastMinedBlockRIBS.prototype['gasLimit'] = undefined;

/**
 * Defines how much of the gas for the block has been used.
 * @member {Number} gasUsed
 */
GetLastMinedBlockRIBS.prototype['gasUsed'] = undefined;

/**
 * Specifies the amount of time required for the block to be mined in second
 * @member {Number} minedInSeconds
 */
GetLastMinedBlockRIBS.prototype['minedInSeconds'] = undefined;

/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
GetLastMinedBlockRIBS.prototype['sha3Uncles'] = undefined;

/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block
 * @member {String} totalDifficulty
 */
GetLastMinedBlockRIBS.prototype['totalDifficulty'] = undefined;

/**
 * @member {Array.<String>} uncles
 */
GetLastMinedBlockRIBS.prototype['uncles'] = undefined;

/**
 * Represents the Directory Service block which contains metadata about the miners who participate in the consensus protocol.
 * @member {Number} dsBlock
 */
GetLastMinedBlockRIBS.prototype['dsBlock'] = undefined;

/**
 * Defines how difficult it is to mine the dsBlocks.
 * @member {String} dsDifficulty
 */
GetLastMinedBlockRIBS.prototype['dsDifficulty'] = undefined;

/**
 * Represents a part of the DS Committee which leads the consensus protocol for the epoch.
 * @member {String} dsLeader
 */
GetLastMinedBlockRIBS.prototype['dsLeader'] = undefined;

/**
 * @member {Array.<String>} microBlocks
 */
GetLastMinedBlockRIBS.prototype['microBlocks'] = undefined;

/**
 * Representation of the blocks' bandwidth limit.
 * @member {String} bandwidthUsed
 */
GetLastMinedBlockRIBS.prototype['bandwidthUsed'] = undefined;

/**
 * Representation of the blocks' burned TRX.
 * @member {String} burnedTRX
 */
GetLastMinedBlockRIBS.prototype['burnedTRX'] = undefined;

/**
 * Representation of the blocks' energy used.
 * @member {String} energyUsed
 */
GetLastMinedBlockRIBS.prototype['energyUsed'] = undefined;
GetLastMinedBlockRIBS.OneOf = ["GetLastMinedBlockRIBSB", "GetLastMinedBlockRIBSBC", "GetLastMinedBlockRIBSBSC", "GetLastMinedBlockRIBSD", "GetLastMinedBlockRIBSD2", "GetLastMinedBlockRIBSE", "GetLastMinedBlockRIBSEC", "GetLastMinedBlockRIBSL", "GetLastMinedBlockRIBST", "GetLastMinedBlockRIBSZ", "GetLastMinedBlockRIBSZ2"];
var _default = GetLastMinedBlockRIBS;
exports["default"] = _default;