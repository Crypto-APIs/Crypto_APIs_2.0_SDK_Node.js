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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetBlockDetailsByBlockHeightRIBS model module.
 * @module model/GetBlockDetailsByBlockHeightRIBS
 * @version 1.13.0
 */
var GetBlockDetailsByBlockHeightRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetBlockDetailsByBlockHeightRIBS</code>.
   * @alias module:model/GetBlockDetailsByBlockHeightRIBS
   * @implements module:model/GetBlockDetailsByBlockHeightRIBSB
   * @implements module:model/GetBlockDetailsByBlockHeightRIBSE
   * @implements module:model/GetBlockDetailsByBlockHeightRIBSEC
   * @implements module:model/GetBlockDetailsByBlockHeightRIBSBC
   * @implements module:model/GetBlockDetailsByBlockHeightRIBSL
   * @implements module:model/GetBlockDetailsByBlockHeightRIBSD
   * @implements module:model/GetBlockDetailsByBlockHeightRIBSD2
   * @implements module:model/GetBlockDetailsByBlockHeightRIBSBSC
   * @implements module:model/GetBlockDetailsByBlockHeightRIBSZ
   * @implements module:model/GetBlockDetailsByBlockHeightRIBSZ2
   * @param difficulty {String} Represents a mathematical value of how hard it is to find a valid hash for this block.
   * @param bits {String} Represents a specific sub-unit of Zcash. Bits have two-decimal precision
   * @param chainwork {String} Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
   * @param merkleRoot {String} Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
   * @param nonce {String} Represents a random value that can be adjusted to satisfy the Proof of Work.
   * @param size {Number} Represents the total size of the block in Bytes.
   * @param strippedSize {Number} Defines the numeric representation of the block size excluding the witness data.
   * @param version {Number} Represents the block version number.
   * @param versionHex {String} Is the hexadecimal string representation of the block's version.
   * @param weight {Number} Represents a measurement to compare the size of different transactions to each other in proportion to the block size limi
   * @param extraData {String} Represents any data that can be included by the miner in the block.
   * @param gasLimit {Number} Numeric representation of the block gas_limit
   * @param gasUsed {Number} Numeric representation of the block gas_limit
   * @param minedInSeconds {Number} Specifies the amount of time required for the block to be mined in seconds.
   * @param sha3Uncles {String} Defines the combined hash of all uncles for a given parent.
   * @param totalDifficulty {String} Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
   * @param dsBlock {Number} Numeric representation of the ds block
   * @param dsDifficulty {String} Numeric representation of the ds difficulty
   * @param dsLeader {String} String representation of the ds leader
   * @param microBlocks {Array.<String>} 
   */
  function GetBlockDetailsByBlockHeightRIBS(difficulty, bits, chainwork, merkleRoot, nonce, size, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, dsBlock, dsDifficulty, dsLeader, microBlocks) {
    _classCallCheck(this, GetBlockDetailsByBlockHeightRIBS);
    _GetBlockDetailsByBlockHeightRIBSB["default"].initialize(this, difficulty, bits, chainwork, merkleRoot, nonce, size, strippedSize, version, versionHex, weight);
    _GetBlockDetailsByBlockHeightRIBSE["default"].initialize(this, difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty);
    _GetBlockDetailsByBlockHeightRIBSEC["default"].initialize(this, difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty);
    _GetBlockDetailsByBlockHeightRIBSBC["default"].initialize(this, difficulty, bits, chainwork, merkleRoot, nonce, size, version, versionHex);
    _GetBlockDetailsByBlockHeightRIBSL["default"].initialize(this, difficulty, bits, chainwork, merkleRoot, nonce, size, strippedSize, version, versionHex, weight);
    _GetBlockDetailsByBlockHeightRIBSD["default"].initialize(this, difficulty, bits, chainwork, merkleRoot, nonce, size, strippedSize, version, weight);
    _GetBlockDetailsByBlockHeightRIBSD2["default"].initialize(this, difficulty, bits, chainwork, merkleRoot, nonce, size, version, versionHex);
    _GetBlockDetailsByBlockHeightRIBSBSC["default"].initialize(this, difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty);
    _GetBlockDetailsByBlockHeightRIBSZ["default"].initialize(this, difficulty, bits, chainwork, merkleRoot, nonce, size, version);
    _GetBlockDetailsByBlockHeightRIBSZ2["default"].initialize(this, difficulty, dsBlock, dsDifficulty, dsLeader, gasLimit, gasUsed, microBlocks);
    GetBlockDetailsByBlockHeightRIBS.initialize(this, difficulty, bits, chainwork, merkleRoot, nonce, size, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, dsBlock, dsDifficulty, dsLeader, microBlocks);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetBlockDetailsByBlockHeightRIBS, null, [{
    key: "initialize",
    value: function initialize(obj, difficulty, bits, chainwork, merkleRoot, nonce, size, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, dsBlock, dsDifficulty, dsLeader, microBlocks) {
      obj['difficulty'] = difficulty;
      obj['bits'] = bits;
      obj['chainwork'] = chainwork;
      obj['merkleRoot'] = merkleRoot;
      obj['nonce'] = nonce;
      obj['size'] = size;
      obj['strippedSize'] = strippedSize;
      obj['version'] = version;
      obj['versionHex'] = versionHex;
      obj['weight'] = weight;
      obj['extraData'] = extraData;
      obj['gasLimit'] = gasLimit;
      obj['gasUsed'] = gasUsed;
      obj['minedInSeconds'] = minedInSeconds;
      obj['sha3Uncles'] = sha3Uncles;
      obj['totalDifficulty'] = totalDifficulty;
      obj['dsBlock'] = dsBlock;
      obj['dsDifficulty'] = dsDifficulty;
      obj['dsLeader'] = dsLeader;
      obj['microBlocks'] = microBlocks;
    }

    /**
     * Constructs a <code>GetBlockDetailsByBlockHeightRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHeightRIBS} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHeightRIBS} The populated <code>GetBlockDetailsByBlockHeightRIBS</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetBlockDetailsByBlockHeightRIBS();
        _GetBlockDetailsByBlockHeightRIBSB["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHeightRIBSE["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHeightRIBSEC["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHeightRIBSBC["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHeightRIBSL["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHeightRIBSD["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHeightRIBSD2["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHeightRIBSBSC["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHeightRIBSZ["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHeightRIBSZ2["default"].constructFromObject(data, obj);
        if (data.hasOwnProperty('difficulty')) {
          obj['difficulty'] = _ApiClient["default"].convertToType(data['difficulty'], 'String');
        }
        if (data.hasOwnProperty('bits')) {
          obj['bits'] = _ApiClient["default"].convertToType(data['bits'], 'String');
        }
        if (data.hasOwnProperty('chainwork')) {
          obj['chainwork'] = _ApiClient["default"].convertToType(data['chainwork'], 'String');
        }
        if (data.hasOwnProperty('merkleRoot')) {
          obj['merkleRoot'] = _ApiClient["default"].convertToType(data['merkleRoot'], 'String');
        }
        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'String');
        }
        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
        if (data.hasOwnProperty('strippedSize')) {
          obj['strippedSize'] = _ApiClient["default"].convertToType(data['strippedSize'], 'Number');
        }
        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }
        if (data.hasOwnProperty('versionHex')) {
          obj['versionHex'] = _ApiClient["default"].convertToType(data['versionHex'], 'String');
        }
        if (data.hasOwnProperty('weight')) {
          obj['weight'] = _ApiClient["default"].convertToType(data['weight'], 'Number');
        }
        if (data.hasOwnProperty('extraData')) {
          obj['extraData'] = _ApiClient["default"].convertToType(data['extraData'], 'String');
        }
        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'Number');
        }
        if (data.hasOwnProperty('gasUsed')) {
          obj['gasUsed'] = _ApiClient["default"].convertToType(data['gasUsed'], 'Number');
        }
        if (data.hasOwnProperty('minedInSeconds')) {
          obj['minedInSeconds'] = _ApiClient["default"].convertToType(data['minedInSeconds'], 'Number');
        }
        if (data.hasOwnProperty('sha3Uncles')) {
          obj['sha3Uncles'] = _ApiClient["default"].convertToType(data['sha3Uncles'], 'String');
        }
        if (data.hasOwnProperty('totalDifficulty')) {
          obj['totalDifficulty'] = _ApiClient["default"].convertToType(data['totalDifficulty'], 'String');
        }
        if (data.hasOwnProperty('dsBlock')) {
          obj['dsBlock'] = _ApiClient["default"].convertToType(data['dsBlock'], 'Number');
        }
        if (data.hasOwnProperty('dsDifficulty')) {
          obj['dsDifficulty'] = _ApiClient["default"].convertToType(data['dsDifficulty'], 'String');
        }
        if (data.hasOwnProperty('dsLeader')) {
          obj['dsLeader'] = _ApiClient["default"].convertToType(data['dsLeader'], 'String');
        }
        if (data.hasOwnProperty('microBlocks')) {
          obj['microBlocks'] = _ApiClient["default"].convertToType(data['microBlocks'], ['String']);
        }
      }
      return obj;
    }
  }]);
  return GetBlockDetailsByBlockHeightRIBS;
}();
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
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

// Implement GetBlockDetailsByBlockHeightRIBSB interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHeightRIBSB["default"].prototype['difficulty'] = undefined;
/**
 * A sub-unit of BTC equal to 0.000001 BTC, or 100 Satoshi, and is the same as microbitcoin (μBTC). Bits have two-decimal precision.
 * @member {String} bits
 */
_GetBlockDetailsByBlockHeightRIBSB["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetBlockDetailsByBlockHeightRIBSB["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetBlockDetailsByBlockHeightRIBSB["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {Number} nonce
 */
_GetBlockDetailsByBlockHeightRIBSB["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHeightRIBSB["default"].prototype['size'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
_GetBlockDetailsByBlockHeightRIBSB["default"].prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
_GetBlockDetailsByBlockHeightRIBSB["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
_GetBlockDetailsByBlockHeightRIBSB["default"].prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
_GetBlockDetailsByBlockHeightRIBSB["default"].prototype['weight'] = undefined;
// Implement GetBlockDetailsByBlockHeightRIBSE interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHeightRIBSE["default"].prototype['difficulty'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
_GetBlockDetailsByBlockHeightRIBSE["default"].prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
_GetBlockDetailsByBlockHeightRIBSE["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
_GetBlockDetailsByBlockHeightRIBSE["default"].prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
_GetBlockDetailsByBlockHeightRIBSE["default"].prototype['minedInSeconds'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
_GetBlockDetailsByBlockHeightRIBSE["default"].prototype['nonce'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
_GetBlockDetailsByBlockHeightRIBSE["default"].prototype['sha3Uncles'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHeightRIBSE["default"].prototype['size'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
_GetBlockDetailsByBlockHeightRIBSE["default"].prototype['totalDifficulty'] = undefined;
// Implement GetBlockDetailsByBlockHeightRIBSEC interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHeightRIBSEC["default"].prototype['difficulty'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
_GetBlockDetailsByBlockHeightRIBSEC["default"].prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
_GetBlockDetailsByBlockHeightRIBSEC["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
_GetBlockDetailsByBlockHeightRIBSEC["default"].prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
_GetBlockDetailsByBlockHeightRIBSEC["default"].prototype['minedInSeconds'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
_GetBlockDetailsByBlockHeightRIBSEC["default"].prototype['nonce'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
_GetBlockDetailsByBlockHeightRIBSEC["default"].prototype['sha3Uncles'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHeightRIBSEC["default"].prototype['size'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
_GetBlockDetailsByBlockHeightRIBSEC["default"].prototype['totalDifficulty'] = undefined;
// Implement GetBlockDetailsByBlockHeightRIBSBC interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHeightRIBSBC["default"].prototype['difficulty'] = undefined;
/**
 * A sub-unit of BTC equal to 0.000001 BTC, or 100 Satoshi, and is the same as microbitcoin (μBTC). Bits have two-decimal precision.
 * @member {String} bits
 */
_GetBlockDetailsByBlockHeightRIBSBC["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetBlockDetailsByBlockHeightRIBSBC["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetBlockDetailsByBlockHeightRIBSBC["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
_GetBlockDetailsByBlockHeightRIBSBC["default"].prototype['nonce'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHeightRIBSBC["default"].prototype['size'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
_GetBlockDetailsByBlockHeightRIBSBC["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
_GetBlockDetailsByBlockHeightRIBSBC["default"].prototype['versionHex'] = undefined;
// Implement GetBlockDetailsByBlockHeightRIBSL interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHeightRIBSL["default"].prototype['difficulty'] = undefined;
/**
 * Represents a specific sub-unit of Litecoin. Bits have two-decimal precision.
 * @member {String} bits
 */
_GetBlockDetailsByBlockHeightRIBSL["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetBlockDetailsByBlockHeightRIBSL["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetBlockDetailsByBlockHeightRIBSL["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
_GetBlockDetailsByBlockHeightRIBSL["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHeightRIBSL["default"].prototype['size'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
_GetBlockDetailsByBlockHeightRIBSL["default"].prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
_GetBlockDetailsByBlockHeightRIBSL["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
_GetBlockDetailsByBlockHeightRIBSL["default"].prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
_GetBlockDetailsByBlockHeightRIBSL["default"].prototype['weight'] = undefined;
// Implement GetBlockDetailsByBlockHeightRIBSD interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHeightRIBSD["default"].prototype['difficulty'] = undefined;
/**
 * Represents a specific sub-unit of Doge. Bits have two-decimal precision.
 * @member {String} bits
 */
_GetBlockDetailsByBlockHeightRIBSD["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetBlockDetailsByBlockHeightRIBSD["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetBlockDetailsByBlockHeightRIBSD["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
_GetBlockDetailsByBlockHeightRIBSD["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHeightRIBSD["default"].prototype['size'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
_GetBlockDetailsByBlockHeightRIBSD["default"].prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
_GetBlockDetailsByBlockHeightRIBSD["default"].prototype['version'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limi
 * @member {Number} weight
 */
_GetBlockDetailsByBlockHeightRIBSD["default"].prototype['weight'] = undefined;
// Implement GetBlockDetailsByBlockHeightRIBSD2 interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHeightRIBSD2["default"].prototype['difficulty'] = undefined;
/**
 * A sub-unit of BTC equal to 0.000001 BTC, or 100 Satoshi, and is the same as microbitcoin (μBTC). Bits have two-decimal precision
 * @member {String} bits
 */
_GetBlockDetailsByBlockHeightRIBSD2["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetBlockDetailsByBlockHeightRIBSD2["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetBlockDetailsByBlockHeightRIBSD2["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
_GetBlockDetailsByBlockHeightRIBSD2["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHeightRIBSD2["default"].prototype['size'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
_GetBlockDetailsByBlockHeightRIBSD2["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
_GetBlockDetailsByBlockHeightRIBSD2["default"].prototype['versionHex'] = undefined;
// Implement GetBlockDetailsByBlockHeightRIBSBSC interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHeightRIBSBSC["default"].prototype['difficulty'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
_GetBlockDetailsByBlockHeightRIBSBSC["default"].prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
_GetBlockDetailsByBlockHeightRIBSBSC["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
_GetBlockDetailsByBlockHeightRIBSBSC["default"].prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
_GetBlockDetailsByBlockHeightRIBSBSC["default"].prototype['minedInSeconds'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
_GetBlockDetailsByBlockHeightRIBSBSC["default"].prototype['nonce'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
_GetBlockDetailsByBlockHeightRIBSBSC["default"].prototype['sha3Uncles'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHeightRIBSBSC["default"].prototype['size'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
_GetBlockDetailsByBlockHeightRIBSBSC["default"].prototype['totalDifficulty'] = undefined;
// Implement GetBlockDetailsByBlockHeightRIBSZ interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHeightRIBSZ["default"].prototype['difficulty'] = undefined;
/**
 * Represents a specific sub-unit of Zcash. Bits have two-decimal precision
 * @member {String} bits
 */
_GetBlockDetailsByBlockHeightRIBSZ["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetBlockDetailsByBlockHeightRIBSZ["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetBlockDetailsByBlockHeightRIBSZ["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
_GetBlockDetailsByBlockHeightRIBSZ["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHeightRIBSZ["default"].prototype['size'] = undefined;
/**
 * Represents the block version number.
 * @member {Number} version
 */
_GetBlockDetailsByBlockHeightRIBSZ["default"].prototype['version'] = undefined;
// Implement GetBlockDetailsByBlockHeightRIBSZ2 interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHeightRIBSZ2["default"].prototype['difficulty'] = undefined;
/**
 * Numeric representation of the ds block
 * @member {Number} dsBlock
 */
_GetBlockDetailsByBlockHeightRIBSZ2["default"].prototype['dsBlock'] = undefined;
/**
 * Numeric representation of the ds difficulty
 * @member {String} dsDifficulty
 */
_GetBlockDetailsByBlockHeightRIBSZ2["default"].prototype['dsDifficulty'] = undefined;
/**
 * String representation of the ds leader
 * @member {String} dsLeader
 */
_GetBlockDetailsByBlockHeightRIBSZ2["default"].prototype['dsLeader'] = undefined;
/**
 * Numeric representation of the block gas_limit
 * @member {Number} gasLimit
 */
_GetBlockDetailsByBlockHeightRIBSZ2["default"].prototype['gasLimit'] = undefined;
/**
 * Numeric representation of the block gas_limit
 * @member {Number} gasUsed
 */
_GetBlockDetailsByBlockHeightRIBSZ2["default"].prototype['gasUsed'] = undefined;
/**
 * @member {Array.<String>} microBlocks
 */
_GetBlockDetailsByBlockHeightRIBSZ2["default"].prototype['microBlocks'] = undefined;
var _default = GetBlockDetailsByBlockHeightRIBS;
exports["default"] = _default;