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
 * The GetTransactionDetailsByTransactionIDRIBSD2VinInnerScriptSig model module.
 * @module model/GetTransactionDetailsByTransactionIDRIBSD2VinInnerScriptSig
 * @version 1.7.0
 */
class GetTransactionDetailsByTransactionIDRIBSD2VinInnerScriptSig {
    /**
     * Constructs a new <code>GetTransactionDetailsByTransactionIDRIBSD2VinInnerScriptSig</code>.
     * Specifies the required signatures.
     * @alias module:model/GetTransactionDetailsByTransactionIDRIBSD2VinInnerScriptSig
     * @param asm {String} The asm strands for assembly, which is the symbolic representation of the Bitcoin's Script language op-codes.
     * @param hex {String} Represents the hex of the public key of the address.
     * @param type {String} Represents the script type of the reference transaction identifier.
     */
    constructor(asm, hex, type) { 
        
        GetTransactionDetailsByTransactionIDRIBSD2VinInnerScriptSig.initialize(this, asm, hex, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, asm, hex, type) { 
        obj['asm'] = asm;
        obj['hex'] = hex;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDRIBSD2VinInnerScriptSig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDRIBSD2VinInnerScriptSig} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDRIBSD2VinInnerScriptSig} The populated <code>GetTransactionDetailsByTransactionIDRIBSD2VinInnerScriptSig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransactionDetailsByTransactionIDRIBSD2VinInnerScriptSig();

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
 * The asm strands for assembly, which is the symbolic representation of the Bitcoin's Script language op-codes.
 * @member {String} asm
 */
GetTransactionDetailsByTransactionIDRIBSD2VinInnerScriptSig.prototype['asm'] = undefined;

/**
 * Represents the hex of the public key of the address.
 * @member {String} hex
 */
GetTransactionDetailsByTransactionIDRIBSD2VinInnerScriptSig.prototype['hex'] = undefined;

/**
 * Represents the script type of the reference transaction identifier.
 * @member {String} type
 */
GetTransactionDetailsByTransactionIDRIBSD2VinInnerScriptSig.prototype['type'] = undefined;






export default GetTransactionDetailsByTransactionIDRIBSD2VinInnerScriptSig;

