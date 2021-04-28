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
import GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin from './GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin';
import GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash from './GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash';
import GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash from './GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash';
import GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin from './GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin';
import GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum from './GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum';
import GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic from './GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic';
import GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin from './GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin';

/**
 * The GetBlockDetailsByBlockHashResponseItemBlockchainSpecific model module.
 * @module model/GetBlockDetailsByBlockHashResponseItemBlockchainSpecific
 * @version 2.0.0
 */
class GetBlockDetailsByBlockHashResponseItemBlockchainSpecific {
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
    constructor(difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, uncles, merkleroot) { 
        GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin.initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight);GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum.initialize(this, difficulty, nonce, size, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, uncles);GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic.initialize(this, difficulty, nonce, size, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, uncles);GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash.initialize(this, difficulty, nonce, size, bits, chainwork, merkleroot, version, versionHex);GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin.initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight);GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin.initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, weight);GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash.initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, version, versionHex);
        GetBlockDetailsByBlockHashResponseItemBlockchainSpecific.initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, uncles, merkleroot);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, uncles, merkleroot) { 
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
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetBlockDetailsByBlockHashResponseItemBlockchainSpecific();
            GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin.constructFromObject(data, obj);
            GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum.constructFromObject(data, obj);
            GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic.constructFromObject(data, obj);
            GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash.constructFromObject(data, obj);
            GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin.constructFromObject(data, obj);
            GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin.constructFromObject(data, obj);
            GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('uncles')) {
                obj['uncles'] = ApiClient.convertToType(data['uncles'], ['String']);
            }
            if (data.hasOwnProperty('merkleroot')) {
                obj['merkleroot'] = ApiClient.convertToType(data['merkleroot'], 'String');
            }
        }
        return obj;
    }


}

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
GetBlockDetailsByBlockHashResponseItemBlockchainSpecific.prototype['merkleroot'] = undefined;


// Implement GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin.prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin.prototype['size'] = undefined;
/**
 * A sub-unit of BTC equal to 0.000001 BTC, or 100 Satoshi, and is the same as microbitcoin (μBTC). Bits have two-decimal precision.
 * @member {String} bits
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin.prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin.prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin.prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin.prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoin.prototype['weight'] = undefined;
// Implement GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum.prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum.prototype['size'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum.prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum.prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum.prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum.prototype['minedInSeconds'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum.prototype['sha3Uncles'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum.prototype['totalDifficulty'] = undefined;
/**
 * @member {Array.<String>} uncles
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereum.prototype['uncles'] = undefined;
// Implement GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic.prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic.prototype['size'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic.prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic.prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic.prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic.prototype['minedInSeconds'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic.prototype['sha3Uncles'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic.prototype['totalDifficulty'] = undefined;
/**
 * @member {Array.<String>} uncles
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificEthereumClassic.prototype['uncles'] = undefined;
// Implement GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash.prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash.prototype['size'] = undefined;
/**
 * A sub-unit of BTC equal to 0.000001 BTC, or 100 Satoshi, and is the same as microbitcoin (μBTC). Bits have two-decimal precision.
 * @member {String} bits
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleroot
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash.prototype['merkleroot'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash.prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificBitcoinCash.prototype['versionHex'] = undefined;
// Implement GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin.prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin.prototype['size'] = undefined;
/**
 * Represents a specific sub-unit of Litecoin. Bits have two-decimal precision.
 * @member {String} bits
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin.prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin.prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin.prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin.prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificLitecoin.prototype['weight'] = undefined;
// Implement GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin.prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin.prototype['size'] = undefined;
/**
 * Represents a specific sub-unit of Doge. Bits have two-decimal precision.
 * @member {String} bits
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin.prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin.prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin.prototype['version'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDogecoin.prototype['weight'] = undefined;
// Implement GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash.prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash.prototype['size'] = undefined;
/**
 * Represents a specific sub-unit of Dash. Bits have two-decimal precision.
 * @member {String} bits
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash.prototype['merkleRoot'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash.prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
GetBlockDetailsByBlockHashResponseItemBlockchainSpecificDash.prototype['versionHex'] = undefined;




export default GetBlockDetailsByBlockHashResponseItemBlockchainSpecific;

