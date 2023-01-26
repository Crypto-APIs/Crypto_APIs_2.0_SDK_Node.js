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
import AddressCoinsTransactionConfirmedDataItemMinedInBlock from './AddressCoinsTransactionConfirmedDataItemMinedInBlock';

/**
 * The ConfirmedCoinsTransactionForCertainAmountOrHigherDataItem model module.
 * @module model/ConfirmedCoinsTransactionForCertainAmountOrHigherDataItem
 * @version 1.12.0
 */
class ConfirmedCoinsTransactionForCertainAmountOrHigherDataItem {
    /**
     * Constructs a new <code>ConfirmedCoinsTransactionForCertainAmountOrHigherDataItem</code>.
     * Defines an &#x60;item&#x60; as one result.
     * @alias module:model/ConfirmedCoinsTransactionForCertainAmountOrHigherDataItem
     * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param transactionId {String} Defines the unique ID of the specific transaction, i.e. its identification number.
     * @param minedInBlock {module:model/AddressCoinsTransactionConfirmedDataItemMinedInBlock} 
     * @param amount {String} Defines the amount of coins sent with the confirmed transaction.
     * @param unit {String} Defines the unit of the transaction, e.g. BTC.
     */
    constructor(blockchain, network, transactionId, minedInBlock, amount, unit) { 
        
        ConfirmedCoinsTransactionForCertainAmountOrHigherDataItem.initialize(this, blockchain, network, transactionId, minedInBlock, amount, unit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockchain, network, transactionId, minedInBlock, amount, unit) { 
        obj['blockchain'] = blockchain;
        obj['network'] = network;
        obj['transactionId'] = transactionId;
        obj['minedInBlock'] = minedInBlock;
        obj['amount'] = amount;
        obj['unit'] = unit;
    }

    /**
     * Constructs a <code>ConfirmedCoinsTransactionForCertainAmountOrHigherDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfirmedCoinsTransactionForCertainAmountOrHigherDataItem} obj Optional instance to populate.
     * @return {module:model/ConfirmedCoinsTransactionForCertainAmountOrHigherDataItem} The populated <code>ConfirmedCoinsTransactionForCertainAmountOrHigherDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfirmedCoinsTransactionForCertainAmountOrHigherDataItem();

            if (data.hasOwnProperty('blockchain')) {
                obj['blockchain'] = ApiClient.convertToType(data['blockchain'], 'String');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
            if (data.hasOwnProperty('minedInBlock')) {
                obj['minedInBlock'] = AddressCoinsTransactionConfirmedDataItemMinedInBlock.constructFromObject(data['minedInBlock']);
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
ConfirmedCoinsTransactionForCertainAmountOrHigherDataItem.prototype['blockchain'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
 * @member {String} network
 */
ConfirmedCoinsTransactionForCertainAmountOrHigherDataItem.prototype['network'] = undefined;

/**
 * Defines the unique ID of the specific transaction, i.e. its identification number.
 * @member {String} transactionId
 */
ConfirmedCoinsTransactionForCertainAmountOrHigherDataItem.prototype['transactionId'] = undefined;

/**
 * @member {module:model/AddressCoinsTransactionConfirmedDataItemMinedInBlock} minedInBlock
 */
ConfirmedCoinsTransactionForCertainAmountOrHigherDataItem.prototype['minedInBlock'] = undefined;

/**
 * Defines the amount of coins sent with the confirmed transaction.
 * @member {String} amount
 */
ConfirmedCoinsTransactionForCertainAmountOrHigherDataItem.prototype['amount'] = undefined;

/**
 * Defines the unit of the transaction, e.g. BTC.
 * @member {String} unit
 */
ConfirmedCoinsTransactionForCertainAmountOrHigherDataItem.prototype['unit'] = undefined;






export default ConfirmedCoinsTransactionForCertainAmountOrHigherDataItem;

