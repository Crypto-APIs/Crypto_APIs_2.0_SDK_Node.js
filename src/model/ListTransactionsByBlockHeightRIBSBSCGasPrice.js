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
 * The ListTransactionsByBlockHeightRIBSBSCGasPrice model module.
 * @module model/ListTransactionsByBlockHeightRIBSBSCGasPrice
 * @version 1.7.1
 */
class ListTransactionsByBlockHeightRIBSBSCGasPrice {
    /**
     * Constructs a new <code>ListTransactionsByBlockHeightRIBSBSCGasPrice</code>.
     * @alias module:model/ListTransactionsByBlockHeightRIBSBSCGasPrice
     * @param amount {String} Represents the price offered to the miner to purchase this amount of gas.
     * @param unit {String} Defines the unit of the gas price amount, e.g. BTC, ETH, XRP.
     */
    constructor(amount, unit) { 
        
        ListTransactionsByBlockHeightRIBSBSCGasPrice.initialize(this, amount, unit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, unit) { 
        obj['amount'] = amount;
        obj['unit'] = unit;
    }

    /**
     * Constructs a <code>ListTransactionsByBlockHeightRIBSBSCGasPrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightRIBSBSCGasPrice} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightRIBSBSCGasPrice} The populated <code>ListTransactionsByBlockHeightRIBSBSCGasPrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTransactionsByBlockHeightRIBSBSCGasPrice();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the price offered to the miner to purchase this amount of gas.
 * @member {String} amount
 */
ListTransactionsByBlockHeightRIBSBSCGasPrice.prototype['amount'] = undefined;

/**
 * Defines the unit of the gas price amount, e.g. BTC, ETH, XRP.
 * @member {String} unit
 */
ListTransactionsByBlockHeightRIBSBSCGasPrice.prototype['unit'] = undefined;






export default ListTransactionsByBlockHeightRIBSBSCGasPrice;

