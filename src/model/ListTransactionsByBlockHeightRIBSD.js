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
import ListTransactionsByBlockHeightRIBSDVinInner from './ListTransactionsByBlockHeightRIBSDVinInner';
import ListTransactionsByBlockHeightRIBSDVoutInner from './ListTransactionsByBlockHeightRIBSDVoutInner';

/**
 * The ListTransactionsByBlockHeightRIBSD model module.
 * @module model/ListTransactionsByBlockHeightRIBSD
 * @version 1.11.0
 */
class ListTransactionsByBlockHeightRIBSD {
    /**
     * Constructs a new <code>ListTransactionsByBlockHeightRIBSD</code>.
     * Dash
     * @alias module:model/ListTransactionsByBlockHeightRIBSD
     * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
     * @param size {Number} Represents the total size of this transaction.
     * @param version {Number} Represents transaction version number.
     * @param vin {Array.<module:model/ListTransactionsByBlockHeightRIBSDVinInner>} Represents the transaction inputs.
     * @param vout {Array.<module:model/ListTransactionsByBlockHeightRIBSDVoutInner>} Represents the transaction outputs.
     */
    constructor(locktime, size, version, vin, vout) { 
        
        ListTransactionsByBlockHeightRIBSD.initialize(this, locktime, size, version, vin, vout);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, locktime, size, version, vin, vout) { 
        obj['locktime'] = locktime;
        obj['size'] = size;
        obj['version'] = version;
        obj['vin'] = vin;
        obj['vout'] = vout;
    }

    /**
     * Constructs a <code>ListTransactionsByBlockHeightRIBSD</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightRIBSD} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightRIBSD} The populated <code>ListTransactionsByBlockHeightRIBSD</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTransactionsByBlockHeightRIBSD();

            if (data.hasOwnProperty('locktime')) {
                obj['locktime'] = ApiClient.convertToType(data['locktime'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('vin')) {
                obj['vin'] = ApiClient.convertToType(data['vin'], [ListTransactionsByBlockHeightRIBSDVinInner]);
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], [ListTransactionsByBlockHeightRIBSDVoutInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListTransactionsByBlockHeightRIBSD</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListTransactionsByBlockHeightRIBSD</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ListTransactionsByBlockHeightRIBSD.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['vin']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['vin'])) {
                throw new Error("Expected the field `vin` to be an array in the JSON data but got " + data['vin']);
            }
            // validate the optional field `vin` (array)
            for (const item of data['vin']) {
                ListTransactionsByBlockHeightRIBSDVinInner.validateJsonObject(item);
            };
        }
        if (data['vout']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['vout'])) {
                throw new Error("Expected the field `vout` to be an array in the JSON data but got " + data['vout']);
            }
            // validate the optional field `vout` (array)
            for (const item of data['vout']) {
                ListTransactionsByBlockHeightRIBSDVoutInner.validateJsonObject(item);
            };
        }

        return true;
    }


}

ListTransactionsByBlockHeightRIBSD.RequiredProperties = ["locktime", "size", "version", "vin", "vout"];

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
ListTransactionsByBlockHeightRIBSD.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByBlockHeightRIBSD.prototype['size'] = undefined;

/**
 * Represents transaction version number.
 * @member {Number} version
 */
ListTransactionsByBlockHeightRIBSD.prototype['version'] = undefined;

/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSDVinInner>} vin
 */
ListTransactionsByBlockHeightRIBSD.prototype['vin'] = undefined;

/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSDVoutInner>} vout
 */
ListTransactionsByBlockHeightRIBSD.prototype['vout'] = undefined;






export default ListTransactionsByBlockHeightRIBSD;

