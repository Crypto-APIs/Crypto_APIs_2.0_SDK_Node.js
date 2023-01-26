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
 * The PrepareANonFungibleTokenTransferFromAddressRBDataItemFee model module.
 * @module model/PrepareANonFungibleTokenTransferFromAddressRBDataItemFee
 * @version 1.12.0
 */
class PrepareANonFungibleTokenTransferFromAddressRBDataItemFee {
    /**
     * Constructs a new <code>PrepareANonFungibleTokenTransferFromAddressRBDataItemFee</code>.
     * @alias module:model/PrepareANonFungibleTokenTransferFromAddressRBDataItemFee
     * @param priority {module:model/PrepareANonFungibleTokenTransferFromAddressRBDataItemFee.PriorityEnum} Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\"
     */
    constructor(priority) { 
        
        PrepareANonFungibleTokenTransferFromAddressRBDataItemFee.initialize(this, priority);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, priority) { 
        obj['priority'] = priority;
    }

    /**
     * Constructs a <code>PrepareANonFungibleTokenTransferFromAddressRBDataItemFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareANonFungibleTokenTransferFromAddressRBDataItemFee} obj Optional instance to populate.
     * @return {module:model/PrepareANonFungibleTokenTransferFromAddressRBDataItemFee} The populated <code>PrepareANonFungibleTokenTransferFromAddressRBDataItemFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepareANonFungibleTokenTransferFromAddressRBDataItemFee();

            if (data.hasOwnProperty('exactAmount')) {
                obj['exactAmount'] = ApiClient.convertToType(data['exactAmount'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Representation of the exact amount to be transfered.
 * @member {String} exactAmount
 */
PrepareANonFungibleTokenTransferFromAddressRBDataItemFee.prototype['exactAmount'] = undefined;

/**
 * Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\"
 * @member {module:model/PrepareANonFungibleTokenTransferFromAddressRBDataItemFee.PriorityEnum} priority
 */
PrepareANonFungibleTokenTransferFromAddressRBDataItemFee.prototype['priority'] = undefined;





/**
 * Allowed values for the <code>priority</code> property.
 * @enum {String}
 * @readonly
 */
PrepareANonFungibleTokenTransferFromAddressRBDataItemFee['PriorityEnum'] = {

    /**
     * value: "slow"
     * @const
     */
    "slow": "slow",

    /**
     * value: "standard"
     * @const
     */
    "standard": "standard",

    /**
     * value: "fast"
     * @const
     */
    "fast": "fast"
};



export default PrepareANonFungibleTokenTransferFromAddressRBDataItemFee;

