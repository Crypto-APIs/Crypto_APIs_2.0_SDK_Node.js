"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FeatureMainnetsNotAllowedForPlan = _interopRequireDefault(require("../model/FeatureMainnetsNotAllowedForPlan"));

var _GetContractDetailsByAddressR = _interopRequireDefault(require("../model/GetContractDetailsByAddressR"));

var _InsufficientCredits = _interopRequireDefault(require("../model/InsufficientCredits"));

var _InvalidApiKey = _interopRequireDefault(require("../model/InvalidApiKey"));

var _InvalidData = _interopRequireDefault(require("../model/InvalidData"));

var _InvalidPagination = _interopRequireDefault(require("../model/InvalidPagination"));

var _InvalidRequestBodyStructure = _interopRequireDefault(require("../model/InvalidRequestBodyStructure"));

var _ListTokensByAddressR = _interopRequireDefault(require("../model/ListTokensByAddressR"));

var _ListTokensTransfersByAddressR = _interopRequireDefault(require("../model/ListTokensTransfersByAddressR"));

var _ListTokensTransfersByTransactionHashR = _interopRequireDefault(require("../model/ListTokensTransfersByTransactionHashR"));

var _RequestLimitReached = _interopRequireDefault(require("../model/RequestLimitReached"));

var _UnexpectedServerError = _interopRequireDefault(require("../model/UnexpectedServerError"));

var _UnsupportedMediaType = _interopRequireDefault(require("../model/UnsupportedMediaType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Tokens service.
* @module api/TokensApi
* @version 1.2.1
*/
var TokensApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TokensApi. 
  * @alias module:api/TokensApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TokensApi(apiClient) {
    _classCallCheck(this, TokensApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get Contract Details by Address
   * Though this endpoint customers can obtain information about a smart contract and its details. This can be done by the `address` parameter, i.e. the address of the smart contract.    {note}This address is **not** the same as the smart contract creator address.{/note}
   * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
   * @param {String} contractAddress Defines the specific address of the contract.
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetContractDetailsByAddressR} and HTTP response
   */


  _createClass(TokensApi, [{
    key: "getContractDetailsByAddressWithHttpInfo",
    value: function getContractDetailsByAddressWithHttpInfo(blockchain, network, contractAddress, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getContractDetailsByAddress");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getContractDetailsByAddress");
      } // verify the required parameter 'contractAddress' is set


      if (contractAddress === undefined || contractAddress === null) {
        throw new Error("Missing the required parameter 'contractAddress' when calling getContractDetailsByAddress");
      }

      var pathParams = {
        'blockchain': blockchain,
        'network': network,
        'contractAddress': contractAddress
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetContractDetailsByAddressR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/addresses/{contractAddress}/contract', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Contract Details by Address
     * Though this endpoint customers can obtain information about a smart contract and its details. This can be done by the `address` parameter, i.e. the address of the smart contract.    {note}This address is **not** the same as the smart contract creator address.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param {String} contractAddress Defines the specific address of the contract.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetContractDetailsByAddressR}
     */

  }, {
    key: "getContractDetailsByAddress",
    value: function getContractDetailsByAddress(blockchain, network, contractAddress, opts) {
      return this.getContractDetailsByAddressWithHttpInfo(blockchain, network, contractAddress, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListTokensByAddressR} and HTTP response
     */

  }, {
    key: "listTokensByAddressWithHttpInfo",
    value: function listTokensByAddressWithHttpInfo(blockchain, network, address, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listTokensByAddress");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listTokensByAddress");
      } // verify the required parameter 'address' is set


      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listTokensByAddress");
      }

      var pathParams = {
        'blockchain': blockchain,
        'network': network,
        'address': address
      };
      var queryParams = {
        'context': opts['context'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListTokensByAddressR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/addresses/{address}/tokens', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListTokensByAddressR}
     */

  }, {
    key: "listTokensByAddress",
    value: function listTokensByAddress(blockchain, network, address, opts) {
      return this.listTokensByAddressWithHttpInfo(blockchain, network, address, opts).then(function (response_and_data) {
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListTokensTransfersByAddressR} and HTTP response
     */

  }, {
    key: "listTokensTransfersByAddressWithHttpInfo",
    value: function listTokensTransfersByAddressWithHttpInfo(blockchain, network, address, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listTokensTransfersByAddress");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listTokensTransfersByAddress");
      } // verify the required parameter 'address' is set


      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listTokensTransfersByAddress");
      }

      var pathParams = {
        'blockchain': blockchain,
        'network': network,
        'address': address
      };
      var queryParams = {
        'context': opts['context'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListTokensTransfersByAddressR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/addresses/{address}/tokens-transfers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListTokensTransfersByAddressR}
     */

  }, {
    key: "listTokensTransfersByAddress",
    value: function listTokensTransfersByAddress(blockchain, network, address, opts) {
      return this.listTokensTransfersByAddressWithHttpInfo(blockchain, network, address, opts).then(function (response_and_data) {
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListTokensTransfersByTransactionHashR} and HTTP response
     */

  }, {
    key: "listTokensTransfersByTransactionHashWithHttpInfo",
    value: function listTokensTransfersByTransactionHashWithHttpInfo(blockchain, network, transactionHash, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listTokensTransfersByTransactionHash");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listTokensTransfersByTransactionHash");
      } // verify the required parameter 'transactionHash' is set


      if (transactionHash === undefined || transactionHash === null) {
        throw new Error("Missing the required parameter 'transactionHash' when calling listTokensTransfersByTransactionHash");
      }

      var pathParams = {
        'blockchain': blockchain,
        'network': network,
        'transactionHash': transactionHash
      };
      var queryParams = {
        'context': opts['context'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListTokensTransfersByTransactionHashR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/transactions/{transactionHash}/tokens-transfers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListTokensTransfersByTransactionHashR}
     */

  }, {
    key: "listTokensTransfersByTransactionHash",
    value: function listTokensTransfersByTransactionHash(blockchain, network, transactionHash, opts) {
      return this.listTokensTransfersByTransactionHashWithHttpInfo(blockchain, network, transactionHash, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TokensApi;
}();

exports["default"] = TokensApi;