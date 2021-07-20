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
import AddressTokensTransactionConfirmedDataItemMinedInBlock from './AddressTokensTransactionConfirmedDataItemMinedInBlock';
import AddressTokensTransactionConfirmedToken from './AddressTokensTransactionConfirmedToken';

/**
 * The AddressTokensTransactionConfirmedDataItem model module.
 * @module model/AddressTokensTransactionConfirmedDataItem
 * @version 1.1.0
 */
class AddressTokensTransactionConfirmedDataItem {
    /**
     * Constructs a new <code>AddressTokensTransactionConfirmedDataItem</code>.
     * Defines an &#x60;item&#x60; as one result.
     * @alias module:model/AddressTokensTransactionConfirmedDataItem
     * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param address {String} Defines the specific address to which the transaction has been sent.
     * @param minedInBlock {module:model/AddressTokensTransactionConfirmedDataItemMinedInBlock} 
     * @param transactionId {String} Defines the unique ID of the specific transaction, i.e. its identification number.
     * @param tokenType {module:model/AddressTokensTransactionConfirmedDataItem.TokenTypeEnum} Defines the type of token sent with the transaction, e.g. ERC 20.
     * @param token {module:model/AddressTokensTransactionConfirmedToken} 
     * @param direction {module:model/AddressTokensTransactionConfirmedDataItem.DirectionEnum} Defines whether the transaction is \"incoming\" or \"outgoing\".
     */
    constructor(blockchain, network, address, minedInBlock, transactionId, tokenType, token, direction) { 
        
        AddressTokensTransactionConfirmedDataItem.initialize(this, blockchain, network, address, minedInBlock, transactionId, tokenType, token, direction);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockchain, network, address, minedInBlock, transactionId, tokenType, token, direction) { 
        obj['blockchain'] = blockchain;
        obj['network'] = network;
        obj['address'] = address;
        obj['minedInBlock'] = minedInBlock;
        obj['transactionId'] = transactionId;
        obj['tokenType'] = tokenType;
        obj['token'] = token;
        obj['direction'] = direction;
    }

    /**
     * Constructs a <code>AddressTokensTransactionConfirmedDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressTokensTransactionConfirmedDataItem} obj Optional instance to populate.
     * @return {module:model/AddressTokensTransactionConfirmedDataItem} The populated <code>AddressTokensTransactionConfirmedDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressTokensTransactionConfirmedDataItem();

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
                obj['minedInBlock'] = AddressTokensTransactionConfirmedDataItemMinedInBlock.constructFromObject(data['minedInBlock']);
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
            if (data.hasOwnProperty('tokenType')) {
                obj['tokenType'] = ApiClient.convertToType(data['tokenType'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = AddressTokensTransactionConfirmedToken.constructFromObject(data['token']);
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
AddressTokensTransactionConfirmedDataItem.prototype['blockchain'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
 * @member {String} network
 */
AddressTokensTransactionConfirmedDataItem.prototype['network'] = undefined;

/**
 * Defines the specific address to which the transaction has been sent.
 * @member {String} address
 */
AddressTokensTransactionConfirmedDataItem.prototype['address'] = undefined;

/**
 * @member {module:model/AddressTokensTransactionConfirmedDataItemMinedInBlock} minedInBlock
 */
AddressTokensTransactionConfirmedDataItem.prototype['minedInBlock'] = undefined;

/**
 * Defines the unique ID of the specific transaction, i.e. its identification number.
 * @member {String} transactionId
 */
AddressTokensTransactionConfirmedDataItem.prototype['transactionId'] = undefined;

/**
 * Defines the type of token sent with the transaction, e.g. ERC 20.
 * @member {module:model/AddressTokensTransactionConfirmedDataItem.TokenTypeEnum} tokenType
 */
AddressTokensTransactionConfirmedDataItem.prototype['tokenType'] = undefined;

/**
 * @member {module:model/AddressTokensTransactionConfirmedToken} token
 */
AddressTokensTransactionConfirmedDataItem.prototype['token'] = undefined;

/**
 * Defines whether the transaction is \"incoming\" or \"outgoing\".
 * @member {module:model/AddressTokensTransactionConfirmedDataItem.DirectionEnum} direction
 */
AddressTokensTransactionConfirmedDataItem.prototype['direction'] = undefined;





/**
 * Allowed values for the <code>tokenType</code> property.
 * @enum {String}
 * @readonly
 */
AddressTokensTransactionConfirmedDataItem['TokenTypeEnum'] = {

    /**
     * value: "ethereumERC20Token"
     * @const
     */
    "ethereumERC20Token": "ethereumERC20Token",

    /**
     * value: "ethereumERC721Token"
     * @const
     */
    "ethereumERC721Token": "ethereumERC721Token",

    /**
     * value: "omniLayerToken"
     * @const
     */
    "omniLayerToken": "omniLayerToken"
};


/**
 * Allowed values for the <code>direction</code> property.
 * @enum {String}
 * @readonly
 */
AddressTokensTransactionConfirmedDataItem['DirectionEnum'] = {

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



export default AddressTokensTransactionConfirmedDataItem;

