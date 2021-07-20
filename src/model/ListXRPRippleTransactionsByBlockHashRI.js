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
import ListXRPRippleTransactionsByBlockHashRIFee from './ListXRPRippleTransactionsByBlockHashRIFee';
import ListXRPRippleTransactionsByBlockHashRIOffer from './ListXRPRippleTransactionsByBlockHashRIOffer';
import ListXRPRippleTransactionsByBlockHashRIReceive from './ListXRPRippleTransactionsByBlockHashRIReceive';
import ListXRPRippleTransactionsByBlockHashRIRecipients from './ListXRPRippleTransactionsByBlockHashRIRecipients';
import ListXRPRippleTransactionsByBlockHashRISenders from './ListXRPRippleTransactionsByBlockHashRISenders';
import ListXRPRippleTransactionsByBlockHashRIValue from './ListXRPRippleTransactionsByBlockHashRIValue';

/**
 * The ListXRPRippleTransactionsByBlockHashRI model module.
 * @module model/ListXRPRippleTransactionsByBlockHashRI
 * @version 1.1.0
 */
class ListXRPRippleTransactionsByBlockHashRI {
    /**
     * Constructs a new <code>ListXRPRippleTransactionsByBlockHashRI</code>.
     * @alias module:model/ListXRPRippleTransactionsByBlockHashRI
     * @param index {Number} Represents the index position of the transaction in the specific block.
     * @param minedInBlockHeight {Number} Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
     * @param recipients {Array.<module:model/ListXRPRippleTransactionsByBlockHashRIRecipients>} Represents an object of addresses that receive the transactions.
     * @param senders {Array.<module:model/ListXRPRippleTransactionsByBlockHashRISenders>} Represents an object of addresses that provide the funds.
     * @param sequence {Number} Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
     * @param status {String} Defines the status of the transaction.
     * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
     * @param transactionHash {String} Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
     * @param type {String} Defines the type of the transaction.
     * @param fee {module:model/ListXRPRippleTransactionsByBlockHashRIFee} 
     * @param offer {module:model/ListXRPRippleTransactionsByBlockHashRIOffer} 
     * @param receive {module:model/ListXRPRippleTransactionsByBlockHashRIReceive} 
     * @param value {module:model/ListXRPRippleTransactionsByBlockHashRIValue} 
     */
    constructor(index, minedInBlockHeight, recipients, senders, sequence, status, timestamp, transactionHash, type, fee, offer, receive, value) { 
        
        ListXRPRippleTransactionsByBlockHashRI.initialize(this, index, minedInBlockHeight, recipients, senders, sequence, status, timestamp, transactionHash, type, fee, offer, receive, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, index, minedInBlockHeight, recipients, senders, sequence, status, timestamp, transactionHash, type, fee, offer, receive, value) { 
        obj['index'] = index;
        obj['minedInBlockHeight'] = minedInBlockHeight;
        obj['recipients'] = recipients;
        obj['senders'] = senders;
        obj['sequence'] = sequence;
        obj['status'] = status;
        obj['timestamp'] = timestamp;
        obj['transactionHash'] = transactionHash;
        obj['type'] = type;
        obj['fee'] = fee;
        obj['offer'] = offer;
        obj['receive'] = receive;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>ListXRPRippleTransactionsByBlockHashRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListXRPRippleTransactionsByBlockHashRI} obj Optional instance to populate.
     * @return {module:model/ListXRPRippleTransactionsByBlockHashRI} The populated <code>ListXRPRippleTransactionsByBlockHashRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListXRPRippleTransactionsByBlockHashRI();

            if (data.hasOwnProperty('additionalData')) {
                obj['additionalData'] = ApiClient.convertToType(data['additionalData'], 'String');
            }
            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'Number');
            }
            if (data.hasOwnProperty('minedInBlockHeight')) {
                obj['minedInBlockHeight'] = ApiClient.convertToType(data['minedInBlockHeight'], 'Number');
            }
            if (data.hasOwnProperty('recipients')) {
                obj['recipients'] = ApiClient.convertToType(data['recipients'], [ListXRPRippleTransactionsByBlockHashRIRecipients]);
            }
            if (data.hasOwnProperty('senders')) {
                obj['senders'] = ApiClient.convertToType(data['senders'], [ListXRPRippleTransactionsByBlockHashRISenders]);
            }
            if (data.hasOwnProperty('sequence')) {
                obj['sequence'] = ApiClient.convertToType(data['sequence'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
            if (data.hasOwnProperty('transactionHash')) {
                obj['transactionHash'] = ApiClient.convertToType(data['transactionHash'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = ListXRPRippleTransactionsByBlockHashRIFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('offer')) {
                obj['offer'] = ListXRPRippleTransactionsByBlockHashRIOffer.constructFromObject(data['offer']);
            }
            if (data.hasOwnProperty('receive')) {
                obj['receive'] = ListXRPRippleTransactionsByBlockHashRIReceive.constructFromObject(data['receive']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ListXRPRippleTransactionsByBlockHashRIValue.constructFromObject(data['value']);
            }
        }
        return obj;
    }


}

/**
 * Represents any additional data that may be needed.
 * @member {String} additionalData
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['additionalData'] = undefined;

/**
 * Represents the index position of the transaction in the specific block.
 * @member {Number} index
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['index'] = undefined;

/**
 * Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
 * @member {Number} minedInBlockHeight
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['minedInBlockHeight'] = undefined;

/**
 * Represents an object of addresses that receive the transactions.
 * @member {Array.<module:model/ListXRPRippleTransactionsByBlockHashRIRecipients>} recipients
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['recipients'] = undefined;

/**
 * Represents an object of addresses that provide the funds.
 * @member {Array.<module:model/ListXRPRippleTransactionsByBlockHashRISenders>} senders
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['senders'] = undefined;

/**
 * Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
 * @member {Number} sequence
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['sequence'] = undefined;

/**
 * Defines the status of the transaction.
 * @member {String} status
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['status'] = undefined;

/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['timestamp'] = undefined;

/**
 * Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
 * @member {String} transactionHash
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['transactionHash'] = undefined;

/**
 * Defines the type of the transaction.
 * @member {String} type
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['type'] = undefined;

/**
 * @member {module:model/ListXRPRippleTransactionsByBlockHashRIFee} fee
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['fee'] = undefined;

/**
 * @member {module:model/ListXRPRippleTransactionsByBlockHashRIOffer} offer
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['offer'] = undefined;

/**
 * @member {module:model/ListXRPRippleTransactionsByBlockHashRIReceive} receive
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['receive'] = undefined;

/**
 * @member {module:model/ListXRPRippleTransactionsByBlockHashRIValue} value
 */
ListXRPRippleTransactionsByBlockHashRI.prototype['value'] = undefined;






export default ListXRPRippleTransactionsByBlockHashRI;

