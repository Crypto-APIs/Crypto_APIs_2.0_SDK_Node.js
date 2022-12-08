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
import ListTokensTransfersByTransactionHashRI from './ListTokensTransfersByTransactionHashRI';

/**
 * The ListTokensTransfersByTransactionHashRData model module.
 * @module model/ListTokensTransfersByTransactionHashRData
 * @version 1.11.0
 */
class ListTokensTransfersByTransactionHashRData {
    /**
     * Constructs a new <code>ListTokensTransfersByTransactionHashRData</code>.
     * @alias module:model/ListTokensTransfersByTransactionHashRData
     * @param limit {Number} Defines how many items should be returned in the response per page basis.
     * @param offset {Number} The starting index of the response items, i.e. where the response should start listing the returned items.
     * @param total {Number} Defines the total number of items returned in the response.
     * @param items {Array.<module:model/ListTokensTransfersByTransactionHashRI>} 
     */
    constructor(limit, offset, total, items) { 
        
        ListTokensTransfersByTransactionHashRData.initialize(this, limit, offset, total, items);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, limit, offset, total, items) { 
        obj['limit'] = limit;
        obj['offset'] = offset;
        obj['total'] = total;
        obj['items'] = items;
    }

    /**
     * Constructs a <code>ListTokensTransfersByTransactionHashRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTokensTransfersByTransactionHashRData} obj Optional instance to populate.
     * @return {module:model/ListTokensTransfersByTransactionHashRData} The populated <code>ListTokensTransfersByTransactionHashRData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTokensTransfersByTransactionHashRData();

            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ListTokensTransfersByTransactionHashRI]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListTokensTransfersByTransactionHashRData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListTokensTransfersByTransactionHashRData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ListTokensTransfersByTransactionHashRData.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                ListTokensTransfersByTransactionHashRI.validateJsonObject(item);
            };
        }

        return true;
    }


}

ListTokensTransfersByTransactionHashRData.RequiredProperties = ["limit", "offset", "total", "items"];

/**
 * Defines how many items should be returned in the response per page basis.
 * @member {Number} limit
 */
ListTokensTransfersByTransactionHashRData.prototype['limit'] = undefined;

/**
 * The starting index of the response items, i.e. where the response should start listing the returned items.
 * @member {Number} offset
 */
ListTokensTransfersByTransactionHashRData.prototype['offset'] = undefined;

/**
 * Defines the total number of items returned in the response.
 * @member {Number} total
 */
ListTokensTransfersByTransactionHashRData.prototype['total'] = undefined;

/**
 * @member {Array.<module:model/ListTokensTransfersByTransactionHashRI>} items
 */
ListTokensTransfersByTransactionHashRData.prototype['items'] = undefined;






export default ListTokensTransfersByTransactionHashRData;

