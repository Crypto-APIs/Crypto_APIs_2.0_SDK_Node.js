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
 * The CreateTokensTransactionRequestFromAddressRISenders model module.
 * @module model/CreateTokensTransactionRequestFromAddressRISenders
 * @version 1.1.0
 */
class CreateTokensTransactionRequestFromAddressRISenders {
    /**
     * Constructs a new <code>CreateTokensTransactionRequestFromAddressRISenders</code>.
     * Defines details about the source, i.e. the sender.
     * @alias module:model/CreateTokensTransactionRequestFromAddressRISenders
     * @param address {String} Defines the sender's public address.
     */
    constructor(address) { 
        
        CreateTokensTransactionRequestFromAddressRISenders.initialize(this, address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address) { 
        obj['address'] = address;
    }

    /**
     * Constructs a <code>CreateTokensTransactionRequestFromAddressRISenders</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTokensTransactionRequestFromAddressRISenders} obj Optional instance to populate.
     * @return {module:model/CreateTokensTransactionRequestFromAddressRISenders} The populated <code>CreateTokensTransactionRequestFromAddressRISenders</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTokensTransactionRequestFromAddressRISenders();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the sender's public address.
 * @member {String} address
 */
CreateTokensTransactionRequestFromAddressRISenders.prototype['address'] = undefined;






export default CreateTokensTransactionRequestFromAddressRISenders;
