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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetBlockDetailsByBlockHashFromCallbackRIBS model module.
 * @module model/GetBlockDetailsByBlockHashFromCallbackRIBS
 * @version 1.13.0
 */
var GetBlockDetailsByBlockHashFromCallbackRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetBlockDetailsByBlockHashFromCallbackRIBS</code>.
   * @alias module:model/GetBlockDetailsByBlockHashFromCallbackRIBS
   * @implements module:model/GetBlockDetailsByBlockHashFromCallbackRIBSB
   * @implements module:model/GetBlockDetailsByBlockHashFromCallbackRIBSBC
   * @implements module:model/GetBlockDetailsByBlockHashFromCallbackRIBSL
   * @implements module:model/GetBlockDetailsByBlockHashFromCallbackRIBSD
   * @implements module:model/GetBlockDetailsByBlockHashFromCallbackRIBSD2
   * @implements module:model/GetBlockDetailsByBlockHashFromCallbackRIBSE
   * @implements module:model/GetBlockDetailsByBlockHashFromCallbackRIBSBSC
   * @implements module:model/GetBlockDetailsByBlockHashFromCallbackRIBSEC
   * @implements module:model/GetBlockDetailsByBlockHashFromCallbackRIBSZ
   * @implements module:model/GetBlockDetailsByBlockHashFromCallbackRIBSX
   * @implements module:model/GetBlockDetailsByBlockHashFromCallbackRIBSZ2
   * @implements module:model/GetBlockDetailsByBlockHashFromCallbackRIBST
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
  function GetBlockDetailsByBlockHashFromCallbackRIBS(bits, chainwork, difficulty, merkleRoot, nonce, size, strippedSize, version, versionHex, weight, strippedsize, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, dsBlock, dsDifficulty, dsLeader, microBlocks, totalCoins, totalFees, bandwidthUsed, burnedTrx, energyUsed) {
    _classCallCheck(this, GetBlockDetailsByBlockHashFromCallbackRIBS);
    _GetBlockDetailsByBlockHashFromCallbackRIBSB["default"].initialize(this, bits, chainwork, difficulty, merkleRoot, nonce, size, strippedSize, version, versionHex, weight);
    _GetBlockDetailsByBlockHashFromCallbackRIBSBC["default"].initialize(this, bits, chainwork, difficulty, merkleRoot, nonce, size, version, versionHex);
    _GetBlockDetailsByBlockHashFromCallbackRIBSL["default"].initialize(this, bits, chainwork, difficulty, merkleRoot, nonce, size, strippedsize, version, versionHex, weight);
    _GetBlockDetailsByBlockHashFromCallbackRIBSD["default"].initialize(this, bits, chainwork, difficulty, merkleRoot, nonce, size, version, versionHex);
    _GetBlockDetailsByBlockHashFromCallbackRIBSD2["default"].initialize(this, bits, chainwork, difficulty, merkleRoot, nonce, size, strippedSize, version, weight);
    _GetBlockDetailsByBlockHashFromCallbackRIBSE["default"].initialize(this, difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty);
    _GetBlockDetailsByBlockHashFromCallbackRIBSBSC["default"].initialize(this, difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty);
    _GetBlockDetailsByBlockHashFromCallbackRIBSEC["default"].initialize(this, difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty);
    _GetBlockDetailsByBlockHashFromCallbackRIBSZ["default"].initialize(this, difficulty, dsBlock, dsDifficulty, dsLeader, gasLimit, gasUsed, microBlocks);
    _GetBlockDetailsByBlockHashFromCallbackRIBSX["default"].initialize(this, totalCoins, totalFees);
    _GetBlockDetailsByBlockHashFromCallbackRIBSZ2["default"].initialize(this, bits, chainwork, merkleRoot, nonce, size, version);
    _GetBlockDetailsByBlockHashFromCallbackRIBST["default"].initialize(this, bandwidthUsed, burnedTrx, energyUsed, size);
    GetBlockDetailsByBlockHashFromCallbackRIBS.initialize(this, bits, chainwork, difficulty, merkleRoot, nonce, size, strippedSize, version, versionHex, weight, strippedsize, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, dsBlock, dsDifficulty, dsLeader, microBlocks, totalCoins, totalFees, bandwidthUsed, burnedTrx, energyUsed);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetBlockDetailsByBlockHashFromCallbackRIBS, null, [{
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
     * Constructs a <code>GetBlockDetailsByBlockHashFromCallbackRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHashFromCallbackRIBS} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHashFromCallbackRIBS} The populated <code>GetBlockDetailsByBlockHashFromCallbackRIBS</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetBlockDetailsByBlockHashFromCallbackRIBS();
        _GetBlockDetailsByBlockHashFromCallbackRIBSB["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHashFromCallbackRIBSBC["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHashFromCallbackRIBSL["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHashFromCallbackRIBSD["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHashFromCallbackRIBSD2["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHashFromCallbackRIBSE["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHashFromCallbackRIBSBSC["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHashFromCallbackRIBSEC["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHashFromCallbackRIBSZ["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHashFromCallbackRIBSX["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHashFromCallbackRIBSZ2["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHashFromCallbackRIBST["default"].constructFromObject(data, obj);
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
  return GetBlockDetailsByBlockHashFromCallbackRIBS;
}();
/**
 * Represents a specific sub-unit of Zcash. Bits have two-decimal precision
 * @member {String} bits
 */
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

// Implement GetBlockDetailsByBlockHashFromCallbackRIBSB interface:
/**
 * A sub-unit of BTC equal to 0.000001 BTC, or 100 Satoshi, and is the same as microbitcoin (μBTC). Bits have two-decimal precision.
 * @member {String} bits
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSB["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSB["default"].prototype['chainwork'] = undefined;
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSB["default"].prototype['difficulty'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSB["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {Number} nonce
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSB["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSB["default"].prototype['size'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSB["default"].prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSB["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSB["default"].prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSB["default"].prototype['weight'] = undefined;
// Implement GetBlockDetailsByBlockHashFromCallbackRIBSBC interface:
/**
 * A sub-unit of BCH equal to 0.000001 BCH, or 100 Satoshi, and is the same as microbitcoincash (μBCH). Bits have two-decimal precision.
 * @member {String} bits
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSBC["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSBC["default"].prototype['chainwork'] = undefined;
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSBC["default"].prototype['difficulty'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSBC["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {Number} nonce
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSBC["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSBC["default"].prototype['size'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSBC["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSBC["default"].prototype['versionHex'] = undefined;
// Implement GetBlockDetailsByBlockHashFromCallbackRIBSL interface:
/**
 * Represents a specific sub-unit of Litecoin. Bits have two-decimal precision.
 * @member {String} bits
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSL["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSL["default"].prototype['chainwork'] = undefined;
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSL["default"].prototype['difficulty'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSL["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {Number} nonce
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSL["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSL["default"].prototype['size'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedsize
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSL["default"].prototype['strippedsize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSL["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSL["default"].prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSL["default"].prototype['weight'] = undefined;
// Implement GetBlockDetailsByBlockHashFromCallbackRIBSD interface:
/**
 * Represents a specific sub-unit of Dash. Bits have two-decimal precision.
 * @member {String} bits
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSD["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSD["default"].prototype['chainwork'] = undefined;
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSD["default"].prototype['difficulty'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSD["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {Number} nonce
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSD["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSD["default"].prototype['size'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSD["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSD["default"].prototype['versionHex'] = undefined;
// Implement GetBlockDetailsByBlockHashFromCallbackRIBSD2 interface:
/**
 * Represents a specific sub-unit of Doge. Bits have two-decimal precision.
 * @member {String} bits
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSD2["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSD2["default"].prototype['chainwork'] = undefined;
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSD2["default"].prototype['difficulty'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSD2["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {Number} nonce
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSD2["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSD2["default"].prototype['size'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSD2["default"].prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSD2["default"].prototype['version'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSD2["default"].prototype['weight'] = undefined;
// Implement GetBlockDetailsByBlockHashFromCallbackRIBSE interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSE["default"].prototype['difficulty'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSE["default"].prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSE["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSE["default"].prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSE["default"].prototype['minedInSeconds'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSE["default"].prototype['nonce'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSE["default"].prototype['sha3Uncles'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSE["default"].prototype['size'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSE["default"].prototype['totalDifficulty'] = undefined;
/**
 * @member {Array.<String>} uncles
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSE["default"].prototype['uncles'] = undefined;
// Implement GetBlockDetailsByBlockHashFromCallbackRIBSBSC interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSBSC["default"].prototype['difficulty'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSBSC["default"].prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSBSC["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSBSC["default"].prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in second
 * @member {Number} minedInSeconds
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSBSC["default"].prototype['minedInSeconds'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSBSC["default"].prototype['nonce'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSBSC["default"].prototype['sha3Uncles'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSBSC["default"].prototype['size'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block
 * @member {String} totalDifficulty
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSBSC["default"].prototype['totalDifficulty'] = undefined;
/**
 * @member {Array.<String>} uncles
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSBSC["default"].prototype['uncles'] = undefined;
// Implement GetBlockDetailsByBlockHashFromCallbackRIBSEC interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSEC["default"].prototype['difficulty'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSEC["default"].prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSEC["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSEC["default"].prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSEC["default"].prototype['minedInSeconds'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSEC["default"].prototype['nonce'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSEC["default"].prototype['sha3Uncles'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSEC["default"].prototype['size'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSEC["default"].prototype['totalDifficulty'] = undefined;
/**
 * @member {Array.<String>} uncles
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSEC["default"].prototype['uncles'] = undefined;
// Implement GetBlockDetailsByBlockHashFromCallbackRIBSZ interface:
/**
 * Defines how difficult it is for a specific miner to mine the block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSZ["default"].prototype['difficulty'] = undefined;
/**
 * Represents the Directory Service block which contains metadata about the miners who participate in the consensus protocol.
 * @member {Number} dsBlock
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSZ["default"].prototype['dsBlock'] = undefined;
/**
 * Defines how difficult it is to mine the dsBlocks.
 * @member {String} dsDifficulty
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSZ["default"].prototype['dsDifficulty'] = undefined;
/**
 * Represents a part of the DS Committee which leads the consensus protocol for the epoch.
 * @member {String} dsLeader
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSZ["default"].prototype['dsLeader'] = undefined;
/**
 * Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
 * @member {Number} gasLimit
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSZ["default"].prototype['gasLimit'] = undefined;
/**
 * Defines how much of the gas for the block has been used.
 * @member {Number} gasUsed
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSZ["default"].prototype['gasUsed'] = undefined;
/**
 * @member {Array.<String>} microBlocks
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSZ["default"].prototype['microBlocks'] = undefined;
// Implement GetBlockDetailsByBlockHashFromCallbackRIBSX interface:
/**
 * @member {module:model/GetLatestMinedXRPRippleBlockRITotalCoins} totalCoins
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSX["default"].prototype['totalCoins'] = undefined;
/**
 * @member {module:model/GetLatestMinedXRPRippleBlockRITotalFees} totalFees
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSX["default"].prototype['totalFees'] = undefined;
// Implement GetBlockDetailsByBlockHashFromCallbackRIBSZ2 interface:
/**
 * Represents a specific sub-unit of Zcash. Bits have two-decimal precision
 * @member {String} bits
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSZ2["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSZ2["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSZ2["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSZ2["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSZ2["default"].prototype['size'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */
_GetBlockDetailsByBlockHashFromCallbackRIBSZ2["default"].prototype['version'] = undefined;
// Implement GetBlockDetailsByBlockHashFromCallbackRIBST interface:
/**
 * Represents the bandwidth used for the transaction.
 * @member {String} bandwidthUsed
 */
_GetBlockDetailsByBlockHashFromCallbackRIBST["default"].prototype['bandwidthUsed'] = undefined;
/**
 * Represents the block burned TRX.
 * @member {String} burnedTrx
 */
_GetBlockDetailsByBlockHashFromCallbackRIBST["default"].prototype['burnedTrx'] = undefined;
/**
 * Representats the used energy for the transaction.
 * @member {String} energyUsed
 */
_GetBlockDetailsByBlockHashFromCallbackRIBST["default"].prototype['energyUsed'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHashFromCallbackRIBST["default"].prototype['size'] = undefined;
var _default = GetBlockDetailsByBlockHashFromCallbackRIBS;
exports["default"] = _default;