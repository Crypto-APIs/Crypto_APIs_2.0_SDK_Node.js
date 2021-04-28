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
 * The ListHDWalletxPubYPubZPubTransactionsResponseItemSenders model module.
 * @module model/ListHDWalletxPubYPubZPubTransactionsResponseItemSenders
 * @version 2.0.0
 */
class ListHDWalletxPubYPubZPubTransactionsResponseItemSenders {
    /**
     * Constructs a new <code>ListHDWalletxPubYPubZPubTransactionsResponseItemSenders</code>.
     * @alias module:model/ListHDWalletxPubYPubZPubTransactionsResponseItemSenders
     * @param address {String} Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
     * @param amount {String} Represents the amount sent by this address.
     * @param isMember {Boolean} Defines whether an address is a child address derived from the HD wallet (xPub, yPub, zPub) as boolean.
     */
    constructor(address, amount, isMember) { 
        
        ListHDWalletxPubYPubZPubTransactionsResponseItemSenders.initialize(this, address, amount, isMember);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, amount, isMember) { 
        obj['address'] = address;
        obj['amount'] = amount;
        obj['isMember'] = isMember;
    }

    /**
     * Constructs a <code>ListHDWalletxPubYPubZPubTransactionsResponseItemSenders</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListHDWalletxPubYPubZPubTransactionsResponseItemSenders} obj Optional instance to populate.
     * @return {module:model/ListHDWalletxPubYPubZPubTransactionsResponseItemSenders} The populated <code>ListHDWalletxPubYPubZPubTransactionsResponseItemSenders</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListHDWalletxPubYPubZPubTransactionsResponseItemSenders();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('isMember')) {
                obj['isMember'] = ApiClient.convertToType(data['isMember'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
 * @member {String} address
 */
ListHDWalletxPubYPubZPubTransactionsResponseItemSenders.prototype['address'] = undefined;

/**
 * Represents the amount sent by this address.
 * @member {String} amount
 */
ListHDWalletxPubYPubZPubTransactionsResponseItemSenders.prototype['amount'] = undefined;

/**
 * Defines whether an address is a child address derived from the HD wallet (xPub, yPub, zPub) as boolean.
 * @member {Boolean} isMember
 */
ListHDWalletxPubYPubZPubTransactionsResponseItemSenders.prototype['isMember'] = undefined;






export default ListHDWalletxPubYPubZPubTransactionsResponseItemSenders;

