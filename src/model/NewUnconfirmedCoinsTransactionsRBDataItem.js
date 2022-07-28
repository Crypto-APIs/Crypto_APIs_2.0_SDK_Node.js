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
 * The NewUnconfirmedCoinsTransactionsRBDataItem model module.
 * @module model/NewUnconfirmedCoinsTransactionsRBDataItem
 * @version 1.7.0
 */
class NewUnconfirmedCoinsTransactionsRBDataItem {
    /**
     * Constructs a new <code>NewUnconfirmedCoinsTransactionsRBDataItem</code>.
     * @alias module:model/NewUnconfirmedCoinsTransactionsRBDataItem
     * @param address {String} Represents the address of the transaction, per which the result is returned.
     * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
     */
    constructor(address, callbackUrl) { 
        
        NewUnconfirmedCoinsTransactionsRBDataItem.initialize(this, address, callbackUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, callbackUrl) { 
        obj['address'] = address;
        obj['callbackUrl'] = callbackUrl;
    }

    /**
     * Constructs a <code>NewUnconfirmedCoinsTransactionsRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewUnconfirmedCoinsTransactionsRBDataItem} obj Optional instance to populate.
     * @return {module:model/NewUnconfirmedCoinsTransactionsRBDataItem} The populated <code>NewUnconfirmedCoinsTransactionsRBDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewUnconfirmedCoinsTransactionsRBDataItem();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('allowDuplicates')) {
                obj['allowDuplicates'] = ApiClient.convertToType(data['allowDuplicates'], 'Boolean');
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
 * Represents the address of the transaction, per which the result is returned.
 * @member {String} address
 */
NewUnconfirmedCoinsTransactionsRBDataItem.prototype['address'] = undefined;

/**
 * Specifies a flag that permits or denies the creation of duplicate addresses.
 * @member {Boolean} allowDuplicates
 * @default false
 */
NewUnconfirmedCoinsTransactionsRBDataItem.prototype['allowDuplicates'] = false;

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs 2.0. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
NewUnconfirmedCoinsTransactionsRBDataItem.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
NewUnconfirmedCoinsTransactionsRBDataItem.prototype['callbackUrl'] = undefined;






export default NewUnconfirmedCoinsTransactionsRBDataItem;

