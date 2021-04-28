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
 * The ListTransactionsByBlockHashResponseItemRecipients model module.
 * @module model/ListTransactionsByBlockHashResponseItemRecipients
 * @version 2.0.0
 */
class ListTransactionsByBlockHashResponseItemRecipients {
    /**
     * Constructs a new <code>ListTransactionsByBlockHashResponseItemRecipients</code>.
     * @alias module:model/ListTransactionsByBlockHashResponseItemRecipients
     * @param address {String} The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
     * @param amount {String} Represents the amount received to this address.
     */
    constructor(address, amount) { 
        
        ListTransactionsByBlockHashResponseItemRecipients.initialize(this, address, amount);
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
     * Constructs a <code>ListTransactionsByBlockHashResponseItemRecipients</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHashResponseItemRecipients} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHashResponseItemRecipients} The populated <code>ListTransactionsByBlockHashResponseItemRecipients</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTransactionsByBlockHashResponseItemRecipients();

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
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} address
 */
ListTransactionsByBlockHashResponseItemRecipients.prototype['address'] = undefined;

/**
 * Represents the amount received to this address.
 * @member {String} amount
 */
ListTransactionsByBlockHashResponseItemRecipients.prototype['amount'] = undefined;






export default ListTransactionsByBlockHashResponseItemRecipients;

