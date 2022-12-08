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
import ListTransactionsByBlockHeightRIBSZVinInnerScriptSig from './ListTransactionsByBlockHeightRIBSZVinInnerScriptSig';

/**
 * The ListTransactionsByBlockHeightRIBSZVinInner model module.
 * @module model/ListTransactionsByBlockHeightRIBSZVinInner
 * @version 1.11.0
 */
class ListTransactionsByBlockHeightRIBSZVinInner {
    /**
     * Constructs a new <code>ListTransactionsByBlockHeightRIBSZVinInner</code>.
     * @alias module:model/ListTransactionsByBlockHeightRIBSZVinInner
     * @param addresses {Array.<String>} 
     * @param coinbase {String} Represents the coinbase hex.
     * @param scriptSig {module:model/ListTransactionsByBlockHeightRIBSZVinInnerScriptSig} 
     * @param sequence {Number} Represents the script sequence number.
     * @param txid {String} Represents the reference transaction identifier.
     * @param txinwitness {Array.<String>} 
     * @param value {String} Defines the specific amount.
     * @param vout {Number} It refers to the index of the output address of this transaction. The index starts from 0.
     */
    constructor(addresses, coinbase, scriptSig, sequence, txid, txinwitness, value, vout) { 
        
        ListTransactionsByBlockHeightRIBSZVinInner.initialize(this, addresses, coinbase, scriptSig, sequence, txid, txinwitness, value, vout);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, addresses, coinbase, scriptSig, sequence, txid, txinwitness, value, vout) { 
        obj['addresses'] = addresses;
        obj['coinbase'] = coinbase;
        obj['scriptSig'] = scriptSig;
        obj['sequence'] = sequence;
        obj['txid'] = txid;
        obj['txinwitness'] = txinwitness;
        obj['value'] = value;
        obj['vout'] = vout;
    }

    /**
     * Constructs a <code>ListTransactionsByBlockHeightRIBSZVinInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightRIBSZVinInner} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightRIBSZVinInner} The populated <code>ListTransactionsByBlockHeightRIBSZVinInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTransactionsByBlockHeightRIBSZVinInner();

            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], ['String']);
            }
            if (data.hasOwnProperty('coinbase')) {
                obj['coinbase'] = ApiClient.convertToType(data['coinbase'], 'String');
            }
            if (data.hasOwnProperty('scriptSig')) {
                obj['scriptSig'] = ListTransactionsByBlockHeightRIBSZVinInnerScriptSig.constructFromObject(data['scriptSig']);
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
     * Validates the JSON data with respect to <code>ListTransactionsByBlockHeightRIBSZVinInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListTransactionsByBlockHeightRIBSZVinInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ListTransactionsByBlockHeightRIBSZVinInner.RequiredProperties) {
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
          ListTransactionsByBlockHeightRIBSZVinInnerScriptSig.validateJSON(data['scriptSig']);
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

ListTransactionsByBlockHeightRIBSZVinInner.RequiredProperties = ["addresses", "coinbase", "scriptSig", "sequence", "txid", "txinwitness", "value", "vout"];

/**
 * @member {Array.<String>} addresses
 */
ListTransactionsByBlockHeightRIBSZVinInner.prototype['addresses'] = undefined;

/**
 * Represents the coinbase hex.
 * @member {String} coinbase
 */
ListTransactionsByBlockHeightRIBSZVinInner.prototype['coinbase'] = undefined;

/**
 * @member {module:model/ListTransactionsByBlockHeightRIBSZVinInnerScriptSig} scriptSig
 */
ListTransactionsByBlockHeightRIBSZVinInner.prototype['scriptSig'] = undefined;

/**
 * Represents the script sequence number.
 * @member {Number} sequence
 */
ListTransactionsByBlockHeightRIBSZVinInner.prototype['sequence'] = undefined;

/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */
ListTransactionsByBlockHeightRIBSZVinInner.prototype['txid'] = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
ListTransactionsByBlockHeightRIBSZVinInner.prototype['txinwitness'] = undefined;

/**
 * Defines the specific amount.
 * @member {String} value
 */
ListTransactionsByBlockHeightRIBSZVinInner.prototype['value'] = undefined;

/**
 * It refers to the index of the output address of this transaction. The index starts from 0.
 * @member {Number} vout
 */
ListTransactionsByBlockHeightRIBSZVinInner.prototype['vout'] = undefined;






export default ListTransactionsByBlockHeightRIBSZVinInner;

