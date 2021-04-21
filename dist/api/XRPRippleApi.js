"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FeatureMainnetsNotAllowedForPlan = _interopRequireDefault(require("../model/FeatureMainnetsNotAllowedForPlan"));

var _GetLatestMinedXRPRippleBlockResponse = _interopRequireDefault(require("../model/GetLatestMinedXRPRippleBlockResponse"));

var _GetXRPRippleAddressDetailsResponse = _interopRequireDefault(require("../model/GetXRPRippleAddressDetailsResponse"));

var _GetXRPRippleBlockDetailsByBlockHashResponse = _interopRequireDefault(require("../model/GetXRPRippleBlockDetailsByBlockHashResponse"));

var _GetXRPRippleBlockDetailsByBlockHeightResponse = _interopRequireDefault(require("../model/GetXRPRippleBlockDetailsByBlockHeightResponse"));

var _GetXRPRippleTransactionDetailsByTransactionIDResponse = _interopRequireDefault(require("../model/GetXRPRippleTransactionDetailsByTransactionIDResponse"));

var _InsufficientCredits = _interopRequireDefault(require("../model/InsufficientCredits"));

var _InvalidApiKey = _interopRequireDefault(require("../model/InvalidApiKey"));

var _InvalidData = _interopRequireDefault(require("../model/InvalidData"));

var _InvalidPagination = _interopRequireDefault(require("../model/InvalidPagination"));

var _InvalidRequestBodyStructure = _interopRequireDefault(require("../model/InvalidRequestBodyStructure"));

var _ListXRPRippleTransactionsByAddressResponse = _interopRequireDefault(require("../model/ListXRPRippleTransactionsByAddressResponse"));

var _ListXRPRippleTransactionsByBlockHashResponse = _interopRequireDefault(require("../model/ListXRPRippleTransactionsByBlockHashResponse"));

var _RequestLimitReached = _interopRequireDefault(require("../model/RequestLimitReached"));

var _ResourceNotFound = _interopRequireDefault(require("../model/ResourceNotFound"));

var _UnexpectedServerError = _interopRequireDefault(require("../model/UnexpectedServerError"));

var _UnsupportedMediaType = _interopRequireDefault(require("../model/UnsupportedMediaType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* XRPRipple service.
* @module api/XRPRippleApi
* @version 2.0.0
*/
var XRPRippleApi = /*#__PURE__*/function () {
  /**
  * Constructs a new XRPRippleApi. 
  * @alias module:api/XRPRippleApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function XRPRippleApi(apiClient) {
    _classCallCheck(this, XRPRippleApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get Latest Mined XRP (Ripple) Block
   * Through this endpoint customers can fetch the last mined XRP block in the blockchain, along with its details. These could include the hash of the specific, the previous and the next block, its transactions count, its height, etc.     Since XRP is a different blockchain than Bitcoin and Ethereum, it isn't unified.
   * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetLatestMinedXRPRippleBlockResponse} and HTTP response
   */


  _createClass(XRPRippleApi, [{
    key: "getLatestMinedXRPRippleBlockWithHttpInfo",
    value: function getLatestMinedXRPRippleBlockWithHttpInfo(network, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getLatestMinedXRPRippleBlock");
      }

      var pathParams = {
        'network': network
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetLatestMinedXRPRippleBlockResponse["default"];
      return this.apiClient.callApi('/blockchain-data/xrp/{network}/blocks/last', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Latest Mined XRP (Ripple) Block
     * Through this endpoint customers can fetch the last mined XRP block in the blockchain, along with its details. These could include the hash of the specific, the previous and the next block, its transactions count, its height, etc.     Since XRP is a different blockchain than Bitcoin and Ethereum, it isn't unified.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetLatestMinedXRPRippleBlockResponse}
     */

  }, {
    key: "getLatestMinedXRPRippleBlock",
    value: function getLatestMinedXRPRippleBlock(network, opts) {
      return this.getLatestMinedXRPRippleBlockWithHttpInfo(network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get XRP (Ripple) Address Details
     * Through this endpoint the customer can receive basic information about a given XRP address based on confirmed/synced blocks only. In the case where there are any incoming or outgoing **unconfirmed** transactions for the specific address, they **will not** be counted or calculated here.    Since XRP is a different blockchain than Bitcoin and Ethereum, it isn't unified.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\",  are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetXRPRippleAddressDetailsResponse} and HTTP response
     */

  }, {
    key: "getXRPRippleAddressDetailsWithHttpInfo",
    value: function getXRPRippleAddressDetailsWithHttpInfo(network, address, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getXRPRippleAddressDetails");
      } // verify the required parameter 'address' is set


      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling getXRPRippleAddressDetails");
      }

      var pathParams = {
        'network': network,
        'address': address
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetXRPRippleAddressDetailsResponse["default"];
      return this.apiClient.callApi('/blockchain-data/xrp/{network}/addresses/{address}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get XRP (Ripple) Address Details
     * Through this endpoint the customer can receive basic information about a given XRP address based on confirmed/synced blocks only. In the case where there are any incoming or outgoing **unconfirmed** transactions for the specific address, they **will not** be counted or calculated here.    Since XRP is a different blockchain than Bitcoin and Ethereum, it isn't unified.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\",  are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetXRPRippleAddressDetailsResponse}
     */

  }, {
    key: "getXRPRippleAddressDetails",
    value: function getXRPRippleAddressDetails(network, address, opts) {
      return this.getXRPRippleAddressDetailsWithHttpInfo(network, address, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get XRP (Ripple) Block Details By Block Hash
     * Through this endpoint customers can obtain basic information about a given XRP block (a block on the XRP blockchain), specifically by using the `hash` parameter. These block details could include the hash of the specific, the previous and the next block, the number of included transactions, etc.     Since XRP is a different blockchain than Bitcoin and Ethereum, it isn't unified.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\",  are test networks.
     * @param {String} blockHash Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetXRPRippleBlockDetailsByBlockHashResponse} and HTTP response
     */

  }, {
    key: "getXRPRippleBlockDetailsByBlockHashWithHttpInfo",
    value: function getXRPRippleBlockDetailsByBlockHashWithHttpInfo(network, blockHash, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getXRPRippleBlockDetailsByBlockHash");
      } // verify the required parameter 'blockHash' is set


      if (blockHash === undefined || blockHash === null) {
        throw new Error("Missing the required parameter 'blockHash' when calling getXRPRippleBlockDetailsByBlockHash");
      }

      var pathParams = {
        'network': network,
        'blockHash': blockHash
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetXRPRippleBlockDetailsByBlockHashResponse["default"];
      return this.apiClient.callApi('/blockchain-data/xrp/{network}/blocks/hash/{blockHash}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get XRP (Ripple) Block Details By Block Hash
     * Through this endpoint customers can obtain basic information about a given XRP block (a block on the XRP blockchain), specifically by using the `hash` parameter. These block details could include the hash of the specific, the previous and the next block, the number of included transactions, etc.     Since XRP is a different blockchain than Bitcoin and Ethereum, it isn't unified.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\",  are test networks.
     * @param {String} blockHash Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetXRPRippleBlockDetailsByBlockHashResponse}
     */

  }, {
    key: "getXRPRippleBlockDetailsByBlockHash",
    value: function getXRPRippleBlockDetailsByBlockHash(network, blockHash, opts) {
      return this.getXRPRippleBlockDetailsByBlockHashWithHttpInfo(network, blockHash, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get XRP (Ripple) Block Details By Block Height
     * Through this endpoint customers can obtain basic information about a given XRP block (a block on the XRP blockchain), specifically by using the `height` parameter. These block details could include the hash of the specific, the previous and the next block, its transactions count, etc.    Since XRP is a different blockchain than Bitcoin and Ethereum, it isn't unified.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\",  are test networks.
     * @param {String} height Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetXRPRippleBlockDetailsByBlockHeightResponse} and HTTP response
     */

  }, {
    key: "getXRPRippleBlockDetailsByBlockHeightWithHttpInfo",
    value: function getXRPRippleBlockDetailsByBlockHeightWithHttpInfo(network, height, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getXRPRippleBlockDetailsByBlockHeight");
      } // verify the required parameter 'height' is set


      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling getXRPRippleBlockDetailsByBlockHeight");
      }

      var pathParams = {
        'network': network,
        'height': height
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetXRPRippleBlockDetailsByBlockHeightResponse["default"];
      return this.apiClient.callApi('/blockchain-data/xrp/{network}/blocks/height/{height}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get XRP (Ripple) Block Details By Block Height
     * Through this endpoint customers can obtain basic information about a given XRP block (a block on the XRP blockchain), specifically by using the `height` parameter. These block details could include the hash of the specific, the previous and the next block, its transactions count, etc.    Since XRP is a different blockchain than Bitcoin and Ethereum, it isn't unified.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\",  are test networks.
     * @param {String} height Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetXRPRippleBlockDetailsByBlockHeightResponse}
     */

  }, {
    key: "getXRPRippleBlockDetailsByBlockHeight",
    value: function getXRPRippleBlockDetailsByBlockHeight(network, height, opts) {
      return this.getXRPRippleBlockDetailsByBlockHeightWithHttpInfo(network, height, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get XRP (Ripple) Transaction Details By Transaction ID
     * Through this endpoint customers can obtain details about a XRP transaction by the transaction's unique identifier.     Since XRP is a different blockchain than Bitcoin and Ethereum, it isn't unified.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param {String} transactionHash Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetXRPRippleTransactionDetailsByTransactionIDResponse} and HTTP response
     */

  }, {
    key: "getXRPRippleTransactionDetailsByTransactionIDWithHttpInfo",
    value: function getXRPRippleTransactionDetailsByTransactionIDWithHttpInfo(network, transactionHash, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getXRPRippleTransactionDetailsByTransactionID");
      } // verify the required parameter 'transactionHash' is set


      if (transactionHash === undefined || transactionHash === null) {
        throw new Error("Missing the required parameter 'transactionHash' when calling getXRPRippleTransactionDetailsByTransactionID");
      }

      var pathParams = {
        'network': network,
        'transactionHash': transactionHash
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetXRPRippleTransactionDetailsByTransactionIDResponse["default"];
      return this.apiClient.callApi('/blockchain-data/xrp/{network}/transactions/{transactionHash}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get XRP (Ripple) Transaction Details By Transaction ID
     * Through this endpoint customers can obtain details about a XRP transaction by the transaction's unique identifier.     Since XRP is a different blockchain than Bitcoin and Ethereum, it isn't unified.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param {String} transactionHash Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetXRPRippleTransactionDetailsByTransactionIDResponse}
     */

  }, {
    key: "getXRPRippleTransactionDetailsByTransactionID",
    value: function getXRPRippleTransactionDetailsByTransactionID(network, transactionHash, opts) {
      return this.getXRPRippleTransactionDetailsByTransactionIDWithHttpInfo(network, transactionHash, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List XRP (Ripple) Transactions by Address
     * This endpoint will list XRP transactions by a attribute `address`. The transactions listed will detail additional information such as hash, height, time of creation in Unix timestamp, etc.    Since XRP is a different blockchain than Bitcoin and Ethereum, it isn't unified.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\",  are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListXRPRippleTransactionsByAddressResponse} and HTTP response
     */

  }, {
    key: "listXRPRippleTransactionsByAddressWithHttpInfo",
    value: function listXRPRippleTransactionsByAddressWithHttpInfo(network, address, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listXRPRippleTransactionsByAddress");
      } // verify the required parameter 'address' is set


      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listXRPRippleTransactionsByAddress");
      }

      var pathParams = {
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
      var returnType = _ListXRPRippleTransactionsByAddressResponse["default"];
      return this.apiClient.callApi('/blockchain-data/xrp/{network}/addresses/{address}/transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List XRP (Ripple) Transactions by Address
     * This endpoint will list XRP transactions by a attribute `address`. The transactions listed will detail additional information such as hash, height, time of creation in Unix timestamp, etc.    Since XRP is a different blockchain than Bitcoin and Ethereum, it isn't unified.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\",  are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListXRPRippleTransactionsByAddressResponse}
     */

  }, {
    key: "listXRPRippleTransactionsByAddress",
    value: function listXRPRippleTransactionsByAddress(network, address, opts) {
      return this.listXRPRippleTransactionsByAddressWithHttpInfo(network, address, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List XRP (Ripple) Transactions By Block Hash
     * This endpoint will list transactions by an attribute `blockHash`. The transactions listed will detail additional information such as hash, addresses, time of creation in Unix timestamp, etc.    Since XRP is a different blockchain than Bitcoin and Ethereum, it isn't unified.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param {String} blockHash Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListXRPRippleTransactionsByBlockHashResponse} and HTTP response
     */

  }, {
    key: "listXRPRippleTransactionsByBlockHashWithHttpInfo",
    value: function listXRPRippleTransactionsByBlockHashWithHttpInfo(network, blockHash, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listXRPRippleTransactionsByBlockHash");
      } // verify the required parameter 'blockHash' is set


      if (blockHash === undefined || blockHash === null) {
        throw new Error("Missing the required parameter 'blockHash' when calling listXRPRippleTransactionsByBlockHash");
      }

      var pathParams = {
        'network': network,
        'blockHash': blockHash
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
      var returnType = _ListXRPRippleTransactionsByBlockHashResponse["default"];
      return this.apiClient.callApi('/blockchain-data/xrp/{network}/blocks/hash/{blockHash}/transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List XRP (Ripple) Transactions By Block Hash
     * This endpoint will list transactions by an attribute `blockHash`. The transactions listed will detail additional information such as hash, addresses, time of creation in Unix timestamp, etc.    Since XRP is a different blockchain than Bitcoin and Ethereum, it isn't unified.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param {String} blockHash Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListXRPRippleTransactionsByBlockHashResponse}
     */

  }, {
    key: "listXRPRippleTransactionsByBlockHash",
    value: function listXRPRippleTransactionsByBlockHash(network, blockHash, opts) {
      return this.listXRPRippleTransactionsByBlockHashWithHttpInfo(network, blockHash, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return XRPRippleApi;
}();

exports["default"] = XRPRippleApi;