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
 * The PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVinInner model module.
 * @module model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVinInner
 * @version 1.12.0
 */
class PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVinInner {
    /**
     * Constructs a new <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVinInner</code>.
     * @alias module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVinInner
     * @param address {String} Representation of the address
     * @param change {Number} Representation of the change value
     * @param derivationIndex {Number} Representation of the derivation index of the xpub address.
     * @param outputIndex {Number} Representation of the output index
     * @param satoshis {Number} Representation of the satoshis value
     * @param script {String} Representation of the script string
     * @param sighash {String} Representation of the hash that should be signed.
     * @param transactionId {String} Represents the reference transaction identifier.
     */
    constructor(address, change, derivationIndex, outputIndex, satoshis, script, sighash, transactionId) { 
        
        PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVinInner.initialize(this, address, change, derivationIndex, outputIndex, satoshis, script, sighash, transactionId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, change, derivationIndex, outputIndex, satoshis, script, sighash, transactionId) { 
        obj['address'] = address;
        obj['change'] = change;
        obj['derivationIndex'] = derivationIndex;
        obj['outputIndex'] = outputIndex;
        obj['satoshis'] = satoshis;
        obj['script'] = script;
        obj['sighash'] = sighash;
        obj['transactionId'] = transactionId;
    }

    /**
     * Constructs a <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVinInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVinInner} obj Optional instance to populate.
     * @return {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVinInner} The populated <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVinInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVinInner();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('change')) {
                obj['change'] = ApiClient.convertToType(data['change'], 'Number');
            }
            if (data.hasOwnProperty('derivationIndex')) {
                obj['derivationIndex'] = ApiClient.convertToType(data['derivationIndex'], 'Number');
            }
            if (data.hasOwnProperty('outputIndex')) {
                obj['outputIndex'] = ApiClient.convertToType(data['outputIndex'], 'Number');
            }
            if (data.hasOwnProperty('satoshis')) {
                obj['satoshis'] = ApiClient.convertToType(data['satoshis'], 'Number');
            }
            if (data.hasOwnProperty('script')) {
                obj['script'] = ApiClient.convertToType(data['script'], 'String');
            }
            if (data.hasOwnProperty('sighash')) {
                obj['sighash'] = ApiClient.convertToType(data['sighash'], 'String');
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Representation of the address
 * @member {String} address
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVinInner.prototype['address'] = undefined;

/**
 * Representation of the change value
 * @member {Number} change
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVinInner.prototype['change'] = undefined;

/**
 * Representation of the derivation index of the xpub address.
 * @member {Number} derivationIndex
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVinInner.prototype['derivationIndex'] = undefined;

/**
 * Representation of the output index
 * @member {Number} outputIndex
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVinInner.prototype['outputIndex'] = undefined;

/**
 * Representation of the satoshis value
 * @member {Number} satoshis
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVinInner.prototype['satoshis'] = undefined;

/**
 * Representation of the script string
 * @member {String} script
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVinInner.prototype['script'] = undefined;

/**
 * Representation of the hash that should be signed.
 * @member {String} sighash
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVinInner.prototype['sighash'] = undefined;

/**
 * Represents the reference transaction identifier.
 * @member {String} transactionId
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVinInner.prototype['transactionId'] = undefined;






export default PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVinInner;

