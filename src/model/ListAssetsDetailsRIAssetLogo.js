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
 * The ListAssetsDetailsRIAssetLogo model module.
 * @module model/ListAssetsDetailsRIAssetLogo
 * @version 1.1.0
 */
class ListAssetsDetailsRIAssetLogo {
    /**
     * Constructs a new <code>ListAssetsDetailsRIAssetLogo</code>.
     * Defines the logo of the asset.
     * @alias module:model/ListAssetsDetailsRIAssetLogo
     * @param encoding {String} Defines the encoding of the image data which is usually base64.
     * @param imageData {String} Defines the encoded image data as a string.
     * @param mimeType {String} Defines the image type of the logo - jpg, png, svg, etc.
     */
    constructor(encoding, imageData, mimeType) { 
        
        ListAssetsDetailsRIAssetLogo.initialize(this, encoding, imageData, mimeType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, encoding, imageData, mimeType) { 
        obj['encoding'] = encoding;
        obj['imageData'] = imageData;
        obj['mimeType'] = mimeType;
    }

    /**
     * Constructs a <code>ListAssetsDetailsRIAssetLogo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAssetsDetailsRIAssetLogo} obj Optional instance to populate.
     * @return {module:model/ListAssetsDetailsRIAssetLogo} The populated <code>ListAssetsDetailsRIAssetLogo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAssetsDetailsRIAssetLogo();

            if (data.hasOwnProperty('encoding')) {
                obj['encoding'] = ApiClient.convertToType(data['encoding'], 'String');
            }
            if (data.hasOwnProperty('imageData')) {
                obj['imageData'] = ApiClient.convertToType(data['imageData'], 'String');
            }
            if (data.hasOwnProperty('mimeType')) {
                obj['mimeType'] = ApiClient.convertToType(data['mimeType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the encoding of the image data which is usually base64.
 * @member {String} encoding
 */
ListAssetsDetailsRIAssetLogo.prototype['encoding'] = undefined;

/**
 * Defines the encoded image data as a string.
 * @member {String} imageData
 */
ListAssetsDetailsRIAssetLogo.prototype['imageData'] = undefined;

/**
 * Defines the image type of the logo - jpg, png, svg, etc.
 * @member {String} mimeType
 */
ListAssetsDetailsRIAssetLogo.prototype['mimeType'] = undefined;






export default ListAssetsDetailsRIAssetLogo;

