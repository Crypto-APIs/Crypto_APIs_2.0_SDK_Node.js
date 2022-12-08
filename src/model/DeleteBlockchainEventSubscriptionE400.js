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
import InvalidPagination from './InvalidPagination';
import LimitGreaterThanAllowed from './LimitGreaterThanAllowed';
import UriNotFound from './UriNotFound';

/**
 * The DeleteBlockchainEventSubscriptionE400 model module.
 * @module model/DeleteBlockchainEventSubscriptionE400
 * @version 1.11.0
 */
class DeleteBlockchainEventSubscriptionE400 {
    /**
     * Constructs a new <code>DeleteBlockchainEventSubscriptionE400</code>.
     * @alias module:model/DeleteBlockchainEventSubscriptionE400
     * @param {(module:model/InvalidPagination|module:model/LimitGreaterThanAllowed|module:model/UriNotFound)} instance The actual instance to initialize DeleteBlockchainEventSubscriptionE400.
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

        if (match > 1) {
            throw new Error("Multiple matches found constructing `DeleteBlockchainEventSubscriptionE400` with oneOf schemas InvalidPagination, LimitGreaterThanAllowed, UriNotFound. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `DeleteBlockchainEventSubscriptionE400` with oneOf schemas InvalidPagination, LimitGreaterThanAllowed, UriNotFound. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>DeleteBlockchainEventSubscriptionE400</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteBlockchainEventSubscriptionE400} obj Optional instance to populate.
     * @return {module:model/DeleteBlockchainEventSubscriptionE400} The populated <code>DeleteBlockchainEventSubscriptionE400</code> instance.
     */
    static constructFromObject(data, obj) {
        return new DeleteBlockchainEventSubscriptionE400(data);
    }

    /**
     * Gets the actual instance, which can be <code>InvalidPagination</code>, <code>LimitGreaterThanAllowed</code>, <code>UriNotFound</code>.
     * @return {(module:model/InvalidPagination|module:model/LimitGreaterThanAllowed|module:model/UriNotFound)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>InvalidPagination</code>, <code>LimitGreaterThanAllowed</code>, <code>UriNotFound</code>.
     * @param {(module:model/InvalidPagination|module:model/LimitGreaterThanAllowed|module:model/UriNotFound)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = DeleteBlockchainEventSubscriptionE400.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of DeleteBlockchainEventSubscriptionE400 from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/DeleteBlockchainEventSubscriptionE400} An instance of DeleteBlockchainEventSubscriptionE400.
     */
    static fromJSON = function(json_string){
        return DeleteBlockchainEventSubscriptionE400.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
DeleteBlockchainEventSubscriptionE400.prototype['code'] = undefined;

/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
DeleteBlockchainEventSubscriptionE400.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
DeleteBlockchainEventSubscriptionE400.prototype['details'] = undefined;


DeleteBlockchainEventSubscriptionE400.OneOf = ["InvalidPagination", "LimitGreaterThanAllowed", "UriNotFound"];

export default DeleteBlockchainEventSubscriptionE400;

