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
import GetWalletTransactionDetailsByTransactionIDRIBSBVoutInnerScriptPubKey from './GetWalletTransactionDetailsByTransactionIDRIBSBVoutInnerScriptPubKey';

/**
 * The GetWalletTransactionDetailsByTransactionIDRIBSBVoutInner model module.
 * @module model/GetWalletTransactionDetailsByTransactionIDRIBSBVoutInner
 * @version 1.7.1
 */
class GetWalletTransactionDetailsByTransactionIDRIBSBVoutInner {
    /**
     * Constructs a new <code>GetWalletTransactionDetailsByTransactionIDRIBSBVoutInner</code>.
     * @alias module:model/GetWalletTransactionDetailsByTransactionIDRIBSBVoutInner
     * @param isSpent {Boolean} Defines whether the output is spent or not.
     * @param scriptPubKey {module:model/GetWalletTransactionDetailsByTransactionIDRIBSBVoutInnerScriptPubKey} 
     * @param value {String} Represents the sent/received amount.
     */
    constructor(isSpent, scriptPubKey, value) { 
        
        GetWalletTransactionDetailsByTransactionIDRIBSBVoutInner.initialize(this, isSpent, scriptPubKey, value);
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
     * Constructs a <code>GetWalletTransactionDetailsByTransactionIDRIBSBVoutInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWalletTransactionDetailsByTransactionIDRIBSBVoutInner} obj Optional instance to populate.
     * @return {module:model/GetWalletTransactionDetailsByTransactionIDRIBSBVoutInner} The populated <code>GetWalletTransactionDetailsByTransactionIDRIBSBVoutInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetWalletTransactionDetailsByTransactionIDRIBSBVoutInner();

            if (data.hasOwnProperty('isSpent')) {
                obj['isSpent'] = ApiClient.convertToType(data['isSpent'], 'Boolean');
            }
            if (data.hasOwnProperty('scriptPubKey')) {
                obj['scriptPubKey'] = GetWalletTransactionDetailsByTransactionIDRIBSBVoutInnerScriptPubKey.constructFromObject(data['scriptPubKey']);
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
GetWalletTransactionDetailsByTransactionIDRIBSBVoutInner.prototype['isSpent'] = undefined;

/**
 * @member {module:model/GetWalletTransactionDetailsByTransactionIDRIBSBVoutInnerScriptPubKey} scriptPubKey
 */
GetWalletTransactionDetailsByTransactionIDRIBSBVoutInner.prototype['scriptPubKey'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
GetWalletTransactionDetailsByTransactionIDRIBSBVoutInner.prototype['value'] = undefined;






export default GetWalletTransactionDetailsByTransactionIDRIBSBVoutInner;

