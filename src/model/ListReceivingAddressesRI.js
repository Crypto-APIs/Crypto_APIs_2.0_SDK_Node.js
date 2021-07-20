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

/**
 * The ListReceivingAddressesRI model module.
 * @module model/ListReceivingAddressesRI
 * @version 1.1.0
 */
class ListReceivingAddressesRI {
    /**
     * Constructs a new <code>ListReceivingAddressesRI</code>.
     * @alias module:model/ListReceivingAddressesRI
     * @param address {String} Specifies the specific address's unique string value.
     * @param createdTimestamp {Number} Defines the specific UNIX time when the deposit address was created.
     * @param label {String} Represents a custom tag that customers can set up for their Wallets and addresses. E.g. custom label named \"Special addresses\".
     */
    constructor(address, createdTimestamp, label) { 
        
        ListReceivingAddressesRI.initialize(this, address, createdTimestamp, label);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, createdTimestamp, label) { 
        obj['address'] = address;
        obj['createdTimestamp'] = createdTimestamp;
        obj['label'] = label;
    }

    /**
     * Constructs a <code>ListReceivingAddressesRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListReceivingAddressesRI} obj Optional instance to populate.
     * @return {module:model/ListReceivingAddressesRI} The populated <code>ListReceivingAddressesRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListReceivingAddressesRI();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('createdTimestamp')) {
                obj['createdTimestamp'] = ApiClient.convertToType(data['createdTimestamp'], 'Number');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Specifies the specific address's unique string value.
 * @member {String} address
 */
ListReceivingAddressesRI.prototype['address'] = undefined;

/**
 * Defines the specific UNIX time when the deposit address was created.
 * @member {Number} createdTimestamp
 */
ListReceivingAddressesRI.prototype['createdTimestamp'] = undefined;

/**
 * Represents a custom tag that customers can set up for their Wallets and addresses. E.g. custom label named \"Special addresses\".
 * @member {String} label
 */
ListReceivingAddressesRI.prototype['label'] = undefined;






export default ListReceivingAddressesRI;
