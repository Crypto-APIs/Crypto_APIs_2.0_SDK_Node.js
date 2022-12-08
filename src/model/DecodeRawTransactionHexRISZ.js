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
import DecodeRawTransactionHexRISZVinInner from './DecodeRawTransactionHexRISZVinInner';
import DecodeRawTransactionHexRISZVoutInner from './DecodeRawTransactionHexRISZVoutInner';

/**
 * The DecodeRawTransactionHexRISZ model module.
 * @module model/DecodeRawTransactionHexRISZ
 * @version 1.11.0
 */
class DecodeRawTransactionHexRISZ {
    /**
     * Constructs a new <code>DecodeRawTransactionHexRISZ</code>.
     * Zcash
     * @alias module:model/DecodeRawTransactionHexRISZ
     * @param expiryHeight {Number} Represents a block height after which the transaction will expire.
     * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
     * @param overwintered {Boolean} \"Overwinter\" is the network upgrade for the Zcash blockchain.
     * @param saplinged {Boolean} Defines if the transaction includes sapling or not.
     * @param transactionHash {String} Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
     * @param valueBalance {String} Defines the transaction value balance.
     * @param version {Number} Represents the transaction version number.
     * @param versionGroupId {String} Represents the transaction version group ID
     * @param vin {Array.<module:model/DecodeRawTransactionHexRISZVinInner>} Represents the Inputs of the transaction
     * @param vout {Array.<module:model/DecodeRawTransactionHexRISZVoutInner>} Represents the Inputs of the transaction
     */
    constructor(expiryHeight, locktime, overwintered, saplinged, transactionHash, valueBalance, version, versionGroupId, vin, vout) { 
        
        DecodeRawTransactionHexRISZ.initialize(this, expiryHeight, locktime, overwintered, saplinged, transactionHash, valueBalance, version, versionGroupId, vin, vout);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, expiryHeight, locktime, overwintered, saplinged, transactionHash, valueBalance, version, versionGroupId, vin, vout) { 
        obj['expiryHeight'] = expiryHeight;
        obj['locktime'] = locktime;
        obj['overwintered'] = overwintered;
        obj['saplinged'] = saplinged;
        obj['transactionHash'] = transactionHash;
        obj['valueBalance'] = valueBalance;
        obj['version'] = version;
        obj['versionGroupId'] = versionGroupId;
        obj['vin'] = vin;
        obj['vout'] = vout;
    }

    /**
     * Constructs a <code>DecodeRawTransactionHexRISZ</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISZ} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISZ} The populated <code>DecodeRawTransactionHexRISZ</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecodeRawTransactionHexRISZ();

            if (data.hasOwnProperty('expiryHeight')) {
                obj['expiryHeight'] = ApiClient.convertToType(data['expiryHeight'], 'Number');
            }
            if (data.hasOwnProperty('locktime')) {
                obj['locktime'] = ApiClient.convertToType(data['locktime'], 'Number');
            }
            if (data.hasOwnProperty('overwintered')) {
                obj['overwintered'] = ApiClient.convertToType(data['overwintered'], 'Boolean');
            }
            if (data.hasOwnProperty('saplinged')) {
                obj['saplinged'] = ApiClient.convertToType(data['saplinged'], 'Boolean');
            }
            if (data.hasOwnProperty('transactionHash')) {
                obj['transactionHash'] = ApiClient.convertToType(data['transactionHash'], 'String');
            }
            if (data.hasOwnProperty('valueBalance')) {
                obj['valueBalance'] = ApiClient.convertToType(data['valueBalance'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('versionGroupId')) {
                obj['versionGroupId'] = ApiClient.convertToType(data['versionGroupId'], 'String');
            }
            if (data.hasOwnProperty('vin')) {
                obj['vin'] = ApiClient.convertToType(data['vin'], [DecodeRawTransactionHexRISZVinInner]);
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], [DecodeRawTransactionHexRISZVoutInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DecodeRawTransactionHexRISZ</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DecodeRawTransactionHexRISZ</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DecodeRawTransactionHexRISZ.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['transactionHash'] && !(typeof data['transactionHash'] === 'string' || data['transactionHash'] instanceof String)) {
            throw new Error("Expected the field `transactionHash` to be a primitive type in the JSON string but got " + data['transactionHash']);
        }
        // ensure the json data is a string
        if (data['valueBalance'] && !(typeof data['valueBalance'] === 'string' || data['valueBalance'] instanceof String)) {
            throw new Error("Expected the field `valueBalance` to be a primitive type in the JSON string but got " + data['valueBalance']);
        }
        // ensure the json data is a string
        if (data['versionGroupId'] && !(typeof data['versionGroupId'] === 'string' || data['versionGroupId'] instanceof String)) {
            throw new Error("Expected the field `versionGroupId` to be a primitive type in the JSON string but got " + data['versionGroupId']);
        }
        if (data['vin']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['vin'])) {
                throw new Error("Expected the field `vin` to be an array in the JSON data but got " + data['vin']);
            }
            // validate the optional field `vin` (array)
            for (const item of data['vin']) {
                DecodeRawTransactionHexRISZVinInner.validateJsonObject(item);
            };
        }
        if (data['vout']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['vout'])) {
                throw new Error("Expected the field `vout` to be an array in the JSON data but got " + data['vout']);
            }
            // validate the optional field `vout` (array)
            for (const item of data['vout']) {
                DecodeRawTransactionHexRISZVoutInner.validateJsonObject(item);
            };
        }

        return true;
    }


}

DecodeRawTransactionHexRISZ.RequiredProperties = ["expiryHeight", "locktime", "overwintered", "saplinged", "transactionHash", "valueBalance", "version", "versionGroupId", "vin", "vout"];

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
DecodeRawTransactionHexRISZ.prototype['expiryHeight'] = undefined;

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
DecodeRawTransactionHexRISZ.prototype['locktime'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
DecodeRawTransactionHexRISZ.prototype['overwintered'] = undefined;

/**
 * Defines if the transaction includes sapling or not.
 * @member {Boolean} saplinged
 */
DecodeRawTransactionHexRISZ.prototype['saplinged'] = undefined;

/**
 * Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
 * @member {String} transactionHash
 */
DecodeRawTransactionHexRISZ.prototype['transactionHash'] = undefined;

/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
DecodeRawTransactionHexRISZ.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version number.
 * @member {Number} version
 */
DecodeRawTransactionHexRISZ.prototype['version'] = undefined;

/**
 * Represents the transaction version group ID
 * @member {String} versionGroupId
 */
DecodeRawTransactionHexRISZ.prototype['versionGroupId'] = undefined;

/**
 * Represents the Inputs of the transaction
 * @member {Array.<module:model/DecodeRawTransactionHexRISZVinInner>} vin
 */
DecodeRawTransactionHexRISZ.prototype['vin'] = undefined;

/**
 * Represents the Inputs of the transaction
 * @member {Array.<module:model/DecodeRawTransactionHexRISZVoutInner>} vout
 */
DecodeRawTransactionHexRISZ.prototype['vout'] = undefined;






export default DecodeRawTransactionHexRISZ;

