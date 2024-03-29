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
import PrepareAFungibleTokenTransferFromAddressRIBSEFee from './PrepareAFungibleTokenTransferFromAddressRIBSEFee';

/**
 * The PrepareAFungibleTokenTransferFromAddressRIBSE model module.
 * @module model/PrepareAFungibleTokenTransferFromAddressRIBSE
 * @version 1.13.0
 */
class PrepareAFungibleTokenTransferFromAddressRIBSE {
    /**
     * Constructs a new <code>PrepareAFungibleTokenTransferFromAddressRIBSE</code>.
     * Ethereum
     * @alias module:model/PrepareAFungibleTokenTransferFromAddressRIBSE
     * @param sigHash {String} Representation of the hash that should be signed
     * @param fee {module:model/PrepareAFungibleTokenTransferFromAddressRIBSEFee} 
     * @param transactionType {module:model/PrepareAFungibleTokenTransferFromAddressRIBSE.TransactionTypeEnum} Representation of the transaction type
     */
    constructor(sigHash, fee, transactionType) { 
        
        PrepareAFungibleTokenTransferFromAddressRIBSE.initialize(this, sigHash, fee, transactionType);
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
     * Constructs a <code>PrepareAFungibleTokenTransferFromAddressRIBSE</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAFungibleTokenTransferFromAddressRIBSE} obj Optional instance to populate.
     * @return {module:model/PrepareAFungibleTokenTransferFromAddressRIBSE} The populated <code>PrepareAFungibleTokenTransferFromAddressRIBSE</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepareAFungibleTokenTransferFromAddressRIBSE();

            if (data.hasOwnProperty('dataHex')) {
                obj['dataHex'] = ApiClient.convertToType(data['dataHex'], 'String');
            }
            if (data.hasOwnProperty('sigHash')) {
                obj['sigHash'] = ApiClient.convertToType(data['sigHash'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = PrepareAFungibleTokenTransferFromAddressRIBSEFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = ApiClient.convertToType(data['transactionType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Representation of the data in hex value
 * @member {String} dataHex
 */
PrepareAFungibleTokenTransferFromAddressRIBSE.prototype['dataHex'] = undefined;

/**
 * Representation of the hash that should be signed
 * @member {String} sigHash
 */
PrepareAFungibleTokenTransferFromAddressRIBSE.prototype['sigHash'] = undefined;

/**
 * @member {module:model/PrepareAFungibleTokenTransferFromAddressRIBSEFee} fee
 */
PrepareAFungibleTokenTransferFromAddressRIBSE.prototype['fee'] = undefined;

/**
 * Representation of the transaction type
 * @member {module:model/PrepareAFungibleTokenTransferFromAddressRIBSE.TransactionTypeEnum} transactionType
 */
PrepareAFungibleTokenTransferFromAddressRIBSE.prototype['transactionType'] = undefined;





/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
PrepareAFungibleTokenTransferFromAddressRIBSE['TransactionTypeEnum'] = {

    /**
     * value: "legacy-transaction"
     * @const
     */
    "legacy-transaction": "legacy-transaction",

    /**
     * value: "access-list-transaction"
     * @const
     */
    "access-list-transaction": "access-list-transaction",

    /**
     * value: "gas-fee-market-transaction"
     * @const
     */
    "gas-fee-market-transaction": "gas-fee-market-transaction"
};



export default PrepareAFungibleTokenTransferFromAddressRIBSE;

