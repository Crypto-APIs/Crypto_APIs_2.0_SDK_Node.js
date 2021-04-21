"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin = _interopRequireDefault(require("./GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin"));

var _GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash = _interopRequireDefault(require("./GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash"));

var _GetLatestMinedBlockResponseItemBlockchainSpecificDash = _interopRequireDefault(require("./GetLatestMinedBlockResponseItemBlockchainSpecificDash"));

var _GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin = _interopRequireDefault(require("./GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin"));

var _GetLatestMinedBlockResponseItemBlockchainSpecificEthereum = _interopRequireDefault(require("./GetLatestMinedBlockResponseItemBlockchainSpecificEthereum"));

var _GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic = _interopRequireDefault(require("./GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic"));

var _GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin = _interopRequireDefault(require("./GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetLatestMinedBlockResponseItemBlockchainSpecific model module.
 * @module model/GetLatestMinedBlockResponseItemBlockchainSpecific
 * @version 2.0.0
 */
var GetLatestMinedBlockResponseItemBlockchainSpecific = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetLatestMinedBlockResponseItemBlockchainSpecific</code>.
   * @alias module:model/GetLatestMinedBlockResponseItemBlockchainSpecific
   * @implements module:model/GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin
   * @implements module:model/GetLatestMinedBlockResponseItemBlockchainSpecificEthereum
   * @implements module:model/GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic
   * @implements module:model/GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash
   * @implements module:model/GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin
   * @implements module:model/GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin
   * @implements module:model/GetLatestMinedBlockResponseItemBlockchainSpecificDash
   * @param difficulty {String} Represents a mathematical value of how hard it is to find a valid hash for this block.
   * @param nonce {String} Represents a random value that can be adjusted to satisfy the proof of work
   * @param size {Number} Represents the total size of the block in Bytes.
   * @param bits {String} Represents a specific sub-unit of Dash. Bits have two-decimal precision.
   * @param chainwork {String} Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
   * @param merkleRoot {String} Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
   * @param strippedSize {Number} Defines the numeric representation of the block size excluding the witness data.
   * @param version {Number} Represents the version of the specific block on the blockchain.
   * @param versionHex {String} Is the hexadecimal string representation of the block's version.
   * @param weight {Number} Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
   * @param extraData {String} Represents any data that can be included by the miner in the block.
   * @param gasLimit {String} Defines the total gas limit of all transactions in the block.
   * @param gasUsed {String} Represents the total amount of gas used by all transactions in this block.
   * @param minedInSeconds {Number} Specifies the amount of time required for the block to be mined in seconds.
   * @param sha3Uncles {String} Defines the combined hash of all uncles for a given parent.
   * @param totalDifficulty {String} Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
   */
  function GetLatestMinedBlockResponseItemBlockchainSpecific(difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty) {
    _classCallCheck(this, GetLatestMinedBlockResponseItemBlockchainSpecific);

    _GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin["default"].initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight);

    _GetLatestMinedBlockResponseItemBlockchainSpecificEthereum["default"].initialize(this, difficulty, nonce, size, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty);

    _GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic["default"].initialize(this, difficulty, nonce, size, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty);

    _GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash["default"].initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, version, versionHex);

    _GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin["default"].initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight);

    _GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin["default"].initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, weight);

    _GetLatestMinedBlockResponseItemBlockchainSpecificDash["default"].initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, version, versionHex);

    GetLatestMinedBlockResponseItemBlockchainSpecific.initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetLatestMinedBlockResponseItemBlockchainSpecific, null, [{
    key: "initialize",
    value: function initialize(obj, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty) {
      obj['difficulty'] = difficulty;
      obj['nonce'] = nonce;
      obj['size'] = size;
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
    }
    /**
     * Constructs a <code>GetLatestMinedBlockResponseItemBlockchainSpecific</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLatestMinedBlockResponseItemBlockchainSpecific} obj Optional instance to populate.
     * @return {module:model/GetLatestMinedBlockResponseItemBlockchainSpecific} The populated <code>GetLatestMinedBlockResponseItemBlockchainSpecific</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetLatestMinedBlockResponseItemBlockchainSpecific();

        _GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin["default"].constructFromObject(data, obj);

        _GetLatestMinedBlockResponseItemBlockchainSpecificEthereum["default"].constructFromObject(data, obj);

        _GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic["default"].constructFromObject(data, obj);

        _GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash["default"].constructFromObject(data, obj);

        _GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin["default"].constructFromObject(data, obj);

        _GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin["default"].constructFromObject(data, obj);

        _GetLatestMinedBlockResponseItemBlockchainSpecificDash["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('difficulty')) {
          obj['difficulty'] = _ApiClient["default"].convertToType(data['difficulty'], 'String');
        }

        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
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
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }

        if (data.hasOwnProperty('gasUsed')) {
          obj['gasUsed'] = _ApiClient["default"].convertToType(data['gasUsed'], 'String');
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
      }

      return obj;
    }
  }]);

  return GetLatestMinedBlockResponseItemBlockchainSpecific;
}();
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */


GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */

GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['size'] = undefined;
/**
 * Represents a specific sub-unit of Dash. Bits have two-decimal precision.
 * @member {String} bits
 */

GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */

GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */

GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */

GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */

GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */

GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */

GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['weight'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */

GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */

GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */

GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */

GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['minedInSeconds'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */

GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['sha3Uncles'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */

GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['totalDifficulty'] = undefined; // Implement GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin interface:

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin["default"].prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin["default"].prototype['size'] = undefined;
/**
 * A sub-unit of BTC equal to 0.000001 BTC, or 100 Satoshi, and is the same as microbitcoin (μBTC). Bits have two-decimal precision.
 * @member {String} bits
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin["default"].prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin["default"].prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin["default"].prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin["default"].prototype['weight'] = undefined; // Implement GetLatestMinedBlockResponseItemBlockchainSpecificEthereum interface:

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificEthereum["default"].prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificEthereum["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificEthereum["default"].prototype['size'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificEthereum["default"].prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificEthereum["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificEthereum["default"].prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificEthereum["default"].prototype['minedInSeconds'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificEthereum["default"].prototype['sha3Uncles'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificEthereum["default"].prototype['totalDifficulty'] = undefined; // Implement GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic interface:

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic["default"].prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic["default"].prototype['size'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic["default"].prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic["default"].prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic["default"].prototype['minedInSeconds'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic["default"].prototype['sha3Uncles'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic["default"].prototype['totalDifficulty'] = undefined; // Implement GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash interface:

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash["default"].prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash["default"].prototype['size'] = undefined;
/**
 * A sub-unit of BCH equal to 0.000001 BCH, or 100 Satoshi, and is the same as microbitcoincash (μBCH). Bits have two-decimal precision.
 * @member {String} bits
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash["default"].prototype['versionHex'] = undefined; // Implement GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin interface:

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin["default"].prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin["default"].prototype['size'] = undefined;
/**
 * Represents a specific sub-unit of Litecoin. Bits have two-decimal precision.
 * @member {String} bits
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin["default"].prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin["default"].prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin["default"].prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin["default"].prototype['weight'] = undefined; // Implement GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin interface:

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin["default"].prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin["default"].prototype['size'] = undefined;
/**
 * Represents a specific sub-unit of Doge. Bits have two-decimal precision.
 * @member {String} bits
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin["default"].prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin["default"].prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin["default"].prototype['version'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin["default"].prototype['weight'] = undefined; // Implement GetLatestMinedBlockResponseItemBlockchainSpecificDash interface:

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificDash["default"].prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificDash["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificDash["default"].prototype['size'] = undefined;
/**
 * Represents a specific sub-unit of Dash. Bits have two-decimal precision.
 * @member {String} bits
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificDash["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificDash["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificDash["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificDash["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */

_GetLatestMinedBlockResponseItemBlockchainSpecificDash["default"].prototype['versionHex'] = undefined;
var _default = GetLatestMinedBlockResponseItemBlockchainSpecific;
exports["default"] = _default;