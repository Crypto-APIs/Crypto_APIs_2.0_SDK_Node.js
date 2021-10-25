"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BlockchainDataBlockNotFound = _interopRequireDefault(require("../model/BlockchainDataBlockNotFound"));

var _BlockchainDataTransactionNotFound = _interopRequireDefault(require("../model/BlockchainDataTransactionNotFound"));

var _FeatureMainnetsNotAllowedForPlan = _interopRequireDefault(require("../model/FeatureMainnetsNotAllowedForPlan"));

var _GetLatestMinedZilliqaBlockR = _interopRequireDefault(require("../model/GetLatestMinedZilliqaBlockR"));

var _GetZilliqaAddressDetailsR = _interopRequireDefault(require("../model/GetZilliqaAddressDetailsR"));

var _GetZilliqaBlockDetailsByBlockHashR = _interopRequireDefault(require("../model/GetZilliqaBlockDetailsByBlockHashR"));

var _GetZilliqaBlockDetailsByBlockHeightR = _interopRequireDefault(require("../model/GetZilliqaBlockDetailsByBlockHeightR"));

var _GetZilliqaTransactionDetailsByTransactionIDR = _interopRequireDefault(require("../model/GetZilliqaTransactionDetailsByTransactionIDR"));

var _InsufficientCredits = _interopRequireDefault(require("../model/InsufficientCredits"));

var _InvalidApiKey = _interopRequireDefault(require("../model/InvalidApiKey"));

var _InvalidData = _interopRequireDefault(require("../model/InvalidData"));

var _InvalidPagination = _interopRequireDefault(require("../model/InvalidPagination"));

var _InvalidRequestBodyStructure = _interopRequireDefault(require("../model/InvalidRequestBodyStructure"));

var _ListZilliqaTransactionsByAddressR = _interopRequireDefault(require("../model/ListZilliqaTransactionsByAddressR"));

var _ListZilliqaTransactionsByBlockHashR = _interopRequireDefault(require("../model/ListZilliqaTransactionsByBlockHashR"));

var _ListZilliqaTransactionsByBlockHeightR = _interopRequireDefault(require("../model/ListZilliqaTransactionsByBlockHeightR"));

var _RequestLimitReached = _interopRequireDefault(require("../model/RequestLimitReached"));

var _UnexpectedServerError = _interopRequireDefault(require("../model/UnexpectedServerError"));

var _UnsupportedMediaType = _interopRequireDefault(require("../model/UnsupportedMediaType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Zilliqa service.
* @module api/ZilliqaApi
* @version 1.3.0
*/
var ZilliqaApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ZilliqaApi. 
  * @alias module:api/ZilliqaApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ZilliqaApi(apiClient) {
    _classCallCheck(this, ZilliqaApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get Latest Mined Zilliqa Block
   * Through this endpoint users can obtain information on the latest block that has been mined on the Zilliqa blockchain. Data could include the current and previous block hashes, transaction count, and more.
   * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetLatestMinedZilliqaBlockR} and HTTP response
   */


  _createClass(ZilliqaApi, [{
    key: "getLatestMinedZilliqaBlockWithHttpInfo",
    value: function getLatestMinedZilliqaBlockWithHttpInfo(network, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getLatestMinedZilliqaBlock");
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
      var returnType = _GetLatestMinedZilliqaBlockR["default"];
      return this.apiClient.callApi('/blockchain-data/zilliqa-specific/{network}/blocks/last', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Latest Mined Zilliqa Block
     * Through this endpoint users can obtain information on the latest block that has been mined on the Zilliqa blockchain. Data could include the current and previous block hashes, transaction count, and more.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetLatestMinedZilliqaBlockR}
     */

  }, {
    key: "getLatestMinedZilliqaBlock",
    value: function getLatestMinedZilliqaBlock(network, opts) {
      return this.getLatestMinedZilliqaBlockWithHttpInfo(network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Zilliqa Address Details
     * Through this endpoint customers can obtain information address details from the Zilliqa blockchain.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Defines the specific transaction's address.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetZilliqaAddressDetailsR} and HTTP response
     */

  }, {
    key: "getZilliqaAddressDetailsWithHttpInfo",
    value: function getZilliqaAddressDetailsWithHttpInfo(network, address, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getZilliqaAddressDetails");
      } // verify the required parameter 'address' is set


      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling getZilliqaAddressDetails");
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
      var returnType = _GetZilliqaAddressDetailsR["default"];
      return this.apiClient.callApi('/blockchain-data/zilliqa-specific/{network}/addresses/{address}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Zilliqa Address Details
     * Through this endpoint customers can obtain information address details from the Zilliqa blockchain.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Defines the specific transaction's address.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetZilliqaAddressDetailsR}
     */

  }, {
    key: "getZilliqaAddressDetails",
    value: function getZilliqaAddressDetails(network, address, opts) {
      return this.getZilliqaAddressDetailsWithHttpInfo(network, address, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Zilliqa Block Details By Block Hash
     * Through this endpoint customers can obtain block details from the Zilliqa blockchain by providing the block Hash parameter.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} blockHash Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetZilliqaBlockDetailsByBlockHashR} and HTTP response
     */

  }, {
    key: "getZilliqaBlockDetailsByBlockHashWithHttpInfo",
    value: function getZilliqaBlockDetailsByBlockHashWithHttpInfo(network, blockHash, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getZilliqaBlockDetailsByBlockHash");
      } // verify the required parameter 'blockHash' is set


      if (blockHash === undefined || blockHash === null) {
        throw new Error("Missing the required parameter 'blockHash' when calling getZilliqaBlockDetailsByBlockHash");
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
      var returnType = _GetZilliqaBlockDetailsByBlockHashR["default"];
      return this.apiClient.callApi('/blockchain-data/zilliqa-specific/{network}/blocks/hash/{blockHash}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Zilliqa Block Details By Block Hash
     * Through this endpoint customers can obtain block details from the Zilliqa blockchain by providing the block Hash parameter.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} blockHash Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetZilliqaBlockDetailsByBlockHashR}
     */

  }, {
    key: "getZilliqaBlockDetailsByBlockHash",
    value: function getZilliqaBlockDetailsByBlockHash(network, blockHash, opts) {
      return this.getZilliqaBlockDetailsByBlockHashWithHttpInfo(network, blockHash, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Zilliqa Block Details By Block Height
     * Through this endpoint customers can obtain block details from the Zilliqa blockchain by providing the block Height parameter.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Number} blockHeight Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetZilliqaBlockDetailsByBlockHeightR} and HTTP response
     */

  }, {
    key: "getZilliqaBlockDetailsByBlockHeightWithHttpInfo",
    value: function getZilliqaBlockDetailsByBlockHeightWithHttpInfo(network, blockHeight, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getZilliqaBlockDetailsByBlockHeight");
      } // verify the required parameter 'blockHeight' is set


      if (blockHeight === undefined || blockHeight === null) {
        throw new Error("Missing the required parameter 'blockHeight' when calling getZilliqaBlockDetailsByBlockHeight");
      }

      var pathParams = {
        'network': network,
        'blockHeight': blockHeight
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetZilliqaBlockDetailsByBlockHeightR["default"];
      return this.apiClient.callApi('/blockchain-data/zilliqa-specific/{network}/blocks/height/{blockHeight}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Zilliqa Block Details By Block Height
     * Through this endpoint customers can obtain block details from the Zilliqa blockchain by providing the block Height parameter.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Number} blockHeight Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetZilliqaBlockDetailsByBlockHeightR}
     */

  }, {
    key: "getZilliqaBlockDetailsByBlockHeight",
    value: function getZilliqaBlockDetailsByBlockHeight(network, blockHeight, opts) {
      return this.getZilliqaBlockDetailsByBlockHeightWithHttpInfo(network, blockHeight, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Zilliqa Transaction Details by Transaction ID
     * Through this endpoint customers can obtain transaction details on the Zilliqa blockchain by providing a Transaction ID parameter.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} transactionHash String identifier of the transaction
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetZilliqaTransactionDetailsByTransactionIDR} and HTTP response
     */

  }, {
    key: "getZilliqaTransactionDetailsByTransactionIDWithHttpInfo",
    value: function getZilliqaTransactionDetailsByTransactionIDWithHttpInfo(network, transactionHash, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getZilliqaTransactionDetailsByTransactionID");
      } // verify the required parameter 'transactionHash' is set


      if (transactionHash === undefined || transactionHash === null) {
        throw new Error("Missing the required parameter 'transactionHash' when calling getZilliqaTransactionDetailsByTransactionID");
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
      var returnType = _GetZilliqaTransactionDetailsByTransactionIDR["default"];
      return this.apiClient.callApi('/blockchain-data/zilliqa-specific/{network}/transactions/{transactionHash}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Zilliqa Transaction Details by Transaction ID
     * Through this endpoint customers can obtain transaction details on the Zilliqa blockchain by providing a Transaction ID parameter.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} transactionHash String identifier of the transaction
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetZilliqaTransactionDetailsByTransactionIDR}
     */

  }, {
    key: "getZilliqaTransactionDetailsByTransactionID",
    value: function getZilliqaTransactionDetailsByTransactionID(network, transactionHash, opts) {
      return this.getZilliqaTransactionDetailsByTransactionIDWithHttpInfo(network, transactionHash, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Zilliqa Transactions by Address
     * Through this endpoint customers can list transactions on the Zilliqa blockchain by the address parameter.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Defines the specific address of the sender.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListZilliqaTransactionsByAddressR} and HTTP response
     */

  }, {
    key: "listZilliqaTransactionsByAddressWithHttpInfo",
    value: function listZilliqaTransactionsByAddressWithHttpInfo(network, address, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listZilliqaTransactionsByAddress");
      } // verify the required parameter 'address' is set


      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listZilliqaTransactionsByAddress");
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
      var returnType = _ListZilliqaTransactionsByAddressR["default"];
      return this.apiClient.callApi('/blockchain-data/zilliqa-specific/{network}/addresses/{address}/transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Zilliqa Transactions by Address
     * Through this endpoint customers can list transactions on the Zilliqa blockchain by the address parameter.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Defines the specific address of the sender.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListZilliqaTransactionsByAddressR}
     */

  }, {
    key: "listZilliqaTransactionsByAddress",
    value: function listZilliqaTransactionsByAddress(network, address, opts) {
      return this.listZilliqaTransactionsByAddressWithHttpInfo(network, address, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Zilliqa Transactions By Block Hash
     * Through this endpoint customers can list transactions on the Zilliqa blockchain by the block hash parameter.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} blockHash Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListZilliqaTransactionsByBlockHashR} and HTTP response
     */

  }, {
    key: "listZilliqaTransactionsByBlockHashWithHttpInfo",
    value: function listZilliqaTransactionsByBlockHashWithHttpInfo(network, blockHash, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listZilliqaTransactionsByBlockHash");
      } // verify the required parameter 'blockHash' is set


      if (blockHash === undefined || blockHash === null) {
        throw new Error("Missing the required parameter 'blockHash' when calling listZilliqaTransactionsByBlockHash");
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
      var returnType = _ListZilliqaTransactionsByBlockHashR["default"];
      return this.apiClient.callApi('/blockchain-data/zilliqa-specific/{network}/blocks/hash/{blockHash}/transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Zilliqa Transactions By Block Hash
     * Through this endpoint customers can list transactions on the Zilliqa blockchain by the block hash parameter.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} blockHash Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListZilliqaTransactionsByBlockHashR}
     */

  }, {
    key: "listZilliqaTransactionsByBlockHash",
    value: function listZilliqaTransactionsByBlockHash(network, blockHash, opts) {
      return this.listZilliqaTransactionsByBlockHashWithHttpInfo(network, blockHash, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Zilliqa Transactions By Block Height
     * Through this endpoint customers can list transactions on the Zilliqa blockchain by the block height parameter.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Number} blockHeight Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListZilliqaTransactionsByBlockHeightR} and HTTP response
     */

  }, {
    key: "listZilliqaTransactionsByBlockHeightWithHttpInfo",
    value: function listZilliqaTransactionsByBlockHeightWithHttpInfo(network, blockHeight, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listZilliqaTransactionsByBlockHeight");
      } // verify the required parameter 'blockHeight' is set


      if (blockHeight === undefined || blockHeight === null) {
        throw new Error("Missing the required parameter 'blockHeight' when calling listZilliqaTransactionsByBlockHeight");
      }

      var pathParams = {
        'network': network,
        'blockHeight': blockHeight
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
      var returnType = _ListZilliqaTransactionsByBlockHeightR["default"];
      return this.apiClient.callApi('/blockchain-data/zilliqa-specific/{network}/blocks/height/{blockHeight}/transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Zilliqa Transactions By Block Height
     * Through this endpoint customers can list transactions on the Zilliqa blockchain by the block height parameter.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Number} blockHeight Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListZilliqaTransactionsByBlockHeightR}
     */

  }, {
    key: "listZilliqaTransactionsByBlockHeight",
    value: function listZilliqaTransactionsByBlockHeight(network, blockHeight, opts) {
      return this.listZilliqaTransactionsByBlockHeightWithHttpInfo(network, blockHeight, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ZilliqaApi;
}();

exports["default"] = ZilliqaApi;