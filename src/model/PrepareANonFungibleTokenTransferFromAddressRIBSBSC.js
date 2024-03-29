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
import PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee from './PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee';

/**
 * The PrepareANonFungibleTokenTransferFromAddressRIBSBSC model module.
 * @module model/PrepareANonFungibleTokenTransferFromAddressRIBSBSC
 * @version 1.13.0
 */
class PrepareANonFungibleTokenTransferFromAddressRIBSBSC {
    /**
     * Constructs a new <code>PrepareANonFungibleTokenTransferFromAddressRIBSBSC</code>.
     * Binance Smart Chain
     * @alias module:model/PrepareANonFungibleTokenTransferFromAddressRIBSBSC
     * @param sigHash {String} Representation of the hash that should be signed
     * @param fee {module:model/PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee} 
     * @param transactionType {module:model/PrepareANonFungibleTokenTransferFromAddressRIBSBSC.TransactionTypeEnum} Representation of the transaction type
     */
    constructor(sigHash, fee, transactionType) { 
        
        PrepareANonFungibleTokenTransferFromAddressRIBSBSC.initialize(this, sigHash, fee, transactionType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sigHash, fee, transactionType) { 
        obj['sigHash'] = sigHash;
        obj['fee'] = fee;
        obj['transactionType'] = transactionType;
    }

    /**
     * Constructs a <code>PrepareANonFungibleTokenTransferFromAddressRIBSBSC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareANonFungibleTokenTransferFromAddressRIBSBSC} obj Optional instance to populate.
     * @return {module:model/PrepareANonFungibleTokenTransferFromAddressRIBSBSC} The populated <code>PrepareANonFungibleTokenTransferFromAddressRIBSBSC</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepareANonFungibleTokenTransferFromAddressRIBSBSC();

            if (data.hasOwnProperty('dataHex')) {
                obj['dataHex'] = ApiClient.convertToType(data['dataHex'], 'String');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'String');
            }
            if (data.hasOwnProperty('sigHash')) {
                obj['sigHash'] = ApiClient.convertToType(data['sigHash'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = ApiClient.convertToType(data['transactionType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 0x0079006f00750072004100640064006900740069006f006e0061006c00440061007400610048006500720065
 * @member {String} dataHex
 */
PrepareANonFungibleTokenTransferFromAddressRIBSBSC.prototype['dataHex'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
PrepareANonFungibleTokenTransferFromAddressRIBSBSC.prototype['nonce'] = undefined;

/**
 * Representation of the hash that should be signed
 * @member {String} sigHash
 */
PrepareANonFungibleTokenTransferFromAddressRIBSBSC.prototype['sigHash'] = undefined;

/**
 * @member {module:model/PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee} fee
 */
PrepareANonFungibleTokenTransferFromAddressRIBSBSC.prototype['fee'] = undefined;

/**
 * Representation of the transaction type
 * @member {module:model/PrepareANonFungibleTokenTransferFromAddressRIBSBSC.TransactionTypeEnum} transactionType
 */
PrepareANonFungibleTokenTransferFromAddressRIBSBSC.prototype['transactionType'] = undefined;





/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
PrepareANonFungibleTokenTransferFromAddressRIBSBSC['TransactionTypeEnum'] = {

    /**
     * value: "legacy-transaction"
     * @const
     */
    "legacy-transaction": "legacy-transaction"
};



export default PrepareANonFungibleTokenTransferFromAddressRIBSBSC;

