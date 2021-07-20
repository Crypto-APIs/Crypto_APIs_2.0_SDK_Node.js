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

/**
 * The GetTransactionDetailsByTransactionIDRIBSEGasPrice model module.
 * @module model/GetTransactionDetailsByTransactionIDRIBSEGasPrice
 * @version 1.1.0
 */
class GetTransactionDetailsByTransactionIDRIBSEGasPrice {
    /**
     * Constructs a new <code>GetTransactionDetailsByTransactionIDRIBSEGasPrice</code>.
     * @alias module:model/GetTransactionDetailsByTransactionIDRIBSEGasPrice
     * @param amount {String} Represents the price offered to the miner to purchase this amount of gas.
     * @param unit {String} Defines the unit of the gas price amount, e.g. BTC, ETH, XRP.
     */
    constructor(amount, unit) { 
        
        GetTransactionDetailsByTransactionIDRIBSEGasPrice.initialize(this, amount, unit);
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
     * Constructs a <code>GetTransactionDetailsByTransactionIDRIBSEGasPrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDRIBSEGasPrice} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDRIBSEGasPrice} The populated <code>GetTransactionDetailsByTransactionIDRIBSEGasPrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransactionDetailsByTransactionIDRIBSEGasPrice();

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
GetTransactionDetailsByTransactionIDRIBSEGasPrice.prototype['amount'] = undefined;

/**
 * Defines the unit of the gas price amount, e.g. BTC, ETH, XRP.
 * @member {String} unit
 */
GetTransactionDetailsByTransactionIDRIBSEGasPrice.prototype['unit'] = undefined;






export default GetTransactionDetailsByTransactionIDRIBSEGasPrice;
