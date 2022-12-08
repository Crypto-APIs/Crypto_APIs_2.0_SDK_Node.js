"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListLatestMinedBlocksRIBSB = _interopRequireDefault(require("./ListLatestMinedBlocksRIBSB"));
var _ListLatestMinedBlocksRIBSBC = _interopRequireDefault(require("./ListLatestMinedBlocksRIBSBC"));
var _ListLatestMinedBlocksRIBSBSC = _interopRequireDefault(require("./ListLatestMinedBlocksRIBSBSC"));
var _ListLatestMinedBlocksRIBSD = _interopRequireDefault(require("./ListLatestMinedBlocksRIBSD"));
var _ListLatestMinedBlocksRIBSD2 = _interopRequireDefault(require("./ListLatestMinedBlocksRIBSD2"));
var _ListLatestMinedBlocksRIBSE = _interopRequireDefault(require("./ListLatestMinedBlocksRIBSE"));
var _ListLatestMinedBlocksRIBSEC = _interopRequireDefault(require("./ListLatestMinedBlocksRIBSEC"));
var _ListLatestMinedBlocksRIBSL = _interopRequireDefault(require("./ListLatestMinedBlocksRIBSL"));
var _ListLatestMinedBlocksRIBST = _interopRequireDefault(require("./ListLatestMinedBlocksRIBST"));
var _ListLatestMinedBlocksRIBSX = _interopRequireDefault(require("./ListLatestMinedBlocksRIBSX"));
var _ListLatestMinedBlocksRIBSXTotalCoins = _interopRequireDefault(require("./ListLatestMinedBlocksRIBSXTotalCoins"));
var _ListLatestMinedBlocksRIBSXTotalFees = _interopRequireDefault(require("./ListLatestMinedBlocksRIBSXTotalFees"));
var _ListLatestMinedBlocksRIBSZ = _interopRequireDefault(require("./ListLatestMinedBlocksRIBSZ"));
var _ListLatestMinedBlocksRIBSZ2 = _interopRequireDefault(require("./ListLatestMinedBlocksRIBSZ2"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListLatestMinedBlocksRIBS model module.
 * @module model/ListLatestMinedBlocksRIBS
 * @version 1.11.0
 */
var ListLatestMinedBlocksRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListLatestMinedBlocksRIBS</code>.
   * @alias module:model/ListLatestMinedBlocksRIBS
   * @param {(module:model/ListLatestMinedBlocksRIBSB|module:model/ListLatestMinedBlocksRIBSBC|module:model/ListLatestMinedBlocksRIBSBSC|module:model/ListLatestMinedBlocksRIBSD|module:model/ListLatestMinedBlocksRIBSD2|module:model/ListLatestMinedBlocksRIBSE|module:model/ListLatestMinedBlocksRIBSEC|module:model/ListLatestMinedBlocksRIBSL|module:model/ListLatestMinedBlocksRIBST|module:model/ListLatestMinedBlocksRIBSX|module:model/ListLatestMinedBlocksRIBSZ|module:model/ListLatestMinedBlocksRIBSZ2)} instance The actual instance to initialize ListLatestMinedBlocksRIBS.
   */
  function ListLatestMinedBlocksRIBS() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, ListLatestMinedBlocksRIBS);
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
      if (typeof instance === "ListLatestMinedBlocksRIBSB") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListLatestMinedBlocksRIBSB["default"].validateJSON(instance); // throw an exception if no match
        // create ListLatestMinedBlocksRIBSB from JS object
        this.actualInstance = _ListLatestMinedBlocksRIBSB["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListLatestMinedBlocksRIBSB
      errorMessages.push("Failed to construct ListLatestMinedBlocksRIBSB: " + err);
    }
    try {
      if (typeof instance === "ListLatestMinedBlocksRIBSBC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListLatestMinedBlocksRIBSBC["default"].validateJSON(instance); // throw an exception if no match
        // create ListLatestMinedBlocksRIBSBC from JS object
        this.actualInstance = _ListLatestMinedBlocksRIBSBC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListLatestMinedBlocksRIBSBC
      errorMessages.push("Failed to construct ListLatestMinedBlocksRIBSBC: " + err);
    }
    try {
      if (typeof instance === "ListLatestMinedBlocksRIBSEC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListLatestMinedBlocksRIBSEC["default"].validateJSON(instance); // throw an exception if no match
        // create ListLatestMinedBlocksRIBSEC from JS object
        this.actualInstance = _ListLatestMinedBlocksRIBSEC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListLatestMinedBlocksRIBSEC
      errorMessages.push("Failed to construct ListLatestMinedBlocksRIBSEC: " + err);
    }
    try {
      if (typeof instance === "ListLatestMinedBlocksRIBSE") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListLatestMinedBlocksRIBSE["default"].validateJSON(instance); // throw an exception if no match
        // create ListLatestMinedBlocksRIBSE from JS object
        this.actualInstance = _ListLatestMinedBlocksRIBSE["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListLatestMinedBlocksRIBSE
      errorMessages.push("Failed to construct ListLatestMinedBlocksRIBSE: " + err);
    }
    try {
      if (typeof instance === "ListLatestMinedBlocksRIBSL") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListLatestMinedBlocksRIBSL["default"].validateJSON(instance); // throw an exception if no match
        // create ListLatestMinedBlocksRIBSL from JS object
        this.actualInstance = _ListLatestMinedBlocksRIBSL["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListLatestMinedBlocksRIBSL
      errorMessages.push("Failed to construct ListLatestMinedBlocksRIBSL: " + err);
    }
    try {
      if (typeof instance === "ListLatestMinedBlocksRIBSD") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListLatestMinedBlocksRIBSD["default"].validateJSON(instance); // throw an exception if no match
        // create ListLatestMinedBlocksRIBSD from JS object
        this.actualInstance = _ListLatestMinedBlocksRIBSD["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListLatestMinedBlocksRIBSD
      errorMessages.push("Failed to construct ListLatestMinedBlocksRIBSD: " + err);
    }
    try {
      if (typeof instance === "ListLatestMinedBlocksRIBSD2") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListLatestMinedBlocksRIBSD2["default"].validateJSON(instance); // throw an exception if no match
        // create ListLatestMinedBlocksRIBSD2 from JS object
        this.actualInstance = _ListLatestMinedBlocksRIBSD2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListLatestMinedBlocksRIBSD2
      errorMessages.push("Failed to construct ListLatestMinedBlocksRIBSD2: " + err);
    }
    try {
      if (typeof instance === "ListLatestMinedBlocksRIBSBSC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListLatestMinedBlocksRIBSBSC["default"].validateJSON(instance); // throw an exception if no match
        // create ListLatestMinedBlocksRIBSBSC from JS object
        this.actualInstance = _ListLatestMinedBlocksRIBSBSC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListLatestMinedBlocksRIBSBSC
      errorMessages.push("Failed to construct ListLatestMinedBlocksRIBSBSC: " + err);
    }
    try {
      if (typeof instance === "ListLatestMinedBlocksRIBSZ") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListLatestMinedBlocksRIBSZ["default"].validateJSON(instance); // throw an exception if no match
        // create ListLatestMinedBlocksRIBSZ from JS object
        this.actualInstance = _ListLatestMinedBlocksRIBSZ["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListLatestMinedBlocksRIBSZ
      errorMessages.push("Failed to construct ListLatestMinedBlocksRIBSZ: " + err);
    }
    try {
      if (typeof instance === "ListLatestMinedBlocksRIBSZ2") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListLatestMinedBlocksRIBSZ2["default"].validateJSON(instance); // throw an exception if no match
        // create ListLatestMinedBlocksRIBSZ2 from JS object
        this.actualInstance = _ListLatestMinedBlocksRIBSZ2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListLatestMinedBlocksRIBSZ2
      errorMessages.push("Failed to construct ListLatestMinedBlocksRIBSZ2: " + err);
    }
    try {
      if (typeof instance === "ListLatestMinedBlocksRIBSX") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListLatestMinedBlocksRIBSX["default"].validateJSON(instance); // throw an exception if no match
        // create ListLatestMinedBlocksRIBSX from JS object
        this.actualInstance = _ListLatestMinedBlocksRIBSX["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListLatestMinedBlocksRIBSX
      errorMessages.push("Failed to construct ListLatestMinedBlocksRIBSX: " + err);
    }
    try {
      if (typeof instance === "ListLatestMinedBlocksRIBST") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ListLatestMinedBlocksRIBST["default"].validateJSON(instance); // throw an exception if no match
        // create ListLatestMinedBlocksRIBST from JS object
        this.actualInstance = _ListLatestMinedBlocksRIBST["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ListLatestMinedBlocksRIBST
      errorMessages.push("Failed to construct ListLatestMinedBlocksRIBST: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `ListLatestMinedBlocksRIBS` with oneOf schemas ListLatestMinedBlocksRIBSB, ListLatestMinedBlocksRIBSBC, ListLatestMinedBlocksRIBSBSC, ListLatestMinedBlocksRIBSD, ListLatestMinedBlocksRIBSD2, ListLatestMinedBlocksRIBSE, ListLatestMinedBlocksRIBSEC, ListLatestMinedBlocksRIBSL, ListLatestMinedBlocksRIBST, ListLatestMinedBlocksRIBSX, ListLatestMinedBlocksRIBSZ, ListLatestMinedBlocksRIBSZ2. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `ListLatestMinedBlocksRIBS` with oneOf schemas ListLatestMinedBlocksRIBSB, ListLatestMinedBlocksRIBSBC, ListLatestMinedBlocksRIBSBSC, ListLatestMinedBlocksRIBSD, ListLatestMinedBlocksRIBSD2, ListLatestMinedBlocksRIBSE, ListLatestMinedBlocksRIBSEC, ListLatestMinedBlocksRIBSL, ListLatestMinedBlocksRIBST, ListLatestMinedBlocksRIBSX, ListLatestMinedBlocksRIBSZ, ListLatestMinedBlocksRIBSZ2. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>ListLatestMinedBlocksRIBS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListLatestMinedBlocksRIBS} obj Optional instance to populate.
   * @return {module:model/ListLatestMinedBlocksRIBS} The populated <code>ListLatestMinedBlocksRIBS</code> instance.
   */
  _createClass(ListLatestMinedBlocksRIBS, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>ListLatestMinedBlocksRIBSB</code>, <code>ListLatestMinedBlocksRIBSBC</code>, <code>ListLatestMinedBlocksRIBSBSC</code>, <code>ListLatestMinedBlocksRIBSD</code>, <code>ListLatestMinedBlocksRIBSD2</code>, <code>ListLatestMinedBlocksRIBSE</code>, <code>ListLatestMinedBlocksRIBSEC</code>, <code>ListLatestMinedBlocksRIBSL</code>, <code>ListLatestMinedBlocksRIBST</code>, <code>ListLatestMinedBlocksRIBSX</code>, <code>ListLatestMinedBlocksRIBSZ</code>, <code>ListLatestMinedBlocksRIBSZ2</code>.
     * @return {(module:model/ListLatestMinedBlocksRIBSB|module:model/ListLatestMinedBlocksRIBSBC|module:model/ListLatestMinedBlocksRIBSBSC|module:model/ListLatestMinedBlocksRIBSD|module:model/ListLatestMinedBlocksRIBSD2|module:model/ListLatestMinedBlocksRIBSE|module:model/ListLatestMinedBlocksRIBSEC|module:model/ListLatestMinedBlocksRIBSL|module:model/ListLatestMinedBlocksRIBST|module:model/ListLatestMinedBlocksRIBSX|module:model/ListLatestMinedBlocksRIBSZ|module:model/ListLatestMinedBlocksRIBSZ2)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>ListLatestMinedBlocksRIBSB</code>, <code>ListLatestMinedBlocksRIBSBC</code>, <code>ListLatestMinedBlocksRIBSBSC</code>, <code>ListLatestMinedBlocksRIBSD</code>, <code>ListLatestMinedBlocksRIBSD2</code>, <code>ListLatestMinedBlocksRIBSE</code>, <code>ListLatestMinedBlocksRIBSEC</code>, <code>ListLatestMinedBlocksRIBSL</code>, <code>ListLatestMinedBlocksRIBST</code>, <code>ListLatestMinedBlocksRIBSX</code>, <code>ListLatestMinedBlocksRIBSZ</code>, <code>ListLatestMinedBlocksRIBSZ2</code>.
     * @param {(module:model/ListLatestMinedBlocksRIBSB|module:model/ListLatestMinedBlocksRIBSBC|module:model/ListLatestMinedBlocksRIBSBSC|module:model/ListLatestMinedBlocksRIBSD|module:model/ListLatestMinedBlocksRIBSD2|module:model/ListLatestMinedBlocksRIBSE|module:model/ListLatestMinedBlocksRIBSEC|module:model/ListLatestMinedBlocksRIBSL|module:model/ListLatestMinedBlocksRIBST|module:model/ListLatestMinedBlocksRIBSX|module:model/ListLatestMinedBlocksRIBSZ|module:model/ListLatestMinedBlocksRIBSZ2)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = ListLatestMinedBlocksRIBS.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new ListLatestMinedBlocksRIBS(data);
    }
  }]);
  return ListLatestMinedBlocksRIBS;
}();
/**
 * Represents a specific sub-unit of Zcash. Bits have two-decimal precision
 * @member {String} bits
 */
_defineProperty(ListLatestMinedBlocksRIBS, "fromJSON", function (json_string) {
  return ListLatestMinedBlocksRIBS.constructFromObject(JSON.parse(json_string));
});
ListLatestMinedBlocksRIBS.prototype['bits'] = undefined;

/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
ListLatestMinedBlocksRIBS.prototype['chainwork'] = undefined;

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
ListLatestMinedBlocksRIBS.prototype['difficulty'] = undefined;

/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
ListLatestMinedBlocksRIBS.prototype['merkleRoot'] = undefined;

/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
ListLatestMinedBlocksRIBS.prototype['nonce'] = undefined;

/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
ListLatestMinedBlocksRIBS.prototype['size'] = undefined;

/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
ListLatestMinedBlocksRIBS.prototype['strippedSize'] = undefined;

/**
 * Represents the transaction version number.
 * @member {Number} version
 */
ListLatestMinedBlocksRIBS.prototype['version'] = undefined;

/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
ListLatestMinedBlocksRIBS.prototype['versionHex'] = undefined;

/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
ListLatestMinedBlocksRIBS.prototype['weight'] = undefined;

/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
ListLatestMinedBlocksRIBS.prototype['extraData'] = undefined;

/**
 * Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
 * @member {Number} gasLimit
 */
ListLatestMinedBlocksRIBS.prototype['gasLimit'] = undefined;

/**
 * Defines how much of the gas for the block has been used.
 * @member {Number} gasUsed
 */
ListLatestMinedBlocksRIBS.prototype['gasUsed'] = undefined;

/**
 * Specifies the amount of time required for the block to be mined in second
 * @member {Number} minedInSeconds
 */
ListLatestMinedBlocksRIBS.prototype['minedInSeconds'] = undefined;

/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
ListLatestMinedBlocksRIBS.prototype['sha3Uncles'] = undefined;

/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block
 * @member {String} totalDifficulty
 */
ListLatestMinedBlocksRIBS.prototype['totalDifficulty'] = undefined;

/**
 * @member {Array.<String>} uncles
 */
ListLatestMinedBlocksRIBS.prototype['uncles'] = undefined;

/**
 * Represents the Directory Service block which contains metadata about the miners who participate in the consensus protocol.
 * @member {Number} dsBlock
 */
ListLatestMinedBlocksRIBS.prototype['dsBlock'] = undefined;

/**
 * Defines how difficult it is to mine the dsBlocks.
 * @member {String} dsDifficulty
 */
ListLatestMinedBlocksRIBS.prototype['dsDifficulty'] = undefined;

/**
 * Represents a part of the DS Committee which leads the consensus protocol for the epoch.
 * @member {String} dsLeader
 */
ListLatestMinedBlocksRIBS.prototype['dsLeader'] = undefined;

/**
 * @member {Array.<String>} microBlocks
 */
ListLatestMinedBlocksRIBS.prototype['microBlocks'] = undefined;

/**
 * @member {module:model/ListLatestMinedBlocksRIBSXTotalCoins} totalCoins
 */
ListLatestMinedBlocksRIBS.prototype['totalCoins'] = undefined;

/**
 * @member {module:model/ListLatestMinedBlocksRIBSXTotalFees} totalFees
 */
ListLatestMinedBlocksRIBS.prototype['totalFees'] = undefined;

/**
 * Representation of the blocks' bandwidth limit.
 * @member {String} bandwidthUsed
 */
ListLatestMinedBlocksRIBS.prototype['bandwidthUsed'] = undefined;

/**
 * Representation of the blocks' burned TRX.
 * @member {String} burnedTRX
 */
ListLatestMinedBlocksRIBS.prototype['burnedTRX'] = undefined;

/**
 * Representation of the blocks' energy used.
 * @member {String} energyUsed
 */
ListLatestMinedBlocksRIBS.prototype['energyUsed'] = undefined;
ListLatestMinedBlocksRIBS.OneOf = ["ListLatestMinedBlocksRIBSB", "ListLatestMinedBlocksRIBSBC", "ListLatestMinedBlocksRIBSBSC", "ListLatestMinedBlocksRIBSD", "ListLatestMinedBlocksRIBSD2", "ListLatestMinedBlocksRIBSE", "ListLatestMinedBlocksRIBSEC", "ListLatestMinedBlocksRIBSL", "ListLatestMinedBlocksRIBST", "ListLatestMinedBlocksRIBSX", "ListLatestMinedBlocksRIBSZ", "ListLatestMinedBlocksRIBSZ2"];
var _default = ListLatestMinedBlocksRIBS;
exports["default"] = _default;