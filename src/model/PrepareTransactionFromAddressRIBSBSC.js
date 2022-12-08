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
import PrepareTransactionFromAddressRIBSBSCFee from './PrepareTransactionFromAddressRIBSBSCFee';

/**
 * The PrepareTransactionFromAddressRIBSBSC model module.
 * @module model/PrepareTransactionFromAddressRIBSBSC
 * @version 1.11.0
 */
class PrepareTransactionFromAddressRIBSBSC {
    /**
     * Constructs a new <code>PrepareTransactionFromAddressRIBSBSC</code>.
     * Binance Smart Chain
     * @alias module:model/PrepareTransactionFromAddressRIBSBSC
     * @param fee {module:model/PrepareTransactionFromAddressRIBSBSCFee} 
     * @param transactionType {module:model/PrepareTransactionFromAddressRIBSBSC.TransactionTypeEnum} Representation of the transaction type
     * @param unit {String} Represents the unit of the amount transacted
     */
    constructor(fee, transactionType, unit) { 
        
        PrepareTransactionFromAddressRIBSBSC.initialize(this, fee, transactionType, unit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fee, transactionType, unit) { 
        obj['fee'] = fee;
        obj['transactionType'] = transactionType;
        obj['unit'] = unit;
    }

    /**
     * Constructs a <code>PrepareTransactionFromAddressRIBSBSC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareTransactionFromAddressRIBSBSC} obj Optional instance to populate.
     * @return {module:model/PrepareTransactionFromAddressRIBSBSC} The populated <code>PrepareTransactionFromAddressRIBSBSC</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepareTransactionFromAddressRIBSBSC();

            if (data.hasOwnProperty('fee')) {
                obj['fee'] = PrepareTransactionFromAddressRIBSBSCFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = ApiClient.convertToType(data['transactionType'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PrepareTransactionFromAddressRIBSBSC</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PrepareTransactionFromAddressRIBSBSC</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PrepareTransactionFromAddressRIBSBSC.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `fee`
        if (data['fee']) { // data not null
          PrepareTransactionFromAddressRIBSBSCFee.validateJSON(data['fee']);
        }
        // ensure the json data is a string
        if (data['transactionType'] && !(typeof data['transactionType'] === 'string' || data['transactionType'] instanceof String)) {
            throw new Error("Expected the field `transactionType` to be a primitive type in the JSON string but got " + data['transactionType']);
        }
        // ensure the json data is a string
        if (data['unit'] && !(typeof data['unit'] === 'string' || data['unit'] instanceof String)) {
            throw new Error("Expected the field `unit` to be a primitive type in the JSON string but got " + data['unit']);
        }

        return true;
    }


}

PrepareTransactionFromAddressRIBSBSC.RequiredProperties = ["fee", "transactionType", "unit"];

/**
 * @member {module:model/PrepareTransactionFromAddressRIBSBSCFee} fee
 */
PrepareTransactionFromAddressRIBSBSC.prototype['fee'] = undefined;

/**
 * Representation of the transaction type
 * @member {module:model/PrepareTransactionFromAddressRIBSBSC.TransactionTypeEnum} transactionType
 */
PrepareTransactionFromAddressRIBSBSC.prototype['transactionType'] = undefined;

/**
 * Represents the unit of the amount transacted
 * @member {String} unit
 */
PrepareTransactionFromAddressRIBSBSC.prototype['unit'] = undefined;





/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
PrepareTransactionFromAddressRIBSBSC['TransactionTypeEnum'] = {

    /**
     * value: "legacy-transaction"
     * @const
     */
    "legacy-transaction": "legacy-transaction"
};



export default PrepareTransactionFromAddressRIBSBSC;

