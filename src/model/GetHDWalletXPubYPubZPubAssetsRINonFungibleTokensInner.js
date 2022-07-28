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
 * The GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner model module.
 * @module model/GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner
 * @version 1.7.0
 */
class GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner {
    /**
     * Constructs a new <code>GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner</code>.
     * @alias module:model/GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner
     * @param identifier {String} Represents tokens' contract address.
     * @param symbol {String} Defines the symbol of the non-fungible token.
     * @param tokenId {String} Represents tokens' unique identifier.
     * @param type {String} Defines the specific token type.
     */
    constructor(identifier, symbol, tokenId, type) { 
        
        GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner.initialize(this, identifier, symbol, tokenId, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, identifier, symbol, tokenId, type) { 
        obj['identifier'] = identifier;
        obj['symbol'] = symbol;
        obj['tokenId'] = tokenId;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner} obj Optional instance to populate.
     * @return {module:model/GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner} The populated <code>GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner();

            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('tokenId')) {
                obj['tokenId'] = ApiClient.convertToType(data['tokenId'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents tokens' contract address.
 * @member {String} identifier
 */
GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner.prototype['identifier'] = undefined;

/**
 * Defines the symbol of the non-fungible token.
 * @member {String} symbol
 */
GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner.prototype['symbol'] = undefined;

/**
 * Represents tokens' unique identifier.
 * @member {String} tokenId
 */
GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner.prototype['tokenId'] = undefined;

/**
 * Defines the specific token type.
 * @member {String} type
 */
GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner.prototype['type'] = undefined;






export default GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner;

