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
import FeatureMainnetsNotAllowedForPlan from '../model/FeatureMainnetsNotAllowedForPlan';
import InsufficientCredits from '../model/InsufficientCredits';
import InvalidApiKey from '../model/InvalidApiKey';
import InvalidData from '../model/InvalidData';
import InvalidPagination from '../model/InvalidPagination';
import InvalidRequestBodyStructure from '../model/InvalidRequestBodyStructure';
import ListTokensByAddressResponse from '../model/ListTokensByAddressResponse';
import ListTokensTransfersByAddressResponse from '../model/ListTokensTransfersByAddressResponse';
import ListTokensTransfersByTransactionHashResponse from '../model/ListTokensTransfersByTransactionHashResponse';
import RequestLimitReached from '../model/RequestLimitReached';
import UnexpectedServerError from '../model/UnexpectedServerError';
import UnsupportedMediaType from '../model/UnsupportedMediaType';

/**
* Tokens service.
* @module api/TokensApi
* @version 2.0.0
*/
export default class TokensApi {

    /**
    * Constructs a new TokensApi. 
    * @alias module:api/TokensApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * List Tokens By Address
     * Through this endpoint customers can obtain token data by providing an attribute - `address`.  The information that can be returned can include the contract address, the token symbol, type and balance.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Ethereum Classic, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"ropsten\", \"rinkeby\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListTokensByAddressResponse} and HTTP response
     */
    listTokensByAddressWithHttpInfo(blockchain, network, address, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listTokensByAddress");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listTokensByAddress");
      }
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listTokensByAddress");
      }

      let pathParams = {
        'blockchain': blockchain,
        'network': network,
        'address': address
      };
      let queryParams = {
        'context': opts['context'],
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
      let returnType = ListTokensByAddressResponse;
      return this.apiClient.callApi(
        '/blockchain-data/{blockchain}/{network}/addresses/{address}/tokens', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Tokens By Address
     * Through this endpoint customers can obtain token data by providing an attribute - `address`.  The information that can be returned can include the contract address, the token symbol, type and balance.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Ethereum Classic, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"ropsten\", \"rinkeby\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListTokensByAddressResponse}
     */
    listTokensByAddress(blockchain, network, address, opts) {
      return this.listTokensByAddressWithHttpInfo(blockchain, network, address, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Tokens Transfers By Address
     * Through this endpoint customers can obtain a list with token transfers by the `address` attribute. Token transfers may include information such as addresses of the sender and recipient, token name, token symbol, etc.    {note}This refers only to transfers done for **tokens** not coins.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Ethereum Classic, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"ropsten\", \"rinkeby\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListTokensTransfersByAddressResponse} and HTTP response
     */
    listTokensTransfersByAddressWithHttpInfo(blockchain, network, address, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listTokensTransfersByAddress");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listTokensTransfersByAddress");
      }
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listTokensTransfersByAddress");
      }

      let pathParams = {
        'blockchain': blockchain,
        'network': network,
        'address': address
      };
      let queryParams = {
        'context': opts['context'],
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
      let returnType = ListTokensTransfersByAddressResponse;
      return this.apiClient.callApi(
        '/blockchain-data/{blockchain}/{network}/addresses/{address}/tokens-transfers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Tokens Transfers By Address
     * Through this endpoint customers can obtain a list with token transfers by the `address` attribute. Token transfers may include information such as addresses of the sender and recipient, token name, token symbol, etc.    {note}This refers only to transfers done for **tokens** not coins.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Ethereum Classic, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"ropsten\", \"rinkeby\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListTokensTransfersByAddressResponse}
     */
    listTokensTransfersByAddress(blockchain, network, address, opts) {
      return this.listTokensTransfersByAddressWithHttpInfo(blockchain, network, address, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Tokens Transfers By Transaction Hash
     * Through this endpoint customers can obtain a list with token transfers by the `transactionHash` attribute. Token transfers may include information such as addresses of the sender and recipient, token name, token symbol, etc.    {note}This refers only to transfers done for **tokens** not coins.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Ethereum Classic, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"ropsten\", \"rinkeby\" are test networks.
     * @param {String} transactionHash Represents the hash of the transaction, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListTokensTransfersByTransactionHashResponse} and HTTP response
     */
    listTokensTransfersByTransactionHashWithHttpInfo(blockchain, network, transactionHash, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listTokensTransfersByTransactionHash");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listTokensTransfersByTransactionHash");
      }
      // verify the required parameter 'transactionHash' is set
      if (transactionHash === undefined || transactionHash === null) {
        throw new Error("Missing the required parameter 'transactionHash' when calling listTokensTransfersByTransactionHash");
      }

      let pathParams = {
        'blockchain': blockchain,
        'network': network,
        'transactionHash': transactionHash
      };
      let queryParams = {
        'context': opts['context'],
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
      let returnType = ListTokensTransfersByTransactionHashResponse;
      return this.apiClient.callApi(
        '/blockchain-data/{blockchain}/{network}/transactions/{transactionHash}/tokens-transfers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Tokens Transfers By Transaction Hash
     * Through this endpoint customers can obtain a list with token transfers by the `transactionHash` attribute. Token transfers may include information such as addresses of the sender and recipient, token name, token symbol, etc.    {note}This refers only to transfers done for **tokens** not coins.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Ethereum Classic, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"ropsten\", \"rinkeby\" are test networks.
     * @param {String} transactionHash Represents the hash of the transaction, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListTokensTransfersByTransactionHashResponse}
     */
    listTokensTransfersByTransactionHash(blockchain, network, transactionHash, opts) {
      return this.listTokensTransfersByTransactionHashWithHttpInfo(blockchain, network, transactionHash, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
