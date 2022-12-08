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
import DeriveAndSyncNewChangeAddressesRBDataItem from './DeriveAndSyncNewChangeAddressesRBDataItem';

/**
 * The DeriveAndSyncNewChangeAddressesRBData model module.
 * @module model/DeriveAndSyncNewChangeAddressesRBData
 * @version 1.11.0
 */
class DeriveAndSyncNewChangeAddressesRBData {
    /**
     * Constructs a new <code>DeriveAndSyncNewChangeAddressesRBData</code>.
     * @alias module:model/DeriveAndSyncNewChangeAddressesRBData
     * @param item {module:model/DeriveAndSyncNewChangeAddressesRBDataItem} 
     */
    constructor(item) { 
        
        DeriveAndSyncNewChangeAddressesRBData.initialize(this, item);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, item) { 
        obj['item'] = item;
    }

    /**
     * Constructs a <code>DeriveAndSyncNewChangeAddressesRBData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeriveAndSyncNewChangeAddressesRBData} obj Optional instance to populate.
     * @return {module:model/DeriveAndSyncNewChangeAddressesRBData} The populated <code>DeriveAndSyncNewChangeAddressesRBData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeriveAndSyncNewChangeAddressesRBData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = DeriveAndSyncNewChangeAddressesRBDataItem.constructFromObject(data['item']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeriveAndSyncNewChangeAddressesRBData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeriveAndSyncNewChangeAddressesRBData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeriveAndSyncNewChangeAddressesRBData.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `item`
        if (data['item']) { // data not null
          DeriveAndSyncNewChangeAddressesRBDataItem.validateJSON(data['item']);
        }

        return true;
    }


}

DeriveAndSyncNewChangeAddressesRBData.RequiredProperties = ["item"];

/**
 * @member {module:model/DeriveAndSyncNewChangeAddressesRBDataItem} item
 */
DeriveAndSyncNewChangeAddressesRBData.prototype['item'] = undefined;






export default DeriveAndSyncNewChangeAddressesRBData;

