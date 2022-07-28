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
 * The GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas model module.
 * @module model/GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas
 * @version 1.7.0
 */
class GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas {
    /**
     * Constructs a new <code>GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas</code>.
     * @alias module:model/GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas
     * @param fast {String} Represents the fast maximum priority fee per gas, calculated from unconfirmed transactions.
     * @param slow {String} Represents the slow maximum priority fee per gas, calculated from unconfirmed transactions.
     * @param standard {String} Represents the standard maximum priority fee per gas, calculated from unconfirmed transactions.
     * @param unit {String} Represents the unit of the maximum priority fee per gas.
     */
    constructor(fast, slow, standard, unit) { 
        
        GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas.initialize(this, fast, slow, standard, unit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fast, slow, standard, unit) { 
        obj['fast'] = fast;
        obj['slow'] = slow;
        obj['standard'] = standard;
        obj['unit'] = unit;
    }

    /**
     * Constructs a <code>GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas} obj Optional instance to populate.
     * @return {module:model/GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas} The populated <code>GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas();

            if (data.hasOwnProperty('fast')) {
                obj['fast'] = ApiClient.convertToType(data['fast'], 'String');
            }
            if (data.hasOwnProperty('slow')) {
                obj['slow'] = ApiClient.convertToType(data['slow'], 'String');
            }
            if (data.hasOwnProperty('standard')) {
                obj['standard'] = ApiClient.convertToType(data['standard'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the fast maximum priority fee per gas, calculated from unconfirmed transactions.
 * @member {String} fast
 */
GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas.prototype['fast'] = undefined;

/**
 * Represents the slow maximum priority fee per gas, calculated from unconfirmed transactions.
 * @member {String} slow
 */
GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas.prototype['slow'] = undefined;

/**
 * Represents the standard maximum priority fee per gas, calculated from unconfirmed transactions.
 * @member {String} standard
 */
GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas.prototype['standard'] = undefined;

/**
 * Represents the unit of the maximum priority fee per gas.
 * @member {String} unit
 */
GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas.prototype['unit'] = undefined;






export default GetEIP1559FeeRecommendationsRIMaxPriorityFeePerGas;

