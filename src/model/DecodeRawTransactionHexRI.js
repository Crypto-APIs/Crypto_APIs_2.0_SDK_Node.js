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
import DecodeRawTransactionHexRIS from './DecodeRawTransactionHexRIS';

/**
 * The DecodeRawTransactionHexRI model module.
 * @module model/DecodeRawTransactionHexRI
 * @version 1.5.0
 */
class DecodeRawTransactionHexRI {
    /**
     * Constructs a new <code>DecodeRawTransactionHexRI</code>.
     * @alias module:model/DecodeRawTransactionHexRI
     * @param blockchainSpeficicData {module:model/DecodeRawTransactionHexRIS} 
     * @param size {Number} Represents the total size of this transaction.
     * @param transactionId {String} Represents the decoded transaction hex.
     */
    constructor(blockchainSpeficicData, size, transactionId) { 
        
        DecodeRawTransactionHexRI.initialize(this, blockchainSpeficicData, size, transactionId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockchainSpeficicData, size, transactionId) { 
        obj['blockchainSpeficicData'] = blockchainSpeficicData;
        obj['size'] = size;
        obj['transactionId'] = transactionId;
    }

    /**
     * Constructs a <code>DecodeRawTransactionHexRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRI} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRI} The populated <code>DecodeRawTransactionHexRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecodeRawTransactionHexRI();

            if (data.hasOwnProperty('blockchainSpeficicData')) {
                obj['blockchainSpeficicData'] = DecodeRawTransactionHexRIS.constructFromObject(data['blockchainSpeficicData']);
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DecodeRawTransactionHexRIS} blockchainSpeficicData
 */
DecodeRawTransactionHexRI.prototype['blockchainSpeficicData'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
DecodeRawTransactionHexRI.prototype['size'] = undefined;

/**
 * Represents the decoded transaction hex.
 * @member {String} transactionId
 */
DecodeRawTransactionHexRI.prototype['transactionId'] = undefined;






export default DecodeRawTransactionHexRI;
