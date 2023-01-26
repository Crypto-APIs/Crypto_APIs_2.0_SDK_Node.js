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
 * The ListWalletTransactionsRIValue model module.
 * @module model/ListWalletTransactionsRIValue
 * @version 1.12.0
 */
class ListWalletTransactionsRIValue {
    /**
     * Constructs a new <code>ListWalletTransactionsRIValue</code>.
     * @alias module:model/ListWalletTransactionsRIValue
     * @param amount {String} Defines the transaction amount.
     * @param convertedAmount {String} Defines the converted amount of the transaction as a string.
     * @param exchangeRateUnit {String} Defines the exchange rate's unit.
     * @param symbol {String} Defines the unit of the transaction's amount.
     */
    constructor(amount, convertedAmount, exchangeRateUnit, symbol) { 
        
        ListWalletTransactionsRIValue.initialize(this, amount, convertedAmount, exchangeRateUnit, symbol);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, convertedAmount, exchangeRateUnit, symbol) { 
        obj['amount'] = amount;
        obj['convertedAmount'] = convertedAmount;
        obj['exchangeRateUnit'] = exchangeRateUnit;
        obj['symbol'] = symbol;
    }

    /**
     * Constructs a <code>ListWalletTransactionsRIValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListWalletTransactionsRIValue} obj Optional instance to populate.
     * @return {module:model/ListWalletTransactionsRIValue} The populated <code>ListWalletTransactionsRIValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListWalletTransactionsRIValue();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('convertedAmount')) {
                obj['convertedAmount'] = ApiClient.convertToType(data['convertedAmount'], 'String');
            }
            if (data.hasOwnProperty('exchangeRateUnit')) {
                obj['exchangeRateUnit'] = ApiClient.convertToType(data['exchangeRateUnit'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the transaction amount.
 * @member {String} amount
 */
ListWalletTransactionsRIValue.prototype['amount'] = undefined;

/**
 * Defines the converted amount of the transaction as a string.
 * @member {String} convertedAmount
 */
ListWalletTransactionsRIValue.prototype['convertedAmount'] = undefined;

/**
 * Defines the exchange rate's unit.
 * @member {String} exchangeRateUnit
 */
ListWalletTransactionsRIValue.prototype['exchangeRateUnit'] = undefined;

/**
 * Defines the unit of the transaction's amount.
 * @member {String} symbol
 */
ListWalletTransactionsRIValue.prototype['symbol'] = undefined;






export default ListWalletTransactionsRIValue;

