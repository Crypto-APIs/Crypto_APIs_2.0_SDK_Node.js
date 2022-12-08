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
import NewConfirmedInternalTransactionsRBData from './NewConfirmedInternalTransactionsRBData';

/**
 * The NewConfirmedInternalTransactionsRB model module.
 * @module model/NewConfirmedInternalTransactionsRB
 * @version 1.11.0
 */
class NewConfirmedInternalTransactionsRB {
    /**
     * Constructs a new <code>NewConfirmedInternalTransactionsRB</code>.
     * @alias module:model/NewConfirmedInternalTransactionsRB
     * @param data {module:model/NewConfirmedInternalTransactionsRBData} 
     */
    constructor(data) { 
        
        NewConfirmedInternalTransactionsRB.initialize(this, data);
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
     * Constructs a <code>NewConfirmedInternalTransactionsRB</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedInternalTransactionsRB} obj Optional instance to populate.
     * @return {module:model/NewConfirmedInternalTransactionsRB} The populated <code>NewConfirmedInternalTransactionsRB</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewConfirmedInternalTransactionsRB();

            if (data.hasOwnProperty('context')) {
                obj['context'] = ApiClient.convertToType(data['context'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = NewConfirmedInternalTransactionsRBData.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NewConfirmedInternalTransactionsRB</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NewConfirmedInternalTransactionsRB</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of NewConfirmedInternalTransactionsRB.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['context'] && !(typeof data['context'] === 'string' || data['context'] instanceof String)) {
            throw new Error("Expected the field `context` to be a primitive type in the JSON string but got " + data['context']);
        }
        // validate the optional field `data`
        if (data['data']) { // data not null
          NewConfirmedInternalTransactionsRBData.validateJSON(data['data']);
        }

        return true;
    }


}

NewConfirmedInternalTransactionsRB.RequiredProperties = ["data"];

/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */
NewConfirmedInternalTransactionsRB.prototype['context'] = undefined;

/**
 * @member {module:model/NewConfirmedInternalTransactionsRBData} data
 */
NewConfirmedInternalTransactionsRB.prototype['data'] = undefined;






export default NewConfirmedInternalTransactionsRB;

