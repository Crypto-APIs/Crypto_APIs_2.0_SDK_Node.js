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
import DeleteAutomaticTokensForwardingE400 from './DeleteAutomaticTokensForwardingE400';

/**
 * The DeleteAutomaticTokensForwarding400Response model module.
 * @module model/DeleteAutomaticTokensForwarding400Response
 * @version 1.11.0
 */
class DeleteAutomaticTokensForwarding400Response {
    /**
     * Constructs a new <code>DeleteAutomaticTokensForwarding400Response</code>.
     * @alias module:model/DeleteAutomaticTokensForwarding400Response
     * @param apiVersion {String} Specifies the version of the API that incorporates this endpoint.
     * @param requestId {String} Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
     * @param error {module:model/DeleteAutomaticTokensForwardingE400} 
     */
    constructor(apiVersion, requestId, error) { 
        
        DeleteAutomaticTokensForwarding400Response.initialize(this, apiVersion, requestId, error);
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
     * Constructs a <code>DeleteAutomaticTokensForwarding400Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteAutomaticTokensForwarding400Response} obj Optional instance to populate.
     * @return {module:model/DeleteAutomaticTokensForwarding400Response} The populated <code>DeleteAutomaticTokensForwarding400Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteAutomaticTokensForwarding400Response();

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
                obj['error'] = DeleteAutomaticTokensForwardingE400.constructFromObject(data['error']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteAutomaticTokensForwarding400Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteAutomaticTokensForwarding400Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeleteAutomaticTokensForwarding400Response.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['apiVersion'] && !(typeof data['apiVersion'] === 'string' || data['apiVersion'] instanceof String)) {
            throw new Error("Expected the field `apiVersion` to be a primitive type in the JSON string but got " + data['apiVersion']);
        }
        // ensure the json data is a string
        if (data['requestId'] && !(typeof data['requestId'] === 'string' || data['requestId'] instanceof String)) {
            throw new Error("Expected the field `requestId` to be a primitive type in the JSON string but got " + data['requestId']);
        }
        // ensure the json data is a string
        if (data['context'] && !(typeof data['context'] === 'string' || data['context'] instanceof String)) {
            throw new Error("Expected the field `context` to be a primitive type in the JSON string but got " + data['context']);
        }
        // validate the optional field `error`
        if (data['error']) { // data not null
          DeleteAutomaticTokensForwardingE400.validateJSON(data['error']);
        }

        return true;
    }


}

DeleteAutomaticTokensForwarding400Response.RequiredProperties = ["apiVersion", "requestId", "error"];

/**
 * Specifies the version of the API that incorporates this endpoint.
 * @member {String} apiVersion
 */
DeleteAutomaticTokensForwarding400Response.prototype['apiVersion'] = undefined;

/**
 * Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
 * @member {String} requestId
 */
DeleteAutomaticTokensForwarding400Response.prototype['requestId'] = undefined;

/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */
DeleteAutomaticTokensForwarding400Response.prototype['context'] = undefined;

/**
 * @member {module:model/DeleteAutomaticTokensForwardingE400} error
 */
DeleteAutomaticTokensForwarding400Response.prototype['error'] = undefined;






export default DeleteAutomaticTokensForwarding400Response;

