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
import GetWalletTransactionDetailsByTransactionIDRIBS from './GetWalletTransactionDetailsByTransactionIDRIBS';
import GetWalletTransactionDetailsByTransactionIDRIFee from './GetWalletTransactionDetailsByTransactionIDRIFee';
import GetWalletTransactionDetailsByTransactionIDRIRecipientsInner from './GetWalletTransactionDetailsByTransactionIDRIRecipientsInner';
import GetWalletTransactionDetailsByTransactionIDRISendersInner from './GetWalletTransactionDetailsByTransactionIDRISendersInner';

/**
 * The GetWalletTransactionDetailsByTransactionIDRI model module.
 * @module model/GetWalletTransactionDetailsByTransactionIDRI
 * @version 1.11.0
 */
class GetWalletTransactionDetailsByTransactionIDRI {
    /**
     * Constructs a new <code>GetWalletTransactionDetailsByTransactionIDRI</code>.
     * @alias module:model/GetWalletTransactionDetailsByTransactionIDRI
     * @param isConfirmed {Boolean} Represents the state of the transaction whether it is confirmed or not confirmed.
     * @param transactionId {String} Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
     * @param index {Number} Represents the index position of the transaction in the specific block.
     * @param recipients {Array.<module:model/GetWalletTransactionDetailsByTransactionIDRIRecipientsInner>} Object Array representation of transaction receivers
     * @param senders {Array.<module:model/GetWalletTransactionDetailsByTransactionIDRISendersInner>} String representation of the transaction from address
     * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
     * @param transactionHash {String} Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
     * @param fee {module:model/GetWalletTransactionDetailsByTransactionIDRIFee} 
     * @param blockchainSpecific {module:model/GetWalletTransactionDetailsByTransactionIDRIBS} 
     */
    constructor(isConfirmed, transactionId, index, recipients, senders, timestamp, transactionHash, fee, blockchainSpecific) { 
        
        GetWalletTransactionDetailsByTransactionIDRI.initialize(this, isConfirmed, transactionId, index, recipients, senders, timestamp, transactionHash, fee, blockchainSpecific);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, isConfirmed, transactionId, index, recipients, senders, timestamp, transactionHash, fee, blockchainSpecific) { 
        obj['isConfirmed'] = isConfirmed;
        obj['transactionId'] = transactionId;
        obj['index'] = index;
        obj['recipients'] = recipients;
        obj['senders'] = senders;
        obj['timestamp'] = timestamp;
        obj['transactionHash'] = transactionHash;
        obj['fee'] = fee;
        obj['blockchainSpecific'] = blockchainSpecific;
    }

    /**
     * Constructs a <code>GetWalletTransactionDetailsByTransactionIDRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWalletTransactionDetailsByTransactionIDRI} obj Optional instance to populate.
     * @return {module:model/GetWalletTransactionDetailsByTransactionIDRI} The populated <code>GetWalletTransactionDetailsByTransactionIDRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetWalletTransactionDetailsByTransactionIDRI();

            if (data.hasOwnProperty('isConfirmed')) {
                obj['isConfirmed'] = ApiClient.convertToType(data['isConfirmed'], 'Boolean');
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
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
                obj['recipients'] = ApiClient.convertToType(data['recipients'], [GetWalletTransactionDetailsByTransactionIDRIRecipientsInner]);
            }
            if (data.hasOwnProperty('senders')) {
                obj['senders'] = ApiClient.convertToType(data['senders'], [GetWalletTransactionDetailsByTransactionIDRISendersInner]);
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
            if (data.hasOwnProperty('transactionHash')) {
                obj['transactionHash'] = ApiClient.convertToType(data['transactionHash'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = GetWalletTransactionDetailsByTransactionIDRIFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('blockchainSpecific')) {
                obj['blockchainSpecific'] = GetWalletTransactionDetailsByTransactionIDRIBS.constructFromObject(data['blockchainSpecific']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetWalletTransactionDetailsByTransactionIDRI</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetWalletTransactionDetailsByTransactionIDRI</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GetWalletTransactionDetailsByTransactionIDRI.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['transactionId'] && !(typeof data['transactionId'] === 'string' || data['transactionId'] instanceof String)) {
            throw new Error("Expected the field `transactionId` to be a primitive type in the JSON string but got " + data['transactionId']);
        }
        // ensure the json data is a string
        if (data['minedInBlockHash'] && !(typeof data['minedInBlockHash'] === 'string' || data['minedInBlockHash'] instanceof String)) {
            throw new Error("Expected the field `minedInBlockHash` to be a primitive type in the JSON string but got " + data['minedInBlockHash']);
        }
        if (data['recipients']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['recipients'])) {
                throw new Error("Expected the field `recipients` to be an array in the JSON data but got " + data['recipients']);
            }
            // validate the optional field `recipients` (array)
            for (const item of data['recipients']) {
                GetWalletTransactionDetailsByTransactionIDRIRecipientsInner.validateJsonObject(item);
            };
        }
        if (data['senders']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['senders'])) {
                throw new Error("Expected the field `senders` to be an array in the JSON data but got " + data['senders']);
            }
            // validate the optional field `senders` (array)
            for (const item of data['senders']) {
                GetWalletTransactionDetailsByTransactionIDRISendersInner.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['transactionHash'] && !(typeof data['transactionHash'] === 'string' || data['transactionHash'] instanceof String)) {
            throw new Error("Expected the field `transactionHash` to be a primitive type in the JSON string but got " + data['transactionHash']);
        }
        // validate the optional field `fee`
        if (data['fee']) { // data not null
          GetWalletTransactionDetailsByTransactionIDRIFee.validateJSON(data['fee']);
        }
        // validate the optional field `blockchainSpecific`
        if (data['blockchainSpecific']) { // data not null
          GetWalletTransactionDetailsByTransactionIDRIBS.validateJSON(data['blockchainSpecific']);
        }

        return true;
    }


}

GetWalletTransactionDetailsByTransactionIDRI.RequiredProperties = ["isConfirmed", "transactionId", "index", "recipients", "senders", "timestamp", "transactionHash", "fee", "blockchainSpecific"];

/**
 * Represents the state of the transaction whether it is confirmed or not confirmed.
 * @member {Boolean} isConfirmed
 */
GetWalletTransactionDetailsByTransactionIDRI.prototype['isConfirmed'] = undefined;

/**
 * Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
 * @member {String} transactionId
 */
GetWalletTransactionDetailsByTransactionIDRI.prototype['transactionId'] = undefined;

/**
 * Represents the index position of the transaction in the specific block.
 * @member {Number} index
 */
GetWalletTransactionDetailsByTransactionIDRI.prototype['index'] = undefined;

/**
 * Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */
GetWalletTransactionDetailsByTransactionIDRI.prototype['minedInBlockHash'] = undefined;

/**
 * Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
 * @member {Number} minedInBlockHeight
 */
GetWalletTransactionDetailsByTransactionIDRI.prototype['minedInBlockHeight'] = undefined;

/**
 * Object Array representation of transaction receivers
 * @member {Array.<module:model/GetWalletTransactionDetailsByTransactionIDRIRecipientsInner>} recipients
 */
GetWalletTransactionDetailsByTransactionIDRI.prototype['recipients'] = undefined;

/**
 * String representation of the transaction from address
 * @member {Array.<module:model/GetWalletTransactionDetailsByTransactionIDRISendersInner>} senders
 */
GetWalletTransactionDetailsByTransactionIDRI.prototype['senders'] = undefined;

/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */
GetWalletTransactionDetailsByTransactionIDRI.prototype['timestamp'] = undefined;

/**
 * Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
 * @member {String} transactionHash
 */
GetWalletTransactionDetailsByTransactionIDRI.prototype['transactionHash'] = undefined;

/**
 * @member {module:model/GetWalletTransactionDetailsByTransactionIDRIFee} fee
 */
GetWalletTransactionDetailsByTransactionIDRI.prototype['fee'] = undefined;

/**
 * @member {module:model/GetWalletTransactionDetailsByTransactionIDRIBS} blockchainSpecific
 */
GetWalletTransactionDetailsByTransactionIDRI.prototype['blockchainSpecific'] = undefined;






export default GetWalletTransactionDetailsByTransactionIDRI;

