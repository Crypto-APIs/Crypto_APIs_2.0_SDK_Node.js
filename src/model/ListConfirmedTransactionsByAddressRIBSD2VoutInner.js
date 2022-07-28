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
import ListConfirmedTransactionsByAddressRIBSD2VoutInnerScriptPubKey from './ListConfirmedTransactionsByAddressRIBSD2VoutInnerScriptPubKey';

/**
 * The ListConfirmedTransactionsByAddressRIBSD2VoutInner model module.
 * @module model/ListConfirmedTransactionsByAddressRIBSD2VoutInner
 * @version 1.7.0
 */
class ListConfirmedTransactionsByAddressRIBSD2VoutInner {
    /**
     * Constructs a new <code>ListConfirmedTransactionsByAddressRIBSD2VoutInner</code>.
     * @alias module:model/ListConfirmedTransactionsByAddressRIBSD2VoutInner
     * @param isSpent {Boolean} Defines whether the output is spent or not.
     * @param scriptPubKey {module:model/ListConfirmedTransactionsByAddressRIBSD2VoutInnerScriptPubKey} 
     * @param value {String} Represents the sent/received amount.
     */
    constructor(isSpent, scriptPubKey, value) { 
        
        ListConfirmedTransactionsByAddressRIBSD2VoutInner.initialize(this, isSpent, scriptPubKey, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, isSpent, scriptPubKey, value) { 
        obj['isSpent'] = isSpent;
        obj['scriptPubKey'] = scriptPubKey;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>ListConfirmedTransactionsByAddressRIBSD2VoutInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTransactionsByAddressRIBSD2VoutInner} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTransactionsByAddressRIBSD2VoutInner} The populated <code>ListConfirmedTransactionsByAddressRIBSD2VoutInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListConfirmedTransactionsByAddressRIBSD2VoutInner();

            if (data.hasOwnProperty('isSpent')) {
                obj['isSpent'] = ApiClient.convertToType(data['isSpent'], 'Boolean');
            }
            if (data.hasOwnProperty('scriptPubKey')) {
                obj['scriptPubKey'] = ListConfirmedTransactionsByAddressRIBSD2VoutInnerScriptPubKey.constructFromObject(data['scriptPubKey']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines whether the output is spent or not.
 * @member {Boolean} isSpent
 */
ListConfirmedTransactionsByAddressRIBSD2VoutInner.prototype['isSpent'] = undefined;

/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSD2VoutInnerScriptPubKey} scriptPubKey
 */
ListConfirmedTransactionsByAddressRIBSD2VoutInner.prototype['scriptPubKey'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
ListConfirmedTransactionsByAddressRIBSD2VoutInner.prototype['value'] = undefined;






export default ListConfirmedTransactionsByAddressRIBSD2VoutInner;

