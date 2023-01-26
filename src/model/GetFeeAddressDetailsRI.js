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
import GetFeeAddressDetailsRIBalance from './GetFeeAddressDetailsRIBalance';

/**
 * The GetFeeAddressDetailsRI model module.
 * @module model/GetFeeAddressDetailsRI
 * @version 1.12.0
 */
class GetFeeAddressDetailsRI {
    /**
     * Constructs a new <code>GetFeeAddressDetailsRI</code>.
     * @alias module:model/GetFeeAddressDetailsRI
     * @param address {String} Represents the specific fee address, which is always automatically generated. Users must fund it.
     * @param balance {module:model/GetFeeAddressDetailsRIBalance} 
     * @param minimumTransferAmount {String} Represents the minimum transfer amount of the currency in the `fromAddress` that can be allowed for an automatic forwarding.
     */
    constructor(address, balance, minimumTransferAmount) { 
        
        GetFeeAddressDetailsRI.initialize(this, address, balance, minimumTransferAmount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, balance, minimumTransferAmount) { 
        obj['address'] = address;
        obj['balance'] = balance;
        obj['minimumTransferAmount'] = minimumTransferAmount;
    }

    /**
     * Constructs a <code>GetFeeAddressDetailsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFeeAddressDetailsRI} obj Optional instance to populate.
     * @return {module:model/GetFeeAddressDetailsRI} The populated <code>GetFeeAddressDetailsRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFeeAddressDetailsRI();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = GetFeeAddressDetailsRIBalance.constructFromObject(data['balance']);
            }
            if (data.hasOwnProperty('minimumTransferAmount')) {
                obj['minimumTransferAmount'] = ApiClient.convertToType(data['minimumTransferAmount'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the specific fee address, which is always automatically generated. Users must fund it.
 * @member {String} address
 */
GetFeeAddressDetailsRI.prototype['address'] = undefined;

/**
 * @member {module:model/GetFeeAddressDetailsRIBalance} balance
 */
GetFeeAddressDetailsRI.prototype['balance'] = undefined;

/**
 * Represents the minimum transfer amount of the currency in the `fromAddress` that can be allowed for an automatic forwarding.
 * @member {String} minimumTransferAmount
 */
GetFeeAddressDetailsRI.prototype['minimumTransferAmount'] = undefined;






export default GetFeeAddressDetailsRI;

