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
import ListUnconfirmedTransactionsByAddressRIBSLVinInnerScriptSig from './ListUnconfirmedTransactionsByAddressRIBSLVinInnerScriptSig';

/**
 * The ListUnconfirmedTransactionsByAddressRIBSLVinInner model module.
 * @module model/ListUnconfirmedTransactionsByAddressRIBSLVinInner
 * @version 1.12.0
 */
class ListUnconfirmedTransactionsByAddressRIBSLVinInner {
    /**
     * Constructs a new <code>ListUnconfirmedTransactionsByAddressRIBSLVinInner</code>.
     * @alias module:model/ListUnconfirmedTransactionsByAddressRIBSLVinInner
     * @param addresses {Array.<String>} 
     * @param scriptSig {module:model/ListUnconfirmedTransactionsByAddressRIBSLVinInnerScriptSig} 
     * @param sequence {String} Represents the script sequence number.
     * @param txid {String} Represents the reference transaction identifier.
     * @param txinwitness {Array.<String>} 
     * @param value {String} Represents the sent/received amount.
     */
    constructor(addresses, scriptSig, sequence, txid, txinwitness, value) { 
        
        ListUnconfirmedTransactionsByAddressRIBSLVinInner.initialize(this, addresses, scriptSig, sequence, txid, txinwitness, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, addresses, scriptSig, sequence, txid, txinwitness, value) { 
        obj['addresses'] = addresses;
        obj['scriptSig'] = scriptSig;
        obj['sequence'] = sequence;
        obj['txid'] = txid;
        obj['txinwitness'] = txinwitness;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>ListUnconfirmedTransactionsByAddressRIBSLVinInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnconfirmedTransactionsByAddressRIBSLVinInner} obj Optional instance to populate.
     * @return {module:model/ListUnconfirmedTransactionsByAddressRIBSLVinInner} The populated <code>ListUnconfirmedTransactionsByAddressRIBSLVinInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListUnconfirmedTransactionsByAddressRIBSLVinInner();

            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], ['String']);
            }
            if (data.hasOwnProperty('scriptSig')) {
                obj['scriptSig'] = ListUnconfirmedTransactionsByAddressRIBSLVinInnerScriptSig.constructFromObject(data['scriptSig']);
            }
            if (data.hasOwnProperty('sequence')) {
                obj['sequence'] = ApiClient.convertToType(data['sequence'], 'String');
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


}

/**
 * @member {Array.<String>} addresses
 */
ListUnconfirmedTransactionsByAddressRIBSLVinInner.prototype['addresses'] = undefined;

/**
 * @member {module:model/ListUnconfirmedTransactionsByAddressRIBSLVinInnerScriptSig} scriptSig
 */
ListUnconfirmedTransactionsByAddressRIBSLVinInner.prototype['scriptSig'] = undefined;

/**
 * Represents the script sequence number.
 * @member {String} sequence
 */
ListUnconfirmedTransactionsByAddressRIBSLVinInner.prototype['sequence'] = undefined;

/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */
ListUnconfirmedTransactionsByAddressRIBSLVinInner.prototype['txid'] = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
ListUnconfirmedTransactionsByAddressRIBSLVinInner.prototype['txinwitness'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
ListUnconfirmedTransactionsByAddressRIBSLVinInner.prototype['value'] = undefined;

/**
 * Defines the vout of the transaction output, i.e. which output to spend.
 * @member {Number} vout
 */
ListUnconfirmedTransactionsByAddressRIBSLVinInner.prototype['vout'] = undefined;






export default ListUnconfirmedTransactionsByAddressRIBSLVinInner;

