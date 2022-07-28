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
 * The ListHDWalletXPubYPubZPubUTXOsRI model module.
 * @module model/ListHDWalletXPubYPubZPubUTXOsRI
 * @version 1.7.0
 */
class ListHDWalletXPubYPubZPubUTXOsRI {
    /**
     * Constructs a new <code>ListHDWalletXPubYPubZPubUTXOsRI</code>.
     * @alias module:model/ListHDWalletXPubYPubZPubUTXOsRI
     * @param address {String} Represents the public address, which is a compressed and shortened form of a public key.
     * @param addressPath {String} Defines a data which tells a Hierarchical Deterministic wallet how to derive a specific key within a tree of keys.
     * @param amount {String} Represents the UTXO amount value.
     * @param derivation {String} The way how the HD walled derives, for example when the type is ACCOUNT, it derives change and receive addresses while when the type is BIP32 it derives directly.
     * @param index {Number} Represents the output index. It refers to the UTXO sequence in the transaction outputs (vout).
     * @param isAvailable {Boolean} Represents if the UTXO has been used from another unconfirmed transaction. If it is - the value will be \"false\".
     * @param isConfirmed {Boolean} Represents the state of the transaction whether it is confirmed or not confirmed.
     * @param referenceId {String} Represents the reference id of the record. It may be used for the startingAfter pagination attribute.
     * @param transactionId {String} Represents the unique identifier of a transaction, i.e. it could be transactionId in UTXO-based protocols like Bitcoin, and transaction hash in Ethereum blockchain.
     */
    constructor(address, addressPath, amount, derivation, index, isAvailable, isConfirmed, referenceId, transactionId) { 
        
        ListHDWalletXPubYPubZPubUTXOsRI.initialize(this, address, addressPath, amount, derivation, index, isAvailable, isConfirmed, referenceId, transactionId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, addressPath, amount, derivation, index, isAvailable, isConfirmed, referenceId, transactionId) { 
        obj['address'] = address;
        obj['addressPath'] = addressPath;
        obj['amount'] = amount;
        obj['derivation'] = derivation;
        obj['index'] = index;
        obj['isAvailable'] = isAvailable;
        obj['isConfirmed'] = isConfirmed;
        obj['referenceId'] = referenceId;
        obj['transactionId'] = transactionId;
    }

    /**
     * Constructs a <code>ListHDWalletXPubYPubZPubUTXOsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListHDWalletXPubYPubZPubUTXOsRI} obj Optional instance to populate.
     * @return {module:model/ListHDWalletXPubYPubZPubUTXOsRI} The populated <code>ListHDWalletXPubYPubZPubUTXOsRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListHDWalletXPubYPubZPubUTXOsRI();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('addressPath')) {
                obj['addressPath'] = ApiClient.convertToType(data['addressPath'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('derivation')) {
                obj['derivation'] = ApiClient.convertToType(data['derivation'], 'String');
            }
            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'Number');
            }
            if (data.hasOwnProperty('isAvailable')) {
                obj['isAvailable'] = ApiClient.convertToType(data['isAvailable'], 'Boolean');
            }
            if (data.hasOwnProperty('isConfirmed')) {
                obj['isConfirmed'] = ApiClient.convertToType(data['isConfirmed'], 'Boolean');
            }
            if (data.hasOwnProperty('referenceId')) {
                obj['referenceId'] = ApiClient.convertToType(data['referenceId'], 'String');
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the public address, which is a compressed and shortened form of a public key.
 * @member {String} address
 */
ListHDWalletXPubYPubZPubUTXOsRI.prototype['address'] = undefined;

/**
 * Defines a data which tells a Hierarchical Deterministic wallet how to derive a specific key within a tree of keys.
 * @member {String} addressPath
 */
ListHDWalletXPubYPubZPubUTXOsRI.prototype['addressPath'] = undefined;

/**
 * Represents the UTXO amount value.
 * @member {String} amount
 */
ListHDWalletXPubYPubZPubUTXOsRI.prototype['amount'] = undefined;

/**
 * The way how the HD walled derives, for example when the type is ACCOUNT, it derives change and receive addresses while when the type is BIP32 it derives directly.
 * @member {String} derivation
 */
ListHDWalletXPubYPubZPubUTXOsRI.prototype['derivation'] = undefined;

/**
 * Represents the output index. It refers to the UTXO sequence in the transaction outputs (vout).
 * @member {Number} index
 */
ListHDWalletXPubYPubZPubUTXOsRI.prototype['index'] = undefined;

/**
 * Represents if the UTXO has been used from another unconfirmed transaction. If it is - the value will be \"false\".
 * @member {Boolean} isAvailable
 */
ListHDWalletXPubYPubZPubUTXOsRI.prototype['isAvailable'] = undefined;

/**
 * Represents the state of the transaction whether it is confirmed or not confirmed.
 * @member {Boolean} isConfirmed
 */
ListHDWalletXPubYPubZPubUTXOsRI.prototype['isConfirmed'] = undefined;

/**
 * Represents the reference id of the record. It may be used for the startingAfter pagination attribute.
 * @member {String} referenceId
 */
ListHDWalletXPubYPubZPubUTXOsRI.prototype['referenceId'] = undefined;

/**
 * Represents the unique identifier of a transaction, i.e. it could be transactionId in UTXO-based protocols like Bitcoin, and transaction hash in Ethereum blockchain.
 * @member {String} transactionId
 */
ListHDWalletXPubYPubZPubUTXOsRI.prototype['transactionId'] = undefined;






export default ListHDWalletXPubYPubZPubUTXOsRI;

