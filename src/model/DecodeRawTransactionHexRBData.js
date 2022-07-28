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
import DecodeRawTransactionHexRBDataItem from './DecodeRawTransactionHexRBDataItem';

/**
 * The DecodeRawTransactionHexRBData model module.
 * @module model/DecodeRawTransactionHexRBData
 * @version 1.7.0
 */
class DecodeRawTransactionHexRBData {
    /**
     * Constructs a new <code>DecodeRawTransactionHexRBData</code>.
     * @alias module:model/DecodeRawTransactionHexRBData
     * @param item {module:model/DecodeRawTransactionHexRBDataItem} 
     */
    constructor(item) { 
        
        DecodeRawTransactionHexRBData.initialize(this, item);
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
     * Constructs a <code>DecodeRawTransactionHexRBData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRBData} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRBData} The populated <code>DecodeRawTransactionHexRBData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecodeRawTransactionHexRBData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = DecodeRawTransactionHexRBDataItem.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DecodeRawTransactionHexRBDataItem} item
 */
DecodeRawTransactionHexRBData.prototype['item'] = undefined;






export default DecodeRawTransactionHexRBData;

