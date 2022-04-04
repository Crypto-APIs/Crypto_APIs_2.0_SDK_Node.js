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
import GetTransactionDetailsByTransactionIDRIBSEGasPrice from './GetTransactionDetailsByTransactionIDRIBSEGasPrice';

/**
 * The GetTransactionDetailsByTransactionIDFromCallbackRIBSE model module.
 * @module model/GetTransactionDetailsByTransactionIDFromCallbackRIBSE
 * @version 1.4.0
 */
class GetTransactionDetailsByTransactionIDFromCallbackRIBSE {
    /**
     * Constructs a new <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSE</code>.
     * Ethereum
     * @alias module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSE
     * @param contract {String} Represents the specific transaction contract.
     * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
     * @param gasPrice {module:model/GetTransactionDetailsByTransactionIDRIBSEGasPrice} 
     * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
     * @param inputData {String} Represents additional information that is required for the transaction.
     * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
     * @param transactionStatus {String} Represents the status of this transaction.
     */
    constructor(contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus) { 
        
        GetTransactionDetailsByTransactionIDFromCallbackRIBSE.initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus) { 
        obj['contract'] = contract;
        obj['gasLimit'] = gasLimit;
        obj['gasPrice'] = gasPrice;
        obj['gasUsed'] = gasUsed;
        obj['inputData'] = inputData;
        obj['nonce'] = nonce;
        obj['transactionStatus'] = transactionStatus;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSE</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSE} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSE} The populated <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSE</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransactionDetailsByTransactionIDFromCallbackRIBSE();

            if (data.hasOwnProperty('contract')) {
                obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
            }
            if (data.hasOwnProperty('gasLimit')) {
                obj['gasLimit'] = ApiClient.convertToType(data['gasLimit'], 'String');
            }
            if (data.hasOwnProperty('gasPrice')) {
                obj['gasPrice'] = GetTransactionDetailsByTransactionIDRIBSEGasPrice.constructFromObject(data['gasPrice']);
            }
            if (data.hasOwnProperty('gasUsed')) {
                obj['gasUsed'] = ApiClient.convertToType(data['gasUsed'], 'String');
            }
            if (data.hasOwnProperty('inputData')) {
                obj['inputData'] = ApiClient.convertToType(data['inputData'], 'String');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'Number');
            }
            if (data.hasOwnProperty('transactionStatus')) {
                obj['transactionStatus'] = ApiClient.convertToType(data['transactionStatus'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSE.prototype['contract'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSE.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSEGasPrice} gasPrice
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSE.prototype['gasPrice'] = undefined;

/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSE.prototype['gasUsed'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSE.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSE.prototype['nonce'] = undefined;

/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSE.prototype['transactionStatus'] = undefined;






export default GetTransactionDetailsByTransactionIDFromCallbackRIBSE;
