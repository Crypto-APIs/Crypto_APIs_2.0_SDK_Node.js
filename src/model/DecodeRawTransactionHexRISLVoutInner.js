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
import DecodeRawTransactionHexRISLVoutInnerScriptPubKey from './DecodeRawTransactionHexRISLVoutInnerScriptPubKey';

/**
 * The DecodeRawTransactionHexRISLVoutInner model module.
 * @module model/DecodeRawTransactionHexRISLVoutInner
 * @version 1.7.0
 */
class DecodeRawTransactionHexRISLVoutInner {
    /**
     * Constructs a new <code>DecodeRawTransactionHexRISLVoutInner</code>.
     * @alias module:model/DecodeRawTransactionHexRISLVoutInner
     * @param scriptPubKey {module:model/DecodeRawTransactionHexRISLVoutInnerScriptPubKey} 
     */
    constructor(scriptPubKey) { 
        
        DecodeRawTransactionHexRISLVoutInner.initialize(this, scriptPubKey);
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
     * Constructs a <code>DecodeRawTransactionHexRISLVoutInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISLVoutInner} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISLVoutInner} The populated <code>DecodeRawTransactionHexRISLVoutInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecodeRawTransactionHexRISLVoutInner();

            if (data.hasOwnProperty('scriptPubKey')) {
                obj['scriptPubKey'] = DecodeRawTransactionHexRISLVoutInnerScriptPubKey.constructFromObject(data['scriptPubKey']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DecodeRawTransactionHexRISLVoutInnerScriptPubKey} scriptPubKey
 */
DecodeRawTransactionHexRISLVoutInner.prototype['scriptPubKey'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
DecodeRawTransactionHexRISLVoutInner.prototype['value'] = undefined;






export default DecodeRawTransactionHexRISLVoutInner;

