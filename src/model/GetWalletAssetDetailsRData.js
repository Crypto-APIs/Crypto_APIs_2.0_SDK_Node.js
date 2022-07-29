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
import GetWalletAssetDetailsRI from './GetWalletAssetDetailsRI';

/**
 * The GetWalletAssetDetailsRData model module.
 * @module model/GetWalletAssetDetailsRData
 * @version 1.7.1
 */
class GetWalletAssetDetailsRData {
    /**
     * Constructs a new <code>GetWalletAssetDetailsRData</code>.
     * @alias module:model/GetWalletAssetDetailsRData
     * @param item {module:model/GetWalletAssetDetailsRI} 
     */
    constructor(item) { 
        
        GetWalletAssetDetailsRData.initialize(this, item);
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
     * Constructs a <code>GetWalletAssetDetailsRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWalletAssetDetailsRData} obj Optional instance to populate.
     * @return {module:model/GetWalletAssetDetailsRData} The populated <code>GetWalletAssetDetailsRData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetWalletAssetDetailsRData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = GetWalletAssetDetailsRI.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetWalletAssetDetailsRI} item
 */
GetWalletAssetDetailsRData.prototype['item'] = undefined;






export default GetWalletAssetDetailsRData;

