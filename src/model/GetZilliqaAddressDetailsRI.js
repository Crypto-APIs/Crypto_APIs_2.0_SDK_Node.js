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
import GetZilliqaAddressDetailsRIBalance from './GetZilliqaAddressDetailsRIBalance';

/**
 * The GetZilliqaAddressDetailsRI model module.
 * @module model/GetZilliqaAddressDetailsRI
 * @version 1.12.0
 */
class GetZilliqaAddressDetailsRI {
    /**
     * Constructs a new <code>GetZilliqaAddressDetailsRI</code>.
     * @alias module:model/GetZilliqaAddressDetailsRI
     * @param balance {module:model/GetZilliqaAddressDetailsRIBalance} 
     * @param incomingTransactionsCount {Number} Defines the received transaction count to the address.
     * @param outgoingTransactionsCount {Number} Defines the sent transaction count from the address.
     * @param transactionsCount {Number} Defines the entire count of the transactions.
     */
    constructor(balance, incomingTransactionsCount, outgoingTransactionsCount, transactionsCount) { 
        
        GetZilliqaAddressDetailsRI.initialize(this, balance, incomingTransactionsCount, outgoingTransactionsCount, transactionsCount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, balance, incomingTransactionsCount, outgoingTransactionsCount, transactionsCount) { 
        obj['balance'] = balance;
        obj['incomingTransactionsCount'] = incomingTransactionsCount;
        obj['outgoingTransactionsCount'] = outgoingTransactionsCount;
        obj['transactionsCount'] = transactionsCount;
    }

    /**
     * Constructs a <code>GetZilliqaAddressDetailsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetZilliqaAddressDetailsRI} obj Optional instance to populate.
     * @return {module:model/GetZilliqaAddressDetailsRI} The populated <code>GetZilliqaAddressDetailsRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetZilliqaAddressDetailsRI();

            if (data.hasOwnProperty('balance')) {
                obj['balance'] = GetZilliqaAddressDetailsRIBalance.constructFromObject(data['balance']);
            }
            if (data.hasOwnProperty('incomingTransactionsCount')) {
                obj['incomingTransactionsCount'] = ApiClient.convertToType(data['incomingTransactionsCount'], 'Number');
            }
            if (data.hasOwnProperty('outgoingTransactionsCount')) {
                obj['outgoingTransactionsCount'] = ApiClient.convertToType(data['outgoingTransactionsCount'], 'Number');
            }
            if (data.hasOwnProperty('transactionsCount')) {
                obj['transactionsCount'] = ApiClient.convertToType(data['transactionsCount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetZilliqaAddressDetailsRIBalance} balance
 */
GetZilliqaAddressDetailsRI.prototype['balance'] = undefined;

/**
 * Defines the received transaction count to the address.
 * @member {Number} incomingTransactionsCount
 */
GetZilliqaAddressDetailsRI.prototype['incomingTransactionsCount'] = undefined;

/**
 * Defines the sent transaction count from the address.
 * @member {Number} outgoingTransactionsCount
 */
GetZilliqaAddressDetailsRI.prototype['outgoingTransactionsCount'] = undefined;

/**
 * Defines the entire count of the transactions.
 * @member {Number} transactionsCount
 */
GetZilliqaAddressDetailsRI.prototype['transactionsCount'] = undefined;






export default GetZilliqaAddressDetailsRI;

