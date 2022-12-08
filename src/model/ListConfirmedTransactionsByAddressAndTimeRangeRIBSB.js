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
import ListConfirmedTransactionsByAddressRIBSBVinInner from './ListConfirmedTransactionsByAddressRIBSBVinInner';
import ListConfirmedTransactionsByAddressRIBSBVoutInner from './ListConfirmedTransactionsByAddressRIBSBVoutInner';

/**
 * The ListConfirmedTransactionsByAddressAndTimeRangeRIBSB model module.
 * @module model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSB
 * @version 1.11.0
 */
class ListConfirmedTransactionsByAddressAndTimeRangeRIBSB {
    /**
     * Constructs a new <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBSB</code>.
     * Bitcoin
     * @alias module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSB
     * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
     * @param size {Number} Represents the total size of this transaction.
     * @param vSize {Number} Defines the transaction's virtual size.
     * @param version {Number} Defines the version of the transaction.
     * @param vin {Array.<module:model/ListConfirmedTransactionsByAddressRIBSBVinInner>} Represents the transaction inputs.
     * @param vout {Array.<module:model/ListConfirmedTransactionsByAddressRIBSBVoutInner>} Represents the transaction outputs.
     */
    constructor(locktime, size, vSize, version, vin, vout) { 
        
        ListConfirmedTransactionsByAddressAndTimeRangeRIBSB.initialize(this, locktime, size, vSize, version, vin, vout);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, locktime, size, vSize, version, vin, vout) { 
        obj['locktime'] = locktime;
        obj['size'] = size;
        obj['vSize'] = vSize;
        obj['version'] = version;
        obj['vin'] = vin;
        obj['vout'] = vout;
    }

    /**
     * Constructs a <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBSB</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSB} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSB} The populated <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBSB</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListConfirmedTransactionsByAddressAndTimeRangeRIBSB();

            if (data.hasOwnProperty('locktime')) {
                obj['locktime'] = ApiClient.convertToType(data['locktime'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('vSize')) {
                obj['vSize'] = ApiClient.convertToType(data['vSize'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('vin')) {
                obj['vin'] = ApiClient.convertToType(data['vin'], [ListConfirmedTransactionsByAddressRIBSBVinInner]);
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], [ListConfirmedTransactionsByAddressRIBSBVoutInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBSB</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBSB</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ListConfirmedTransactionsByAddressAndTimeRangeRIBSB.RequiredProperties) {
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
                ListConfirmedTransactionsByAddressRIBSBVinInner.validateJsonObject(item);
            };
        }
        if (data['vout']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['vout'])) {
                throw new Error("Expected the field `vout` to be an array in the JSON data but got " + data['vout']);
            }
            // validate the optional field `vout` (array)
            for (const item of data['vout']) {
                ListConfirmedTransactionsByAddressRIBSBVoutInner.validateJsonObject(item);
            };
        }

        return true;
    }


}

ListConfirmedTransactionsByAddressAndTimeRangeRIBSB.RequiredProperties = ["locktime", "size", "vSize", "version", "vin", "vout"];

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBSB.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBSB.prototype['size'] = undefined;

/**
 * Defines the transaction's virtual size.
 * @member {Number} vSize
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBSB.prototype['vSize'] = undefined;

/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBSB.prototype['version'] = undefined;

/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSBVinInner>} vin
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBSB.prototype['vin'] = undefined;

/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSBVoutInner>} vout
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBSB.prototype['vout'] = undefined;






export default ListConfirmedTransactionsByAddressAndTimeRangeRIBSB;

