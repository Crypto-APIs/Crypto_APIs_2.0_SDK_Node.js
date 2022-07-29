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
import ListAllAssetsFromAllWalletsRData from './ListAllAssetsFromAllWalletsRData';

/**
 * The ListAllAssetsFromAllWalletsR model module.
 * @module model/ListAllAssetsFromAllWalletsR
 * @version 1.7.1
 */
class ListAllAssetsFromAllWalletsR {
    /**
     * Constructs a new <code>ListAllAssetsFromAllWalletsR</code>.
     * @alias module:model/ListAllAssetsFromAllWalletsR
     * @param apiVersion {String} Specifies the version of the API that incorporates this endpoint.
     * @param requestId {String} Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
     * @param data {module:model/ListAllAssetsFromAllWalletsRData} 
     */
    constructor(apiVersion, requestId, data) { 
        
        ListAllAssetsFromAllWalletsR.initialize(this, apiVersion, requestId, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, apiVersion, requestId, data) { 
        obj['apiVersion'] = apiVersion;
        obj['requestId'] = requestId;
        obj['data'] = data;
    }

    /**
     * Constructs a <code>ListAllAssetsFromAllWalletsR</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllAssetsFromAllWalletsR} obj Optional instance to populate.
     * @return {module:model/ListAllAssetsFromAllWalletsR} The populated <code>ListAllAssetsFromAllWalletsR</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAllAssetsFromAllWalletsR();

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
            if (data.hasOwnProperty('context')) {
                obj['context'] = ApiClient.convertToType(data['context'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ListAllAssetsFromAllWalletsRData.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * Specifies the version of the API that incorporates this endpoint.
 * @member {String} apiVersion
 */
ListAllAssetsFromAllWalletsR.prototype['apiVersion'] = undefined;

/**
 * Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
 * @member {String} requestId
 */
ListAllAssetsFromAllWalletsR.prototype['requestId'] = undefined;

/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */
ListAllAssetsFromAllWalletsR.prototype['context'] = undefined;

/**
 * @member {module:model/ListAllAssetsFromAllWalletsRData} data
 */
ListAllAssetsFromAllWalletsR.prototype['data'] = undefined;






export default ListAllAssetsFromAllWalletsR;

