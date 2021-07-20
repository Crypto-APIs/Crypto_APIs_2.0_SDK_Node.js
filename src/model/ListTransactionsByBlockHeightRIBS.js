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
import ListTransactionsByBlockHashRIBSBCVin from './ListTransactionsByBlockHashRIBSBCVin';
import ListTransactionsByBlockHashRIBSBCVout from './ListTransactionsByBlockHashRIBSBCVout';
import ListTransactionsByBlockHeightRIBSB from './ListTransactionsByBlockHeightRIBSB';
import ListTransactionsByBlockHeightRIBSBC from './ListTransactionsByBlockHeightRIBSBC';
import ListTransactionsByBlockHeightRIBSD from './ListTransactionsByBlockHeightRIBSD';
import ListTransactionsByBlockHeightRIBSD2 from './ListTransactionsByBlockHeightRIBSD2';
import ListTransactionsByBlockHeightRIBSE from './ListTransactionsByBlockHeightRIBSE';
import ListTransactionsByBlockHeightRIBSEC from './ListTransactionsByBlockHeightRIBSEC';
import ListTransactionsByBlockHeightRIBSECGasPrice from './ListTransactionsByBlockHeightRIBSECGasPrice';
import ListTransactionsByBlockHeightRIBSL from './ListTransactionsByBlockHeightRIBSL';

/**
 * The ListTransactionsByBlockHeightRIBS model module.
 * @module model/ListTransactionsByBlockHeightRIBS
 * @version 1.1.0
 */
class ListTransactionsByBlockHeightRIBS {
    /**
     * Constructs a new <code>ListTransactionsByBlockHeightRIBS</code>.
     * @alias module:model/ListTransactionsByBlockHeightRIBS
     * @implements module:model/ListTransactionsByBlockHeightRIBSB
     * @implements module:model/ListTransactionsByBlockHeightRIBSE
     * @implements module:model/ListTransactionsByBlockHeightRIBSD
     * @implements module:model/ListTransactionsByBlockHeightRIBSD2
     * @implements module:model/ListTransactionsByBlockHeightRIBSL
     * @implements module:model/ListTransactionsByBlockHeightRIBSBC
     * @implements module:model/ListTransactionsByBlockHeightRIBSEC
     * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
     * @param size {Number} Represents the total size of this transaction.
     * @param vSize {Number} Represents the virtual size of this transaction.
     * @param version {Number} Represents the total size of this transaction.
     * @param vin {Array.<module:model/ListTransactionsByBlockHashRIBSBCVin>} Represents the transaction inputs.
     * @param vout {Array.<module:model/ListTransactionsByBlockHashRIBSBCVout>} Represents the transaction outputs.
     * @param contract {String} Represents the specific transaction contract.
     * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
     * @param gasPrice {module:model/ListTransactionsByBlockHeightRIBSECGasPrice} 
     * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
     * @param inputData {String} Represents additional information that is required for the transaction.
     * @param nonce {String} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
     * @param transactionStatus {String} Represents the status of this transaction.
     * @param vsize {Number} Represents the virtual size of this transaction.
     */
    constructor(locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, vsize) { 
        ListTransactionsByBlockHeightRIBSB.initialize(this, locktime, size, vSize, version, vin, vout);ListTransactionsByBlockHeightRIBSE.initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);ListTransactionsByBlockHeightRIBSD.initialize(this, locktime, size, version, vin, vout);ListTransactionsByBlockHeightRIBSD2.initialize(this, locktime, size, version, vin, vout);ListTransactionsByBlockHeightRIBSL.initialize(this, locktime, size, version, vin, vout, vsize);ListTransactionsByBlockHeightRIBSBC.initialize(this, locktime, size, version, vin, vout);ListTransactionsByBlockHeightRIBSEC.initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce);
        ListTransactionsByBlockHeightRIBS.initialize(this, locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, vsize);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, vsize) { 
        obj['locktime'] = locktime;
        obj['size'] = size;
        obj['vSize'] = vSize;
        obj['version'] = version;
        obj['vin'] = vin;
        obj['vout'] = vout;
        obj['contract'] = contract;
        obj['gasLimit'] = gasLimit;
        obj['gasPrice'] = gasPrice;
        obj['gasUsed'] = gasUsed;
        obj['inputData'] = inputData;
        obj['nonce'] = nonce;
        obj['transactionStatus'] = transactionStatus;
        obj['vsize'] = vsize;
    }

    /**
     * Constructs a <code>ListTransactionsByBlockHeightRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightRIBS} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightRIBS} The populated <code>ListTransactionsByBlockHeightRIBS</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTransactionsByBlockHeightRIBS();
            ListTransactionsByBlockHeightRIBSB.constructFromObject(data, obj);
            ListTransactionsByBlockHeightRIBSE.constructFromObject(data, obj);
            ListTransactionsByBlockHeightRIBSD.constructFromObject(data, obj);
            ListTransactionsByBlockHeightRIBSD2.constructFromObject(data, obj);
            ListTransactionsByBlockHeightRIBSL.constructFromObject(data, obj);
            ListTransactionsByBlockHeightRIBSBC.constructFromObject(data, obj);
            ListTransactionsByBlockHeightRIBSEC.constructFromObject(data, obj);

            if (data.hasOwnProperty('locktime')) {
                obj['locktime'] = ApiClient.convertToType(data['locktime'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('vSize')) {
                obj['vSize'] = ApiClient.convertToType(data['vSize'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('vin')) {
                obj['vin'] = ApiClient.convertToType(data['vin'], [ListTransactionsByBlockHashRIBSBCVin]);
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], [ListTransactionsByBlockHashRIBSBCVout]);
            }
            if (data.hasOwnProperty('contract')) {
                obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
            }
            if (data.hasOwnProperty('gasLimit')) {
                obj['gasLimit'] = ApiClient.convertToType(data['gasLimit'], 'String');
            }
            if (data.hasOwnProperty('gasPrice')) {
                obj['gasPrice'] = ListTransactionsByBlockHeightRIBSECGasPrice.constructFromObject(data['gasPrice']);
            }
            if (data.hasOwnProperty('gasUsed')) {
                obj['gasUsed'] = ApiClient.convertToType(data['gasUsed'], 'String');
            }
            if (data.hasOwnProperty('inputData')) {
                obj['inputData'] = ApiClient.convertToType(data['inputData'], 'String');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'String');
            }
            if (data.hasOwnProperty('transactionStatus')) {
                obj['transactionStatus'] = ApiClient.convertToType(data['transactionStatus'], 'String');
            }
            if (data.hasOwnProperty('vsize')) {
                obj['vsize'] = ApiClient.convertToType(data['vsize'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
ListTransactionsByBlockHeightRIBS.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByBlockHeightRIBS.prototype['size'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
ListTransactionsByBlockHeightRIBS.prototype['vSize'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} version
 */
ListTransactionsByBlockHeightRIBS.prototype['version'] = undefined;

/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSBCVin>} vin
 */
ListTransactionsByBlockHeightRIBS.prototype['vin'] = undefined;

/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSBCVout>} vout
 */
ListTransactionsByBlockHeightRIBS.prototype['vout'] = undefined;

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
ListTransactionsByBlockHeightRIBS.prototype['contract'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListTransactionsByBlockHeightRIBS.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/ListTransactionsByBlockHeightRIBSECGasPrice} gasPrice
 */
ListTransactionsByBlockHeightRIBS.prototype['gasPrice'] = undefined;

/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
ListTransactionsByBlockHeightRIBS.prototype['gasUsed'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListTransactionsByBlockHeightRIBS.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
ListTransactionsByBlockHeightRIBS.prototype['nonce'] = undefined;

/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */
ListTransactionsByBlockHeightRIBS.prototype['transactionStatus'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vsize
 */
ListTransactionsByBlockHeightRIBS.prototype['vsize'] = undefined;


// Implement ListTransactionsByBlockHeightRIBSB interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
ListTransactionsByBlockHeightRIBSB.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByBlockHeightRIBSB.prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
ListTransactionsByBlockHeightRIBSB.prototype['vSize'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */
ListTransactionsByBlockHeightRIBSB.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSBVin>} vin
 */
ListTransactionsByBlockHeightRIBSB.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSBVout>} vout
 */
ListTransactionsByBlockHeightRIBSB.prototype['vout'] = undefined;
// Implement ListTransactionsByBlockHeightRIBSE interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
ListTransactionsByBlockHeightRIBSE.prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListTransactionsByBlockHeightRIBSE.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSEGasPrice} gasPrice
 */
ListTransactionsByBlockHeightRIBSE.prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
ListTransactionsByBlockHeightRIBSE.prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListTransactionsByBlockHeightRIBSE.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListTransactionsByBlockHeightRIBSE.prototype['nonce'] = undefined;
/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */
ListTransactionsByBlockHeightRIBSE.prototype['transactionStatus'] = undefined;
// Implement ListTransactionsByBlockHeightRIBSD interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
ListTransactionsByBlockHeightRIBSD.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByBlockHeightRIBSD.prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
ListTransactionsByBlockHeightRIBSD.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSDVin>} vin
 */
ListTransactionsByBlockHeightRIBSD.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSDVout>} vout
 */
ListTransactionsByBlockHeightRIBSD.prototype['vout'] = undefined;
// Implement ListTransactionsByBlockHeightRIBSD2 interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
ListTransactionsByBlockHeightRIBSD2.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByBlockHeightRIBSD2.prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
ListTransactionsByBlockHeightRIBSD2.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSD2Vin>} vin
 */
ListTransactionsByBlockHeightRIBSD2.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSDVout>} vout
 */
ListTransactionsByBlockHeightRIBSD2.prototype['vout'] = undefined;
// Implement ListTransactionsByBlockHeightRIBSL interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
ListTransactionsByBlockHeightRIBSL.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByBlockHeightRIBSL.prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
ListTransactionsByBlockHeightRIBSL.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSLVin>} vin
 */
ListTransactionsByBlockHeightRIBSL.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSLVout>} vout
 */
ListTransactionsByBlockHeightRIBSL.prototype['vout'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vsize
 */
ListTransactionsByBlockHeightRIBSL.prototype['vsize'] = undefined;
// Implement ListTransactionsByBlockHeightRIBSBC interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
ListTransactionsByBlockHeightRIBSBC.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByBlockHeightRIBSBC.prototype['size'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} version
 */
ListTransactionsByBlockHeightRIBSBC.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSBCVin>} vin
 */
ListTransactionsByBlockHeightRIBSBC.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSBCVout>} vout
 */
ListTransactionsByBlockHeightRIBSBC.prototype['vout'] = undefined;
// Implement ListTransactionsByBlockHeightRIBSEC interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
ListTransactionsByBlockHeightRIBSEC.prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListTransactionsByBlockHeightRIBSEC.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListTransactionsByBlockHeightRIBSECGasPrice} gasPrice
 */
ListTransactionsByBlockHeightRIBSEC.prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
ListTransactionsByBlockHeightRIBSEC.prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListTransactionsByBlockHeightRIBSEC.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
ListTransactionsByBlockHeightRIBSEC.prototype['nonce'] = undefined;




export default ListTransactionsByBlockHeightRIBS;

