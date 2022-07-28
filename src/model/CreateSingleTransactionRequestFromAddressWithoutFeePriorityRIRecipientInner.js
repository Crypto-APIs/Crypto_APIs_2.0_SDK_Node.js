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
 * The CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner model module.
 * @module model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner
 * @version 1.7.0
 */
class CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner {
    /**
     * Constructs a new <code>CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner</code>.
     * @alias module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner
     * @param address {String} Defines the destination address.
     * @param amount {String} Defines the amount sent to the destination address.
     * @param unit {String} Defines the unit of the recieved amount for the address.
     */
    constructor(address, amount, unit) { 
        
        CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner.initialize(this, address, amount, unit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, amount, unit) { 
        obj['address'] = address;
        obj['amount'] = amount;
        obj['unit'] = unit;
    }

    /**
     * Constructs a <code>CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner} obj Optional instance to populate.
     * @return {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner} The populated <code>CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('classicAddress')) {
                obj['classicAddress'] = ApiClient.convertToType(data['classicAddress'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the destination address.
 * @member {String} address
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner.prototype['address'] = undefined;

/**
 * Defines the amount sent to the destination address.
 * @member {String} amount
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner.prototype['amount'] = undefined;

/**
 * Represents the public address, which is a compressed and shortened form of a public key. The classic address is shown when the source address is an x-Address.
 * @member {String} classicAddress
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner.prototype['classicAddress'] = undefined;

/**
 * Defines the unit of the recieved amount for the address.
 * @member {String} unit
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner.prototype['unit'] = undefined;






export default CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner;
