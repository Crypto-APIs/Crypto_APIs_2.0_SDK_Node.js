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
 * The GetTokenDetailsByContractAddressRI model module.
 * @module model/GetTokenDetailsByContractAddressRI
 * @version 1.12.0
 */
class GetTokenDetailsByContractAddressRI {
    /**
     * Constructs a new <code>GetTokenDetailsByContractAddressRI</code>.
     * @alias module:model/GetTokenDetailsByContractAddressRI
     * @param tokenDecimals {String} Defines the number of decimals that the token possesses.
     * @param tokenType {String} Defines the type of the token.
     * @param totalSupply {String} Defines the total number of tokens created that exist on the market minus the ones that have been burned.
     */
    constructor(tokenDecimals, tokenType, totalSupply) { 
        
        GetTokenDetailsByContractAddressRI.initialize(this, tokenDecimals, tokenType, totalSupply);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tokenDecimals, tokenType, totalSupply) { 
        obj['tokenDecimals'] = tokenDecimals;
        obj['tokenType'] = tokenType;
        obj['totalSupply'] = totalSupply;
    }

    /**
     * Constructs a <code>GetTokenDetailsByContractAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTokenDetailsByContractAddressRI} obj Optional instance to populate.
     * @return {module:model/GetTokenDetailsByContractAddressRI} The populated <code>GetTokenDetailsByContractAddressRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTokenDetailsByContractAddressRI();

            if (data.hasOwnProperty('tokenDecimals')) {
                obj['tokenDecimals'] = ApiClient.convertToType(data['tokenDecimals'], 'String');
            }
            if (data.hasOwnProperty('tokenName')) {
                obj['tokenName'] = ApiClient.convertToType(data['tokenName'], 'String');
            }
            if (data.hasOwnProperty('tokenSymbol')) {
                obj['tokenSymbol'] = ApiClient.convertToType(data['tokenSymbol'], 'String');
            }
            if (data.hasOwnProperty('tokenType')) {
                obj['tokenType'] = ApiClient.convertToType(data['tokenType'], 'String');
            }
            if (data.hasOwnProperty('totalSupply')) {
                obj['totalSupply'] = ApiClient.convertToType(data['totalSupply'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the number of decimals that the token possesses.
 * @member {String} tokenDecimals
 */
GetTokenDetailsByContractAddressRI.prototype['tokenDecimals'] = undefined;

/**
 * Specifies the token's name.
 * @member {String} tokenName
 */
GetTokenDetailsByContractAddressRI.prototype['tokenName'] = undefined;

/**
 * Defines the unique symbol of the token.
 * @member {String} tokenSymbol
 */
GetTokenDetailsByContractAddressRI.prototype['tokenSymbol'] = undefined;

/**
 * Defines the type of the token.
 * @member {String} tokenType
 */
GetTokenDetailsByContractAddressRI.prototype['tokenType'] = undefined;

/**
 * Defines the total number of tokens created that exist on the market minus the ones that have been burned.
 * @member {String} totalSupply
 */
GetTokenDetailsByContractAddressRI.prototype['totalSupply'] = undefined;






export default GetTokenDetailsByContractAddressRI;

