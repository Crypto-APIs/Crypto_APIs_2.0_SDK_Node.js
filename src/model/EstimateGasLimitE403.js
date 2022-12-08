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
import BannedIpAddress from './BannedIpAddress';
import BannedIpAddressDetailsInner from './BannedIpAddressDetailsInner';
import EndpointNotAllowedForApiKey from './EndpointNotAllowedForApiKey';
import EndpointNotAllowedForPlan from './EndpointNotAllowedForPlan';
import FeatureMainnetsNotAllowedForPlan from './FeatureMainnetsNotAllowedForPlan';

/**
 * The EstimateGasLimitE403 model module.
 * @module model/EstimateGasLimitE403
 * @version 1.11.0
 */
class EstimateGasLimitE403 {
    /**
     * Constructs a new <code>EstimateGasLimitE403</code>.
     * @alias module:model/EstimateGasLimitE403
     * @param {(module:model/BannedIpAddress|module:model/EndpointNotAllowedForApiKey|module:model/EndpointNotAllowedForPlan|module:model/FeatureMainnetsNotAllowedForPlan)} instance The actual instance to initialize EstimateGasLimitE403.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "BannedIpAddress") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                BannedIpAddress.validateJSON(instance); // throw an exception if no match
                // create BannedIpAddress from JS object
                this.actualInstance = BannedIpAddress.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into BannedIpAddress
            errorMessages.push("Failed to construct BannedIpAddress: " + err)
        }

        try {
            if (typeof instance === "EndpointNotAllowedForPlan") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                EndpointNotAllowedForPlan.validateJSON(instance); // throw an exception if no match
                // create EndpointNotAllowedForPlan from JS object
                this.actualInstance = EndpointNotAllowedForPlan.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EndpointNotAllowedForPlan
            errorMessages.push("Failed to construct EndpointNotAllowedForPlan: " + err)
        }

        try {
            if (typeof instance === "EndpointNotAllowedForApiKey") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                EndpointNotAllowedForApiKey.validateJSON(instance); // throw an exception if no match
                // create EndpointNotAllowedForApiKey from JS object
                this.actualInstance = EndpointNotAllowedForApiKey.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EndpointNotAllowedForApiKey
            errorMessages.push("Failed to construct EndpointNotAllowedForApiKey: " + err)
        }

        try {
            if (typeof instance === "FeatureMainnetsNotAllowedForPlan") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                FeatureMainnetsNotAllowedForPlan.validateJSON(instance); // throw an exception if no match
                // create FeatureMainnetsNotAllowedForPlan from JS object
                this.actualInstance = FeatureMainnetsNotAllowedForPlan.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into FeatureMainnetsNotAllowedForPlan
            errorMessages.push("Failed to construct FeatureMainnetsNotAllowedForPlan: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `EstimateGasLimitE403` with oneOf schemas BannedIpAddress, EndpointNotAllowedForApiKey, EndpointNotAllowedForPlan, FeatureMainnetsNotAllowedForPlan. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `EstimateGasLimitE403` with oneOf schemas BannedIpAddress, EndpointNotAllowedForApiKey, EndpointNotAllowedForPlan, FeatureMainnetsNotAllowedForPlan. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>EstimateGasLimitE403</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EstimateGasLimitE403} obj Optional instance to populate.
     * @return {module:model/EstimateGasLimitE403} The populated <code>EstimateGasLimitE403</code> instance.
     */
    static constructFromObject(data, obj) {
        return new EstimateGasLimitE403(data);
    }

    /**
     * Gets the actual instance, which can be <code>BannedIpAddress</code>, <code>EndpointNotAllowedForApiKey</code>, <code>EndpointNotAllowedForPlan</code>, <code>FeatureMainnetsNotAllowedForPlan</code>.
     * @return {(module:model/BannedIpAddress|module:model/EndpointNotAllowedForApiKey|module:model/EndpointNotAllowedForPlan|module:model/FeatureMainnetsNotAllowedForPlan)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>BannedIpAddress</code>, <code>EndpointNotAllowedForApiKey</code>, <code>EndpointNotAllowedForPlan</code>, <code>FeatureMainnetsNotAllowedForPlan</code>.
     * @param {(module:model/BannedIpAddress|module:model/EndpointNotAllowedForApiKey|module:model/EndpointNotAllowedForPlan|module:model/FeatureMainnetsNotAllowedForPlan)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = EstimateGasLimitE403.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of EstimateGasLimitE403 from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/EstimateGasLimitE403} An instance of EstimateGasLimitE403.
     */
    static fromJSON = function(json_string){
        return EstimateGasLimitE403.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
EstimateGasLimitE403.prototype['code'] = undefined;

/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
EstimateGasLimitE403.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
EstimateGasLimitE403.prototype['details'] = undefined;


EstimateGasLimitE403.OneOf = ["BannedIpAddress", "EndpointNotAllowedForApiKey", "EndpointNotAllowedForPlan", "FeatureMainnetsNotAllowedForPlan"];

export default EstimateGasLimitE403;

