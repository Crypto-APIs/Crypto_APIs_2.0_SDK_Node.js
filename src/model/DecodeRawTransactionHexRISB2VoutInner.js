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
import DecodeRawTransactionHexRISB2VoutInnerScriptPubKey from './DecodeRawTransactionHexRISB2VoutInnerScriptPubKey';

/**
 * The DecodeRawTransactionHexRISB2VoutInner model module.
 * @module model/DecodeRawTransactionHexRISB2VoutInner
 * @version 1.11.0
 */
class DecodeRawTransactionHexRISB2VoutInner {
    /**
     * Constructs a new <code>DecodeRawTransactionHexRISB2VoutInner</code>.
     * @alias module:model/DecodeRawTransactionHexRISB2VoutInner
     * @param scriptPubKey {module:model/DecodeRawTransactionHexRISB2VoutInnerScriptPubKey} 
     */
    constructor(scriptPubKey) { 
        
        DecodeRawTransactionHexRISB2VoutInner.initialize(this, scriptPubKey);
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
     * Constructs a <code>DecodeRawTransactionHexRISB2VoutInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISB2VoutInner} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISB2VoutInner} The populated <code>DecodeRawTransactionHexRISB2VoutInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecodeRawTransactionHexRISB2VoutInner();

            if (data.hasOwnProperty('scriptPubKey')) {
                obj['scriptPubKey'] = DecodeRawTransactionHexRISB2VoutInnerScriptPubKey.constructFromObject(data['scriptPubKey']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DecodeRawTransactionHexRISB2VoutInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DecodeRawTransactionHexRISB2VoutInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DecodeRawTransactionHexRISB2VoutInner.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `scriptPubKey`
        if (data['scriptPubKey']) { // data not null
          DecodeRawTransactionHexRISB2VoutInnerScriptPubKey.validateJSON(data['scriptPubKey']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}

DecodeRawTransactionHexRISB2VoutInner.RequiredProperties = ["scriptPubKey"];

/**
 * @member {module:model/DecodeRawTransactionHexRISB2VoutInnerScriptPubKey} scriptPubKey
 */
DecodeRawTransactionHexRISB2VoutInner.prototype['scriptPubKey'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
DecodeRawTransactionHexRISB2VoutInner.prototype['value'] = undefined;






export default DecodeRawTransactionHexRISB2VoutInner;

