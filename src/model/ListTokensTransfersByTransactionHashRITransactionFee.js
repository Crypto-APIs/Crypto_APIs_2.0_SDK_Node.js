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
 * The ListTokensTransfersByTransactionHashRITransactionFee model module.
 * @module model/ListTokensTransfersByTransactionHashRITransactionFee
 * @version 1.5.0
 */
class ListTokensTransfersByTransactionHashRITransactionFee {
    /**
     * Constructs a new <code>ListTokensTransfersByTransactionHashRITransactionFee</code>.
     * @alias module:model/ListTokensTransfersByTransactionHashRITransactionFee
     * @param amount {String} Represents the total fee of a transaction which includes token transfers.
     * @param unit {String} Represents the unit of the fee.
     */
    constructor(amount, unit) { 
        
        ListTokensTransfersByTransactionHashRITransactionFee.initialize(this, amount, unit);
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
     * Constructs a <code>ListTokensTransfersByTransactionHashRITransactionFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTokensTransfersByTransactionHashRITransactionFee} obj Optional instance to populate.
     * @return {module:model/ListTokensTransfersByTransactionHashRITransactionFee} The populated <code>ListTokensTransfersByTransactionHashRITransactionFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTokensTransfersByTransactionHashRITransactionFee();

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
 * Represents the total fee of a transaction which includes token transfers.
 * @member {String} amount
 */
ListTokensTransfersByTransactionHashRITransactionFee.prototype['amount'] = undefined;

/**
 * Represents the unit of the fee.
 * @member {String} unit
 */
ListTokensTransfersByTransactionHashRITransactionFee.prototype['unit'] = undefined;






export default ListTokensTransfersByTransactionHashRITransactionFee;
