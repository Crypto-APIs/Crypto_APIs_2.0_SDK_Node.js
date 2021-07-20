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
 * The ListCoinsForwardingAutomationsRI model module.
 * @module model/ListCoinsForwardingAutomationsRI
 * @version 1.1.0
 */
class ListCoinsForwardingAutomationsRI {
    /**
     * Constructs a new <code>ListCoinsForwardingAutomationsRI</code>.
     * @alias module:model/ListCoinsForwardingAutomationsRI
     * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs.
     * @param confirmationsCountTrigger {Number} Represents the total count of the transaction confirmations before triggering the event.
     * @param createdTimestamp {Number} Defines the specific time/date when the automatic forwarding was created in Unix Timestamp.
     * @param feePriority {module:model/ListCoinsForwardingAutomationsRI.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"SLOW\", \"STANDARD\" OR \"FAST\".
     * @param fromAddress {String} Represents the hash of the address that forwards the currency.
     * @param minimumTransferAmount {String} Represents the minimum transfer amount of the currency in the `fromAddress` that can be allowed for an automatic forwarding.
     * @param referenceId {String} Represents a unique ID used to reference the specific forwarding automation.
     * @param toAddress {String} Represents the hash of the address the currency is forwarded to.
     */
    constructor(callbackUrl, confirmationsCountTrigger, createdTimestamp, feePriority, fromAddress, minimumTransferAmount, referenceId, toAddress) { 
        
        ListCoinsForwardingAutomationsRI.initialize(this, callbackUrl, confirmationsCountTrigger, createdTimestamp, feePriority, fromAddress, minimumTransferAmount, referenceId, toAddress);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, callbackUrl, confirmationsCountTrigger, createdTimestamp, feePriority, fromAddress, minimumTransferAmount, referenceId, toAddress) { 
        obj['callbackUrl'] = callbackUrl;
        obj['confirmationsCountTrigger'] = confirmationsCountTrigger;
        obj['createdTimestamp'] = createdTimestamp;
        obj['feePriority'] = feePriority;
        obj['fromAddress'] = fromAddress;
        obj['minimumTransferAmount'] = minimumTransferAmount;
        obj['referenceId'] = referenceId;
        obj['toAddress'] = toAddress;
    }

    /**
     * Constructs a <code>ListCoinsForwardingAutomationsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListCoinsForwardingAutomationsRI} obj Optional instance to populate.
     * @return {module:model/ListCoinsForwardingAutomationsRI} The populated <code>ListCoinsForwardingAutomationsRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListCoinsForwardingAutomationsRI();

            if (data.hasOwnProperty('callbackUrl')) {
                obj['callbackUrl'] = ApiClient.convertToType(data['callbackUrl'], 'String');
            }
            if (data.hasOwnProperty('confirmationsCountTrigger')) {
                obj['confirmationsCountTrigger'] = ApiClient.convertToType(data['confirmationsCountTrigger'], 'Number');
            }
            if (data.hasOwnProperty('createdTimestamp')) {
                obj['createdTimestamp'] = ApiClient.convertToType(data['createdTimestamp'], 'Number');
            }
            if (data.hasOwnProperty('feePriority')) {
                obj['feePriority'] = ApiClient.convertToType(data['feePriority'], 'String');
            }
            if (data.hasOwnProperty('fromAddress')) {
                obj['fromAddress'] = ApiClient.convertToType(data['fromAddress'], 'String');
            }
            if (data.hasOwnProperty('minimumTransferAmount')) {
                obj['minimumTransferAmount'] = ApiClient.convertToType(data['minimumTransferAmount'], 'String');
            }
            if (data.hasOwnProperty('referenceId')) {
                obj['referenceId'] = ApiClient.convertToType(data['referenceId'], 'String');
            }
            if (data.hasOwnProperty('toAddress')) {
                obj['toAddress'] = ApiClient.convertToType(data['toAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs.
 * @member {String} callbackUrl
 */
ListCoinsForwardingAutomationsRI.prototype['callbackUrl'] = undefined;

/**
 * Represents the total count of the transaction confirmations before triggering the event.
 * @member {Number} confirmationsCountTrigger
 */
ListCoinsForwardingAutomationsRI.prototype['confirmationsCountTrigger'] = undefined;

/**
 * Defines the specific time/date when the automatic forwarding was created in Unix Timestamp.
 * @member {Number} createdTimestamp
 */
ListCoinsForwardingAutomationsRI.prototype['createdTimestamp'] = undefined;

/**
 * Represents the fee priority of the automation, whether it is \"SLOW\", \"STANDARD\" OR \"FAST\".
 * @member {module:model/ListCoinsForwardingAutomationsRI.FeePriorityEnum} feePriority
 */
ListCoinsForwardingAutomationsRI.prototype['feePriority'] = undefined;

/**
 * Represents the hash of the address that forwards the currency.
 * @member {String} fromAddress
 */
ListCoinsForwardingAutomationsRI.prototype['fromAddress'] = undefined;

/**
 * Represents the minimum transfer amount of the currency in the `fromAddress` that can be allowed for an automatic forwarding.
 * @member {String} minimumTransferAmount
 */
ListCoinsForwardingAutomationsRI.prototype['minimumTransferAmount'] = undefined;

/**
 * Represents a unique ID used to reference the specific forwarding automation.
 * @member {String} referenceId
 */
ListCoinsForwardingAutomationsRI.prototype['referenceId'] = undefined;

/**
 * Represents the hash of the address the currency is forwarded to.
 * @member {String} toAddress
 */
ListCoinsForwardingAutomationsRI.prototype['toAddress'] = undefined;





/**
 * Allowed values for the <code>feePriority</code> property.
 * @enum {String}
 * @readonly
 */
ListCoinsForwardingAutomationsRI['FeePriorityEnum'] = {

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



export default ListCoinsForwardingAutomationsRI;

