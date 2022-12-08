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
 * The GetBlockDetailsByBlockHashRIBSBC model module.
 * @module model/GetBlockDetailsByBlockHashRIBSBC
 * @version 1.11.0
 */
class GetBlockDetailsByBlockHashRIBSBC {
    /**
     * Constructs a new <code>GetBlockDetailsByBlockHashRIBSBC</code>.
     * Bitcoin Cash
     * @alias module:model/GetBlockDetailsByBlockHashRIBSBC
     * @param difficulty {String} Represents a mathematical value of how hard it is to find a valid hash for this block.
     * @param bits {String} A sub-unit of BTC equal to 0.000001 BTC, or 100 Satoshi, and is the same as microbitcoin (μBTC). Bits have two-decimal precision.
     * @param chainwork {String} Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
     * @param merkleRoot {String} Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
     * @param nonce {String} Represents a random value that can be adjusted to satisfy the Proof of Work.
     * @param size {Number} Represents a random value that can be adjusted to satisfy the Proof of Work.
     * @param version {Number} Represents the version of the specific block on the blockchain.
     * @param versionHex {String} Is the hexadecimal string representation of the block's version.
     */
    constructor(difficulty, bits, chainwork, merkleRoot, nonce, size, version, versionHex) { 
        
        GetBlockDetailsByBlockHashRIBSBC.initialize(this, difficulty, bits, chainwork, merkleRoot, nonce, size, version, versionHex);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, difficulty, bits, chainwork, merkleRoot, nonce, size, version, versionHex) { 
        obj['difficulty'] = difficulty;
        obj['bits'] = bits;
        obj['chainwork'] = chainwork;
        obj['merkleRoot'] = merkleRoot;
        obj['nonce'] = nonce;
        obj['size'] = size;
        obj['version'] = version;
        obj['versionHex'] = versionHex;
    }

    /**
     * Constructs a <code>GetBlockDetailsByBlockHashRIBSBC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHashRIBSBC} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHashRIBSBC} The populated <code>GetBlockDetailsByBlockHashRIBSBC</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetBlockDetailsByBlockHashRIBSBC();

            if (data.hasOwnProperty('difficulty')) {
                obj['difficulty'] = ApiClient.convertToType(data['difficulty'], 'String');
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
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('versionHex')) {
                obj['versionHex'] = ApiClient.convertToType(data['versionHex'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetBlockDetailsByBlockHashRIBSBC</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetBlockDetailsByBlockHashRIBSBC</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GetBlockDetailsByBlockHashRIBSBC.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['difficulty'] && !(typeof data['difficulty'] === 'string' || data['difficulty'] instanceof String)) {
            throw new Error("Expected the field `difficulty` to be a primitive type in the JSON string but got " + data['difficulty']);
        }
        // ensure the json data is a string
        if (data['bits'] && !(typeof data['bits'] === 'string' || data['bits'] instanceof String)) {
            throw new Error("Expected the field `bits` to be a primitive type in the JSON string but got " + data['bits']);
        }
        // ensure the json data is a string
        if (data['chainwork'] && !(typeof data['chainwork'] === 'string' || data['chainwork'] instanceof String)) {
            throw new Error("Expected the field `chainwork` to be a primitive type in the JSON string but got " + data['chainwork']);
        }
        // ensure the json data is a string
        if (data['merkleRoot'] && !(typeof data['merkleRoot'] === 'string' || data['merkleRoot'] instanceof String)) {
            throw new Error("Expected the field `merkleRoot` to be a primitive type in the JSON string but got " + data['merkleRoot']);
        }
        // ensure the json data is a string
        if (data['nonce'] && !(typeof data['nonce'] === 'string' || data['nonce'] instanceof String)) {
            throw new Error("Expected the field `nonce` to be a primitive type in the JSON string but got " + data['nonce']);
        }
        // ensure the json data is a string
        if (data['versionHex'] && !(typeof data['versionHex'] === 'string' || data['versionHex'] instanceof String)) {
            throw new Error("Expected the field `versionHex` to be a primitive type in the JSON string but got " + data['versionHex']);
        }

        return true;
    }


}

GetBlockDetailsByBlockHashRIBSBC.RequiredProperties = ["difficulty", "bits", "chainwork", "merkleRoot", "nonce", "size", "version", "versionHex"];

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHashRIBSBC.prototype['difficulty'] = undefined;

/**
 * A sub-unit of BTC equal to 0.000001 BTC, or 100 Satoshi, and is the same as microbitcoin (μBTC). Bits have two-decimal precision.
 * @member {String} bits
 */
GetBlockDetailsByBlockHashRIBSBC.prototype['bits'] = undefined;

/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetBlockDetailsByBlockHashRIBSBC.prototype['chainwork'] = undefined;

/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetBlockDetailsByBlockHashRIBSBC.prototype['merkleRoot'] = undefined;

/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
GetBlockDetailsByBlockHashRIBSBC.prototype['nonce'] = undefined;

/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {Number} size
 */
GetBlockDetailsByBlockHashRIBSBC.prototype['size'] = undefined;

/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
GetBlockDetailsByBlockHashRIBSBC.prototype['version'] = undefined;

/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
GetBlockDetailsByBlockHashRIBSBC.prototype['versionHex'] = undefined;






export default GetBlockDetailsByBlockHashRIBSBC;

