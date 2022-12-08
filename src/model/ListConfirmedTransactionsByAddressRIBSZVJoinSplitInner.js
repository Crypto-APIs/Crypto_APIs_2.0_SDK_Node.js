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
 * The ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner model module.
 * @module model/ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner
 * @version 1.11.0
 */
class ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner {
    /**
     * Constructs a new <code>ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner</code>.
     * @alias module:model/ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner
     * @param anchor {String} Defines a Merkle tree root of a note commitment tree which uniquely identifies a note commitment tree state given the assumed security properties of the Merkle tree’s  hash function.
     * @param cipherTexts {Array.<String>} 
     * @param commitments {Array.<String>} 
     * @param macs {Array.<String>} 
     * @param nullifiers {Array.<String>} 
     * @param oneTimePubKey {String} Defines the one time public key.
     * @param proof {String} Defines the proof.
     * @param randomSeed {String} Represents a 256-bit seed that must be chosen independently at random for each JoinSplit description.
     * @param vPubNew {String} Defines the value that the joinSplit transfer will insert into the transparent transaction value pool.
     * @param vPubOld {String} Defines the value that the joinSplit transfer will remove from the transparent transaction value pool.
     */
    constructor(anchor, cipherTexts, commitments, macs, nullifiers, oneTimePubKey, proof, randomSeed, vPubNew, vPubOld) { 
        
        ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner.initialize(this, anchor, cipherTexts, commitments, macs, nullifiers, oneTimePubKey, proof, randomSeed, vPubNew, vPubOld);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, anchor, cipherTexts, commitments, macs, nullifiers, oneTimePubKey, proof, randomSeed, vPubNew, vPubOld) { 
        obj['anchor'] = anchor;
        obj['cipherTexts'] = cipherTexts;
        obj['commitments'] = commitments;
        obj['macs'] = macs;
        obj['nullifiers'] = nullifiers;
        obj['oneTimePubKey'] = oneTimePubKey;
        obj['proof'] = proof;
        obj['randomSeed'] = randomSeed;
        obj['vPubNew'] = vPubNew;
        obj['vPubOld'] = vPubOld;
    }

    /**
     * Constructs a <code>ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner} The populated <code>ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner();

            if (data.hasOwnProperty('anchor')) {
                obj['anchor'] = ApiClient.convertToType(data['anchor'], 'String');
            }
            if (data.hasOwnProperty('cipherTexts')) {
                obj['cipherTexts'] = ApiClient.convertToType(data['cipherTexts'], ['String']);
            }
            if (data.hasOwnProperty('commitments')) {
                obj['commitments'] = ApiClient.convertToType(data['commitments'], ['String']);
            }
            if (data.hasOwnProperty('macs')) {
                obj['macs'] = ApiClient.convertToType(data['macs'], ['String']);
            }
            if (data.hasOwnProperty('nullifiers')) {
                obj['nullifiers'] = ApiClient.convertToType(data['nullifiers'], ['String']);
            }
            if (data.hasOwnProperty('oneTimePubKey')) {
                obj['oneTimePubKey'] = ApiClient.convertToType(data['oneTimePubKey'], 'String');
            }
            if (data.hasOwnProperty('proof')) {
                obj['proof'] = ApiClient.convertToType(data['proof'], 'String');
            }
            if (data.hasOwnProperty('randomSeed')) {
                obj['randomSeed'] = ApiClient.convertToType(data['randomSeed'], 'String');
            }
            if (data.hasOwnProperty('vPubNew')) {
                obj['vPubNew'] = ApiClient.convertToType(data['vPubNew'], 'String');
            }
            if (data.hasOwnProperty('vPubOld')) {
                obj['vPubOld'] = ApiClient.convertToType(data['vPubOld'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['anchor'] && !(typeof data['anchor'] === 'string' || data['anchor'] instanceof String)) {
            throw new Error("Expected the field `anchor` to be a primitive type in the JSON string but got " + data['anchor']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['cipherTexts'])) {
            throw new Error("Expected the field `cipherTexts` to be an array in the JSON data but got " + data['cipherTexts']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['commitments'])) {
            throw new Error("Expected the field `commitments` to be an array in the JSON data but got " + data['commitments']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['macs'])) {
            throw new Error("Expected the field `macs` to be an array in the JSON data but got " + data['macs']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['nullifiers'])) {
            throw new Error("Expected the field `nullifiers` to be an array in the JSON data but got " + data['nullifiers']);
        }
        // ensure the json data is a string
        if (data['oneTimePubKey'] && !(typeof data['oneTimePubKey'] === 'string' || data['oneTimePubKey'] instanceof String)) {
            throw new Error("Expected the field `oneTimePubKey` to be a primitive type in the JSON string but got " + data['oneTimePubKey']);
        }
        // ensure the json data is a string
        if (data['proof'] && !(typeof data['proof'] === 'string' || data['proof'] instanceof String)) {
            throw new Error("Expected the field `proof` to be a primitive type in the JSON string but got " + data['proof']);
        }
        // ensure the json data is a string
        if (data['randomSeed'] && !(typeof data['randomSeed'] === 'string' || data['randomSeed'] instanceof String)) {
            throw new Error("Expected the field `randomSeed` to be a primitive type in the JSON string but got " + data['randomSeed']);
        }
        // ensure the json data is a string
        if (data['vPubNew'] && !(typeof data['vPubNew'] === 'string' || data['vPubNew'] instanceof String)) {
            throw new Error("Expected the field `vPubNew` to be a primitive type in the JSON string but got " + data['vPubNew']);
        }
        // ensure the json data is a string
        if (data['vPubOld'] && !(typeof data['vPubOld'] === 'string' || data['vPubOld'] instanceof String)) {
            throw new Error("Expected the field `vPubOld` to be a primitive type in the JSON string but got " + data['vPubOld']);
        }

        return true;
    }


}

ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner.RequiredProperties = ["anchor", "cipherTexts", "commitments", "macs", "nullifiers", "oneTimePubKey", "proof", "randomSeed", "vPubNew", "vPubOld"];

/**
 * Defines a Merkle tree root of a note commitment tree which uniquely identifies a note commitment tree state given the assumed security properties of the Merkle tree’s  hash function.
 * @member {String} anchor
 */
ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner.prototype['anchor'] = undefined;

/**
 * @member {Array.<String>} cipherTexts
 */
ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner.prototype['cipherTexts'] = undefined;

/**
 * @member {Array.<String>} commitments
 */
ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner.prototype['commitments'] = undefined;

/**
 * @member {Array.<String>} macs
 */
ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner.prototype['macs'] = undefined;

/**
 * @member {Array.<String>} nullifiers
 */
ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner.prototype['nullifiers'] = undefined;

/**
 * Defines the one time public key.
 * @member {String} oneTimePubKey
 */
ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner.prototype['oneTimePubKey'] = undefined;

/**
 * Defines the proof.
 * @member {String} proof
 */
ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner.prototype['proof'] = undefined;

/**
 * Represents a 256-bit seed that must be chosen independently at random for each JoinSplit description.
 * @member {String} randomSeed
 */
ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner.prototype['randomSeed'] = undefined;

/**
 * Defines the value that the joinSplit transfer will insert into the transparent transaction value pool.
 * @member {String} vPubNew
 */
ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner.prototype['vPubNew'] = undefined;

/**
 * Defines the value that the joinSplit transfer will remove from the transparent transaction value pool.
 * @member {String} vPubOld
 */
ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner.prototype['vPubOld'] = undefined;






export default ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner;

