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
 * The ListXRPRippleTransactionsByAddressRIOffer model module.
 * @module model/ListXRPRippleTransactionsByAddressRIOffer
 * @version 1.11.0
 */
class ListXRPRippleTransactionsByAddressRIOffer {
    /**
     * Constructs a new <code>ListXRPRippleTransactionsByAddressRIOffer</code>.
     * @alias module:model/ListXRPRippleTransactionsByAddressRIOffer
     * @param amount {String} Defines the amount of the offer.
     * @param unit {String} Defines the unit of the offer.
     */
    constructor(amount, unit) { 
        
        ListXRPRippleTransactionsByAddressRIOffer.initialize(this, amount, unit);
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
     * Constructs a <code>ListXRPRippleTransactionsByAddressRIOffer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListXRPRippleTransactionsByAddressRIOffer} obj Optional instance to populate.
     * @return {module:model/ListXRPRippleTransactionsByAddressRIOffer} The populated <code>ListXRPRippleTransactionsByAddressRIOffer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListXRPRippleTransactionsByAddressRIOffer();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListXRPRippleTransactionsByAddressRIOffer</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListXRPRippleTransactionsByAddressRIOffer</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ListXRPRippleTransactionsByAddressRIOffer.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }
        // ensure the json data is a string
        if (data['unit'] && !(typeof data['unit'] === 'string' || data['unit'] instanceof String)) {
            throw new Error("Expected the field `unit` to be a primitive type in the JSON string but got " + data['unit']);
        }

        return true;
    }


}

ListXRPRippleTransactionsByAddressRIOffer.RequiredProperties = ["amount", "unit"];

/**
 * Defines the amount of the offer.
 * @member {String} amount
 */
ListXRPRippleTransactionsByAddressRIOffer.prototype['amount'] = undefined;

/**
 * Defines the unit of the offer.
 * @member {String} unit
 */
ListXRPRippleTransactionsByAddressRIOffer.prototype['unit'] = undefined;






export default ListXRPRippleTransactionsByAddressRIOffer;

