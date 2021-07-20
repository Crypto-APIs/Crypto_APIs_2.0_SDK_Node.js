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
import GetInternalTransactionByTransactionHashAndOperationIdRI from './GetInternalTransactionByTransactionHashAndOperationIdRI';

/**
 * The GetInternalTransactionByTransactionHashAndOperationIdRData model module.
 * @module model/GetInternalTransactionByTransactionHashAndOperationIdRData
 * @version 1.1.0
 */
class GetInternalTransactionByTransactionHashAndOperationIdRData {
    /**
     * Constructs a new <code>GetInternalTransactionByTransactionHashAndOperationIdRData</code>.
     * @alias module:model/GetInternalTransactionByTransactionHashAndOperationIdRData
     * @param item {module:model/GetInternalTransactionByTransactionHashAndOperationIdRI} 
     */
    constructor(item) { 
        
        GetInternalTransactionByTransactionHashAndOperationIdRData.initialize(this, item);
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
     * Constructs a <code>GetInternalTransactionByTransactionHashAndOperationIdRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetInternalTransactionByTransactionHashAndOperationIdRData} obj Optional instance to populate.
     * @return {module:model/GetInternalTransactionByTransactionHashAndOperationIdRData} The populated <code>GetInternalTransactionByTransactionHashAndOperationIdRData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetInternalTransactionByTransactionHashAndOperationIdRData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = GetInternalTransactionByTransactionHashAndOperationIdRI.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetInternalTransactionByTransactionHashAndOperationIdRI} item
 */
GetInternalTransactionByTransactionHashAndOperationIdRData.prototype['item'] = undefined;






export default GetInternalTransactionByTransactionHashAndOperationIdRData;

