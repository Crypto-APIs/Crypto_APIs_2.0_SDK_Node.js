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
 * The ListUnconfirmedTokensTransfersByAddressRI model module.
 * @module model/ListUnconfirmedTokensTransfersByAddressRI
 * @version 1.7.0
 */
class ListUnconfirmedTokensTransfersByAddressRI {
    /**
     * Constructs a new <code>ListUnconfirmedTokensTransfersByAddressRI</code>.
     * @alias module:model/ListUnconfirmedTokensTransfersByAddressRI
     * @param contractAddress {String} Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
     * @param recipientAddress {String} Defines the address to which the recipient receives the transferred tokens.
     * @param senderAddress {String} Defines the address from which the sender transfers tokens.
     * @param tokenDecimals {Number} Defines the decimals of the token, i.e. the number of digits that come after the decimal coma of the token.
     * @param tokenName {String} Defines the token's name as a string.
     * @param tokenSymbol {String} Defines the token symbol by which the token contract is known. It is usually 3-4 characters in length.
     * @param tokenType {String} Defines the specific token type.
     * @param transactionHash {String} Represents the hash of the transaction, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param transactionTimestamp {Number} Defines the specific time/date when the transaction was created in Unix Timestamp.
     */
    constructor(contractAddress, recipientAddress, senderAddress, tokenDecimals, tokenName, tokenSymbol, tokenType, transactionHash, transactionTimestamp) { 
        
        ListUnconfirmedTokensTransfersByAddressRI.initialize(this, contractAddress, recipientAddress, senderAddress, tokenDecimals, tokenName, tokenSymbol, tokenType, transactionHash, transactionTimestamp);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contractAddress, recipientAddress, senderAddress, tokenDecimals, tokenName, tokenSymbol, tokenType, transactionHash, transactionTimestamp) { 
        obj['contractAddress'] = contractAddress;
        obj['recipientAddress'] = recipientAddress;
        obj['senderAddress'] = senderAddress;
        obj['tokenDecimals'] = tokenDecimals;
        obj['tokenName'] = tokenName;
        obj['tokenSymbol'] = tokenSymbol;
        obj['tokenType'] = tokenType;
        obj['transactionHash'] = transactionHash;
        obj['transactionTimestamp'] = transactionTimestamp;
    }

    /**
     * Constructs a <code>ListUnconfirmedTokensTransfersByAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnconfirmedTokensTransfersByAddressRI} obj Optional instance to populate.
     * @return {module:model/ListUnconfirmedTokensTransfersByAddressRI} The populated <code>ListUnconfirmedTokensTransfersByAddressRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListUnconfirmedTokensTransfersByAddressRI();

            if (data.hasOwnProperty('contractAddress')) {
                obj['contractAddress'] = ApiClient.convertToType(data['contractAddress'], 'String');
            }
            if (data.hasOwnProperty('recipientAddress')) {
                obj['recipientAddress'] = ApiClient.convertToType(data['recipientAddress'], 'String');
            }
            if (data.hasOwnProperty('senderAddress')) {
                obj['senderAddress'] = ApiClient.convertToType(data['senderAddress'], 'String');
            }
            if (data.hasOwnProperty('tokenDecimals')) {
                obj['tokenDecimals'] = ApiClient.convertToType(data['tokenDecimals'], 'Number');
            }
            if (data.hasOwnProperty('tokenId')) {
                obj['tokenId'] = ApiClient.convertToType(data['tokenId'], 'String');
            }
            if (data.hasOwnProperty('tokenName')) {
                obj['tokenName'] = ApiClient.convertToType(data['tokenName'], 'String');
            }
            if (data.hasOwnProperty('tokenSymbol')) {
                obj['tokenSymbol'] = ApiClient.convertToType(data['tokenSymbol'], 'String');
            }
            if (data.hasOwnProperty('tokenType')) {
                obj['tokenType'] = ApiClient.convertToType(data['tokenType'], 'String');
            }
            if (data.hasOwnProperty('tokensAmount')) {
                obj['tokensAmount'] = ApiClient.convertToType(data['tokensAmount'], 'String');
            }
            if (data.hasOwnProperty('transactionHash')) {
                obj['transactionHash'] = ApiClient.convertToType(data['transactionHash'], 'String');
            }
            if (data.hasOwnProperty('transactionTimestamp')) {
                obj['transactionTimestamp'] = ApiClient.convertToType(data['transactionTimestamp'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
 * @member {String} contractAddress
 */
ListUnconfirmedTokensTransfersByAddressRI.prototype['contractAddress'] = undefined;

/**
 * Defines the address to which the recipient receives the transferred tokens.
 * @member {String} recipientAddress
 */
ListUnconfirmedTokensTransfersByAddressRI.prototype['recipientAddress'] = undefined;

/**
 * Defines the address from which the sender transfers tokens.
 * @member {String} senderAddress
 */
ListUnconfirmedTokensTransfersByAddressRI.prototype['senderAddress'] = undefined;

/**
 * Defines the decimals of the token, i.e. the number of digits that come after the decimal coma of the token.
 * @member {Number} tokenDecimals
 */
ListUnconfirmedTokensTransfersByAddressRI.prototype['tokenDecimals'] = undefined;

/**
 * Represents the unique token identifier.
 * @member {String} tokenId
 */
ListUnconfirmedTokensTransfersByAddressRI.prototype['tokenId'] = undefined;

/**
 * Defines the token's name as a string.
 * @member {String} tokenName
 */
ListUnconfirmedTokensTransfersByAddressRI.prototype['tokenName'] = undefined;

/**
 * Defines the token symbol by which the token contract is known. It is usually 3-4 characters in length.
 * @member {String} tokenSymbol
 */
ListUnconfirmedTokensTransfersByAddressRI.prototype['tokenSymbol'] = undefined;

/**
 * Defines the specific token type.
 * @member {String} tokenType
 */
ListUnconfirmedTokensTransfersByAddressRI.prototype['tokenType'] = undefined;

/**
 * Defines the token amount of the transfer.
 * @member {String} tokensAmount
 */
ListUnconfirmedTokensTransfersByAddressRI.prototype['tokensAmount'] = undefined;

/**
 * Represents the hash of the transaction, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} transactionHash
 */
ListUnconfirmedTokensTransfersByAddressRI.prototype['transactionHash'] = undefined;

/**
 * Defines the specific time/date when the transaction was created in Unix Timestamp.
 * @member {Number} transactionTimestamp
 */
ListUnconfirmedTokensTransfersByAddressRI.prototype['transactionTimestamp'] = undefined;






export default ListUnconfirmedTokensTransfersByAddressRI;

