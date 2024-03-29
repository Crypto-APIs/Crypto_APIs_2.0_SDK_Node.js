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
 * The PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVoutInner model module.
 * @module model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVoutInner
 * @version 1.13.0
 */
class PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVoutInner {
    /**
     * Constructs a new <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVoutInner</code>.
     * @alias module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVoutInner
     * @param address {String} Representation of the address
     * @param satoshis {Number} Representation of the satoshis value
     * @param script {String} Representation of the script
     */
    constructor(address, satoshis, script) { 
        
        PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVoutInner.initialize(this, address, satoshis, script);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, satoshis, script) { 
        obj['address'] = address;
        obj['satoshis'] = satoshis;
        obj['script'] = script;
    }

    /**
     * Constructs a <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVoutInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVoutInner} obj Optional instance to populate.
     * @return {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVoutInner} The populated <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVoutInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVoutInner();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('satoshis')) {
                obj['satoshis'] = ApiClient.convertToType(data['satoshis'], 'Number');
            }
            if (data.hasOwnProperty('script')) {
                obj['script'] = ApiClient.convertToType(data['script'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Representation of the address
 * @member {String} address
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVoutInner.prototype['address'] = undefined;

/**
 * Representation of the satoshis value
 * @member {Number} satoshis
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVoutInner.prototype['satoshis'] = undefined;

/**
 * Representation of the script
 * @member {String} script
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVoutInner.prototype['script'] = undefined;






export default PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVoutInner;

