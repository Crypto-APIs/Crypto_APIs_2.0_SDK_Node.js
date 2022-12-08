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
import PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee from './PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee';
import PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner from './PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner';

/**
 * The PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem model module.
 * @module model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem
 * @version 1.11.0
 */
class PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem {
    /**
     * Constructs a new <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem</code>.
     * @alias module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem
     * @param xpub {String} Defines the account extended publicly known key which is used to derive all child public keys.
     * @param fee {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee} 
     * @param recipients {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner>} Object Array representation of transaction receivers
     */
    constructor(xpub, fee, recipients) { 
        
        PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.initialize(this, xpub, fee, recipients);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, xpub, fee, recipients) { 
        obj['xpub'] = xpub;
        obj['fee'] = fee;
        obj['recipients'] = recipients;
    }

    /**
     * Constructs a <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem} obj Optional instance to populate.
     * @return {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem} The populated <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem();

            if (data.hasOwnProperty('additionalData')) {
                obj['additionalData'] = ApiClient.convertToType(data['additionalData'], 'String');
            }
            if (data.hasOwnProperty('locktime')) {
                obj['locktime'] = ApiClient.convertToType(data['locktime'], 'Number');
            }
            if (data.hasOwnProperty('xpub')) {
                obj['xpub'] = ApiClient.convertToType(data['xpub'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('prepareStrategy')) {
                obj['prepareStrategy'] = ApiClient.convertToType(data['prepareStrategy'], 'String');
            }
            if (data.hasOwnProperty('recipients')) {
                obj['recipients'] = ApiClient.convertToType(data['recipients'], [PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner]);
            }
            if (data.hasOwnProperty('replaceable')) {
                obj['replaceable'] = ApiClient.convertToType(data['replaceable'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['additionalData'] && !(typeof data['additionalData'] === 'string' || data['additionalData'] instanceof String)) {
            throw new Error("Expected the field `additionalData` to be a primitive type in the JSON string but got " + data['additionalData']);
        }
        // ensure the json data is a string
        if (data['xpub'] && !(typeof data['xpub'] === 'string' || data['xpub'] instanceof String)) {
            throw new Error("Expected the field `xpub` to be a primitive type in the JSON string but got " + data['xpub']);
        }
        // validate the optional field `fee`
        if (data['fee']) { // data not null
          PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee.validateJSON(data['fee']);
        }
        // ensure the json data is a string
        if (data['prepareStrategy'] && !(typeof data['prepareStrategy'] === 'string' || data['prepareStrategy'] instanceof String)) {
            throw new Error("Expected the field `prepareStrategy` to be a primitive type in the JSON string but got " + data['prepareStrategy']);
        }
        if (data['recipients']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['recipients'])) {
                throw new Error("Expected the field `recipients` to be an array in the JSON data but got " + data['recipients']);
            }
            // validate the optional field `recipients` (array)
            for (const item of data['recipients']) {
                PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner.validateJsonObject(item);
            };
        }

        return true;
    }


}

PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.RequiredProperties = ["xpub", "fee", "recipients"];

/**
 * Representation of the additional data.
 * @member {String} additionalData
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['additionalData'] = undefined;

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['locktime'] = undefined;

/**
 * Defines the account extended publicly known key which is used to derive all child public keys.
 * @member {String} xpub
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['xpub'] = undefined;

/**
 * @member {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee} fee
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['fee'] = undefined;

/**
 * Representation of the transaction's strategy type
 * @member {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.PrepareStrategyEnum} prepareStrategy
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['prepareStrategy'] = undefined;

/**
 * Object Array representation of transaction receivers
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner>} recipients
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['recipients'] = undefined;

/**
 * Representation whether the transaction is replaceable
 * @member {Boolean} replaceable
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['replaceable'] = undefined;





/**
 * Allowed values for the <code>prepareStrategy</code> property.
 * @enum {String}
 * @readonly
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem['PrepareStrategyEnum'] = {

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "minimize-dust"
     * @const
     */
    "minimize-dust": "minimize-dust",

    /**
     * value: "optimize-size"
     * @const
     */
    "optimize-size": "optimize-size"
};



export default PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem;

