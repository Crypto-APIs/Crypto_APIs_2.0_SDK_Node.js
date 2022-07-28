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
 * The ListWalletTransactionsRIFungibleTokensInner model module.
 * @module model/ListWalletTransactionsRIFungibleTokensInner
 * @version 1.7.0
 */
class ListWalletTransactionsRIFungibleTokensInner {
    /**
     * Constructs a new <code>ListWalletTransactionsRIFungibleTokensInner</code>.
     * @alias module:model/ListWalletTransactionsRIFungibleTokensInner
     * @param amount {String} Defines the amount of the fungible tokens.
     * @param convertedAmount {String} Defines the tokens' converted amount value.
     * @param exchangeRateUnit {String} Represents token's exchange rate unit.
     * @param name {String} Defines the token's name as a string.
     * @param recipient {String} The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one
     * @param sender {String} Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
     * @param symbol {String} Defines the symbol of the fungible tokens.
     * @param tokenDecimals {Number} Defines the decimals of the token, i.e. the number of digits that come after the decimal coma of the token.
     * @param type {String} Defines the specific token type.
     */
    constructor(amount, convertedAmount, exchangeRateUnit, name, recipient, sender, symbol, tokenDecimals, type) { 
        
        ListWalletTransactionsRIFungibleTokensInner.initialize(this, amount, convertedAmount, exchangeRateUnit, name, recipient, sender, symbol, tokenDecimals, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, convertedAmount, exchangeRateUnit, name, recipient, sender, symbol, tokenDecimals, type) { 
        obj['amount'] = amount;
        obj['convertedAmount'] = convertedAmount;
        obj['exchangeRateUnit'] = exchangeRateUnit;
        obj['name'] = name;
        obj['recipient'] = recipient;
        obj['sender'] = sender;
        obj['symbol'] = symbol;
        obj['tokenDecimals'] = tokenDecimals;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>ListWalletTransactionsRIFungibleTokensInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListWalletTransactionsRIFungibleTokensInner} obj Optional instance to populate.
     * @return {module:model/ListWalletTransactionsRIFungibleTokensInner} The populated <code>ListWalletTransactionsRIFungibleTokensInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListWalletTransactionsRIFungibleTokensInner();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
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
            if (data.hasOwnProperty('tokenDecimals')) {
                obj['tokenDecimals'] = ApiClient.convertToType(data['tokenDecimals'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the amount of the fungible tokens.
 * @member {String} amount
 */
ListWalletTransactionsRIFungibleTokensInner.prototype['amount'] = undefined;

/**
 * Defines the tokens' converted amount value.
 * @member {String} convertedAmount
 */
ListWalletTransactionsRIFungibleTokensInner.prototype['convertedAmount'] = undefined;

/**
 * Represents token's exchange rate unit.
 * @member {String} exchangeRateUnit
 */
ListWalletTransactionsRIFungibleTokensInner.prototype['exchangeRateUnit'] = undefined;

/**
 * Defines the token's name as a string.
 * @member {String} name
 */
ListWalletTransactionsRIFungibleTokensInner.prototype['name'] = undefined;

/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one
 * @member {String} recipient
 */
ListWalletTransactionsRIFungibleTokensInner.prototype['recipient'] = undefined;

/**
 * Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
 * @member {String} sender
 */
ListWalletTransactionsRIFungibleTokensInner.prototype['sender'] = undefined;

/**
 * Defines the symbol of the fungible tokens.
 * @member {String} symbol
 */
ListWalletTransactionsRIFungibleTokensInner.prototype['symbol'] = undefined;

/**
 * Defines the decimals of the token, i.e. the number of digits that come after the decimal coma of the token.
 * @member {Number} tokenDecimals
 */
ListWalletTransactionsRIFungibleTokensInner.prototype['tokenDecimals'] = undefined;

/**
 * Defines the specific token type.
 * @member {String} type
 */
ListWalletTransactionsRIFungibleTokensInner.prototype['type'] = undefined;






export default ListWalletTransactionsRIFungibleTokensInner;

