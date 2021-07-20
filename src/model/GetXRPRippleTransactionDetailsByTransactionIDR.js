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
import GetXRPRippleTransactionDetailsByTransactionIDRData from './GetXRPRippleTransactionDetailsByTransactionIDRData';

/**
 * The GetXRPRippleTransactionDetailsByTransactionIDR model module.
 * @module model/GetXRPRippleTransactionDetailsByTransactionIDR
 * @version 1.1.0
 */
class GetXRPRippleTransactionDetailsByTransactionIDR {
    /**
     * Constructs a new <code>GetXRPRippleTransactionDetailsByTransactionIDR</code>.
     * @alias module:model/GetXRPRippleTransactionDetailsByTransactionIDR
     * @param apiVersion {String} Specifies the version of the API that incorporates this endpoint.
     * @param requestId {String} Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
     * @param data {module:model/GetXRPRippleTransactionDetailsByTransactionIDRData} 
     */
    constructor(apiVersion, requestId, data) { 
        
        GetXRPRippleTransactionDetailsByTransactionIDR.initialize(this, apiVersion, requestId, data);
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
     * Constructs a <code>GetXRPRippleTransactionDetailsByTransactionIDR</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetXRPRippleTransactionDetailsByTransactionIDR} obj Optional instance to populate.
     * @return {module:model/GetXRPRippleTransactionDetailsByTransactionIDR} The populated <code>GetXRPRippleTransactionDetailsByTransactionIDR</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetXRPRippleTransactionDetailsByTransactionIDR();

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
                obj['data'] = GetXRPRippleTransactionDetailsByTransactionIDRData.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * Specifies the version of the API that incorporates this endpoint.
 * @member {String} apiVersion
 */
GetXRPRippleTransactionDetailsByTransactionIDR.prototype['apiVersion'] = undefined;

/**
 * Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
 * @member {String} requestId
 */
GetXRPRippleTransactionDetailsByTransactionIDR.prototype['requestId'] = undefined;

/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */
GetXRPRippleTransactionDetailsByTransactionIDR.prototype['context'] = undefined;

/**
 * @member {module:model/GetXRPRippleTransactionDetailsByTransactionIDRData} data
 */
GetXRPRippleTransactionDetailsByTransactionIDR.prototype['data'] = undefined;






export default GetXRPRippleTransactionDetailsByTransactionIDR;

