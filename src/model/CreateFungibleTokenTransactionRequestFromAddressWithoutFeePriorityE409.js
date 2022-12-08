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
import BannedIpAddressDetailsInner from './BannedIpAddressDetailsInner';
import InvalidData from './InvalidData';
import WalletAsAServiceAddressBalanceNotEnough from './WalletAsAServiceAddressBalanceNotEnough';
import WalletAsAServiceTokenNotSupported from './WalletAsAServiceTokenNotSupported';
import WalletAsAServiceWalletBalanceNotEnough from './WalletAsAServiceWalletBalanceNotEnough';

/**
 * The CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityE409 model module.
 * @module model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityE409
 * @version 1.11.0
 */
class CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityE409 {
    /**
     * Constructs a new <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityE409</code>.
     * @alias module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityE409
     * @param {(module:model/InvalidData|module:model/WalletAsAServiceAddressBalanceNotEnough|module:model/WalletAsAServiceTokenNotSupported|module:model/WalletAsAServiceWalletBalanceNotEnough)} instance The actual instance to initialize CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityE409.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "InvalidData") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                InvalidData.validateJSON(instance); // throw an exception if no match
                // create InvalidData from JS object
                this.actualInstance = InvalidData.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into InvalidData
            errorMessages.push("Failed to construct InvalidData: " + err)
        }

        try {
            if (typeof instance === "WalletAsAServiceWalletBalanceNotEnough") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                WalletAsAServiceWalletBalanceNotEnough.validateJSON(instance); // throw an exception if no match
                // create WalletAsAServiceWalletBalanceNotEnough from JS object
                this.actualInstance = WalletAsAServiceWalletBalanceNotEnough.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into WalletAsAServiceWalletBalanceNotEnough
            errorMessages.push("Failed to construct WalletAsAServiceWalletBalanceNotEnough: " + err)
        }

        try {
            if (typeof instance === "WalletAsAServiceAddressBalanceNotEnough") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                WalletAsAServiceAddressBalanceNotEnough.validateJSON(instance); // throw an exception if no match
                // create WalletAsAServiceAddressBalanceNotEnough from JS object
                this.actualInstance = WalletAsAServiceAddressBalanceNotEnough.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into WalletAsAServiceAddressBalanceNotEnough
            errorMessages.push("Failed to construct WalletAsAServiceAddressBalanceNotEnough: " + err)
        }

        try {
            if (typeof instance === "WalletAsAServiceTokenNotSupported") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                WalletAsAServiceTokenNotSupported.validateJSON(instance); // throw an exception if no match
                // create WalletAsAServiceTokenNotSupported from JS object
                this.actualInstance = WalletAsAServiceTokenNotSupported.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into WalletAsAServiceTokenNotSupported
            errorMessages.push("Failed to construct WalletAsAServiceTokenNotSupported: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityE409` with oneOf schemas InvalidData, WalletAsAServiceAddressBalanceNotEnough, WalletAsAServiceTokenNotSupported, WalletAsAServiceWalletBalanceNotEnough. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityE409` with oneOf schemas InvalidData, WalletAsAServiceAddressBalanceNotEnough, WalletAsAServiceTokenNotSupported, WalletAsAServiceWalletBalanceNotEnough. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityE409</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityE409} obj Optional instance to populate.
     * @return {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityE409} The populated <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityE409</code> instance.
     */
    static constructFromObject(data, obj) {
        return new CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityE409(data);
    }

    /**
     * Gets the actual instance, which can be <code>InvalidData</code>, <code>WalletAsAServiceAddressBalanceNotEnough</code>, <code>WalletAsAServiceTokenNotSupported</code>, <code>WalletAsAServiceWalletBalanceNotEnough</code>.
     * @return {(module:model/InvalidData|module:model/WalletAsAServiceAddressBalanceNotEnough|module:model/WalletAsAServiceTokenNotSupported|module:model/WalletAsAServiceWalletBalanceNotEnough)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>InvalidData</code>, <code>WalletAsAServiceAddressBalanceNotEnough</code>, <code>WalletAsAServiceTokenNotSupported</code>, <code>WalletAsAServiceWalletBalanceNotEnough</code>.
     * @param {(module:model/InvalidData|module:model/WalletAsAServiceAddressBalanceNotEnough|module:model/WalletAsAServiceTokenNotSupported|module:model/WalletAsAServiceWalletBalanceNotEnough)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityE409.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityE409 from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityE409} An instance of CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityE409.
     */
    static fromJSON = function(json_string){
        return CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityE409.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityE409.prototype['code'] = undefined;

/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityE409.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityE409.prototype['details'] = undefined;


CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityE409.OneOf = ["InvalidData", "WalletAsAServiceAddressBalanceNotEnough", "WalletAsAServiceTokenNotSupported", "WalletAsAServiceWalletBalanceNotEnough"];

export default CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityE409;

