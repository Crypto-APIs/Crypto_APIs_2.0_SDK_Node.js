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
import ListConfirmedTransactionsByAddressRIBSDVinInnerScriptSig from './ListConfirmedTransactionsByAddressRIBSDVinInnerScriptSig';

/**
 * The ListUnconfirmedTransactionsByAddressRIBSDVinInner model module.
 * @module model/ListUnconfirmedTransactionsByAddressRIBSDVinInner
 * @version 1.7.0
 */
class ListUnconfirmedTransactionsByAddressRIBSDVinInner {
    /**
     * Constructs a new <code>ListUnconfirmedTransactionsByAddressRIBSDVinInner</code>.
     * @alias module:model/ListUnconfirmedTransactionsByAddressRIBSDVinInner
     * @param addresses {Array.<String>} 
     * @param scriptSig {module:model/ListConfirmedTransactionsByAddressRIBSDVinInnerScriptSig} 
     * @param sequence {Number} Represents the script sequence number.
     * @param txinwitness {Array.<String>} 
     * @param value {String} Represents the sent/received amount.
     */
    constructor(addresses, scriptSig, sequence, txinwitness, value) { 
        
        ListUnconfirmedTransactionsByAddressRIBSDVinInner.initialize(this, addresses, scriptSig, sequence, txinwitness, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, addresses, scriptSig, sequence, txinwitness, value) { 
        obj['addresses'] = addresses;
        obj['scriptSig'] = scriptSig;
        obj['sequence'] = sequence;
        obj['txinwitness'] = txinwitness;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>ListUnconfirmedTransactionsByAddressRIBSDVinInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnconfirmedTransactionsByAddressRIBSDVinInner} obj Optional instance to populate.
     * @return {module:model/ListUnconfirmedTransactionsByAddressRIBSDVinInner} The populated <code>ListUnconfirmedTransactionsByAddressRIBSDVinInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListUnconfirmedTransactionsByAddressRIBSDVinInner();

            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], ['String']);
            }
            if (data.hasOwnProperty('scriptSig')) {
                obj['scriptSig'] = ListConfirmedTransactionsByAddressRIBSDVinInnerScriptSig.constructFromObject(data['scriptSig']);
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


}

/**
 * @member {Array.<String>} addresses
 */
ListUnconfirmedTransactionsByAddressRIBSDVinInner.prototype['addresses'] = undefined;

/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSDVinInnerScriptSig} scriptSig
 */
ListUnconfirmedTransactionsByAddressRIBSDVinInner.prototype['scriptSig'] = undefined;

/**
 * Represents the script sequence number.
 * @member {Number} sequence
 */
ListUnconfirmedTransactionsByAddressRIBSDVinInner.prototype['sequence'] = undefined;

/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */
ListUnconfirmedTransactionsByAddressRIBSDVinInner.prototype['txid'] = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
ListUnconfirmedTransactionsByAddressRIBSDVinInner.prototype['txinwitness'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
ListUnconfirmedTransactionsByAddressRIBSDVinInner.prototype['value'] = undefined;

/**
 * It refers to the index of the output address of this transaction. The index starts from 0.
 * @member {Number} vout
 */
ListUnconfirmedTransactionsByAddressRIBSDVinInner.prototype['vout'] = undefined;






export default ListUnconfirmedTransactionsByAddressRIBSDVinInner;

