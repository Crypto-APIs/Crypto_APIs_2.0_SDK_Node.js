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
import GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner from './GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner';
import ListTransactionsByBlockHeightRIBSB from './ListTransactionsByBlockHeightRIBSB';
import ListTransactionsByBlockHeightRIBSBC from './ListTransactionsByBlockHeightRIBSBC';
import ListTransactionsByBlockHeightRIBSBSC from './ListTransactionsByBlockHeightRIBSBSC';
import ListTransactionsByBlockHeightRIBSBSCGasPrice from './ListTransactionsByBlockHeightRIBSBSCGasPrice';
import ListTransactionsByBlockHeightRIBSD from './ListTransactionsByBlockHeightRIBSD';
import ListTransactionsByBlockHeightRIBSD2 from './ListTransactionsByBlockHeightRIBSD2';
import ListTransactionsByBlockHeightRIBSE from './ListTransactionsByBlockHeightRIBSE';
import ListTransactionsByBlockHeightRIBSEC from './ListTransactionsByBlockHeightRIBSEC';
import ListTransactionsByBlockHeightRIBSL from './ListTransactionsByBlockHeightRIBSL';
import ListTransactionsByBlockHeightRIBSZ from './ListTransactionsByBlockHeightRIBSZ';
import ListTransactionsByBlockHeightRIBSZVJoinSplitInner from './ListTransactionsByBlockHeightRIBSZVJoinSplitInner';
import ListTransactionsByBlockHeightRIBSZVShieldedOutputInner from './ListTransactionsByBlockHeightRIBSZVShieldedOutputInner';
import ListTransactionsByBlockHeightRIBSZVinInner from './ListTransactionsByBlockHeightRIBSZVinInner';
import ListTransactionsByBlockHeightRIBSZVoutInner from './ListTransactionsByBlockHeightRIBSZVoutInner';

/**
 * The ListTransactionsByBlockHeightRIBS model module.
 * @module model/ListTransactionsByBlockHeightRIBS
 * @version 1.7.0
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
     * @implements module:model/ListTransactionsByBlockHeightRIBSBSC
     * @implements module:model/ListTransactionsByBlockHeightRIBSZ
     * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
     * @param size {Number} Represents the total size of this transaction.
     * @param vSize {Number} Represents the virtual size of this transaction.
     * @param version {Number} Represents the transaction version number.
     * @param vin {Array.<module:model/ListTransactionsByBlockHeightRIBSZVinInner>} Object Array representation of transaction inputs
     * @param vout {Array.<module:model/ListTransactionsByBlockHeightRIBSZVoutInner>} Object Array representation of transaction outputs
     * @param contract {String} Represents the specific transaction contract.
     * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
     * @param gasPrice {module:model/ListTransactionsByBlockHeightRIBSBSCGasPrice} 
     * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
     * @param inputData {String} Represents additional information that is required for the transaction.
     * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
     * @param transactionStatus {String} Represents the status of this transaction
     * @param bindingSig {String} It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
     * @param expiryHeight {Number} Represents a block height after which the transaction will expire.
     * @param joinSplitPubKey {String} Represents an encoding of a JoinSplitSig public validating key.
     * @param joinSplitSig {String} Is used to sign transactions that contain at least one JoinSplit description.
     * @param overwintered {Boolean} \"Overwinter\" is the network upgrade for the Zcash blockchain.
     * @param vJoinSplit {Array.<module:model/ListTransactionsByBlockHeightRIBSZVJoinSplitInner>} Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
     * @param vShieldedOutput {Array.<module:model/ListTransactionsByBlockHeightRIBSZVShieldedOutputInner>} Object Array representation of transaction output descriptions
     * @param vShieldedSpend {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} Object Array representation of transaction spend descriptions
     * @param valueBalance {String} Defines the transaction value balance.
     * @param versionGroupId {String} Represents the transaction version group ID.
     */
    constructor(locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId) { 
        ListTransactionsByBlockHeightRIBSB.initialize(this, locktime, size, vSize, version, vin, vout);ListTransactionsByBlockHeightRIBSE.initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);ListTransactionsByBlockHeightRIBSD.initialize(this, locktime, size, version, vin, vout);ListTransactionsByBlockHeightRIBSD2.initialize(this, locktime, size, version, vin, vout);ListTransactionsByBlockHeightRIBSL.initialize(this, locktime, size, vSize, version, vin, vout);ListTransactionsByBlockHeightRIBSBC.initialize(this, locktime, size, version, vin, vout);ListTransactionsByBlockHeightRIBSEC.initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce);ListTransactionsByBlockHeightRIBSBSC.initialize(this, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);ListTransactionsByBlockHeightRIBSZ.initialize(this, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, locktime, overwintered, size, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, version, versionGroupId, vin, vout);
        ListTransactionsByBlockHeightRIBS.initialize(this, locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId) { 
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
        obj['bindingSig'] = bindingSig;
        obj['expiryHeight'] = expiryHeight;
        obj['joinSplitPubKey'] = joinSplitPubKey;
        obj['joinSplitSig'] = joinSplitSig;
        obj['overwintered'] = overwintered;
        obj['vJoinSplit'] = vJoinSplit;
        obj['vShieldedOutput'] = vShieldedOutput;
        obj['vShieldedSpend'] = vShieldedSpend;
        obj['valueBalance'] = valueBalance;
        obj['versionGroupId'] = versionGroupId;
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
            ListTransactionsByBlockHeightRIBSBSC.constructFromObject(data, obj);
            ListTransactionsByBlockHeightRIBSZ.constructFromObject(data, obj);

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
                obj['vin'] = ApiClient.convertToType(data['vin'], [ListTransactionsByBlockHeightRIBSZVinInner]);
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], [ListTransactionsByBlockHeightRIBSZVoutInner]);
            }
            if (data.hasOwnProperty('contract')) {
                obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
            }
            if (data.hasOwnProperty('gasLimit')) {
                obj['gasLimit'] = ApiClient.convertToType(data['gasLimit'], 'String');
            }
            if (data.hasOwnProperty('gasPrice')) {
                obj['gasPrice'] = ListTransactionsByBlockHeightRIBSBSCGasPrice.constructFromObject(data['gasPrice']);
            }
            if (data.hasOwnProperty('gasUsed')) {
                obj['gasUsed'] = ApiClient.convertToType(data['gasUsed'], 'String');
            }
            if (data.hasOwnProperty('inputData')) {
                obj['inputData'] = ApiClient.convertToType(data['inputData'], 'String');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'Number');
            }
            if (data.hasOwnProperty('transactionStatus')) {
                obj['transactionStatus'] = ApiClient.convertToType(data['transactionStatus'], 'String');
            }
            if (data.hasOwnProperty('bindingSig')) {
                obj['bindingSig'] = ApiClient.convertToType(data['bindingSig'], 'String');
            }
            if (data.hasOwnProperty('expiryHeight')) {
                obj['expiryHeight'] = ApiClient.convertToType(data['expiryHeight'], 'Number');
            }
            if (data.hasOwnProperty('joinSplitPubKey')) {
                obj['joinSplitPubKey'] = ApiClient.convertToType(data['joinSplitPubKey'], 'String');
            }
            if (data.hasOwnProperty('joinSplitSig')) {
                obj['joinSplitSig'] = ApiClient.convertToType(data['joinSplitSig'], 'String');
            }
            if (data.hasOwnProperty('overwintered')) {
                obj['overwintered'] = ApiClient.convertToType(data['overwintered'], 'Boolean');
            }
            if (data.hasOwnProperty('vJoinSplit')) {
                obj['vJoinSplit'] = ApiClient.convertToType(data['vJoinSplit'], [ListTransactionsByBlockHeightRIBSZVJoinSplitInner]);
            }
            if (data.hasOwnProperty('vShieldedOutput')) {
                obj['vShieldedOutput'] = ApiClient.convertToType(data['vShieldedOutput'], [ListTransactionsByBlockHeightRIBSZVShieldedOutputInner]);
            }
            if (data.hasOwnProperty('vShieldedSpend')) {
                obj['vShieldedSpend'] = ApiClient.convertToType(data['vShieldedSpend'], [GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner]);
            }
            if (data.hasOwnProperty('valueBalance')) {
                obj['valueBalance'] = ApiClient.convertToType(data['valueBalance'], 'String');
            }
            if (data.hasOwnProperty('versionGroupId')) {
                obj['versionGroupId'] = ApiClient.convertToType(data['versionGroupId'], 'String');
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
 * Represents the transaction version number.
 * @member {Number} version
 */
ListTransactionsByBlockHeightRIBS.prototype['version'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVinInner>} vin
 */
ListTransactionsByBlockHeightRIBS.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVoutInner>} vout
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
 * @member {module:model/ListTransactionsByBlockHeightRIBSBSCGasPrice} gasPrice
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
 * @member {Number} nonce
 */
ListTransactionsByBlockHeightRIBS.prototype['nonce'] = undefined;

/**
 * Represents the status of this transaction
 * @member {String} transactionStatus
 */
ListTransactionsByBlockHeightRIBS.prototype['transactionStatus'] = undefined;

/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
ListTransactionsByBlockHeightRIBS.prototype['bindingSig'] = undefined;

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
ListTransactionsByBlockHeightRIBS.prototype['expiryHeight'] = undefined;

/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
ListTransactionsByBlockHeightRIBS.prototype['joinSplitPubKey'] = undefined;

/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
ListTransactionsByBlockHeightRIBS.prototype['joinSplitSig'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
ListTransactionsByBlockHeightRIBS.prototype['overwintered'] = undefined;

/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVJoinSplitInner>} vJoinSplit
 */
ListTransactionsByBlockHeightRIBS.prototype['vJoinSplit'] = undefined;

/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVShieldedOutputInner>} vShieldedOutput
 */
ListTransactionsByBlockHeightRIBS.prototype['vShieldedOutput'] = undefined;

/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
ListTransactionsByBlockHeightRIBS.prototype['vShieldedSpend'] = undefined;

/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
ListTransactionsByBlockHeightRIBS.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
ListTransactionsByBlockHeightRIBS.prototype['versionGroupId'] = undefined;


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
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSBVinInner>} vin
 */
ListTransactionsByBlockHeightRIBSB.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSBVoutInner>} vout
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
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSDVinInner>} vin
 */
ListTransactionsByBlockHeightRIBSD.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSDVoutInner>} vout
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
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSD2VinInner>} vin
 */
ListTransactionsByBlockHeightRIBSD2.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSDVoutInner>} vout
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
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
ListTransactionsByBlockHeightRIBSL.prototype['vSize'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
ListTransactionsByBlockHeightRIBSL.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSLVinInner>} vin
 */
ListTransactionsByBlockHeightRIBSL.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSLVoutInner>} vout
 */
ListTransactionsByBlockHeightRIBSL.prototype['vout'] = undefined;
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
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSBCVinInner>} vin
 */
ListTransactionsByBlockHeightRIBSBC.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSBCVoutInner>} vout
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
// Implement ListTransactionsByBlockHeightRIBSBSC interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
ListTransactionsByBlockHeightRIBSBSC.prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListTransactionsByBlockHeightRIBSBSC.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListTransactionsByBlockHeightRIBSBSCGasPrice} gasPrice
 */
ListTransactionsByBlockHeightRIBSBSC.prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
ListTransactionsByBlockHeightRIBSBSC.prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListTransactionsByBlockHeightRIBSBSC.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListTransactionsByBlockHeightRIBSBSC.prototype['nonce'] = undefined;
/**
 * Represents the status of this transaction
 * @member {String} transactionStatus
 */
ListTransactionsByBlockHeightRIBSBSC.prototype['transactionStatus'] = undefined;
// Implement ListTransactionsByBlockHeightRIBSZ interface:
/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
ListTransactionsByBlockHeightRIBSZ.prototype['bindingSig'] = undefined;
/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
ListTransactionsByBlockHeightRIBSZ.prototype['expiryHeight'] = undefined;
/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
ListTransactionsByBlockHeightRIBSZ.prototype['joinSplitPubKey'] = undefined;
/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
ListTransactionsByBlockHeightRIBSZ.prototype['joinSplitSig'] = undefined;
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
ListTransactionsByBlockHeightRIBSZ.prototype['locktime'] = undefined;
/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
ListTransactionsByBlockHeightRIBSZ.prototype['overwintered'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByBlockHeightRIBSZ.prototype['size'] = undefined;
/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVJoinSplitInner>} vJoinSplit
 */
ListTransactionsByBlockHeightRIBSZ.prototype['vJoinSplit'] = undefined;
/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVShieldedOutputInner>} vShieldedOutput
 */
ListTransactionsByBlockHeightRIBSZ.prototype['vShieldedOutput'] = undefined;
/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
ListTransactionsByBlockHeightRIBSZ.prototype['vShieldedSpend'] = undefined;
/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
ListTransactionsByBlockHeightRIBSZ.prototype['valueBalance'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */
ListTransactionsByBlockHeightRIBSZ.prototype['version'] = undefined;
/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
ListTransactionsByBlockHeightRIBSZ.prototype['versionGroupId'] = undefined;
/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVinInner>} vin
 */
ListTransactionsByBlockHeightRIBSZ.prototype['vin'] = undefined;
/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVoutInner>} vout
 */
ListTransactionsByBlockHeightRIBSZ.prototype['vout'] = undefined;




export default ListTransactionsByBlockHeightRIBS;

