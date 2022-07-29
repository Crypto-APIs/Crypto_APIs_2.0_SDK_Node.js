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
import MinedTransactionRBData from './MinedTransactionRBData';

/**
 * The MinedTransactionRB model module.
 * @module model/MinedTransactionRB
 * @version 1.7.1
 */
class MinedTransactionRB {
    /**
     * Constructs a new <code>MinedTransactionRB</code>.
     * @alias module:model/MinedTransactionRB
     * @param data {module:model/MinedTransactionRBData} 
     */
    constructor(data) { 
        
        MinedTransactionRB.initialize(this, data);
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
     * Constructs a <code>MinedTransactionRB</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MinedTransactionRB} obj Optional instance to populate.
     * @return {module:model/MinedTransactionRB} The populated <code>MinedTransactionRB</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MinedTransactionRB();

            if (data.hasOwnProperty('context')) {
                obj['context'] = ApiClient.convertToType(data['context'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = MinedTransactionRBData.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */
MinedTransactionRB.prototype['context'] = undefined;

/**
 * @member {module:model/MinedTransactionRBData} data
 */
MinedTransactionRB.prototype['data'] = undefined;






export default MinedTransactionRB;

