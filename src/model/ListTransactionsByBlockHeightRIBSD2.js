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
import ListTransactionsByBlockHashRIBSDVoutInner from './ListTransactionsByBlockHashRIBSDVoutInner';
import ListTransactionsByBlockHeightRIBSD2VinInner from './ListTransactionsByBlockHeightRIBSD2VinInner';

/**
 * The ListTransactionsByBlockHeightRIBSD2 model module.
 * @module model/ListTransactionsByBlockHeightRIBSD2
 * @version 1.7.1
 */
class ListTransactionsByBlockHeightRIBSD2 {
    /**
     * Constructs a new <code>ListTransactionsByBlockHeightRIBSD2</code>.
     * Dogecoin
     * @alias module:model/ListTransactionsByBlockHeightRIBSD2
     * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
     * @param size {Number} Represents the total size of this transaction.
     * @param version {Number} Represents transaction version number.
     * @param vin {Array.<module:model/ListTransactionsByBlockHeightRIBSD2VinInner>} Represents the transaction inputs.
     * @param vout {Array.<module:model/ListTransactionsByBlockHashRIBSDVoutInner>} Represents the transaction outputs.
     */
    constructor(locktime, size, version, vin, vout) { 
        
        ListTransactionsByBlockHeightRIBSD2.initialize(this, locktime, size, version, vin, vout);
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
     * Constructs a <code>ListTransactionsByBlockHeightRIBSD2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightRIBSD2} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightRIBSD2} The populated <code>ListTransactionsByBlockHeightRIBSD2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTransactionsByBlockHeightRIBSD2();

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
                obj['vin'] = ApiClient.convertToType(data['vin'], [ListTransactionsByBlockHeightRIBSD2VinInner]);
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], [ListTransactionsByBlockHashRIBSDVoutInner]);
            }
        }
        return obj;
    }


}

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
ListTransactionsByBlockHeightRIBSD2.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByBlockHeightRIBSD2.prototype['size'] = undefined;

/**
 * Represents transaction version number.
 * @member {Number} version
 */
ListTransactionsByBlockHeightRIBSD2.prototype['version'] = undefined;

/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSD2VinInner>} vin
 */
ListTransactionsByBlockHeightRIBSD2.prototype['vin'] = undefined;

/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSDVoutInner>} vout
 */
ListTransactionsByBlockHeightRIBSD2.prototype['vout'] = undefined;






export default ListTransactionsByBlockHeightRIBSD2;

