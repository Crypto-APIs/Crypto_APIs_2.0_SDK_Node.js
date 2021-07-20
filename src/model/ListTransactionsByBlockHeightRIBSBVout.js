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
import ListTransactionsByBlockHeightRIBSBScriptPubKey from './ListTransactionsByBlockHeightRIBSBScriptPubKey';

/**
 * The ListTransactionsByBlockHeightRIBSBVout model module.
 * @module model/ListTransactionsByBlockHeightRIBSBVout
 * @version 1.1.0
 */
class ListTransactionsByBlockHeightRIBSBVout {
    /**
     * Constructs a new <code>ListTransactionsByBlockHeightRIBSBVout</code>.
     * @alias module:model/ListTransactionsByBlockHeightRIBSBVout
     * @param isSpent {Boolean} Defines whether the output is spent or not.
     * @param scriptPubKey {module:model/ListTransactionsByBlockHeightRIBSBScriptPubKey} 
     * @param value {String} Represents the sent/received amount.
     */
    constructor(isSpent, scriptPubKey, value) { 
        
        ListTransactionsByBlockHeightRIBSBVout.initialize(this, isSpent, scriptPubKey, value);
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
     * Constructs a <code>ListTransactionsByBlockHeightRIBSBVout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightRIBSBVout} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightRIBSBVout} The populated <code>ListTransactionsByBlockHeightRIBSBVout</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTransactionsByBlockHeightRIBSBVout();

            if (data.hasOwnProperty('isSpent')) {
                obj['isSpent'] = ApiClient.convertToType(data['isSpent'], 'Boolean');
            }
            if (data.hasOwnProperty('scriptPubKey')) {
                obj['scriptPubKey'] = ListTransactionsByBlockHeightRIBSBScriptPubKey.constructFromObject(data['scriptPubKey']);
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
ListTransactionsByBlockHeightRIBSBVout.prototype['isSpent'] = undefined;

/**
 * @member {module:model/ListTransactionsByBlockHeightRIBSBScriptPubKey} scriptPubKey
 */
ListTransactionsByBlockHeightRIBSBVout.prototype['scriptPubKey'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
ListTransactionsByBlockHeightRIBSBVout.prototype['value'] = undefined;






export default ListTransactionsByBlockHeightRIBSBVout;

