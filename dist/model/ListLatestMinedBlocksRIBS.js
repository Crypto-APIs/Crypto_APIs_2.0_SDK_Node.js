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

var _ListLatestMinedBlocksRIBSZ = _interopRequireDefault(require("./ListLatestMinedBlocksRIBSZ"));

var _ListLatestMinedBlocksRIBSZ2 = _interopRequireDefault(require("./ListLatestMinedBlocksRIBSZ2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListLatestMinedBlocksRIBS model module.
 * @module model/ListLatestMinedBlocksRIBS
 * @version 1.3.0
 */
var ListLatestMinedBlocksRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListLatestMinedBlocksRIBS</code>.
   * @alias module:model/ListLatestMinedBlocksRIBS
   * @implements module:model/ListLatestMinedBlocksRIBSB
   * @implements module:model/ListLatestMinedBlocksRIBSBC
   * @implements module:model/ListLatestMinedBlocksRIBSEC
   * @implements module:model/ListLatestMinedBlocksRIBSE
   * @implements module:model/ListLatestMinedBlocksRIBSL
   * @implements module:model/ListLatestMinedBlocksRIBSD
   * @implements module:model/ListLatestMinedBlocksRIBSD2
   * @implements module:model/ListLatestMinedBlocksRIBSBSC
   * @implements module:model/ListLatestMinedBlocksRIBSZ
   * @implements module:model/ListLatestMinedBlocksRIBSZ2
   * @param bits {String} Represents a specific sub-unit of Zcash. Bits have two-decimal precision
   * @param chainwork {String} Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
   * @param merkleRoot {String} Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
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
   * @param difficulty {String} Represents a mathematical value of how hard it is to find a valid hash for this block.
   * @param dsBlock {Number} Represents the Directory Service block which contains metadata about the miners who participate in the consensus protocol.
   * @param dsDifficulty {String} Defines how difficult it is to mine the dsBlocks.
   * @param dsLeader {String} Represents a part of the DS Committee which leads the consensus protocol for the epoch.
   * @param microBlocks {Array.<String>} 
   * @param merkleroot {String} Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
   * @param nonce {String} Represents a random value that can be adjusted to satisfy the proof of work
   * @param size {Number} Represents the total size of the block in Bytes.
   */
  function ListLatestMinedBlocksRIBS(bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, uncles, difficulty, dsBlock, dsDifficulty, dsLeader, microBlocks, merkleroot, nonce, size) {
    _classCallCheck(this, ListLatestMinedBlocksRIBS);

    _ListLatestMinedBlocksRIBSB["default"].initialize(this, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight);

    _ListLatestMinedBlocksRIBSBC["default"].initialize(this, bits, chainwork, merkleRoot, version, versionHex);

    _ListLatestMinedBlocksRIBSEC["default"].initialize(this, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, uncles);

    _ListLatestMinedBlocksRIBSE["default"].initialize(this, difficulty, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, uncles);

    _ListLatestMinedBlocksRIBSL["default"].initialize(this, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight);

    _ListLatestMinedBlocksRIBSD["default"].initialize(this, bits, chainwork, merkleRoot, version, versionHex);

    _ListLatestMinedBlocksRIBSD2["default"].initialize(this, bits, chainwork, merkleRoot, strippedSize, version, weight);

    _ListLatestMinedBlocksRIBSBSC["default"].initialize(this, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, uncles);

    _ListLatestMinedBlocksRIBSZ["default"].initialize(this, dsBlock, dsDifficulty, dsLeader, gasLimit, gasUsed, microBlocks);

    _ListLatestMinedBlocksRIBSZ2["default"].initialize(this, bits, chainwork, merkleroot, nonce, size, version);

    ListLatestMinedBlocksRIBS.initialize(this, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, uncles, difficulty, dsBlock, dsDifficulty, dsLeader, microBlocks, merkleroot, nonce, size);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListLatestMinedBlocksRIBS, null, [{
    key: "initialize",
    value: function initialize(obj, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, uncles, difficulty, dsBlock, dsDifficulty, dsLeader, microBlocks, merkleroot, nonce, size) {
      obj['bits'] = bits;
      obj['chainwork'] = chainwork;
      obj['merkleRoot'] = merkleRoot;
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
      obj['difficulty'] = difficulty;
      obj['dsBlock'] = dsBlock;
      obj['dsDifficulty'] = dsDifficulty;
      obj['dsLeader'] = dsLeader;
      obj['microBlocks'] = microBlocks;
      obj['merkleroot'] = merkleroot;
      obj['nonce'] = nonce;
      obj['size'] = size;
    }
    /**
     * Constructs a <code>ListLatestMinedBlocksRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListLatestMinedBlocksRIBS} obj Optional instance to populate.
     * @return {module:model/ListLatestMinedBlocksRIBS} The populated <code>ListLatestMinedBlocksRIBS</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListLatestMinedBlocksRIBS();

        _ListLatestMinedBlocksRIBSB["default"].constructFromObject(data, obj);

        _ListLatestMinedBlocksRIBSBC["default"].constructFromObject(data, obj);

        _ListLatestMinedBlocksRIBSEC["default"].constructFromObject(data, obj);

        _ListLatestMinedBlocksRIBSE["default"].constructFromObject(data, obj);

        _ListLatestMinedBlocksRIBSL["default"].constructFromObject(data, obj);

        _ListLatestMinedBlocksRIBSD["default"].constructFromObject(data, obj);

        _ListLatestMinedBlocksRIBSD2["default"].constructFromObject(data, obj);

        _ListLatestMinedBlocksRIBSBSC["default"].constructFromObject(data, obj);

        _ListLatestMinedBlocksRIBSZ["default"].constructFromObject(data, obj);

        _ListLatestMinedBlocksRIBSZ2["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('bits')) {
          obj['bits'] = _ApiClient["default"].convertToType(data['bits'], 'String');
        }

        if (data.hasOwnProperty('chainwork')) {
          obj['chainwork'] = _ApiClient["default"].convertToType(data['chainwork'], 'String');
        }

        if (data.hasOwnProperty('merkleRoot')) {
          obj['merkleRoot'] = _ApiClient["default"].convertToType(data['merkleRoot'], 'String');
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

        if (data.hasOwnProperty('difficulty')) {
          obj['difficulty'] = _ApiClient["default"].convertToType(data['difficulty'], 'String');
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

        if (data.hasOwnProperty('merkleroot')) {
          obj['merkleroot'] = _ApiClient["default"].convertToType(data['merkleroot'], 'String');
        }

        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ListLatestMinedBlocksRIBS;
}();
/**
 * Represents a specific sub-unit of Zcash. Bits have two-decimal precision
 * @member {String} bits
 */


ListLatestMinedBlocksRIBS.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */

ListLatestMinedBlocksRIBS.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */

ListLatestMinedBlocksRIBS.prototype['merkleRoot'] = undefined;
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
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */

ListLatestMinedBlocksRIBS.prototype['difficulty'] = undefined;
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
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleroot
 */

ListLatestMinedBlocksRIBS.prototype['merkleroot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */

ListLatestMinedBlocksRIBS.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

ListLatestMinedBlocksRIBS.prototype['size'] = undefined; // Implement ListLatestMinedBlocksRIBSB interface:

/**
 * A sub-unit of BCH equal to 0.000001 BCH, or 100 Satoshi, and is the same as microbitcoincash (μBCH). Bits have two-decimal precision.
 * @member {String} bits
 */

_ListLatestMinedBlocksRIBSB["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */

_ListLatestMinedBlocksRIBSB["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */

_ListLatestMinedBlocksRIBSB["default"].prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */

_ListLatestMinedBlocksRIBSB["default"].prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */

_ListLatestMinedBlocksRIBSB["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */

_ListLatestMinedBlocksRIBSB["default"].prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */

_ListLatestMinedBlocksRIBSB["default"].prototype['weight'] = undefined; // Implement ListLatestMinedBlocksRIBSBC interface:

/**
 * A sub-unit of BCH equal to 0.000001 BCH, or 100 Satoshi, and is the same as microbitcoincash (μBCH). Bits have two-decimal precision.
 * @member {String} bits
 */

_ListLatestMinedBlocksRIBSBC["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */

_ListLatestMinedBlocksRIBSBC["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */

_ListLatestMinedBlocksRIBSBC["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */

_ListLatestMinedBlocksRIBSBC["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */

_ListLatestMinedBlocksRIBSBC["default"].prototype['versionHex'] = undefined; // Implement ListLatestMinedBlocksRIBSEC interface:

/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */

_ListLatestMinedBlocksRIBSEC["default"].prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */

_ListLatestMinedBlocksRIBSEC["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */

_ListLatestMinedBlocksRIBSEC["default"].prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */

_ListLatestMinedBlocksRIBSEC["default"].prototype['minedInSeconds'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */

_ListLatestMinedBlocksRIBSEC["default"].prototype['sha3Uncles'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */

_ListLatestMinedBlocksRIBSEC["default"].prototype['totalDifficulty'] = undefined;
/**
 * @member {Array.<String>} uncles
 */

_ListLatestMinedBlocksRIBSEC["default"].prototype['uncles'] = undefined; // Implement ListLatestMinedBlocksRIBSE interface:

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */

_ListLatestMinedBlocksRIBSE["default"].prototype['difficulty'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */

_ListLatestMinedBlocksRIBSE["default"].prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */

_ListLatestMinedBlocksRIBSE["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */

_ListLatestMinedBlocksRIBSE["default"].prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */

_ListLatestMinedBlocksRIBSE["default"].prototype['minedInSeconds'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */

_ListLatestMinedBlocksRIBSE["default"].prototype['sha3Uncles'] = undefined;
/**
 * @member {Array.<String>} uncles
 */

_ListLatestMinedBlocksRIBSE["default"].prototype['uncles'] = undefined; // Implement ListLatestMinedBlocksRIBSL interface:

/**
 * Represents a specific sub-unit of Litecoin. Bits have two-decimal precision.
 * @member {String} bits
 */

_ListLatestMinedBlocksRIBSL["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */

_ListLatestMinedBlocksRIBSL["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */

_ListLatestMinedBlocksRIBSL["default"].prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */

_ListLatestMinedBlocksRIBSL["default"].prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */

_ListLatestMinedBlocksRIBSL["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */

_ListLatestMinedBlocksRIBSL["default"].prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */

_ListLatestMinedBlocksRIBSL["default"].prototype['weight'] = undefined; // Implement ListLatestMinedBlocksRIBSD interface:

/**
 * Represents a specific sub-unit of Dash. Bits have two-decimal precision.
 * @member {String} bits
 */

_ListLatestMinedBlocksRIBSD["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */

_ListLatestMinedBlocksRIBSD["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */

_ListLatestMinedBlocksRIBSD["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */

_ListLatestMinedBlocksRIBSD["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */

_ListLatestMinedBlocksRIBSD["default"].prototype['versionHex'] = undefined; // Implement ListLatestMinedBlocksRIBSD2 interface:

/**
 * Represents a specific sub-unit of Doge. Bits have two-decimal precision.
 * @member {String} bits
 */

_ListLatestMinedBlocksRIBSD2["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahash
 * @member {String} chainwork
 */

_ListLatestMinedBlocksRIBSD2["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */

_ListLatestMinedBlocksRIBSD2["default"].prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */

_ListLatestMinedBlocksRIBSD2["default"].prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */

_ListLatestMinedBlocksRIBSD2["default"].prototype['version'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */

_ListLatestMinedBlocksRIBSD2["default"].prototype['weight'] = undefined; // Implement ListLatestMinedBlocksRIBSBSC interface:

/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */

_ListLatestMinedBlocksRIBSBSC["default"].prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */

_ListLatestMinedBlocksRIBSBSC["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */

_ListLatestMinedBlocksRIBSBSC["default"].prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in second
 * @member {Number} minedInSeconds
 */

_ListLatestMinedBlocksRIBSBSC["default"].prototype['minedInSeconds'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */

_ListLatestMinedBlocksRIBSBSC["default"].prototype['sha3Uncles'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block
 * @member {String} totalDifficulty
 */

_ListLatestMinedBlocksRIBSBSC["default"].prototype['totalDifficulty'] = undefined;
/**
 * @member {Array.<String>} uncles
 */

_ListLatestMinedBlocksRIBSBSC["default"].prototype['uncles'] = undefined; // Implement ListLatestMinedBlocksRIBSZ interface:

/**
 * Represents the Directory Service block which contains metadata about the miners who participate in the consensus protocol.
 * @member {Number} dsBlock
 */

_ListLatestMinedBlocksRIBSZ["default"].prototype['dsBlock'] = undefined;
/**
 * Defines how difficult it is to mine the dsBlocks.
 * @member {String} dsDifficulty
 */

_ListLatestMinedBlocksRIBSZ["default"].prototype['dsDifficulty'] = undefined;
/**
 * Represents a part of the DS Committee which leads the consensus protocol for the epoch.
 * @member {String} dsLeader
 */

_ListLatestMinedBlocksRIBSZ["default"].prototype['dsLeader'] = undefined;
/**
 * Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
 * @member {Number} gasLimit
 */

_ListLatestMinedBlocksRIBSZ["default"].prototype['gasLimit'] = undefined;
/**
 * Defines how much of the gas for the block has been used.
 * @member {Number} gasUsed
 */

_ListLatestMinedBlocksRIBSZ["default"].prototype['gasUsed'] = undefined;
/**
 * @member {Array.<String>} microBlocks
 */

_ListLatestMinedBlocksRIBSZ["default"].prototype['microBlocks'] = undefined; // Implement ListLatestMinedBlocksRIBSZ2 interface:

/**
 * Represents a specific sub-unit of Zcash. Bits have two-decimal precision
 * @member {String} bits
 */

_ListLatestMinedBlocksRIBSZ2["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */

_ListLatestMinedBlocksRIBSZ2["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleroot
 */

_ListLatestMinedBlocksRIBSZ2["default"].prototype['merkleroot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */

_ListLatestMinedBlocksRIBSZ2["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

_ListLatestMinedBlocksRIBSZ2["default"].prototype['size'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */

_ListLatestMinedBlocksRIBSZ2["default"].prototype['version'] = undefined;
var _default = ListLatestMinedBlocksRIBS;
exports["default"] = _default;