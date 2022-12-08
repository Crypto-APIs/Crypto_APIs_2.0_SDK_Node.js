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
import DecodeRawTransactionHexRISBVinInner from './DecodeRawTransactionHexRISBVinInner';
import DecodeRawTransactionHexRISBVoutInner from './DecodeRawTransactionHexRISBVoutInner';

/**
 * The DecodeRawTransactionHexRISB model module.
 * @module model/DecodeRawTransactionHexRISB
 * @version 1.11.0
 */
class DecodeRawTransactionHexRISB {
    /**
     * Constructs a new <code>DecodeRawTransactionHexRISB</code>.
     * Bitcoin
     * @alias module:model/DecodeRawTransactionHexRISB
     * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
     * @param transactionHash {String} Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
     * @param vSize {Number} Represents the virtual size of this transaction.
     * @param version {Number} Represents the transaction version number.
     * @param vin {Array.<module:model/DecodeRawTransactionHexRISBVinInner>} Represents the transaction inputs.
     * @param vout {Array.<module:model/DecodeRawTransactionHexRISBVoutInner>} Represents the transaction outputs.
     */
    constructor(locktime, transactionHash, vSize, version, vin, vout) { 
        
        DecodeRawTransactionHexRISB.initialize(this, locktime, transactionHash, vSize, version, vin, vout);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, locktime, transactionHash, vSize, version, vin, vout) { 
        obj['locktime'] = locktime;
        obj['transactionHash'] = transactionHash;
        obj['vSize'] = vSize;
        obj['version'] = version;
        obj['vin'] = vin;
        obj['vout'] = vout;
    }

    /**
     * Constructs a <code>DecodeRawTransactionHexRISB</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISB} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISB} The populated <code>DecodeRawTransactionHexRISB</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecodeRawTransactionHexRISB();

            if (data.hasOwnProperty('locktime')) {
                obj['locktime'] = ApiClient.convertToType(data['locktime'], 'Number');
            }
            if (data.hasOwnProperty('transactionHash')) {
                obj['transactionHash'] = ApiClient.convertToType(data['transactionHash'], 'String');
            }
            if (data.hasOwnProperty('vSize')) {
                obj['vSize'] = ApiClient.convertToType(data['vSize'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('vin')) {
                obj['vin'] = ApiClient.convertToType(data['vin'], [DecodeRawTransactionHexRISBVinInner]);
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], [DecodeRawTransactionHexRISBVoutInner]);
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DecodeRawTransactionHexRISB</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DecodeRawTransactionHexRISB</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DecodeRawTransactionHexRISB.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['transactionHash'] && !(typeof data['transactionHash'] === 'string' || data['transactionHash'] instanceof String)) {
            throw new Error("Expected the field `transactionHash` to be a primitive type in the JSON string but got " + data['transactionHash']);
        }
        if (data['vin']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['vin'])) {
                throw new Error("Expected the field `vin` to be an array in the JSON data but got " + data['vin']);
            }
            // validate the optional field `vin` (array)
            for (const item of data['vin']) {
                DecodeRawTransactionHexRISBVinInner.validateJsonObject(item);
            };
        }
        if (data['vout']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['vout'])) {
                throw new Error("Expected the field `vout` to be an array in the JSON data but got " + data['vout']);
            }
            // validate the optional field `vout` (array)
            for (const item of data['vout']) {
                DecodeRawTransactionHexRISBVoutInner.validateJsonObject(item);
            };
        }

        return true;
    }


}

DecodeRawTransactionHexRISB.RequiredProperties = ["locktime", "transactionHash", "vSize", "version", "vin", "vout"];

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
DecodeRawTransactionHexRISB.prototype['locktime'] = undefined;

/**
 * Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
 * @member {String} transactionHash
 */
DecodeRawTransactionHexRISB.prototype['transactionHash'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
DecodeRawTransactionHexRISB.prototype['vSize'] = undefined;

/**
 * Represents the transaction version number.
 * @member {Number} version
 */
DecodeRawTransactionHexRISB.prototype['version'] = undefined;

/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISBVinInner>} vin
 */
DecodeRawTransactionHexRISB.prototype['vin'] = undefined;

/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISBVoutInner>} vout
 */
DecodeRawTransactionHexRISB.prototype['vout'] = undefined;

/**
 * Represents the size of Bitcoin block, measured in weight units and including the segwit discount.
 * @member {Number} weight
 */
DecodeRawTransactionHexRISB.prototype['weight'] = undefined;






export default DecodeRawTransactionHexRISB;

