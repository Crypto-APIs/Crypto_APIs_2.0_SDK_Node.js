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

/**
 * The ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner model module.
 * @module model/ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner
 * @version 1.7.0
 */
class ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner {
    /**
     * Constructs a new <code>ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner</code>.
     * @alias module:model/ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner
     * @param reason {String} Defines the deactivation reason as a message.
     * @param timestamp {Number} Represents the time of the subscription deactivation.
     */
    constructor(reason, timestamp) { 
        
        ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner.initialize(this, reason, timestamp);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, reason, timestamp) { 
        obj['reason'] = reason;
        obj['timestamp'] = timestamp;
    }

    /**
     * Constructs a <code>ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner} obj Optional instance to populate.
     * @return {module:model/ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner} The populated <code>ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner();

            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Defines the deactivation reason as a message.
 * @member {String} reason
 */
ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner.prototype['reason'] = undefined;

/**
 * Represents the time of the subscription deactivation.
 * @member {Number} timestamp
 */
ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner.prototype['timestamp'] = undefined;






export default ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner;

