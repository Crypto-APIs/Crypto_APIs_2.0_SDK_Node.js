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
import ListAssetsDetailsResponseItemAssetLogo from './ListAssetsDetailsResponseItemAssetLogo';
import ListAssetsDetailsResponseItemLatestRate from './ListAssetsDetailsResponseItemLatestRate';
import ListAssetsDetailsResponseItemSpecificData from './ListAssetsDetailsResponseItemSpecificData';

/**
 * The ListAssetsDetailsResponseItem model module.
 * @module model/ListAssetsDetailsResponseItem
 * @version 2.0.0
 */
class ListAssetsDetailsResponseItem {
    /**
     * Constructs a new <code>ListAssetsDetailsResponseItem</code>.
     * @alias module:model/ListAssetsDetailsResponseItem
     * @param assetId {String} Defines the unique ID of the specific asset.
     * @param assetLogo {module:model/ListAssetsDetailsResponseItemAssetLogo} 
     * @param assetName {String} Specifies the name of the asset in question.
     * @param assetOriginalSymbol {String} Specifies the asset's original symbol as introduced by its founders.
     * @param assetSymbol {String} Specifies the asset's unique symbol in the Crypto APIs listings.
     * @param assetType {module:model/ListAssetsDetailsResponseItem.AssetTypeEnum} Defines the type of the supported asset. This could be either \"crypto\" or \"fiat\".
     * @param latestRate {module:model/ListAssetsDetailsResponseItemLatestRate} 
     * @param specificData {module:model/ListAssetsDetailsResponseItemSpecificData} 
     */
    constructor(assetId, assetLogo, assetName, assetOriginalSymbol, assetSymbol, assetType, latestRate, specificData) { 
        
        ListAssetsDetailsResponseItem.initialize(this, assetId, assetLogo, assetName, assetOriginalSymbol, assetSymbol, assetType, latestRate, specificData);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, assetId, assetLogo, assetName, assetOriginalSymbol, assetSymbol, assetType, latestRate, specificData) { 
        obj['assetId'] = assetId;
        obj['assetLogo'] = assetLogo;
        obj['assetName'] = assetName;
        obj['assetOriginalSymbol'] = assetOriginalSymbol;
        obj['assetSymbol'] = assetSymbol;
        obj['assetType'] = assetType;
        obj['latestRate'] = latestRate;
        obj['specificData'] = specificData;
    }

    /**
     * Constructs a <code>ListAssetsDetailsResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAssetsDetailsResponseItem} obj Optional instance to populate.
     * @return {module:model/ListAssetsDetailsResponseItem} The populated <code>ListAssetsDetailsResponseItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAssetsDetailsResponseItem();

            if (data.hasOwnProperty('assetId')) {
                obj['assetId'] = ApiClient.convertToType(data['assetId'], 'String');
            }
            if (data.hasOwnProperty('assetLogo')) {
                obj['assetLogo'] = ListAssetsDetailsResponseItemAssetLogo.constructFromObject(data['assetLogo']);
            }
            if (data.hasOwnProperty('assetName')) {
                obj['assetName'] = ApiClient.convertToType(data['assetName'], 'String');
            }
            if (data.hasOwnProperty('assetOriginalSymbol')) {
                obj['assetOriginalSymbol'] = ApiClient.convertToType(data['assetOriginalSymbol'], 'String');
            }
            if (data.hasOwnProperty('assetSymbol')) {
                obj['assetSymbol'] = ApiClient.convertToType(data['assetSymbol'], 'String');
            }
            if (data.hasOwnProperty('assetType')) {
                obj['assetType'] = ApiClient.convertToType(data['assetType'], 'String');
            }
            if (data.hasOwnProperty('latestRate')) {
                obj['latestRate'] = ListAssetsDetailsResponseItemLatestRate.constructFromObject(data['latestRate']);
            }
            if (data.hasOwnProperty('specificData')) {
                obj['specificData'] = ListAssetsDetailsResponseItemSpecificData.constructFromObject(data['specificData']);
            }
        }
        return obj;
    }


}

/**
 * Defines the unique ID of the specific asset.
 * @member {String} assetId
 */
ListAssetsDetailsResponseItem.prototype['assetId'] = undefined;

/**
 * @member {module:model/ListAssetsDetailsResponseItemAssetLogo} assetLogo
 */
ListAssetsDetailsResponseItem.prototype['assetLogo'] = undefined;

/**
 * Specifies the name of the asset in question.
 * @member {String} assetName
 */
ListAssetsDetailsResponseItem.prototype['assetName'] = undefined;

/**
 * Specifies the asset's original symbol as introduced by its founders.
 * @member {String} assetOriginalSymbol
 */
ListAssetsDetailsResponseItem.prototype['assetOriginalSymbol'] = undefined;

/**
 * Specifies the asset's unique symbol in the Crypto APIs listings.
 * @member {String} assetSymbol
 */
ListAssetsDetailsResponseItem.prototype['assetSymbol'] = undefined;

/**
 * Defines the type of the supported asset. This could be either \"crypto\" or \"fiat\".
 * @member {module:model/ListAssetsDetailsResponseItem.AssetTypeEnum} assetType
 */
ListAssetsDetailsResponseItem.prototype['assetType'] = undefined;

/**
 * @member {module:model/ListAssetsDetailsResponseItemLatestRate} latestRate
 */
ListAssetsDetailsResponseItem.prototype['latestRate'] = undefined;

/**
 * @member {module:model/ListAssetsDetailsResponseItemSpecificData} specificData
 */
ListAssetsDetailsResponseItem.prototype['specificData'] = undefined;





/**
 * Allowed values for the <code>assetType</code> property.
 * @enum {String}
 * @readonly
 */
ListAssetsDetailsResponseItem['AssetTypeEnum'] = {

    /**
     * value: "fiat"
     * @const
     */
    "fiat": "fiat",

    /**
     * value: "crypto"
     * @const
     */
    "crypto": "crypto"
};



export default ListAssetsDetailsResponseItem;

