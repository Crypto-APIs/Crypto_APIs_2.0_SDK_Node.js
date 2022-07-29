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
import GetTransactionDetailsByTransactionIDFromCallbackRIBSTBandwidthUsed from './GetTransactionDetailsByTransactionIDFromCallbackRIBSTBandwidthUsed';
import GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed from './GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed';

/**
 * The GetTransactionDetailsByTransactionIDFromCallbackRIBST model module.
 * @module model/GetTransactionDetailsByTransactionIDFromCallbackRIBST
 * @version 1.7.1
 */
class GetTransactionDetailsByTransactionIDFromCallbackRIBST {
    /**
     * Constructs a new <code>GetTransactionDetailsByTransactionIDFromCallbackRIBST</code>.
     * Tron
     * @alias module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBST
     * @param amount {String} Defines the amount of the transaction.
     * @param bandwidthUsed {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSTBandwidthUsed} 
     * @param contract {String} Represents the specific transaction contract.
     * @param energyUsed {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed} 
     * @param hasInternalTransactions {Boolean} Defines if the transaction includes internal transactions (true) or not (false).
     * @param hasTokenTransfers {String} Defines if the transaction includes token transfers (true) or not (false).
     * @param input {String} Represents the transaction's input value.
     * @param recipients {String} Represents the recipient address.
     * @param senders {String} Represents the sender address.
     * @param transactionStatus {String} Represents the status of this transaction.
     */
    constructor(amount, bandwidthUsed, contract, energyUsed, hasInternalTransactions, hasTokenTransfers, input, recipients, senders, transactionStatus) { 
        
        GetTransactionDetailsByTransactionIDFromCallbackRIBST.initialize(this, amount, bandwidthUsed, contract, energyUsed, hasInternalTransactions, hasTokenTransfers, input, recipients, senders, transactionStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, bandwidthUsed, contract, energyUsed, hasInternalTransactions, hasTokenTransfers, input, recipients, senders, transactionStatus) { 
        obj['amount'] = amount;
        obj['bandwidthUsed'] = bandwidthUsed;
        obj['contract'] = contract;
        obj['energyUsed'] = energyUsed;
        obj['hasInternalTransactions'] = hasInternalTransactions;
        obj['hasTokenTransfers'] = hasTokenTransfers;
        obj['input'] = input;
        obj['recipients'] = recipients;
        obj['senders'] = senders;
        obj['transactionStatus'] = transactionStatus;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDFromCallbackRIBST</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBST} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBST} The populated <code>GetTransactionDetailsByTransactionIDFromCallbackRIBST</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransactionDetailsByTransactionIDFromCallbackRIBST();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('bandwidthUsed')) {
                obj['bandwidthUsed'] = GetTransactionDetailsByTransactionIDFromCallbackRIBSTBandwidthUsed.constructFromObject(data['bandwidthUsed']);
            }
            if (data.hasOwnProperty('contract')) {
                obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
            }
            if (data.hasOwnProperty('energyUsed')) {
                obj['energyUsed'] = GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed.constructFromObject(data['energyUsed']);
            }
            if (data.hasOwnProperty('hasInternalTransactions')) {
                obj['hasInternalTransactions'] = ApiClient.convertToType(data['hasInternalTransactions'], 'Boolean');
            }
            if (data.hasOwnProperty('hasTokenTransfers')) {
                obj['hasTokenTransfers'] = ApiClient.convertToType(data['hasTokenTransfers'], 'String');
            }
            if (data.hasOwnProperty('input')) {
                obj['input'] = ApiClient.convertToType(data['input'], 'String');
            }
            if (data.hasOwnProperty('recipients')) {
                obj['recipients'] = ApiClient.convertToType(data['recipients'], 'String');
            }
            if (data.hasOwnProperty('senders')) {
                obj['senders'] = ApiClient.convertToType(data['senders'], 'String');
            }
            if (data.hasOwnProperty('transactionStatus')) {
                obj['transactionStatus'] = ApiClient.convertToType(data['transactionStatus'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the amount of the transaction.
 * @member {String} amount
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBST.prototype['amount'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSTBandwidthUsed} bandwidthUsed
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBST.prototype['bandwidthUsed'] = undefined;

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBST.prototype['contract'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed} energyUsed
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBST.prototype['energyUsed'] = undefined;

/**
 * Defines if the transaction includes internal transactions (true) or not (false).
 * @member {Boolean} hasInternalTransactions
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBST.prototype['hasInternalTransactions'] = undefined;

/**
 * Defines if the transaction includes token transfers (true) or not (false).
 * @member {String} hasTokenTransfers
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBST.prototype['hasTokenTransfers'] = undefined;

/**
 * Represents the transaction's input value.
 * @member {String} input
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBST.prototype['input'] = undefined;

/**
 * Represents the recipient address.
 * @member {String} recipients
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBST.prototype['recipients'] = undefined;

/**
 * Represents the sender address.
 * @member {String} senders
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBST.prototype['senders'] = undefined;

/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBST.prototype['transactionStatus'] = undefined;






export default GetTransactionDetailsByTransactionIDFromCallbackRIBST;

