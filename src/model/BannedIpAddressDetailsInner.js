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
 * The BannedIpAddressDetailsInner model module.
 * @module model/BannedIpAddressDetailsInner
 * @version 1.11.0
 */
class BannedIpAddressDetailsInner {
    /**
     * Constructs a new <code>BannedIpAddressDetailsInner</code>.
     * @alias module:model/BannedIpAddressDetailsInner
     * @param attribute {String} Specifies an attribute of the error by name.
     * @param message {String} Specifies the details of an attribute as part from the error.
     */
    constructor(attribute, message) { 
        
        BannedIpAddressDetailsInner.initialize(this, attribute, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, attribute, message) { 
        obj['attribute'] = attribute;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>BannedIpAddressDetailsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BannedIpAddressDetailsInner} obj Optional instance to populate.
     * @return {module:model/BannedIpAddressDetailsInner} The populated <code>BannedIpAddressDetailsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BannedIpAddressDetailsInner();

            if (data.hasOwnProperty('attribute')) {
                obj['attribute'] = ApiClient.convertToType(data['attribute'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BannedIpAddressDetailsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BannedIpAddressDetailsInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BannedIpAddressDetailsInner.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['attribute'] && !(typeof data['attribute'] === 'string' || data['attribute'] instanceof String)) {
            throw new Error("Expected the field `attribute` to be a primitive type in the JSON string but got " + data['attribute']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}

BannedIpAddressDetailsInner.RequiredProperties = ["attribute", "message"];

/**
 * Specifies an attribute of the error by name.
 * @member {String} attribute
 */
BannedIpAddressDetailsInner.prototype['attribute'] = undefined;

/**
 * Specifies the details of an attribute as part from the error.
 * @member {String} message
 */
BannedIpAddressDetailsInner.prototype['message'] = undefined;






export default BannedIpAddressDetailsInner;

