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
import GetZilliqaTransactionDetailsByTransactionIDRIFee from './GetZilliqaTransactionDetailsByTransactionIDRIFee';
import GetZilliqaTransactionDetailsByTransactionIDRIRecipients from './GetZilliqaTransactionDetailsByTransactionIDRIRecipients';
import GetZilliqaTransactionDetailsByTransactionIDRISenders from './GetZilliqaTransactionDetailsByTransactionIDRISenders';

/**
 * The GetZilliqaTransactionDetailsByTransactionIDRI model module.
 * @module model/GetZilliqaTransactionDetailsByTransactionIDRI
 * @version 1.1.0
 */
class GetZilliqaTransactionDetailsByTransactionIDRI {
    /**
     * Constructs a new <code>GetZilliqaTransactionDetailsByTransactionIDRI</code>.
     * @alias module:model/GetZilliqaTransactionDetailsByTransactionIDRI
     * @param fee {module:model/GetZilliqaTransactionDetailsByTransactionIDRIFee} 
     * @param gasLimit {Number} Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
     * @param gasPrice {Number} Defines the price of the gas.
     * @param gasUsed {Number} Defines how much of the gas for the block has been used.
     * @param minedInBlockHash {String} Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param minedInBlockHeight {Number} Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
     * @param recipients {Array.<module:model/GetZilliqaTransactionDetailsByTransactionIDRIRecipients>} Represents an object of addresses that receive the transactions.
     * @param senders {Array.<module:model/GetZilliqaTransactionDetailsByTransactionIDRISenders>} Represents an object of addresses that provide the funds.
     * @param timestamp {Number} Defines the exact date/time when this block was mined in Unix Timestamp.
     * @param transactionIndex {Number} Defines the numeric representation of the transaction index.
     * @param transactionStatus {String} Defines the status of the transaction, whether it is e.g. pending or complete.
     */
    constructor(fee, gasLimit, gasPrice, gasUsed, minedInBlockHash, minedInBlockHeight, nonce, recipients, senders, timestamp, transactionIndex, transactionStatus) { 
        
        GetZilliqaTransactionDetailsByTransactionIDRI.initialize(this, fee, gasLimit, gasPrice, gasUsed, minedInBlockHash, minedInBlockHeight, nonce, recipients, senders, timestamp, transactionIndex, transactionStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fee, gasLimit, gasPrice, gasUsed, minedInBlockHash, minedInBlockHeight, nonce, recipients, senders, timestamp, transactionIndex, transactionStatus) { 
        obj['fee'] = fee;
        obj['gasLimit'] = gasLimit;
        obj['gasPrice'] = gasPrice;
        obj['gasUsed'] = gasUsed;
        obj['minedInBlockHash'] = minedInBlockHash;
        obj['minedInBlockHeight'] = minedInBlockHeight;
        obj['nonce'] = nonce;
        obj['recipients'] = recipients;
        obj['senders'] = senders;
        obj['timestamp'] = timestamp;
        obj['transactionIndex'] = transactionIndex;
        obj['transactionStatus'] = transactionStatus;
    }

    /**
     * Constructs a <code>GetZilliqaTransactionDetailsByTransactionIDRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetZilliqaTransactionDetailsByTransactionIDRI} obj Optional instance to populate.
     * @return {module:model/GetZilliqaTransactionDetailsByTransactionIDRI} The populated <code>GetZilliqaTransactionDetailsByTransactionIDRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetZilliqaTransactionDetailsByTransactionIDRI();

            if (data.hasOwnProperty('fee')) {
                obj['fee'] = GetZilliqaTransactionDetailsByTransactionIDRIFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('gasLimit')) {
                obj['gasLimit'] = ApiClient.convertToType(data['gasLimit'], 'Number');
            }
            if (data.hasOwnProperty('gasPrice')) {
                obj['gasPrice'] = ApiClient.convertToType(data['gasPrice'], 'Number');
            }
            if (data.hasOwnProperty('gasUsed')) {
                obj['gasUsed'] = ApiClient.convertToType(data['gasUsed'], 'Number');
            }
            if (data.hasOwnProperty('minedInBlockHash')) {
                obj['minedInBlockHash'] = ApiClient.convertToType(data['minedInBlockHash'], 'String');
            }
            if (data.hasOwnProperty('minedInBlockHeight')) {
                obj['minedInBlockHeight'] = ApiClient.convertToType(data['minedInBlockHeight'], 'Number');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'Number');
            }
            if (data.hasOwnProperty('recipients')) {
                obj['recipients'] = ApiClient.convertToType(data['recipients'], [GetZilliqaTransactionDetailsByTransactionIDRIRecipients]);
            }
            if (data.hasOwnProperty('senders')) {
                obj['senders'] = ApiClient.convertToType(data['senders'], [GetZilliqaTransactionDetailsByTransactionIDRISenders]);
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
            if (data.hasOwnProperty('transactionIndex')) {
                obj['transactionIndex'] = ApiClient.convertToType(data['transactionIndex'], 'Number');
            }
            if (data.hasOwnProperty('transactionStatus')) {
                obj['transactionStatus'] = ApiClient.convertToType(data['transactionStatus'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetZilliqaTransactionDetailsByTransactionIDRIFee} fee
 */
GetZilliqaTransactionDetailsByTransactionIDRI.prototype['fee'] = undefined;

/**
 * Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
 * @member {Number} gasLimit
 */
GetZilliqaTransactionDetailsByTransactionIDRI.prototype['gasLimit'] = undefined;

/**
 * Defines the price of the gas.
 * @member {Number} gasPrice
 */
GetZilliqaTransactionDetailsByTransactionIDRI.prototype['gasPrice'] = undefined;

/**
 * Defines how much of the gas for the block has been used.
 * @member {Number} gasUsed
 */
GetZilliqaTransactionDetailsByTransactionIDRI.prototype['gasUsed'] = undefined;

/**
 * Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */
GetZilliqaTransactionDetailsByTransactionIDRI.prototype['minedInBlockHash'] = undefined;

/**
 * Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
 * @member {Number} minedInBlockHeight
 */
GetZilliqaTransactionDetailsByTransactionIDRI.prototype['minedInBlockHeight'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
GetZilliqaTransactionDetailsByTransactionIDRI.prototype['nonce'] = undefined;

/**
 * Represents an object of addresses that receive the transactions.
 * @member {Array.<module:model/GetZilliqaTransactionDetailsByTransactionIDRIRecipients>} recipients
 */
GetZilliqaTransactionDetailsByTransactionIDRI.prototype['recipients'] = undefined;

/**
 * Represents an object of addresses that provide the funds.
 * @member {Array.<module:model/GetZilliqaTransactionDetailsByTransactionIDRISenders>} senders
 */
GetZilliqaTransactionDetailsByTransactionIDRI.prototype['senders'] = undefined;

/**
 * Defines the exact date/time when this block was mined in Unix Timestamp.
 * @member {Number} timestamp
 */
GetZilliqaTransactionDetailsByTransactionIDRI.prototype['timestamp'] = undefined;

/**
 * Defines the numeric representation of the transaction index.
 * @member {Number} transactionIndex
 */
GetZilliqaTransactionDetailsByTransactionIDRI.prototype['transactionIndex'] = undefined;

/**
 * Defines the status of the transaction, whether it is e.g. pending or complete.
 * @member {String} transactionStatus
 */
GetZilliqaTransactionDetailsByTransactionIDRI.prototype['transactionStatus'] = undefined;






export default GetZilliqaTransactionDetailsByTransactionIDRI;

