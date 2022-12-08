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
 * The DeleteAutomaticTokensForwardingRITSBOT model module.
 * @module model/DeleteAutomaticTokensForwardingRITSBOT
 * @version 1.11.0
 */
class DeleteAutomaticTokensForwardingRITSBOT {
    /**
     * Constructs a new <code>DeleteAutomaticTokensForwardingRITSBOT</code>.
     * Bitcoin Omni Token
     * @alias module:model/DeleteAutomaticTokensForwardingRITSBOT
     * @param propertyId {Number} Defines the `propertyId` of the Omni Layer token.
     */
    constructor(propertyId) { 
        
        DeleteAutomaticTokensForwardingRITSBOT.initialize(this, propertyId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, propertyId) { 
        obj['propertyId'] = propertyId;
    }

    /**
     * Constructs a <code>DeleteAutomaticTokensForwardingRITSBOT</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteAutomaticTokensForwardingRITSBOT} obj Optional instance to populate.
     * @return {module:model/DeleteAutomaticTokensForwardingRITSBOT} The populated <code>DeleteAutomaticTokensForwardingRITSBOT</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteAutomaticTokensForwardingRITSBOT();

            if (data.hasOwnProperty('propertyId')) {
                obj['propertyId'] = ApiClient.convertToType(data['propertyId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteAutomaticTokensForwardingRITSBOT</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteAutomaticTokensForwardingRITSBOT</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeleteAutomaticTokensForwardingRITSBOT.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

DeleteAutomaticTokensForwardingRITSBOT.RequiredProperties = ["propertyId"];

/**
 * Defines the `propertyId` of the Omni Layer token.
 * @member {Number} propertyId
 */
DeleteAutomaticTokensForwardingRITSBOT.prototype['propertyId'] = undefined;






export default DeleteAutomaticTokensForwardingRITSBOT;

