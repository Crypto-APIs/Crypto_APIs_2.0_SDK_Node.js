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
 * The GetWalletTransactionDetailsByTransactionIDRIFee model module.
 * @module model/GetWalletTransactionDetailsByTransactionIDRIFee
 * @version 1.7.0
 */
class GetWalletTransactionDetailsByTransactionIDRIFee {
    /**
     * Constructs a new <code>GetWalletTransactionDetailsByTransactionIDRIFee</code>.
     * @alias module:model/GetWalletTransactionDetailsByTransactionIDRIFee
     * @param amount {String} When isConfirmed is True - Defines the amount of the transaction fee  When isConfirmed is False - For ETH-based blockchains this attribute represents the max fee value.
     * @param unit {String} 
     */
    constructor(amount, unit) { 
        
        GetWalletTransactionDetailsByTransactionIDRIFee.initialize(this, amount, unit);
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
     * Constructs a <code>GetWalletTransactionDetailsByTransactionIDRIFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWalletTransactionDetailsByTransactionIDRIFee} obj Optional instance to populate.
     * @return {module:model/GetWalletTransactionDetailsByTransactionIDRIFee} The populated <code>GetWalletTransactionDetailsByTransactionIDRIFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetWalletTransactionDetailsByTransactionIDRIFee();

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
 * When isConfirmed is True - Defines the amount of the transaction fee  When isConfirmed is False - For ETH-based blockchains this attribute represents the max fee value.
 * @member {String} amount
 */
GetWalletTransactionDetailsByTransactionIDRIFee.prototype['amount'] = undefined;

/**
 * @member {String} unit
 */
GetWalletTransactionDetailsByTransactionIDRIFee.prototype['unit'] = undefined;






export default GetWalletTransactionDetailsByTransactionIDRIFee;

