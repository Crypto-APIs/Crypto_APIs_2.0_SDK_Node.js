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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetLastMinedBlockRIBS model module.
 * @module model/GetLastMinedBlockRIBS
 * @version 1.13.0
 */
var GetLastMinedBlockRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetLastMinedBlockRIBS</code>.
   * @alias module:model/GetLastMinedBlockRIBS
   * @implements module:model/GetLastMinedBlockRIBSB
   * @implements module:model/GetLastMinedBlockRIBSE
   * @implements module:model/GetLastMinedBlockRIBSEC
   * @implements module:model/GetLastMinedBlockRIBSBC
   * @implements module:model/GetLastMinedBlockRIBSL
   * @implements module:model/GetLastMinedBlockRIBSD
   * @implements module:model/GetLastMinedBlockRIBSD2
   * @implements module:model/GetLastMinedBlockRIBSBSC
   * @implements module:model/GetLastMinedBlockRIBSZ
   * @implements module:model/GetLastMinedBlockRIBSZ2
   * @implements module:model/GetLastMinedBlockRIBST
   * @param bits {String} Represents a specific sub-unit of Zcash. Bits have two-decimal precision
   * @param chainwork {String} Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
   * @param merkleRoot {String} Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
   * @param nonce {String} Represents a random value that can be adjusted to satisfy the proof of work.
   * @param size {Number} Represents the total size of the block in Bytes.
   * @param strippedSize {Number} Defines the numeric representation of the block size excluding the witness data.
   * @param version {Number} Represents the transaction version number.
   * @param versionHex {String} Is the hexadecimal string representation of the block's version.
   * @param weight {Number} Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
   * @param extraData {String} Represents any data that can be included by the miner in the block.
   * @param gasLimit {Number} Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
   * @param gasUsed {Number} Defines how much of the gas for the block has been used.
   * @param minedInSeconds {Number} Specifies the amount of time required for the block to be mined in second
   * @param sha3Uncles {String} Defines the combined hash of all uncles for a given parent.
   * @param totalDifficulty {String} Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block
   * @param uncles {Array.<String>} 
   * @param dsBlock {Number} Represents the Directory Service block which contains metadata about the miners who participate in the consensus protocol.
   * @param dsDifficulty {String} Defines how difficult it is to mine the dsBlocks.
   * @param dsLeader {String} Represents a part of the DS Committee which leads the consensus protocol for the epoch.
   * @param microBlocks {Array.<String>} 
   */
  function GetLastMinedBlockRIBS(bits, chainwork, merkleRoot, nonce, size, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, uncles, dsBlock, dsDifficulty, dsLeader, microBlocks) {
    _classCallCheck(this, GetLastMinedBlockRIBS);
    _GetLastMinedBlockRIBSB["default"].initialize(this, bits, chainwork, merkleRoot, nonce, size, strippedSize, version, versionHex, weight);
    _GetLastMinedBlockRIBSE["default"].initialize(this, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty, uncles);
    _GetLastMinedBlockRIBSEC["default"].initialize(this, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty, uncles);
    _GetLastMinedBlockRIBSBC["default"].initialize(this, bits, chainwork, merkleRoot, nonce, size, version, versionHex);
    _GetLastMinedBlockRIBSL["default"].initialize(this, bits, chainwork, merkleRoot, nonce, size, strippedSize, version, versionHex, weight);
    _GetLastMinedBlockRIBSD["default"].initialize(this, bits, chainwork, merkleRoot, nonce, size, strippedSize, version, weight);
    _GetLastMinedBlockRIBSD2["default"].initialize(this, bits, chainwork, merkleRoot, nonce, size, version, versionHex);
    _GetLastMinedBlockRIBSBSC["default"].initialize(this, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty, uncles);
    _GetLastMinedBlockRIBSZ["default"].initialize(this, bits, chainwork, merkleRoot, nonce, size, version);
    _GetLastMinedBlockRIBSZ2["default"].initialize(this, dsBlock, dsDifficulty, dsLeader, gasLimit, gasUsed, microBlocks);
    _GetLastMinedBlockRIBST["default"].initialize(this, size);
    GetLastMinedBlockRIBS.initialize(this, bits, chainwork, merkleRoot, nonce, size, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, uncles, dsBlock, dsDifficulty, dsLeader, microBlocks);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetLastMinedBlockRIBS, null, [{
    key: "initialize",
    value: function initialize(obj, bits, chainwork, merkleRoot, nonce, size, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, uncles, dsBlock, dsDifficulty, dsLeader, microBlocks) {
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
      obj['uncles'] = uncles;
      obj['dsBlock'] = dsBlock;
      obj['dsDifficulty'] = dsDifficulty;
      obj['dsLeader'] = dsLeader;
      obj['microBlocks'] = microBlocks;
    }

    /**
     * Constructs a <code>GetLastMinedBlockRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLastMinedBlockRIBS} obj Optional instance to populate.
     * @return {module:model/GetLastMinedBlockRIBS} The populated <code>GetLastMinedBlockRIBS</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetLastMinedBlockRIBS();
        _GetLastMinedBlockRIBSB["default"].constructFromObject(data, obj);
        _GetLastMinedBlockRIBSE["default"].constructFromObject(data, obj);
        _GetLastMinedBlockRIBSEC["default"].constructFromObject(data, obj);
        _GetLastMinedBlockRIBSBC["default"].constructFromObject(data, obj);
        _GetLastMinedBlockRIBSL["default"].constructFromObject(data, obj);
        _GetLastMinedBlockRIBSD["default"].constructFromObject(data, obj);
        _GetLastMinedBlockRIBSD2["default"].constructFromObject(data, obj);
        _GetLastMinedBlockRIBSBSC["default"].constructFromObject(data, obj);
        _GetLastMinedBlockRIBSZ["default"].constructFromObject(data, obj);
        _GetLastMinedBlockRIBSZ2["default"].constructFromObject(data, obj);
        _GetLastMinedBlockRIBST["default"].constructFromObject(data, obj);
        if (data.hasOwnProperty('bits')) {
          obj['bits'] = _ApiClient["default"].convertToType(data['bits'], 'String');
        }
        if (data.hasOwnProperty('chainwork')) {
          obj['chainwork'] = _ApiClient["default"].convertToType(data['chainwork'], 'String');
        }
        if (data.hasOwnProperty('difficulty')) {
          obj['difficulty'] = _ApiClient["default"].convertToType(data['difficulty'], 'String');
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
        if (data.hasOwnProperty('uncles')) {
          obj['uncles'] = _ApiClient["default"].convertToType(data['uncles'], ['String']);
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
        if (data.hasOwnProperty('bandwidthUsed')) {
          obj['bandwidthUsed'] = _ApiClient["default"].convertToType(data['bandwidthUsed'], 'String');
        }
        if (data.hasOwnProperty('burnedTRX')) {
          obj['burnedTRX'] = _ApiClient["default"].convertToType(data['burnedTRX'], 'String');
        }
        if (data.hasOwnProperty('energyUsed')) {
          obj['energyUsed'] = _ApiClient["default"].convertToType(data['energyUsed'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GetLastMinedBlockRIBS;
}();
/**
 * Represents a specific sub-unit of Zcash. Bits have two-decimal precision
 * @member {String} bits
 */
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

// Implement GetLastMinedBlockRIBSB interface:
/**
 * A sub-unit of BTC equal to 0.000001 BTC, or 100 Satoshi, and is the same as microbitcoin (μBTC). Bits have two-decimal precision.
 * @member {String} bits
 */
_GetLastMinedBlockRIBSB["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetLastMinedBlockRIBSB["default"].prototype['chainwork'] = undefined;
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetLastMinedBlockRIBSB["default"].prototype['difficulty'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetLastMinedBlockRIBSB["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
_GetLastMinedBlockRIBSB["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetLastMinedBlockRIBSB["default"].prototype['size'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
_GetLastMinedBlockRIBSB["default"].prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
_GetLastMinedBlockRIBSB["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
_GetLastMinedBlockRIBSB["default"].prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
_GetLastMinedBlockRIBSB["default"].prototype['weight'] = undefined;
// Implement GetLastMinedBlockRIBSE interface:
/**
 * String representation of the block difficulty
 * @member {String} difficulty
 */
_GetLastMinedBlockRIBSE["default"].prototype['difficulty'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
_GetLastMinedBlockRIBSE["default"].prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
_GetLastMinedBlockRIBSE["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
_GetLastMinedBlockRIBSE["default"].prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
_GetLastMinedBlockRIBSE["default"].prototype['minedInSeconds'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
_GetLastMinedBlockRIBSE["default"].prototype['nonce'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
_GetLastMinedBlockRIBSE["default"].prototype['sha3Uncles'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetLastMinedBlockRIBSE["default"].prototype['size'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
_GetLastMinedBlockRIBSE["default"].prototype['totalDifficulty'] = undefined;
/**
 * @member {Array.<String>} uncles
 */
_GetLastMinedBlockRIBSE["default"].prototype['uncles'] = undefined;
// Implement GetLastMinedBlockRIBSEC interface:
/**
 * String representation of the block difficulty
 * @member {String} difficulty
 */
_GetLastMinedBlockRIBSEC["default"].prototype['difficulty'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
_GetLastMinedBlockRIBSEC["default"].prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
_GetLastMinedBlockRIBSEC["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
_GetLastMinedBlockRIBSEC["default"].prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
_GetLastMinedBlockRIBSEC["default"].prototype['minedInSeconds'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
_GetLastMinedBlockRIBSEC["default"].prototype['nonce'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
_GetLastMinedBlockRIBSEC["default"].prototype['sha3Uncles'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetLastMinedBlockRIBSEC["default"].prototype['size'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
_GetLastMinedBlockRIBSEC["default"].prototype['totalDifficulty'] = undefined;
/**
 * @member {Array.<String>} uncles
 */
_GetLastMinedBlockRIBSEC["default"].prototype['uncles'] = undefined;
// Implement GetLastMinedBlockRIBSBC interface:
/**
 * A sub-unit of BCH equal to 0.000001 BCH, or 100 Satoshi, and is the same as microbitcoincash (μBCH). Bits have two-decimal precision.
 * @member {String} bits
 */
_GetLastMinedBlockRIBSBC["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetLastMinedBlockRIBSBC["default"].prototype['chainwork'] = undefined;
/**
 * Numeric representation of the block difficulty
 * @member {String} difficulty
 */
_GetLastMinedBlockRIBSBC["default"].prototype['difficulty'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetLastMinedBlockRIBSBC["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
_GetLastMinedBlockRIBSBC["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetLastMinedBlockRIBSBC["default"].prototype['size'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
_GetLastMinedBlockRIBSBC["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
_GetLastMinedBlockRIBSBC["default"].prototype['versionHex'] = undefined;
// Implement GetLastMinedBlockRIBSL interface:
/**
 * Represents a specific sub-unit of Litecoin. Bits have two-decimal precision.
 * @member {String} bits
 */
_GetLastMinedBlockRIBSL["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetLastMinedBlockRIBSL["default"].prototype['chainwork'] = undefined;
/**
 * Numeric representation of the block difficulty
 * @member {String} difficulty
 */
_GetLastMinedBlockRIBSL["default"].prototype['difficulty'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetLastMinedBlockRIBSL["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
_GetLastMinedBlockRIBSL["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetLastMinedBlockRIBSL["default"].prototype['size'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
_GetLastMinedBlockRIBSL["default"].prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
_GetLastMinedBlockRIBSL["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
_GetLastMinedBlockRIBSL["default"].prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
_GetLastMinedBlockRIBSL["default"].prototype['weight'] = undefined;
// Implement GetLastMinedBlockRIBSD interface:
/**
 * Represents a specific sub-unit of Doge. Bits have two-decimal precision.
 * @member {String} bits
 */
_GetLastMinedBlockRIBSD["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetLastMinedBlockRIBSD["default"].prototype['chainwork'] = undefined;
/**
 * Numeric representation of the block difficulty
 * @member {String} difficulty
 */
_GetLastMinedBlockRIBSD["default"].prototype['difficulty'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetLastMinedBlockRIBSD["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {Number} nonce
 */
_GetLastMinedBlockRIBSD["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetLastMinedBlockRIBSD["default"].prototype['size'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
_GetLastMinedBlockRIBSD["default"].prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
_GetLastMinedBlockRIBSD["default"].prototype['version'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
_GetLastMinedBlockRIBSD["default"].prototype['weight'] = undefined;
// Implement GetLastMinedBlockRIBSD2 interface:
/**
 * Represents a specific sub-unit of Dash. Bits have two-decimal precision.
 * @member {String} bits
 */
_GetLastMinedBlockRIBSD2["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetLastMinedBlockRIBSD2["default"].prototype['chainwork'] = undefined;
/**
 * Numeric representation of the block difficulty
 * @member {String} difficulty
 */
_GetLastMinedBlockRIBSD2["default"].prototype['difficulty'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetLastMinedBlockRIBSD2["default"].prototype['merkleRoot'] = undefined;
/**
 * Numeric representation of the block nonce
 * @member {Number} nonce
 */
_GetLastMinedBlockRIBSD2["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetLastMinedBlockRIBSD2["default"].prototype['size'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
_GetLastMinedBlockRIBSD2["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
_GetLastMinedBlockRIBSD2["default"].prototype['versionHex'] = undefined;
// Implement GetLastMinedBlockRIBSBSC interface:
/**
 * String representation of the block difficulty
 * @member {String} difficulty
 */
_GetLastMinedBlockRIBSBSC["default"].prototype['difficulty'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
_GetLastMinedBlockRIBSBSC["default"].prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
_GetLastMinedBlockRIBSBSC["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
_GetLastMinedBlockRIBSBSC["default"].prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in second
 * @member {Number} minedInSeconds
 */
_GetLastMinedBlockRIBSBSC["default"].prototype['minedInSeconds'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
_GetLastMinedBlockRIBSBSC["default"].prototype['nonce'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
_GetLastMinedBlockRIBSBSC["default"].prototype['sha3Uncles'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetLastMinedBlockRIBSBSC["default"].prototype['size'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block
 * @member {String} totalDifficulty
 */
_GetLastMinedBlockRIBSBSC["default"].prototype['totalDifficulty'] = undefined;
/**
 * @member {Array.<String>} uncles
 */
_GetLastMinedBlockRIBSBSC["default"].prototype['uncles'] = undefined;
// Implement GetLastMinedBlockRIBSZ interface:
/**
 * Represents a specific sub-unit of Zcash. Bits have two-decimal precision
 * @member {String} bits
 */
_GetLastMinedBlockRIBSZ["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetLastMinedBlockRIBSZ["default"].prototype['chainwork'] = undefined;
/**
 * Numeric representation of the block difficulty
 * @member {String} difficulty
 */
_GetLastMinedBlockRIBSZ["default"].prototype['difficulty'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetLastMinedBlockRIBSZ["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work.
 * @member {String} nonce
 */
_GetLastMinedBlockRIBSZ["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetLastMinedBlockRIBSZ["default"].prototype['size'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */
_GetLastMinedBlockRIBSZ["default"].prototype['version'] = undefined;
// Implement GetLastMinedBlockRIBSZ2 interface:
/**
 * String representation of the difficulty
 * @member {String} difficulty
 */
_GetLastMinedBlockRIBSZ2["default"].prototype['difficulty'] = undefined;
/**
 * Represents the Directory Service block which contains metadata about the miners who participate in the consensus protocol.
 * @member {Number} dsBlock
 */
_GetLastMinedBlockRIBSZ2["default"].prototype['dsBlock'] = undefined;
/**
 * Defines how difficult it is to mine the dsBlocks.
 * @member {String} dsDifficulty
 */
_GetLastMinedBlockRIBSZ2["default"].prototype['dsDifficulty'] = undefined;
/**
 * Represents a part of the DS Committee which leads the consensus protocol for the epoch.
 * @member {String} dsLeader
 */
_GetLastMinedBlockRIBSZ2["default"].prototype['dsLeader'] = undefined;
/**
 * Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
 * @member {Number} gasLimit
 */
_GetLastMinedBlockRIBSZ2["default"].prototype['gasLimit'] = undefined;
/**
 * Defines how much of the gas for the block has been used.
 * @member {Number} gasUsed
 */
_GetLastMinedBlockRIBSZ2["default"].prototype['gasUsed'] = undefined;
/**
 * @member {Array.<String>} microBlocks
 */
_GetLastMinedBlockRIBSZ2["default"].prototype['microBlocks'] = undefined;
// Implement GetLastMinedBlockRIBST interface:
/**
 * Representation of the blocks' bandwidth limit.
 * @member {String} bandwidthUsed
 */
_GetLastMinedBlockRIBST["default"].prototype['bandwidthUsed'] = undefined;
/**
 * Representation of the blocks' burned TRX.
 * @member {String} burnedTRX
 */
_GetLastMinedBlockRIBST["default"].prototype['burnedTRX'] = undefined;
/**
 * Representation of the blocks' energy used.
 * @member {String} energyUsed
 */
_GetLastMinedBlockRIBST["default"].prototype['energyUsed'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetLastMinedBlockRIBST["default"].prototype['size'] = undefined;
var _default = GetLastMinedBlockRIBS;
exports["default"] = _default;