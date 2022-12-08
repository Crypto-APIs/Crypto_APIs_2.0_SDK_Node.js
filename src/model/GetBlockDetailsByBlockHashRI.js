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
import GetBlockDetailsByBlockHashRIBS from './GetBlockDetailsByBlockHashRIBS';

/**
 * The GetBlockDetailsByBlockHashRI model module.
 * @module model/GetBlockDetailsByBlockHashRI
 * @version 1.11.0
 */
class GetBlockDetailsByBlockHashRI {
    /**
     * Constructs a new <code>GetBlockDetailsByBlockHashRI</code>.
     * @alias module:model/GetBlockDetailsByBlockHashRI
     * @param hash {String} Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param height {Number} Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param nextBlockHash {String} Represents the hash of the next block. When this is the last block of the blockchain this value will be an empty string.
     * @param previousBlockHash {String} Represents the hash of the previous block, also known as the parent block.
     * @param timestamp {Number} Defines the exact date/time when this block was mined in Unix Timestamp.
     * @param transactionsCount {Number} Represents the total number of all transactions as part of this block.
     * @param blockchainSpecific {module:model/GetBlockDetailsByBlockHashRIBS} 
     */
    constructor(hash, height, nextBlockHash, previousBlockHash, timestamp, transactionsCount, blockchainSpecific) { 
        
        GetBlockDetailsByBlockHashRI.initialize(this, hash, height, nextBlockHash, previousBlockHash, timestamp, transactionsCount, blockchainSpecific);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, hash, height, nextBlockHash, previousBlockHash, timestamp, transactionsCount, blockchainSpecific) { 
        obj['hash'] = hash;
        obj['height'] = height;
        obj['nextBlockHash'] = nextBlockHash;
        obj['previousBlockHash'] = previousBlockHash;
        obj['timestamp'] = timestamp;
        obj['transactionsCount'] = transactionsCount;
        obj['blockchainSpecific'] = blockchainSpecific;
    }

    /**
     * Constructs a <code>GetBlockDetailsByBlockHashRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHashRI} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHashRI} The populated <code>GetBlockDetailsByBlockHashRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetBlockDetailsByBlockHashRI();

            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('nextBlockHash')) {
                obj['nextBlockHash'] = ApiClient.convertToType(data['nextBlockHash'], 'String');
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
                obj['blockchainSpecific'] = GetBlockDetailsByBlockHashRIBS.constructFromObject(data['blockchainSpecific']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetBlockDetailsByBlockHashRI</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetBlockDetailsByBlockHashRI</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GetBlockDetailsByBlockHashRI.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['hash'] && !(typeof data['hash'] === 'string' || data['hash'] instanceof String)) {
            throw new Error("Expected the field `hash` to be a primitive type in the JSON string but got " + data['hash']);
        }
        // ensure the json data is a string
        if (data['nextBlockHash'] && !(typeof data['nextBlockHash'] === 'string' || data['nextBlockHash'] instanceof String)) {
            throw new Error("Expected the field `nextBlockHash` to be a primitive type in the JSON string but got " + data['nextBlockHash']);
        }
        // ensure the json data is a string
        if (data['previousBlockHash'] && !(typeof data['previousBlockHash'] === 'string' || data['previousBlockHash'] instanceof String)) {
            throw new Error("Expected the field `previousBlockHash` to be a primitive type in the JSON string but got " + data['previousBlockHash']);
        }
        // validate the optional field `blockchainSpecific`
        if (data['blockchainSpecific']) { // data not null
          GetBlockDetailsByBlockHashRIBS.validateJSON(data['blockchainSpecific']);
        }

        return true;
    }


}

GetBlockDetailsByBlockHashRI.RequiredProperties = ["hash", "height", "nextBlockHash", "previousBlockHash", "timestamp", "transactionsCount", "blockchainSpecific"];

/**
 * Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} hash
 */
GetBlockDetailsByBlockHashRI.prototype['hash'] = undefined;

/**
 * Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
 * @member {Number} height
 */
GetBlockDetailsByBlockHashRI.prototype['height'] = undefined;

/**
 * Represents the hash of the next block. When this is the last block of the blockchain this value will be an empty string.
 * @member {String} nextBlockHash
 */
GetBlockDetailsByBlockHashRI.prototype['nextBlockHash'] = undefined;

/**
 * Represents the hash of the previous block, also known as the parent block.
 * @member {String} previousBlockHash
 */
GetBlockDetailsByBlockHashRI.prototype['previousBlockHash'] = undefined;

/**
 * Defines the exact date/time when this block was mined in Unix Timestamp.
 * @member {Number} timestamp
 */
GetBlockDetailsByBlockHashRI.prototype['timestamp'] = undefined;

/**
 * Represents the total number of all transactions as part of this block.
 * @member {Number} transactionsCount
 */
GetBlockDetailsByBlockHashRI.prototype['transactionsCount'] = undefined;

/**
 * @member {module:model/GetBlockDetailsByBlockHashRIBS} blockchainSpecific
 */
GetBlockDetailsByBlockHashRI.prototype['blockchainSpecific'] = undefined;






export default GetBlockDetailsByBlockHashRI;

