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
import NewConfirmedCoinsTransactionsRBData from './NewConfirmedCoinsTransactionsRBData';

/**
 * The NewConfirmedCoinsTransactionsRB model module.
 * @module model/NewConfirmedCoinsTransactionsRB
 * @version 1.12.0
 */
class NewConfirmedCoinsTransactionsRB {
    /**
     * Constructs a new <code>NewConfirmedCoinsTransactionsRB</code>.
     * @alias module:model/NewConfirmedCoinsTransactionsRB
     * @param data {module:model/NewConfirmedCoinsTransactionsRBData} 
     */
    constructor(data) { 
        
        NewConfirmedCoinsTransactionsRB.initialize(this, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data) { 
        obj['data'] = data;
    }

    /**
     * Constructs a <code>NewConfirmedCoinsTransactionsRB</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedCoinsTransactionsRB} obj Optional instance to populate.
     * @return {module:model/NewConfirmedCoinsTransactionsRB} The populated <code>NewConfirmedCoinsTransactionsRB</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewConfirmedCoinsTransactionsRB();

            if (data.hasOwnProperty('context')) {
                obj['context'] = ApiClient.convertToType(data['context'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = NewConfirmedCoinsTransactionsRBData.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */
NewConfirmedCoinsTransactionsRB.prototype['context'] = undefined;

/**
 * @member {module:model/NewConfirmedCoinsTransactionsRBData} data
 */
NewConfirmedCoinsTransactionsRB.prototype['data'] = undefined;






export default NewConfirmedCoinsTransactionsRB;

