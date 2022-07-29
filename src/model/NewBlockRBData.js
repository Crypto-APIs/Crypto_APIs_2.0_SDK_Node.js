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
import NewBlockRBDataItem from './NewBlockRBDataItem';

/**
 * The NewBlockRBData model module.
 * @module model/NewBlockRBData
 * @version 1.7.1
 */
class NewBlockRBData {
    /**
     * Constructs a new <code>NewBlockRBData</code>.
     * @alias module:model/NewBlockRBData
     * @param item {module:model/NewBlockRBDataItem} 
     */
    constructor(item) { 
        
        NewBlockRBData.initialize(this, item);
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
     * Constructs a <code>NewBlockRBData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewBlockRBData} obj Optional instance to populate.
     * @return {module:model/NewBlockRBData} The populated <code>NewBlockRBData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewBlockRBData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = NewBlockRBDataItem.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NewBlockRBDataItem} item
 */
NewBlockRBData.prototype['item'] = undefined;






export default NewBlockRBData;

