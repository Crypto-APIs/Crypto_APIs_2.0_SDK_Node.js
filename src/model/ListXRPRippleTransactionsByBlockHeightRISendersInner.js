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
 * The ListXRPRippleTransactionsByBlockHeightRISendersInner model module.
 * @module model/ListXRPRippleTransactionsByBlockHeightRISendersInner
 * @version 1.7.1
 */
class ListXRPRippleTransactionsByBlockHeightRISendersInner {
    /**
     * Constructs a new <code>ListXRPRippleTransactionsByBlockHeightRISendersInner</code>.
     * @alias module:model/ListXRPRippleTransactionsByBlockHeightRISendersInner
     * @param address {String} String array representation of the sender address
     * @param amount {String} String representation of the amount
     */
    constructor(address, amount) { 
        
        ListXRPRippleTransactionsByBlockHeightRISendersInner.initialize(this, address, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, amount) { 
        obj['address'] = address;
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>ListXRPRippleTransactionsByBlockHeightRISendersInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListXRPRippleTransactionsByBlockHeightRISendersInner} obj Optional instance to populate.
     * @return {module:model/ListXRPRippleTransactionsByBlockHeightRISendersInner} The populated <code>ListXRPRippleTransactionsByBlockHeightRISendersInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListXRPRippleTransactionsByBlockHeightRISendersInner();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
        }
        return obj;
    }


}

/**
 * String array representation of the sender address
 * @member {String} address
 */
ListXRPRippleTransactionsByBlockHeightRISendersInner.prototype['address'] = undefined;

/**
 * String representation of the amount
 * @member {String} amount
 */
ListXRPRippleTransactionsByBlockHeightRISendersInner.prototype['amount'] = undefined;






export default ListXRPRippleTransactionsByBlockHeightRISendersInner;

