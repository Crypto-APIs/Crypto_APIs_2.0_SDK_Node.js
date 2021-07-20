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
import ListTransactionsByBlockHashRIBS from './ListTransactionsByBlockHashRIBS';
import ListTransactionsByBlockHashRIFee from './ListTransactionsByBlockHashRIFee';
import ListTransactionsByBlockHashRIRecipients from './ListTransactionsByBlockHashRIRecipients';
import ListTransactionsByBlockHashRISenders from './ListTransactionsByBlockHashRISenders';

/**
 * The ListTransactionsByBlockHashRI model module.
 * @module model/ListTransactionsByBlockHashRI
 * @version 1.1.0
 */
class ListTransactionsByBlockHashRI {
    /**
     * Constructs a new <code>ListTransactionsByBlockHashRI</code>.
     * @alias module:model/ListTransactionsByBlockHashRI
     * @param index {Number} Represents the index position of the transaction in the specific block.
     * @param minedInBlockHash {String} Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param minedInBlockHeight {Number} Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
     * @param recipients {Array.<module:model/ListTransactionsByBlockHashRIRecipients>} Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
     * @param senders {Array.<module:model/ListTransactionsByBlockHashRISenders>} Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
     * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
     * @param transactionHash {String} Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
     * @param transactionId {String} Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
     * @param fee {module:model/ListTransactionsByBlockHashRIFee} 
     * @param blockchainSpecific {module:model/ListTransactionsByBlockHashRIBS} 
     */
    constructor(index, minedInBlockHash, minedInBlockHeight, recipients, senders, timestamp, transactionHash, transactionId, fee, blockchainSpecific) { 
        
        ListTransactionsByBlockHashRI.initialize(this, index, minedInBlockHash, minedInBlockHeight, recipients, senders, timestamp, transactionHash, transactionId, fee, blockchainSpecific);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, index, minedInBlockHash, minedInBlockHeight, recipients, senders, timestamp, transactionHash, transactionId, fee, blockchainSpecific) { 
        obj['index'] = index;
        obj['minedInBlockHash'] = minedInBlockHash;
        obj['minedInBlockHeight'] = minedInBlockHeight;
        obj['recipients'] = recipients;
        obj['senders'] = senders;
        obj['timestamp'] = timestamp;
        obj['transactionHash'] = transactionHash;
        obj['transactionId'] = transactionId;
        obj['fee'] = fee;
        obj['blockchainSpecific'] = blockchainSpecific;
    }

    /**
     * Constructs a <code>ListTransactionsByBlockHashRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHashRI} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHashRI} The populated <code>ListTransactionsByBlockHashRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTransactionsByBlockHashRI();

            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'Number');
            }
            if (data.hasOwnProperty('minedInBlockHash')) {
                obj['minedInBlockHash'] = ApiClient.convertToType(data['minedInBlockHash'], 'String');
            }
            if (data.hasOwnProperty('minedInBlockHeight')) {
                obj['minedInBlockHeight'] = ApiClient.convertToType(data['minedInBlockHeight'], 'Number');
            }
            if (data.hasOwnProperty('recipients')) {
                obj['recipients'] = ApiClient.convertToType(data['recipients'], [ListTransactionsByBlockHashRIRecipients]);
            }
            if (data.hasOwnProperty('senders')) {
                obj['senders'] = ApiClient.convertToType(data['senders'], [ListTransactionsByBlockHashRISenders]);
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
            if (data.hasOwnProperty('transactionHash')) {
                obj['transactionHash'] = ApiClient.convertToType(data['transactionHash'], 'String');
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = ListTransactionsByBlockHashRIFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('blockchainSpecific')) {
                obj['blockchainSpecific'] = ListTransactionsByBlockHashRIBS.constructFromObject(data['blockchainSpecific']);
            }
        }
        return obj;
    }


}

/**
 * Represents the index position of the transaction in the specific block.
 * @member {Number} index
 */
ListTransactionsByBlockHashRI.prototype['index'] = undefined;

/**
 * Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */
ListTransactionsByBlockHashRI.prototype['minedInBlockHash'] = undefined;

/**
 * Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
 * @member {Number} minedInBlockHeight
 */
ListTransactionsByBlockHashRI.prototype['minedInBlockHeight'] = undefined;

/**
 * Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIRecipients>} recipients
 */
ListTransactionsByBlockHashRI.prototype['recipients'] = undefined;

/**
 * Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/ListTransactionsByBlockHashRISenders>} senders
 */
ListTransactionsByBlockHashRI.prototype['senders'] = undefined;

/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */
ListTransactionsByBlockHashRI.prototype['timestamp'] = undefined;

/**
 * Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
 * @member {String} transactionHash
 */
ListTransactionsByBlockHashRI.prototype['transactionHash'] = undefined;

/**
 * Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
 * @member {String} transactionId
 */
ListTransactionsByBlockHashRI.prototype['transactionId'] = undefined;

/**
 * @member {module:model/ListTransactionsByBlockHashRIFee} fee
 */
ListTransactionsByBlockHashRI.prototype['fee'] = undefined;

/**
 * @member {module:model/ListTransactionsByBlockHashRIBS} blockchainSpecific
 */
ListTransactionsByBlockHashRI.prototype['blockchainSpecific'] = undefined;






export default ListTransactionsByBlockHashRI;
