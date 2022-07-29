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
 * The ListTransactionsByBlockHeightRIBSLVinInnerScriptSig model module.
 * @module model/ListTransactionsByBlockHeightRIBSLVinInnerScriptSig
 * @version 1.7.1
 */
class ListTransactionsByBlockHeightRIBSLVinInnerScriptSig {
    /**
     * Constructs a new <code>ListTransactionsByBlockHeightRIBSLVinInnerScriptSig</code>.
     * Specifies the required signatures.
     * @alias module:model/ListTransactionsByBlockHeightRIBSLVinInnerScriptSig
     * @param asm {String} The asm strands for assembly, which is the symbolic representation of the Bitcoin's Script language op-codes.
     * @param hex {String} Represents the hex of the public key of the address.
     * @param type {String} Represents the script type of the reference transaction identifier.
     */
    constructor(asm, hex, type) { 
        
        ListTransactionsByBlockHeightRIBSLVinInnerScriptSig.initialize(this, asm, hex, type);
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
     * Constructs a <code>ListTransactionsByBlockHeightRIBSLVinInnerScriptSig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightRIBSLVinInnerScriptSig} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightRIBSLVinInnerScriptSig} The populated <code>ListTransactionsByBlockHeightRIBSLVinInnerScriptSig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTransactionsByBlockHeightRIBSLVinInnerScriptSig();

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
ListTransactionsByBlockHeightRIBSLVinInnerScriptSig.prototype['asm'] = undefined;

/**
 * Represents the hex of the public key of the address.
 * @member {String} hex
 */
ListTransactionsByBlockHeightRIBSLVinInnerScriptSig.prototype['hex'] = undefined;

/**
 * Represents the script type of the reference transaction identifier.
 * @member {String} type
 */
ListTransactionsByBlockHeightRIBSLVinInnerScriptSig.prototype['type'] = undefined;






export default ListTransactionsByBlockHeightRIBSLVinInnerScriptSig;

