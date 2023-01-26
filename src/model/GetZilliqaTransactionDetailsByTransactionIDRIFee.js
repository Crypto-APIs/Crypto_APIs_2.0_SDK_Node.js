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
 * The GetZilliqaTransactionDetailsByTransactionIDRIFee model module.
 * @module model/GetZilliqaTransactionDetailsByTransactionIDRIFee
 * @version 1.12.0
 */
class GetZilliqaTransactionDetailsByTransactionIDRIFee {
    /**
     * Constructs a new <code>GetZilliqaTransactionDetailsByTransactionIDRIFee</code>.
     * Represents the transaction fee.
     * @alias module:model/GetZilliqaTransactionDetailsByTransactionIDRIFee
     * @param amount {String} Represents the amount of the transaction fee.
     * @param unit {String} Represents the unit of the transaction fee.
     */
    constructor(amount, unit) { 
        
        GetZilliqaTransactionDetailsByTransactionIDRIFee.initialize(this, amount, unit);
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
     * Constructs a <code>GetZilliqaTransactionDetailsByTransactionIDRIFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetZilliqaTransactionDetailsByTransactionIDRIFee} obj Optional instance to populate.
     * @return {module:model/GetZilliqaTransactionDetailsByTransactionIDRIFee} The populated <code>GetZilliqaTransactionDetailsByTransactionIDRIFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetZilliqaTransactionDetailsByTransactionIDRIFee();

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
 * Represents the amount of the transaction fee.
 * @member {String} amount
 */
GetZilliqaTransactionDetailsByTransactionIDRIFee.prototype['amount'] = undefined;

/**
 * Represents the unit of the transaction fee.
 * @member {String} unit
 */
GetZilliqaTransactionDetailsByTransactionIDRIFee.prototype['unit'] = undefined;






export default GetZilliqaTransactionDetailsByTransactionIDRIFee;

