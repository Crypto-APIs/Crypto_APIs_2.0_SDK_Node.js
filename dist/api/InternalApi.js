"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BlockchainDataInternalTransactionNotFound = _interopRequireDefault(require("../model/BlockchainDataInternalTransactionNotFound"));

var _FeatureMainnetsNotAllowedForPlan = _interopRequireDefault(require("../model/FeatureMainnetsNotAllowedForPlan"));

var _GetInternalTransactionByTransactionHashAndOperationIdR = _interopRequireDefault(require("../model/GetInternalTransactionByTransactionHashAndOperationIdR"));

var _InsufficientCredits = _interopRequireDefault(require("../model/InsufficientCredits"));

var _InvalidApiKey = _interopRequireDefault(require("../model/InvalidApiKey"));

var _InvalidData = _interopRequireDefault(require("../model/InvalidData"));

var _InvalidPagination = _interopRequireDefault(require("../model/InvalidPagination"));

var _InvalidRequestBodyStructure = _interopRequireDefault(require("../model/InvalidRequestBodyStructure"));

var _ListInternalTransactionDetailsByTransactionHashR = _interopRequireDefault(require("../model/ListInternalTransactionDetailsByTransactionHashR"));

var _RequestLimitReached = _interopRequireDefault(require("../model/RequestLimitReached"));

var _UnexpectedServerError = _interopRequireDefault(require("../model/UnexpectedServerError"));

var _UnsupportedMediaType = _interopRequireDefault(require("../model/UnsupportedMediaType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Internal service.
* @module api/InternalApi
* @version 1.2.0
*/
var InternalApi = /*#__PURE__*/function () {
  /**
  * Constructs a new InternalApi. 
  * @alias module:api/InternalApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function InternalApi(apiClient) {
    _classCallCheck(this, InternalApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get Internal Transaction by Transaction Hash and Operation Id
   * Through this endpoint customers can obtain detailed information about a specific Internal Transaction by using the attributes `transactionHash`  (the parent transaction's Hash) and `operationId` (type trace address).    An internal transaction is the result of a smart contract being triggered by an EOA or a subsequent contract call.
   * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
   * @param {String} operationId Represents the unique internal transaction ID in regards to the parent transaction (type trace address).
   * @param {String} transactionHash String identifier of the parent transaction of the internal transaction represented in CryptoAPIs.
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetInternalTransactionByTransactionHashAndOperationIdR} and HTTP response
   */


  _createClass(InternalApi, [{
    key: "getInternalTransactionByTransactionHashAndOperationIdWithHttpInfo",
    value: function getInternalTransactionByTransactionHashAndOperationIdWithHttpInfo(blockchain, network, operationId, transactionHash, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getInternalTransactionByTransactionHashAndOperationId");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getInternalTransactionByTransactionHashAndOperationId");
      } // verify the required parameter 'operationId' is set


      if (operationId === undefined || operationId === null) {
        throw new Error("Missing the required parameter 'operationId' when calling getInternalTransactionByTransactionHashAndOperationId");
      } // verify the required parameter 'transactionHash' is set


      if (transactionHash === undefined || transactionHash === null) {
        throw new Error("Missing the required parameter 'transactionHash' when calling getInternalTransactionByTransactionHashAndOperationId");
      }

      var pathParams = {
        'blockchain': blockchain,
        'network': network,
        'operationId': operationId,
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
      var returnType = _GetInternalTransactionByTransactionHashAndOperationIdR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/transactions/{transactionHash}/internal/{operationId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Internal Transaction by Transaction Hash and Operation Id
     * Through this endpoint customers can obtain detailed information about a specific Internal Transaction by using the attributes `transactionHash`  (the parent transaction's Hash) and `operationId` (type trace address).    An internal transaction is the result of a smart contract being triggered by an EOA or a subsequent contract call.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param {String} operationId Represents the unique internal transaction ID in regards to the parent transaction (type trace address).
     * @param {String} transactionHash String identifier of the parent transaction of the internal transaction represented in CryptoAPIs.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetInternalTransactionByTransactionHashAndOperationIdR}
     */

  }, {
    key: "getInternalTransactionByTransactionHashAndOperationId",
    value: function getInternalTransactionByTransactionHashAndOperationId(blockchain, network, operationId, transactionHash, opts) {
      return this.getInternalTransactionByTransactionHashAndOperationIdWithHttpInfo(blockchain, network, operationId, transactionHash, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Internal Transaction Details by Transaction Hash
     * Through this endpoint customers can list internal transactions along with their details by a specific attribute `transactionHash`, which is the parent transaction's Hash.    An internal transaction is the result of a smart contract being triggered by an EOA or a subsequent contract call.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param {String} transactionHash String identifier of the parent transaction of the internal transaction represented in CryptoAPIs.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListInternalTransactionDetailsByTransactionHashR} and HTTP response
     */

  }, {
    key: "listInternalTransactionDetailsByTransactionHashWithHttpInfo",
    value: function listInternalTransactionDetailsByTransactionHashWithHttpInfo(blockchain, network, transactionHash, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listInternalTransactionDetailsByTransactionHash");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listInternalTransactionDetailsByTransactionHash");
      } // verify the required parameter 'transactionHash' is set


      if (transactionHash === undefined || transactionHash === null) {
        throw new Error("Missing the required parameter 'transactionHash' when calling listInternalTransactionDetailsByTransactionHash");
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
      var returnType = _ListInternalTransactionDetailsByTransactionHashR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/transactions/{transactionHash}/internal', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Internal Transaction Details by Transaction Hash
     * Through this endpoint customers can list internal transactions along with their details by a specific attribute `transactionHash`, which is the parent transaction's Hash.    An internal transaction is the result of a smart contract being triggered by an EOA or a subsequent contract call.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param {String} transactionHash String identifier of the parent transaction of the internal transaction represented in CryptoAPIs.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListInternalTransactionDetailsByTransactionHashR}
     */

  }, {
    key: "listInternalTransactionDetailsByTransactionHash",
    value: function listInternalTransactionDetailsByTransactionHash(blockchain, network, transactionHash, opts) {
      return this.listInternalTransactionDetailsByTransactionHashWithHttpInfo(blockchain, network, transactionHash, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return InternalApi;
}();

exports["default"] = InternalApi;