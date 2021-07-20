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

/**
 * The GetTransactionDetailsByTransactionIDRIBSD2ScriptPubKey model module.
 * @module model/GetTransactionDetailsByTransactionIDRIBSD2ScriptPubKey
 * @version 1.1.0
 */
class GetTransactionDetailsByTransactionIDRIBSD2ScriptPubKey {
    /**
     * Constructs a new <code>GetTransactionDetailsByTransactionIDRIBSD2ScriptPubKey</code>.
     * Represents the script public key.
     * @alias module:model/GetTransactionDetailsByTransactionIDRIBSD2ScriptPubKey
     * @param addresses {Array.<String>} 
     * @param asm {String} Represents the assembly of the script public key of the address.
     * @param hex {String} Represents the hex of the script public key of the address.
     * @param reqSigs {Number} Represents the required signatures.
     * @param type {String} Represents the script type.
     */
    constructor(addresses, asm, hex, reqSigs, type) { 
        
        GetTransactionDetailsByTransactionIDRIBSD2ScriptPubKey.initialize(this, addresses, asm, hex, reqSigs, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, addresses, asm, hex, reqSigs, type) { 
        obj['addresses'] = addresses;
        obj['asm'] = asm;
        obj['hex'] = hex;
        obj['reqSigs'] = reqSigs;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDRIBSD2ScriptPubKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDRIBSD2ScriptPubKey} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDRIBSD2ScriptPubKey} The populated <code>GetTransactionDetailsByTransactionIDRIBSD2ScriptPubKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransactionDetailsByTransactionIDRIBSD2ScriptPubKey();

            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], ['String']);
            }
            if (data.hasOwnProperty('asm')) {
                obj['asm'] = ApiClient.convertToType(data['asm'], 'String');
            }
            if (data.hasOwnProperty('hex')) {
                obj['hex'] = ApiClient.convertToType(data['hex'], 'String');
            }
            if (data.hasOwnProperty('reqSigs')) {
                obj['reqSigs'] = ApiClient.convertToType(data['reqSigs'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} addresses
 */
GetTransactionDetailsByTransactionIDRIBSD2ScriptPubKey.prototype['addresses'] = undefined;

/**
 * Represents the assembly of the script public key of the address.
 * @member {String} asm
 */
GetTransactionDetailsByTransactionIDRIBSD2ScriptPubKey.prototype['asm'] = undefined;

/**
 * Represents the hex of the script public key of the address.
 * @member {String} hex
 */
GetTransactionDetailsByTransactionIDRIBSD2ScriptPubKey.prototype['hex'] = undefined;

/**
 * Represents the required signatures.
 * @member {Number} reqSigs
 */
GetTransactionDetailsByTransactionIDRIBSD2ScriptPubKey.prototype['reqSigs'] = undefined;

/**
 * Represents the script type.
 * @member {String} type
 */
GetTransactionDetailsByTransactionIDRIBSD2ScriptPubKey.prototype['type'] = undefined;






export default GetTransactionDetailsByTransactionIDRIBSD2ScriptPubKey;
