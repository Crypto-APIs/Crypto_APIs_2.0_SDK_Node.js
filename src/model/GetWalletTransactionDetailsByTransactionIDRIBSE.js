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
import GetWalletTransactionDetailsByTransactionIDRIBSEGasPrice from './GetWalletTransactionDetailsByTransactionIDRIBSEGasPrice';

/**
 * The GetWalletTransactionDetailsByTransactionIDRIBSE model module.
 * @module model/GetWalletTransactionDetailsByTransactionIDRIBSE
 * @version 1.11.0
 */
class GetWalletTransactionDetailsByTransactionIDRIBSE {
    /**
     * Constructs a new <code>GetWalletTransactionDetailsByTransactionIDRIBSE</code>.
     * Ethereum
     * @alias module:model/GetWalletTransactionDetailsByTransactionIDRIBSE
     * @param contract {String} Represents the specific transaction contract.
     * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
     * @param gasPrice {module:model/GetWalletTransactionDetailsByTransactionIDRIBSEGasPrice} 
     * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
     * @param inputData {String} Represents additional information that is required for the transaction.
     * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
     * @param transactionStatus {String} String representation of the transaction status
     */
    constructor(contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus) { 
        
        GetWalletTransactionDetailsByTransactionIDRIBSE.initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);
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
     * Constructs a <code>GetWalletTransactionDetailsByTransactionIDRIBSE</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWalletTransactionDetailsByTransactionIDRIBSE} obj Optional instance to populate.
     * @return {module:model/GetWalletTransactionDetailsByTransactionIDRIBSE} The populated <code>GetWalletTransactionDetailsByTransactionIDRIBSE</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetWalletTransactionDetailsByTransactionIDRIBSE();

            if (data.hasOwnProperty('contract')) {
                obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
            }
            if (data.hasOwnProperty('gasLimit')) {
                obj['gasLimit'] = ApiClient.convertToType(data['gasLimit'], 'String');
            }
            if (data.hasOwnProperty('gasPrice')) {
                obj['gasPrice'] = GetWalletTransactionDetailsByTransactionIDRIBSEGasPrice.constructFromObject(data['gasPrice']);
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

    /**
     * Validates the JSON data with respect to <code>GetWalletTransactionDetailsByTransactionIDRIBSE</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetWalletTransactionDetailsByTransactionIDRIBSE</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GetWalletTransactionDetailsByTransactionIDRIBSE.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['contract'] && !(typeof data['contract'] === 'string' || data['contract'] instanceof String)) {
            throw new Error("Expected the field `contract` to be a primitive type in the JSON string but got " + data['contract']);
        }
        // ensure the json data is a string
        if (data['gasLimit'] && !(typeof data['gasLimit'] === 'string' || data['gasLimit'] instanceof String)) {
            throw new Error("Expected the field `gasLimit` to be a primitive type in the JSON string but got " + data['gasLimit']);
        }
        // validate the optional field `gasPrice`
        if (data['gasPrice']) { // data not null
          GetWalletTransactionDetailsByTransactionIDRIBSEGasPrice.validateJSON(data['gasPrice']);
        }
        // ensure the json data is a string
        if (data['gasUsed'] && !(typeof data['gasUsed'] === 'string' || data['gasUsed'] instanceof String)) {
            throw new Error("Expected the field `gasUsed` to be a primitive type in the JSON string but got " + data['gasUsed']);
        }
        // ensure the json data is a string
        if (data['inputData'] && !(typeof data['inputData'] === 'string' || data['inputData'] instanceof String)) {
            throw new Error("Expected the field `inputData` to be a primitive type in the JSON string but got " + data['inputData']);
        }
        // ensure the json data is a string
        if (data['transactionStatus'] && !(typeof data['transactionStatus'] === 'string' || data['transactionStatus'] instanceof String)) {
            throw new Error("Expected the field `transactionStatus` to be a primitive type in the JSON string but got " + data['transactionStatus']);
        }

        return true;
    }


}

GetWalletTransactionDetailsByTransactionIDRIBSE.RequiredProperties = ["contract", "gasLimit", "gasPrice", "gasUsed", "inputData", "nonce", "transactionStatus"];

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
GetWalletTransactionDetailsByTransactionIDRIBSE.prototype['contract'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
GetWalletTransactionDetailsByTransactionIDRIBSE.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/GetWalletTransactionDetailsByTransactionIDRIBSEGasPrice} gasPrice
 */
GetWalletTransactionDetailsByTransactionIDRIBSE.prototype['gasPrice'] = undefined;

/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
GetWalletTransactionDetailsByTransactionIDRIBSE.prototype['gasUsed'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
GetWalletTransactionDetailsByTransactionIDRIBSE.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
GetWalletTransactionDetailsByTransactionIDRIBSE.prototype['nonce'] = undefined;

/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
GetWalletTransactionDetailsByTransactionIDRIBSE.prototype['transactionStatus'] = undefined;






export default GetWalletTransactionDetailsByTransactionIDRIBSE;

