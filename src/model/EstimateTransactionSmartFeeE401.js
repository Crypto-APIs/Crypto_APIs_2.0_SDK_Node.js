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
import BannedIpAddressDetailsInner from './BannedIpAddressDetailsInner';
import InvalidApiKey from './InvalidApiKey';
import MissingApiKey from './MissingApiKey';

/**
 * The EstimateTransactionSmartFeeE401 model module.
 * @module model/EstimateTransactionSmartFeeE401
 * @version 1.11.0
 */
class EstimateTransactionSmartFeeE401 {
    /**
     * Constructs a new <code>EstimateTransactionSmartFeeE401</code>.
     * @alias module:model/EstimateTransactionSmartFeeE401
     * @param {(module:model/InvalidApiKey|module:model/MissingApiKey)} instance The actual instance to initialize EstimateTransactionSmartFeeE401.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "MissingApiKey") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                MissingApiKey.validateJSON(instance); // throw an exception if no match
                // create MissingApiKey from JS object
                this.actualInstance = MissingApiKey.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into MissingApiKey
            errorMessages.push("Failed to construct MissingApiKey: " + err)
        }

        try {
            if (typeof instance === "InvalidApiKey") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                InvalidApiKey.validateJSON(instance); // throw an exception if no match
                // create InvalidApiKey from JS object
                this.actualInstance = InvalidApiKey.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into InvalidApiKey
            errorMessages.push("Failed to construct InvalidApiKey: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `EstimateTransactionSmartFeeE401` with oneOf schemas InvalidApiKey, MissingApiKey. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `EstimateTransactionSmartFeeE401` with oneOf schemas InvalidApiKey, MissingApiKey. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>EstimateTransactionSmartFeeE401</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EstimateTransactionSmartFeeE401} obj Optional instance to populate.
     * @return {module:model/EstimateTransactionSmartFeeE401} The populated <code>EstimateTransactionSmartFeeE401</code> instance.
     */
    static constructFromObject(data, obj) {
        return new EstimateTransactionSmartFeeE401(data);
    }

    /**
     * Gets the actual instance, which can be <code>InvalidApiKey</code>, <code>MissingApiKey</code>.
     * @return {(module:model/InvalidApiKey|module:model/MissingApiKey)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>InvalidApiKey</code>, <code>MissingApiKey</code>.
     * @param {(module:model/InvalidApiKey|module:model/MissingApiKey)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = EstimateTransactionSmartFeeE401.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of EstimateTransactionSmartFeeE401 from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/EstimateTransactionSmartFeeE401} An instance of EstimateTransactionSmartFeeE401.
     */
    static fromJSON = function(json_string){
        return EstimateTransactionSmartFeeE401.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
EstimateTransactionSmartFeeE401.prototype['code'] = undefined;

/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
EstimateTransactionSmartFeeE401.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
EstimateTransactionSmartFeeE401.prototype['details'] = undefined;


EstimateTransactionSmartFeeE401.OneOf = ["InvalidApiKey", "MissingApiKey"];

export default EstimateTransactionSmartFeeE401;

