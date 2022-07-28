/**
 * CryptoAPIs
 * Crypto APIs is a complex and innovative infrastructure layer that radically simplifies the development of any Blockchain and Crypto related applications. Organized around REST, Crypto APIs can assist both novice Bitcoin/Ethereum enthusiasts and crypto experts with the development of their blockchain applications. Crypto APIs provides unified endpoints and data, raw data, automatic tokens and coins forwardings, callback functionalities, and much more.
 *
 * The version of the OpenAPI document: 2021-03-20
 * Contact: developers@cryptoapis.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import GetLastMinedBlockRIBS from './GetLastMinedBlockRIBS';

/**
 * The GetLastMinedBlockRI model module.
 * @module model/GetLastMinedBlockRI
 * @version 1.7.0
 */
class GetLastMinedBlockRI {
    /**
     * Constructs a new <code>GetLastMinedBlockRI</code>.
     * @alias module:model/GetLastMinedBlockRI
     * @param hash {String} Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param height {Number} Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param previousBlockHash {String} Represents the hash of the previous block, also known as the parent block.
     * @param timestamp {Number} Defines the exact date/time when this block was mined in Unix Timestamp.
     * @param transactionsCount {Number} Represents the total number of all transactions as part of this block.
     * @param blockchainSpecific {module:model/GetLastMinedBlockRIBS} 
     */
    constructor(hash, height, previousBlockHash, timestamp, transactionsCount, blockchainSpecific) { 
        
        GetLastMinedBlockRI.initialize(this, hash, height, previousBlockHash, timestamp, transactionsCount, blockchainSpecific);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, hash, height, previousBlockHash, timestamp, transactionsCount, blockchainSpecific) { 
        obj['hash'] = hash;
        obj['height'] = height;
        obj['previousBlockHash'] = previousBlockHash;
        obj['timestamp'] = timestamp;
        obj['transactionsCount'] = transactionsCount;
        obj['blockchainSpecific'] = blockchainSpecific;
    }

    /**
     * Constructs a <code>GetLastMinedBlockRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLastMinedBlockRI} obj Optional instance to populate.
     * @return {module:model/GetLastMinedBlockRI} The populated <code>GetLastMinedBlockRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLastMinedBlockRI();

            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('previousBlockHash')) {
                obj['previousBlockHash'] = ApiClient.convertToType(data['previousBlockHash'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
            if (data.hasOwnProperty('transactionsCount')) {
                obj['transactionsCount'] = ApiClient.convertToType(data['transactionsCount'], 'Number');
            }
            if (data.hasOwnProperty('blockchainSpecific')) {
                obj['blockchainSpecific'] = GetLastMinedBlockRIBS.constructFromObject(data['blockchainSpecific']);
            }
        }
        return obj;
    }


}

/**
 * Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} hash
 */
GetLastMinedBlockRI.prototype['hash'] = undefined;

/**
 * Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
 * @member {Number} height
 */
GetLastMinedBlockRI.prototype['height'] = undefined;

/**
 * Represents the hash of the previous block, also known as the parent block.
 * @member {String} previousBlockHash
 */
GetLastMinedBlockRI.prototype['previousBlockHash'] = undefined;

/**
 * Defines the exact date/time when this block was mined in Unix Timestamp.
 * @member {Number} timestamp
 */
GetLastMinedBlockRI.prototype['timestamp'] = undefined;

/**
 * Represents the total number of all transactions as part of this block.
 * @member {Number} transactionsCount
 */
GetLastMinedBlockRI.prototype['transactionsCount'] = undefined;

/**
 * @member {module:model/GetLastMinedBlockRIBS} blockchainSpecific
 */
GetLastMinedBlockRI.prototype['blockchainSpecific'] = undefined;






export default GetLastMinedBlockRI;

