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
import DecodeRawTransactionHexRISZScriptSig from './DecodeRawTransactionHexRISZScriptSig';

/**
 * The DecodeRawTransactionHexRISZVin model module.
 * @module model/DecodeRawTransactionHexRISZVin
 * @version 1.5.0
 */
class DecodeRawTransactionHexRISZVin {
    /**
     * Constructs a new <code>DecodeRawTransactionHexRISZVin</code>.
     * @alias module:model/DecodeRawTransactionHexRISZVin
     * @param scriptSig {module:model/DecodeRawTransactionHexRISZScriptSig} 
     */
    constructor(scriptSig) { 
        
        DecodeRawTransactionHexRISZVin.initialize(this, scriptSig);
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
     * Constructs a <code>DecodeRawTransactionHexRISZVin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISZVin} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISZVin} The populated <code>DecodeRawTransactionHexRISZVin</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecodeRawTransactionHexRISZVin();

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
                obj['scriptSig'] = DecodeRawTransactionHexRISZScriptSig.constructFromObject(data['scriptSig']);
            }
            if (data.hasOwnProperty('sequence')) {
                obj['sequence'] = ApiClient.convertToType(data['sequence'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the addresses which send/receive the amount.
 * @member {String} address
 */
DecodeRawTransactionHexRISZVin.prototype['address'] = undefined;

/**
 * Represents the transaction inputs' indentifier.
 * @member {String} inputHash
 */
DecodeRawTransactionHexRISZVin.prototype['inputHash'] = undefined;

/**
 * Defines the output index of a transaction.
 * @member {String} outputIndex
 */
DecodeRawTransactionHexRISZVin.prototype['outputIndex'] = undefined;

/**
 * @member {module:model/DecodeRawTransactionHexRISZScriptSig} scriptSig
 */
DecodeRawTransactionHexRISZVin.prototype['scriptSig'] = undefined;

/**
 * Represents the script sequence number.
 * @member {String} sequence
 */
DecodeRawTransactionHexRISZVin.prototype['sequence'] = undefined;






export default DecodeRawTransactionHexRISZVin;
