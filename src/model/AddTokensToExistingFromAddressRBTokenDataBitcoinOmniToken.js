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
 * The AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken model module.
 * @module model/AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken
 * @version 1.1.0
 */
class AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken {
    /**
     * Constructs a new <code>AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken</code>.
     * Bitcoin Omni Token
     * @alias module:model/AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken
     * @param propertyId {Number} Represents the specific `propertyId` of the token data that will be forwarded.
     */
    constructor(propertyId) { 
        
        AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken.initialize(this, propertyId);
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
     * Constructs a <code>AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken} obj Optional instance to populate.
     * @return {module:model/AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken} The populated <code>AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken();

            if (data.hasOwnProperty('propertyId')) {
                obj['propertyId'] = ApiClient.convertToType(data['propertyId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Represents the specific `propertyId` of the token data that will be forwarded.
 * @member {Number} propertyId
 */
AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken.prototype['propertyId'] = undefined;






export default AddTokensToExistingFromAddressRBTokenDataBitcoinOmniToken;
