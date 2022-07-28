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
 * The ListAllAssetsFromAllWalletsRICoinsInner model module.
 * @module model/ListAllAssetsFromAllWalletsRICoinsInner
 * @version 1.7.0
 */
class ListAllAssetsFromAllWalletsRICoinsInner {
    /**
     * Constructs a new <code>ListAllAssetsFromAllWalletsRICoinsInner</code>.
     * @alias module:model/ListAllAssetsFromAllWalletsRICoinsInner
     * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param confirmedBalance {String} Defines the total balance of the address that is confirmed. It doesn't include unconfirmed transactions.
     * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param totalReceived {String} Defines the total amount of all coins received to the address, based on confirmed transactions.
     * @param totalSpent {String} Defines the total amount of all spent by this address coins, based on confirmed transactions.
     * @param unit {String} Represents the unit of the confirmed balance.
     */
    constructor(blockchain, confirmedBalance, network, totalReceived, totalSpent, unit) { 
        
        ListAllAssetsFromAllWalletsRICoinsInner.initialize(this, blockchain, confirmedBalance, network, totalReceived, totalSpent, unit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockchain, confirmedBalance, network, totalReceived, totalSpent, unit) { 
        obj['blockchain'] = blockchain;
        obj['confirmedBalance'] = confirmedBalance;
        obj['network'] = network;
        obj['totalReceived'] = totalReceived;
        obj['totalSpent'] = totalSpent;
        obj['unit'] = unit;
    }

    /**
     * Constructs a <code>ListAllAssetsFromAllWalletsRICoinsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllAssetsFromAllWalletsRICoinsInner} obj Optional instance to populate.
     * @return {module:model/ListAllAssetsFromAllWalletsRICoinsInner} The populated <code>ListAllAssetsFromAllWalletsRICoinsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAllAssetsFromAllWalletsRICoinsInner();

            if (data.hasOwnProperty('blockchain')) {
                obj['blockchain'] = ApiClient.convertToType(data['blockchain'], 'String');
            }
            if (data.hasOwnProperty('confirmedBalance')) {
                obj['confirmedBalance'] = ApiClient.convertToType(data['confirmedBalance'], 'String');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
            if (data.hasOwnProperty('totalReceived')) {
                obj['totalReceived'] = ApiClient.convertToType(data['totalReceived'], 'String');
            }
            if (data.hasOwnProperty('totalSpent')) {
                obj['totalSpent'] = ApiClient.convertToType(data['totalSpent'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
ListAllAssetsFromAllWalletsRICoinsInner.prototype['blockchain'] = undefined;

/**
 * Defines the total balance of the address that is confirmed. It doesn't include unconfirmed transactions.
 * @member {String} confirmedBalance
 */
ListAllAssetsFromAllWalletsRICoinsInner.prototype['confirmedBalance'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
 * @member {String} network
 */
ListAllAssetsFromAllWalletsRICoinsInner.prototype['network'] = undefined;

/**
 * Defines the total amount of all coins received to the address, based on confirmed transactions.
 * @member {String} totalReceived
 */
ListAllAssetsFromAllWalletsRICoinsInner.prototype['totalReceived'] = undefined;

/**
 * Defines the total amount of all spent by this address coins, based on confirmed transactions.
 * @member {String} totalSpent
 */
ListAllAssetsFromAllWalletsRICoinsInner.prototype['totalSpent'] = undefined;

/**
 * Represents the unit of the confirmed balance.
 * @member {String} unit
 */
ListAllAssetsFromAllWalletsRICoinsInner.prototype['unit'] = undefined;






export default ListAllAssetsFromAllWalletsRICoinsInner;

