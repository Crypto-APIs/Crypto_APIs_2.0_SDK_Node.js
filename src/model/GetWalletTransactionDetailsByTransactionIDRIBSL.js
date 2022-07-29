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
import GetTransactionDetailsByTransactionIDRIBSLVoutInner from './GetTransactionDetailsByTransactionIDRIBSLVoutInner';
import GetWalletTransactionDetailsByTransactionIDRIBSLVinInner from './GetWalletTransactionDetailsByTransactionIDRIBSLVinInner';

/**
 * The GetWalletTransactionDetailsByTransactionIDRIBSL model module.
 * @module model/GetWalletTransactionDetailsByTransactionIDRIBSL
 * @version 1.7.1
 */
class GetWalletTransactionDetailsByTransactionIDRIBSL {
    /**
     * Constructs a new <code>GetWalletTransactionDetailsByTransactionIDRIBSL</code>.
     * Litecoin
     * @alias module:model/GetWalletTransactionDetailsByTransactionIDRIBSL
     * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
     * @param size {Number} Represents the total size of this transaction.
     * @param vSize {Number} Represents the virtual size of this transaction.
     * @param version {Number} Represents the transaction version number.
     * @param vin {Array.<module:model/GetWalletTransactionDetailsByTransactionIDRIBSLVinInner>} Object Array representation of transaction inputs
     * @param vout {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSLVoutInner>} Object Array representation of transaction outputs
     */
    constructor(locktime, size, vSize, version, vin, vout) { 
        
        GetWalletTransactionDetailsByTransactionIDRIBSL.initialize(this, locktime, size, vSize, version, vin, vout);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, locktime, size, vSize, version, vin, vout) { 
        obj['locktime'] = locktime;
        obj['size'] = size;
        obj['vSize'] = vSize;
        obj['version'] = version;
        obj['vin'] = vin;
        obj['vout'] = vout;
    }

    /**
     * Constructs a <code>GetWalletTransactionDetailsByTransactionIDRIBSL</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWalletTransactionDetailsByTransactionIDRIBSL} obj Optional instance to populate.
     * @return {module:model/GetWalletTransactionDetailsByTransactionIDRIBSL} The populated <code>GetWalletTransactionDetailsByTransactionIDRIBSL</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetWalletTransactionDetailsByTransactionIDRIBSL();

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
                obj['vin'] = ApiClient.convertToType(data['vin'], [GetWalletTransactionDetailsByTransactionIDRIBSLVinInner]);
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], [GetTransactionDetailsByTransactionIDRIBSLVoutInner]);
            }
        }
        return obj;
    }


}

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
GetWalletTransactionDetailsByTransactionIDRIBSL.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
GetWalletTransactionDetailsByTransactionIDRIBSL.prototype['size'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
GetWalletTransactionDetailsByTransactionIDRIBSL.prototype['vSize'] = undefined;

/**
 * Represents the transaction version number.
 * @member {Number} version
 */
GetWalletTransactionDetailsByTransactionIDRIBSL.prototype['version'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetWalletTransactionDetailsByTransactionIDRIBSLVinInner>} vin
 */
GetWalletTransactionDetailsByTransactionIDRIBSL.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSLVoutInner>} vout
 */
GetWalletTransactionDetailsByTransactionIDRIBSL.prototype['vout'] = undefined;






export default GetWalletTransactionDetailsByTransactionIDRIBSL;

