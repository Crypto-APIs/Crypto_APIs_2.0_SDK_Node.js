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
import ConfirmedTokensTransactionForCertainAmountOrHigherData from './ConfirmedTokensTransactionForCertainAmountOrHigherData';

/**
 * The ConfirmedTokensTransactionForCertainAmountOrHigher model module.
 * @module model/ConfirmedTokensTransactionForCertainAmountOrHigher
 * @version 1.11.0
 */
class ConfirmedTokensTransactionForCertainAmountOrHigher {
    /**
     * Constructs a new <code>ConfirmedTokensTransactionForCertainAmountOrHigher</code>.
     * @alias module:model/ConfirmedTokensTransactionForCertainAmountOrHigher
     * @param apiVersion {String} Specifies the version of the API that incorporates this endpoint.
     * @param referenceId {String} Represents a unique identifier that serves as reference to the specific request which prompts a callback, e.g. Blockchain Events Subscription, Blockchain Automation, etc.
     * @param idempotencyKey {String} Specifies a unique ID generated by the system and attached to each callback. It is used by the server to recognize consecutive requests with the same data with the purpose not to perform the same operation twice.
     * @param data {module:model/ConfirmedTokensTransactionForCertainAmountOrHigherData} 
     */
    constructor(apiVersion, referenceId, idempotencyKey, data) { 
        
        ConfirmedTokensTransactionForCertainAmountOrHigher.initialize(this, apiVersion, referenceId, idempotencyKey, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, apiVersion, referenceId, idempotencyKey, data) { 
        obj['apiVersion'] = apiVersion;
        obj['referenceId'] = referenceId;
        obj['idempotencyKey'] = idempotencyKey;
        obj['data'] = data;
    }

    /**
     * Constructs a <code>ConfirmedTokensTransactionForCertainAmountOrHigher</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfirmedTokensTransactionForCertainAmountOrHigher} obj Optional instance to populate.
     * @return {module:model/ConfirmedTokensTransactionForCertainAmountOrHigher} The populated <code>ConfirmedTokensTransactionForCertainAmountOrHigher</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfirmedTokensTransactionForCertainAmountOrHigher();

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('referenceId')) {
                obj['referenceId'] = ApiClient.convertToType(data['referenceId'], 'String');
            }
            if (data.hasOwnProperty('idempotencyKey')) {
                obj['idempotencyKey'] = ApiClient.convertToType(data['idempotencyKey'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ConfirmedTokensTransactionForCertainAmountOrHigherData.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ConfirmedTokensTransactionForCertainAmountOrHigher</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConfirmedTokensTransactionForCertainAmountOrHigher</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ConfirmedTokensTransactionForCertainAmountOrHigher.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['apiVersion'] && !(typeof data['apiVersion'] === 'string' || data['apiVersion'] instanceof String)) {
            throw new Error("Expected the field `apiVersion` to be a primitive type in the JSON string but got " + data['apiVersion']);
        }
        // ensure the json data is a string
        if (data['referenceId'] && !(typeof data['referenceId'] === 'string' || data['referenceId'] instanceof String)) {
            throw new Error("Expected the field `referenceId` to be a primitive type in the JSON string but got " + data['referenceId']);
        }
        // ensure the json data is a string
        if (data['idempotencyKey'] && !(typeof data['idempotencyKey'] === 'string' || data['idempotencyKey'] instanceof String)) {
            throw new Error("Expected the field `idempotencyKey` to be a primitive type in the JSON string but got " + data['idempotencyKey']);
        }
        // validate the optional field `data`
        if (data['data']) { // data not null
          ConfirmedTokensTransactionForCertainAmountOrHigherData.validateJSON(data['data']);
        }

        return true;
    }


}

ConfirmedTokensTransactionForCertainAmountOrHigher.RequiredProperties = ["apiVersion", "referenceId", "idempotencyKey", "data"];

/**
 * Specifies the version of the API that incorporates this endpoint.
 * @member {String} apiVersion
 */
ConfirmedTokensTransactionForCertainAmountOrHigher.prototype['apiVersion'] = undefined;

/**
 * Represents a unique identifier that serves as reference to the specific request which prompts a callback, e.g. Blockchain Events Subscription, Blockchain Automation, etc.
 * @member {String} referenceId
 */
ConfirmedTokensTransactionForCertainAmountOrHigher.prototype['referenceId'] = undefined;

/**
 * Specifies a unique ID generated by the system and attached to each callback. It is used by the server to recognize consecutive requests with the same data with the purpose not to perform the same operation twice.
 * @member {String} idempotencyKey
 */
ConfirmedTokensTransactionForCertainAmountOrHigher.prototype['idempotencyKey'] = undefined;

/**
 * @member {module:model/ConfirmedTokensTransactionForCertainAmountOrHigherData} data
 */
ConfirmedTokensTransactionForCertainAmountOrHigher.prototype['data'] = undefined;






export default ConfirmedTokensTransactionForCertainAmountOrHigher;

