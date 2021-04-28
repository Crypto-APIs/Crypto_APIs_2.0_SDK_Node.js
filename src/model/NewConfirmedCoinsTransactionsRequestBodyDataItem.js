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
 * The NewConfirmedCoinsTransactionsRequestBodyDataItem model module.
 * @module model/NewConfirmedCoinsTransactionsRequestBodyDataItem
 * @version 2.0.0
 */
class NewConfirmedCoinsTransactionsRequestBodyDataItem {
    /**
     * Constructs a new <code>NewConfirmedCoinsTransactionsRequestBodyDataItem</code>.
     * @alias module:model/NewConfirmedCoinsTransactionsRequestBodyDataItem
     * @param address {String} Represents the address of the transaction, per which the result is returned.
     * @param callbackURL {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs.
     */
    constructor(address, callbackURL) { 
        
        NewConfirmedCoinsTransactionsRequestBodyDataItem.initialize(this, address, callbackURL);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, callbackURL) { 
        obj['address'] = address;
        obj['callbackURL'] = callbackURL;
    }

    /**
     * Constructs a <code>NewConfirmedCoinsTransactionsRequestBodyDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedCoinsTransactionsRequestBodyDataItem} obj Optional instance to populate.
     * @return {module:model/NewConfirmedCoinsTransactionsRequestBodyDataItem} The populated <code>NewConfirmedCoinsTransactionsRequestBodyDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewConfirmedCoinsTransactionsRequestBodyDataItem();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('allowDuplicates')) {
                obj['allowDuplicates'] = ApiClient.convertToType(data['allowDuplicates'], 'Boolean');
            }
            if (data.hasOwnProperty('callbackSecretKey')) {
                obj['callbackSecretKey'] = ApiClient.convertToType(data['callbackSecretKey'], 'String');
            }
            if (data.hasOwnProperty('callbackURL')) {
                obj['callbackURL'] = ApiClient.convertToType(data['callbackURL'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the address of the transaction, per which the result is returned.
 * @member {String} address
 */
NewConfirmedCoinsTransactionsRequestBodyDataItem.prototype['address'] = undefined;

/**
 * Specifies a flag that permits or denies the creation of duplicate addresses.
 * @member {Boolean} allowDuplicates
 * @default false
 */
NewConfirmedCoinsTransactionsRequestBodyDataItem.prototype['allowDuplicates'] = false;

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs.
 * @member {String} callbackSecretKey
 */
NewConfirmedCoinsTransactionsRequestBodyDataItem.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs.
 * @member {String} callbackURL
 */
NewConfirmedCoinsTransactionsRequestBodyDataItem.prototype['callbackURL'] = undefined;






export default NewConfirmedCoinsTransactionsRequestBodyDataItem;

