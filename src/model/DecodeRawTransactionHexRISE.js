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

/**
 * The DecodeRawTransactionHexRISE model module.
 * @module model/DecodeRawTransactionHexRISE
 * @version 1.12.0
 */
class DecodeRawTransactionHexRISE {
    /**
     * Constructs a new <code>DecodeRawTransactionHexRISE</code>.
     * Ethereum
     * @alias module:model/DecodeRawTransactionHexRISE
     * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
     * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
     * @param recipient {String} The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
     * @param sender {String} Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
     * @param type {Number} Specifies the transaction type as one from three options: if response returns a `\"0\"` it means the raw transaction includes legacy transaction data, if it is `\"1\"` - includes access lists for EIP2930, and if it is `\"2\"` - EIP1559 data.
     */
    constructor(gasLimit, nonce, recipient, sender, type) { 
        
        DecodeRawTransactionHexRISE.initialize(this, gasLimit, nonce, recipient, sender, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gasLimit, nonce, recipient, sender, type) { 
        obj['gasLimit'] = gasLimit;
        obj['nonce'] = nonce;
        obj['recipient'] = recipient;
        obj['sender'] = sender;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>DecodeRawTransactionHexRISE</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISE} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISE} The populated <code>DecodeRawTransactionHexRISE</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecodeRawTransactionHexRISE();

            if (data.hasOwnProperty('approximateFee')) {
                obj['approximateFee'] = ApiClient.convertToType(data['approximateFee'], 'String');
            }
            if (data.hasOwnProperty('approximateMinimumRequiredFee')) {
                obj['approximateMinimumRequiredFee'] = ApiClient.convertToType(data['approximateMinimumRequiredFee'], 'String');
            }
            if (data.hasOwnProperty('gasLimit')) {
                obj['gasLimit'] = ApiClient.convertToType(data['gasLimit'], 'String');
            }
            if (data.hasOwnProperty('gasPaidForData')) {
                obj['gasPaidForData'] = ApiClient.convertToType(data['gasPaidForData'], 'String');
            }
            if (data.hasOwnProperty('gasPrice')) {
                obj['gasPrice'] = ApiClient.convertToType(data['gasPrice'], 'String');
            }
            if (data.hasOwnProperty('inputData')) {
                obj['inputData'] = ApiClient.convertToType(data['inputData'], 'String');
            }
            if (data.hasOwnProperty('maxFeePerGas')) {
                obj['maxFeePerGas'] = ApiClient.convertToType(data['maxFeePerGas'], 'String');
            }
            if (data.hasOwnProperty('maxFeePriorityPerGas')) {
                obj['maxFeePriorityPerGas'] = ApiClient.convertToType(data['maxFeePriorityPerGas'], 'String');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'Number');
            }
            if (data.hasOwnProperty('r')) {
                obj['r'] = ApiClient.convertToType(data['r'], 'String');
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
            }
            if (data.hasOwnProperty('s')) {
                obj['s'] = ApiClient.convertToType(data['s'], 'String');
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Number');
            }
            if (data.hasOwnProperty('v')) {
                obj['v'] = ApiClient.convertToType(data['v'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the approximate fee value. When isConfirmed is True - Defines the amount of the transaction fee When isConfirmed is False - For ETH-based blockchains this attribute represents the max fee value.
 * @member {String} approximateFee
 */
DecodeRawTransactionHexRISE.prototype['approximateFee'] = undefined;

/**
 * Defines the approximate minimum fee that is required for the transaction.
 * @member {String} approximateMinimumRequiredFee
 */
DecodeRawTransactionHexRISE.prototype['approximateMinimumRequiredFee'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
DecodeRawTransactionHexRISE.prototype['gasLimit'] = undefined;

/**
 * Represents the amount of gas paid for the data in the transaction.
 * @member {String} gasPaidForData
 */
DecodeRawTransactionHexRISE.prototype['gasPaidForData'] = undefined;

/**
 * Represents the price offered to the miner to purchase this amount of gas.
 * @member {String} gasPrice
 */
DecodeRawTransactionHexRISE.prototype['gasPrice'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
DecodeRawTransactionHexRISE.prototype['inputData'] = undefined;

/**
 * Defines the maximum amount that customer is willing to pay per unit of gas to get his transaction included in a block.
 * @member {String} maxFeePerGas
 */
DecodeRawTransactionHexRISE.prototype['maxFeePerGas'] = undefined;

/**
 * Represents determined by the user value that is paid directly to miners.
 * @member {String} maxFeePriorityPerGas
 */
DecodeRawTransactionHexRISE.prototype['maxFeePriorityPerGas'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
DecodeRawTransactionHexRISE.prototype['nonce'] = undefined;

/**
 * Represents output of an ECDSA signature.
 * @member {String} r
 */
DecodeRawTransactionHexRISE.prototype['r'] = undefined;

/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} recipient
 */
DecodeRawTransactionHexRISE.prototype['recipient'] = undefined;

/**
 * Represents output of an ECDSA signature.
 * @member {String} s
 */
DecodeRawTransactionHexRISE.prototype['s'] = undefined;

/**
 * Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
 * @member {String} sender
 */
DecodeRawTransactionHexRISE.prototype['sender'] = undefined;

/**
 * Specifies the transaction type as one from three options: if response returns a `\"0\"` it means the raw transaction includes legacy transaction data, if it is `\"1\"` - includes access lists for EIP2930, and if it is `\"2\"` - EIP1559 data.
 * @member {Number} type
 */
DecodeRawTransactionHexRISE.prototype['type'] = undefined;

/**
 * Defines the the recovery id.
 * @member {String} v
 */
DecodeRawTransactionHexRISE.prototype['v'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
DecodeRawTransactionHexRISE.prototype['value'] = undefined;






export default DecodeRawTransactionHexRISE;

