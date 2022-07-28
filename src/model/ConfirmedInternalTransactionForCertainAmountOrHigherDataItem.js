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
import AddressInternalTransactionConfirmedDataItemMinedInBlock from './AddressInternalTransactionConfirmedDataItemMinedInBlock';

/**
 * The ConfirmedInternalTransactionForCertainAmountOrHigherDataItem model module.
 * @module model/ConfirmedInternalTransactionForCertainAmountOrHigherDataItem
 * @version 1.7.0
 */
class ConfirmedInternalTransactionForCertainAmountOrHigherDataItem {
    /**
     * Constructs a new <code>ConfirmedInternalTransactionForCertainAmountOrHigherDataItem</code>.
     * Defines an &#x60;item&#x60; as one result.
     * @alias module:model/ConfirmedInternalTransactionForCertainAmountOrHigherDataItem
     * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\",\"mordor\" are test networks.
     * @param address {String} Defines the specific address of the internal transaction.
     * @param minedInBlock {module:model/AddressInternalTransactionConfirmedDataItemMinedInBlock} 
     * @param parentTransactionId {String} Defines the Parent Transaction's unique ID.
     * @param operationId {String} Defines the specific operation's unique ID.
     * @param amount {String} Defines the amount of coins sent with the confirmed transaction.
     * @param unit {String} Defines the unit of the transaction, e.g. Gwei.
     */
    constructor(blockchain, network, address, minedInBlock, parentTransactionId, operationId, amount, unit) { 
        
        ConfirmedInternalTransactionForCertainAmountOrHigherDataItem.initialize(this, blockchain, network, address, minedInBlock, parentTransactionId, operationId, amount, unit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockchain, network, address, minedInBlock, parentTransactionId, operationId, amount, unit) { 
        obj['blockchain'] = blockchain;
        obj['network'] = network;
        obj['address'] = address;
        obj['minedInBlock'] = minedInBlock;
        obj['parentTransactionId'] = parentTransactionId;
        obj['operationId'] = operationId;
        obj['amount'] = amount;
        obj['unit'] = unit;
    }

    /**
     * Constructs a <code>ConfirmedInternalTransactionForCertainAmountOrHigherDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfirmedInternalTransactionForCertainAmountOrHigherDataItem} obj Optional instance to populate.
     * @return {module:model/ConfirmedInternalTransactionForCertainAmountOrHigherDataItem} The populated <code>ConfirmedInternalTransactionForCertainAmountOrHigherDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfirmedInternalTransactionForCertainAmountOrHigherDataItem();

            if (data.hasOwnProperty('blockchain')) {
                obj['blockchain'] = ApiClient.convertToType(data['blockchain'], 'String');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('minedInBlock')) {
                obj['minedInBlock'] = AddressInternalTransactionConfirmedDataItemMinedInBlock.constructFromObject(data['minedInBlock']);
            }
            if (data.hasOwnProperty('parentTransactionId')) {
                obj['parentTransactionId'] = ApiClient.convertToType(data['parentTransactionId'], 'String');
            }
            if (data.hasOwnProperty('operationId')) {
                obj['operationId'] = ApiClient.convertToType(data['operationId'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
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
ConfirmedInternalTransactionForCertainAmountOrHigherDataItem.prototype['blockchain'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\",\"mordor\" are test networks.
 * @member {String} network
 */
ConfirmedInternalTransactionForCertainAmountOrHigherDataItem.prototype['network'] = undefined;

/**
 * Defines the specific address of the internal transaction.
 * @member {String} address
 */
ConfirmedInternalTransactionForCertainAmountOrHigherDataItem.prototype['address'] = undefined;

/**
 * @member {module:model/AddressInternalTransactionConfirmedDataItemMinedInBlock} minedInBlock
 */
ConfirmedInternalTransactionForCertainAmountOrHigherDataItem.prototype['minedInBlock'] = undefined;

/**
 * Defines the Parent Transaction's unique ID.
 * @member {String} parentTransactionId
 */
ConfirmedInternalTransactionForCertainAmountOrHigherDataItem.prototype['parentTransactionId'] = undefined;

/**
 * Defines the specific operation's unique ID.
 * @member {String} operationId
 */
ConfirmedInternalTransactionForCertainAmountOrHigherDataItem.prototype['operationId'] = undefined;

/**
 * Defines the amount of coins sent with the confirmed transaction.
 * @member {String} amount
 */
ConfirmedInternalTransactionForCertainAmountOrHigherDataItem.prototype['amount'] = undefined;

/**
 * Defines the unit of the transaction, e.g. Gwei.
 * @member {String} unit
 */
ConfirmedInternalTransactionForCertainAmountOrHigherDataItem.prototype['unit'] = undefined;






export default ConfirmedInternalTransactionForCertainAmountOrHigherDataItem;

