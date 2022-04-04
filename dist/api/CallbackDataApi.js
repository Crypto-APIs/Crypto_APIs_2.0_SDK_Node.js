"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetAddressDetailsFromCallbackR = _interopRequireDefault(require("../model/GetAddressDetailsFromCallbackR"));

var _GetBlockDetailsByBlockHashFromCallbackR = _interopRequireDefault(require("../model/GetBlockDetailsByBlockHashFromCallbackR"));

var _GetBlockDetailsByBlockHeightFromCallbackR = _interopRequireDefault(require("../model/GetBlockDetailsByBlockHeightFromCallbackR"));

var _GetTransactionDetailsByTransactionIDFromCallbackR = _interopRequireDefault(require("../model/GetTransactionDetailsByTransactionIDFromCallbackR"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse40069"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse40070"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse40071"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse40072"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse40169"));

var _InlineResponse6 = _interopRequireDefault(require("../model/InlineResponse40170"));

var _InlineResponse7 = _interopRequireDefault(require("../model/InlineResponse40171"));

var _InlineResponse8 = _interopRequireDefault(require("../model/InlineResponse40172"));

var _InlineResponse9 = _interopRequireDefault(require("../model/InlineResponse402"));

var _InlineResponse10 = _interopRequireDefault(require("../model/InlineResponse40369"));

var _InlineResponse11 = _interopRequireDefault(require("../model/InlineResponse40370"));

var _InlineResponse12 = _interopRequireDefault(require("../model/InlineResponse40371"));

var _InlineResponse13 = _interopRequireDefault(require("../model/InlineResponse40372"));

var _InlineResponse14 = _interopRequireDefault(require("../model/InlineResponse4041"));

var _InlineResponse15 = _interopRequireDefault(require("../model/InlineResponse4042"));

var _InlineResponse16 = _interopRequireDefault(require("../model/InlineResponse4044"));

var _InlineResponse17 = _interopRequireDefault(require("../model/InlineResponse409"));

var _InlineResponse18 = _interopRequireDefault(require("../model/InlineResponse415"));

var _InlineResponse19 = _interopRequireDefault(require("../model/InlineResponse422"));

var _InlineResponse20 = _interopRequireDefault(require("../model/InlineResponse429"));

var _InlineResponse21 = _interopRequireDefault(require("../model/InlineResponse500"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* CallbackData service.
* @module api/CallbackDataApi
* @version 1.4.0
*/
var CallbackDataApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CallbackDataApi. 
  * @alias module:api/CallbackDataApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CallbackDataApi(apiClient) {
    _classCallCheck(this, CallbackDataApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get Address Details From Callback
   * This endpoint creates a shortcut to obtain information from Blockchain data by going through Blockchain Events and a specific Event Subscription. It provides data for a specific address from the Event it takes part in only if the address already exists in the blockchain events subscriptions. It applies only for Events related to that customer.
   * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
   * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetAddressDetailsFromCallbackR} and HTTP response
   */


  _createClass(CallbackDataApi, [{
    key: "getAddressDetailsFromCallbackWithHttpInfo",
    value: function getAddressDetailsFromCallbackWithHttpInfo(blockchain, network, address, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getAddressDetailsFromCallback");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getAddressDetailsFromCallback");
      } // verify the required parameter 'address' is set


      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling getAddressDetailsFromCallback");
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
      var returnType = _GetAddressDetailsFromCallbackR["default"];
      return this.apiClient.callApi('/blockchain-events/{blockchain}/{network}/addresses/{address}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Address Details From Callback
     * This endpoint creates a shortcut to obtain information from Blockchain data by going through Blockchain Events and a specific Event Subscription. It provides data for a specific address from the Event it takes part in only if the address already exists in the blockchain events subscriptions. It applies only for Events related to that customer.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetAddressDetailsFromCallbackR}
     */

  }, {
    key: "getAddressDetailsFromCallback",
    value: function getAddressDetailsFromCallback(blockchain, network, address, opts) {
      return this.getAddressDetailsFromCallbackWithHttpInfo(blockchain, network, address, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Block Details By Block Hash From Callback
     * This endpoint creates a shortcut to obtain information from Blockchain data by going through Blockchain Events and a specific Event Subscription. It provides data for a specific block by providing the `blockHash` attribute from the Event it takes part in and after making check that the customer in question does have a subscription for this block. It applies only for Events related to that user.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} blockHash Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetBlockDetailsByBlockHashFromCallbackR} and HTTP response
     */

  }, {
    key: "getBlockDetailsByBlockHashFromCallbackWithHttpInfo",
    value: function getBlockDetailsByBlockHashFromCallbackWithHttpInfo(blockchain, network, blockHash, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getBlockDetailsByBlockHashFromCallback");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getBlockDetailsByBlockHashFromCallback");
      } // verify the required parameter 'blockHash' is set


      if (blockHash === undefined || blockHash === null) {
        throw new Error("Missing the required parameter 'blockHash' when calling getBlockDetailsByBlockHashFromCallback");
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
      var returnType = _GetBlockDetailsByBlockHashFromCallbackR["default"];
      return this.apiClient.callApi('/blockcain-events/{blockchain}/{network}/blocks/hash/{blockHash}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Block Details By Block Hash From Callback
     * This endpoint creates a shortcut to obtain information from Blockchain data by going through Blockchain Events and a specific Event Subscription. It provides data for a specific block by providing the `blockHash` attribute from the Event it takes part in and after making check that the customer in question does have a subscription for this block. It applies only for Events related to that user.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} blockHash Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetBlockDetailsByBlockHashFromCallbackR}
     */

  }, {
    key: "getBlockDetailsByBlockHashFromCallback",
    value: function getBlockDetailsByBlockHashFromCallback(blockchain, network, blockHash, opts) {
      return this.getBlockDetailsByBlockHashFromCallbackWithHttpInfo(blockchain, network, blockHash, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Block Details By Block Height From Callback
     * This endpoint creates a shortcut to obtain information from Blockchain data by going through Blockchain Events and a specific Event Subscription. It provides data for the specific Block by providing the `blockHeight` attribute from the Event it takes part in. It applies only for Events related to that user.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} blockHeight Numeric representation of the block height
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetBlockDetailsByBlockHeightFromCallbackR} and HTTP response
     */

  }, {
    key: "getBlockDetailsByBlockHeightFromCallbackWithHttpInfo",
    value: function getBlockDetailsByBlockHeightFromCallbackWithHttpInfo(blockchain, network, blockHeight, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getBlockDetailsByBlockHeightFromCallback");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getBlockDetailsByBlockHeightFromCallback");
      } // verify the required parameter 'blockHeight' is set


      if (blockHeight === undefined || blockHeight === null) {
        throw new Error("Missing the required parameter 'blockHeight' when calling getBlockDetailsByBlockHeightFromCallback");
      }

      var pathParams = {
        'blockchain': blockchain,
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
      var returnType = _GetBlockDetailsByBlockHeightFromCallbackR["default"];
      return this.apiClient.callApi('/blockcain-events/{blockchain}/{network}/blocks/height/{blockHeight}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Block Details By Block Height From Callback
     * This endpoint creates a shortcut to obtain information from Blockchain data by going through Blockchain Events and a specific Event Subscription. It provides data for the specific Block by providing the `blockHeight` attribute from the Event it takes part in. It applies only for Events related to that user.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} blockHeight Numeric representation of the block height
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetBlockDetailsByBlockHeightFromCallbackR}
     */

  }, {
    key: "getBlockDetailsByBlockHeightFromCallback",
    value: function getBlockDetailsByBlockHeightFromCallback(blockchain, network, blockHeight, opts) {
      return this.getBlockDetailsByBlockHeightFromCallbackWithHttpInfo(blockchain, network, blockHeight, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Transaction Details By Transaction ID From Callback
     * This endpoint creates a shortcut to obtain information from Blockchain data by going through Blockchain Events and a specific Event Subscription. It provides data for a specific transaction from the Event it takes part in by providing the `transactionId` attribute. It applies only for Events related to that user.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} transactionId String identifier of the transaction
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetTransactionDetailsByTransactionIDFromCallbackR} and HTTP response
     */

  }, {
    key: "getTransactionDetailsByTransactionIDFromCallbackWithHttpInfo",
    value: function getTransactionDetailsByTransactionIDFromCallbackWithHttpInfo(blockchain, network, transactionId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getTransactionDetailsByTransactionIDFromCallback");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getTransactionDetailsByTransactionIDFromCallback");
      } // verify the required parameter 'transactionId' is set


      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling getTransactionDetailsByTransactionIDFromCallback");
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
      var returnType = _GetTransactionDetailsByTransactionIDFromCallbackR["default"];
      return this.apiClient.callApi('/blockchain-events/{blockchain}/{network}/transactions/{transactionId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Transaction Details By Transaction ID From Callback
     * This endpoint creates a shortcut to obtain information from Blockchain data by going through Blockchain Events and a specific Event Subscription. It provides data for a specific transaction from the Event it takes part in by providing the `transactionId` attribute. It applies only for Events related to that user.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} transactionId String identifier of the transaction
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetTransactionDetailsByTransactionIDFromCallbackR}
     */

  }, {
    key: "getTransactionDetailsByTransactionIDFromCallback",
    value: function getTransactionDetailsByTransactionIDFromCallback(blockchain, network, transactionId, opts) {
      return this.getTransactionDetailsByTransactionIDFromCallbackWithHttpInfo(blockchain, network, transactionId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return CallbackDataApi;
}();

exports["default"] = CallbackDataApi;