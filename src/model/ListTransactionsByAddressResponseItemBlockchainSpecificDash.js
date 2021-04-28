/**
 * CryptoAPIs
 * Crypto APIs 2.0 is a complex and innovative infrastructure layer that radically simplifies the development of any Blockchain and Crypto related applications. Organized around REST, Crypto APIs 2.0 can assist both novice Bitcoin/Ethereum enthusiasts and crypto experts with the development of their blockchain applications. Crypto APIs 2.0 provides unified endpoints and data, raw data, automatic tokens and coins forwardings, callback functionalities, and much more.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: developers@cryptoapis.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ListTransactionsByAddressResponseItemBlockchainSpecificDashVin from './ListTransactionsByAddressResponseItemBlockchainSpecificDashVin';
import ListTransactionsByAddressResponseItemBlockchainSpecificDashVout from './ListTransactionsByAddressResponseItemBlockchainSpecificDashVout';

/**
 * The ListTransactionsByAddressResponseItemBlockchainSpecificDash model module.
 * @module model/ListTransactionsByAddressResponseItemBlockchainSpecificDash
 * @version 2.0.0
 */
class ListTransactionsByAddressResponseItemBlockchainSpecificDash {
    /**
     * Constructs a new <code>ListTransactionsByAddressResponseItemBlockchainSpecificDash</code>.
     * Dash
     * @alias module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDash
     * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
     * @param size {Number} Represents the total size of this transaction.
     * @param version {Number} Represents the transaction's version number.
     * @param vin {Array.<module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDashVin>} Represents the transaction inputs.
     * @param vout {Array.<module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDashVout>} Represents the transaction outputs.
     */
    constructor(locktime, size, version, vin, vout) { 
        
        ListTransactionsByAddressResponseItemBlockchainSpecificDash.initialize(this, locktime, size, version, vin, vout);
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
     * Constructs a <code>ListTransactionsByAddressResponseItemBlockchainSpecificDash</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDash} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDash} The populated <code>ListTransactionsByAddressResponseItemBlockchainSpecificDash</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTransactionsByAddressResponseItemBlockchainSpecificDash();

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
                obj['vin'] = ApiClient.convertToType(data['vin'], [ListTransactionsByAddressResponseItemBlockchainSpecificDashVin]);
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], [ListTransactionsByAddressResponseItemBlockchainSpecificDashVout]);
            }
        }
        return obj;
    }


}

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListTransactionsByAddressResponseItemBlockchainSpecificDash.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByAddressResponseItemBlockchainSpecificDash.prototype['size'] = undefined;

/**
 * Represents the transaction's version number.
 * @member {Number} version
 */
ListTransactionsByAddressResponseItemBlockchainSpecificDash.prototype['version'] = undefined;

/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDashVin>} vin
 */
ListTransactionsByAddressResponseItemBlockchainSpecificDash.prototype['vin'] = undefined;

/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDashVout>} vout
 */
ListTransactionsByAddressResponseItemBlockchainSpecificDash.prototype['vout'] = undefined;






export default ListTransactionsByAddressResponseItemBlockchainSpecificDash;

