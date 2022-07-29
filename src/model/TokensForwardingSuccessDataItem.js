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
import TokensForwardingSuccessToken from './TokensForwardingSuccessToken';

/**
 * The TokensForwardingSuccessDataItem model module.
 * @module model/TokensForwardingSuccessDataItem
 * @version 1.7.1
 */
class TokensForwardingSuccessDataItem {
    /**
     * Constructs a new <code>TokensForwardingSuccessDataItem</code>.
     * Defines an &#x60;item&#x60; as one result.
     * @alias module:model/TokensForwardingSuccessDataItem
     * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param fromAddress {String} Represents the hash of the address that provides the tokens.
     * @param toAddress {String} Represents the hash of the address to forward the tokens to.
     * @param spentFeesAmount {String} Represents the amount of the fee spent for the tokens to be forwarded.
     * @param spentFeesUnit {String} Represents the unit of the fee spent for the tokens to be forwarded, e.g. BTC.
     * @param triggerTransactionId {String} Defines the unique Transaction ID that triggered the token forwarding.
     * @param forwardingTransactionId {String} Defines the unique Transaction ID that forwarded the tokens.
     * @param tokenType {module:model/TokensForwardingSuccessDataItem.TokenTypeEnum} Defines the type of token sent with the transaction, e.g. ERC 20.
     * @param token {module:model/TokensForwardingSuccessToken} 
     */
    constructor(blockchain, network, fromAddress, toAddress, spentFeesAmount, spentFeesUnit, triggerTransactionId, forwardingTransactionId, tokenType, token) { 
        
        TokensForwardingSuccessDataItem.initialize(this, blockchain, network, fromAddress, toAddress, spentFeesAmount, spentFeesUnit, triggerTransactionId, forwardingTransactionId, tokenType, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockchain, network, fromAddress, toAddress, spentFeesAmount, spentFeesUnit, triggerTransactionId, forwardingTransactionId, tokenType, token) { 
        obj['blockchain'] = blockchain;
        obj['network'] = network;
        obj['fromAddress'] = fromAddress;
        obj['toAddress'] = toAddress;
        obj['spentFeesAmount'] = spentFeesAmount;
        obj['spentFeesUnit'] = spentFeesUnit;
        obj['triggerTransactionId'] = triggerTransactionId;
        obj['forwardingTransactionId'] = forwardingTransactionId;
        obj['tokenType'] = tokenType;
        obj['token'] = token;
    }

    /**
     * Constructs a <code>TokensForwardingSuccessDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokensForwardingSuccessDataItem} obj Optional instance to populate.
     * @return {module:model/TokensForwardingSuccessDataItem} The populated <code>TokensForwardingSuccessDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokensForwardingSuccessDataItem();

            if (data.hasOwnProperty('blockchain')) {
                obj['blockchain'] = ApiClient.convertToType(data['blockchain'], 'String');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
            if (data.hasOwnProperty('fromAddress')) {
                obj['fromAddress'] = ApiClient.convertToType(data['fromAddress'], 'String');
            }
            if (data.hasOwnProperty('toAddress')) {
                obj['toAddress'] = ApiClient.convertToType(data['toAddress'], 'String');
            }
            if (data.hasOwnProperty('spentFeesAmount')) {
                obj['spentFeesAmount'] = ApiClient.convertToType(data['spentFeesAmount'], 'String');
            }
            if (data.hasOwnProperty('spentFeesUnit')) {
                obj['spentFeesUnit'] = ApiClient.convertToType(data['spentFeesUnit'], 'String');
            }
            if (data.hasOwnProperty('triggerTransactionId')) {
                obj['triggerTransactionId'] = ApiClient.convertToType(data['triggerTransactionId'], 'String');
            }
            if (data.hasOwnProperty('forwardingTransactionId')) {
                obj['forwardingTransactionId'] = ApiClient.convertToType(data['forwardingTransactionId'], 'String');
            }
            if (data.hasOwnProperty('tokenType')) {
                obj['tokenType'] = ApiClient.convertToType(data['tokenType'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = TokensForwardingSuccessToken.constructFromObject(data['token']);
            }
        }
        return obj;
    }


}

/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
TokensForwardingSuccessDataItem.prototype['blockchain'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
 * @member {String} network
 */
TokensForwardingSuccessDataItem.prototype['network'] = undefined;

/**
 * Represents the hash of the address that provides the tokens.
 * @member {String} fromAddress
 */
TokensForwardingSuccessDataItem.prototype['fromAddress'] = undefined;

/**
 * Represents the hash of the address to forward the tokens to.
 * @member {String} toAddress
 */
TokensForwardingSuccessDataItem.prototype['toAddress'] = undefined;

/**
 * Represents the amount of the fee spent for the tokens to be forwarded.
 * @member {String} spentFeesAmount
 */
TokensForwardingSuccessDataItem.prototype['spentFeesAmount'] = undefined;

/**
 * Represents the unit of the fee spent for the tokens to be forwarded, e.g. BTC.
 * @member {String} spentFeesUnit
 */
TokensForwardingSuccessDataItem.prototype['spentFeesUnit'] = undefined;

/**
 * Defines the unique Transaction ID that triggered the token forwarding.
 * @member {String} triggerTransactionId
 */
TokensForwardingSuccessDataItem.prototype['triggerTransactionId'] = undefined;

/**
 * Defines the unique Transaction ID that forwarded the tokens.
 * @member {String} forwardingTransactionId
 */
TokensForwardingSuccessDataItem.prototype['forwardingTransactionId'] = undefined;

/**
 * Defines the type of token sent with the transaction, e.g. ERC 20.
 * @member {module:model/TokensForwardingSuccessDataItem.TokenTypeEnum} tokenType
 */
TokensForwardingSuccessDataItem.prototype['tokenType'] = undefined;

/**
 * @member {module:model/TokensForwardingSuccessToken} token
 */
TokensForwardingSuccessDataItem.prototype['token'] = undefined;





/**
 * Allowed values for the <code>tokenType</code> property.
 * @enum {String}
 * @readonly
 */
TokensForwardingSuccessDataItem['TokenTypeEnum'] = {

    /**
     * value: "ERC-20"
     * @const
     */
    "ERC-20": "ERC-20",

    /**
     * value: "ERC-721"
     * @const
     */
    "ERC-721": "ERC-721",

    /**
     * value: "OMNI"
     * @const
     */
    "OMNI": "OMNI"
};



export default TokensForwardingSuccessDataItem;

