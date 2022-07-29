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
import NewConfirmedCoinsTransactionsAndEachConfirmationRI from './NewConfirmedCoinsTransactionsAndEachConfirmationRI';

/**
 * The NewConfirmedCoinsTransactionsAndEachConfirmationRData model module.
 * @module model/NewConfirmedCoinsTransactionsAndEachConfirmationRData
 * @version 1.7.1
 */
class NewConfirmedCoinsTransactionsAndEachConfirmationRData {
    /**
     * Constructs a new <code>NewConfirmedCoinsTransactionsAndEachConfirmationRData</code>.
     * @alias module:model/NewConfirmedCoinsTransactionsAndEachConfirmationRData
     * @param item {module:model/NewConfirmedCoinsTransactionsAndEachConfirmationRI} 
     */
    constructor(item) { 
        
        NewConfirmedCoinsTransactionsAndEachConfirmationRData.initialize(this, item);
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
     * Constructs a <code>NewConfirmedCoinsTransactionsAndEachConfirmationRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedCoinsTransactionsAndEachConfirmationRData} obj Optional instance to populate.
     * @return {module:model/NewConfirmedCoinsTransactionsAndEachConfirmationRData} The populated <code>NewConfirmedCoinsTransactionsAndEachConfirmationRData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewConfirmedCoinsTransactionsAndEachConfirmationRData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = NewConfirmedCoinsTransactionsAndEachConfirmationRI.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NewConfirmedCoinsTransactionsAndEachConfirmationRI} item
 */
NewConfirmedCoinsTransactionsAndEachConfirmationRData.prototype['item'] = undefined;






export default NewConfirmedCoinsTransactionsAndEachConfirmationRData;

