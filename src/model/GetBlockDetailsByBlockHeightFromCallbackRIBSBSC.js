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

/**
 * The GetBlockDetailsByBlockHeightFromCallbackRIBSBSC model module.
 * @module model/GetBlockDetailsByBlockHeightFromCallbackRIBSBSC
 * @version 1.11.0
 */
class GetBlockDetailsByBlockHeightFromCallbackRIBSBSC {
    /**
     * Constructs a new <code>GetBlockDetailsByBlockHeightFromCallbackRIBSBSC</code>.
     * Binance Smart Chain
     * @alias module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSBSC
     * @param difficulty {String} Represents a mathematical value of how hard it is to find a valid hash for this block.
     * @param extraData {String} Represents any data that can be included by the miner in the block.
     * @param gasLimit {String} Defines the total gas limit of all transactions in the block.
     * @param gasUsed {String} Represents the total amount of gas used by all transactions in this block.
     * @param minedInSeconds {Number} Specifies the amount of time required for the block to be mined in second
     * @param nonce {String} Represents a random value that can be adjusted to satisfy the proof of work
     * @param sha3Uncles {String} Defines the combined hash of all uncles for a given parent.
     * @param size {Number} Represents the total size of the block in Bytes.
     * @param totalDifficulty {String} Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block
     */
    constructor(difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty) { 
        
        GetBlockDetailsByBlockHeightFromCallbackRIBSBSC.initialize(this, difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty) { 
        obj['difficulty'] = difficulty;
        obj['extraData'] = extraData;
        obj['gasLimit'] = gasLimit;
        obj['gasUsed'] = gasUsed;
        obj['minedInSeconds'] = minedInSeconds;
        obj['nonce'] = nonce;
        obj['sha3Uncles'] = sha3Uncles;
        obj['size'] = size;
        obj['totalDifficulty'] = totalDifficulty;
    }

    /**
     * Constructs a <code>GetBlockDetailsByBlockHeightFromCallbackRIBSBSC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSBSC} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSBSC} The populated <code>GetBlockDetailsByBlockHeightFromCallbackRIBSBSC</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetBlockDetailsByBlockHeightFromCallbackRIBSBSC();

            if (data.hasOwnProperty('difficulty')) {
                obj['difficulty'] = ApiClient.convertToType(data['difficulty'], 'String');
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
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'String');
            }
            if (data.hasOwnProperty('sha3Uncles')) {
                obj['sha3Uncles'] = ApiClient.convertToType(data['sha3Uncles'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('totalDifficulty')) {
                obj['totalDifficulty'] = ApiClient.convertToType(data['totalDifficulty'], 'String');
            }
            if (data.hasOwnProperty('uncles')) {
                obj['uncles'] = ApiClient.convertToType(data['uncles'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetBlockDetailsByBlockHeightFromCallbackRIBSBSC</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetBlockDetailsByBlockHeightFromCallbackRIBSBSC</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GetBlockDetailsByBlockHeightFromCallbackRIBSBSC.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['difficulty'] && !(typeof data['difficulty'] === 'string' || data['difficulty'] instanceof String)) {
            throw new Error("Expected the field `difficulty` to be a primitive type in the JSON string but got " + data['difficulty']);
        }
        // ensure the json data is a string
        if (data['extraData'] && !(typeof data['extraData'] === 'string' || data['extraData'] instanceof String)) {
            throw new Error("Expected the field `extraData` to be a primitive type in the JSON string but got " + data['extraData']);
        }
        // ensure the json data is a string
        if (data['gasLimit'] && !(typeof data['gasLimit'] === 'string' || data['gasLimit'] instanceof String)) {
            throw new Error("Expected the field `gasLimit` to be a primitive type in the JSON string but got " + data['gasLimit']);
        }
        // ensure the json data is a string
        if (data['gasUsed'] && !(typeof data['gasUsed'] === 'string' || data['gasUsed'] instanceof String)) {
            throw new Error("Expected the field `gasUsed` to be a primitive type in the JSON string but got " + data['gasUsed']);
        }
        // ensure the json data is a string
        if (data['nonce'] && !(typeof data['nonce'] === 'string' || data['nonce'] instanceof String)) {
            throw new Error("Expected the field `nonce` to be a primitive type in the JSON string but got " + data['nonce']);
        }
        // ensure the json data is a string
        if (data['sha3Uncles'] && !(typeof data['sha3Uncles'] === 'string' || data['sha3Uncles'] instanceof String)) {
            throw new Error("Expected the field `sha3Uncles` to be a primitive type in the JSON string but got " + data['sha3Uncles']);
        }
        // ensure the json data is a string
        if (data['totalDifficulty'] && !(typeof data['totalDifficulty'] === 'string' || data['totalDifficulty'] instanceof String)) {
            throw new Error("Expected the field `totalDifficulty` to be a primitive type in the JSON string but got " + data['totalDifficulty']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['uncles'])) {
            throw new Error("Expected the field `uncles` to be an array in the JSON data but got " + data['uncles']);
        }

        return true;
    }


}

GetBlockDetailsByBlockHeightFromCallbackRIBSBSC.RequiredProperties = ["difficulty", "extraData", "gasLimit", "gasUsed", "minedInSeconds", "nonce", "sha3Uncles", "size", "totalDifficulty"];

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHeightFromCallbackRIBSBSC.prototype['difficulty'] = undefined;

/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
GetBlockDetailsByBlockHeightFromCallbackRIBSBSC.prototype['extraData'] = undefined;

/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
GetBlockDetailsByBlockHeightFromCallbackRIBSBSC.prototype['gasLimit'] = undefined;

/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
GetBlockDetailsByBlockHeightFromCallbackRIBSBSC.prototype['gasUsed'] = undefined;

/**
 * Specifies the amount of time required for the block to be mined in second
 * @member {Number} minedInSeconds
 */
GetBlockDetailsByBlockHeightFromCallbackRIBSBSC.prototype['minedInSeconds'] = undefined;

/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
GetBlockDetailsByBlockHeightFromCallbackRIBSBSC.prototype['nonce'] = undefined;

/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
GetBlockDetailsByBlockHeightFromCallbackRIBSBSC.prototype['sha3Uncles'] = undefined;

/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHeightFromCallbackRIBSBSC.prototype['size'] = undefined;

/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block
 * @member {String} totalDifficulty
 */
GetBlockDetailsByBlockHeightFromCallbackRIBSBSC.prototype['totalDifficulty'] = undefined;

/**
 * @member {Array.<String>} uncles
 */
GetBlockDetailsByBlockHeightFromCallbackRIBSBSC.prototype['uncles'] = undefined;






export default GetBlockDetailsByBlockHeightFromCallbackRIBSBSC;

