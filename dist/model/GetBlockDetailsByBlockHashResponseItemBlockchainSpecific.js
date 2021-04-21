"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin = _interopRequireDefault(require("./GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin"));

var _GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash = _interopRequireDefault(require("./GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash"));

var _GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash = _interopRequireDefault(require("./GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash"));

var _GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin = _interopRequireDefault(require("./GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin"));

var _GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum = _interopRequireDefault(require("./GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum"));

var _GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic = _interopRequireDefault(require("./GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic"));

var _GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin = _interopRequireDefault(require("./GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetBlockDetailsByBlockHashResponseItemBlockchainSpecific model module.
 * @module model/GetBlockDetailsByBlockHashResponseItemBlockchainSpecific
 * @version 2.0.0
 */
var GetBlockDetailsByBlockHashResponseItemBlockchainSpecific = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetBlockDetailsByBlockHashResponseItemBlockchainSpecific</code>.
   * @alias module:model/GetBlockDetailsByBlockHashResponseItemBlockchainSpecific
   * @implements module:model/GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin
   * @implements module:model/GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum
   * @implements module:model/GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic
   * @implements module:model/GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash
   * @implements module:model/GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin
   * @implements module:model/GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin
   * @implements module:model/GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash
   * @param difficulty {String} Represents a mathematical value of how hard it is to find a valid hash for this block.
   * @param nonce {String} Represents a random value that can be adjusted to satisfy the Proof of Work.
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
   * @param uncles {Array.<String>} 
   * @param merkleroot {String} Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
   */
  function GetBlockDetailsByBlockHashResponseItemBlockchainSpecific(difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, uncles, merkleroot) {
    _classCallCheck(this, GetBlockDetailsByBlockHashResponseItemBlockchainSpecific);

    _GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin["default"].initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight);

    _GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum["default"].initialize(this, difficulty, nonce, size, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, uncles);

    _GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic["default"].initialize(this, difficulty, nonce, size, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, uncles);

    _GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash["default"].initialize(this, difficulty, nonce, size, bits, chainwork, merkleroot, version, versionHex);

    _GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin["default"].initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight);

    _GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin["default"].initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, weight);

    _GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash["default"].initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, version, versionHex);

    GetBlockDetailsByBlockHashResponseItemBlockchainSpecific.initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, uncles, merkleroot);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetBlockDetailsByBlockHashResponseItemBlockchainSpecific, null, [{
    key: "initialize",
    value: function initialize(obj, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, uncles, merkleroot) {
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
      obj['uncles'] = uncles;
      obj['merkleroot'] = merkleroot;
    }
    /**
     * Constructs a <code>GetBlockDetailsByBlockHashResponseItemBlockchainSpecific</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHashResponseItemBlockchainSpecific} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHashResponseItemBlockchainSpecific} The populated <code>GetBlockDetailsByBlockHashResponseItemBlockchainSpecific</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetBlockDetailsByBlockHashResponseItemBlockchainSpecific();

        _GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin["default"].constructFromObject(data, obj);

        _GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum["default"].constructFromObject(data, obj);

        _GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic["default"].constructFromObject(data, obj);

        _GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash["default"].constructFromObject(data, obj);

        _GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin["default"].constructFromObject(data, obj);

        _GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin["default"].constructFromObject(data, obj);

        _GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('uncles')) {
          obj['uncles'] = _ApiClient["default"].convertToType(data['uncles'], ['String']);
        }

        if (data.hasOwnProperty('merkleroot')) {
          obj['merkleroot'] = _ApiClient["default"].convertToType(data['merkleroot'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetBlockDetailsByBlockHashResponseItemBlockchainSpecific;
}();
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */


GetBlockDetailsByBlockHashResponseItemBlockchainSpecific.prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */

GetBlockDetailsByBlockHashResponseItemBlockchainSpecific.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

GetBlockDetailsByBlockHashResponseItemBlockchainSpecific.prototype['size'] = undefined;
/**
 * Represents a specific sub-unit of Dash. Bits have two-decimal precision.
 * @member {String} bits
 */

GetBlockDetailsByBlockHashResponseItemBlockchainSpecific.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */

GetBlockDetailsByBlockHashResponseItemBlockchainSpecific.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */

GetBlockDetailsByBlockHashResponseItemBlockchainSpecific.prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */

GetBlockDetailsByBlockHashResponseItemBlockchainSpecific.prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */

GetBlockDetailsByBlockHashResponseItemBlockchainSpecific.prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */

GetBlockDetailsByBlockHashResponseItemBlockchainSpecific.prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */

GetBlockDetailsByBlockHashResponseItemBlockchainSpecific.prototype['weight'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */

GetBlockDetailsByBlockHashResponseItemBlockchainSpecific.prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */

GetBlockDetailsByBlockHashResponseItemBlockchainSpecific.prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */

GetBlockDetailsByBlockHashResponseItemBlockchainSpecific.prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */

GetBlockDetailsByBlockHashResponseItemBlockchainSpecific.prototype['minedInSeconds'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */

GetBlockDetailsByBlockHashResponseItemBlockchainSpecific.prototype['sha3Uncles'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */

GetBlockDetailsByBlockHashResponseItemBlockchainSpecific.prototype['totalDifficulty'] = undefined;
/**
 * @member {Array.<String>} uncles
 */

GetBlockDetailsByBlockHashResponseItemBlockchainSpecific.prototype['uncles'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleroot
 */

GetBlockDetailsByBlockHashResponseItemBlockchainSpecific.prototype['merkleroot'] = undefined; // Implement GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin interface:

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin["default"].prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin["default"].prototype['size'] = undefined;
/**
 * A sub-unit of BTC equal to 0.000001 BTC, or 100 Satoshi, and is the same as microbitcoin (μBTC). Bits have two-decimal precision.
 * @member {String} bits
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin["default"].prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin["default"].prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin["default"].prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin["default"].prototype['weight'] = undefined; // Implement GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum interface:

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum["default"].prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum["default"].prototype['size'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum["default"].prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum["default"].prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum["default"].prototype['minedInSeconds'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum["default"].prototype['sha3Uncles'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum["default"].prototype['totalDifficulty'] = undefined;
/**
 * @member {Array.<String>} uncles
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum["default"].prototype['uncles'] = undefined; // Implement GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic interface:

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic["default"].prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic["default"].prototype['size'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic["default"].prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic["default"].prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic["default"].prototype['minedInSeconds'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic["default"].prototype['sha3Uncles'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic["default"].prototype['totalDifficulty'] = undefined;
/**
 * @member {Array.<String>} uncles
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic["default"].prototype['uncles'] = undefined; // Implement GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash interface:

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash["default"].prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash["default"].prototype['size'] = undefined;
/**
 * A sub-unit of BTC equal to 0.000001 BTC, or 100 Satoshi, and is the same as microbitcoin (μBTC). Bits have two-decimal precision.
 * @member {String} bits
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleroot
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash["default"].prototype['merkleroot'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash["default"].prototype['versionHex'] = undefined; // Implement GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin interface:

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin["default"].prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin["default"].prototype['size'] = undefined;
/**
 * Represents a specific sub-unit of Litecoin. Bits have two-decimal precision.
 * @member {String} bits
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin["default"].prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin["default"].prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin["default"].prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin["default"].prototype['weight'] = undefined; // Implement GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin interface:

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin["default"].prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin["default"].prototype['size'] = undefined;
/**
 * Represents a specific sub-unit of Doge. Bits have two-decimal precision.
 * @member {String} bits
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin["default"].prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin["default"].prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin["default"].prototype['version'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin["default"].prototype['weight'] = undefined; // Implement GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash interface:

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash["default"].prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash["default"].prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash["default"].prototype['size'] = undefined;
/**
 * Represents a specific sub-unit of Dash. Bits have two-decimal precision.
 * @member {String} bits
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash["default"].prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash["default"].prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash["default"].prototype['merkleRoot'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash["default"].prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */

_GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash["default"].prototype['versionHex'] = undefined;
var _default = GetBlockDetailsByBlockHashResponseItemBlockchainSpecific;
exports["default"] = _default;