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
 * The PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter model module.
 * @module model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter
 * @version 1.11.0
 */
class PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter {
    /**
     * Constructs a new <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter</code>.
     * Defines the contract parameter
     * @alias module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter
     * @param amount {String} String representation of the amount
     */
    constructor(amount) { 
        
        PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter.initialize(this, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount) { 
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter} obj Optional instance to populate.
     * @return {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter} The populated <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }

        return true;
    }


}

PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter.RequiredProperties = ["amount"];

/**
 * String representation of the amount
 * @member {String} amount
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter.prototype['amount'] = undefined;






export default PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter;

