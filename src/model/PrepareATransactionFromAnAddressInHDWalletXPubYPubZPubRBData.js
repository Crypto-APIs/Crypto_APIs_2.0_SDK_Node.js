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
import PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem from './PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem';

/**
 * The PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBData model module.
 * @module model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBData
 * @version 1.13.0
 */
class PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBData {
    /**
     * Constructs a new <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBData</code>.
     * @alias module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBData
     * @param item {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem} 
     */
    constructor(item) { 
        
        PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBData.initialize(this, item);
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
     * Constructs a <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBData} obj Optional instance to populate.
     * @return {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBData} The populated <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem} item
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBData.prototype['item'] = undefined;






export default PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBData;

