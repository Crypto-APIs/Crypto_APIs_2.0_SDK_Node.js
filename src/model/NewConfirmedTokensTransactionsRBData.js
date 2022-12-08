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
import NewConfirmedTokensTransactionsRBDataItem from './NewConfirmedTokensTransactionsRBDataItem';

/**
 * The NewConfirmedTokensTransactionsRBData model module.
 * @module model/NewConfirmedTokensTransactionsRBData
 * @version 1.11.0
 */
class NewConfirmedTokensTransactionsRBData {
    /**
     * Constructs a new <code>NewConfirmedTokensTransactionsRBData</code>.
     * @alias module:model/NewConfirmedTokensTransactionsRBData
     * @param item {module:model/NewConfirmedTokensTransactionsRBDataItem} 
     */
    constructor(item) { 
        
        NewConfirmedTokensTransactionsRBData.initialize(this, item);
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
     * Constructs a <code>NewConfirmedTokensTransactionsRBData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedTokensTransactionsRBData} obj Optional instance to populate.
     * @return {module:model/NewConfirmedTokensTransactionsRBData} The populated <code>NewConfirmedTokensTransactionsRBData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewConfirmedTokensTransactionsRBData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = NewConfirmedTokensTransactionsRBDataItem.constructFromObject(data['item']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NewConfirmedTokensTransactionsRBData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NewConfirmedTokensTransactionsRBData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of NewConfirmedTokensTransactionsRBData.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `item`
        if (data['item']) { // data not null
          NewConfirmedTokensTransactionsRBDataItem.validateJSON(data['item']);
        }

        return true;
    }


}

NewConfirmedTokensTransactionsRBData.RequiredProperties = ["item"];

/**
 * @member {module:model/NewConfirmedTokensTransactionsRBDataItem} item
 */
NewConfirmedTokensTransactionsRBData.prototype['item'] = undefined;






export default NewConfirmedTokensTransactionsRBData;

