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
import AddressInternalTransactionConfirmedEachConfirmationDataItem from './AddressInternalTransactionConfirmedEachConfirmationDataItem';

/**
 * The AddressInternalTransactionConfirmedEachConfirmationData model module.
 * @module model/AddressInternalTransactionConfirmedEachConfirmationData
 * @version 1.11.0
 */
class AddressInternalTransactionConfirmedEachConfirmationData {
    /**
     * Constructs a new <code>AddressInternalTransactionConfirmedEachConfirmationData</code>.
     * Specifies all data, as attributes, included into the callback notification, which depends on the &#x60;event&#x60;.
     * @alias module:model/AddressInternalTransactionConfirmedEachConfirmationData
     * @param product {String} Represents the Crypto APIs 2.0 product which sends the callback.
     * @param event {String} Defines the specific event, for which a callback subscription is set.
     * @param item {module:model/AddressInternalTransactionConfirmedEachConfirmationDataItem} 
     */
    constructor(product, event, item) { 
        
        AddressInternalTransactionConfirmedEachConfirmationData.initialize(this, product, event, item);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, product, event, item) { 
        obj['product'] = product;
        obj['event'] = event;
        obj['item'] = item;
    }

    /**
     * Constructs a <code>AddressInternalTransactionConfirmedEachConfirmationData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressInternalTransactionConfirmedEachConfirmationData} obj Optional instance to populate.
     * @return {module:model/AddressInternalTransactionConfirmedEachConfirmationData} The populated <code>AddressInternalTransactionConfirmedEachConfirmationData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressInternalTransactionConfirmedEachConfirmationData();

            if (data.hasOwnProperty('product')) {
                obj['product'] = ApiClient.convertToType(data['product'], 'String');
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = ApiClient.convertToType(data['event'], 'String');
            }
            if (data.hasOwnProperty('item')) {
                obj['item'] = AddressInternalTransactionConfirmedEachConfirmationDataItem.constructFromObject(data['item']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AddressInternalTransactionConfirmedEachConfirmationData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddressInternalTransactionConfirmedEachConfirmationData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AddressInternalTransactionConfirmedEachConfirmationData.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['product'] && !(typeof data['product'] === 'string' || data['product'] instanceof String)) {
            throw new Error("Expected the field `product` to be a primitive type in the JSON string but got " + data['product']);
        }
        // ensure the json data is a string
        if (data['event'] && !(typeof data['event'] === 'string' || data['event'] instanceof String)) {
            throw new Error("Expected the field `event` to be a primitive type in the JSON string but got " + data['event']);
        }
        // validate the optional field `item`
        if (data['item']) { // data not null
          AddressInternalTransactionConfirmedEachConfirmationDataItem.validateJSON(data['item']);
        }

        return true;
    }


}

AddressInternalTransactionConfirmedEachConfirmationData.RequiredProperties = ["product", "event", "item"];

/**
 * Represents the Crypto APIs 2.0 product which sends the callback.
 * @member {String} product
 */
AddressInternalTransactionConfirmedEachConfirmationData.prototype['product'] = undefined;

/**
 * Defines the specific event, for which a callback subscription is set.
 * @member {String} event
 */
AddressInternalTransactionConfirmedEachConfirmationData.prototype['event'] = undefined;

/**
 * @member {module:model/AddressInternalTransactionConfirmedEachConfirmationDataItem} item
 */
AddressInternalTransactionConfirmedEachConfirmationData.prototype['item'] = undefined;






export default AddressInternalTransactionConfirmedEachConfirmationData;

