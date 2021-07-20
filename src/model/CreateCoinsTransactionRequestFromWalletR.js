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
import CreateCoinsTransactionRequestFromWalletRData from './CreateCoinsTransactionRequestFromWalletRData';

/**
 * The CreateCoinsTransactionRequestFromWalletR model module.
 * @module model/CreateCoinsTransactionRequestFromWalletR
 * @version 1.1.0
 */
class CreateCoinsTransactionRequestFromWalletR {
    /**
     * Constructs a new <code>CreateCoinsTransactionRequestFromWalletR</code>.
     * @alias module:model/CreateCoinsTransactionRequestFromWalletR
     * @param apiVersion {String} Specifies the version of the API that incorporates this endpoint.
     * @param requestId {String} Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
     * @param data {module:model/CreateCoinsTransactionRequestFromWalletRData} 
     */
    constructor(apiVersion, requestId, data) { 
        
        CreateCoinsTransactionRequestFromWalletR.initialize(this, apiVersion, requestId, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, apiVersion, requestId, data) { 
        obj['apiVersion'] = apiVersion;
        obj['requestId'] = requestId;
        obj['data'] = data;
    }

    /**
     * Constructs a <code>CreateCoinsTransactionRequestFromWalletR</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCoinsTransactionRequestFromWalletR} obj Optional instance to populate.
     * @return {module:model/CreateCoinsTransactionRequestFromWalletR} The populated <code>CreateCoinsTransactionRequestFromWalletR</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCoinsTransactionRequestFromWalletR();

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
            if (data.hasOwnProperty('context')) {
                obj['context'] = ApiClient.convertToType(data['context'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = CreateCoinsTransactionRequestFromWalletRData.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * Specifies the version of the API that incorporates this endpoint.
 * @member {String} apiVersion
 */
CreateCoinsTransactionRequestFromWalletR.prototype['apiVersion'] = undefined;

/**
 * Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
 * @member {String} requestId
 */
CreateCoinsTransactionRequestFromWalletR.prototype['requestId'] = undefined;

/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */
CreateCoinsTransactionRequestFromWalletR.prototype['context'] = undefined;

/**
 * @member {module:model/CreateCoinsTransactionRequestFromWalletRData} data
 */
CreateCoinsTransactionRequestFromWalletR.prototype['data'] = undefined;






export default CreateCoinsTransactionRequestFromWalletR;

