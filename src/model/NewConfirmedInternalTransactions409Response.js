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
import NewConfirmedInternalTransactionsE409 from './NewConfirmedInternalTransactionsE409';

/**
 * The NewConfirmedInternalTransactions409Response model module.
 * @module model/NewConfirmedInternalTransactions409Response
 * @version 1.12.0
 */
class NewConfirmedInternalTransactions409Response {
    /**
     * Constructs a new <code>NewConfirmedInternalTransactions409Response</code>.
     * @alias module:model/NewConfirmedInternalTransactions409Response
     * @param apiVersion {String} Specifies the version of the API that incorporates this endpoint.
     * @param requestId {String} Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
     * @param error {module:model/NewConfirmedInternalTransactionsE409} 
     */
    constructor(apiVersion, requestId, error) { 
        
        NewConfirmedInternalTransactions409Response.initialize(this, apiVersion, requestId, error);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, apiVersion, requestId, error) { 
        obj['apiVersion'] = apiVersion;
        obj['requestId'] = requestId;
        obj['error'] = error;
    }

    /**
     * Constructs a <code>NewConfirmedInternalTransactions409Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedInternalTransactions409Response} obj Optional instance to populate.
     * @return {module:model/NewConfirmedInternalTransactions409Response} The populated <code>NewConfirmedInternalTransactions409Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewConfirmedInternalTransactions409Response();

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
            if (data.hasOwnProperty('context')) {
                obj['context'] = ApiClient.convertToType(data['context'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = NewConfirmedInternalTransactionsE409.constructFromObject(data['error']);
            }
        }
        return obj;
    }


}

/**
 * Specifies the version of the API that incorporates this endpoint.
 * @member {String} apiVersion
 */
NewConfirmedInternalTransactions409Response.prototype['apiVersion'] = undefined;

/**
 * Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
 * @member {String} requestId
 */
NewConfirmedInternalTransactions409Response.prototype['requestId'] = undefined;

/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */
NewConfirmedInternalTransactions409Response.prototype['context'] = undefined;

/**
 * @member {module:model/NewConfirmedInternalTransactionsE409} error
 */
NewConfirmedInternalTransactions409Response.prototype['error'] = undefined;






export default NewConfirmedInternalTransactions409Response;

