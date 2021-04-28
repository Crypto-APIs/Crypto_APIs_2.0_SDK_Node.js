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
import ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoin from './ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoin';
import ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash from './ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash';
import ListTransactionsByBlockHashResponseItemBlockchainSpecificDash from './ListTransactionsByBlockHashResponseItemBlockchainSpecificDash';
import ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVin from './ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVin';
import ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout from './ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout';
import ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoin from './ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoin';
import ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereum from './ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereum';
import ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumClassic from './ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumClassic';
import ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumGasPrice from './ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumGasPrice';
import ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoin from './ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoin';

/**
 * The ListTransactionsByBlockHashResponseItemBlockchainSpecific model module.
 * @module model/ListTransactionsByBlockHashResponseItemBlockchainSpecific
 * @version 2.0.0
 */
class ListTransactionsByBlockHashResponseItemBlockchainSpecific {
    /**
     * Constructs a new <code>ListTransactionsByBlockHashResponseItemBlockchainSpecific</code>.
     * @alias module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecific
     * @implements module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoin
     * @implements module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash
     * @implements module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoin
     * @implements module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoin
     * @implements module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDash
     * @implements module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereum
     * @implements module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumClassic
     * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
     * @param size {Number} Represents the total size of this transaction.
     * @param vSize {Number} Represents the virtual size of this transaction.
     * @param version {Number} Represents transaction version number.
     * @param vin {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVin>} Represents the transaction inputs.
     * @param vout {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout>} Represents the transaction outputs.
     * @param vsize {Number} Represents the virtual size of this transaction.
     * @param contract {String} Represents the specific transaction contract.
     * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
     * @param gasPrice {module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumGasPrice} 
     * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
     * @param inputData {String} Represents additional information that is required for the transaction.
     * @param nonce {String} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
     * @param transactionStatus {String} String representation of the transaction status
     */
    constructor(locktime, size, vSize, version, vin, vout, vsize, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus) { 
        ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoin.initialize(this, locktime, size, vSize, version, vin, vout);ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash.initialize(this, locktime, size, version, vin, vout);ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoin.initialize(this, locktime, size, version, vin, vout, vsize);ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoin.initialize(this, locktime, size, version, vin, vout);ListTransactionsByBlockHashResponseItemBlockchainSpecificDash.initialize(this, locktime, size, version, vin, vout);ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereum.initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumClassic.initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);
        ListTransactionsByBlockHashResponseItemBlockchainSpecific.initialize(this, locktime, size, vSize, version, vin, vout, vsize, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, locktime, size, vSize, version, vin, vout, vsize, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus) { 
        obj['locktime'] = locktime;
        obj['size'] = size;
        obj['vSize'] = vSize;
        obj['version'] = version;
        obj['vin'] = vin;
        obj['vout'] = vout;
        obj['vsize'] = vsize;
        obj['contract'] = contract;
        obj['gasLimit'] = gasLimit;
        obj['gasPrice'] = gasPrice;
        obj['gasUsed'] = gasUsed;
        obj['inputData'] = inputData;
        obj['nonce'] = nonce;
        obj['transactionStatus'] = transactionStatus;
    }

    /**
     * Constructs a <code>ListTransactionsByBlockHashResponseItemBlockchainSpecific</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecific} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecific} The populated <code>ListTransactionsByBlockHashResponseItemBlockchainSpecific</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTransactionsByBlockHashResponseItemBlockchainSpecific();
            ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoin.constructFromObject(data, obj);
            ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash.constructFromObject(data, obj);
            ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoin.constructFromObject(data, obj);
            ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoin.constructFromObject(data, obj);
            ListTransactionsByBlockHashResponseItemBlockchainSpecificDash.constructFromObject(data, obj);
            ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereum.constructFromObject(data, obj);
            ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumClassic.constructFromObject(data, obj);

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
                obj['vin'] = ApiClient.convertToType(data['vin'], [ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVin]);
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], [ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout]);
            }
            if (data.hasOwnProperty('vsize')) {
                obj['vsize'] = ApiClient.convertToType(data['vsize'], 'Number');
            }
            if (data.hasOwnProperty('contract')) {
                obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
            }
            if (data.hasOwnProperty('gasLimit')) {
                obj['gasLimit'] = ApiClient.convertToType(data['gasLimit'], 'String');
            }
            if (data.hasOwnProperty('gasPrice')) {
                obj['gasPrice'] = ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumGasPrice.constructFromObject(data['gasPrice']);
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
        }
        return obj;
    }


}

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['size'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['vSize'] = undefined;

/**
 * Represents transaction version number.
 * @member {Number} version
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['version'] = undefined;

/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVin>} vin
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['vin'] = undefined;

/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout>} vout
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['vout'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vsize
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['vsize'] = undefined;

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['contract'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumGasPrice} gasPrice
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['gasPrice'] = undefined;

/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['gasUsed'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['nonce'] = undefined;

/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['transactionStatus'] = undefined;


// Implement ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoin interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoin.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoin.prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoin.prototype['vSize'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoin.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinVin>} vin
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoin.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinVout>} vout
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoin.prototype['vout'] = undefined;
// Implement ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash.prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVin>} vin
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVout>} vout
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash.prototype['vout'] = undefined;
// Implement ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoin interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoin.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoin.prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoin.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinVin>} vin
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoin.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinVout>} vout
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoin.prototype['vout'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vsize
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoin.prototype['vsize'] = undefined;
// Implement ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoin interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoin.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoin.prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoin.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinVin>} vin
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoin.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinVout>} vout
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoin.prototype['vout'] = undefined;
// Implement ListTransactionsByBlockHashResponseItemBlockchainSpecificDash interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificDash.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificDash.prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificDash.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVin>} vin
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificDash.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout>} vout
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificDash.prototype['vout'] = undefined;
// Implement ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereum interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereum.prototype['contract'] = undefined;
/**
 * String representation of the transaction Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereum.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumGasPrice} gasPrice
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereum.prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereum.prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereum.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereum.prototype['nonce'] = undefined;
/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereum.prototype['transactionStatus'] = undefined;
// Implement ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumClassic interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumClassic.prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumClassic.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumGasPrice} gasPrice
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumClassic.prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumClassic.prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumClassic.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumClassic.prototype['nonce'] = undefined;
/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumClassic.prototype['transactionStatus'] = undefined;




export default ListTransactionsByBlockHashResponseItemBlockchainSpecific;

