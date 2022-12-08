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
import CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner from './CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner';
import CreateSingleTransactionRequestFromAddressWithoutFeePriorityRISender from './CreateSingleTransactionRequestFromAddressWithoutFeePriorityRISender';
import CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount from './CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount';

/**
 * The CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI model module.
 * @module model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI
 * @version 1.11.0
 */
class CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI {
    /**
     * Constructs a new <code>CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI</code>.
     * @alias module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI
     * @param recipient {Array.<module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner>} Defines the destination for the transaction, i.e. the recipient(s).
     * @param sender {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRISender} 
     * @param transactionRequestId {String} Represents a unique identifier of the transaction request (the request sent to make a transaction), which helps in identifying which callback and which `referenceId` concern that specific transaction request.
     * @param transactionRequestStatus {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.TransactionRequestStatusEnum} Defines the status of the transaction, e.g. \"created, \"await_approval\", \"pending\", \"prepared\", \"signed\", \"broadcasted\", \"success\", \"failed\", \"rejected\", mined\".
     */
    constructor(recipient, sender, transactionRequestId, transactionRequestStatus) { 
        
        CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.initialize(this, recipient, sender, transactionRequestId, transactionRequestStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, recipient, sender, transactionRequestId, transactionRequestStatus) { 
        obj['recipient'] = recipient;
        obj['sender'] = sender;
        obj['transactionRequestId'] = transactionRequestId;
        obj['transactionRequestStatus'] = transactionRequestStatus;
    }

    /**
     * Constructs a <code>CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI} obj Optional instance to populate.
     * @return {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI} The populated <code>CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI();

            if (data.hasOwnProperty('callbackSecretKey')) {
                obj['callbackSecretKey'] = ApiClient.convertToType(data['callbackSecretKey'], 'String');
            }
            if (data.hasOwnProperty('callbackUrl')) {
                obj['callbackUrl'] = ApiClient.convertToType(data['callbackUrl'], 'String');
            }
            if (data.hasOwnProperty('classicAddress')) {
                obj['classicAddress'] = ApiClient.convertToType(data['classicAddress'], 'String');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ApiClient.convertToType(data['recipient'], [CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner]);
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = CreateSingleTransactionRequestFromAddressWithoutFeePriorityRISender.constructFromObject(data['sender']);
            }
            if (data.hasOwnProperty('transactionRequestId')) {
                obj['transactionRequestId'] = ApiClient.convertToType(data['transactionRequestId'], 'String');
            }
            if (data.hasOwnProperty('transactionRequestStatus')) {
                obj['transactionRequestStatus'] = ApiClient.convertToType(data['transactionRequestStatus'], 'String');
            }
            if (data.hasOwnProperty('totalAmount')) {
                obj['totalAmount'] = CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount.constructFromObject(data['totalAmount']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.RequiredProperties) {
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
        // ensure the json data is a string
        if (data['classicAddress'] && !(typeof data['classicAddress'] === 'string' || data['classicAddress'] instanceof String)) {
            throw new Error("Expected the field `classicAddress` to be a primitive type in the JSON string but got " + data['classicAddress']);
        }
        // ensure the json data is a string
        if (data['note'] && !(typeof data['note'] === 'string' || data['note'] instanceof String)) {
            throw new Error("Expected the field `note` to be a primitive type in the JSON string but got " + data['note']);
        }
        if (data['recipient']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['recipient'])) {
                throw new Error("Expected the field `recipient` to be an array in the JSON data but got " + data['recipient']);
            }
            // validate the optional field `recipient` (array)
            for (const item of data['recipient']) {
                CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner.validateJsonObject(item);
            };
        }
        // validate the optional field `sender`
        if (data['sender']) { // data not null
          CreateSingleTransactionRequestFromAddressWithoutFeePriorityRISender.validateJSON(data['sender']);
        }
        // ensure the json data is a string
        if (data['transactionRequestId'] && !(typeof data['transactionRequestId'] === 'string' || data['transactionRequestId'] instanceof String)) {
            throw new Error("Expected the field `transactionRequestId` to be a primitive type in the JSON string but got " + data['transactionRequestId']);
        }
        // ensure the json data is a string
        if (data['transactionRequestStatus'] && !(typeof data['transactionRequestStatus'] === 'string' || data['transactionRequestStatus'] instanceof String)) {
            throw new Error("Expected the field `transactionRequestStatus` to be a primitive type in the JSON string but got " + data['transactionRequestStatus']);
        }
        // validate the optional field `totalAmount`
        if (data['totalAmount']) { // data not null
          CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount.validateJSON(data['totalAmount']);
        }

        return true;
    }


}

CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.RequiredProperties = ["recipient", "sender", "transactionRequestId", "transactionRequestStatus"];

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['callbackUrl'] = undefined;

/**
 * Represents the public address, which is a compressed and shortened form of a public key. The classic address is shown when the source address is an x-Address.
 * @member {String} classicAddress
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['classicAddress'] = undefined;

/**
 * Represents an optional note to add a free text in, explaining or providing additional detail on the transaction request.
 * @member {String} note
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['note'] = undefined;

/**
 * Defines the destination for the transaction, i.e. the recipient(s).
 * @member {Array.<module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner>} recipient
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['recipient'] = undefined;

/**
 * @member {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRISender} sender
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['sender'] = undefined;

/**
 * Represents a unique identifier of the transaction request (the request sent to make a transaction), which helps in identifying which callback and which `referenceId` concern that specific transaction request.
 * @member {String} transactionRequestId
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['transactionRequestId'] = undefined;

/**
 * Defines the status of the transaction, e.g. \"created, \"await_approval\", \"pending\", \"prepared\", \"signed\", \"broadcasted\", \"success\", \"failed\", \"rejected\", mined\".
 * @member {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.TransactionRequestStatusEnum} transactionRequestStatus
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['transactionRequestStatus'] = undefined;

/**
 * @member {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount} totalAmount
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['totalAmount'] = undefined;





/**
 * Allowed values for the <code>transactionRequestStatus</code> property.
 * @enum {String}
 * @readonly
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI['TransactionRequestStatusEnum'] = {

    /**
     * value: "created"
     * @const
     */
    "created": "created",

    /**
     * value: "await-approval"
     * @const
     */
    "await-approval": "await-approval",

    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",

    /**
     * value: "prepared"
     * @const
     */
    "prepared": "prepared",

    /**
     * value: "signed"
     * @const
     */
    "signed": "signed",

    /**
     * value: "broadcasted"
     * @const
     */
    "broadcasted": "broadcasted",

    /**
     * value: "success"
     * @const
     */
    "success": "success",

    /**
     * value: "failed"
     * @const
     */
    "failed": "failed",

    /**
     * value: "rejected"
     * @const
     */
    "rejected": "rejected",

    /**
     * value: "mined"
     * @const
     */
    "mined": "mined",

    /**
     * value: "mined-with-errors"
     * @const
     */
    "mined-with-errors": "mined-with-errors"
};



export default CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI;

