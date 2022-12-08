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
import GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey from './GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey';

/**
 * The GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInner model module.
 * @module model/GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInner
 * @version 1.11.0
 */
class GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInner {
    /**
     * Constructs a new <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInner</code>.
     * @alias module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInner
     * @param isSpent {Boolean} Defines whether the output is spent or not.
     * @param scriptPubKey {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey} 
     * @param value {String} String representation of the amount
     */
    constructor(isSpent, scriptPubKey, value) { 
        
        GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInner.initialize(this, isSpent, scriptPubKey, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, isSpent, scriptPubKey, value) { 
        obj['isSpent'] = isSpent;
        obj['scriptPubKey'] = scriptPubKey;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInner} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInner} The populated <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInner();

            if (data.hasOwnProperty('isSpent')) {
                obj['isSpent'] = ApiClient.convertToType(data['isSpent'], 'Boolean');
            }
            if (data.hasOwnProperty('scriptPubKey')) {
                obj['scriptPubKey'] = GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey.constructFromObject(data['scriptPubKey']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInner.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `scriptPubKey`
        if (data['scriptPubKey']) { // data not null
          GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey.validateJSON(data['scriptPubKey']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}

GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInner.RequiredProperties = ["isSpent", "scriptPubKey", "value"];

/**
 * Defines whether the output is spent or not.
 * @member {Boolean} isSpent
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInner.prototype['isSpent'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInnerScriptPubKey} scriptPubKey
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInner.prototype['scriptPubKey'] = undefined;

/**
 * String representation of the amount
 * @member {String} value
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInner.prototype['value'] = undefined;






export default GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInner;

