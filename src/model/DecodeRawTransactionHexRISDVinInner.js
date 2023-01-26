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
import DecodeRawTransactionHexRISDVinInnerScriptSig from './DecodeRawTransactionHexRISDVinInnerScriptSig';

/**
 * The DecodeRawTransactionHexRISDVinInner model module.
 * @module model/DecodeRawTransactionHexRISDVinInner
 * @version 1.12.0
 */
class DecodeRawTransactionHexRISDVinInner {
    /**
     * Constructs a new <code>DecodeRawTransactionHexRISDVinInner</code>.
     * @alias module:model/DecodeRawTransactionHexRISDVinInner
     * @param scriptSig {module:model/DecodeRawTransactionHexRISDVinInnerScriptSig} 
     */
    constructor(scriptSig) { 
        
        DecodeRawTransactionHexRISDVinInner.initialize(this, scriptSig);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, scriptSig) { 
        obj['scriptSig'] = scriptSig;
    }

    /**
     * Constructs a <code>DecodeRawTransactionHexRISDVinInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISDVinInner} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISDVinInner} The populated <code>DecodeRawTransactionHexRISDVinInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecodeRawTransactionHexRISDVinInner();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('inputHash')) {
                obj['inputHash'] = ApiClient.convertToType(data['inputHash'], 'String');
            }
            if (data.hasOwnProperty('outputIndex')) {
                obj['outputIndex'] = ApiClient.convertToType(data['outputIndex'], 'String');
            }
            if (data.hasOwnProperty('scriptSig')) {
                obj['scriptSig'] = DecodeRawTransactionHexRISDVinInnerScriptSig.constructFromObject(data['scriptSig']);
            }
            if (data.hasOwnProperty('sequence')) {
                obj['sequence'] = ApiClient.convertToType(data['sequence'], 'String');
            }
            if (data.hasOwnProperty('txinwitness')) {
                obj['txinwitness'] = ApiClient.convertToType(data['txinwitness'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Represents the address which send/receive the amount
 * @member {String} address
 */
DecodeRawTransactionHexRISDVinInner.prototype['address'] = undefined;

/**
 * Represents the transaction inputs' indentifier.
 * @member {String} inputHash
 */
DecodeRawTransactionHexRISDVinInner.prototype['inputHash'] = undefined;

/**
 * Defines the output index of a transaction.
 * @member {String} outputIndex
 */
DecodeRawTransactionHexRISDVinInner.prototype['outputIndex'] = undefined;

/**
 * @member {module:model/DecodeRawTransactionHexRISDVinInnerScriptSig} scriptSig
 */
DecodeRawTransactionHexRISDVinInner.prototype['scriptSig'] = undefined;

/**
 * Represents the script sequence number.
 * @member {String} sequence
 */
DecodeRawTransactionHexRISDVinInner.prototype['sequence'] = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
DecodeRawTransactionHexRISDVinInner.prototype['txinwitness'] = undefined;






export default DecodeRawTransactionHexRISDVinInner;

