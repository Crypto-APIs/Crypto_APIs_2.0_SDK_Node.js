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
 * The GetBlockDetailsByBlockHashRIBSL model module.
 * @module model/GetBlockDetailsByBlockHashRIBSL
 * @version 1.7.0
 */
class GetBlockDetailsByBlockHashRIBSL {
    /**
     * Constructs a new <code>GetBlockDetailsByBlockHashRIBSL</code>.
     * Litecoin
     * @alias module:model/GetBlockDetailsByBlockHashRIBSL
     * @param difficulty {String} Represents a mathematical value of how hard it is to find a valid hash for this block.
     * @param bits {String} Represents a specific sub-unit of Litecoin. Bits have two-decimal precision.
     * @param chainwork {String} Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
     * @param merkleRoot {String} Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
     * @param nonce {String} Represents a random value that can be adjusted to satisfy the Proof of Work.
     * @param size {Number} Represents the total size of the block in Bytes.
     * @param strippedSize {Number} Defines the numeric representation of the block size excluding the witness data.
     * @param version {Number} Represents the version of the specific block on the blockchain.
     * @param versionHex {String} Is the hexadecimal string representation of the block's version.
     * @param weight {Number} Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
     */
    constructor(difficulty, bits, chainwork, merkleRoot, nonce, size, strippedSize, version, versionHex, weight) { 
        
        GetBlockDetailsByBlockHashRIBSL.initialize(this, difficulty, bits, chainwork, merkleRoot, nonce, size, strippedSize, version, versionHex, weight);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, difficulty, bits, chainwork, merkleRoot, nonce, size, strippedSize, version, versionHex, weight) { 
        obj['difficulty'] = difficulty;
        obj['bits'] = bits;
        obj['chainwork'] = chainwork;
        obj['merkleRoot'] = merkleRoot;
        obj['nonce'] = nonce;
        obj['size'] = size;
        obj['strippedSize'] = strippedSize;
        obj['version'] = version;
        obj['versionHex'] = versionHex;
        obj['weight'] = weight;
    }

    /**
     * Constructs a <code>GetBlockDetailsByBlockHashRIBSL</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHashRIBSL} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHashRIBSL} The populated <code>GetBlockDetailsByBlockHashRIBSL</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetBlockDetailsByBlockHashRIBSL();

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
        }
        return obj;
    }


}

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHashRIBSL.prototype['difficulty'] = undefined;

/**
 * Represents a specific sub-unit of Litecoin. Bits have two-decimal precision.
 * @member {String} bits
 */
GetBlockDetailsByBlockHashRIBSL.prototype['bits'] = undefined;

/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetBlockDetailsByBlockHashRIBSL.prototype['chainwork'] = undefined;

/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetBlockDetailsByBlockHashRIBSL.prototype['merkleRoot'] = undefined;

/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
GetBlockDetailsByBlockHashRIBSL.prototype['nonce'] = undefined;

/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHashRIBSL.prototype['size'] = undefined;

/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
GetBlockDetailsByBlockHashRIBSL.prototype['strippedSize'] = undefined;

/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
GetBlockDetailsByBlockHashRIBSL.prototype['version'] = undefined;

/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
GetBlockDetailsByBlockHashRIBSL.prototype['versionHex'] = undefined;

/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
GetBlockDetailsByBlockHashRIBSL.prototype['weight'] = undefined;






export default GetBlockDetailsByBlockHashRIBSL;

