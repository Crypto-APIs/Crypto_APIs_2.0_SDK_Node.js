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
var _GetLatestMinedXRPRippleBlock400Response = _interopRequireDefault(require("../model/GetLatestMinedXRPRippleBlock400Response"));
var _GetLatestMinedXRPRippleBlock401Response = _interopRequireDefault(require("../model/GetLatestMinedXRPRippleBlock401Response"));
var _GetLatestMinedXRPRippleBlock403Response = _interopRequireDefault(require("../model/GetLatestMinedXRPRippleBlock403Response"));
var _GetLatestMinedXRPRippleBlockR = _interopRequireDefault(require("../model/GetLatestMinedXRPRippleBlockR"));
var _GetXRPRippleAddressDetails400Response = _interopRequireDefault(require("../model/GetXRPRippleAddressDetails400Response"));
var _GetXRPRippleAddressDetails401Response = _interopRequireDefault(require("../model/GetXRPRippleAddressDetails401Response"));
var _GetXRPRippleAddressDetails403Response = _interopRequireDefault(require("../model/GetXRPRippleAddressDetails403Response"));
var _GetXRPRippleAddressDetailsR = _interopRequireDefault(require("../model/GetXRPRippleAddressDetailsR"));
var _GetXRPRippleBlockDetailsByBlockHash400Response = _interopRequireDefault(require("../model/GetXRPRippleBlockDetailsByBlockHash400Response"));
var _GetXRPRippleBlockDetailsByBlockHash401Response = _interopRequireDefault(require("../model/GetXRPRippleBlockDetailsByBlockHash401Response"));
var _GetXRPRippleBlockDetailsByBlockHash403Response = _interopRequireDefault(require("../model/GetXRPRippleBlockDetailsByBlockHash403Response"));
var _GetXRPRippleBlockDetailsByBlockHashR = _interopRequireDefault(require("../model/GetXRPRippleBlockDetailsByBlockHashR"));
var _GetXRPRippleBlockDetailsByBlockHeight400Response = _interopRequireDefault(require("../model/GetXRPRippleBlockDetailsByBlockHeight400Response"));
var _GetXRPRippleBlockDetailsByBlockHeight401Response = _interopRequireDefault(require("../model/GetXRPRippleBlockDetailsByBlockHeight401Response"));
var _GetXRPRippleBlockDetailsByBlockHeight403Response = _interopRequireDefault(require("../model/GetXRPRippleBlockDetailsByBlockHeight403Response"));
var _GetXRPRippleBlockDetailsByBlockHeightR = _interopRequireDefault(require("../model/GetXRPRippleBlockDetailsByBlockHeightR"));
var _GetXRPRippleTransactionDetailsByTransactionID400Response = _interopRequireDefault(require("../model/GetXRPRippleTransactionDetailsByTransactionID400Response"));
var _GetXRPRippleTransactionDetailsByTransactionID401Response = _interopRequireDefault(require("../model/GetXRPRippleTransactionDetailsByTransactionID401Response"));
var _GetXRPRippleTransactionDetailsByTransactionID403Response = _interopRequireDefault(require("../model/GetXRPRippleTransactionDetailsByTransactionID403Response"));
var _GetXRPRippleTransactionDetailsByTransactionID404Response = _interopRequireDefault(require("../model/GetXRPRippleTransactionDetailsByTransactionID404Response"));
var _GetXRPRippleTransactionDetailsByTransactionIDR = _interopRequireDefault(require("../model/GetXRPRippleTransactionDetailsByTransactionIDR"));
var _ListXRPRippleTransactionsByAddress400Response = _interopRequireDefault(require("../model/ListXRPRippleTransactionsByAddress400Response"));
var _ListXRPRippleTransactionsByAddress401Response = _interopRequireDefault(require("../model/ListXRPRippleTransactionsByAddress401Response"));
var _ListXRPRippleTransactionsByAddress403Response = _interopRequireDefault(require("../model/ListXRPRippleTransactionsByAddress403Response"));
var _ListXRPRippleTransactionsByAddressAndTimeRange400Response = _interopRequireDefault(require("../model/ListXRPRippleTransactionsByAddressAndTimeRange400Response"));
var _ListXRPRippleTransactionsByAddressAndTimeRange401Response = _interopRequireDefault(require("../model/ListXRPRippleTransactionsByAddressAndTimeRange401Response"));
var _ListXRPRippleTransactionsByAddressAndTimeRange403Response = _interopRequireDefault(require("../model/ListXRPRippleTransactionsByAddressAndTimeRange403Response"));
var _ListXRPRippleTransactionsByAddressAndTimeRangeR = _interopRequireDefault(require("../model/ListXRPRippleTransactionsByAddressAndTimeRangeR"));
var _ListXRPRippleTransactionsByAddressR = _interopRequireDefault(require("../model/ListXRPRippleTransactionsByAddressR"));
var _ListXRPRippleTransactionsByBlockHash400Response = _interopRequireDefault(require("../model/ListXRPRippleTransactionsByBlockHash400Response"));
var _ListXRPRippleTransactionsByBlockHash401Response = _interopRequireDefault(require("../model/ListXRPRippleTransactionsByBlockHash401Response"));
var _ListXRPRippleTransactionsByBlockHash403Response = _interopRequireDefault(require("../model/ListXRPRippleTransactionsByBlockHash403Response"));
var _ListXRPRippleTransactionsByBlockHashR = _interopRequireDefault(require("../model/ListXRPRippleTransactionsByBlockHashR"));
var _ListXRPRippleTransactionsByBlockHeight400Response = _interopRequireDefault(require("../model/ListXRPRippleTransactionsByBlockHeight400Response"));
var _ListXRPRippleTransactionsByBlockHeight401Response = _interopRequireDefault(require("../model/ListXRPRippleTransactionsByBlockHeight401Response"));
var _ListXRPRippleTransactionsByBlockHeight403Response = _interopRequireDefault(require("../model/ListXRPRippleTransactionsByBlockHeight403Response"));
var _ListXRPRippleTransactionsByBlockHeightR = _interopRequireDefault(require("../model/ListXRPRippleTransactionsByBlockHeightR"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* XRPRipple service.
* @module api/XRPRippleApi
* @version 1.13.0
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
   * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetLatestMinedXRPRippleBlockR} and HTTP response
   */
  _createClass(XRPRippleApi, [{
    key: "getLatestMinedXRPRippleBlockWithHttpInfo",
    value: function getLatestMinedXRPRippleBlockWithHttpInfo(network, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'network' is set
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
      var returnType = _GetLatestMinedXRPRippleBlockR["default"];
      return this.apiClient.callApi('/blockchain-data/xrp-specific/{network}/blocks/last', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get Latest Mined XRP (Ripple) Block
     * Through this endpoint customers can fetch the last mined XRP block in the blockchain, along with its details. These could include the hash of the specific, the previous and the next block, its transactions count, its height, etc.     Since XRP is a different blockchain than Bitcoin and Ethereum, it isn't unified.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetLatestMinedXRPRippleBlockR}
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetXRPRippleAddressDetailsR} and HTTP response
     */
  }, {
    key: "getXRPRippleAddressDetailsWithHttpInfo",
    value: function getXRPRippleAddressDetailsWithHttpInfo(network, address, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getXRPRippleAddressDetails");
      }
      // verify the required parameter 'address' is set
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
      var returnType = _GetXRPRippleAddressDetailsR["default"];
      return this.apiClient.callApi('/blockchain-data/xrp-specific/{network}/addresses/{address}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get XRP (Ripple) Address Details
     * Through this endpoint the customer can receive basic information about a given XRP address based on confirmed/synced blocks only. In the case where there are any incoming or outgoing **unconfirmed** transactions for the specific address, they **will not** be counted or calculated here.    Since XRP is a different blockchain than Bitcoin and Ethereum, it isn't unified.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\",  are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetXRPRippleAddressDetailsR}
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
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} blockHash Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetXRPRippleBlockDetailsByBlockHashR} and HTTP response
     */
  }, {
    key: "getXRPRippleBlockDetailsByBlockHashWithHttpInfo",
    value: function getXRPRippleBlockDetailsByBlockHashWithHttpInfo(network, blockHash, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getXRPRippleBlockDetailsByBlockHash");
      }
      // verify the required parameter 'blockHash' is set
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
      var returnType = _GetXRPRippleBlockDetailsByBlockHashR["default"];
      return this.apiClient.callApi('/blockchain-data/xrp-specific/{network}/blocks/hash/{blockHash}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get XRP (Ripple) Block Details By Block Hash
     * Through this endpoint customers can obtain basic information about a given XRP block (a block on the XRP blockchain), specifically by using the `hash` parameter. These block details could include the hash of the specific, the previous and the next block, the number of included transactions, etc.     Since XRP is a different blockchain than Bitcoin and Ethereum, it isn't unified.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} blockHash Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetXRPRippleBlockDetailsByBlockHashR}
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
     * @param {String} blockHeight Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetXRPRippleBlockDetailsByBlockHeightR} and HTTP response
     */
  }, {
    key: "getXRPRippleBlockDetailsByBlockHeightWithHttpInfo",
    value: function getXRPRippleBlockDetailsByBlockHeightWithHttpInfo(network, blockHeight, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getXRPRippleBlockDetailsByBlockHeight");
      }
      // verify the required parameter 'blockHeight' is set
      if (blockHeight === undefined || blockHeight === null) {
        throw new Error("Missing the required parameter 'blockHeight' when calling getXRPRippleBlockDetailsByBlockHeight");
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
      var returnType = _GetXRPRippleBlockDetailsByBlockHeightR["default"];
      return this.apiClient.callApi('/blockchain-data/xrp-specific/{network}/blocks/height/{blockHeight}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get XRP (Ripple) Block Details By Block Height
     * Through this endpoint customers can obtain basic information about a given XRP block (a block on the XRP blockchain), specifically by using the `height` parameter. These block details could include the hash of the specific, the previous and the next block, its transactions count, etc.    Since XRP is a different blockchain than Bitcoin and Ethereum, it isn't unified.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\",  are test networks.
     * @param {String} blockHeight Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetXRPRippleBlockDetailsByBlockHeightR}
     */
  }, {
    key: "getXRPRippleBlockDetailsByBlockHeight",
    value: function getXRPRippleBlockDetailsByBlockHeight(network, blockHeight, opts) {
      return this.getXRPRippleBlockDetailsByBlockHeightWithHttpInfo(network, blockHeight, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get XRP (Ripple) Transaction Details By Transaction ID
     * Through this endpoint customers can obtain details about a XRP transaction by the transaction's unique identifier.     Since XRP is a different blockchain than Bitcoin and Ethereum, it isn't unified.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} transactionHash Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetXRPRippleTransactionDetailsByTransactionIDR} and HTTP response
     */
  }, {
    key: "getXRPRippleTransactionDetailsByTransactionIDWithHttpInfo",
    value: function getXRPRippleTransactionDetailsByTransactionIDWithHttpInfo(network, transactionHash, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getXRPRippleTransactionDetailsByTransactionID");
      }
      // verify the required parameter 'transactionHash' is set
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
      var returnType = _GetXRPRippleTransactionDetailsByTransactionIDR["default"];
      return this.apiClient.callApi('/blockchain-data/xrp-specific/{network}/transactions/{transactionHash}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get XRP (Ripple) Transaction Details By Transaction ID
     * Through this endpoint customers can obtain details about a XRP transaction by the transaction's unique identifier.     Since XRP is a different blockchain than Bitcoin and Ethereum, it isn't unified.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} transactionHash Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetXRPRippleTransactionDetailsByTransactionIDR}
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
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @param {module:model/String} opts.transactionType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListXRPRippleTransactionsByAddressR} and HTTP response
     */
  }, {
    key: "listXRPRippleTransactionsByAddressWithHttpInfo",
    value: function listXRPRippleTransactionsByAddressWithHttpInfo(network, address, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listXRPRippleTransactionsByAddress");
      }
      // verify the required parameter 'address' is set
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
        'offset': opts['offset'],
        'transactionType': opts['transactionType']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListXRPRippleTransactionsByAddressR["default"];
      return this.apiClient.callApi('/blockchain-data/xrp-specific/{network}/addresses/{address}/transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List XRP (Ripple) Transactions by Address
     * This endpoint will list XRP transactions by a attribute `address`. The transactions listed will detail additional information such as hash, height, time of creation in Unix timestamp, etc.    Since XRP is a different blockchain than Bitcoin and Ethereum, it isn't unified.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @param {module:model/String} opts.transactionType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListXRPRippleTransactionsByAddressR}
     */
  }, {
    key: "listXRPRippleTransactionsByAddress",
    value: function listXRPRippleTransactionsByAddress(network, address, opts) {
      return this.listXRPRippleTransactionsByAddressWithHttpInfo(network, address, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List XRP (Ripple) Transactions By Address And Time Range
     * Тhis endpoint lists XRP transactions by the attribute `address` and the query parameters `fromTimestamp` and `toTimestamp`  which gives customers the opportunity to filter the results by a specified time period.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Number} fromTimestamp Defines the specific time/date from which the results will start being listed.
     * @param {Number} toTimestamp Defines the specific time/date to which the results will be listed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @param {module:model/String} opts.transactionType Defines the transaction type.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListXRPRippleTransactionsByAddressAndTimeRangeR} and HTTP response
     */
  }, {
    key: "listXRPRippleTransactionsByAddressAndTimeRangeWithHttpInfo",
    value: function listXRPRippleTransactionsByAddressAndTimeRangeWithHttpInfo(network, address, fromTimestamp, toTimestamp, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listXRPRippleTransactionsByAddressAndTimeRange");
      }
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listXRPRippleTransactionsByAddressAndTimeRange");
      }
      // verify the required parameter 'fromTimestamp' is set
      if (fromTimestamp === undefined || fromTimestamp === null) {
        throw new Error("Missing the required parameter 'fromTimestamp' when calling listXRPRippleTransactionsByAddressAndTimeRange");
      }
      // verify the required parameter 'toTimestamp' is set
      if (toTimestamp === undefined || toTimestamp === null) {
        throw new Error("Missing the required parameter 'toTimestamp' when calling listXRPRippleTransactionsByAddressAndTimeRange");
      }
      var pathParams = {
        'network': network,
        'address': address
      };
      var queryParams = {
        'context': opts['context'],
        'fromTimestamp': fromTimestamp,
        'limit': opts['limit'],
        'offset': opts['offset'],
        'toTimestamp': toTimestamp,
        'transactionType': opts['transactionType']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListXRPRippleTransactionsByAddressAndTimeRangeR["default"];
      return this.apiClient.callApi('/blockchain-data/xrp-specific/{network}/addresses/{address}/transactions-by-time-range', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List XRP (Ripple) Transactions By Address And Time Range
     * Тhis endpoint lists XRP transactions by the attribute `address` and the query parameters `fromTimestamp` and `toTimestamp`  which gives customers the opportunity to filter the results by a specified time period.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Number} fromTimestamp Defines the specific time/date from which the results will start being listed.
     * @param {Number} toTimestamp Defines the specific time/date to which the results will be listed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @param {module:model/String} opts.transactionType Defines the transaction type.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListXRPRippleTransactionsByAddressAndTimeRangeR}
     */
  }, {
    key: "listXRPRippleTransactionsByAddressAndTimeRange",
    value: function listXRPRippleTransactionsByAddressAndTimeRange(network, address, fromTimestamp, toTimestamp, opts) {
      return this.listXRPRippleTransactionsByAddressAndTimeRangeWithHttpInfo(network, address, fromTimestamp, toTimestamp, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List XRP (Ripple) Transactions By Block Hash
     * This endpoint will list transactions by an attribute `blockHash`. The transactions listed will detail additional information such as hash, addresses, time of creation in Unix timestamp, etc.    Since XRP is a different blockchain than Bitcoin and Ethereum, it isn't unified.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} blockHash Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListXRPRippleTransactionsByBlockHashR} and HTTP response
     */
  }, {
    key: "listXRPRippleTransactionsByBlockHashWithHttpInfo",
    value: function listXRPRippleTransactionsByBlockHashWithHttpInfo(network, blockHash, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listXRPRippleTransactionsByBlockHash");
      }
      // verify the required parameter 'blockHash' is set
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
      var returnType = _ListXRPRippleTransactionsByBlockHashR["default"];
      return this.apiClient.callApi('/blockchain-data/xrp-specific/{network}/blocks/hash/{blockHash}/transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List XRP (Ripple) Transactions By Block Hash
     * This endpoint will list transactions by an attribute `blockHash`. The transactions listed will detail additional information such as hash, addresses, time of creation in Unix timestamp, etc.    Since XRP is a different blockchain than Bitcoin and Ethereum, it isn't unified.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} blockHash Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListXRPRippleTransactionsByBlockHashR}
     */
  }, {
    key: "listXRPRippleTransactionsByBlockHash",
    value: function listXRPRippleTransactionsByBlockHash(network, blockHash, opts) {
      return this.listXRPRippleTransactionsByBlockHashWithHttpInfo(network, blockHash, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List XRP (Ripple) Transactions By Block Height
     * This endpoint will list transactions by an attribute `blockHeight`. The transactions listed will detail additional information such as hash, addresses, time of creation in Unix timestamp, etc.    Since XRP is a different blockchain than Bitcoin and Ethereum, it isn't unified.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Number} blockHeight 
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListXRPRippleTransactionsByBlockHeightR} and HTTP response
     */
  }, {
    key: "listXRPRippleTransactionsByBlockHeightWithHttpInfo",
    value: function listXRPRippleTransactionsByBlockHeightWithHttpInfo(network, blockHeight, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listXRPRippleTransactionsByBlockHeight");
      }
      // verify the required parameter 'blockHeight' is set
      if (blockHeight === undefined || blockHeight === null) {
        throw new Error("Missing the required parameter 'blockHeight' when calling listXRPRippleTransactionsByBlockHeight");
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
      var returnType = _ListXRPRippleTransactionsByBlockHeightR["default"];
      return this.apiClient.callApi('/blockchain-data/xrp-specific/{network}/blocks/height/{blockHeight}/transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List XRP (Ripple) Transactions By Block Height
     * This endpoint will list transactions by an attribute `blockHeight`. The transactions listed will detail additional information such as hash, addresses, time of creation in Unix timestamp, etc.    Since XRP is a different blockchain than Bitcoin and Ethereum, it isn't unified.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Number} blockHeight 
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListXRPRippleTransactionsByBlockHeightR}
     */
  }, {
    key: "listXRPRippleTransactionsByBlockHeight",
    value: function listXRPRippleTransactionsByBlockHeight(network, blockHeight, opts) {
      return this.listXRPRippleTransactionsByBlockHeightWithHttpInfo(network, blockHeight, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return XRPRippleApi;
}();
exports["default"] = XRPRippleApi;