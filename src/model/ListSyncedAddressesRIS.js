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
import ListSyncedAddressesRISC from './ListSyncedAddressesRISC';
import ListSyncedAddressesRISF from './ListSyncedAddressesRISF';
import ListSyncedAddressesRISN from './ListSyncedAddressesRISN';

/**
 * The ListSyncedAddressesRIS model module.
 * @module model/ListSyncedAddressesRIS
 * @version 1.7.0
 */
class ListSyncedAddressesRIS {
    /**
     * Constructs a new <code>ListSyncedAddressesRIS</code>.
     * Represents the assets&#39; detailed information.
     * @alias module:model/ListSyncedAddressesRIS
     * @implements module:model/ListSyncedAddressesRISC
     * @implements module:model/ListSyncedAddressesRISF
     * @implements module:model/ListSyncedAddressesRISN
     * @param amount {String} Defines the available fingible tokens amount in the specific address.
     * @param contractAddress {String} Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
     * @param type {String} Defines the specific token type.
     * @param contract {String} Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
     * @param tokenId {String} Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
     */
    constructor(amount, contractAddress, type, contract, tokenId) { 
        ListSyncedAddressesRISC.initialize(this, amount);ListSyncedAddressesRISF.initialize(this, amount, contractAddress, type);ListSyncedAddressesRISN.initialize(this, contract, tokenId, type);
        ListSyncedAddressesRIS.initialize(this, amount, contractAddress, type, contract, tokenId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, contractAddress, type, contract, tokenId) { 
        obj['amount'] = amount;
        obj['contractAddress'] = contractAddress;
        obj['type'] = type;
        obj['contract'] = contract;
        obj['tokenId'] = tokenId;
    }

    /**
     * Constructs a <code>ListSyncedAddressesRIS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListSyncedAddressesRIS} obj Optional instance to populate.
     * @return {module:model/ListSyncedAddressesRIS} The populated <code>ListSyncedAddressesRIS</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListSyncedAddressesRIS();
            ListSyncedAddressesRISC.constructFromObject(data, obj);
            ListSyncedAddressesRISF.constructFromObject(data, obj);
            ListSyncedAddressesRISN.constructFromObject(data, obj);

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('contractAddress')) {
                obj['contractAddress'] = ApiClient.convertToType(data['contractAddress'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('contract')) {
                obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
            }
            if (data.hasOwnProperty('tokenId')) {
                obj['tokenId'] = ApiClient.convertToType(data['tokenId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the available fingible tokens amount in the specific address.
 * @member {String} amount
 */
ListSyncedAddressesRIS.prototype['amount'] = undefined;

/**
 * Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
 * @member {String} contractAddress
 */
ListSyncedAddressesRIS.prototype['contractAddress'] = undefined;

/**
 * Defines the specific token type.
 * @member {String} type
 */
ListSyncedAddressesRIS.prototype['type'] = undefined;

/**
 * Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
 * @member {String} contract
 */
ListSyncedAddressesRIS.prototype['contract'] = undefined;

/**
 * Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
 * @member {String} tokenId
 */
ListSyncedAddressesRIS.prototype['tokenId'] = undefined;


// Implement ListSyncedAddressesRISC interface:
/**
 * Defines the available coins amount in the specific address.
 * @member {String} amount
 */
ListSyncedAddressesRISC.prototype['amount'] = undefined;
// Implement ListSyncedAddressesRISF interface:
/**
 * Defines the available fingible tokens amount in the specific address.
 * @member {String} amount
 */
ListSyncedAddressesRISF.prototype['amount'] = undefined;
/**
 * Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
 * @member {String} contractAddress
 */
ListSyncedAddressesRISF.prototype['contractAddress'] = undefined;
/**
 * Defines the specific token type.
 * @member {String} type
 */
ListSyncedAddressesRISF.prototype['type'] = undefined;
// Implement ListSyncedAddressesRISN interface:
/**
 * Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
 * @member {String} contract
 */
ListSyncedAddressesRISN.prototype['contract'] = undefined;
/**
 * Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
 * @member {String} tokenId
 */
ListSyncedAddressesRISN.prototype['tokenId'] = undefined;
/**
 * Defines the specific token type.
 * @member {String} type
 */
ListSyncedAddressesRISN.prototype['type'] = undefined;




export default ListSyncedAddressesRIS;
