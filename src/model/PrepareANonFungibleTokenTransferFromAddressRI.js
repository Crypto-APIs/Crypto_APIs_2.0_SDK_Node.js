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
import PrepareANonFungibleTokenTransferFromAddressRIBS from './PrepareANonFungibleTokenTransferFromAddressRIBS';

/**
 * The PrepareANonFungibleTokenTransferFromAddressRI model module.
 * @module model/PrepareANonFungibleTokenTransferFromAddressRI
 * @version 1.12.0
 */
class PrepareANonFungibleTokenTransferFromAddressRI {
    /**
     * Constructs a new <code>PrepareANonFungibleTokenTransferFromAddressRI</code>.
     * @alias module:model/PrepareANonFungibleTokenTransferFromAddressRI
     * @param recipient {String} Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
     * @param sender {String} The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
     * @param tokenId {String} Represents the unique token identifier.
     * @param blockchainSpecific {module:model/PrepareANonFungibleTokenTransferFromAddressRIBS} 
     */
    constructor(recipient, sender, tokenId, blockchainSpecific) { 
        
        PrepareANonFungibleTokenTransferFromAddressRI.initialize(this, recipient, sender, tokenId, blockchainSpecific);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, recipient, sender, tokenId, blockchainSpecific) { 
        obj['recipient'] = recipient;
        obj['sender'] = sender;
        obj['tokenId'] = tokenId;
        obj['blockchainSpecific'] = blockchainSpecific;
    }

    /**
     * Constructs a <code>PrepareANonFungibleTokenTransferFromAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareANonFungibleTokenTransferFromAddressRI} obj Optional instance to populate.
     * @return {module:model/PrepareANonFungibleTokenTransferFromAddressRI} The populated <code>PrepareANonFungibleTokenTransferFromAddressRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepareANonFungibleTokenTransferFromAddressRI();

            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
            }
            if (data.hasOwnProperty('tokenId')) {
                obj['tokenId'] = ApiClient.convertToType(data['tokenId'], 'String');
            }
            if (data.hasOwnProperty('blockchainSpecific')) {
                obj['blockchainSpecific'] = PrepareANonFungibleTokenTransferFromAddressRIBS.constructFromObject(data['blockchainSpecific']);
            }
        }
        return obj;
    }


}

/**
 * Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
 * @member {String} recipient
 */
PrepareANonFungibleTokenTransferFromAddressRI.prototype['recipient'] = undefined;

/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} sender
 */
PrepareANonFungibleTokenTransferFromAddressRI.prototype['sender'] = undefined;

/**
 * Represents the unique token identifier.
 * @member {String} tokenId
 */
PrepareANonFungibleTokenTransferFromAddressRI.prototype['tokenId'] = undefined;

/**
 * @member {module:model/PrepareANonFungibleTokenTransferFromAddressRIBS} blockchainSpecific
 */
PrepareANonFungibleTokenTransferFromAddressRI.prototype['blockchainSpecific'] = undefined;






export default PrepareANonFungibleTokenTransferFromAddressRI;

