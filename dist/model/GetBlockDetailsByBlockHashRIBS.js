"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetBlockDetailsByBlockHashRIBSB = _interopRequireDefault(require("./GetBlockDetailsByBlockHashRIBSB"));
var _GetBlockDetailsByBlockHashRIBSBC = _interopRequireDefault(require("./GetBlockDetailsByBlockHashRIBSBC"));
var _GetBlockDetailsByBlockHashRIBSBSC = _interopRequireDefault(require("./GetBlockDetailsByBlockHashRIBSBSC"));
var _GetBlockDetailsByBlockHashRIBSD = _interopRequireDefault(require("./GetBlockDetailsByBlockHashRIBSD"));
var _GetBlockDetailsByBlockHashRIBSD2 = _interopRequireDefault(require("./GetBlockDetailsByBlockHashRIBSD2"));
var _GetBlockDetailsByBlockHashRIBSE = _interopRequireDefault(require("./GetBlockDetailsByBlockHashRIBSE"));
var _GetBlockDetailsByBlockHashRIBSEC = _interopRequireDefault(require("./GetBlockDetailsByBlockHashRIBSEC"));
var _GetBlockDetailsByBlockHashRIBSL = _interopRequireDefault(require("./GetBlockDetailsByBlockHashRIBSL"));
var _GetBlockDetailsByBlockHashRIBSZ = _interopRequireDefault(require("./GetBlockDetailsByBlockHashRIBSZ"));
var _GetBlockDetailsByBlockHashRIBSZ2 = _interopRequireDefault(require("./GetBlockDetailsByBlockHashRIBSZ2"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetBlockDetailsByBlockHashRIBS model module.
 * @module model/GetBlockDetailsByBlockHashRIBS
 * @version 1.11.0
 */
var GetBlockDetailsByBlockHashRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetBlockDetailsByBlockHashRIBS</code>.
   * @alias module:model/GetBlockDetailsByBlockHashRIBS
   * @param {(module:model/GetBlockDetailsByBlockHashRIBSB|module:model/GetBlockDetailsByBlockHashRIBSBC|module:model/GetBlockDetailsByBlockHashRIBSBSC|module:model/GetBlockDetailsByBlockHashRIBSD|module:model/GetBlockDetailsByBlockHashRIBSD2|module:model/GetBlockDetailsByBlockHashRIBSE|module:model/GetBlockDetailsByBlockHashRIBSEC|module:model/GetBlockDetailsByBlockHashRIBSL|module:model/GetBlockDetailsByBlockHashRIBSZ|module:model/GetBlockDetailsByBlockHashRIBSZ2)} instance The actual instance to initialize GetBlockDetailsByBlockHashRIBS.
   */
  function GetBlockDetailsByBlockHashRIBS() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, GetBlockDetailsByBlockHashRIBS);
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
      if (typeof instance === "GetBlockDetailsByBlockHashRIBSB") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHashRIBSB["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHashRIBSB from JS object
        this.actualInstance = _GetBlockDetailsByBlockHashRIBSB["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHashRIBSB
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHashRIBSB: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHashRIBSE") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHashRIBSE["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHashRIBSE from JS object
        this.actualInstance = _GetBlockDetailsByBlockHashRIBSE["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHashRIBSE
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHashRIBSE: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHashRIBSEC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHashRIBSEC["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHashRIBSEC from JS object
        this.actualInstance = _GetBlockDetailsByBlockHashRIBSEC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHashRIBSEC
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHashRIBSEC: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHashRIBSBC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHashRIBSBC["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHashRIBSBC from JS object
        this.actualInstance = _GetBlockDetailsByBlockHashRIBSBC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHashRIBSBC
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHashRIBSBC: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHashRIBSL") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHashRIBSL["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHashRIBSL from JS object
        this.actualInstance = _GetBlockDetailsByBlockHashRIBSL["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHashRIBSL
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHashRIBSL: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHashRIBSD") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHashRIBSD["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHashRIBSD from JS object
        this.actualInstance = _GetBlockDetailsByBlockHashRIBSD["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHashRIBSD
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHashRIBSD: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHashRIBSD2") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHashRIBSD2["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHashRIBSD2 from JS object
        this.actualInstance = _GetBlockDetailsByBlockHashRIBSD2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHashRIBSD2
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHashRIBSD2: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHashRIBSBSC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHashRIBSBSC["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHashRIBSBSC from JS object
        this.actualInstance = _GetBlockDetailsByBlockHashRIBSBSC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHashRIBSBSC
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHashRIBSBSC: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHashRIBSZ") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHashRIBSZ["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHashRIBSZ from JS object
        this.actualInstance = _GetBlockDetailsByBlockHashRIBSZ["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHashRIBSZ
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHashRIBSZ: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHashRIBSZ2") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHashRIBSZ2["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHashRIBSZ2 from JS object
        this.actualInstance = _GetBlockDetailsByBlockHashRIBSZ2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHashRIBSZ2
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHashRIBSZ2: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `GetBlockDetailsByBlockHashRIBS` with oneOf schemas GetBlockDetailsByBlockHashRIBSB, GetBlockDetailsByBlockHashRIBSBC, GetBlockDetailsByBlockHashRIBSBSC, GetBlockDetailsByBlockHashRIBSD, GetBlockDetailsByBlockHashRIBSD2, GetBlockDetailsByBlockHashRIBSE, GetBlockDetailsByBlockHashRIBSEC, GetBlockDetailsByBlockHashRIBSL, GetBlockDetailsByBlockHashRIBSZ, GetBlockDetailsByBlockHashRIBSZ2. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `GetBlockDetailsByBlockHashRIBS` with oneOf schemas GetBlockDetailsByBlockHashRIBSB, GetBlockDetailsByBlockHashRIBSBC, GetBlockDetailsByBlockHashRIBSBSC, GetBlockDetailsByBlockHashRIBSD, GetBlockDetailsByBlockHashRIBSD2, GetBlockDetailsByBlockHashRIBSE, GetBlockDetailsByBlockHashRIBSEC, GetBlockDetailsByBlockHashRIBSL, GetBlockDetailsByBlockHashRIBSZ, GetBlockDetailsByBlockHashRIBSZ2. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>GetBlockDetailsByBlockHashRIBS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBlockDetailsByBlockHashRIBS} obj Optional instance to populate.
   * @return {module:model/GetBlockDetailsByBlockHashRIBS} The populated <code>GetBlockDetailsByBlockHashRIBS</code> instance.
   */
  _createClass(GetBlockDetailsByBlockHashRIBS, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>GetBlockDetailsByBlockHashRIBSB</code>, <code>GetBlockDetailsByBlockHashRIBSBC</code>, <code>GetBlockDetailsByBlockHashRIBSBSC</code>, <code>GetBlockDetailsByBlockHashRIBSD</code>, <code>GetBlockDetailsByBlockHashRIBSD2</code>, <code>GetBlockDetailsByBlockHashRIBSE</code>, <code>GetBlockDetailsByBlockHashRIBSEC</code>, <code>GetBlockDetailsByBlockHashRIBSL</code>, <code>GetBlockDetailsByBlockHashRIBSZ</code>, <code>GetBlockDetailsByBlockHashRIBSZ2</code>.
     * @return {(module:model/GetBlockDetailsByBlockHashRIBSB|module:model/GetBlockDetailsByBlockHashRIBSBC|module:model/GetBlockDetailsByBlockHashRIBSBSC|module:model/GetBlockDetailsByBlockHashRIBSD|module:model/GetBlockDetailsByBlockHashRIBSD2|module:model/GetBlockDetailsByBlockHashRIBSE|module:model/GetBlockDetailsByBlockHashRIBSEC|module:model/GetBlockDetailsByBlockHashRIBSL|module:model/GetBlockDetailsByBlockHashRIBSZ|module:model/GetBlockDetailsByBlockHashRIBSZ2)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>GetBlockDetailsByBlockHashRIBSB</code>, <code>GetBlockDetailsByBlockHashRIBSBC</code>, <code>GetBlockDetailsByBlockHashRIBSBSC</code>, <code>GetBlockDetailsByBlockHashRIBSD</code>, <code>GetBlockDetailsByBlockHashRIBSD2</code>, <code>GetBlockDetailsByBlockHashRIBSE</code>, <code>GetBlockDetailsByBlockHashRIBSEC</code>, <code>GetBlockDetailsByBlockHashRIBSL</code>, <code>GetBlockDetailsByBlockHashRIBSZ</code>, <code>GetBlockDetailsByBlockHashRIBSZ2</code>.
     * @param {(module:model/GetBlockDetailsByBlockHashRIBSB|module:model/GetBlockDetailsByBlockHashRIBSBC|module:model/GetBlockDetailsByBlockHashRIBSBSC|module:model/GetBlockDetailsByBlockHashRIBSD|module:model/GetBlockDetailsByBlockHashRIBSD2|module:model/GetBlockDetailsByBlockHashRIBSE|module:model/GetBlockDetailsByBlockHashRIBSEC|module:model/GetBlockDetailsByBlockHashRIBSL|module:model/GetBlockDetailsByBlockHashRIBSZ|module:model/GetBlockDetailsByBlockHashRIBSZ2)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = GetBlockDetailsByBlockHashRIBS.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new GetBlockDetailsByBlockHashRIBS(data);
    }
  }]);
  return GetBlockDetailsByBlockHashRIBS;
}();
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_defineProperty(GetBlockDetailsByBlockHashRIBS, "fromJSON", function (json_string) {
  return GetBlockDetailsByBlockHashRIBS.constructFromObject(JSON.parse(json_string));
});
GetBlockDetailsByBlockHashRIBS.prototype['difficulty'] = undefined;

/**
 * Represents a specific sub-unit of Zcash. Bits have two-decimal precision
 * @member {String} bits
 */
GetBlockDetailsByBlockHashRIBS.prototype['bits'] = undefined;

/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetBlockDetailsByBlockHashRIBS.prototype['chainwork'] = undefined;

/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetBlockDetailsByBlockHashRIBS.prototype['merkleRoot'] = undefined;

/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
GetBlockDetailsByBlockHashRIBS.prototype['nonce'] = undefined;

/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHashRIBS.prototype['size'] = undefined;

/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
GetBlockDetailsByBlockHashRIBS.prototype['strippedSize'] = undefined;

/**
 * Represents the block version number.
 * @member {Number} version
 */
GetBlockDetailsByBlockHashRIBS.prototype['version'] = undefined;

/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
GetBlockDetailsByBlockHashRIBS.prototype['versionHex'] = undefined;

/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
GetBlockDetailsByBlockHashRIBS.prototype['weight'] = undefined;

/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
GetBlockDetailsByBlockHashRIBS.prototype['extraData'] = undefined;

/**
 * Numeric representation of the block gas_limit
 * @member {Number} gasLimit
 */
GetBlockDetailsByBlockHashRIBS.prototype['gasLimit'] = undefined;

/**
 * Numeric representation of the block gas_limit
 * @member {Number} gasUsed
 */
GetBlockDetailsByBlockHashRIBS.prototype['gasUsed'] = undefined;

/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
GetBlockDetailsByBlockHashRIBS.prototype['minedInSeconds'] = undefined;

/**
 * Defines the combined hash of all uncles for a given paren
 * @member {String} sha3Uncles
 */
GetBlockDetailsByBlockHashRIBS.prototype['sha3Uncles'] = undefined;

/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
GetBlockDetailsByBlockHashRIBS.prototype['totalDifficulty'] = undefined;

/**
 * @member {Array.<String>} uncles
 */
GetBlockDetailsByBlockHashRIBS.prototype['uncles'] = undefined;

/**
 * Numeric representation of the ds block
 * @member {Number} dsBlock
 */
GetBlockDetailsByBlockHashRIBS.prototype['dsBlock'] = undefined;

/**
 * Numeric representation of the ds difficulty
 * @member {String} dsDifficulty
 */
GetBlockDetailsByBlockHashRIBS.prototype['dsDifficulty'] = undefined;

/**
 * String representation of the ds leader
 * @member {String} dsLeader
 */
GetBlockDetailsByBlockHashRIBS.prototype['dsLeader'] = undefined;

/**
 * @member {Array.<String>} microBlocks
 */
GetBlockDetailsByBlockHashRIBS.prototype['microBlocks'] = undefined;
GetBlockDetailsByBlockHashRIBS.OneOf = ["GetBlockDetailsByBlockHashRIBSB", "GetBlockDetailsByBlockHashRIBSBC", "GetBlockDetailsByBlockHashRIBSBSC", "GetBlockDetailsByBlockHashRIBSD", "GetBlockDetailsByBlockHashRIBSD2", "GetBlockDetailsByBlockHashRIBSE", "GetBlockDetailsByBlockHashRIBSEC", "GetBlockDetailsByBlockHashRIBSL", "GetBlockDetailsByBlockHashRIBSZ", "GetBlockDetailsByBlockHashRIBSZ2"];
var _default = GetBlockDetailsByBlockHashRIBS;
exports["default"] = _default;