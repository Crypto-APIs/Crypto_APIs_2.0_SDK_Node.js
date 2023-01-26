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
import AddressInternalTransactionConfirmedDataItem from './AddressInternalTransactionConfirmedDataItem';

/**
 * The AddressInternalTransactionConfirmedData model module.
 * @module model/AddressInternalTransactionConfirmedData
 * @version 1.12.0
 */
class AddressInternalTransactionConfirmedData {
    /**
     * Constructs a new <code>AddressInternalTransactionConfirmedData</code>.
     * Specifies all data, as attributes, included into the callback notification, which depends on the &#x60;event&#x60;.
     * @alias module:model/AddressInternalTransactionConfirmedData
     * @param product {String} Represents the Crypto APIs 2.0 product which sends the callback.
     * @param event {String} Defines the specific event, for which a callback subscription is set.
     * @param item {module:model/AddressInternalTransactionConfirmedDataItem} 
     */
    constructor(product, event, item) { 
        
        AddressInternalTransactionConfirmedData.initialize(this, product, event, item);
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
     * Constructs a <code>AddressInternalTransactionConfirmedData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressInternalTransactionConfirmedData} obj Optional instance to populate.
     * @return {module:model/AddressInternalTransactionConfirmedData} The populated <code>AddressInternalTransactionConfirmedData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressInternalTransactionConfirmedData();

            if (data.hasOwnProperty('product')) {
                obj['product'] = ApiClient.convertToType(data['product'], 'String');
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = ApiClient.convertToType(data['event'], 'String');
            }
            if (data.hasOwnProperty('item')) {
                obj['item'] = AddressInternalTransactionConfirmedDataItem.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * Represents the Crypto APIs 2.0 product which sends the callback.
 * @member {String} product
 */
AddressInternalTransactionConfirmedData.prototype['product'] = undefined;

/**
 * Defines the specific event, for which a callback subscription is set.
 * @member {String} event
 */
AddressInternalTransactionConfirmedData.prototype['event'] = undefined;

/**
 * @member {module:model/AddressInternalTransactionConfirmedDataItem} item
 */
AddressInternalTransactionConfirmedData.prototype['item'] = undefined;






export default AddressInternalTransactionConfirmedData;

