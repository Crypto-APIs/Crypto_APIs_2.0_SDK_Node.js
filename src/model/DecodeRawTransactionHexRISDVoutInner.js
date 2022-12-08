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
import DecodeRawTransactionHexRISDVoutInnerScriptPubKey from './DecodeRawTransactionHexRISDVoutInnerScriptPubKey';

/**
 * The DecodeRawTransactionHexRISDVoutInner model module.
 * @module model/DecodeRawTransactionHexRISDVoutInner
 * @version 1.11.0
 */
class DecodeRawTransactionHexRISDVoutInner {
    /**
     * Constructs a new <code>DecodeRawTransactionHexRISDVoutInner</code>.
     * @alias module:model/DecodeRawTransactionHexRISDVoutInner
     * @param scriptPubKey {module:model/DecodeRawTransactionHexRISDVoutInnerScriptPubKey} 
     */
    constructor(scriptPubKey) { 
        
        DecodeRawTransactionHexRISDVoutInner.initialize(this, scriptPubKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, scriptPubKey) { 
        obj['scriptPubKey'] = scriptPubKey;
    }

    /**
     * Constructs a <code>DecodeRawTransactionHexRISDVoutInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISDVoutInner} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISDVoutInner} The populated <code>DecodeRawTransactionHexRISDVoutInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecodeRawTransactionHexRISDVoutInner();

            if (data.hasOwnProperty('scriptPubKey')) {
                obj['scriptPubKey'] = DecodeRawTransactionHexRISDVoutInnerScriptPubKey.constructFromObject(data['scriptPubKey']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DecodeRawTransactionHexRISDVoutInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DecodeRawTransactionHexRISDVoutInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DecodeRawTransactionHexRISDVoutInner.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `scriptPubKey`
        if (data['scriptPubKey']) { // data not null
          DecodeRawTransactionHexRISDVoutInnerScriptPubKey.validateJSON(data['scriptPubKey']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}

DecodeRawTransactionHexRISDVoutInner.RequiredProperties = ["scriptPubKey"];

/**
 * @member {module:model/DecodeRawTransactionHexRISDVoutInnerScriptPubKey} scriptPubKey
 */
DecodeRawTransactionHexRISDVoutInner.prototype['scriptPubKey'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
DecodeRawTransactionHexRISDVoutInner.prototype['value'] = undefined;






export default DecodeRawTransactionHexRISDVoutInner;

