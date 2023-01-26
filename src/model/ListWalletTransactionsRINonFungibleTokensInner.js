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
 * The ListWalletTransactionsRINonFungibleTokensInner model module.
 * @module model/ListWalletTransactionsRINonFungibleTokensInner
 * @version 1.12.0
 */
class ListWalletTransactionsRINonFungibleTokensInner {
    /**
     * Constructs a new <code>ListWalletTransactionsRINonFungibleTokensInner</code>.
     * @alias module:model/ListWalletTransactionsRINonFungibleTokensInner
     * @param convertedAmount {String} Defines the tokens' converted amount value.
     * @param exchangeRateUnit {String} Represents token's exchange rate unit.
     * @param name {String} Defines the token's name as a string.
     * @param recipient {String} Defines the address to which the recipient receives the transferred tokens.
     * @param sender {String} Defines the address from which the sender transfers tokens.
     * @param symbol {String} Defines the symbol of the non-fungible tokens.
     * @param tokenId {String} Represents tokens' unique identifier.
     * @param type {String} Defines the specific token type.
     */
    constructor(convertedAmount, exchangeRateUnit, name, recipient, sender, symbol, tokenId, type) { 
        
        ListWalletTransactionsRINonFungibleTokensInner.initialize(this, convertedAmount, exchangeRateUnit, name, recipient, sender, symbol, tokenId, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, convertedAmount, exchangeRateUnit, name, recipient, sender, symbol, tokenId, type) { 
        obj['convertedAmount'] = convertedAmount;
        obj['exchangeRateUnit'] = exchangeRateUnit;
        obj['name'] = name;
        obj['recipient'] = recipient;
        obj['sender'] = sender;
        obj['symbol'] = symbol;
        obj['tokenId'] = tokenId;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>ListWalletTransactionsRINonFungibleTokensInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListWalletTransactionsRINonFungibleTokensInner} obj Optional instance to populate.
     * @return {module:model/ListWalletTransactionsRINonFungibleTokensInner} The populated <code>ListWalletTransactionsRINonFungibleTokensInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListWalletTransactionsRINonFungibleTokensInner();

            if (data.hasOwnProperty('convertedAmount')) {
                obj['convertedAmount'] = ApiClient.convertToType(data['convertedAmount'], 'String');
            }
            if (data.hasOwnProperty('exchangeRateUnit')) {
                obj['exchangeRateUnit'] = ApiClient.convertToType(data['exchangeRateUnit'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('tokenId')) {
                obj['tokenId'] = ApiClient.convertToType(data['tokenId'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the tokens' converted amount value.
 * @member {String} convertedAmount
 */
ListWalletTransactionsRINonFungibleTokensInner.prototype['convertedAmount'] = undefined;

/**
 * Represents token's exchange rate unit.
 * @member {String} exchangeRateUnit
 */
ListWalletTransactionsRINonFungibleTokensInner.prototype['exchangeRateUnit'] = undefined;

/**
 * Defines the token's name as a string.
 * @member {String} name
 */
ListWalletTransactionsRINonFungibleTokensInner.prototype['name'] = undefined;

/**
 * Defines the address to which the recipient receives the transferred tokens.
 * @member {String} recipient
 */
ListWalletTransactionsRINonFungibleTokensInner.prototype['recipient'] = undefined;

/**
 * Defines the address from which the sender transfers tokens.
 * @member {String} sender
 */
ListWalletTransactionsRINonFungibleTokensInner.prototype['sender'] = undefined;

/**
 * Defines the symbol of the non-fungible tokens.
 * @member {String} symbol
 */
ListWalletTransactionsRINonFungibleTokensInner.prototype['symbol'] = undefined;

/**
 * Represents tokens' unique identifier.
 * @member {String} tokenId
 */
ListWalletTransactionsRINonFungibleTokensInner.prototype['tokenId'] = undefined;

/**
 * Defines the specific token type.
 * @member {String} type
 */
ListWalletTransactionsRINonFungibleTokensInner.prototype['type'] = undefined;






export default ListWalletTransactionsRINonFungibleTokensInner;

