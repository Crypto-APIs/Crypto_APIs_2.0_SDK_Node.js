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
import GetAddressDetailsResponseItem from './GetAddressDetailsResponseItem';

/**
 * The GetAddressDetailsResponseData model module.
 * @module model/GetAddressDetailsResponseData
 * @version 2.0.0
 */
class GetAddressDetailsResponseData {
    /**
     * Constructs a new <code>GetAddressDetailsResponseData</code>.
     * @alias module:model/GetAddressDetailsResponseData
     * @param item {module:model/GetAddressDetailsResponseItem} 
     */
    constructor(item) { 
        
        GetAddressDetailsResponseData.initialize(this, item);
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
     * Constructs a <code>GetAddressDetailsResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAddressDetailsResponseData} obj Optional instance to populate.
     * @return {module:model/GetAddressDetailsResponseData} The populated <code>GetAddressDetailsResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAddressDetailsResponseData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = GetAddressDetailsResponseItem.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetAddressDetailsResponseItem} item
 */
GetAddressDetailsResponseData.prototype['item'] = undefined;






export default GetAddressDetailsResponseData;

