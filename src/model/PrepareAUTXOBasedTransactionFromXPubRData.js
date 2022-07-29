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
import PrepareAUTXOBasedTransactionFromXPubRI from './PrepareAUTXOBasedTransactionFromXPubRI';

/**
 * The PrepareAUTXOBasedTransactionFromXPubRData model module.
 * @module model/PrepareAUTXOBasedTransactionFromXPubRData
 * @version 1.7.1
 */
class PrepareAUTXOBasedTransactionFromXPubRData {
    /**
     * Constructs a new <code>PrepareAUTXOBasedTransactionFromXPubRData</code>.
     * @alias module:model/PrepareAUTXOBasedTransactionFromXPubRData
     * @param item {module:model/PrepareAUTXOBasedTransactionFromXPubRI} 
     */
    constructor(item) { 
        
        PrepareAUTXOBasedTransactionFromXPubRData.initialize(this, item);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, item) { 
        obj['item'] = item;
    }

    /**
     * Constructs a <code>PrepareAUTXOBasedTransactionFromXPubRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAUTXOBasedTransactionFromXPubRData} obj Optional instance to populate.
     * @return {module:model/PrepareAUTXOBasedTransactionFromXPubRData} The populated <code>PrepareAUTXOBasedTransactionFromXPubRData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepareAUTXOBasedTransactionFromXPubRData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = PrepareAUTXOBasedTransactionFromXPubRI.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PrepareAUTXOBasedTransactionFromXPubRI} item
 */
PrepareAUTXOBasedTransactionFromXPubRData.prototype['item'] = undefined;






export default PrepareAUTXOBasedTransactionFromXPubRData;

