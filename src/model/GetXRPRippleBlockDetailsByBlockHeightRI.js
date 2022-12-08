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
import GetXRPRippleBlockDetailsByBlockHeightRITotalCoins from './GetXRPRippleBlockDetailsByBlockHeightRITotalCoins';
import GetXRPRippleBlockDetailsByBlockHeightRITotalFees from './GetXRPRippleBlockDetailsByBlockHeightRITotalFees';

/**
 * The GetXRPRippleBlockDetailsByBlockHeightRI model module.
 * @module model/GetXRPRippleBlockDetailsByBlockHeightRI
 * @version 1.11.0
 */
class GetXRPRippleBlockDetailsByBlockHeightRI {
    /**
     * Constructs a new <code>GetXRPRippleBlockDetailsByBlockHeightRI</code>.
     * @alias module:model/GetXRPRippleBlockDetailsByBlockHeightRI
     * @param blockHash {String} Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param blockHeight {Number} Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param nextBlockHash {String} Represents the hash of the next block. When this is the last block of the blockchain this value will be an empty string.
     * @param previousBlockHash {String} Represents the hash of the previous block, also known as the parent block.
     * @param timestamp {Number} Defines the exact date/time when this block was mined in Unix Timestamp.
     * @param totalCoins {module:model/GetXRPRippleBlockDetailsByBlockHeightRITotalCoins} 
     * @param totalFees {module:model/GetXRPRippleBlockDetailsByBlockHeightRITotalFees} 
     * @param transactionsCount {Number} Represents the total number of all transactions as part of this block.
     */
    constructor(blockHash, blockHeight, nextBlockHash, previousBlockHash, timestamp, totalCoins, totalFees, transactionsCount) { 
        
        GetXRPRippleBlockDetailsByBlockHeightRI.initialize(this, blockHash, blockHeight, nextBlockHash, previousBlockHash, timestamp, totalCoins, totalFees, transactionsCount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockHash, blockHeight, nextBlockHash, previousBlockHash, timestamp, totalCoins, totalFees, transactionsCount) { 
        obj['blockHash'] = blockHash;
        obj['blockHeight'] = blockHeight;
        obj['nextBlockHash'] = nextBlockHash;
        obj['previousBlockHash'] = previousBlockHash;
        obj['timestamp'] = timestamp;
        obj['totalCoins'] = totalCoins;
        obj['totalFees'] = totalFees;
        obj['transactionsCount'] = transactionsCount;
    }

    /**
     * Constructs a <code>GetXRPRippleBlockDetailsByBlockHeightRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetXRPRippleBlockDetailsByBlockHeightRI} obj Optional instance to populate.
     * @return {module:model/GetXRPRippleBlockDetailsByBlockHeightRI} The populated <code>GetXRPRippleBlockDetailsByBlockHeightRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetXRPRippleBlockDetailsByBlockHeightRI();

            if (data.hasOwnProperty('blockHash')) {
                obj['blockHash'] = ApiClient.convertToType(data['blockHash'], 'String');
            }
            if (data.hasOwnProperty('blockHeight')) {
                obj['blockHeight'] = ApiClient.convertToType(data['blockHeight'], 'Number');
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
            if (data.hasOwnProperty('totalCoins')) {
                obj['totalCoins'] = GetXRPRippleBlockDetailsByBlockHeightRITotalCoins.constructFromObject(data['totalCoins']);
            }
            if (data.hasOwnProperty('totalFees')) {
                obj['totalFees'] = GetXRPRippleBlockDetailsByBlockHeightRITotalFees.constructFromObject(data['totalFees']);
            }
            if (data.hasOwnProperty('transactionsCount')) {
                obj['transactionsCount'] = ApiClient.convertToType(data['transactionsCount'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetXRPRippleBlockDetailsByBlockHeightRI</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetXRPRippleBlockDetailsByBlockHeightRI</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GetXRPRippleBlockDetailsByBlockHeightRI.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['blockHash'] && !(typeof data['blockHash'] === 'string' || data['blockHash'] instanceof String)) {
            throw new Error("Expected the field `blockHash` to be a primitive type in the JSON string but got " + data['blockHash']);
        }
        // ensure the json data is a string
        if (data['nextBlockHash'] && !(typeof data['nextBlockHash'] === 'string' || data['nextBlockHash'] instanceof String)) {
            throw new Error("Expected the field `nextBlockHash` to be a primitive type in the JSON string but got " + data['nextBlockHash']);
        }
        // ensure the json data is a string
        if (data['previousBlockHash'] && !(typeof data['previousBlockHash'] === 'string' || data['previousBlockHash'] instanceof String)) {
            throw new Error("Expected the field `previousBlockHash` to be a primitive type in the JSON string but got " + data['previousBlockHash']);
        }
        // validate the optional field `totalCoins`
        if (data['totalCoins']) { // data not null
          GetXRPRippleBlockDetailsByBlockHeightRITotalCoins.validateJSON(data['totalCoins']);
        }
        // validate the optional field `totalFees`
        if (data['totalFees']) { // data not null
          GetXRPRippleBlockDetailsByBlockHeightRITotalFees.validateJSON(data['totalFees']);
        }

        return true;
    }


}

GetXRPRippleBlockDetailsByBlockHeightRI.RequiredProperties = ["blockHash", "blockHeight", "nextBlockHash", "previousBlockHash", "timestamp", "totalCoins", "totalFees", "transactionsCount"];

/**
 * Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} blockHash
 */
GetXRPRippleBlockDetailsByBlockHeightRI.prototype['blockHash'] = undefined;

/**
 * Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
 * @member {Number} blockHeight
 */
GetXRPRippleBlockDetailsByBlockHeightRI.prototype['blockHeight'] = undefined;

/**
 * Represents the hash of the next block. When this is the last block of the blockchain this value will be an empty string.
 * @member {String} nextBlockHash
 */
GetXRPRippleBlockDetailsByBlockHeightRI.prototype['nextBlockHash'] = undefined;

/**
 * Represents the hash of the previous block, also known as the parent block.
 * @member {String} previousBlockHash
 */
GetXRPRippleBlockDetailsByBlockHeightRI.prototype['previousBlockHash'] = undefined;

/**
 * Defines the exact date/time when this block was mined in Unix Timestamp.
 * @member {Number} timestamp
 */
GetXRPRippleBlockDetailsByBlockHeightRI.prototype['timestamp'] = undefined;

/**
 * @member {module:model/GetXRPRippleBlockDetailsByBlockHeightRITotalCoins} totalCoins
 */
GetXRPRippleBlockDetailsByBlockHeightRI.prototype['totalCoins'] = undefined;

/**
 * @member {module:model/GetXRPRippleBlockDetailsByBlockHeightRITotalFees} totalFees
 */
GetXRPRippleBlockDetailsByBlockHeightRI.prototype['totalFees'] = undefined;

/**
 * Represents the total number of all transactions as part of this block.
 * @member {Number} transactionsCount
 */
GetXRPRippleBlockDetailsByBlockHeightRI.prototype['transactionsCount'] = undefined;






export default GetXRPRippleBlockDetailsByBlockHeightRI;

