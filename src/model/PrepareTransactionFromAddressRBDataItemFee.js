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
 * The PrepareTransactionFromAddressRBDataItemFee model module.
 * @module model/PrepareTransactionFromAddressRBDataItemFee
 * @version 1.12.0
 */
class PrepareTransactionFromAddressRBDataItemFee {
    /**
     * Constructs a new <code>PrepareTransactionFromAddressRBDataItemFee</code>.
     * Defines the amount of the transaction fee.
     * @alias module:model/PrepareTransactionFromAddressRBDataItemFee
     * @param priority {module:model/PrepareTransactionFromAddressRBDataItemFee.PriorityEnum} Enum representation of the fee priority
     */
    constructor(priority) { 
        
        PrepareTransactionFromAddressRBDataItemFee.initialize(this, priority);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, priority) { 
        obj['priority'] = priority;
    }

    /**
     * Constructs a <code>PrepareTransactionFromAddressRBDataItemFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareTransactionFromAddressRBDataItemFee} obj Optional instance to populate.
     * @return {module:model/PrepareTransactionFromAddressRBDataItemFee} The populated <code>PrepareTransactionFromAddressRBDataItemFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepareTransactionFromAddressRBDataItemFee();

            if (data.hasOwnProperty('exactAmount')) {
                obj['exactAmount'] = ApiClient.convertToType(data['exactAmount'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
            }
            if (data.hasOwnProperty('substractFromAmount')) {
                obj['substractFromAmount'] = ApiClient.convertToType(data['substractFromAmount'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * String representation of the exact amount
 * @member {String} exactAmount
 */
PrepareTransactionFromAddressRBDataItemFee.prototype['exactAmount'] = undefined;

/**
 * Enum representation of the fee priority
 * @member {module:model/PrepareTransactionFromAddressRBDataItemFee.PriorityEnum} priority
 */
PrepareTransactionFromAddressRBDataItemFee.prototype['priority'] = undefined;

/**
 * Representation of the subtract from amount whether it is \"true\",  or \"false\".
 * @member {Boolean} substractFromAmount
 */
PrepareTransactionFromAddressRBDataItemFee.prototype['substractFromAmount'] = undefined;





/**
 * Allowed values for the <code>priority</code> property.
 * @enum {String}
 * @readonly
 */
PrepareTransactionFromAddressRBDataItemFee['PriorityEnum'] = {

    /**
     * value: "slow"
     * @const
     */
    "slow": "slow",

    /**
     * value: "standard"
     * @const
     */
    "standard": "standard",

    /**
     * value: "fast"
     * @const
     */
    "fast": "fast"
};



export default PrepareTransactionFromAddressRBDataItemFee;
