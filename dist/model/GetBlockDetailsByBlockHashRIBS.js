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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetBlockDetailsByBlockHashRIBS model module.
 * @module model/GetBlockDetailsByBlockHashRIBS
 * @version 1.13.0
 */
var GetBlockDetailsByBlockHashRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetBlockDetailsByBlockHashRIBS</code>.
   * @alias module:model/GetBlockDetailsByBlockHashRIBS
   * @implements module:model/GetBlockDetailsByBlockHashRIBSB
   * @implements module:model/GetBlockDetailsByBlockHashRIBSE
   * @implements module:model/GetBlockDetailsByBlockHashRIBSEC
   * @implements module:model/GetBlockDetailsByBlockHashRIBSBC
   * @implements module:model/GetBlockDetailsByBlockHashRIBSL
   * @implements module:model/GetBlockDetailsByBlockHashRIBSD
   * @implements module:model/GetBlockDetailsByBlockHashRIBSD2
   * @implements module:model/GetBlockDetailsByBlockHashRIBSBSC
   * @implements module:model/GetBlockDetailsByBlockHashRIBSZ
   * @implements module:model/GetBlockDetailsByBlockHashRIBSZ2
   * @param difficulty {String} Represents a mathematical value of how hard it is to find a valid hash for this block.
   * @param bits {String} Represents a specific sub-unit of Zcash. Bits have two-decimal precision
   * @param chainwork {String} Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
   * @param merkleRoot {String} Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
   * @param nonce {String} Represents a random value that can be adjusted to satisfy the Proof of Work.
   * @param size {Number} Represents the total size of the block in Bytes.
   * @param strippedSize {Number} Defines the numeric representation of the block size excluding the witness data.
   * @param version {Number} Represents the block version number.
   * @param versionHex {String} Is the hexadecimal string representation of the block's version.
   * @param weight {Number} Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
   * @param extraData {String} Represents any data that can be included by the miner in the block.
   * @param gasLimit {Number} Numeric representation of the block gas_limit
   * @param gasUsed {Number} Numeric representation of the block gas_limit
   * @param minedInSeconds {Number} Specifies the amount of time required for the block to be mined in seconds.
   * @param sha3Uncles {String} Defines the combined hash of all uncles for a given paren
   * @param totalDifficulty {String} Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
   * @param uncles {Array.<String>} 
   * @param dsBlock {Number} Numeric representation of the ds block
   * @param dsDifficulty {String} Numeric representation of the ds difficulty
   * @param dsLeader {String} String representation of the ds leader
   * @param microBlocks {Array.<String>} 
   */
  function GetBlockDetailsByBlockHashRIBS(difficulty, bits, chainwork, merkleRoot, nonce, size, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, uncles, dsBlock, dsDifficulty, dsLeader, microBlocks) {
    _classCallCheck(this, GetBlockDetailsByBlockHashRIBS);
    _GetBlockDetailsByBlockHashRIBSB["default"].initialize(this, difficulty, bits, chainwork, merkleRoot, nonce, size, strippedSize, version, versionHex, weight);
    _GetBlockDetailsByBlockHashRIBSE["default"].initialize(this, difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty, uncles);
    _GetBlockDetailsByBlockHashRIBSEC["default"].initialize(this, difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty, uncles);
    _GetBlockDetailsByBlockHashRIBSBC["default"].initialize(this, difficulty, bits, chainwork, merkleRoot, nonce, size, version, versionHex);
    _GetBlockDetailsByBlockHashRIBSL["default"].initialize(this, difficulty, bits, chainwork, merkleRoot, nonce, size, strippedSize, version, versionHex, weight);
    _GetBlockDetailsByBlockHashRIBSD["default"].initialize(this, difficulty, bits, chainwork, merkleRoot, nonce, size, strippedSize, version, weight);
    _GetBlockDetailsByBlockHashRIBSD2["default"].initialize(this, difficulty, bits, chainwork, merkleRoot, nonce, size, version, versionHex);
    _GetBlockDetailsByBlockHashRIBSBSC["default"].initialize(this, difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty);
    _GetBlockDetailsByBlockHashRIBSZ["default"].initialize(this, difficulty, bits, chainwork, merkleRoot, nonce, size, version);
    _GetBlockDetailsByBlockHashRIBSZ2["default"].initialize(this, difficulty, dsBlock, dsDifficulty, dsLeader, gasLimit, gasUsed, microBlocks);
    GetBlockDetailsByBlockHashRIBS.initialize(this, difficulty, bits, chainwork, merkleRoot, nonce, size, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, uncles, dsBlock, dsDifficulty, dsLeader, microBlocks);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetBlockDetailsByBlockHashRIBS, null, [{
    key: "initialize",
    value: function initialize(obj, difficulty, bits, chainwork, merkleRoot, nonce, size, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, uncles, dsBlock, dsDifficulty, dsLeader, microBlocks) {
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
      obj['uncles'] = uncles;
      obj['dsBlock'] = dsBlock;
      obj['dsDifficulty'] = dsDifficulty;
      obj['dsLeader'] = dsLeader;
      obj['microBlocks'] = microBlocks;
    }

    /**
     * Constructs a <code>GetBlockDetailsByBlockHashRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHashRIBS} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHashRIBS} The populated <code>GetBlockDetailsByBlockHashRIBS</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetBlockDetailsByBlockHashRIBS();
        _GetBlockDetailsByBlockHashRIBSB["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHashRIBSE["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHashRIBSEC["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHashRIBSBC["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHashRIBSL["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHashRIBSD["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHashRIBSD2["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHashRIBSBSC["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHashRIBSZ["default"].constructFromObject(data, obj);
        _GetBlockDetailsByBlockHashRIBSZ2["default"].constructFromObject(data, obj);
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
      }
      return obj;
    }
  }]);
  return GetBlockDetailsByBlockHashRIBS;
}();
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
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

// Implement GetBlockDetailsByBlockHashRIBSB interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHashRIBSB["default"].prototype['difficulty'] = undefined;
/**
 * A sub-unit of BTC equal to 0.000001 BTC, or 100 Satoshi, and is the same as microbitcoin (μBTC). Bits have two-decimal precision.
 * @member {String} bits
 */
_GetBlockDetailsByBlockHashRIBSB["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetBlockDetailsByBlockHashRIBSB["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetBlockDetailsByBlockHashRIBSB["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {Number} nonce
 */
_GetBlockDetailsByBlockHashRIBSB["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHashRIBSB["default"].prototype['size'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
_GetBlockDetailsByBlockHashRIBSB["default"].prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
_GetBlockDetailsByBlockHashRIBSB["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
_GetBlockDetailsByBlockHashRIBSB["default"].prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
_GetBlockDetailsByBlockHashRIBSB["default"].prototype['weight'] = undefined;
// Implement GetBlockDetailsByBlockHashRIBSE interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHashRIBSE["default"].prototype['difficulty'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
_GetBlockDetailsByBlockHashRIBSE["default"].prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
_GetBlockDetailsByBlockHashRIBSE["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
_GetBlockDetailsByBlockHashRIBSE["default"].prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
_GetBlockDetailsByBlockHashRIBSE["default"].prototype['minedInSeconds'] = undefined;
/**
 * Numeric representation of the block nonce
 * @member {String} nonce
 */
_GetBlockDetailsByBlockHashRIBSE["default"].prototype['nonce'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
_GetBlockDetailsByBlockHashRIBSE["default"].prototype['sha3Uncles'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHashRIBSE["default"].prototype['size'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
_GetBlockDetailsByBlockHashRIBSE["default"].prototype['totalDifficulty'] = undefined;
/**
 * @member {Array.<String>} uncles
 */
_GetBlockDetailsByBlockHashRIBSE["default"].prototype['uncles'] = undefined;
// Implement GetBlockDetailsByBlockHashRIBSEC interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHashRIBSEC["default"].prototype['difficulty'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
_GetBlockDetailsByBlockHashRIBSEC["default"].prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
_GetBlockDetailsByBlockHashRIBSEC["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
_GetBlockDetailsByBlockHashRIBSEC["default"].prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
_GetBlockDetailsByBlockHashRIBSEC["default"].prototype['minedInSeconds'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
_GetBlockDetailsByBlockHashRIBSEC["default"].prototype['nonce'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
_GetBlockDetailsByBlockHashRIBSEC["default"].prototype['sha3Uncles'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHashRIBSEC["default"].prototype['size'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
_GetBlockDetailsByBlockHashRIBSEC["default"].prototype['totalDifficulty'] = undefined;
/**
 * @member {Array.<String>} uncles
 */
_GetBlockDetailsByBlockHashRIBSEC["default"].prototype['uncles'] = undefined;
// Implement GetBlockDetailsByBlockHashRIBSBC interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHashRIBSBC["default"].prototype['difficulty'] = undefined;
/**
 * A sub-unit of BTC equal to 0.000001 BTC, or 100 Satoshi, and is the same as microbitcoin (μBTC). Bits have two-decimal precision.
 * @member {String} bits
 */
_GetBlockDetailsByBlockHashRIBSBC["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetBlockDetailsByBlockHashRIBSBC["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetBlockDetailsByBlockHashRIBSBC["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
_GetBlockDetailsByBlockHashRIBSBC["default"].prototype['nonce'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHashRIBSBC["default"].prototype['size'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
_GetBlockDetailsByBlockHashRIBSBC["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
_GetBlockDetailsByBlockHashRIBSBC["default"].prototype['versionHex'] = undefined;
// Implement GetBlockDetailsByBlockHashRIBSL interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHashRIBSL["default"].prototype['difficulty'] = undefined;
/**
 * Represents a specific sub-unit of Litecoin. Bits have two-decimal precision.
 * @member {String} bits
 */
_GetBlockDetailsByBlockHashRIBSL["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetBlockDetailsByBlockHashRIBSL["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetBlockDetailsByBlockHashRIBSL["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
_GetBlockDetailsByBlockHashRIBSL["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHashRIBSL["default"].prototype['size'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
_GetBlockDetailsByBlockHashRIBSL["default"].prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
_GetBlockDetailsByBlockHashRIBSL["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
_GetBlockDetailsByBlockHashRIBSL["default"].prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
_GetBlockDetailsByBlockHashRIBSL["default"].prototype['weight'] = undefined;
// Implement GetBlockDetailsByBlockHashRIBSD interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHashRIBSD["default"].prototype['difficulty'] = undefined;
/**
 * Represents a specific sub-unit of Doge. Bits have two-decimal precision.
 * @member {String} bits
 */
_GetBlockDetailsByBlockHashRIBSD["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetBlockDetailsByBlockHashRIBSD["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetBlockDetailsByBlockHashRIBSD["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
_GetBlockDetailsByBlockHashRIBSD["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHashRIBSD["default"].prototype['size'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
_GetBlockDetailsByBlockHashRIBSD["default"].prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
_GetBlockDetailsByBlockHashRIBSD["default"].prototype['version'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
_GetBlockDetailsByBlockHashRIBSD["default"].prototype['weight'] = undefined;
// Implement GetBlockDetailsByBlockHashRIBSD2 interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHashRIBSD2["default"].prototype['difficulty'] = undefined;
/**
 * Represents a specific sub-unit of Dash. Bits have two-decimal precision.
 * @member {String} bits
 */
_GetBlockDetailsByBlockHashRIBSD2["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetBlockDetailsByBlockHashRIBSD2["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetBlockDetailsByBlockHashRIBSD2["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
_GetBlockDetailsByBlockHashRIBSD2["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHashRIBSD2["default"].prototype['size'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
_GetBlockDetailsByBlockHashRIBSD2["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
_GetBlockDetailsByBlockHashRIBSD2["default"].prototype['versionHex'] = undefined;
// Implement GetBlockDetailsByBlockHashRIBSBSC interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHashRIBSBSC["default"].prototype['difficulty'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
_GetBlockDetailsByBlockHashRIBSBSC["default"].prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
_GetBlockDetailsByBlockHashRIBSBSC["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
_GetBlockDetailsByBlockHashRIBSBSC["default"].prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
_GetBlockDetailsByBlockHashRIBSBSC["default"].prototype['minedInSeconds'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
_GetBlockDetailsByBlockHashRIBSBSC["default"].prototype['nonce'] = undefined;
/**
 * Defines the combined hash of all uncles for a given paren
 * @member {String} sha3Uncles
 */
_GetBlockDetailsByBlockHashRIBSBSC["default"].prototype['sha3Uncles'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHashRIBSBSC["default"].prototype['size'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
_GetBlockDetailsByBlockHashRIBSBSC["default"].prototype['totalDifficulty'] = undefined;
// Implement GetBlockDetailsByBlockHashRIBSZ interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHashRIBSZ["default"].prototype['difficulty'] = undefined;
/**
 * Represents a specific sub-unit of Zcash. Bits have two-decimal precision
 * @member {String} bits
 */
_GetBlockDetailsByBlockHashRIBSZ["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
_GetBlockDetailsByBlockHashRIBSZ["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
_GetBlockDetailsByBlockHashRIBSZ["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
_GetBlockDetailsByBlockHashRIBSZ["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
_GetBlockDetailsByBlockHashRIBSZ["default"].prototype['size'] = undefined;
/**
 * Represents the block version number.
 * @member {Number} version
 */
_GetBlockDetailsByBlockHashRIBSZ["default"].prototype['version'] = undefined;
// Implement GetBlockDetailsByBlockHashRIBSZ2 interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
_GetBlockDetailsByBlockHashRIBSZ2["default"].prototype['difficulty'] = undefined;
/**
 * Numeric representation of the ds block
 * @member {Number} dsBlock
 */
_GetBlockDetailsByBlockHashRIBSZ2["default"].prototype['dsBlock'] = undefined;
/**
 * Numeric representation of the ds difficulty
 * @member {String} dsDifficulty
 */
_GetBlockDetailsByBlockHashRIBSZ2["default"].prototype['dsDifficulty'] = undefined;
/**
 * String representation of the ds leader
 * @member {String} dsLeader
 */
_GetBlockDetailsByBlockHashRIBSZ2["default"].prototype['dsLeader'] = undefined;
/**
 * Numeric representation of the block gas_limit
 * @member {Number} gasLimit
 */
_GetBlockDetailsByBlockHashRIBSZ2["default"].prototype['gasLimit'] = undefined;
/**
 * Numeric representation of the block gas_limit
 * @member {Number} gasUsed
 */
_GetBlockDetailsByBlockHashRIBSZ2["default"].prototype['gasUsed'] = undefined;
/**
 * @member {Array.<String>} microBlocks
 */
_GetBlockDetailsByBlockHashRIBSZ2["default"].prototype['microBlocks'] = undefined;
var _default = GetBlockDetailsByBlockHashRIBS;
exports["default"] = _default;