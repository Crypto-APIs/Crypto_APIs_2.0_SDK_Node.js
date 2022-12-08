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
import GetTransactionDetailsByTransactionIDRIBSD2VinInnerScriptSig from './GetTransactionDetailsByTransactionIDRIBSD2VinInnerScriptSig';

/**
 * The GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner model module.
 * @module model/GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner
 * @version 1.11.0
 */
class GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner {
    /**
     * Constructs a new <code>GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner</code>.
     * @alias module:model/GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner
     * @param addresses {Array.<String>} 
     * @param scriptSig {module:model/GetTransactionDetailsByTransactionIDRIBSD2VinInnerScriptSig} 
     * @param sequence {Number} Represents the script sequence number.
     */
    constructor(addresses, scriptSig, sequence) { 
        
        GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner.initialize(this, addresses, scriptSig, sequence);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, addresses, scriptSig, sequence) { 
        obj['addresses'] = addresses;
        obj['scriptSig'] = scriptSig;
        obj['sequence'] = sequence;
    }

    /**
     * Constructs a <code>GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner} obj Optional instance to populate.
     * @return {module:model/GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner} The populated <code>GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner();

            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], ['String']);
            }
            if (data.hasOwnProperty('coinbase')) {
                obj['coinbase'] = ApiClient.convertToType(data['coinbase'], 'String');
            }
            if (data.hasOwnProperty('scriptSig')) {
                obj['scriptSig'] = GetTransactionDetailsByTransactionIDRIBSD2VinInnerScriptSig.constructFromObject(data['scriptSig']);
            }
            if (data.hasOwnProperty('sequence')) {
                obj['sequence'] = ApiClient.convertToType(data['sequence'], 'Number');
            }
            if (data.hasOwnProperty('txid')) {
                obj['txid'] = ApiClient.convertToType(data['txid'], 'String');
            }
            if (data.hasOwnProperty('txinwitness')) {
                obj['txinwitness'] = ApiClient.convertToType(data['txinwitness'], ['String']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['addresses'])) {
            throw new Error("Expected the field `addresses` to be an array in the JSON data but got " + data['addresses']);
        }
        // ensure the json data is a string
        if (data['coinbase'] && !(typeof data['coinbase'] === 'string' || data['coinbase'] instanceof String)) {
            throw new Error("Expected the field `coinbase` to be a primitive type in the JSON string but got " + data['coinbase']);
        }
        // validate the optional field `scriptSig`
        if (data['scriptSig']) { // data not null
          GetTransactionDetailsByTransactionIDRIBSD2VinInnerScriptSig.validateJSON(data['scriptSig']);
        }
        // ensure the json data is a string
        if (data['txid'] && !(typeof data['txid'] === 'string' || data['txid'] instanceof String)) {
            throw new Error("Expected the field `txid` to be a primitive type in the JSON string but got " + data['txid']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['txinwitness'])) {
            throw new Error("Expected the field `txinwitness` to be an array in the JSON data but got " + data['txinwitness']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}

GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner.RequiredProperties = ["addresses", "scriptSig", "sequence"];

/**
 * @member {Array.<String>} addresses
 */
GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner.prototype['addresses'] = undefined;

/**
 * Represents the coinbase hex.
 * @member {String} coinbase
 */
GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner.prototype['coinbase'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSD2VinInnerScriptSig} scriptSig
 */
GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner.prototype['scriptSig'] = undefined;

/**
 * Represents the script sequence number.
 * @member {Number} sequence
 */
GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner.prototype['sequence'] = undefined;

/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */
GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner.prototype['txid'] = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner.prototype['txinwitness'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner.prototype['value'] = undefined;

/**
 * It refers to the index of the output address of this transaction. The index starts from 0.
 * @member {Number} vout
 */
GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner.prototype['vout'] = undefined;






export default GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner;

