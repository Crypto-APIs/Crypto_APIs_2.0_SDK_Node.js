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
import InvalidBlockchain from './InvalidBlockchain';
import InvalidPagination from './InvalidPagination';
import LimitGreaterThanAllowed from './LimitGreaterThanAllowed';
import UriNotFound from './UriNotFound';

/**
 * The ConvertBitcoinCashAddressE400 model module.
 * @module model/ConvertBitcoinCashAddressE400
 * @version 1.11.0
 */
class ConvertBitcoinCashAddressE400 {
    /**
     * Constructs a new <code>ConvertBitcoinCashAddressE400</code>.
     * @alias module:model/ConvertBitcoinCashAddressE400
     * @param {(module:model/InvalidBlockchain|module:model/InvalidPagination|module:model/LimitGreaterThanAllowed|module:model/UriNotFound)} instance The actual instance to initialize ConvertBitcoinCashAddressE400.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "UriNotFound") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                UriNotFound.validateJSON(instance); // throw an exception if no match
                // create UriNotFound from JS object
                this.actualInstance = UriNotFound.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into UriNotFound
            errorMessages.push("Failed to construct UriNotFound: " + err)
        }

        try {
            if (typeof instance === "LimitGreaterThanAllowed") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                LimitGreaterThanAllowed.validateJSON(instance); // throw an exception if no match
                // create LimitGreaterThanAllowed from JS object
                this.actualInstance = LimitGreaterThanAllowed.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into LimitGreaterThanAllowed
            errorMessages.push("Failed to construct LimitGreaterThanAllowed: " + err)
        }

        try {
            if (typeof instance === "InvalidPagination") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                InvalidPagination.validateJSON(instance); // throw an exception if no match
                // create InvalidPagination from JS object
                this.actualInstance = InvalidPagination.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into InvalidPagination
            errorMessages.push("Failed to construct InvalidPagination: " + err)
        }

        try {
            if (typeof instance === "InvalidBlockchain") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                InvalidBlockchain.validateJSON(instance); // throw an exception if no match
                // create InvalidBlockchain from JS object
                this.actualInstance = InvalidBlockchain.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into InvalidBlockchain
            errorMessages.push("Failed to construct InvalidBlockchain: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `ConvertBitcoinCashAddressE400` with oneOf schemas InvalidBlockchain, InvalidPagination, LimitGreaterThanAllowed, UriNotFound. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `ConvertBitcoinCashAddressE400` with oneOf schemas InvalidBlockchain, InvalidPagination, LimitGreaterThanAllowed, UriNotFound. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>ConvertBitcoinCashAddressE400</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConvertBitcoinCashAddressE400} obj Optional instance to populate.
     * @return {module:model/ConvertBitcoinCashAddressE400} The populated <code>ConvertBitcoinCashAddressE400</code> instance.
     */
    static constructFromObject(data, obj) {
        return new ConvertBitcoinCashAddressE400(data);
    }

    /**
     * Gets the actual instance, which can be <code>InvalidBlockchain</code>, <code>InvalidPagination</code>, <code>LimitGreaterThanAllowed</code>, <code>UriNotFound</code>.
     * @return {(module:model/InvalidBlockchain|module:model/InvalidPagination|module:model/LimitGreaterThanAllowed|module:model/UriNotFound)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>InvalidBlockchain</code>, <code>InvalidPagination</code>, <code>LimitGreaterThanAllowed</code>, <code>UriNotFound</code>.
     * @param {(module:model/InvalidBlockchain|module:model/InvalidPagination|module:model/LimitGreaterThanAllowed|module:model/UriNotFound)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = ConvertBitcoinCashAddressE400.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of ConvertBitcoinCashAddressE400 from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/ConvertBitcoinCashAddressE400} An instance of ConvertBitcoinCashAddressE400.
     */
    static fromJSON = function(json_string){
        return ConvertBitcoinCashAddressE400.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
ConvertBitcoinCashAddressE400.prototype['code'] = undefined;

/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
ConvertBitcoinCashAddressE400.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
ConvertBitcoinCashAddressE400.prototype['details'] = undefined;


ConvertBitcoinCashAddressE400.OneOf = ["InvalidBlockchain", "InvalidPagination", "LimitGreaterThanAllowed", "UriNotFound"];

export default ConvertBitcoinCashAddressE400;

