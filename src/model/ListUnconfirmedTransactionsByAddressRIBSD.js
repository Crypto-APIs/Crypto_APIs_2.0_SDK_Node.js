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
import GetTransactionDetailsByTransactionIDRIBSDVoutInner from './GetTransactionDetailsByTransactionIDRIBSDVoutInner';
import ListUnconfirmedTransactionsByAddressRIBSDVinInner from './ListUnconfirmedTransactionsByAddressRIBSDVinInner';

/**
 * The ListUnconfirmedTransactionsByAddressRIBSD model module.
 * @module model/ListUnconfirmedTransactionsByAddressRIBSD
 * @version 1.12.0
 */
class ListUnconfirmedTransactionsByAddressRIBSD {
    /**
     * Constructs a new <code>ListUnconfirmedTransactionsByAddressRIBSD</code>.
     * Dogecoin
     * @alias module:model/ListUnconfirmedTransactionsByAddressRIBSD
     * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
     * @param size {Number} Represents the total size of this transaction.
     * @param version {Number} Numeric representation of the transaction version
     * @param vin {Array.<module:model/ListUnconfirmedTransactionsByAddressRIBSDVinInner>} Represents the transaction inputs.
     * @param vout {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSDVoutInner>} Represents the transaction outputs.
     */
    constructor(locktime, size, version, vin, vout) { 
        
        ListUnconfirmedTransactionsByAddressRIBSD.initialize(this, locktime, size, version, vin, vout);
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
     * Constructs a <code>ListUnconfirmedTransactionsByAddressRIBSD</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnconfirmedTransactionsByAddressRIBSD} obj Optional instance to populate.
     * @return {module:model/ListUnconfirmedTransactionsByAddressRIBSD} The populated <code>ListUnconfirmedTransactionsByAddressRIBSD</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListUnconfirmedTransactionsByAddressRIBSD();

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
                obj['vin'] = ApiClient.convertToType(data['vin'], [ListUnconfirmedTransactionsByAddressRIBSDVinInner]);
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], [GetTransactionDetailsByTransactionIDRIBSDVoutInner]);
            }
        }
        return obj;
    }


}

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListUnconfirmedTransactionsByAddressRIBSD.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListUnconfirmedTransactionsByAddressRIBSD.prototype['size'] = undefined;

/**
 * Numeric representation of the transaction version
 * @member {Number} version
 */
ListUnconfirmedTransactionsByAddressRIBSD.prototype['version'] = undefined;

/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListUnconfirmedTransactionsByAddressRIBSDVinInner>} vin
 */
ListUnconfirmedTransactionsByAddressRIBSD.prototype['vin'] = undefined;

/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSDVoutInner>} vout
 */
ListUnconfirmedTransactionsByAddressRIBSD.prototype['vout'] = undefined;






export default ListUnconfirmedTransactionsByAddressRIBSD;

