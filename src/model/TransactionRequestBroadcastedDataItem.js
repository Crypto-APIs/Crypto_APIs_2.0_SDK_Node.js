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
 * The TransactionRequestBroadcastedDataItem model module.
 * @module model/TransactionRequestBroadcastedDataItem
 * @version 1.11.0
 */
class TransactionRequestBroadcastedDataItem {
    /**
     * Constructs a new <code>TransactionRequestBroadcastedDataItem</code>.
     * Defines an &#x60;item&#x60; as one result.
     * @alias module:model/TransactionRequestBroadcastedDataItem
     * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param requiredApprovals {Number} The required number of approvals needed to approve the transaction.
     * @param requiredRejections {Number} The required number of rejections needed to reject the transaction.
     * @param currentApprovals {Number} The current number of approvals given for the transaction.
     * @param currentRejections {Number} The current number of rejections given for the transaction.
     * @param transactionId {String} Defines the unique ID of the specific transaction, i.e. its identification number.
     */
    constructor(blockchain, network, requiredApprovals, requiredRejections, currentApprovals, currentRejections, transactionId) { 
        
        TransactionRequestBroadcastedDataItem.initialize(this, blockchain, network, requiredApprovals, requiredRejections, currentApprovals, currentRejections, transactionId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockchain, network, requiredApprovals, requiredRejections, currentApprovals, currentRejections, transactionId) { 
        obj['blockchain'] = blockchain;
        obj['network'] = network;
        obj['requiredApprovals'] = requiredApprovals;
        obj['requiredRejections'] = requiredRejections;
        obj['currentApprovals'] = currentApprovals;
        obj['currentRejections'] = currentRejections;
        obj['transactionId'] = transactionId;
    }

    /**
     * Constructs a <code>TransactionRequestBroadcastedDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionRequestBroadcastedDataItem} obj Optional instance to populate.
     * @return {module:model/TransactionRequestBroadcastedDataItem} The populated <code>TransactionRequestBroadcastedDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionRequestBroadcastedDataItem();

            if (data.hasOwnProperty('blockchain')) {
                obj['blockchain'] = ApiClient.convertToType(data['blockchain'], 'String');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
            if (data.hasOwnProperty('requiredApprovals')) {
                obj['requiredApprovals'] = ApiClient.convertToType(data['requiredApprovals'], 'Number');
            }
            if (data.hasOwnProperty('requiredRejections')) {
                obj['requiredRejections'] = ApiClient.convertToType(data['requiredRejections'], 'Number');
            }
            if (data.hasOwnProperty('currentApprovals')) {
                obj['currentApprovals'] = ApiClient.convertToType(data['currentApprovals'], 'Number');
            }
            if (data.hasOwnProperty('currentRejections')) {
                obj['currentRejections'] = ApiClient.convertToType(data['currentRejections'], 'Number');
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionRequestBroadcastedDataItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionRequestBroadcastedDataItem</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionRequestBroadcastedDataItem.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['blockchain'] && !(typeof data['blockchain'] === 'string' || data['blockchain'] instanceof String)) {
            throw new Error("Expected the field `blockchain` to be a primitive type in the JSON string but got " + data['blockchain']);
        }
        // ensure the json data is a string
        if (data['network'] && !(typeof data['network'] === 'string' || data['network'] instanceof String)) {
            throw new Error("Expected the field `network` to be a primitive type in the JSON string but got " + data['network']);
        }
        // ensure the json data is a string
        if (data['transactionId'] && !(typeof data['transactionId'] === 'string' || data['transactionId'] instanceof String)) {
            throw new Error("Expected the field `transactionId` to be a primitive type in the JSON string but got " + data['transactionId']);
        }

        return true;
    }


}

TransactionRequestBroadcastedDataItem.RequiredProperties = ["blockchain", "network", "requiredApprovals", "requiredRejections", "currentApprovals", "currentRejections", "transactionId"];

/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
TransactionRequestBroadcastedDataItem.prototype['blockchain'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
 * @member {String} network
 */
TransactionRequestBroadcastedDataItem.prototype['network'] = undefined;

/**
 * The required number of approvals needed to approve the transaction.
 * @member {Number} requiredApprovals
 */
TransactionRequestBroadcastedDataItem.prototype['requiredApprovals'] = undefined;

/**
 * The required number of rejections needed to reject the transaction.
 * @member {Number} requiredRejections
 */
TransactionRequestBroadcastedDataItem.prototype['requiredRejections'] = undefined;

/**
 * The current number of approvals given for the transaction.
 * @member {Number} currentApprovals
 */
TransactionRequestBroadcastedDataItem.prototype['currentApprovals'] = undefined;

/**
 * The current number of rejections given for the transaction.
 * @member {Number} currentRejections
 */
TransactionRequestBroadcastedDataItem.prototype['currentRejections'] = undefined;

/**
 * Defines the unique ID of the specific transaction, i.e. its identification number.
 * @member {String} transactionId
 */
TransactionRequestBroadcastedDataItem.prototype['transactionId'] = undefined;






export default TransactionRequestBroadcastedDataItem;

