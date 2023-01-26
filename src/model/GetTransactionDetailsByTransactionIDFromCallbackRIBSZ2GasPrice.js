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
 * The GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice model module.
 * @module model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice
 * @version 1.12.0
 */
class GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice {
    /**
     * Constructs a new <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice</code>.
     * @alias module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice
     * @param amount {Number} Defines the price of the gas.
     * @param unit {String} Defines the unit of the gas price amount, e.g. BTC, ETH, XRP.
     */
    constructor(amount, unit) { 
        
        GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice.initialize(this, amount, unit);
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
     * Constructs a <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice} The populated <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the price of the gas.
 * @member {Number} amount
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice.prototype['amount'] = undefined;

/**
 * Defines the unit of the gas price amount, e.g. BTC, ETH, XRP.
 * @member {String} unit
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice.prototype['unit'] = undefined;






export default GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice;

