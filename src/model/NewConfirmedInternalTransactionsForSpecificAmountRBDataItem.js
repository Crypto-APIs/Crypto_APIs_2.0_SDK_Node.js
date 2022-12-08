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
 * The NewConfirmedInternalTransactionsForSpecificAmountRBDataItem model module.
 * @module model/NewConfirmedInternalTransactionsForSpecificAmountRBDataItem
 * @version 1.11.0
 */
class NewConfirmedInternalTransactionsForSpecificAmountRBDataItem {
    /**
     * Constructs a new <code>NewConfirmedInternalTransactionsForSpecificAmountRBDataItem</code>.
     * @alias module:model/NewConfirmedInternalTransactionsForSpecificAmountRBDataItem
     * @param amountHigherThan {Number} Represents a specific amount of coins after which the system have to send a callback to customers' callbackUrl.
     * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
     */
    constructor(amountHigherThan, callbackUrl) { 
        
        NewConfirmedInternalTransactionsForSpecificAmountRBDataItem.initialize(this, amountHigherThan, callbackUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amountHigherThan, callbackUrl) { 
        obj['amountHigherThan'] = amountHigherThan;
        obj['callbackUrl'] = callbackUrl;
    }

    /**
     * Constructs a <code>NewConfirmedInternalTransactionsForSpecificAmountRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedInternalTransactionsForSpecificAmountRBDataItem} obj Optional instance to populate.
     * @return {module:model/NewConfirmedInternalTransactionsForSpecificAmountRBDataItem} The populated <code>NewConfirmedInternalTransactionsForSpecificAmountRBDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewConfirmedInternalTransactionsForSpecificAmountRBDataItem();

            if (data.hasOwnProperty('allowDuplicates')) {
                obj['allowDuplicates'] = ApiClient.convertToType(data['allowDuplicates'], 'Boolean');
            }
            if (data.hasOwnProperty('amountHigherThan')) {
                obj['amountHigherThan'] = ApiClient.convertToType(data['amountHigherThan'], 'Number');
            }
            if (data.hasOwnProperty('callbackSecretKey')) {
                obj['callbackSecretKey'] = ApiClient.convertToType(data['callbackSecretKey'], 'String');
            }
            if (data.hasOwnProperty('callbackUrl')) {
                obj['callbackUrl'] = ApiClient.convertToType(data['callbackUrl'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NewConfirmedInternalTransactionsForSpecificAmountRBDataItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NewConfirmedInternalTransactionsForSpecificAmountRBDataItem</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of NewConfirmedInternalTransactionsForSpecificAmountRBDataItem.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['callbackSecretKey'] && !(typeof data['callbackSecretKey'] === 'string' || data['callbackSecretKey'] instanceof String)) {
            throw new Error("Expected the field `callbackSecretKey` to be a primitive type in the JSON string but got " + data['callbackSecretKey']);
        }
        // ensure the json data is a string
        if (data['callbackUrl'] && !(typeof data['callbackUrl'] === 'string' || data['callbackUrl'] instanceof String)) {
            throw new Error("Expected the field `callbackUrl` to be a primitive type in the JSON string but got " + data['callbackUrl']);
        }

        return true;
    }


}

NewConfirmedInternalTransactionsForSpecificAmountRBDataItem.RequiredProperties = ["amountHigherThan", "callbackUrl"];

/**
 * Specifies a flag that permits or denies the creation of duplicate addresses.
 * @member {Boolean} allowDuplicates
 * @default false
 */
NewConfirmedInternalTransactionsForSpecificAmountRBDataItem.prototype['allowDuplicates'] = false;

/**
 * Represents a specific amount of coins after which the system have to send a callback to customers' callbackUrl.
 * @member {Number} amountHigherThan
 */
NewConfirmedInternalTransactionsForSpecificAmountRBDataItem.prototype['amountHigherThan'] = undefined;

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs 2.0. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
NewConfirmedInternalTransactionsForSpecificAmountRBDataItem.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
NewConfirmedInternalTransactionsForSpecificAmountRBDataItem.prototype['callbackUrl'] = undefined;






export default NewConfirmedInternalTransactionsForSpecificAmountRBDataItem;

