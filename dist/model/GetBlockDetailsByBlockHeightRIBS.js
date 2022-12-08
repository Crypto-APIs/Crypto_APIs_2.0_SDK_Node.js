"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetBlockDetailsByBlockHeightRIBSB = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightRIBSB"));
var _GetBlockDetailsByBlockHeightRIBSBC = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightRIBSBC"));
var _GetBlockDetailsByBlockHeightRIBSBSC = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightRIBSBSC"));
var _GetBlockDetailsByBlockHeightRIBSD = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightRIBSD"));
var _GetBlockDetailsByBlockHeightRIBSD2 = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightRIBSD2"));
var _GetBlockDetailsByBlockHeightRIBSE = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightRIBSE"));
var _GetBlockDetailsByBlockHeightRIBSEC = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightRIBSEC"));
var _GetBlockDetailsByBlockHeightRIBSL = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightRIBSL"));
var _GetBlockDetailsByBlockHeightRIBSZ = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightRIBSZ"));
var _GetBlockDetailsByBlockHeightRIBSZ2 = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightRIBSZ2"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetBlockDetailsByBlockHeightRIBS model module.
 * @module model/GetBlockDetailsByBlockHeightRIBS
 * @version 1.11.0
 */
var GetBlockDetailsByBlockHeightRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetBlockDetailsByBlockHeightRIBS</code>.
   * @alias module:model/GetBlockDetailsByBlockHeightRIBS
   * @param {(module:model/GetBlockDetailsByBlockHeightRIBSB|module:model/GetBlockDetailsByBlockHeightRIBSBC|module:model/GetBlockDetailsByBlockHeightRIBSBSC|module:model/GetBlockDetailsByBlockHeightRIBSD|module:model/GetBlockDetailsByBlockHeightRIBSD2|module:model/GetBlockDetailsByBlockHeightRIBSE|module:model/GetBlockDetailsByBlockHeightRIBSEC|module:model/GetBlockDetailsByBlockHeightRIBSL|module:model/GetBlockDetailsByBlockHeightRIBSZ|module:model/GetBlockDetailsByBlockHeightRIBSZ2)} instance The actual instance to initialize GetBlockDetailsByBlockHeightRIBS.
   */
  function GetBlockDetailsByBlockHeightRIBS() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, GetBlockDetailsByBlockHeightRIBS);
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
      if (typeof instance === "GetBlockDetailsByBlockHeightRIBSB") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHeightRIBSB["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHeightRIBSB from JS object
        this.actualInstance = _GetBlockDetailsByBlockHeightRIBSB["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHeightRIBSB
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHeightRIBSB: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHeightRIBSE") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHeightRIBSE["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHeightRIBSE from JS object
        this.actualInstance = _GetBlockDetailsByBlockHeightRIBSE["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHeightRIBSE
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHeightRIBSE: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHeightRIBSEC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHeightRIBSEC["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHeightRIBSEC from JS object
        this.actualInstance = _GetBlockDetailsByBlockHeightRIBSEC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHeightRIBSEC
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHeightRIBSEC: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHeightRIBSBC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHeightRIBSBC["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHeightRIBSBC from JS object
        this.actualInstance = _GetBlockDetailsByBlockHeightRIBSBC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHeightRIBSBC
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHeightRIBSBC: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHeightRIBSL") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHeightRIBSL["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHeightRIBSL from JS object
        this.actualInstance = _GetBlockDetailsByBlockHeightRIBSL["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHeightRIBSL
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHeightRIBSL: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHeightRIBSD") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHeightRIBSD["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHeightRIBSD from JS object
        this.actualInstance = _GetBlockDetailsByBlockHeightRIBSD["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHeightRIBSD
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHeightRIBSD: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHeightRIBSD2") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHeightRIBSD2["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHeightRIBSD2 from JS object
        this.actualInstance = _GetBlockDetailsByBlockHeightRIBSD2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHeightRIBSD2
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHeightRIBSD2: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHeightRIBSBSC") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHeightRIBSBSC["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHeightRIBSBSC from JS object
        this.actualInstance = _GetBlockDetailsByBlockHeightRIBSBSC["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHeightRIBSBSC
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHeightRIBSBSC: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHeightRIBSZ") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHeightRIBSZ["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHeightRIBSZ from JS object
        this.actualInstance = _GetBlockDetailsByBlockHeightRIBSZ["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHeightRIBSZ
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHeightRIBSZ: " + err);
    }
    try {
      if (typeof instance === "GetBlockDetailsByBlockHeightRIBSZ2") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _GetBlockDetailsByBlockHeightRIBSZ2["default"].validateJSON(instance); // throw an exception if no match
        // create GetBlockDetailsByBlockHeightRIBSZ2 from JS object
        this.actualInstance = _GetBlockDetailsByBlockHeightRIBSZ2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into GetBlockDetailsByBlockHeightRIBSZ2
      errorMessages.push("Failed to construct GetBlockDetailsByBlockHeightRIBSZ2: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `GetBlockDetailsByBlockHeightRIBS` with oneOf schemas GetBlockDetailsByBlockHeightRIBSB, GetBlockDetailsByBlockHeightRIBSBC, GetBlockDetailsByBlockHeightRIBSBSC, GetBlockDetailsByBlockHeightRIBSD, GetBlockDetailsByBlockHeightRIBSD2, GetBlockDetailsByBlockHeightRIBSE, GetBlockDetailsByBlockHeightRIBSEC, GetBlockDetailsByBlockHeightRIBSL, GetBlockDetailsByBlockHeightRIBSZ, GetBlockDetailsByBlockHeightRIBSZ2. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `GetBlockDetailsByBlockHeightRIBS` with oneOf schemas GetBlockDetailsByBlockHeightRIBSB, GetBlockDetailsByBlockHeightRIBSBC, GetBlockDetailsByBlockHeightRIBSBSC, GetBlockDetailsByBlockHeightRIBSD, GetBlockDetailsByBlockHeightRIBSD2, GetBlockDetailsByBlockHeightRIBSE, GetBlockDetailsByBlockHeightRIBSEC, GetBlockDetailsByBlockHeightRIBSL, GetBlockDetailsByBlockHeightRIBSZ, GetBlockDetailsByBlockHeightRIBSZ2. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>GetBlockDetailsByBlockHeightRIBS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBlockDetailsByBlockHeightRIBS} obj Optional instance to populate.
   * @return {module:model/GetBlockDetailsByBlockHeightRIBS} The populated <code>GetBlockDetailsByBlockHeightRIBS</code> instance.
   */
  _createClass(GetBlockDetailsByBlockHeightRIBS, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>GetBlockDetailsByBlockHeightRIBSB</code>, <code>GetBlockDetailsByBlockHeightRIBSBC</code>, <code>GetBlockDetailsByBlockHeightRIBSBSC</code>, <code>GetBlockDetailsByBlockHeightRIBSD</code>, <code>GetBlockDetailsByBlockHeightRIBSD2</code>, <code>GetBlockDetailsByBlockHeightRIBSE</code>, <code>GetBlockDetailsByBlockHeightRIBSEC</code>, <code>GetBlockDetailsByBlockHeightRIBSL</code>, <code>GetBlockDetailsByBlockHeightRIBSZ</code>, <code>GetBlockDetailsByBlockHeightRIBSZ2</code>.
     * @return {(module:model/GetBlockDetailsByBlockHeightRIBSB|module:model/GetBlockDetailsByBlockHeightRIBSBC|module:model/GetBlockDetailsByBlockHeightRIBSBSC|module:model/GetBlockDetailsByBlockHeightRIBSD|module:model/GetBlockDetailsByBlockHeightRIBSD2|module:model/GetBlockDetailsByBlockHeightRIBSE|module:model/GetBlockDetailsByBlockHeightRIBSEC|module:model/GetBlockDetailsByBlockHeightRIBSL|module:model/GetBlockDetailsByBlockHeightRIBSZ|module:model/GetBlockDetailsByBlockHeightRIBSZ2)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>GetBlockDetailsByBlockHeightRIBSB</code>, <code>GetBlockDetailsByBlockHeightRIBSBC</code>, <code>GetBlockDetailsByBlockHeightRIBSBSC</code>, <code>GetBlockDetailsByBlockHeightRIBSD</code>, <code>GetBlockDetailsByBlockHeightRIBSD2</code>, <code>GetBlockDetailsByBlockHeightRIBSE</code>, <code>GetBlockDetailsByBlockHeightRIBSEC</code>, <code>GetBlockDetailsByBlockHeightRIBSL</code>, <code>GetBlockDetailsByBlockHeightRIBSZ</code>, <code>GetBlockDetailsByBlockHeightRIBSZ2</code>.
     * @param {(module:model/GetBlockDetailsByBlockHeightRIBSB|module:model/GetBlockDetailsByBlockHeightRIBSBC|module:model/GetBlockDetailsByBlockHeightRIBSBSC|module:model/GetBlockDetailsByBlockHeightRIBSD|module:model/GetBlockDetailsByBlockHeightRIBSD2|module:model/GetBlockDetailsByBlockHeightRIBSE|module:model/GetBlockDetailsByBlockHeightRIBSEC|module:model/GetBlockDetailsByBlockHeightRIBSL|module:model/GetBlockDetailsByBlockHeightRIBSZ|module:model/GetBlockDetailsByBlockHeightRIBSZ2)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = GetBlockDetailsByBlockHeightRIBS.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new GetBlockDetailsByBlockHeightRIBS(data);
    }
  }]);
  return GetBlockDetailsByBlockHeightRIBS;
}();
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_defineProperty(GetBlockDetailsByBlockHeightRIBS, "fromJSON", function (json_string) {
  return GetBlockDetailsByBlockHeightRIBS.constructFromObject(JSON.parse(json_string));
});
GetBlockDetailsByBlockHeightRIBS.prototype['difficulty'] = undefined;

/**
 * Represents a specific sub-unit of Zcash. Bits have two-decimal precision
 * @member {String} bits
 */
GetBlockDetailsByBlockHeightRIBS.prototype['bits'] = undefined;

/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetBlockDetailsByBlockHeightRIBS.prototype['chainwork'] = undefined;

/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetBlockDetailsByBlockHeightRIBS.prototype['merkleRoot'] = undefined;

/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
GetBlockDetailsByBlockHeightRIBS.prototype['nonce'] = undefined;

/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHeightRIBS.prototype['size'] = undefined;

/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
GetBlockDetailsByBlockHeightRIBS.prototype['strippedSize'] = undefined;

/**
 * Represents the block version number.
 * @member {Number} version
 */
GetBlockDetailsByBlockHeightRIBS.prototype['version'] = undefined;

/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
GetBlockDetailsByBlockHeightRIBS.prototype['versionHex'] = undefined;

/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limi
 * @member {Number} weight
 */
GetBlockDetailsByBlockHeightRIBS.prototype['weight'] = undefined;

/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
GetBlockDetailsByBlockHeightRIBS.prototype['extraData'] = undefined;

/**
 * Numeric representation of the block gas_limit
 * @member {Number} gasLimit
 */
GetBlockDetailsByBlockHeightRIBS.prototype['gasLimit'] = undefined;

/**
 * Numeric representation of the block gas_limit
 * @member {Number} gasUsed
 */
GetBlockDetailsByBlockHeightRIBS.prototype['gasUsed'] = undefined;

/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
GetBlockDetailsByBlockHeightRIBS.prototype['minedInSeconds'] = undefined;

/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
GetBlockDetailsByBlockHeightRIBS.prototype['sha3Uncles'] = undefined;

/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
GetBlockDetailsByBlockHeightRIBS.prototype['totalDifficulty'] = undefined;

/**
 * Numeric representation of the ds block
 * @member {Number} dsBlock
 */
GetBlockDetailsByBlockHeightRIBS.prototype['dsBlock'] = undefined;

/**
 * Numeric representation of the ds difficulty
 * @member {String} dsDifficulty
 */
GetBlockDetailsByBlockHeightRIBS.prototype['dsDifficulty'] = undefined;

/**
 * String representation of the ds leader
 * @member {String} dsLeader
 */
GetBlockDetailsByBlockHeightRIBS.prototype['dsLeader'] = undefined;

/**
 * @member {Array.<String>} microBlocks
 */
GetBlockDetailsByBlockHeightRIBS.prototype['microBlocks'] = undefined;
GetBlockDetailsByBlockHeightRIBS.OneOf = ["GetBlockDetailsByBlockHeightRIBSB", "GetBlockDetailsByBlockHeightRIBSBC", "GetBlockDetailsByBlockHeightRIBSBSC", "GetBlockDetailsByBlockHeightRIBSD", "GetBlockDetailsByBlockHeightRIBSD2", "GetBlockDetailsByBlockHeightRIBSE", "GetBlockDetailsByBlockHeightRIBSEC", "GetBlockDetailsByBlockHeightRIBSL", "GetBlockDetailsByBlockHeightRIBSZ", "GetBlockDetailsByBlockHeightRIBSZ2"];
var _default = GetBlockDetailsByBlockHeightRIBS;
exports["default"] = _default;