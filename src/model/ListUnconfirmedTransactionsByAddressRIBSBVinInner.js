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
import ListUnconfirmedTransactionsByAddressRIBSBVinInnerScriptSig from './ListUnconfirmedTransactionsByAddressRIBSBVinInnerScriptSig';

/**
 * The ListUnconfirmedTransactionsByAddressRIBSBVinInner model module.
 * @module model/ListUnconfirmedTransactionsByAddressRIBSBVinInner
 * @version 1.7.0
 */
class ListUnconfirmedTransactionsByAddressRIBSBVinInner {
    /**
     * Constructs a new <code>ListUnconfirmedTransactionsByAddressRIBSBVinInner</code>.
     * @alias module:model/ListUnconfirmedTransactionsByAddressRIBSBVinInner
     * @param addresses {Array.<String>} 
     * @param scriptSig {module:model/ListUnconfirmedTransactionsByAddressRIBSBVinInnerScriptSig} 
     * @param sequence {String} Represents the script sequence number.
     */
    constructor(addresses, scriptSig, sequence) { 
        
        ListUnconfirmedTransactionsByAddressRIBSBVinInner.initialize(this, addresses, scriptSig, sequence);
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
     * Constructs a <code>ListUnconfirmedTransactionsByAddressRIBSBVinInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnconfirmedTransactionsByAddressRIBSBVinInner} obj Optional instance to populate.
     * @return {module:model/ListUnconfirmedTransactionsByAddressRIBSBVinInner} The populated <code>ListUnconfirmedTransactionsByAddressRIBSBVinInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListUnconfirmedTransactionsByAddressRIBSBVinInner();

            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], ['String']);
            }
            if (data.hasOwnProperty('scriptSig')) {
                obj['scriptSig'] = ListUnconfirmedTransactionsByAddressRIBSBVinInnerScriptSig.constructFromObject(data['scriptSig']);
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
ListUnconfirmedTransactionsByAddressRIBSBVinInner.prototype['addresses'] = undefined;

/**
 * @member {module:model/ListUnconfirmedTransactionsByAddressRIBSBVinInnerScriptSig} scriptSig
 */
ListUnconfirmedTransactionsByAddressRIBSBVinInner.prototype['scriptSig'] = undefined;

/**
 * Represents the script sequence number.
 * @member {String} sequence
 */
ListUnconfirmedTransactionsByAddressRIBSBVinInner.prototype['sequence'] = undefined;

/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */
ListUnconfirmedTransactionsByAddressRIBSBVinInner.prototype['txid'] = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
ListUnconfirmedTransactionsByAddressRIBSBVinInner.prototype['txinwitness'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
ListUnconfirmedTransactionsByAddressRIBSBVinInner.prototype['value'] = undefined;

/**
 * Defines the vout of the transaction output, i.e. which output to spend.
 * @member {Number} vout
 */
ListUnconfirmedTransactionsByAddressRIBSBVinInner.prototype['vout'] = undefined;






export default ListUnconfirmedTransactionsByAddressRIBSBVinInner;
