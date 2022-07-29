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
import GetTransactionDetailsByTransactionIDFromCallbackRIBS from './GetTransactionDetailsByTransactionIDFromCallbackRIBS';
import GetTransactionDetailsByTransactionIDFromCallbackRIFee from './GetTransactionDetailsByTransactionIDFromCallbackRIFee';
import GetTransactionDetailsByTransactionIDFromCallbackRIRecipientsInner from './GetTransactionDetailsByTransactionIDFromCallbackRIRecipientsInner';
import GetTransactionDetailsByTransactionIDFromCallbackRISendersInner from './GetTransactionDetailsByTransactionIDFromCallbackRISendersInner';

/**
 * The GetTransactionDetailsByTransactionIDFromCallbackRI model module.
 * @module model/GetTransactionDetailsByTransactionIDFromCallbackRI
 * @version 1.7.1
 */
class GetTransactionDetailsByTransactionIDFromCallbackRI {
    /**
     * Constructs a new <code>GetTransactionDetailsByTransactionIDFromCallbackRI</code>.
     * @alias module:model/GetTransactionDetailsByTransactionIDFromCallbackRI
     * @param index {Number} Represents the index position of the transaction in the specific block.
     * @param minedInBlockHash {String} Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param minedInBlockHeight {Number} Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
     * @param recipients {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRIRecipientsInner>} Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
     * @param senders {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRISendersInner>} Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
     * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
     * @param transactionHash {String} Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
     * @param fee {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIFee} 
     * @param isConfirmed {Boolean} Represents the state of the transaction whether it is confirmed or not confirmed.
     * @param blockchainSpecific {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBS} 
     */
    constructor(index, minedInBlockHash, minedInBlockHeight, recipients, senders, timestamp, transactionHash, fee, isConfirmed, blockchainSpecific) { 
        
        GetTransactionDetailsByTransactionIDFromCallbackRI.initialize(this, index, minedInBlockHash, minedInBlockHeight, recipients, senders, timestamp, transactionHash, fee, isConfirmed, blockchainSpecific);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, index, minedInBlockHash, minedInBlockHeight, recipients, senders, timestamp, transactionHash, fee, isConfirmed, blockchainSpecific) { 
        obj['index'] = index;
        obj['minedInBlockHash'] = minedInBlockHash;
        obj['minedInBlockHeight'] = minedInBlockHeight;
        obj['recipients'] = recipients;
        obj['senders'] = senders;
        obj['timestamp'] = timestamp;
        obj['transactionHash'] = transactionHash;
        obj['fee'] = fee;
        obj['isConfirmed'] = isConfirmed;
        obj['blockchainSpecific'] = blockchainSpecific;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDFromCallbackRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDFromCallbackRI} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDFromCallbackRI} The populated <code>GetTransactionDetailsByTransactionIDFromCallbackRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransactionDetailsByTransactionIDFromCallbackRI();

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
                obj['recipients'] = ApiClient.convertToType(data['recipients'], [GetTransactionDetailsByTransactionIDFromCallbackRIRecipientsInner]);
            }
            if (data.hasOwnProperty('senders')) {
                obj['senders'] = ApiClient.convertToType(data['senders'], [GetTransactionDetailsByTransactionIDFromCallbackRISendersInner]);
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
            if (data.hasOwnProperty('transactionHash')) {
                obj['transactionHash'] = ApiClient.convertToType(data['transactionHash'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = GetTransactionDetailsByTransactionIDFromCallbackRIFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('isConfirmed')) {
                obj['isConfirmed'] = ApiClient.convertToType(data['isConfirmed'], 'Boolean');
            }
            if (data.hasOwnProperty('blockchainSpecific')) {
                obj['blockchainSpecific'] = GetTransactionDetailsByTransactionIDFromCallbackRIBS.constructFromObject(data['blockchainSpecific']);
            }
        }
        return obj;
    }


}

/**
 * Represents the index position of the transaction in the specific block.
 * @member {Number} index
 */
GetTransactionDetailsByTransactionIDFromCallbackRI.prototype['index'] = undefined;

/**
 * Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */
GetTransactionDetailsByTransactionIDFromCallbackRI.prototype['minedInBlockHash'] = undefined;

/**
 * Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
 * @member {Number} minedInBlockHeight
 */
GetTransactionDetailsByTransactionIDFromCallbackRI.prototype['minedInBlockHeight'] = undefined;

/**
 * Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRIRecipientsInner>} recipients
 */
GetTransactionDetailsByTransactionIDFromCallbackRI.prototype['recipients'] = undefined;

/**
 * Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRISendersInner>} senders
 */
GetTransactionDetailsByTransactionIDFromCallbackRI.prototype['senders'] = undefined;

/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */
GetTransactionDetailsByTransactionIDFromCallbackRI.prototype['timestamp'] = undefined;

/**
 * Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
 * @member {String} transactionHash
 */
GetTransactionDetailsByTransactionIDFromCallbackRI.prototype['transactionHash'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIFee} fee
 */
GetTransactionDetailsByTransactionIDFromCallbackRI.prototype['fee'] = undefined;

/**
 * Represents the state of the transaction whether it is confirmed or not confirmed.
 * @member {Boolean} isConfirmed
 */
GetTransactionDetailsByTransactionIDFromCallbackRI.prototype['isConfirmed'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBS} blockchainSpecific
 */
GetTransactionDetailsByTransactionIDFromCallbackRI.prototype['blockchainSpecific'] = undefined;






export default GetTransactionDetailsByTransactionIDFromCallbackRI;

