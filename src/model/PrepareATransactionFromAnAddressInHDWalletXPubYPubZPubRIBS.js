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
import PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC from './PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC';
import PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE from './PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE';
import PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC from './PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC';
import PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEFee from './PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEFee';

/**
 * The PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS model module.
 * @module model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS
 * @version 1.13.0
 */
class PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS {
    /**
     * Constructs a new <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS</code>.
     * @alias module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS
     * @implements module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC
     * @implements module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC
     * @implements module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE
     * @param dataHex {String} Representation of the data in hex value
     * @param derivationIndex {Number} Representation of the derivation index of the xpub address
     * @param fee {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEFee} 
     * @param nonce {String} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
     * @param transactionType {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.TransactionTypeEnum} Representation of the transaction type
     * @param unit {String} Represents the unit of the amount to be sent.
     */
    constructor(dataHex, derivationIndex, fee, nonce, transactionType, unit) { 
        PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC.initialize(this, dataHex, derivationIndex, fee, nonce, transactionType, unit);PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC.initialize(this, dataHex, derivationIndex, fee, nonce, transactionType, unit);PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE.initialize(this, dataHex, derivationIndex, fee, nonce, transactionType, unit);
        PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.initialize(this, dataHex, derivationIndex, fee, nonce, transactionType, unit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, dataHex, derivationIndex, fee, nonce, transactionType, unit) { 
        obj['dataHex'] = dataHex;
        obj['derivationIndex'] = derivationIndex;
        obj['fee'] = fee;
        obj['nonce'] = nonce;
        obj['transactionType'] = transactionType;
        obj['unit'] = unit;
    }

    /**
     * Constructs a <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS} obj Optional instance to populate.
     * @return {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS} The populated <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS();
            PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC.constructFromObject(data, obj);
            PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC.constructFromObject(data, obj);
            PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE.constructFromObject(data, obj);

            if (data.hasOwnProperty('dataHex')) {
                obj['dataHex'] = ApiClient.convertToType(data['dataHex'], 'String');
            }
            if (data.hasOwnProperty('derivationIndex')) {
                obj['derivationIndex'] = ApiClient.convertToType(data['derivationIndex'], 'Number');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'String');
            }
            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = ApiClient.convertToType(data['transactionType'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Representation of the data in hex value
 * @member {String} dataHex
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['dataHex'] = undefined;

/**
 * Representation of the derivation index of the xpub address
 * @member {Number} derivationIndex
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['derivationIndex'] = undefined;

/**
 * @member {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEFee} fee
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['fee'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['nonce'] = undefined;

/**
 * Representation of the transaction type
 * @member {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.TransactionTypeEnum} transactionType
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['transactionType'] = undefined;

/**
 * Represents the unit of the amount to be sent.
 * @member {String} unit
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS.prototype['unit'] = undefined;


// Implement PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC interface:
/**
 * Representation of the data in hex value
 * @member {String} dataHex
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC.prototype['dataHex'] = undefined;
/**
 * Representation of the derivation index of the xpub address
 * @member {Number} derivationIndex
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC.prototype['derivationIndex'] = undefined;
/**
 * @member {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSCFee} fee
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC.prototype['fee'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC.prototype['nonce'] = undefined;
/**
 * Representation of the transaction type
 * @member {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC.TransactionTypeEnum} transactionType
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC.prototype['transactionType'] = undefined;
/**
 * Represents the unit of the amount to be sent.
 * @member {String} unit
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC.prototype['unit'] = undefined;
// Implement PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC interface:
/**
 * Representation of the data in hex value
 * @member {String} dataHex
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC.prototype['dataHex'] = undefined;
/**
 * Representation of the derivation index of the xpub address
 * @member {Number} derivationIndex
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC.prototype['derivationIndex'] = undefined;
/**
 * @member {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSECFee} fee
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC.prototype['fee'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC.prototype['nonce'] = undefined;
/**
 * Representation of the transaction type
 * @member {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC.TransactionTypeEnum} transactionType
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC.prototype['transactionType'] = undefined;
/**
 * Represents the unit of the amount to be sent.
 * @member {String} unit
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEC.prototype['unit'] = undefined;
// Implement PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE interface:
/**
 * Representation of the data in hex value
 * @member {String} dataHex
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE.prototype['dataHex'] = undefined;
/**
 * Representation of the derivation index of the xpub address
 * @member {Number} derivationIndex
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE.prototype['derivationIndex'] = undefined;
/**
 * @member {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEFee} fee
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE.prototype['fee'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE.prototype['nonce'] = undefined;
/**
 * Representation of the transaction type
 * @member {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE.TransactionTypeEnum} transactionType
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE.prototype['transactionType'] = undefined;
/**
 * Represents the unit of the amount to be sent.
 * @member {String} unit
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSE.prototype['unit'] = undefined;



/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS['TransactionTypeEnum'] = {

    /**
     * value: "legacy-transaction"
     * @const
     */
    "legacy-transaction": "legacy-transaction",

    /**
     * value: "access-list-transaction"
     * @const
     */
    "access-list-transaction": "access-list-transaction"
};



export default PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS;

