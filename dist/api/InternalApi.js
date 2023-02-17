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
var _GetInternalTransactionByTransactionHashAndOperationId400Response = _interopRequireDefault(require("../model/GetInternalTransactionByTransactionHashAndOperationId400Response"));
var _GetInternalTransactionByTransactionHashAndOperationId401Response = _interopRequireDefault(require("../model/GetInternalTransactionByTransactionHashAndOperationId401Response"));
var _GetInternalTransactionByTransactionHashAndOperationId403Response = _interopRequireDefault(require("../model/GetInternalTransactionByTransactionHashAndOperationId403Response"));
var _GetInternalTransactionByTransactionHashAndOperationId404Response = _interopRequireDefault(require("../model/GetInternalTransactionByTransactionHashAndOperationId404Response"));
var _GetInternalTransactionByTransactionHashAndOperationIdR = _interopRequireDefault(require("../model/GetInternalTransactionByTransactionHashAndOperationIdR"));
var _ListInternalTransactionDetailsByTransactionHash400Response = _interopRequireDefault(require("../model/ListInternalTransactionDetailsByTransactionHash400Response"));
var _ListInternalTransactionDetailsByTransactionHash401Response = _interopRequireDefault(require("../model/ListInternalTransactionDetailsByTransactionHash401Response"));
var _ListInternalTransactionDetailsByTransactionHash403Response = _interopRequireDefault(require("../model/ListInternalTransactionDetailsByTransactionHash403Response"));
var _ListInternalTransactionDetailsByTransactionHashR = _interopRequireDefault(require("../model/ListInternalTransactionDetailsByTransactionHashR"));
var _ListInternalTransactionsByAddress400Response = _interopRequireDefault(require("../model/ListInternalTransactionsByAddress400Response"));
var _ListInternalTransactionsByAddress401Response = _interopRequireDefault(require("../model/ListInternalTransactionsByAddress401Response"));
var _ListInternalTransactionsByAddress403Response = _interopRequireDefault(require("../model/ListInternalTransactionsByAddress403Response"));
var _ListInternalTransactionsByAddressR = _interopRequireDefault(require("../model/ListInternalTransactionsByAddressR"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Internal service.
* @module api/InternalApi
* @version 1.13.0
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
   * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
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
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getInternalTransactionByTransactionHashAndOperationId");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getInternalTransactionByTransactionHashAndOperationId");
      }
      // verify the required parameter 'operationId' is set
      if (operationId === undefined || operationId === null) {
        throw new Error("Missing the required parameter 'operationId' when calling getInternalTransactionByTransactionHashAndOperationId");
      }
      // verify the required parameter 'transactionHash' is set
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
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
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
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
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
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listInternalTransactionDetailsByTransactionHash");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listInternalTransactionDetailsByTransactionHash");
      }
      // verify the required parameter 'transactionHash' is set
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
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
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

    /**
     * List Internal Transactions By Address
     * Through this endpoint customers can list internal transactions by the `address` attribute.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address String identifier of the address document represented in CryptoAPIs
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListInternalTransactionsByAddressR} and HTTP response
     */
  }, {
    key: "listInternalTransactionsByAddressWithHttpInfo",
    value: function listInternalTransactionsByAddressWithHttpInfo(blockchain, network, address, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listInternalTransactionsByAddress");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listInternalTransactionsByAddress");
      }
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listInternalTransactionsByAddress");
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
      var returnType = _ListInternalTransactionsByAddressR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/addresses/{address}/internal', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Internal Transactions By Address
     * Through this endpoint customers can list internal transactions by the `address` attribute.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address String identifier of the address document represented in CryptoAPIs
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListInternalTransactionsByAddressR}
     */
  }, {
    key: "listInternalTransactionsByAddress",
    value: function listInternalTransactionsByAddress(blockchain, network, address, opts) {
      return this.listInternalTransactionsByAddressWithHttpInfo(blockchain, network, address, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return InternalApi;
}();
exports["default"] = InternalApi;