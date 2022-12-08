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
 * The TokensForwardingSuccessOmni model module.
 * @module model/TokensForwardingSuccessOmni
 * @version 1.11.0
 */
class TokensForwardingSuccessOmni {
    /**
     * Constructs a new <code>TokensForwardingSuccessOmni</code>.
     * OMNI
     * @alias module:model/TokensForwardingSuccessOmni
     * @param name {String} Specifies the name of the token.
     * @param propertyId {String} Defines the ID of the property for Omni Layer.
     * @param transactionType {String} Defines the type of the transaction.
     * @param createdByTransactionId {String} The transaction ID used to create the token.
     * @param amount {String} Defines the amount of tokens sent with the confirmed transaction.
     */
    constructor(name, propertyId, transactionType, createdByTransactionId, amount) { 
        
        TokensForwardingSuccessOmni.initialize(this, name, propertyId, transactionType, createdByTransactionId, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, propertyId, transactionType, createdByTransactionId, amount) { 
        obj['name'] = name;
        obj['propertyId'] = propertyId;
        obj['transactionType'] = transactionType;
        obj['createdByTransactionId'] = createdByTransactionId;
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>TokensForwardingSuccessOmni</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokensForwardingSuccessOmni} obj Optional instance to populate.
     * @return {module:model/TokensForwardingSuccessOmni} The populated <code>TokensForwardingSuccessOmni</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokensForwardingSuccessOmni();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('propertyId')) {
                obj['propertyId'] = ApiClient.convertToType(data['propertyId'], 'String');
            }
            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = ApiClient.convertToType(data['transactionType'], 'String');
            }
            if (data.hasOwnProperty('createdByTransactionId')) {
                obj['createdByTransactionId'] = ApiClient.convertToType(data['createdByTransactionId'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TokensForwardingSuccessOmni</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TokensForwardingSuccessOmni</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TokensForwardingSuccessOmni.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['propertyId'] && !(typeof data['propertyId'] === 'string' || data['propertyId'] instanceof String)) {
            throw new Error("Expected the field `propertyId` to be a primitive type in the JSON string but got " + data['propertyId']);
        }
        // ensure the json data is a string
        if (data['transactionType'] && !(typeof data['transactionType'] === 'string' || data['transactionType'] instanceof String)) {
            throw new Error("Expected the field `transactionType` to be a primitive type in the JSON string but got " + data['transactionType']);
        }
        // ensure the json data is a string
        if (data['createdByTransactionId'] && !(typeof data['createdByTransactionId'] === 'string' || data['createdByTransactionId'] instanceof String)) {
            throw new Error("Expected the field `createdByTransactionId` to be a primitive type in the JSON string but got " + data['createdByTransactionId']);
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }

        return true;
    }


}

TokensForwardingSuccessOmni.RequiredProperties = ["name", "propertyId", "transactionType", "createdByTransactionId", "amount"];

/**
 * Specifies the name of the token.
 * @member {String} name
 */
TokensForwardingSuccessOmni.prototype['name'] = undefined;

/**
 * Defines the ID of the property for Omni Layer.
 * @member {String} propertyId
 */
TokensForwardingSuccessOmni.prototype['propertyId'] = undefined;

/**
 * Defines the type of the transaction.
 * @member {String} transactionType
 */
TokensForwardingSuccessOmni.prototype['transactionType'] = undefined;

/**
 * The transaction ID used to create the token.
 * @member {String} createdByTransactionId
 */
TokensForwardingSuccessOmni.prototype['createdByTransactionId'] = undefined;

/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
TokensForwardingSuccessOmni.prototype['amount'] = undefined;






export default TokensForwardingSuccessOmni;

