"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin"));

var _GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash"));

var _GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash"));

var _GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin"));

var _GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum"));

var _GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic"));

var _GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific model module.
 * @module model/GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific
 * @version 2.0.0
 */
var GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific</code>.
   * @alias module:model/GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific
   * @implements module:model/GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin
   * @implements module:model/GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum
   * @implements module:model/GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic
   * @implements module:model/GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash
   * @implements module:model/GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin
   * @implements module:model/GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin
   * @implements module:model/GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash
   * @param difficulty {String} Represents a mathematical value of how hard it is to find a valid hash for this block.
   * @param nonce {String} Represents a random value that can be adjusted to satisfy the Proof of Work
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
  function GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific(difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty) {
    _classCallCheck(this, GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific);

    _GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin["default"].initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight);

    _GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum["default"].initialize(this, difficulty, nonce, size, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty);

    _GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic["default"].initialize(this, difficulty, nonce, size, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty);

    _GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash["default"].initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, version, versionHex);

    _GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin["default"].initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight);

    _GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin["default"].initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, weight);

    _GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash["default"].initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, version, versionHex);

    GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific.initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific, null, [{
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
     * Constructs a <code>GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific} The populated <code>GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific();

        _GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin["default"].constructFromObject(data, obj);

        _GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum["default"].constructFromObject(data, obj);

        _GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic["default"].constructFromObject(data, obj);

        _GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash["default"].constructFromObject(data, obj);

        _GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin["default"].constructFromObject(data, obj);

        _GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin["default"].constructFromObject(data, obj);

        _GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash["default"].constructFromObject(data, obj);

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

  return GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific;
}();
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */


GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific.prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work
 * @member {String} nonce
 */

GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific.prototype['size'] = undefined;
/**
 * Represents a specific sub-unit of Dash. Bits have two-decimal precision.
 * @member {String} bits
 */

GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */

GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */

GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific.prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */

GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific.prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */

GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific.prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */

GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific.prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */

GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific.prototype['weight'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */

GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific.prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */

GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific.prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */

GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific.prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */

GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific.prototype['minedInSeconds'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */

GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific.prototype['sha3Uncles'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */

GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific.prototype['totalDifficulty'] = undefined; // Implement GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin interface:

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin["default"].prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work
 * @member {String} nonce
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin["default"].prototype['size'] = undefined;
/**
 * A sub-unit of BTC equal to 0.000001 BTC, or 100 Satoshi, and is the same as microbitcoin (μBTC). Bits have two-decimal precision.
 * @member {String} bits
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin["default"].prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin["default"].prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin["default"].prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin["default"].prototype['weight'] = undefined; // Implement GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum interface:

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum["default"].prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work
 * @member {String} nonce
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum["default"].prototype['size'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum["default"].prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum["default"].prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum["default"].prototype['minedInSeconds'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum["default"].prototype['sha3Uncles'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum["default"].prototype['totalDifficulty'] = undefined; // Implement GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic interface:

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic["default"].prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work
 * @member {String} nonce
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic["default"].prototype['size'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic["default"].prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic["default"].prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic["default"].prototype['minedInSeconds'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic["default"].prototype['sha3Uncles'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic["default"].prototype['totalDifficulty'] = undefined; // Implement GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash interface:

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash["default"].prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work
 * @member {String} nonce
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash["default"].prototype['size'] = undefined;
/**
 * A sub-unit of BTC equal to 0.000001 BTC, or 100 Satoshi, and is the same as microbitcoin (μBTC). Bits have two-decimal precision.
 * @member {String} bits
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash["default"].prototype['versionHex'] = undefined; // Implement GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin interface:

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin["default"].prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work
 * @member {String} nonce
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin["default"].prototype['size'] = undefined;
/**
 * Represents a specific sub-unit of Litecoin. Bits have two-decimal precision.
 * @member {String} bits
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin["default"].prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin["default"].prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin["default"].prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin["default"].prototype['weight'] = undefined; // Implement GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin interface:

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin["default"].prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work
 * @member {String} nonce
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin["default"].prototype['size'] = undefined;
/**
 * Represents a specific sub-unit of Doge. Bits have two-decimal precision.
 * @member {String} bits
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin["default"].prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin["default"].prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin["default"].prototype['version'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin["default"].prototype['weight'] = undefined; // Implement GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash interface:

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash["default"].prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work
 * @member {String} nonce
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash["default"].prototype['size'] = undefined;
/**
 * Represents a specific sub-unit of Dash. Bits have two-decimal precision.
 * @member {String} bits
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */

_GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash["default"].prototype['versionHex'] = undefined;
var _default = GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific;
exports["default"] = _default;