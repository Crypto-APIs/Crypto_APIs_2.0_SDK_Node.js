"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EstimateTransactionSmartFeeR = _interopRequireDefault(require("../model/EstimateTransactionSmartFeeR"));

var _GetAddressDetailsR = _interopRequireDefault(require("../model/GetAddressDetailsR"));

var _GetBlockDetailsByBlockHashR = _interopRequireDefault(require("../model/GetBlockDetailsByBlockHashR"));

var _GetBlockDetailsByBlockHeightR = _interopRequireDefault(require("../model/GetBlockDetailsByBlockHeightR"));

var _GetFeeRecommendationsR = _interopRequireDefault(require("../model/GetFeeRecommendationsR"));

var _GetLastMinedBlockR = _interopRequireDefault(require("../model/GetLastMinedBlockR"));

var _GetNextAvailableNonceR = _interopRequireDefault(require("../model/GetNextAvailableNonceR"));

var _GetRawTransactionDataR = _interopRequireDefault(require("../model/GetRawTransactionDataR"));

var _GetTransactionDetailsByTransactionIDR = _interopRequireDefault(require("../model/GetTransactionDetailsByTransactionIDR"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse40010"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse40015"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse40017"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse40018"));

var _InlineResponse6 = _interopRequireDefault(require("../model/InlineResponse40025"));

var _InlineResponse7 = _interopRequireDefault(require("../model/InlineResponse40027"));

var _InlineResponse8 = _interopRequireDefault(require("../model/InlineResponse40031"));

var _InlineResponse9 = _interopRequireDefault(require("../model/InlineResponse4004"));

var _InlineResponse10 = _interopRequireDefault(require("../model/InlineResponse40040"));

var _InlineResponse11 = _interopRequireDefault(require("../model/InlineResponse40045"));

var _InlineResponse12 = _interopRequireDefault(require("../model/InlineResponse40057"));

var _InlineResponse13 = _interopRequireDefault(require("../model/InlineResponse40058"));

var _InlineResponse14 = _interopRequireDefault(require("../model/InlineResponse40059"));

var _InlineResponse15 = _interopRequireDefault(require("../model/InlineResponse40061"));

var _InlineResponse16 = _interopRequireDefault(require("../model/InlineResponse40062"));

var _InlineResponse17 = _interopRequireDefault(require("../model/InlineResponse40063"));

var _InlineResponse18 = _interopRequireDefault(require("../model/InlineResponse40065"));

var _InlineResponse19 = _interopRequireDefault(require("../model/InlineResponse40068"));

var _InlineResponse20 = _interopRequireDefault(require("../model/InlineResponse401"));

var _InlineResponse21 = _interopRequireDefault(require("../model/InlineResponse40110"));

var _InlineResponse22 = _interopRequireDefault(require("../model/InlineResponse40115"));

var _InlineResponse23 = _interopRequireDefault(require("../model/InlineResponse40117"));

var _InlineResponse24 = _interopRequireDefault(require("../model/InlineResponse40118"));

var _InlineResponse25 = _interopRequireDefault(require("../model/InlineResponse40125"));

var _InlineResponse26 = _interopRequireDefault(require("../model/InlineResponse40127"));

var _InlineResponse27 = _interopRequireDefault(require("../model/InlineResponse40131"));

var _InlineResponse28 = _interopRequireDefault(require("../model/InlineResponse4014"));

var _InlineResponse29 = _interopRequireDefault(require("../model/InlineResponse40140"));

var _InlineResponse30 = _interopRequireDefault(require("../model/InlineResponse40145"));

var _InlineResponse31 = _interopRequireDefault(require("../model/InlineResponse40157"));

var _InlineResponse32 = _interopRequireDefault(require("../model/InlineResponse40158"));

var _InlineResponse33 = _interopRequireDefault(require("../model/InlineResponse40159"));

var _InlineResponse34 = _interopRequireDefault(require("../model/InlineResponse40161"));

var _InlineResponse35 = _interopRequireDefault(require("../model/InlineResponse40162"));

var _InlineResponse36 = _interopRequireDefault(require("../model/InlineResponse40163"));

var _InlineResponse37 = _interopRequireDefault(require("../model/InlineResponse40165"));

var _InlineResponse38 = _interopRequireDefault(require("../model/InlineResponse40168"));

var _InlineResponse39 = _interopRequireDefault(require("../model/InlineResponse402"));

var _InlineResponse40 = _interopRequireDefault(require("../model/InlineResponse403"));

var _InlineResponse41 = _interopRequireDefault(require("../model/InlineResponse40310"));

var _InlineResponse42 = _interopRequireDefault(require("../model/InlineResponse40315"));

var _InlineResponse43 = _interopRequireDefault(require("../model/InlineResponse40317"));

var _InlineResponse44 = _interopRequireDefault(require("../model/InlineResponse40318"));

var _InlineResponse45 = _interopRequireDefault(require("../model/InlineResponse40325"));

var _InlineResponse46 = _interopRequireDefault(require("../model/InlineResponse40327"));

var _InlineResponse47 = _interopRequireDefault(require("../model/InlineResponse40331"));

var _InlineResponse48 = _interopRequireDefault(require("../model/InlineResponse4034"));

var _InlineResponse49 = _interopRequireDefault(require("../model/InlineResponse40340"));

var _InlineResponse50 = _interopRequireDefault(require("../model/InlineResponse40345"));

var _InlineResponse51 = _interopRequireDefault(require("../model/InlineResponse40357"));

var _InlineResponse52 = _interopRequireDefault(require("../model/InlineResponse40358"));

var _InlineResponse53 = _interopRequireDefault(require("../model/InlineResponse40359"));

var _InlineResponse54 = _interopRequireDefault(require("../model/InlineResponse40361"));

var _InlineResponse55 = _interopRequireDefault(require("../model/InlineResponse40362"));

var _InlineResponse56 = _interopRequireDefault(require("../model/InlineResponse40363"));

var _InlineResponse57 = _interopRequireDefault(require("../model/InlineResponse40365"));

var _InlineResponse58 = _interopRequireDefault(require("../model/InlineResponse40368"));

var _InlineResponse59 = _interopRequireDefault(require("../model/InlineResponse404"));

var _InlineResponse60 = _interopRequireDefault(require("../model/InlineResponse4041"));

var _InlineResponse61 = _interopRequireDefault(require("../model/InlineResponse4042"));

var _InlineResponse62 = _interopRequireDefault(require("../model/InlineResponse409"));

var _InlineResponse63 = _interopRequireDefault(require("../model/InlineResponse415"));

var _InlineResponse64 = _interopRequireDefault(require("../model/InlineResponse422"));

var _InlineResponse65 = _interopRequireDefault(require("../model/InlineResponse429"));

var _InlineResponse66 = _interopRequireDefault(require("../model/InlineResponse500"));

var _InlineResponse67 = _interopRequireDefault(require("../model/InlineResponse501"));

var _ListAllUnconfirmedTransactionsR = _interopRequireDefault(require("../model/ListAllUnconfirmedTransactionsR"));

var _ListConfirmedTokensTransfersByAddressAndTimeRangeR = _interopRequireDefault(require("../model/ListConfirmedTokensTransfersByAddressAndTimeRangeR"));

var _ListConfirmedTransactionsByAddressAndTimeRangeR = _interopRequireDefault(require("../model/ListConfirmedTransactionsByAddressAndTimeRangeR"));

var _ListConfirmedTransactionsByAddressR = _interopRequireDefault(require("../model/ListConfirmedTransactionsByAddressR"));

var _ListInternalTransactionsByAddressAndTimeRangeR = _interopRequireDefault(require("../model/ListInternalTransactionsByAddressAndTimeRangeR"));

var _ListLatestMinedBlocksR = _interopRequireDefault(require("../model/ListLatestMinedBlocksR"));

var _ListTransactionsByBlockHashR = _interopRequireDefault(require("../model/ListTransactionsByBlockHashR"));

var _ListTransactionsByBlockHeightR = _interopRequireDefault(require("../model/ListTransactionsByBlockHeightR"));

var _ListUnconfirmedTransactionsByAddressR = _interopRequireDefault(require("../model/ListUnconfirmedTransactionsByAddressR"));

var _ListUnspentTransactionOutputsByAddressR = _interopRequireDefault(require("../model/ListUnspentTransactionOutputsByAddressR"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* UnifiedEndpoints service.
* @module api/UnifiedEndpointsApi
* @version 1.5.0
*/
var UnifiedEndpointsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UnifiedEndpointsApi. 
  * @alias module:api/UnifiedEndpointsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UnifiedEndpointsApi(apiClient) {
    _classCallCheck(this, UnifiedEndpointsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Estimate Transaction Smart Fee
   * Through this endpoint, customers can estimate the approximate fee per kilobyte needed for a transaction to begin confirmation within the `confirmationTarget` blocks when possible. After which it will return the number of blocks for which the estimate is valid.
   * @param {module:model/String} blockchain 
   * @param {module:model/String} network 
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @param {Number} opts.confirmationTarget Integer representation of confirmation target in blocks that estimation will be valid for
   * @param {module:model/String} opts.estimateMode String representation of the address
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EstimateTransactionSmartFeeR} and HTTP response
   */


  _createClass(UnifiedEndpointsApi, [{
    key: "estimateTransactionSmartFeeWithHttpInfo",
    value: function estimateTransactionSmartFeeWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling estimateTransactionSmartFee");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling estimateTransactionSmartFee");
      }

      var pathParams = {
        'blockchain': blockchain,
        'network': network
      };
      var queryParams = {
        'context': opts['context'],
        'confirmationTarget': opts['confirmationTarget'],
        'estimateMode': opts['estimateMode']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EstimateTransactionSmartFeeR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/estimate-transaction-smart-fee', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Estimate Transaction Smart Fee
     * Through this endpoint, customers can estimate the approximate fee per kilobyte needed for a transaction to begin confirmation within the `confirmationTarget` blocks when possible. After which it will return the number of blocks for which the estimate is valid.
     * @param {module:model/String} blockchain 
     * @param {module:model/String} network 
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.confirmationTarget Integer representation of confirmation target in blocks that estimation will be valid for
     * @param {module:model/String} opts.estimateMode String representation of the address
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EstimateTransactionSmartFeeR}
     */

  }, {
    key: "estimateTransactionSmartFee",
    value: function estimateTransactionSmartFee(blockchain, network, opts) {
      return this.estimateTransactionSmartFeeWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Address Details
     * Through this endpoint the customer can receive basic information about a given address based on confirmed/synced blocks only. In the case where there are any incoming or outgoing **unconfirmed** transactions for the specific address, they **will not** be counted or calculated here. Applies only for coins.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetAddressDetailsR} and HTTP response
     */

  }, {
    key: "getAddressDetailsWithHttpInfo",
    value: function getAddressDetailsWithHttpInfo(blockchain, network, address, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getAddressDetails");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getAddressDetails");
      } // verify the required parameter 'address' is set


      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling getAddressDetails");
      }

      var pathParams = {
        'blockchain': blockchain,
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
      var returnType = _GetAddressDetailsR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/addresses/{address}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Address Details
     * Through this endpoint the customer can receive basic information about a given address based on confirmed/synced blocks only. In the case where there are any incoming or outgoing **unconfirmed** transactions for the specific address, they **will not** be counted or calculated here. Applies only for coins.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetAddressDetailsR}
     */

  }, {
    key: "getAddressDetails",
    value: function getAddressDetails(blockchain, network, address, opts) {
      return this.getAddressDetailsWithHttpInfo(blockchain, network, address, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Block Details By Block Hash
     * Through this endpoint customers can obtain basic information about a given mined block, specifically by using the `hash` parameter. These block details could include the hash of the specific, the previous and the next block, its transactions count, its height, etc.     Blockchain specific data is information such as version, nonce, size, bits, merkleroot, etc.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} blockHash Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetBlockDetailsByBlockHashR} and HTTP response
     */

  }, {
    key: "getBlockDetailsByBlockHashWithHttpInfo",
    value: function getBlockDetailsByBlockHashWithHttpInfo(blockchain, network, blockHash, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getBlockDetailsByBlockHash");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getBlockDetailsByBlockHash");
      } // verify the required parameter 'blockHash' is set


      if (blockHash === undefined || blockHash === null) {
        throw new Error("Missing the required parameter 'blockHash' when calling getBlockDetailsByBlockHash");
      }

      var pathParams = {
        'blockchain': blockchain,
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
      var returnType = _GetBlockDetailsByBlockHashR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/blocks/hash/{blockHash}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Block Details By Block Hash
     * Through this endpoint customers can obtain basic information about a given mined block, specifically by using the `hash` parameter. These block details could include the hash of the specific, the previous and the next block, its transactions count, its height, etc.     Blockchain specific data is information such as version, nonce, size, bits, merkleroot, etc.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} blockHash Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetBlockDetailsByBlockHashR}
     */

  }, {
    key: "getBlockDetailsByBlockHash",
    value: function getBlockDetailsByBlockHash(blockchain, network, blockHash, opts) {
      return this.getBlockDetailsByBlockHashWithHttpInfo(blockchain, network, blockHash, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Block Details By Block Height
     * Through this endpoint customers can obtain basic information about a given mined block, specifically by using the `height` parameter. These block details could include the hash of the specific, the previous and the next block, its transactions count, its height, etc.     Blockchain specific data is information such as version, nonce, size, bits, merkleroot, etc.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Number} height Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetBlockDetailsByBlockHeightR} and HTTP response
     */

  }, {
    key: "getBlockDetailsByBlockHeightWithHttpInfo",
    value: function getBlockDetailsByBlockHeightWithHttpInfo(blockchain, network, height, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getBlockDetailsByBlockHeight");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getBlockDetailsByBlockHeight");
      } // verify the required parameter 'height' is set


      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling getBlockDetailsByBlockHeight");
      }

      var pathParams = {
        'blockchain': blockchain,
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
      var returnType = _GetBlockDetailsByBlockHeightR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/blocks/height/{height}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Block Details By Block Height
     * Through this endpoint customers can obtain basic information about a given mined block, specifically by using the `height` parameter. These block details could include the hash of the specific, the previous and the next block, its transactions count, its height, etc.     Blockchain specific data is information such as version, nonce, size, bits, merkleroot, etc.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Number} height Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetBlockDetailsByBlockHeightR}
     */

  }, {
    key: "getBlockDetailsByBlockHeight",
    value: function getBlockDetailsByBlockHeight(blockchain, network, height, opts) {
      return this.getBlockDetailsByBlockHeightWithHttpInfo(blockchain, network, height, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Fee Recommendations
     * Through this endpoint customers can obtain fee recommendations. Our fees recommendations are based on Mempool data which makes them much more accurate than fees based on already mined blocks. Calculations are done in real time live. Using this endpoint customers can get gas price for Ethereum, fee per byte for Bitcoin, etc.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetFeeRecommendationsR} and HTTP response
     */

  }, {
    key: "getFeeRecommendationsWithHttpInfo",
    value: function getFeeRecommendationsWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getFeeRecommendations");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getFeeRecommendations");
      }

      var pathParams = {
        'blockchain': blockchain,
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
      var returnType = _GetFeeRecommendationsR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/mempool/fees', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Fee Recommendations
     * Through this endpoint customers can obtain fee recommendations. Our fees recommendations are based on Mempool data which makes them much more accurate than fees based on already mined blocks. Calculations are done in real time live. Using this endpoint customers can get gas price for Ethereum, fee per byte for Bitcoin, etc.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetFeeRecommendationsR}
     */

  }, {
    key: "getFeeRecommendations",
    value: function getFeeRecommendations(blockchain, network, opts) {
      return this.getFeeRecommendationsWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Last Mined Block
     * Through this endpoint customers can fetch the last mined block in a specific blockchain network, along with its details. These could include the hash of the specific, the previous and the next block, its transactions count, its height, etc.     Blockchain specific data is information such as version, nonce, size, bits, merkleroot, etc.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetLastMinedBlockR} and HTTP response
     */

  }, {
    key: "getLastMinedBlockWithHttpInfo",
    value: function getLastMinedBlockWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getLastMinedBlock");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getLastMinedBlock");
      }

      var pathParams = {
        'blockchain': blockchain,
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
      var returnType = _GetLastMinedBlockR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/blocks/last', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Last Mined Block
     * Through this endpoint customers can fetch the last mined block in a specific blockchain network, along with its details. These could include the hash of the specific, the previous and the next block, its transactions count, its height, etc.     Blockchain specific data is information such as version, nonce, size, bits, merkleroot, etc.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetLastMinedBlockR}
     */

  }, {
    key: "getLastMinedBlock",
    value: function getLastMinedBlock(blockchain, network, opts) {
      return this.getLastMinedBlockWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Next Available Nonce
     * Through this endpoint customers can get information about the next available nonce by providing the specific blockchain, network and address.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetNextAvailableNonceR} and HTTP response
     */

  }, {
    key: "getNextAvailableNonceWithHttpInfo",
    value: function getNextAvailableNonceWithHttpInfo(blockchain, network, address, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getNextAvailableNonce");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getNextAvailableNonce");
      } // verify the required parameter 'address' is set


      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling getNextAvailableNonce");
      }

      var pathParams = {
        'blockchain': blockchain,
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
      var returnType = _GetNextAvailableNonceR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/addresses/{address}/next-available-nonce', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Next Available Nonce
     * Through this endpoint customers can get information about the next available nonce by providing the specific blockchain, network and address.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetNextAvailableNonceR}
     */

  }, {
    key: "getNextAvailableNonce",
    value: function getNextAvailableNonce(blockchain, network, address, opts) {
      return this.getNextAvailableNonceWithHttpInfo(blockchain, network, address, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Raw Transaction Data
     * Through this endpoint customers can get information on a transaction in its raw format by providing its `transactionId`.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} transactionId Represents the unique identifier of a transaction, i.e. it could be transactionId in UTXO-based protocols like Bitcoin, and transaction hash in Ethereum blockchain.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetRawTransactionDataR} and HTTP response
     */

  }, {
    key: "getRawTransactionDataWithHttpInfo",
    value: function getRawTransactionDataWithHttpInfo(blockchain, network, transactionId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getRawTransactionData");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getRawTransactionData");
      } // verify the required parameter 'transactionId' is set


      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling getRawTransactionData");
      }

      var pathParams = {
        'blockchain': blockchain,
        'network': network,
        'transactionId': transactionId
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetRawTransactionDataR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/transactions/{transactionId}/raw-data', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Raw Transaction Data
     * Through this endpoint customers can get information on a transaction in its raw format by providing its `transactionId`.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} transactionId Represents the unique identifier of a transaction, i.e. it could be transactionId in UTXO-based protocols like Bitcoin, and transaction hash in Ethereum blockchain.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetRawTransactionDataR}
     */

  }, {
    key: "getRawTransactionData",
    value: function getRawTransactionData(blockchain, network, transactionId, opts) {
      return this.getRawTransactionDataWithHttpInfo(blockchain, network, transactionId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Transaction Details By Transaction ID
     * Through this endpoint customers can obtain details about a transaction by the transaction's unique identifier. In UTXO-based protocols like BTC there are attributes such as `transactionId` and transaction `hash`. They still could be different. In protocols like Ethereum there is only one unique value and it's `hash`.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} transactionId Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetTransactionDetailsByTransactionIDR} and HTTP response
     */

  }, {
    key: "getTransactionDetailsByTransactionIDWithHttpInfo",
    value: function getTransactionDetailsByTransactionIDWithHttpInfo(blockchain, network, transactionId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getTransactionDetailsByTransactionID");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getTransactionDetailsByTransactionID");
      } // verify the required parameter 'transactionId' is set


      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling getTransactionDetailsByTransactionID");
      }

      var pathParams = {
        'blockchain': blockchain,
        'network': network,
        'transactionId': transactionId
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetTransactionDetailsByTransactionIDR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/transactions/{transactionId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Transaction Details By Transaction ID
     * Through this endpoint customers can obtain details about a transaction by the transaction's unique identifier. In UTXO-based protocols like BTC there are attributes such as `transactionId` and transaction `hash`. They still could be different. In protocols like Ethereum there is only one unique value and it's `hash`.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} transactionId Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetTransactionDetailsByTransactionIDR}
     */

  }, {
    key: "getTransactionDetailsByTransactionID",
    value: function getTransactionDetailsByTransactionID(blockchain, network, transactionId, opts) {
      return this.getTransactionDetailsByTransactionIDWithHttpInfo(blockchain, network, transactionId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List All Unconfirmed Transactions
     * Through this endpoint customers can list all **unconfirmed**  transactions for a specified blockchain and network.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAllUnconfirmedTransactionsR} and HTTP response
     */

  }, {
    key: "listAllUnconfirmedTransactionsWithHttpInfo",
    value: function listAllUnconfirmedTransactionsWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listAllUnconfirmedTransactions");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listAllUnconfirmedTransactions");
      }

      var pathParams = {
        'blockchain': blockchain,
        'network': network
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
      var returnType = _ListAllUnconfirmedTransactionsR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/address-transactions-unconfirmed', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List All Unconfirmed Transactions
     * Through this endpoint customers can list all **unconfirmed**  transactions for a specified blockchain and network.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAllUnconfirmedTransactionsR}
     */

  }, {
    key: "listAllUnconfirmedTransactions",
    value: function listAllUnconfirmedTransactions(blockchain, network, opts) {
      return this.listAllUnconfirmedTransactionsWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Confirmed Tokens Transfers By Address And Time Range
     * Through this endpoint customers can obtain a list with **confirmed** token transfers by the `address` attribute and the query parameters `fromTimestamp` and `toTimestamp` which gives customers the opportunity to filter the results by a specified time period.    {note}This refers only to transfers done for **confirmed tokens** not coins.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Ethereum Classic, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Number} fromTimestamp Defines the specific time/date from which the results will start being listed.
     * @param {Number} toTimestamp Defines the specific time/date to which the results will be listed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListConfirmedTokensTransfersByAddressAndTimeRangeR} and HTTP response
     */

  }, {
    key: "listConfirmedTokensTransfersByAddressAndTimeRangeWithHttpInfo",
    value: function listConfirmedTokensTransfersByAddressAndTimeRangeWithHttpInfo(blockchain, network, address, fromTimestamp, toTimestamp, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listConfirmedTokensTransfersByAddressAndTimeRange");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listConfirmedTokensTransfersByAddressAndTimeRange");
      } // verify the required parameter 'address' is set


      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listConfirmedTokensTransfersByAddressAndTimeRange");
      } // verify the required parameter 'fromTimestamp' is set


      if (fromTimestamp === undefined || fromTimestamp === null) {
        throw new Error("Missing the required parameter 'fromTimestamp' when calling listConfirmedTokensTransfersByAddressAndTimeRange");
      } // verify the required parameter 'toTimestamp' is set


      if (toTimestamp === undefined || toTimestamp === null) {
        throw new Error("Missing the required parameter 'toTimestamp' when calling listConfirmedTokensTransfersByAddressAndTimeRange");
      }

      var pathParams = {
        'blockchain': blockchain,
        'network': network,
        'address': address
      };
      var queryParams = {
        'context': opts['context'],
        'fromTimestamp': fromTimestamp,
        'limit': opts['limit'],
        'offset': opts['offset'],
        'toTimestamp': toTimestamp
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListConfirmedTokensTransfersByAddressAndTimeRangeR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/addresses/{address}/tokens-transfers-by-time-range', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Confirmed Tokens Transfers By Address And Time Range
     * Through this endpoint customers can obtain a list with **confirmed** token transfers by the `address` attribute and the query parameters `fromTimestamp` and `toTimestamp` which gives customers the opportunity to filter the results by a specified time period.    {note}This refers only to transfers done for **confirmed tokens** not coins.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Ethereum Classic, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Number} fromTimestamp Defines the specific time/date from which the results will start being listed.
     * @param {Number} toTimestamp Defines the specific time/date to which the results will be listed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListConfirmedTokensTransfersByAddressAndTimeRangeR}
     */

  }, {
    key: "listConfirmedTokensTransfersByAddressAndTimeRange",
    value: function listConfirmedTokensTransfersByAddressAndTimeRange(blockchain, network, address, fromTimestamp, toTimestamp, opts) {
      return this.listConfirmedTokensTransfersByAddressAndTimeRangeWithHttpInfo(blockchain, network, address, fromTimestamp, toTimestamp, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Confirmed Transactions By Address
     * This endpoint will list transactions by an attribute `address`. The transactions listed will detail additional information such as hash, height, time of creation in Unix timestamp, etc.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListConfirmedTransactionsByAddressR} and HTTP response
     */

  }, {
    key: "listConfirmedTransactionsByAddressWithHttpInfo",
    value: function listConfirmedTransactionsByAddressWithHttpInfo(blockchain, network, address, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listConfirmedTransactionsByAddress");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listConfirmedTransactionsByAddress");
      } // verify the required parameter 'address' is set


      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listConfirmedTransactionsByAddress");
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
      var returnType = _ListConfirmedTransactionsByAddressR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/addresses/{address}/transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Confirmed Transactions By Address
     * This endpoint will list transactions by an attribute `address`. The transactions listed will detail additional information such as hash, height, time of creation in Unix timestamp, etc.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListConfirmedTransactionsByAddressR}
     */

  }, {
    key: "listConfirmedTransactionsByAddress",
    value: function listConfirmedTransactionsByAddress(blockchain, network, address, opts) {
      return this.listConfirmedTransactionsByAddressWithHttpInfo(blockchain, network, address, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Confirmed Transactions By Address And Time Range
     * This endpoint will list confirmed transactions by the attribute `address` and the query parameters `fromTimestamp` and `toTimestamp` which gives customers the opportunity to filter the results by a specified time period.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Number} fromTimestamp Defines the specific time/date from which the results will start being listed.
     * @param {Number} toTimestamp Defines the specific time/date to which the results will be listed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListConfirmedTransactionsByAddressAndTimeRangeR} and HTTP response
     */

  }, {
    key: "listConfirmedTransactionsByAddressAndTimeRangeWithHttpInfo",
    value: function listConfirmedTransactionsByAddressAndTimeRangeWithHttpInfo(blockchain, network, address, fromTimestamp, toTimestamp, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listConfirmedTransactionsByAddressAndTimeRange");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listConfirmedTransactionsByAddressAndTimeRange");
      } // verify the required parameter 'address' is set


      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listConfirmedTransactionsByAddressAndTimeRange");
      } // verify the required parameter 'fromTimestamp' is set


      if (fromTimestamp === undefined || fromTimestamp === null) {
        throw new Error("Missing the required parameter 'fromTimestamp' when calling listConfirmedTransactionsByAddressAndTimeRange");
      } // verify the required parameter 'toTimestamp' is set


      if (toTimestamp === undefined || toTimestamp === null) {
        throw new Error("Missing the required parameter 'toTimestamp' when calling listConfirmedTransactionsByAddressAndTimeRange");
      }

      var pathParams = {
        'blockchain': blockchain,
        'network': network,
        'address': address
      };
      var queryParams = {
        'context': opts['context'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'fromTimestamp': fromTimestamp,
        'toTimestamp': toTimestamp
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListConfirmedTransactionsByAddressAndTimeRangeR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/addresses/{address}/transactions-by-time-range', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Confirmed Transactions By Address And Time Range
     * This endpoint will list confirmed transactions by the attribute `address` and the query parameters `fromTimestamp` and `toTimestamp` which gives customers the opportunity to filter the results by a specified time period.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Number} fromTimestamp Defines the specific time/date from which the results will start being listed.
     * @param {Number} toTimestamp Defines the specific time/date to which the results will be listed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListConfirmedTransactionsByAddressAndTimeRangeR}
     */

  }, {
    key: "listConfirmedTransactionsByAddressAndTimeRange",
    value: function listConfirmedTransactionsByAddressAndTimeRange(blockchain, network, address, fromTimestamp, toTimestamp, opts) {
      return this.listConfirmedTransactionsByAddressAndTimeRangeWithHttpInfo(blockchain, network, address, fromTimestamp, toTimestamp, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Internal Transactions By Address And Time Range
     * Through this endpoint customers can list internal transactions by the `address` attribute and the query parameters `fromTimestamp` and `toTimestamp`  which gives customers the opportunity to filter the results by a specified time period.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address String identifier of the address document represented in CryptoAPIs
     * @param {Number} fromTimestamp Defines the specific time/date from which the results will start being listed.
     * @param {Number} toTimestamp Defines the specific time/date to which the results will be listed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListInternalTransactionsByAddressAndTimeRangeR} and HTTP response
     */

  }, {
    key: "listInternalTransactionsByAddressAndTimeRangeWithHttpInfo",
    value: function listInternalTransactionsByAddressAndTimeRangeWithHttpInfo(blockchain, network, address, fromTimestamp, toTimestamp, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listInternalTransactionsByAddressAndTimeRange");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listInternalTransactionsByAddressAndTimeRange");
      } // verify the required parameter 'address' is set


      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listInternalTransactionsByAddressAndTimeRange");
      } // verify the required parameter 'fromTimestamp' is set


      if (fromTimestamp === undefined || fromTimestamp === null) {
        throw new Error("Missing the required parameter 'fromTimestamp' when calling listInternalTransactionsByAddressAndTimeRange");
      } // verify the required parameter 'toTimestamp' is set


      if (toTimestamp === undefined || toTimestamp === null) {
        throw new Error("Missing the required parameter 'toTimestamp' when calling listInternalTransactionsByAddressAndTimeRange");
      }

      var pathParams = {
        'blockchain': blockchain,
        'network': network,
        'address': address
      };
      var queryParams = {
        'context': opts['context'],
        'fromTimestamp': fromTimestamp,
        'limit': opts['limit'],
        'offset': opts['offset'],
        'toTimestamp': toTimestamp
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListInternalTransactionsByAddressAndTimeRangeR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/addresses/{address}/internal-by-time-range', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Internal Transactions By Address And Time Range
     * Through this endpoint customers can list internal transactions by the `address` attribute and the query parameters `fromTimestamp` and `toTimestamp`  which gives customers the opportunity to filter the results by a specified time period.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address String identifier of the address document represented in CryptoAPIs
     * @param {Number} fromTimestamp Defines the specific time/date from which the results will start being listed.
     * @param {Number} toTimestamp Defines the specific time/date to which the results will be listed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListInternalTransactionsByAddressAndTimeRangeR}
     */

  }, {
    key: "listInternalTransactionsByAddressAndTimeRange",
    value: function listInternalTransactionsByAddressAndTimeRange(blockchain, network, address, fromTimestamp, toTimestamp, opts) {
      return this.listInternalTransactionsByAddressAndTimeRangeWithHttpInfo(blockchain, network, address, fromTimestamp, toTimestamp, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Latest Mined Blocks
     * Through this endpoint customers can list **up to 50** from the latest blocks that were mined.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {Number} count Specifies how many records were requested.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListLatestMinedBlocksR} and HTTP response
     */

  }, {
    key: "listLatestMinedBlocksWithHttpInfo",
    value: function listLatestMinedBlocksWithHttpInfo(network, blockchain, count, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listLatestMinedBlocks");
      } // verify the required parameter 'blockchain' is set


      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listLatestMinedBlocks");
      } // verify the required parameter 'count' is set


      if (count === undefined || count === null) {
        throw new Error("Missing the required parameter 'count' when calling listLatestMinedBlocks");
      }

      var pathParams = {
        'network': network,
        'blockchain': blockchain,
        'count': count
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListLatestMinedBlocksR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/blocks/last/{count}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Latest Mined Blocks
     * Through this endpoint customers can list **up to 50** from the latest blocks that were mined.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {Number} count Specifies how many records were requested.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListLatestMinedBlocksR}
     */

  }, {
    key: "listLatestMinedBlocks",
    value: function listLatestMinedBlocks(network, blockchain, count, opts) {
      return this.listLatestMinedBlocksWithHttpInfo(network, blockchain, count, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Transactions by Block Hash
     * This endpoint will list transactions by an attribute `transactionHash`. The transactions listed will detail additional information such as addresses, height, time of creation in Unix timestamp, etc.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} blockHash Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListTransactionsByBlockHashR} and HTTP response
     */

  }, {
    key: "listTransactionsByBlockHashWithHttpInfo",
    value: function listTransactionsByBlockHashWithHttpInfo(blockchain, network, blockHash, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listTransactionsByBlockHash");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listTransactionsByBlockHash");
      } // verify the required parameter 'blockHash' is set


      if (blockHash === undefined || blockHash === null) {
        throw new Error("Missing the required parameter 'blockHash' when calling listTransactionsByBlockHash");
      }

      var pathParams = {
        'blockchain': blockchain,
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
      var returnType = _ListTransactionsByBlockHashR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/blocks/hash/{blockHash}/transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Transactions by Block Hash
     * This endpoint will list transactions by an attribute `transactionHash`. The transactions listed will detail additional information such as addresses, height, time of creation in Unix timestamp, etc.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} blockHash Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListTransactionsByBlockHashR}
     */

  }, {
    key: "listTransactionsByBlockHash",
    value: function listTransactionsByBlockHash(blockchain, network, blockHash, opts) {
      return this.listTransactionsByBlockHashWithHttpInfo(blockchain, network, blockHash, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Transactions by Block Height
     * This endpoint will list transactions by an attribute `blockHeight`. The transactions listed will detail additional information such as hash, addresses, time of creation in Unix timestamp, etc.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Number} height Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListTransactionsByBlockHeightR} and HTTP response
     */

  }, {
    key: "listTransactionsByBlockHeightWithHttpInfo",
    value: function listTransactionsByBlockHeightWithHttpInfo(blockchain, network, height, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listTransactionsByBlockHeight");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listTransactionsByBlockHeight");
      } // verify the required parameter 'height' is set


      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling listTransactionsByBlockHeight");
      }

      var pathParams = {
        'blockchain': blockchain,
        'network': network,
        'height': height
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
      var returnType = _ListTransactionsByBlockHeightR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/blocks/height/{height}/transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Transactions by Block Height
     * This endpoint will list transactions by an attribute `blockHeight`. The transactions listed will detail additional information such as hash, addresses, time of creation in Unix timestamp, etc.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Number} height Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListTransactionsByBlockHeightR}
     */

  }, {
    key: "listTransactionsByBlockHeight",
    value: function listTransactionsByBlockHeight(blockchain, network, height, opts) {
      return this.listTransactionsByBlockHeightWithHttpInfo(blockchain, network, height, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Unconfirmed Transactions by Address
     * Through this endpoint customers can list transactions by `address` that are **unconfirmed**.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListUnconfirmedTransactionsByAddressR} and HTTP response
     */

  }, {
    key: "listUnconfirmedTransactionsByAddressWithHttpInfo",
    value: function listUnconfirmedTransactionsByAddressWithHttpInfo(blockchain, network, address, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listUnconfirmedTransactionsByAddress");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listUnconfirmedTransactionsByAddress");
      } // verify the required parameter 'address' is set


      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listUnconfirmedTransactionsByAddress");
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
      var returnType = _ListUnconfirmedTransactionsByAddressR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/address-transactions-unconfirmed/{address}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Unconfirmed Transactions by Address
     * Through this endpoint customers can list transactions by `address` that are **unconfirmed**.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUnconfirmedTransactionsByAddressR}
     */

  }, {
    key: "listUnconfirmedTransactionsByAddress",
    value: function listUnconfirmedTransactionsByAddress(blockchain, network, address, opts) {
      return this.listUnconfirmedTransactionsByAddressWithHttpInfo(blockchain, network, address, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Unspent Transaction Outputs By Address
     * Through this endpoint customers can list their transactions' unspent outputs by `address`.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the address that has unspend funds per which the result is returned.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListUnspentTransactionOutputsByAddressR} and HTTP response
     */

  }, {
    key: "listUnspentTransactionOutputsByAddressWithHttpInfo",
    value: function listUnspentTransactionOutputsByAddressWithHttpInfo(blockchain, network, address, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listUnspentTransactionOutputsByAddress");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listUnspentTransactionOutputsByAddress");
      } // verify the required parameter 'address' is set


      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listUnspentTransactionOutputsByAddress");
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
      var returnType = _ListUnspentTransactionOutputsByAddressR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/addresses/{address}/unspent-outputs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Unspent Transaction Outputs By Address
     * Through this endpoint customers can list their transactions' unspent outputs by `address`.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the address that has unspend funds per which the result is returned.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUnspentTransactionOutputsByAddressR}
     */

  }, {
    key: "listUnspentTransactionOutputsByAddress",
    value: function listUnspentTransactionOutputsByAddress(blockchain, network, address, opts) {
      return this.listUnspentTransactionOutputsByAddressWithHttpInfo(blockchain, network, address, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return UnifiedEndpointsApi;
}();

exports["default"] = UnifiedEndpointsApi;