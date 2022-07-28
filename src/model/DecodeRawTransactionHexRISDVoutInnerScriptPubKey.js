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

/**
 * The DecodeRawTransactionHexRISDVoutInnerScriptPubKey model module.
 * @module model/DecodeRawTransactionHexRISDVoutInnerScriptPubKey
 * @version 1.7.0
 */
class DecodeRawTransactionHexRISDVoutInnerScriptPubKey {
    /**
     * Constructs a new <code>DecodeRawTransactionHexRISDVoutInnerScriptPubKey</code>.
     * Represents the script public key.
     * @alias module:model/DecodeRawTransactionHexRISDVoutInnerScriptPubKey
     * @param address {String} Represents the addresses which send the amount
     */
    constructor(address) { 
        
        DecodeRawTransactionHexRISDVoutInnerScriptPubKey.initialize(this, address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address) { 
        obj['address'] = address;
    }

    /**
     * Constructs a <code>DecodeRawTransactionHexRISDVoutInnerScriptPubKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISDVoutInnerScriptPubKey} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISDVoutInnerScriptPubKey} The populated <code>DecodeRawTransactionHexRISDVoutInnerScriptPubKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecodeRawTransactionHexRISDVoutInnerScriptPubKey();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('asm')) {
                obj['asm'] = ApiClient.convertToType(data['asm'], 'String');
            }
            if (data.hasOwnProperty('hex')) {
                obj['hex'] = ApiClient.convertToType(data['hex'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the addresses which send the amount
 * @member {String} address
 */
DecodeRawTransactionHexRISDVoutInnerScriptPubKey.prototype['address'] = undefined;

/**
 * Represents the assembly of the script public key of the address.
 * @member {String} asm
 */
DecodeRawTransactionHexRISDVoutInnerScriptPubKey.prototype['asm'] = undefined;

/**
 * Represents the hex of the script public key of the address.
 * @member {String} hex
 */
DecodeRawTransactionHexRISDVoutInnerScriptPubKey.prototype['hex'] = undefined;

/**
 * Represents the hex of the script public key of the address.
 * @member {String} type
 */
DecodeRawTransactionHexRISDVoutInnerScriptPubKey.prototype['type'] = undefined;






export default DecodeRawTransactionHexRISDVoutInnerScriptPubKey;

