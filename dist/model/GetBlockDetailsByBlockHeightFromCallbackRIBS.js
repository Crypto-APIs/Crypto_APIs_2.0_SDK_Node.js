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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetBlockDetailsByBlockHeightFromCallbackRIBS model module.
 * @module model/GetBlockDetailsByBlockHeightFromCallbackRIBS
 * @version 1.13.0
 */
var GetBlockDetailsByBlockHeightFromCallbackRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetBlockDetailsByBlockHeightFromCallbackRIBS</code>.
   * @alias module:model/GetBlockDetailsByBlockHeightFromCallbackRIBS
   * @implements module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSB
   * @implements module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSBC
   * @implements module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSL
   * @implements module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSD
   * @implements module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSD2
   * @implements module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSE
   * @implements module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSBSC
   * @implements module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSEC
   * @implements module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSZ
   * @implements module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSX
   * @implements module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSZ2
   * @implements module:model/GetBlockDetailsByBlockHeightFromCallbackRIBST
   * @param bits {String} Represents a specific sub-unit of Zcash. Bits have two-decimal precision
   * @param chainwork {String} Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
   * @param difficulty {String} Defines how difficult it is for a specific miner to mine the block.
   * @param merkleRoot {String} Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
   * @param nonce {String} Represents a random value that can be adjusted to satisfy the proof of work
   * @param size {Number} Represents the total size of the block in Bytes.
   * @param strippedSize {Number} Defines the numeric representation of the block size excluding the witness data.
   * @param version {Number} Represents the transaction version number.
   * @param versionHex {String} Is the hexadecimal string representation of the block's version.
   * @param weight {Number} Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
   * @param strippedsize {Number} Defines the numeric representation of the block size excluding the witness data.
   * @param extraData {String} Represents any data that can be included by the miner in the block.
   * @param gasLimit {Number} Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
   * @param gasUsed {Number} Defines how much of the gas for the block has been used.
   * @param minedInSeconds {Number} Specifies the amount of time required for the block to be mined in seconds.
   * @param sha3Uncles {String} Defines the combined hash of all uncles for a given parent.
   * @param totalDifficulty {String} Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
   * @param dsBlock {Number} Represents the Directory Service block which contains metadata about the miners who participate in the consensus protocol.
   * @param dsDifficulty {String} Defines how difficult it is to mine the dsBlocks.
   * @param dsLeader {String} Represents a part of the DS Committee which leads the consensus protocol for the epoch.
   * @param microBlocks {Array.<String>} 
   * @param totalCoins {module:model/GetLatestMinedXRPRippleBlockRITotalCoins} 
   * @param totalFees {module:model/GetLatestMinedXRPRippleBlockRITotalFees} 
   * @param bandwidthUsed {String} Represents the bandwidth used for the transaction.
   * @param burnedTrx {String} Represents the block burned TRX.
   * @param energyUsed {String} Representats the used energy for the transaction.
   */
  function GetBlockDetailsByBlockHeightFromCallbackRIBS(bits, chainwork, difficulty, merkleRoot, nonce, size, strippedSize, version, versionHex, weight, strippedsize, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, dsBlock, dsDifficulty, dsLeader, microBlocks, totalCoins, totalFees, bandwidthUsed, burnedTrx, energyUsed) {
    _classCallCheck(this, GetBlockDetailsByBlockHeightFromCallbackRIBS);
    _GetBlockDetailsByBlockHeightFromCallbackRIBSB["default"].initialize(this, bits, chainwork, difficulty, merkleRoot, nonce, size, strippedSize, version, versionHex, weight);
    _GetBlockDetailsByBlockHeightFromCallbackRIBSBC["default"].initialize(this, bits, chainwork, difficulty, merkleRoot, nonce, size, version, versionHex);
    _GetBlockDetailsByBlockHeightFromCallbackRIBSL["default"].initialize(this, bits, chainwork, difficulty, merkleRoot, nonce, size, strippedsize, version, versionHex, weight);
    _GetBlockDetailsByBlockHeightFromCallbackRIBSD["default"].initialize(this, bits, chainwork, difficulty, merkleRoot, nonce, size, version, versionHex);
    _GetBlockDetailsByBlockHeightFromCallbackRIBSD2["default"].initialize(this, bits, chainwork, difficulty, merkleRoot, nonce, size, strippedSize, version, weight);
    _GetBlockDetailsByBlockHeightFromCallbackRIBSE["default"].initialize(this, difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty);
    _GetBlockDetailsByBlockHeightFromCallbackRIBSBSC["default"].initialize(this, difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty);
    _GetBlockDetailsByBlockHeightFromCallbackRIBSEC["default"].initialize(this, difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty);
    _GetBlockDetailsByBlockHeightFromCallbackRIBSZ["default"].initialize(this, difficulty, dsBlock, dsDifficulty, dsLeader, gasLimit, gasUsed, microBlocks);
    _GetBlockDetailsByBlockHeightFromCallbackRIBSX["default"].initialize(this, totalCoins, totalFees);
    _GetBlockDetailsByBlockHeightFromCallbackRIBSZ2["default"].initialize(this, bits, chainwork, merkleRoot, nonce, size, version);
    _GetBlockDetailsByBlockHeightFromCallbackRIBST["default"].initialize(this, bandwidthUsed, burnedTrx, energyUsed, size);
    GetBlockDetailsByBlockHeightFromCallbackRIBS.initialize(this, bits, chainwork, difficulty, merkleRoot, nonce, size, strippedSize, version, versionHex, weight, strippedsize, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, dsBlock, dsDifficulty, dsLeader, microBlocks, totalCoins, totalFees, bandwidthUsed, burnedTrx, energyUsed);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetBlockDetailsByBlockHeightFromCallbackRIBS, null, [{
    key: "initialize",
    value: function initialize(obj, bits, chainwork, difficulty, merkleRoot, nonce, size, strippedSize, version, versionHex, weight, strippedsize, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, dsBlock, dsDifficulty, dsLeader, microBlocks, totalCoins, totalFees, bandwidthUsed, burnedTrx, energyUsed) {
      obj['bits'] = bits;
      obj['chainwork'] = chainwork;
      obj['difficulty'] = difficulty;
      obj['merkleRoot'] = merkleRoot;
      obj['nonce'] = nonce;
      obj['size'] = size;
      obj['strippedSize'] = strippedSize;
      obj['version'] = version;
      obj['versionHex'] = versionHex;
      obj['weight'] = weight;
      obj['strippedsize'] = strippedsize;
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
      obj['totalCoins'] = totalCoins;
      obj['totalFees'] = totalFees;
      obj['bandwidthUsed'] = bandwidthUsed;
      obj['burnedTrx'] = burnedTrx;
      obj['energyUsed'] = energyUsed;
    }

    /**
     * Constructs a <code>GetBlockDetailsByBlockHeightFromCallbackRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHeightFromCallbackRIBS} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHeightFromCallbackRIBS} The populated <code>GetBlockDetailsByBlockHeightFromCallbackRIBS</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetBlockDetailsByBlockHeightFromCallbackRIBS();
        _GetBlockDetailsByBlockHeightFromCallbackRIBSB["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHeightFromCallbackRIBSBC["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHeightFromCallbackRIBSL["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHeightFromCallbackRIBSD["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHeightFromCallbackRIBSD2["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHeightFromCallbackRIBSE["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHeightFromCallbackRIBSBSC["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHeightFromCallbackRIBSEC["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHeightFromCallbackRIBSZ["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHeightFromCallbackRIBSX["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHeightFromCallbackRIBSZ2["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHeightFromCallbackRIBST["default"].constructFromObject(data, obj);
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
        if (data.hasOwnProperty('strippedsize')) {
          obj['strippedsize'] = _ApiClient["default"].convertToType(data['strippedsize'], 'Number');
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
        if (data.hasOwnProperty('totalCoins')) {
          obj['totalCoins'] = _GetLatestMinedXRPRippleBlockRITotalCoins["default"].constructFromObject(data['totalCoins']);
        }
        if (data.hasOwnProperty('totalFees')) {
          obj['totalFees'] = _GetLatestMinedXRPRippleBlockRITotalFees["default"].constructFromObject(data['totalFees']);
        }
        if (data.hasOwnProperty('bandwidthUsed')) {
          obj['bandwidthUsed'] = _ApiClient["default"].convertToType(data['bandwidthUsed'], 'String');
        }
        if (data.hasOwnProperty('burnedTrx')) {
          obj['burnedTrx'] = _ApiClient["default"].convertToType(data['burnedTrx'], 'String');
        }
        if (data.hasOwnProperty('energyUsed')) {
          obj['energyUsed'] = _ApiClient["default"].convertToType(data['energyUsed'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GetBlockDetailsByBlockHeightFromCallbackRIBS;
}();
/**
 * Represents a specific sub-unit of Zcash. Bits have two-decimal precision
 * @member {String} bits
 */
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

// Implement GetBlockDetailsByBlockHeightFromCallbackRIBSB interface:
/**
 * A sub-unit of BTC equal to 0.000001 BTC, or 100 Satoshi, and is the same as microbitcoin (μBTC). Bits have two-decimal precision.
 * @member {String} bits
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSB["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSB["default"].prototype['chainwork'] = undefined;
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSB["default"].prototype['difficulty'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSB["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {Number} nonce
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSB["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSB["default"].prototype['size'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSB["default"].prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSB["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSB["default"].prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSB["default"].prototype['weight'] = undefined;
// Implement GetBlockDetailsByBlockHeightFromCallbackRIBSBC interface:
/**
 * A sub-unit of BCH equal to 0.000001 BCH, or 100 Satoshi, and is the same as microbitcoincash (μBCH). Bits have two-decimal precision.
 * @member {String} bits
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSBC["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSBC["default"].prototype['chainwork'] = undefined;
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSBC["default"].prototype['difficulty'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSBC["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {Number} nonce
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSBC["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSBC["default"].prototype['size'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSBC["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSBC["default"].prototype['versionHex'] = undefined;
// Implement GetBlockDetailsByBlockHeightFromCallbackRIBSL interface:
/**
 * Represents a specific sub-unit of Litecoin. Bits have two-decimal precision.
 * @member {String} bits
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSL["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSL["default"].prototype['chainwork'] = undefined;
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSL["default"].prototype['difficulty'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSL["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {Number} nonce
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSL["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSL["default"].prototype['size'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedsize
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSL["default"].prototype['strippedsize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSL["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSL["default"].prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSL["default"].prototype['weight'] = undefined;
// Implement GetBlockDetailsByBlockHeightFromCallbackRIBSD interface:
/**
 * Represents a specific sub-unit of Dash. Bits have two-decimal precision.
 * @member {String} bits
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSD["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSD["default"].prototype['chainwork'] = undefined;
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSD["default"].prototype['difficulty'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSD["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {Number} nonce
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSD["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSD["default"].prototype['size'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSD["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSD["default"].prototype['versionHex'] = undefined;
// Implement GetBlockDetailsByBlockHeightFromCallbackRIBSD2 interface:
/**
 * Represents a specific sub-unit of Doge. Bits have two-decimal precision.
 * @member {String} bits
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSD2["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSD2["default"].prototype['chainwork'] = undefined;
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSD2["default"].prototype['difficulty'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSD2["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {Number} nonce
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSD2["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSD2["default"].prototype['size'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSD2["default"].prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSD2["default"].prototype['version'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSD2["default"].prototype['weight'] = undefined;
// Implement GetBlockDetailsByBlockHeightFromCallbackRIBSE interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSE["default"].prototype['difficulty'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSE["default"].prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSE["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSE["default"].prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSE["default"].prototype['minedInSeconds'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSE["default"].prototype['nonce'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSE["default"].prototype['sha3Uncles'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSE["default"].prototype['size'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSE["default"].prototype['totalDifficulty'] = undefined;
/**
 * @member {Array.<String>} uncles
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSE["default"].prototype['uncles'] = undefined;
// Implement GetBlockDetailsByBlockHeightFromCallbackRIBSBSC interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSBSC["default"].prototype['difficulty'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSBSC["default"].prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSBSC["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSBSC["default"].prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in second
 * @member {Number} minedInSeconds
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSBSC["default"].prototype['minedInSeconds'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSBSC["default"].prototype['nonce'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSBSC["default"].prototype['sha3Uncles'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSBSC["default"].prototype['size'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block
 * @member {String} totalDifficulty
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSBSC["default"].prototype['totalDifficulty'] = undefined;
/**
 * @member {Array.<String>} uncles
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSBSC["default"].prototype['uncles'] = undefined;
// Implement GetBlockDetailsByBlockHeightFromCallbackRIBSEC interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSEC["default"].prototype['difficulty'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSEC["default"].prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSEC["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSEC["default"].prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSEC["default"].prototype['minedInSeconds'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSEC["default"].prototype['nonce'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSEC["default"].prototype['sha3Uncles'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSEC["default"].prototype['size'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSEC["default"].prototype['totalDifficulty'] = undefined;
/**
 * @member {Array.<String>} uncles
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSEC["default"].prototype['uncles'] = undefined;
// Implement GetBlockDetailsByBlockHeightFromCallbackRIBSZ interface:
/**
 * Defines how difficult it is for a specific miner to mine the block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSZ["default"].prototype['difficulty'] = undefined;
/**
 * Represents the Directory Service block which contains metadata about the miners who participate in the consensus protocol.
 * @member {Number} dsBlock
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSZ["default"].prototype['dsBlock'] = undefined;
/**
 * Defines how difficult it is to mine the dsBlocks.
 * @member {String} dsDifficulty
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSZ["default"].prototype['dsDifficulty'] = undefined;
/**
 * Represents a part of the DS Committee which leads the consensus protocol for the epoch.
 * @member {String} dsLeader
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSZ["default"].prototype['dsLeader'] = undefined;
/**
 * Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
 * @member {Number} gasLimit
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSZ["default"].prototype['gasLimit'] = undefined;
/**
 * Defines how much of the gas for the block has been used.
 * @member {Number} gasUsed
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSZ["default"].prototype['gasUsed'] = undefined;
/**
 * @member {Array.<String>} microBlocks
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSZ["default"].prototype['microBlocks'] = undefined;
// Implement GetBlockDetailsByBlockHeightFromCallbackRIBSX interface:
/**
 * @member {module:model/GetLatestMinedXRPRippleBlockRITotalCoins} totalCoins
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSX["default"].prototype['totalCoins'] = undefined;
/**
 * @member {module:model/GetLatestMinedXRPRippleBlockRITotalFees} totalFees
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSX["default"].prototype['totalFees'] = undefined;
// Implement GetBlockDetailsByBlockHeightFromCallbackRIBSZ2 interface:
/**
 * Represents a specific sub-unit of Zcash. Bits have two-decimal precision
 * @member {String} bits
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSZ2["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSZ2["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSZ2["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSZ2["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSZ2["default"].prototype['size'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBSZ2["default"].prototype['version'] = undefined;
// Implement GetBlockDetailsByBlockHeightFromCallbackRIBST interface:
/**
 * Represents the bandwidth used for the transaction.
 * @member {String} bandwidthUsed
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBST["default"].prototype['bandwidthUsed'] = undefined;
/**
 * Represents the block burned TRX.
 * @member {String} burnedTrx
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBST["default"].prototype['burnedTrx'] = undefined;
/**
 * Representats the used energy for the transaction.
 * @member {String} energyUsed
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBST["default"].prototype['energyUsed'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHeightFromCallbackRIBST["default"].prototype['size'] = undefined;
var _default = GetBlockDetailsByBlockHeightFromCallbackRIBS;
exports["default"] = _default;