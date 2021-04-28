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


import ApiClient from "../ApiClient";
import AlreadyExists from '../model/AlreadyExists';
import FeatureMainnetsNotAllowedForPlan from '../model/FeatureMainnetsNotAllowedForPlan';
import GetHDWalletxPubYPubZPubDetailsResponse from '../model/GetHDWalletxPubYPubZPubDetailsResponse';
import InsufficientCredits from '../model/InsufficientCredits';
import InvalidApiKey from '../model/InvalidApiKey';
import InvalidData from '../model/InvalidData';
import InvalidXpub from '../model/InvalidXpub';
import ListHDWalletxPubYPubZPubTransactionsResponse from '../model/ListHDWalletxPubYPubZPubTransactionsResponse';
import RequestLimitReached from '../model/RequestLimitReached';
import SyncHDWalletxPubYPubZPubRequestBody from '../model/SyncHDWalletxPubYPubZPubRequestBody';
import SyncHDWalletxPubYPubZPubResponse from '../model/SyncHDWalletxPubYPubZPubResponse';
import UnexpectedServerError from '../model/UnexpectedServerError';
import UnsupportedMediaType from '../model/UnsupportedMediaType';
import XpubNotSynced from '../model/XpubNotSynced';
import XpubSyncInProgress from '../model/XpubSyncInProgress';

/**
* UTXOBased service.
* @module api/UTXOBasedApi
* @version 2.0.0
*/
export default class UTXOBasedApi {

    /**
    * Constructs a new UTXOBasedApi. 
    * @alias module:api/UTXOBasedApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get HD Wallet (xPub, yPub, zPub) Details
     * HD wallet details is useful endpoint to get the most important data about HD wallet without the need to do a lot of calculations, once the HD Wallet is synced using Sync endpoint we keep it up to date and we calculate these details in advance.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} extendedPublicKey Defines the account extended publicly known key which is used to derive all child public keys.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/String} opts.derivation The way how the HD walled derives, for example when the type is ACCOUNT, it derives change and receive addresses while when the type is BIP32 it derives directly.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetHDWalletxPubYPubZPubDetailsResponse} and HTTP response
     */
    getHDWalletXPubYPubZPubDetailsWithHttpInfo(blockchain, extendedPublicKey, network, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getHDWalletXPubYPubZPubDetails");
      }
      // verify the required parameter 'extendedPublicKey' is set
      if (extendedPublicKey === undefined || extendedPublicKey === null) {
        throw new Error("Missing the required parameter 'extendedPublicKey' when calling getHDWalletXPubYPubZPubDetails");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getHDWalletXPubYPubZPubDetails");
      }

      let pathParams = {
        'blockchain': blockchain,
        'extendedPublicKey': extendedPublicKey,
        'network': network
      };
      let queryParams = {
        'context': opts['context'],
        'derivation': opts['derivation']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetHDWalletxPubYPubZPubDetailsResponse;
      return this.apiClient.callApi(
        '/blockchain-data/{blockchain}/{network}/hd/{extendedPublicKey}/details', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get HD Wallet (xPub, yPub, zPub) Details
     * HD wallet details is useful endpoint to get the most important data about HD wallet without the need to do a lot of calculations, once the HD Wallet is synced using Sync endpoint we keep it up to date and we calculate these details in advance.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} extendedPublicKey Defines the account extended publicly known key which is used to derive all child public keys.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/String} opts.derivation The way how the HD walled derives, for example when the type is ACCOUNT, it derives change and receive addresses while when the type is BIP32 it derives directly.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetHDWalletxPubYPubZPubDetailsResponse}
     */
    getHDWalletXPubYPubZPubDetails(blockchain, extendedPublicKey, network, opts) {
      return this.getHDWalletXPubYPubZPubDetailsWithHttpInfo(blockchain, extendedPublicKey, network, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List HD Wallet (xPub, yPub, zPub) Transactions
     * This endpoint will list HD Wallet transactions.
     * @param {module:model/String} blockchain Represents the specific blockchain.
     * @param {String} extendedPublicKey Defines the master public key (xPub) of the account.
     * @param {module:model/String} network Represents the specific network.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/String} opts.derivation The way how the HD walled derives, for example when the type is ACCOUNT, it derives change and receive addresses while when the type is BIP32 it derives directly.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListHDWalletxPubYPubZPubTransactionsResponse} and HTTP response
     */
    listHDWalletXPubYPubZPubTransactionsWithHttpInfo(blockchain, extendedPublicKey, network, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listHDWalletXPubYPubZPubTransactions");
      }
      // verify the required parameter 'extendedPublicKey' is set
      if (extendedPublicKey === undefined || extendedPublicKey === null) {
        throw new Error("Missing the required parameter 'extendedPublicKey' when calling listHDWalletXPubYPubZPubTransactions");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listHDWalletXPubYPubZPubTransactions");
      }

      let pathParams = {
        'blockchain': blockchain,
        'extendedPublicKey': extendedPublicKey,
        'network': network
      };
      let queryParams = {
        'context': opts['context'],
        'derivation': opts['derivation'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListHDWalletxPubYPubZPubTransactionsResponse;
      return this.apiClient.callApi(
        '/blockchain-data/{blockchain}/{network}/hd/{extendedPublicKey}/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List HD Wallet (xPub, yPub, zPub) Transactions
     * This endpoint will list HD Wallet transactions.
     * @param {module:model/String} blockchain Represents the specific blockchain.
     * @param {String} extendedPublicKey Defines the master public key (xPub) of the account.
     * @param {module:model/String} network Represents the specific network.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/String} opts.derivation The way how the HD walled derives, for example when the type is ACCOUNT, it derives change and receive addresses while when the type is BIP32 it derives directly.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListHDWalletxPubYPubZPubTransactionsResponse}
     */
    listHDWalletXPubYPubZPubTransactions(blockchain, extendedPublicKey, network, opts) {
      return this.listHDWalletXPubYPubZPubTransactionsWithHttpInfo(blockchain, extendedPublicKey, network, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Sync HD Wallet (xPub, yPub, zPub)
     * HD wallets usually have a lot of addresses and transactions, getting the data on demand is a heavy operation. That's why we have created this feature, to be able to get HD wallet details or transactions this HD wallet must be synced first. In addition to the initial sync we keep updating the synced HD wallets all the time.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/SyncHDWalletxPubYPubZPubRequestBody} opts.syncHDWalletxPubYPubZPubRequestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SyncHDWalletxPubYPubZPubResponse} and HTTP response
     */
    syncHDWalletXPubYPubZPubWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      let postBody = opts['syncHDWalletxPubYPubZPubRequestBody'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling syncHDWalletXPubYPubZPub");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling syncHDWalletXPubYPubZPub");
      }

      let pathParams = {
        'blockchain': blockchain,
        'network': network
      };
      let queryParams = {
        'context': opts['context']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SyncHDWalletxPubYPubZPubResponse;
      return this.apiClient.callApi(
        '/blockchain-data/{blockchain}/{network}/hd/sync', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Sync HD Wallet (xPub, yPub, zPub)
     * HD wallets usually have a lot of addresses and transactions, getting the data on demand is a heavy operation. That's why we have created this feature, to be able to get HD wallet details or transactions this HD wallet must be synced first. In addition to the initial sync we keep updating the synced HD wallets all the time.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/SyncHDWalletxPubYPubZPubRequestBody} opts.syncHDWalletxPubYPubZPubRequestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SyncHDWalletxPubYPubZPubResponse}
     */
    syncHDWalletXPubYPubZPub(blockchain, network, opts) {
      return this.syncHDWalletXPubYPubZPubWithHttpInfo(blockchain, network, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
