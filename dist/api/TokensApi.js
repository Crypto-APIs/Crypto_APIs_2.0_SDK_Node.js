"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ConvertBitcoinCashAddress402Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress402Response"));
var _ConvertBitcoinCashAddress409Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress409Response"));
var _ConvertBitcoinCashAddress415Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress415Response"));
var _ConvertBitcoinCashAddress422Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress422Response"));
var _ConvertBitcoinCashAddress429Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress429Response"));
var _ConvertBitcoinCashAddress500Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress500Response"));
var _GetTokenDetailsByContractAddress400Response = _interopRequireDefault(require("../model/GetTokenDetailsByContractAddress400Response"));
var _GetTokenDetailsByContractAddress401Response = _interopRequireDefault(require("../model/GetTokenDetailsByContractAddress401Response"));
var _GetTokenDetailsByContractAddress403Response = _interopRequireDefault(require("../model/GetTokenDetailsByContractAddress403Response"));
var _GetTokenDetailsByContractAddressR = _interopRequireDefault(require("../model/GetTokenDetailsByContractAddressR"));
var _ListConfirmedTokensTransfersByAddress400Response = _interopRequireDefault(require("../model/ListConfirmedTokensTransfersByAddress400Response"));
var _ListConfirmedTokensTransfersByAddress401Response = _interopRequireDefault(require("../model/ListConfirmedTokensTransfersByAddress401Response"));
var _ListConfirmedTokensTransfersByAddress403Response = _interopRequireDefault(require("../model/ListConfirmedTokensTransfersByAddress403Response"));
var _ListConfirmedTokensTransfersByAddressR = _interopRequireDefault(require("../model/ListConfirmedTokensTransfersByAddressR"));
var _ListTokensByAddress400Response = _interopRequireDefault(require("../model/ListTokensByAddress400Response"));
var _ListTokensByAddress401Response = _interopRequireDefault(require("../model/ListTokensByAddress401Response"));
var _ListTokensByAddress403Response = _interopRequireDefault(require("../model/ListTokensByAddress403Response"));
var _ListTokensByAddressR = _interopRequireDefault(require("../model/ListTokensByAddressR"));
var _ListTokensTransfersByTransactionHash400Response = _interopRequireDefault(require("../model/ListTokensTransfersByTransactionHash400Response"));
var _ListTokensTransfersByTransactionHash401Response = _interopRequireDefault(require("../model/ListTokensTransfersByTransactionHash401Response"));
var _ListTokensTransfersByTransactionHash403Response = _interopRequireDefault(require("../model/ListTokensTransfersByTransactionHash403Response"));
var _ListTokensTransfersByTransactionHashR = _interopRequireDefault(require("../model/ListTokensTransfersByTransactionHashR"));
var _ListUnconfirmedTokensTransfersByAddress400Response = _interopRequireDefault(require("../model/ListUnconfirmedTokensTransfersByAddress400Response"));
var _ListUnconfirmedTokensTransfersByAddress401Response = _interopRequireDefault(require("../model/ListUnconfirmedTokensTransfersByAddress401Response"));
var _ListUnconfirmedTokensTransfersByAddress403Response = _interopRequireDefault(require("../model/ListUnconfirmedTokensTransfersByAddress403Response"));
var _ListUnconfirmedTokensTransfersByAddressR = _interopRequireDefault(require("../model/ListUnconfirmedTokensTransfersByAddressR"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Tokens service.
* @module api/TokensApi
* @version 1.13.0
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
   * Get Token Details by Contract Address
   * Though this endpoint customers can obtain information about token details. This can be done by providing the `contact address` parameter.    {note}This address is **not** the same as the smart contract creator address.{/note}
   * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
   * @param {String} contractAddress Defines the specific address of the contract.
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetTokenDetailsByContractAddressR} and HTTP response
   */
  _createClass(TokensApi, [{
    key: "getTokenDetailsByContractAddressWithHttpInfo",
    value: function getTokenDetailsByContractAddressWithHttpInfo(blockchain, network, contractAddress, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getTokenDetailsByContractAddress");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getTokenDetailsByContractAddress");
      }
      // verify the required parameter 'contractAddress' is set
      if (contractAddress === undefined || contractAddress === null) {
        throw new Error("Missing the required parameter 'contractAddress' when calling getTokenDetailsByContractAddress");
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
      var returnType = _GetTokenDetailsByContractAddressR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/addresses/{contractAddress}/contract', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get Token Details by Contract Address
     * Though this endpoint customers can obtain information about token details. This can be done by providing the `contact address` parameter.    {note}This address is **not** the same as the smart contract creator address.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} contractAddress Defines the specific address of the contract.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetTokenDetailsByContractAddressR}
     */
  }, {
    key: "getTokenDetailsByContractAddress",
    value: function getTokenDetailsByContractAddress(blockchain, network, contractAddress, opts) {
      return this.getTokenDetailsByContractAddressWithHttpInfo(blockchain, network, contractAddress, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Confirmed Tokens Transfers By Address
     * Through this endpoint customers can obtain a list with **confirmed** token transfers by the `address` attribute. Token transfers may include information such as addresses of the sender and recipient, token name, token symbol, etc.    {note}This refers only to transfers done for **confirmed tokens** not coins.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Ethereum Classic, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListConfirmedTokensTransfersByAddressR} and HTTP response
     */
  }, {
    key: "listConfirmedTokensTransfersByAddressWithHttpInfo",
    value: function listConfirmedTokensTransfersByAddressWithHttpInfo(blockchain, network, address, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listConfirmedTokensTransfersByAddress");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listConfirmedTokensTransfersByAddress");
      }
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listConfirmedTokensTransfersByAddress");
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
      var returnType = _ListConfirmedTokensTransfersByAddressR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/addresses/{address}/tokens-transfers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Confirmed Tokens Transfers By Address
     * Through this endpoint customers can obtain a list with **confirmed** token transfers by the `address` attribute. Token transfers may include information such as addresses of the sender and recipient, token name, token symbol, etc.    {note}This refers only to transfers done for **confirmed tokens** not coins.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Ethereum Classic, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListConfirmedTokensTransfersByAddressR}
     */
  }, {
    key: "listConfirmedTokensTransfersByAddress",
    value: function listConfirmedTokensTransfersByAddress(blockchain, network, address, opts) {
      return this.listConfirmedTokensTransfersByAddressWithHttpInfo(blockchain, network, address, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Tokens By Address
     * Through this endpoint customers can obtain token data by providing an attribute - `address`.  The information that can be returned can include the contract address, the token symbol, type and balance.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Ethereum Classic, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
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
      var postBody = null;
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
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
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
     * List Tokens Transfers By Transaction Hash
     * Through this endpoint customers can obtain a list with token transfers by the `transactionHash` attribute. Token transfers may include information such as addresses of the sender and recipient, token name, token symbol, etc.    {note}This refers only to transfers done for **tokens** not coins.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Ethereum Classic, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
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
      var postBody = null;
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
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
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

    /**
     * List Unconfirmed Tokens Transfers By Address
     * Through this endpoint customers can obtain a list with **unconfirmed** token transfers by the `address` attribute. Token transfers may include information such as addresses of the sender and recipient, token name, token symbol, etc.    {note}This refers only to transfers done for **unconfirmed tokens** not coins.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Ethereum Classic, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListUnconfirmedTokensTransfersByAddressR} and HTTP response
     */
  }, {
    key: "listUnconfirmedTokensTransfersByAddressWithHttpInfo",
    value: function listUnconfirmedTokensTransfersByAddressWithHttpInfo(blockchain, network, address, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listUnconfirmedTokensTransfersByAddress");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listUnconfirmedTokensTransfersByAddress");
      }
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listUnconfirmedTokensTransfersByAddress");
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
      var returnType = _ListUnconfirmedTokensTransfersByAddressR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/addresses/{address}/tokens-transfers-unconfirmed', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Unconfirmed Tokens Transfers By Address
     * Through this endpoint customers can obtain a list with **unconfirmed** token transfers by the `address` attribute. Token transfers may include information such as addresses of the sender and recipient, token name, token symbol, etc.    {note}This refers only to transfers done for **unconfirmed tokens** not coins.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Ethereum Classic, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUnconfirmedTokensTransfersByAddressR}
     */
  }, {
    key: "listUnconfirmedTokensTransfersByAddress",
    value: function listUnconfirmedTokensTransfersByAddress(blockchain, network, address, opts) {
      return this.listUnconfirmedTokensTransfersByAddressWithHttpInfo(blockchain, network, address, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return TokensApi;
}();
exports["default"] = TokensApi;