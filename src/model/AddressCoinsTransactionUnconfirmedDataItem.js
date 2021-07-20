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
 * The AddressCoinsTransactionUnconfirmedDataItem model module.
 * @module model/AddressCoinsTransactionUnconfirmedDataItem
 * @version 1.1.0
 */
class AddressCoinsTransactionUnconfirmedDataItem {
    /**
     * Constructs a new <code>AddressCoinsTransactionUnconfirmedDataItem</code>.
     * Defines an &#x60;item&#x60; as one result.
     * @alias module:model/AddressCoinsTransactionUnconfirmedDataItem
     * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param address {String} Defines the specific address to which the coin transaction has been sent and is pending confirmation.
     * @param transactionId {String} Defines the unique ID of the specific transaction, i.e. its identification number.
     * @param amount {String} Defines the amount of coins sent with the transaction that is pending confirmation.
     * @param unit {module:model/AddressCoinsTransactionUnconfirmedDataItem.UnitEnum} Defines the unit of the transaction, e.g. BTC.
     * @param direction {module:model/AddressCoinsTransactionUnconfirmedDataItem.DirectionEnum} Defines whether the transaction is \"incoming\" or \"outgoing\".
     * @param firstSeenInMempoolTimestamp {Number} Defines the exact time the transaction has been first accepted into the mempool to await confirmation as timestamp.
     */
    constructor(blockchain, network, address, transactionId, amount, unit, direction, firstSeenInMempoolTimestamp) { 
        
        AddressCoinsTransactionUnconfirmedDataItem.initialize(this, blockchain, network, address, transactionId, amount, unit, direction, firstSeenInMempoolTimestamp);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockchain, network, address, transactionId, amount, unit, direction, firstSeenInMempoolTimestamp) { 
        obj['blockchain'] = blockchain;
        obj['network'] = network;
        obj['address'] = address;
        obj['transactionId'] = transactionId;
        obj['amount'] = amount;
        obj['unit'] = unit;
        obj['direction'] = direction;
        obj['firstSeenInMempoolTimestamp'] = firstSeenInMempoolTimestamp;
    }

    /**
     * Constructs a <code>AddressCoinsTransactionUnconfirmedDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressCoinsTransactionUnconfirmedDataItem} obj Optional instance to populate.
     * @return {module:model/AddressCoinsTransactionUnconfirmedDataItem} The populated <code>AddressCoinsTransactionUnconfirmedDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressCoinsTransactionUnconfirmedDataItem();

            if (data.hasOwnProperty('blockchain')) {
                obj['blockchain'] = ApiClient.convertToType(data['blockchain'], 'String');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
            if (data.hasOwnProperty('firstSeenInMempoolTimestamp')) {
                obj['firstSeenInMempoolTimestamp'] = ApiClient.convertToType(data['firstSeenInMempoolTimestamp'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
AddressCoinsTransactionUnconfirmedDataItem.prototype['blockchain'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
 * @member {String} network
 */
AddressCoinsTransactionUnconfirmedDataItem.prototype['network'] = undefined;

/**
 * Defines the specific address to which the coin transaction has been sent and is pending confirmation.
 * @member {String} address
 */
AddressCoinsTransactionUnconfirmedDataItem.prototype['address'] = undefined;

/**
 * Defines the unique ID of the specific transaction, i.e. its identification number.
 * @member {String} transactionId
 */
AddressCoinsTransactionUnconfirmedDataItem.prototype['transactionId'] = undefined;

/**
 * Defines the amount of coins sent with the transaction that is pending confirmation.
 * @member {String} amount
 */
AddressCoinsTransactionUnconfirmedDataItem.prototype['amount'] = undefined;

/**
 * Defines the unit of the transaction, e.g. BTC.
 * @member {module:model/AddressCoinsTransactionUnconfirmedDataItem.UnitEnum} unit
 */
AddressCoinsTransactionUnconfirmedDataItem.prototype['unit'] = undefined;

/**
 * Defines whether the transaction is \"incoming\" or \"outgoing\".
 * @member {module:model/AddressCoinsTransactionUnconfirmedDataItem.DirectionEnum} direction
 */
AddressCoinsTransactionUnconfirmedDataItem.prototype['direction'] = undefined;

/**
 * Defines the exact time the transaction has been first accepted into the mempool to await confirmation as timestamp.
 * @member {Number} firstSeenInMempoolTimestamp
 */
AddressCoinsTransactionUnconfirmedDataItem.prototype['firstSeenInMempoolTimestamp'] = undefined;





/**
 * Allowed values for the <code>unit</code> property.
 * @enum {String}
 * @readonly
 */
AddressCoinsTransactionUnconfirmedDataItem['UnitEnum'] = {

    /**
     * value: "btc"
     * @const
     */
    "btc": "btc",

    /**
     * value: "satoshi"
     * @const
     */
    "satoshi": "satoshi",

    /**
     * value: "wei"
     * @const
     */
    "wei": "wei",

    /**
     * value: "gwei"
     * @const
     */
    "gwei": "gwei",

    /**
     * value: "eth"
     * @const
     */
    "eth": "eth",

    /**
     * value: "doge"
     * @const
     */
    "doge": "doge",

    /**
     * value: "dash"
     * @const
     */
    "dash": "dash",

    /**
     * value: "etc"
     * @const
     */
    "etc": "etc",

    /**
     * value: "xrp"
     * @const
     */
    "xrp": "xrp",

    /**
     * value: "zil"
     * @const
     */
    "zil": "zil"
};


/**
 * Allowed values for the <code>direction</code> property.
 * @enum {String}
 * @readonly
 */
AddressCoinsTransactionUnconfirmedDataItem['DirectionEnum'] = {

    /**
     * value: "incoming"
     * @const
     */
    "incoming": "incoming",

    /**
     * value: "outgoing"
     * @const
     */
    "outgoing": "outgoing"
};



export default AddressCoinsTransactionUnconfirmedDataItem;

