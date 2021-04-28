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
import ListTransactionsByAddressResponseItemBlockchainSpecificDashScriptSig from './ListTransactionsByAddressResponseItemBlockchainSpecificDashScriptSig';

/**
 * The ListTransactionsByAddressResponseItemBlockchainSpecificDashVin model module.
 * @module model/ListTransactionsByAddressResponseItemBlockchainSpecificDashVin
 * @version 2.0.0
 */
class ListTransactionsByAddressResponseItemBlockchainSpecificDashVin {
    /**
     * Constructs a new <code>ListTransactionsByAddressResponseItemBlockchainSpecificDashVin</code>.
     * @alias module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDashVin
     * @param addresses {Array.<String>} 
     * @param scriptSig {module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDashScriptSig} 
     * @param sequence {String} Represents the script sequence number.
     * @param txinwitness {Array.<String>} 
     * @param vout {Number} It refers to the index of the output address of this transaction. The index starts from 0.
     */
    constructor(addresses, scriptSig, sequence, txinwitness, vout) { 
        
        ListTransactionsByAddressResponseItemBlockchainSpecificDashVin.initialize(this, addresses, scriptSig, sequence, txinwitness, vout);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, addresses, scriptSig, sequence, txinwitness, vout) { 
        obj['addresses'] = addresses;
        obj['scriptSig'] = scriptSig;
        obj['sequence'] = sequence;
        obj['txinwitness'] = txinwitness;
        obj['vout'] = vout;
    }

    /**
     * Constructs a <code>ListTransactionsByAddressResponseItemBlockchainSpecificDashVin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDashVin} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDashVin} The populated <code>ListTransactionsByAddressResponseItemBlockchainSpecificDashVin</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTransactionsByAddressResponseItemBlockchainSpecificDashVin();

            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], ['String']);
            }
            if (data.hasOwnProperty('coinbase')) {
                obj['coinbase'] = ApiClient.convertToType(data['coinbase'], 'String');
            }
            if (data.hasOwnProperty('scriptSig')) {
                obj['scriptSig'] = ListTransactionsByAddressResponseItemBlockchainSpecificDashScriptSig.constructFromObject(data['scriptSig']);
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
ListTransactionsByAddressResponseItemBlockchainSpecificDashVin.prototype['addresses'] = undefined;

/**
 * Represents the coinbase hex.
 * @member {String} coinbase
 */
ListTransactionsByAddressResponseItemBlockchainSpecificDashVin.prototype['coinbase'] = undefined;

/**
 * @member {module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDashScriptSig} scriptSig
 */
ListTransactionsByAddressResponseItemBlockchainSpecificDashVin.prototype['scriptSig'] = undefined;

/**
 * Represents the script sequence number.
 * @member {String} sequence
 */
ListTransactionsByAddressResponseItemBlockchainSpecificDashVin.prototype['sequence'] = undefined;

/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */
ListTransactionsByAddressResponseItemBlockchainSpecificDashVin.prototype['txid'] = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
ListTransactionsByAddressResponseItemBlockchainSpecificDashVin.prototype['txinwitness'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
ListTransactionsByAddressResponseItemBlockchainSpecificDashVin.prototype['value'] = undefined;

/**
 * It refers to the index of the output address of this transaction. The index starts from 0.
 * @member {Number} vout
 */
ListTransactionsByAddressResponseItemBlockchainSpecificDashVin.prototype['vout'] = undefined;






export default ListTransactionsByAddressResponseItemBlockchainSpecificDashVin;

