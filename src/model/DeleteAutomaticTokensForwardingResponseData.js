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
import DeleteAutomaticTokensForwardingResponseItem from './DeleteAutomaticTokensForwardingResponseItem';

/**
 * The DeleteAutomaticTokensForwardingResponseData model module.
 * @module model/DeleteAutomaticTokensForwardingResponseData
 * @version 2.0.0
 */
class DeleteAutomaticTokensForwardingResponseData {
    /**
     * Constructs a new <code>DeleteAutomaticTokensForwardingResponseData</code>.
     * @alias module:model/DeleteAutomaticTokensForwardingResponseData
     * @param item {module:model/DeleteAutomaticTokensForwardingResponseItem} 
     */
    constructor(item) { 
        
        DeleteAutomaticTokensForwardingResponseData.initialize(this, item);
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
     * Constructs a <code>DeleteAutomaticTokensForwardingResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteAutomaticTokensForwardingResponseData} obj Optional instance to populate.
     * @return {module:model/DeleteAutomaticTokensForwardingResponseData} The populated <code>DeleteAutomaticTokensForwardingResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteAutomaticTokensForwardingResponseData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = DeleteAutomaticTokensForwardingResponseItem.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DeleteAutomaticTokensForwardingResponseItem} item
 */
DeleteAutomaticTokensForwardingResponseData.prototype['item'] = undefined;






export default DeleteAutomaticTokensForwardingResponseData;

