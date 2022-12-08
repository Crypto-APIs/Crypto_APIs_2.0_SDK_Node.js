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
 * The CreateNewMasterWalletRI model module.
 * @module model/CreateNewMasterWalletRI
 * @version 1.11.0
 */
class CreateNewMasterWalletRI {
    /**
     * Constructs a new <code>CreateNewMasterWalletRI</code>.
     * @alias module:model/CreateNewMasterWalletRI
     * @param walletId {String} Represents the sender's specific and unique Wallet ID of the sender.
     */
    constructor(walletId) { 
        
        CreateNewMasterWalletRI.initialize(this, walletId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, walletId) { 
        obj['walletId'] = walletId;
    }

    /**
     * Constructs a <code>CreateNewMasterWalletRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateNewMasterWalletRI} obj Optional instance to populate.
     * @return {module:model/CreateNewMasterWalletRI} The populated <code>CreateNewMasterWalletRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateNewMasterWalletRI();

            if (data.hasOwnProperty('walletId')) {
                obj['walletId'] = ApiClient.convertToType(data['walletId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateNewMasterWalletRI</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateNewMasterWalletRI</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateNewMasterWalletRI.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['walletId'] && !(typeof data['walletId'] === 'string' || data['walletId'] instanceof String)) {
            throw new Error("Expected the field `walletId` to be a primitive type in the JSON string but got " + data['walletId']);
        }

        return true;
    }


}

CreateNewMasterWalletRI.RequiredProperties = ["walletId"];

/**
 * Represents the sender's specific and unique Wallet ID of the sender.
 * @member {String} walletId
 */
CreateNewMasterWalletRI.prototype['walletId'] = undefined;






export default CreateNewMasterWalletRI;

