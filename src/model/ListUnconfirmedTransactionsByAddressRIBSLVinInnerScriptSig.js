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
 * The ListUnconfirmedTransactionsByAddressRIBSLVinInnerScriptSig model module.
 * @module model/ListUnconfirmedTransactionsByAddressRIBSLVinInnerScriptSig
 * @version 1.11.0
 */
class ListUnconfirmedTransactionsByAddressRIBSLVinInnerScriptSig {
    /**
     * Constructs a new <code>ListUnconfirmedTransactionsByAddressRIBSLVinInnerScriptSig</code>.
     * Specifies the required signatures.
     * @alias module:model/ListUnconfirmedTransactionsByAddressRIBSLVinInnerScriptSig
     * @param asm {String} The asm strands for assembly, which is the symbolic representation of the Bitcoin's Script language op-codes.
     * @param hex {String} String array representation of the hex
     * @param type {String} Represents the script type of the reference transaction identifier.
     */
    constructor(asm, hex, type) { 
        
        ListUnconfirmedTransactionsByAddressRIBSLVinInnerScriptSig.initialize(this, asm, hex, type);
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
     * Constructs a <code>ListUnconfirmedTransactionsByAddressRIBSLVinInnerScriptSig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnconfirmedTransactionsByAddressRIBSLVinInnerScriptSig} obj Optional instance to populate.
     * @return {module:model/ListUnconfirmedTransactionsByAddressRIBSLVinInnerScriptSig} The populated <code>ListUnconfirmedTransactionsByAddressRIBSLVinInnerScriptSig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListUnconfirmedTransactionsByAddressRIBSLVinInnerScriptSig();

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

    /**
     * Validates the JSON data with respect to <code>ListUnconfirmedTransactionsByAddressRIBSLVinInnerScriptSig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListUnconfirmedTransactionsByAddressRIBSLVinInnerScriptSig</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ListUnconfirmedTransactionsByAddressRIBSLVinInnerScriptSig.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['asm'] && !(typeof data['asm'] === 'string' || data['asm'] instanceof String)) {
            throw new Error("Expected the field `asm` to be a primitive type in the JSON string but got " + data['asm']);
        }
        // ensure the json data is a string
        if (data['hex'] && !(typeof data['hex'] === 'string' || data['hex'] instanceof String)) {
            throw new Error("Expected the field `hex` to be a primitive type in the JSON string but got " + data['hex']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

ListUnconfirmedTransactionsByAddressRIBSLVinInnerScriptSig.RequiredProperties = ["asm", "hex", "type"];

/**
 * The asm strands for assembly, which is the symbolic representation of the Bitcoin's Script language op-codes.
 * @member {String} asm
 */
ListUnconfirmedTransactionsByAddressRIBSLVinInnerScriptSig.prototype['asm'] = undefined;

/**
 * String array representation of the hex
 * @member {String} hex
 */
ListUnconfirmedTransactionsByAddressRIBSLVinInnerScriptSig.prototype['hex'] = undefined;

/**
 * Represents the script type of the reference transaction identifier.
 * @member {String} type
 */
ListUnconfirmedTransactionsByAddressRIBSLVinInnerScriptSig.prototype['type'] = undefined;






export default ListUnconfirmedTransactionsByAddressRIBSLVinInnerScriptSig;

