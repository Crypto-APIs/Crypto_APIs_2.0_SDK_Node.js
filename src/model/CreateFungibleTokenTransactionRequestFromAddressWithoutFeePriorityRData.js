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
import CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI from './CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI';

/**
 * The CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRData model module.
 * @module model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRData
 * @version 1.7.0
 */
class CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRData {
    /**
     * Constructs a new <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRData</code>.
     * @alias module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRData
     * @param item {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI} 
     */
    constructor(item) { 
        
        CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRData.initialize(this, item);
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
     * Constructs a <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRData} obj Optional instance to populate.
     * @return {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRData} The populated <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI} item
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRData.prototype['item'] = undefined;






export default CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRData;
