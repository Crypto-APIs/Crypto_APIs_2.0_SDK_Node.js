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
import CreateTokensTransactionRequestFromAddressRIRecipients from './CreateTokensTransactionRequestFromAddressRIRecipients';
import CreateTokensTransactionRequestFromAddressRISenders from './CreateTokensTransactionRequestFromAddressRISenders';
import CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData from './CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData';

/**
 * The CreateTokensTransactionRequestFromAddressRI model module.
 * @module model/CreateTokensTransactionRequestFromAddressRI
 * @version 1.1.0
 */
class CreateTokensTransactionRequestFromAddressRI {
    /**
     * Constructs a new <code>CreateTokensTransactionRequestFromAddressRI</code>.
     * @alias module:model/CreateTokensTransactionRequestFromAddressRI
     * @param feePriority {module:model/CreateTokensTransactionRequestFromAddressRI.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
     * @param recipients {Array.<module:model/CreateTokensTransactionRequestFromAddressRIRecipients>} Defines the destination for the transaction, i.e. the recipient(s).
     * @param senders {module:model/CreateTokensTransactionRequestFromAddressRISenders} 
     * @param tokenTypeSpecificData {module:model/CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData} 
     */
    constructor(feePriority, recipients, senders, tokenTypeSpecificData) { 
        
        CreateTokensTransactionRequestFromAddressRI.initialize(this, feePriority, recipients, senders, tokenTypeSpecificData);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, feePriority, recipients, senders, tokenTypeSpecificData) { 
        obj['feePriority'] = feePriority;
        obj['recipients'] = recipients;
        obj['senders'] = senders;
        obj['tokenTypeSpecificData'] = tokenTypeSpecificData;
    }

    /**
     * Constructs a <code>CreateTokensTransactionRequestFromAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTokensTransactionRequestFromAddressRI} obj Optional instance to populate.
     * @return {module:model/CreateTokensTransactionRequestFromAddressRI} The populated <code>CreateTokensTransactionRequestFromAddressRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTokensTransactionRequestFromAddressRI();

            if (data.hasOwnProperty('feePriority')) {
                obj['feePriority'] = ApiClient.convertToType(data['feePriority'], 'String');
            }
            if (data.hasOwnProperty('recipients')) {
                obj['recipients'] = ApiClient.convertToType(data['recipients'], [CreateTokensTransactionRequestFromAddressRIRecipients]);
            }
            if (data.hasOwnProperty('senders')) {
                obj['senders'] = CreateTokensTransactionRequestFromAddressRISenders.constructFromObject(data['senders']);
            }
            if (data.hasOwnProperty('tokenTypeSpecificData')) {
                obj['tokenTypeSpecificData'] = CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData.constructFromObject(data['tokenTypeSpecificData']);
            }
        }
        return obj;
    }


}

/**
 * Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
 * @member {module:model/CreateTokensTransactionRequestFromAddressRI.FeePriorityEnum} feePriority
 */
CreateTokensTransactionRequestFromAddressRI.prototype['feePriority'] = undefined;

/**
 * Defines the destination for the transaction, i.e. the recipient(s).
 * @member {Array.<module:model/CreateTokensTransactionRequestFromAddressRIRecipients>} recipients
 */
CreateTokensTransactionRequestFromAddressRI.prototype['recipients'] = undefined;

/**
 * @member {module:model/CreateTokensTransactionRequestFromAddressRISenders} senders
 */
CreateTokensTransactionRequestFromAddressRI.prototype['senders'] = undefined;

/**
 * @member {module:model/CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData} tokenTypeSpecificData
 */
CreateTokensTransactionRequestFromAddressRI.prototype['tokenTypeSpecificData'] = undefined;





/**
 * Allowed values for the <code>feePriority</code> property.
 * @enum {String}
 * @readonly
 */
CreateTokensTransactionRequestFromAddressRI['FeePriorityEnum'] = {

    /**
     * value: "slow"
     * @const
     */
    "slow": "slow",

    /**
     * value: "standard"
     * @const
     */
    "standard": "standard",

    /**
     * value: "fast"
     * @const
     */
    "fast": "fast"
};



export default CreateTokensTransactionRequestFromAddressRI;
