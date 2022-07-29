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
import CreateAutomaticTokensForwardingRITS from './CreateAutomaticTokensForwardingRITS';

/**
 * The CreateAutomaticTokensForwardingRI model module.
 * @module model/CreateAutomaticTokensForwardingRI
 * @version 1.7.1
 */
class CreateAutomaticTokensForwardingRI {
    /**
     * Constructs a new <code>CreateAutomaticTokensForwardingRI</code>.
     * @alias module:model/CreateAutomaticTokensForwardingRI
     * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
     * @param confirmationsCount {Number} Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block.
     * @param createdTimestamp {Number} Defines the specific time/date when the automatic forwarding was created in Unix Timestamp.
     * @param feeAddress {String} Represents the specific fee address, which is always automatically generated. Users must fund it.
     * @param feePriority {module:model/CreateAutomaticTokensForwardingRI.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"SLOW\", \"STANDARD\" or \"FAST\".
     * @param fromAddress {String} Represents the hash of the address that forwards the tokens.
     * @param minimumTransferAmount {String} Represents the minimum transfer amount of the tokens in the `fromAddress` that can be allowed for an automatic forwarding.
     * @param referenceId {String} Represents a unique ID used to reference the specific callback subscription.
     * @param toAddress {String} Represents the hash of the address the tokens are forwarded to.
     * @param tokenData {module:model/CreateAutomaticTokensForwardingRITS} 
     */
    constructor(callbackUrl, confirmationsCount, createdTimestamp, feeAddress, feePriority, fromAddress, minimumTransferAmount, referenceId, toAddress, tokenData) { 
        
        CreateAutomaticTokensForwardingRI.initialize(this, callbackUrl, confirmationsCount, createdTimestamp, feeAddress, feePriority, fromAddress, minimumTransferAmount, referenceId, toAddress, tokenData);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, callbackUrl, confirmationsCount, createdTimestamp, feeAddress, feePriority, fromAddress, minimumTransferAmount, referenceId, toAddress, tokenData) { 
        obj['callbackUrl'] = callbackUrl;
        obj['confirmationsCount'] = confirmationsCount;
        obj['createdTimestamp'] = createdTimestamp;
        obj['feeAddress'] = feeAddress;
        obj['feePriority'] = feePriority;
        obj['fromAddress'] = fromAddress;
        obj['minimumTransferAmount'] = minimumTransferAmount;
        obj['referenceId'] = referenceId;
        obj['toAddress'] = toAddress;
        obj['tokenData'] = tokenData;
    }

    /**
     * Constructs a <code>CreateAutomaticTokensForwardingRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAutomaticTokensForwardingRI} obj Optional instance to populate.
     * @return {module:model/CreateAutomaticTokensForwardingRI} The populated <code>CreateAutomaticTokensForwardingRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAutomaticTokensForwardingRI();

            if (data.hasOwnProperty('callbackUrl')) {
                obj['callbackUrl'] = ApiClient.convertToType(data['callbackUrl'], 'String');
            }
            if (data.hasOwnProperty('confirmationsCount')) {
                obj['confirmationsCount'] = ApiClient.convertToType(data['confirmationsCount'], 'Number');
            }
            if (data.hasOwnProperty('createdTimestamp')) {
                obj['createdTimestamp'] = ApiClient.convertToType(data['createdTimestamp'], 'Number');
            }
            if (data.hasOwnProperty('feeAddress')) {
                obj['feeAddress'] = ApiClient.convertToType(data['feeAddress'], 'String');
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
            if (data.hasOwnProperty('tokenData')) {
                obj['tokenData'] = CreateAutomaticTokensForwardingRITS.constructFromObject(data['tokenData']);
            }
        }
        return obj;
    }


}

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
CreateAutomaticTokensForwardingRI.prototype['callbackUrl'] = undefined;

/**
 * Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block.
 * @member {Number} confirmationsCount
 */
CreateAutomaticTokensForwardingRI.prototype['confirmationsCount'] = undefined;

/**
 * Defines the specific time/date when the automatic forwarding was created in Unix Timestamp.
 * @member {Number} createdTimestamp
 */
CreateAutomaticTokensForwardingRI.prototype['createdTimestamp'] = undefined;

/**
 * Represents the specific fee address, which is always automatically generated. Users must fund it.
 * @member {String} feeAddress
 */
CreateAutomaticTokensForwardingRI.prototype['feeAddress'] = undefined;

/**
 * Represents the fee priority of the automation, whether it is \"SLOW\", \"STANDARD\" or \"FAST\".
 * @member {module:model/CreateAutomaticTokensForwardingRI.FeePriorityEnum} feePriority
 */
CreateAutomaticTokensForwardingRI.prototype['feePriority'] = undefined;

/**
 * Represents the hash of the address that forwards the tokens.
 * @member {String} fromAddress
 */
CreateAutomaticTokensForwardingRI.prototype['fromAddress'] = undefined;

/**
 * Represents the minimum transfer amount of the tokens in the `fromAddress` that can be allowed for an automatic forwarding.
 * @member {String} minimumTransferAmount
 */
CreateAutomaticTokensForwardingRI.prototype['minimumTransferAmount'] = undefined;

/**
 * Represents a unique ID used to reference the specific callback subscription.
 * @member {String} referenceId
 */
CreateAutomaticTokensForwardingRI.prototype['referenceId'] = undefined;

/**
 * Represents the hash of the address the tokens are forwarded to.
 * @member {String} toAddress
 */
CreateAutomaticTokensForwardingRI.prototype['toAddress'] = undefined;

/**
 * @member {module:model/CreateAutomaticTokensForwardingRITS} tokenData
 */
CreateAutomaticTokensForwardingRI.prototype['tokenData'] = undefined;





/**
 * Allowed values for the <code>feePriority</code> property.
 * @enum {String}
 * @readonly
 */
CreateAutomaticTokensForwardingRI['FeePriorityEnum'] = {

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



export default CreateAutomaticTokensForwardingRI;

