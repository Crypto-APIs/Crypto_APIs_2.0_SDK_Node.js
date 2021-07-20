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
 * The AddTokensToExistingFromAddressRITSEET model module.
 * @module model/AddTokensToExistingFromAddressRITSEET
 * @version 1.1.0
 */
class AddTokensToExistingFromAddressRITSEET {
    /**
     * Constructs a new <code>AddTokensToExistingFromAddressRITSEET</code>.
     * Ethereum erc-20 token
     * @alias module:model/AddTokensToExistingFromAddressRITSEET
     * @param contractAddress {String} Token contract address to be transferred
     */
    constructor(contractAddress) { 
        
        AddTokensToExistingFromAddressRITSEET.initialize(this, contractAddress);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contractAddress) { 
        obj['contractAddress'] = contractAddress;
    }

    /**
     * Constructs a <code>AddTokensToExistingFromAddressRITSEET</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddTokensToExistingFromAddressRITSEET} obj Optional instance to populate.
     * @return {module:model/AddTokensToExistingFromAddressRITSEET} The populated <code>AddTokensToExistingFromAddressRITSEET</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddTokensToExistingFromAddressRITSEET();

            if (data.hasOwnProperty('contractAddress')) {
                obj['contractAddress'] = ApiClient.convertToType(data['contractAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Token contract address to be transferred
 * @member {String} contractAddress
 */
AddTokensToExistingFromAddressRITSEET.prototype['contractAddress'] = undefined;






export default AddTokensToExistingFromAddressRITSEET;

