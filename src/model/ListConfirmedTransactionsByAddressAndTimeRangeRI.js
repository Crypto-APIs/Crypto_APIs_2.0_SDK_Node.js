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
import GetTransactionDetailsByTransactionIDRIRecipientsInner from './GetTransactionDetailsByTransactionIDRIRecipientsInner';
import GetTransactionDetailsByTransactionIDRISendersInner from './GetTransactionDetailsByTransactionIDRISendersInner';
import ListConfirmedTransactionsByAddressAndTimeRangeRIBS from './ListConfirmedTransactionsByAddressAndTimeRangeRIBS';
import ListConfirmedTransactionsByAddressRIFee from './ListConfirmedTransactionsByAddressRIFee';

/**
 * The ListConfirmedTransactionsByAddressAndTimeRangeRI model module.
 * @module model/ListConfirmedTransactionsByAddressAndTimeRangeRI
 * @version 1.12.0
 */
class ListConfirmedTransactionsByAddressAndTimeRangeRI {
    /**
     * Constructs a new <code>ListConfirmedTransactionsByAddressAndTimeRangeRI</code>.
     * @alias module:model/ListConfirmedTransactionsByAddressAndTimeRangeRI
     * @param index {Number} Represents the index position of the transaction in the block.
     * @param recipients {Array.<module:model/GetTransactionDetailsByTransactionIDRIRecipientsInner>} Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
     * @param senders {Array.<module:model/GetTransactionDetailsByTransactionIDRISendersInner>} Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
     * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
     * @param transactionHash {String} Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
     * @param transactionId {String} Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
     * @param fee {module:model/ListConfirmedTransactionsByAddressRIFee} 
     * @param blockchainSpecific {module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBS} 
     */
    constructor(index, recipients, senders, timestamp, transactionHash, transactionId, fee, blockchainSpecific) { 
        
        ListConfirmedTransactionsByAddressAndTimeRangeRI.initialize(this, index, recipients, senders, timestamp, transactionHash, transactionId, fee, blockchainSpecific);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, index, recipients, senders, timestamp, transactionHash, transactionId, fee, blockchainSpecific) { 
        obj['index'] = index;
        obj['recipients'] = recipients;
        obj['senders'] = senders;
        obj['timestamp'] = timestamp;
        obj['transactionHash'] = transactionHash;
        obj['transactionId'] = transactionId;
        obj['fee'] = fee;
        obj['blockchainSpecific'] = blockchainSpecific;
    }

    /**
     * Constructs a <code>ListConfirmedTransactionsByAddressAndTimeRangeRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTransactionsByAddressAndTimeRangeRI} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTransactionsByAddressAndTimeRangeRI} The populated <code>ListConfirmedTransactionsByAddressAndTimeRangeRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListConfirmedTransactionsByAddressAndTimeRangeRI();

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
                obj['recipients'] = ApiClient.convertToType(data['recipients'], [GetTransactionDetailsByTransactionIDRIRecipientsInner]);
            }
            if (data.hasOwnProperty('senders')) {
                obj['senders'] = ApiClient.convertToType(data['senders'], [GetTransactionDetailsByTransactionIDRISendersInner]);
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
                obj['fee'] = ListConfirmedTransactionsByAddressRIFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('blockchainSpecific')) {
                obj['blockchainSpecific'] = ListConfirmedTransactionsByAddressAndTimeRangeRIBS.constructFromObject(data['blockchainSpecific']);
            }
        }
        return obj;
    }


}

/**
 * Represents the index position of the transaction in the block.
 * @member {Number} index
 */
ListConfirmedTransactionsByAddressAndTimeRangeRI.prototype['index'] = undefined;

/**
 * Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */
ListConfirmedTransactionsByAddressAndTimeRangeRI.prototype['minedInBlockHash'] = undefined;

/**
 * Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
 * @member {Number} minedInBlockHeight
 */
ListConfirmedTransactionsByAddressAndTimeRangeRI.prototype['minedInBlockHeight'] = undefined;

/**
 * Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIRecipientsInner>} recipients
 */
ListConfirmedTransactionsByAddressAndTimeRangeRI.prototype['recipients'] = undefined;

/**
 * Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRISendersInner>} senders
 */
ListConfirmedTransactionsByAddressAndTimeRangeRI.prototype['senders'] = undefined;

/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */
ListConfirmedTransactionsByAddressAndTimeRangeRI.prototype['timestamp'] = undefined;

/**
 * Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
 * @member {String} transactionHash
 */
ListConfirmedTransactionsByAddressAndTimeRangeRI.prototype['transactionHash'] = undefined;

/**
 * Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
 * @member {String} transactionId
 */
ListConfirmedTransactionsByAddressAndTimeRangeRI.prototype['transactionId'] = undefined;

/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIFee} fee
 */
ListConfirmedTransactionsByAddressAndTimeRangeRI.prototype['fee'] = undefined;

/**
 * @member {module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBS} blockchainSpecific
 */
ListConfirmedTransactionsByAddressAndTimeRangeRI.prototype['blockchainSpecific'] = undefined;






export default ListConfirmedTransactionsByAddressAndTimeRangeRI;

