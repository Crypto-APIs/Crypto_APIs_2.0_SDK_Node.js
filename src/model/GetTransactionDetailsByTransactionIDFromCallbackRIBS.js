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
import GetTransactionDetailsByTransactionIDFromCallbackRIBSB from './GetTransactionDetailsByTransactionIDFromCallbackRIBSB';
import GetTransactionDetailsByTransactionIDFromCallbackRIBSBC from './GetTransactionDetailsByTransactionIDFromCallbackRIBSBC';
import GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC from './GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC';
import GetTransactionDetailsByTransactionIDFromCallbackRIBSD from './GetTransactionDetailsByTransactionIDFromCallbackRIBSD';
import GetTransactionDetailsByTransactionIDFromCallbackRIBSD2 from './GetTransactionDetailsByTransactionIDFromCallbackRIBSD2';
import GetTransactionDetailsByTransactionIDFromCallbackRIBSE from './GetTransactionDetailsByTransactionIDFromCallbackRIBSE';
import GetTransactionDetailsByTransactionIDFromCallbackRIBSEC from './GetTransactionDetailsByTransactionIDFromCallbackRIBSEC';
import GetTransactionDetailsByTransactionIDFromCallbackRIBSL from './GetTransactionDetailsByTransactionIDFromCallbackRIBSL';
import GetTransactionDetailsByTransactionIDFromCallbackRIBST from './GetTransactionDetailsByTransactionIDFromCallbackRIBST';
import GetTransactionDetailsByTransactionIDFromCallbackRIBSTBandwidthUsed from './GetTransactionDetailsByTransactionIDFromCallbackRIBSTBandwidthUsed';
import GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed from './GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed';
import GetTransactionDetailsByTransactionIDFromCallbackRIBSX from './GetTransactionDetailsByTransactionIDFromCallbackRIBSX';
import GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue from './GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue';
import GetTransactionDetailsByTransactionIDFromCallbackRIBSZ from './GetTransactionDetailsByTransactionIDFromCallbackRIBSZ';
import GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2 from './GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2';
import GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice from './GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice';
import GetTransactionDetailsByTransactionIDFromCallbackRIBSZVoutInner from './GetTransactionDetailsByTransactionIDFromCallbackRIBSZVoutInner';
import GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner from './GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner';
import GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner from './GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner';
import GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner from './GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner';
import GetTransactionDetailsByTransactionIDRIBSZVinInner from './GetTransactionDetailsByTransactionIDRIBSZVinInner';
import GetXRPRippleTransactionDetailsByTransactionIDRIOffer from './GetXRPRippleTransactionDetailsByTransactionIDRIOffer';
import GetXRPRippleTransactionDetailsByTransactionIDRIReceive from './GetXRPRippleTransactionDetailsByTransactionIDRIReceive';

/**
 * The GetTransactionDetailsByTransactionIDFromCallbackRIBS model module.
 * @module model/GetTransactionDetailsByTransactionIDFromCallbackRIBS
 * @version 1.11.0
 */
class GetTransactionDetailsByTransactionIDFromCallbackRIBS {
    /**
     * Constructs a new <code>GetTransactionDetailsByTransactionIDFromCallbackRIBS</code>.
     * @alias module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBS
     * @param {(module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSB|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSBC|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSD|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSD2|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSE|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSEC|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSL|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBST|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSX|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2)} instance The actual instance to initialize GetTransactionDetailsByTransactionIDFromCallbackRIBS.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "GetTransactionDetailsByTransactionIDFromCallbackRIBSB") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                GetTransactionDetailsByTransactionIDFromCallbackRIBSB.validateJSON(instance); // throw an exception if no match
                // create GetTransactionDetailsByTransactionIDFromCallbackRIBSB from JS object
                this.actualInstance = GetTransactionDetailsByTransactionIDFromCallbackRIBSB.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into GetTransactionDetailsByTransactionIDFromCallbackRIBSB
            errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDFromCallbackRIBSB: " + err)
        }

        try {
            if (typeof instance === "GetTransactionDetailsByTransactionIDFromCallbackRIBSE") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                GetTransactionDetailsByTransactionIDFromCallbackRIBSE.validateJSON(instance); // throw an exception if no match
                // create GetTransactionDetailsByTransactionIDFromCallbackRIBSE from JS object
                this.actualInstance = GetTransactionDetailsByTransactionIDFromCallbackRIBSE.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into GetTransactionDetailsByTransactionIDFromCallbackRIBSE
            errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDFromCallbackRIBSE: " + err)
        }

        try {
            if (typeof instance === "GetTransactionDetailsByTransactionIDFromCallbackRIBSBC") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                GetTransactionDetailsByTransactionIDFromCallbackRIBSBC.validateJSON(instance); // throw an exception if no match
                // create GetTransactionDetailsByTransactionIDFromCallbackRIBSBC from JS object
                this.actualInstance = GetTransactionDetailsByTransactionIDFromCallbackRIBSBC.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into GetTransactionDetailsByTransactionIDFromCallbackRIBSBC
            errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDFromCallbackRIBSBC: " + err)
        }

        try {
            if (typeof instance === "GetTransactionDetailsByTransactionIDFromCallbackRIBSL") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                GetTransactionDetailsByTransactionIDFromCallbackRIBSL.validateJSON(instance); // throw an exception if no match
                // create GetTransactionDetailsByTransactionIDFromCallbackRIBSL from JS object
                this.actualInstance = GetTransactionDetailsByTransactionIDFromCallbackRIBSL.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into GetTransactionDetailsByTransactionIDFromCallbackRIBSL
            errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDFromCallbackRIBSL: " + err)
        }

        try {
            if (typeof instance === "GetTransactionDetailsByTransactionIDFromCallbackRIBSD") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                GetTransactionDetailsByTransactionIDFromCallbackRIBSD.validateJSON(instance); // throw an exception if no match
                // create GetTransactionDetailsByTransactionIDFromCallbackRIBSD from JS object
                this.actualInstance = GetTransactionDetailsByTransactionIDFromCallbackRIBSD.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into GetTransactionDetailsByTransactionIDFromCallbackRIBSD
            errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDFromCallbackRIBSD: " + err)
        }

        try {
            if (typeof instance === "GetTransactionDetailsByTransactionIDFromCallbackRIBSD2") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                GetTransactionDetailsByTransactionIDFromCallbackRIBSD2.validateJSON(instance); // throw an exception if no match
                // create GetTransactionDetailsByTransactionIDFromCallbackRIBSD2 from JS object
                this.actualInstance = GetTransactionDetailsByTransactionIDFromCallbackRIBSD2.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into GetTransactionDetailsByTransactionIDFromCallbackRIBSD2
            errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDFromCallbackRIBSD2: " + err)
        }

        try {
            if (typeof instance === "GetTransactionDetailsByTransactionIDFromCallbackRIBSZ") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                GetTransactionDetailsByTransactionIDFromCallbackRIBSZ.validateJSON(instance); // throw an exception if no match
                // create GetTransactionDetailsByTransactionIDFromCallbackRIBSZ from JS object
                this.actualInstance = GetTransactionDetailsByTransactionIDFromCallbackRIBSZ.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into GetTransactionDetailsByTransactionIDFromCallbackRIBSZ
            errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDFromCallbackRIBSZ: " + err)
        }

        try {
            if (typeof instance === "GetTransactionDetailsByTransactionIDFromCallbackRIBSEC") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                GetTransactionDetailsByTransactionIDFromCallbackRIBSEC.validateJSON(instance); // throw an exception if no match
                // create GetTransactionDetailsByTransactionIDFromCallbackRIBSEC from JS object
                this.actualInstance = GetTransactionDetailsByTransactionIDFromCallbackRIBSEC.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into GetTransactionDetailsByTransactionIDFromCallbackRIBSEC
            errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDFromCallbackRIBSEC: " + err)
        }

        try {
            if (typeof instance === "GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC.validateJSON(instance); // throw an exception if no match
                // create GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC from JS object
                this.actualInstance = GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC
            errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC: " + err)
        }

        try {
            if (typeof instance === "GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2.validateJSON(instance); // throw an exception if no match
                // create GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2 from JS object
                this.actualInstance = GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2
            errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2: " + err)
        }

        try {
            if (typeof instance === "GetTransactionDetailsByTransactionIDFromCallbackRIBSX") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                GetTransactionDetailsByTransactionIDFromCallbackRIBSX.validateJSON(instance); // throw an exception if no match
                // create GetTransactionDetailsByTransactionIDFromCallbackRIBSX from JS object
                this.actualInstance = GetTransactionDetailsByTransactionIDFromCallbackRIBSX.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into GetTransactionDetailsByTransactionIDFromCallbackRIBSX
            errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDFromCallbackRIBSX: " + err)
        }

        try {
            if (typeof instance === "GetTransactionDetailsByTransactionIDFromCallbackRIBST") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                GetTransactionDetailsByTransactionIDFromCallbackRIBST.validateJSON(instance); // throw an exception if no match
                // create GetTransactionDetailsByTransactionIDFromCallbackRIBST from JS object
                this.actualInstance = GetTransactionDetailsByTransactionIDFromCallbackRIBST.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into GetTransactionDetailsByTransactionIDFromCallbackRIBST
            errorMessages.push("Failed to construct GetTransactionDetailsByTransactionIDFromCallbackRIBST: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `GetTransactionDetailsByTransactionIDFromCallbackRIBS` with oneOf schemas GetTransactionDetailsByTransactionIDFromCallbackRIBSB, GetTransactionDetailsByTransactionIDFromCallbackRIBSBC, GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC, GetTransactionDetailsByTransactionIDFromCallbackRIBSD, GetTransactionDetailsByTransactionIDFromCallbackRIBSD2, GetTransactionDetailsByTransactionIDFromCallbackRIBSE, GetTransactionDetailsByTransactionIDFromCallbackRIBSEC, GetTransactionDetailsByTransactionIDFromCallbackRIBSL, GetTransactionDetailsByTransactionIDFromCallbackRIBST, GetTransactionDetailsByTransactionIDFromCallbackRIBSX, GetTransactionDetailsByTransactionIDFromCallbackRIBSZ, GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `GetTransactionDetailsByTransactionIDFromCallbackRIBS` with oneOf schemas GetTransactionDetailsByTransactionIDFromCallbackRIBSB, GetTransactionDetailsByTransactionIDFromCallbackRIBSBC, GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC, GetTransactionDetailsByTransactionIDFromCallbackRIBSD, GetTransactionDetailsByTransactionIDFromCallbackRIBSD2, GetTransactionDetailsByTransactionIDFromCallbackRIBSE, GetTransactionDetailsByTransactionIDFromCallbackRIBSEC, GetTransactionDetailsByTransactionIDFromCallbackRIBSL, GetTransactionDetailsByTransactionIDFromCallbackRIBST, GetTransactionDetailsByTransactionIDFromCallbackRIBSX, GetTransactionDetailsByTransactionIDFromCallbackRIBSZ, GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDFromCallbackRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBS} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBS} The populated <code>GetTransactionDetailsByTransactionIDFromCallbackRIBS</code> instance.
     */
    static constructFromObject(data, obj) {
        return new GetTransactionDetailsByTransactionIDFromCallbackRIBS(data);
    }

    /**
     * Gets the actual instance, which can be <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSB</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSBC</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSD</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSD2</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSE</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSEC</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSL</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBST</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSX</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSZ</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2</code>.
     * @return {(module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSB|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSBC|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSD|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSD2|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSE|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSEC|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSL|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBST|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSX|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSB</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSBC</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSD</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSD2</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSE</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSEC</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSL</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBST</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSX</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSZ</code>, <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2</code>.
     * @param {(module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSB|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSBC|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSD|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSD2|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSE|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSEC|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSL|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBST|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSX|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ|module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = GetTransactionDetailsByTransactionIDFromCallbackRIBS.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of GetTransactionDetailsByTransactionIDFromCallbackRIBS from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBS} An instance of GetTransactionDetailsByTransactionIDFromCallbackRIBS.
     */
    static fromJSON = function(json_string){
        return GetTransactionDetailsByTransactionIDFromCallbackRIBS.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['size'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['vSize'] = undefined;

/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['version'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVinInner>} vin
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZVoutInner>} vout
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['vout'] = undefined;

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['contract'] = undefined;

/**
 * Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
 * @member {Number} gasLimit
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice} gasPrice
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['gasPrice'] = undefined;

/**
 * Defines how much of the gas for the block has been used.
 * @member {Number} gasUsed
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['gasUsed'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['nonce'] = undefined;

/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['transactionStatus'] = undefined;

/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['bindingSig'] = undefined;

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['expiryHeight'] = undefined;

/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['joinSplitPubKey'] = undefined;

/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['joinSplitSig'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['overwintered'] = undefined;

/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner>} vJoinSplit
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['vJoinSplit'] = undefined;

/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['vShieldedOutput'] = undefined;

/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['vShieldedSpend'] = undefined;

/**
 * String representation of the transaction value balance
 * @member {String} valueBalance
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version group ID
 * @member {String} versionGroupId
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['versionGroupId'] = undefined;

/**
 * Represents additional data that may be needed.
 * @member {String} additionalData
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['additionalData'] = undefined;

/**
 * Defines the destination tag value.
 * @member {Number} destinationTag
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['destinationTag'] = undefined;

/**
 * @member {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIOffer} offer
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['offer'] = undefined;

/**
 * @member {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIReceive} receive
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['receive'] = undefined;

/**
 * Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
 * @member {Number} sequence
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['sequence'] = undefined;

/**
 * Defines the status of the transaction.
 * @member {String} status
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['status'] = undefined;

/**
 * Defines the type of the transaction.
 * @member {String} type
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['type'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue} value
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['value'] = undefined;

/**
 * Defines the amount of the transaction.
 * @member {String} amount
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['amount'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSTBandwidthUsed} bandwidthUsed
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['bandwidthUsed'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed} energyUsed
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['energyUsed'] = undefined;

/**
 * Defines if the transaction includes internal transactions (true) or not (false).
 * @member {Boolean} hasInternalTransactions
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['hasInternalTransactions'] = undefined;

/**
 * Defines if the transaction includes token transfers (true) or not (false).
 * @member {String} hasTokenTransfers
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['hasTokenTransfers'] = undefined;

/**
 * Represents the transaction's input value.
 * @member {String} input
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['input'] = undefined;

/**
 * Represents the recipient address.
 * @member {String} recipients
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['recipients'] = undefined;

/**
 * Represents the sender address.
 * @member {String} senders
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['senders'] = undefined;


GetTransactionDetailsByTransactionIDFromCallbackRIBS.OneOf = ["GetTransactionDetailsByTransactionIDFromCallbackRIBSB", "GetTransactionDetailsByTransactionIDFromCallbackRIBSBC", "GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC", "GetTransactionDetailsByTransactionIDFromCallbackRIBSD", "GetTransactionDetailsByTransactionIDFromCallbackRIBSD2", "GetTransactionDetailsByTransactionIDFromCallbackRIBSE", "GetTransactionDetailsByTransactionIDFromCallbackRIBSEC", "GetTransactionDetailsByTransactionIDFromCallbackRIBSL", "GetTransactionDetailsByTransactionIDFromCallbackRIBST", "GetTransactionDetailsByTransactionIDFromCallbackRIBSX", "GetTransactionDetailsByTransactionIDFromCallbackRIBSZ", "GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2"];

export default GetTransactionDetailsByTransactionIDFromCallbackRIBS;

