/**
 * CryptoAPIs
 * Crypto APIs 2.0 is a complex and innovative infrastructure layer that radically simplifies the development of any Blockchain and Crypto related applications. Organized around REST, Crypto APIs 2.0 can assist both novice Bitcoin/Ethereum enthusiasts and crypto experts with the development of their blockchain applications. Crypto APIs 2.0 provides unified endpoints and data, raw data, automatic tokens and coins forwardings, callback functionalities, and much more.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: developers@cryptoapis.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin from './GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin';
import GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash from './GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash';
import GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash from './GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash';
import GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin from './GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin';
import GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum from './GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum';
import GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic from './GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic';
import GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin from './GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin';

/**
 * The GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific model module.
 * @module model/GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific
 * @version 2.0.0
 */
class GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific {
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
    constructor(difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty) { 
        GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin.initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight);GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum.initialize(this, difficulty, nonce, size, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty);GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic.initialize(this, difficulty, nonce, size, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty);GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash.initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, version, versionHex);GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin.initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight);GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin.initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, weight);GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash.initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, version, versionHex);
        GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific.initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty) { 
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
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific();
            GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin.constructFromObject(data, obj);
            GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum.constructFromObject(data, obj);
            GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic.constructFromObject(data, obj);
            GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash.constructFromObject(data, obj);
            GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin.constructFromObject(data, obj);
            GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin.constructFromObject(data, obj);
            GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash.constructFromObject(data, obj);

            if (data.hasOwnProperty('difficulty')) {
                obj['difficulty'] = ApiClient.convertToType(data['difficulty'], 'String');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('bits')) {
                obj['bits'] = ApiClient.convertToType(data['bits'], 'String');
            }
            if (data.hasOwnProperty('chainwork')) {
                obj['chainwork'] = ApiClient.convertToType(data['chainwork'], 'String');
            }
            if (data.hasOwnProperty('merkleRoot')) {
                obj['merkleRoot'] = ApiClient.convertToType(data['merkleRoot'], 'String');
            }
            if (data.hasOwnProperty('strippedSize')) {
                obj['strippedSize'] = ApiClient.convertToType(data['strippedSize'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('versionHex')) {
                obj['versionHex'] = ApiClient.convertToType(data['versionHex'], 'String');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
            if (data.hasOwnProperty('extraData')) {
                obj['extraData'] = ApiClient.convertToType(data['extraData'], 'String');
            }
            if (data.hasOwnProperty('gasLimit')) {
                obj['gasLimit'] = ApiClient.convertToType(data['gasLimit'], 'String');
            }
            if (data.hasOwnProperty('gasUsed')) {
                obj['gasUsed'] = ApiClient.convertToType(data['gasUsed'], 'String');
            }
            if (data.hasOwnProperty('minedInSeconds')) {
                obj['minedInSeconds'] = ApiClient.convertToType(data['minedInSeconds'], 'Number');
            }
            if (data.hasOwnProperty('sha3Uncles')) {
                obj['sha3Uncles'] = ApiClient.convertToType(data['sha3Uncles'], 'String');
            }
            if (data.hasOwnProperty('totalDifficulty')) {
                obj['totalDifficulty'] = ApiClient.convertToType(data['totalDifficulty'], 'String');
            }
        }
        return obj;
    }


}

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
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific.prototype['totalDifficulty'] = undefined;


// Implement GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin.prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work
 * @member {String} nonce
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin.prototype['size'] = undefined;
/**
 * A sub-unit of BTC equal to 0.000001 BTC, or 100 Satoshi, and is the same as microbitcoin (μBTC). Bits have two-decimal precision.
 * @member {String} bits
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin.prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin.prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin.prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin.prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoin.prototype['weight'] = undefined;
// Implement GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum.prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work
 * @member {String} nonce
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum.prototype['size'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum.prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum.prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum.prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum.prototype['minedInSeconds'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum.prototype['sha3Uncles'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereum.prototype['totalDifficulty'] = undefined;
// Implement GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic.prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work
 * @member {String} nonce
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic.prototype['size'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic.prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic.prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic.prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic.prototype['minedInSeconds'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic.prototype['sha3Uncles'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificEthereumClassic.prototype['totalDifficulty'] = undefined;
// Implement GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash.prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work
 * @member {String} nonce
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash.prototype['size'] = undefined;
/**
 * A sub-unit of BTC equal to 0.000001 BTC, or 100 Satoshi, and is the same as microbitcoin (μBTC). Bits have two-decimal precision.
 * @member {String} bits
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash.prototype['merkleRoot'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash.prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificBitcoinCash.prototype['versionHex'] = undefined;
// Implement GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin.prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work
 * @member {String} nonce
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin.prototype['size'] = undefined;
/**
 * Represents a specific sub-unit of Litecoin. Bits have two-decimal precision.
 * @member {String} bits
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin.prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin.prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin.prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin.prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificLitecoin.prototype['weight'] = undefined;
// Implement GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin.prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work
 * @member {String} nonce
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin.prototype['size'] = undefined;
/**
 * Represents a specific sub-unit of Doge. Bits have two-decimal precision.
 * @member {String} bits
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin.prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin.prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin.prototype['version'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDogecoin.prototype['weight'] = undefined;
// Implement GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash.prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work
 * @member {String} nonce
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash.prototype['size'] = undefined;
/**
 * Represents a specific sub-unit of Dash. Bits have two-decimal precision.
 * @member {String} bits
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash.prototype['merkleRoot'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash.prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
GetBlockDetailsByBlockHeightResponseItemBlockchainSpecificDash.prototype['versionHex'] = undefined;




export default GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific;

