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
 * The BlockHeightReachedRBDataItem model module.
 * @module model/BlockHeightReachedRBDataItem
 * @version 1.7.0
 */
class BlockHeightReachedRBDataItem {
    /**
     * Constructs a new <code>BlockHeightReachedRBDataItem</code>.
     * @alias module:model/BlockHeightReachedRBDataItem
     * @param blockHeightReached {Number} Represents the specified value of block height for which the callback will be received.
     * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
     */
    constructor(blockHeightReached, callbackUrl) { 
        
        BlockHeightReachedRBDataItem.initialize(this, blockHeightReached, callbackUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockHeightReached, callbackUrl) { 
        obj['blockHeightReached'] = blockHeightReached;
        obj['callbackUrl'] = callbackUrl;
    }

    /**
     * Constructs a <code>BlockHeightReachedRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockHeightReachedRBDataItem} obj Optional instance to populate.
     * @return {module:model/BlockHeightReachedRBDataItem} The populated <code>BlockHeightReachedRBDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BlockHeightReachedRBDataItem();

            if (data.hasOwnProperty('allowDuplicates')) {
                obj['allowDuplicates'] = ApiClient.convertToType(data['allowDuplicates'], 'Boolean');
            }
            if (data.hasOwnProperty('blockHeightReached')) {
                obj['blockHeightReached'] = ApiClient.convertToType(data['blockHeightReached'], 'Number');
            }
            if (data.hasOwnProperty('callbackSecretKey')) {
                obj['callbackSecretKey'] = ApiClient.convertToType(data['callbackSecretKey'], 'String');
            }
            if (data.hasOwnProperty('callbackUrl')) {
                obj['callbackUrl'] = ApiClient.convertToType(data['callbackUrl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Specifies a flag that permits or denies the creation of duplicate addresses.
 * @member {Boolean} allowDuplicates
 * @default false
 */
BlockHeightReachedRBDataItem.prototype['allowDuplicates'] = false;

/**
 * Represents the specified value of block height for which the callback will be received.
 * @member {Number} blockHeightReached
 */
BlockHeightReachedRBDataItem.prototype['blockHeightReached'] = undefined;

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
BlockHeightReachedRBDataItem.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
BlockHeightReachedRBDataItem.prototype['callbackUrl'] = undefined;






export default BlockHeightReachedRBDataItem;
