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
var _EstimateTransactionSmartFee400Response = _interopRequireDefault(require("../model/EstimateTransactionSmartFee400Response"));
var _EstimateTransactionSmartFee401Response = _interopRequireDefault(require("../model/EstimateTransactionSmartFee401Response"));
var _EstimateTransactionSmartFee403Response = _interopRequireDefault(require("../model/EstimateTransactionSmartFee403Response"));
var _EstimateTransactionSmartFee501Response = _interopRequireDefault(require("../model/EstimateTransactionSmartFee501Response"));
var _EstimateTransactionSmartFeeR = _interopRequireDefault(require("../model/EstimateTransactionSmartFeeR"));
var _GetAddressBalance400Response = _interopRequireDefault(require("../model/GetAddressBalance400Response"));
var _GetAddressBalance401Response = _interopRequireDefault(require("../model/GetAddressBalance401Response"));
var _GetAddressBalance403Response = _interopRequireDefault(require("../model/GetAddressBalance403Response"));
var _GetAddressBalanceR = _interopRequireDefault(require("../model/GetAddressBalanceR"));
var _GetAddressDetails400Response = _interopRequireDefault(require("../model/GetAddressDetails400Response"));
var _GetAddressDetails401Response = _interopRequireDefault(require("../model/GetAddressDetails401Response"));
var _GetAddressDetails403Response = _interopRequireDefault(require("../model/GetAddressDetails403Response"));
var _GetAddressDetailsR = _interopRequireDefault(require("../model/GetAddressDetailsR"));
var _GetBlockDetailsByBlockHash400Response = _interopRequireDefault(require("../model/GetBlockDetailsByBlockHash400Response"));
var _GetBlockDetailsByBlockHash401Response = _interopRequireDefault(require("../model/GetBlockDetailsByBlockHash401Response"));
var _GetBlockDetailsByBlockHash403Response = _interopRequireDefault(require("../model/GetBlockDetailsByBlockHash403Response"));
var _GetBlockDetailsByBlockHashR = _interopRequireDefault(require("../model/GetBlockDetailsByBlockHashR"));
var _GetBlockDetailsByBlockHeight400Response = _interopRequireDefault(require("../model/GetBlockDetailsByBlockHeight400Response"));
var _GetBlockDetailsByBlockHeight401Response = _interopRequireDefault(require("../model/GetBlockDetailsByBlockHeight401Response"));
var _GetBlockDetailsByBlockHeight403Response = _interopRequireDefault(require("../model/GetBlockDetailsByBlockHeight403Response"));
var _GetBlockDetailsByBlockHeightR = _interopRequireDefault(require("../model/GetBlockDetailsByBlockHeightR"));
var _GetFeeRecommendations400Response = _interopRequireDefault(require("../model/GetFeeRecommendations400Response"));
var _GetFeeRecommendations401Response = _interopRequireDefault(require("../model/GetFeeRecommendations401Response"));
var _GetFeeRecommendations403Response = _interopRequireDefault(require("../model/GetFeeRecommendations403Response"));
var _GetFeeRecommendationsR = _interopRequireDefault(require("../model/GetFeeRecommendationsR"));
var _GetLastMinedBlock400Response = _interopRequireDefault(require("../model/GetLastMinedBlock400Response"));
var _GetLastMinedBlock401Response = _interopRequireDefault(require("../model/GetLastMinedBlock401Response"));
var _GetLastMinedBlock403Response = _interopRequireDefault(require("../model/GetLastMinedBlock403Response"));
var _GetLastMinedBlockR = _interopRequireDefault(require("../model/GetLastMinedBlockR"));
var _GetNextAvailableNonce400Response = _interopRequireDefault(require("../model/GetNextAvailableNonce400Response"));
var _GetNextAvailableNonce401Response = _interopRequireDefault(require("../model/GetNextAvailableNonce401Response"));
var _GetNextAvailableNonce403Response = _interopRequireDefault(require("../model/GetNextAvailableNonce403Response"));
var _GetNextAvailableNonceR = _interopRequireDefault(require("../model/GetNextAvailableNonceR"));
var _GetRawTransactionData400Response = _interopRequireDefault(require("../model/GetRawTransactionData400Response"));
var _GetRawTransactionData401Response = _interopRequireDefault(require("../model/GetRawTransactionData401Response"));
var _GetRawTransactionData403Response = _interopRequireDefault(require("../model/GetRawTransactionData403Response"));
var _GetRawTransactionDataR = _interopRequireDefault(require("../model/GetRawTransactionDataR"));
var _GetTransactionDetailsByTransactionID400Response = _interopRequireDefault(require("../model/GetTransactionDetailsByTransactionID400Response"));
var _GetTransactionDetailsByTransactionID401Response = _interopRequireDefault(require("../model/GetTransactionDetailsByTransactionID401Response"));
var _GetTransactionDetailsByTransactionID403Response = _interopRequireDefault(require("../model/GetTransactionDetailsByTransactionID403Response"));
var _GetTransactionDetailsByTransactionID404Response = _interopRequireDefault(require("../model/GetTransactionDetailsByTransactionID404Response"));
var _GetTransactionDetailsByTransactionIDR = _interopRequireDefault(require("../model/GetTransactionDetailsByTransactionIDR"));
var _GetXRPRippleTransactionDetailsByTransactionID404Response = _interopRequireDefault(require("../model/GetXRPRippleTransactionDetailsByTransactionID404Response"));
var _ListConfirmedTokensTransfersByAddressAndTimeRange400Response = _interopRequireDefault(require("../model/ListConfirmedTokensTransfersByAddressAndTimeRange400Response"));
var _ListConfirmedTokensTransfersByAddressAndTimeRange401Response = _interopRequireDefault(require("../model/ListConfirmedTokensTransfersByAddressAndTimeRange401Response"));
var _ListConfirmedTokensTransfersByAddressAndTimeRange403Response = _interopRequireDefault(require("../model/ListConfirmedTokensTransfersByAddressAndTimeRange403Response"));
var _ListConfirmedTokensTransfersByAddressAndTimeRangeR = _interopRequireDefault(require("../model/ListConfirmedTokensTransfersByAddressAndTimeRangeR"));
var _ListConfirmedTransactionsByAddress400Response = _interopRequireDefault(require("../model/ListConfirmedTransactionsByAddress400Response"));
var _ListConfirmedTransactionsByAddress401Response = _interopRequireDefault(require("../model/ListConfirmedTransactionsByAddress401Response"));
var _ListConfirmedTransactionsByAddress403Response = _interopRequireDefault(require("../model/ListConfirmedTransactionsByAddress403Response"));
var _ListConfirmedTransactionsByAddressAndTimeRange400Response = _interopRequireDefault(require("../model/ListConfirmedTransactionsByAddressAndTimeRange400Response"));
var _ListConfirmedTransactionsByAddressAndTimeRange401Response = _interopRequireDefault(require("../model/ListConfirmedTransactionsByAddressAndTimeRange401Response"));
var _ListConfirmedTransactionsByAddressAndTimeRange403Response = _interopRequireDefault(require("../model/ListConfirmedTransactionsByAddressAndTimeRange403Response"));
var _ListConfirmedTransactionsByAddressAndTimeRangeR = _interopRequireDefault(require("../model/ListConfirmedTransactionsByAddressAndTimeRangeR"));
var _ListConfirmedTransactionsByAddressR = _interopRequireDefault(require("../model/ListConfirmedTransactionsByAddressR"));
var _ListInternalTransactionsByAddressAndTimeRange400Response = _interopRequireDefault(require("../model/ListInternalTransactionsByAddressAndTimeRange400Response"));
var _ListInternalTransactionsByAddressAndTimeRange401Response = _interopRequireDefault(require("../model/ListInternalTransactionsByAddressAndTimeRange401Response"));
var _ListInternalTransactionsByAddressAndTimeRange403Response = _interopRequireDefault(require("../model/ListInternalTransactionsByAddressAndTimeRange403Response"));
var _ListInternalTransactionsByAddressAndTimeRangeR = _interopRequireDefault(require("../model/ListInternalTransactionsByAddressAndTimeRangeR"));
var _ListLatestMinedBlocks400Response = _interopRequireDefault(require("../model/ListLatestMinedBlocks400Response"));
var _ListLatestMinedBlocks401Response = _interopRequireDefault(require("../model/ListLatestMinedBlocks401Response"));
var _ListLatestMinedBlocks403Response = _interopRequireDefault(require("../model/ListLatestMinedBlocks403Response"));
var _ListLatestMinedBlocksR = _interopRequireDefault(require("../model/ListLatestMinedBlocksR"));
var _ListTransactionsByBlockHash400Response = _interopRequireDefault(require("../model/ListTransactionsByBlockHash400Response"));
var _ListTransactionsByBlockHash401Response = _interopRequireDefault(require("../model/ListTransactionsByBlockHash401Response"));
var _ListTransactionsByBlockHash403Response = _interopRequireDefault(require("../model/ListTransactionsByBlockHash403Response"));
var _ListTransactionsByBlockHashR = _interopRequireDefault(require("../model/ListTransactionsByBlockHashR"));
var _ListTransactionsByBlockHeight400Response = _interopRequireDefault(require("../model/ListTransactionsByBlockHeight400Response"));
var _ListTransactionsByBlockHeight401Response = _interopRequireDefault(require("../model/ListTransactionsByBlockHeight401Response"));
var _ListTransactionsByBlockHeight403Response = _interopRequireDefault(require("../model/ListTransactionsByBlockHeight403Response"));
var _ListTransactionsByBlockHeight404Response = _interopRequireDefault(require("../model/ListTransactionsByBlockHeight404Response"));
var _ListTransactionsByBlockHeightR = _interopRequireDefault(require("../model/ListTransactionsByBlockHeightR"));
var _ListUnconfirmedTransactionsByAddress400Response = _interopRequireDefault(require("../model/ListUnconfirmedTransactionsByAddress400Response"));
var _ListUnconfirmedTransactionsByAddress401Response = _interopRequireDefault(require("../model/ListUnconfirmedTransactionsByAddress401Response"));
var _ListUnconfirmedTransactionsByAddress403Response = _interopRequireDefault(require("../model/ListUnconfirmedTransactionsByAddress403Response"));
var _ListUnconfirmedTransactionsByAddressR = _interopRequireDefault(require("../model/ListUnconfirmedTransactionsByAddressR"));
var _ListUnspentTransactionOutputsByAddress400Response = _interopRequireDefault(require("../model/ListUnspentTransactionOutputsByAddress400Response"));
var _ListUnspentTransactionOutputsByAddress401Response = _interopRequireDefault(require("../model/ListUnspentTransactionOutputsByAddress401Response"));
var _ListUnspentTransactionOutputsByAddress403Response = _interopRequireDefault(require("../model/ListUnspentTransactionOutputsByAddress403Response"));
var _ListUnspentTransactionOutputsByAddressR = _interopRequireDefault(require("../model/ListUnspentTransactionOutputsByAddressR"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* UnifiedEndpoints service.
* @module api/UnifiedEndpointsApi
* @version 1.13.0
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
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling estimateTransactionSmartFee");
      }
      // verify the required parameter 'network' is set
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
     * Get Address Balance
     * Through this endpoint the customer can receive the balance of a given address based on confirmed/synced blocks only. In the case where there are any incoming or outgoing unconfirmed transactions for the specific address, they will not be counted or calculated here. Applies only for coins.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetAddressBalanceR} and HTTP response
     */
  }, {
    key: "getAddressBalanceWithHttpInfo",
    value: function getAddressBalanceWithHttpInfo(blockchain, network, address, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getAddressBalance");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getAddressBalance");
      }
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling getAddressBalance");
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
      var returnType = _GetAddressBalanceR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/addresses/{address}/balance', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get Address Balance
     * Through this endpoint the customer can receive the balance of a given address based on confirmed/synced blocks only. In the case where there are any incoming or outgoing unconfirmed transactions for the specific address, they will not be counted or calculated here. Applies only for coins.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetAddressBalanceR}
     */
  }, {
    key: "getAddressBalance",
    value: function getAddressBalance(blockchain, network, address, opts) {
      return this.getAddressBalanceWithHttpInfo(blockchain, network, address, opts).then(function (response_and_data) {
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
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getAddressDetails");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getAddressDetails");
      }
      // verify the required parameter 'address' is set
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
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getBlockDetailsByBlockHash");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getBlockDetailsByBlockHash");
      }
      // verify the required parameter 'blockHash' is set
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
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getBlockDetailsByBlockHeight");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getBlockDetailsByBlockHeight");
      }
      // verify the required parameter 'height' is set
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
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getFeeRecommendations");
      }
      // verify the required parameter 'network' is set
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
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getLastMinedBlock");
      }
      // verify the required parameter 'network' is set
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
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getNextAvailableNonce");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getNextAvailableNonce");
      }
      // verify the required parameter 'address' is set
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
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getRawTransactionData");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getRawTransactionData");
      }
      // verify the required parameter 'transactionId' is set
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
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getTransactionDetailsByTransactionID");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getTransactionDetailsByTransactionID");
      }
      // verify the required parameter 'transactionId' is set
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
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listConfirmedTokensTransfersByAddressAndTimeRange");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listConfirmedTokensTransfersByAddressAndTimeRange");
      }
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listConfirmedTokensTransfersByAddressAndTimeRange");
      }
      // verify the required parameter 'fromTimestamp' is set
      if (fromTimestamp === undefined || fromTimestamp === null) {
        throw new Error("Missing the required parameter 'fromTimestamp' when calling listConfirmedTokensTransfersByAddressAndTimeRange");
      }
      // verify the required parameter 'toTimestamp' is set
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
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listConfirmedTransactionsByAddress");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listConfirmedTransactionsByAddress");
      }
      // verify the required parameter 'address' is set
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
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listConfirmedTransactionsByAddressAndTimeRange");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listConfirmedTransactionsByAddressAndTimeRange");
      }
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listConfirmedTransactionsByAddressAndTimeRange");
      }
      // verify the required parameter 'fromTimestamp' is set
      if (fromTimestamp === undefined || fromTimestamp === null) {
        throw new Error("Missing the required parameter 'fromTimestamp' when calling listConfirmedTransactionsByAddressAndTimeRange");
      }
      // verify the required parameter 'toTimestamp' is set
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
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listInternalTransactionsByAddressAndTimeRange");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listInternalTransactionsByAddressAndTimeRange");
      }
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listInternalTransactionsByAddressAndTimeRange");
      }
      // verify the required parameter 'fromTimestamp' is set
      if (fromTimestamp === undefined || fromTimestamp === null) {
        throw new Error("Missing the required parameter 'fromTimestamp' when calling listInternalTransactionsByAddressAndTimeRange");
      }
      // verify the required parameter 'toTimestamp' is set
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
      var postBody = null;
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listLatestMinedBlocks");
      }
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listLatestMinedBlocks");
      }
      // verify the required parameter 'count' is set
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
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listTransactionsByBlockHash");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listTransactionsByBlockHash");
      }
      // verify the required parameter 'blockHash' is set
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
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listTransactionsByBlockHeight");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listTransactionsByBlockHeight");
      }
      // verify the required parameter 'height' is set
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
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listUnconfirmedTransactionsByAddress");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listUnconfirmedTransactionsByAddress");
      }
      // verify the required parameter 'address' is set
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
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listUnspentTransactionOutputsByAddress");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listUnspentTransactionOutputsByAddress");
      }
      // verify the required parameter 'address' is set
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