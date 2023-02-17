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
var _GetTransactionRequestDetails400Response = _interopRequireDefault(require("../model/GetTransactionRequestDetails400Response"));
var _GetTransactionRequestDetails401Response = _interopRequireDefault(require("../model/GetTransactionRequestDetails401Response"));
var _GetTransactionRequestDetails403Response = _interopRequireDefault(require("../model/GetTransactionRequestDetails403Response"));
var _GetTransactionRequestDetailsR = _interopRequireDefault(require("../model/GetTransactionRequestDetailsR"));
var _GetWalletAssetDetails400Response = _interopRequireDefault(require("../model/GetWalletAssetDetails400Response"));
var _GetWalletAssetDetails401Response = _interopRequireDefault(require("../model/GetWalletAssetDetails401Response"));
var _GetWalletAssetDetails403Response = _interopRequireDefault(require("../model/GetWalletAssetDetails403Response"));
var _GetWalletAssetDetailsR = _interopRequireDefault(require("../model/GetWalletAssetDetailsR"));
var _GetWalletTransactionDetailsByTransactionID400Response = _interopRequireDefault(require("../model/GetWalletTransactionDetailsByTransactionID400Response"));
var _GetWalletTransactionDetailsByTransactionID401Response = _interopRequireDefault(require("../model/GetWalletTransactionDetailsByTransactionID401Response"));
var _GetWalletTransactionDetailsByTransactionID403Response = _interopRequireDefault(require("../model/GetWalletTransactionDetailsByTransactionID403Response"));
var _GetWalletTransactionDetailsByTransactionIDR = _interopRequireDefault(require("../model/GetWalletTransactionDetailsByTransactionIDR"));
var _GetXRPRippleTransactionDetailsByTransactionID404Response = _interopRequireDefault(require("../model/GetXRPRippleTransactionDetailsByTransactionID404Response"));
var _ListAllAssetsByWalletID400Response = _interopRequireDefault(require("../model/ListAllAssetsByWalletID400Response"));
var _ListAllAssetsByWalletID401Response = _interopRequireDefault(require("../model/ListAllAssetsByWalletID401Response"));
var _ListAllAssetsByWalletID403Response = _interopRequireDefault(require("../model/ListAllAssetsByWalletID403Response"));
var _ListAllAssetsByWalletIDR = _interopRequireDefault(require("../model/ListAllAssetsByWalletIDR"));
var _ListAllAssetsFromAllWallets400Response = _interopRequireDefault(require("../model/ListAllAssetsFromAllWallets400Response"));
var _ListAllAssetsFromAllWallets401Response = _interopRequireDefault(require("../model/ListAllAssetsFromAllWallets401Response"));
var _ListAllAssetsFromAllWallets403Response = _interopRequireDefault(require("../model/ListAllAssetsFromAllWallets403Response"));
var _ListAllAssetsFromAllWalletsR = _interopRequireDefault(require("../model/ListAllAssetsFromAllWalletsR"));
var _ListDepositAddresses400Response = _interopRequireDefault(require("../model/ListDepositAddresses400Response"));
var _ListDepositAddresses401Response = _interopRequireDefault(require("../model/ListDepositAddresses401Response"));
var _ListDepositAddresses403Response = _interopRequireDefault(require("../model/ListDepositAddresses403Response"));
var _ListDepositAddressesR = _interopRequireDefault(require("../model/ListDepositAddressesR"));
var _ListSupportedTokens400Response = _interopRequireDefault(require("../model/ListSupportedTokens400Response"));
var _ListSupportedTokens401Response = _interopRequireDefault(require("../model/ListSupportedTokens401Response"));
var _ListSupportedTokens403Response = _interopRequireDefault(require("../model/ListSupportedTokens403Response"));
var _ListSupportedTokensR = _interopRequireDefault(require("../model/ListSupportedTokensR"));
var _ListWalletTransactions400Response = _interopRequireDefault(require("../model/ListWalletTransactions400Response"));
var _ListWalletTransactions401Response = _interopRequireDefault(require("../model/ListWalletTransactions401Response"));
var _ListWalletTransactions403Response = _interopRequireDefault(require("../model/ListWalletTransactions403Response"));
var _ListWalletTransactionsR = _interopRequireDefault(require("../model/ListWalletTransactionsR"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Informative service.
* @module api/InformativeApi
* @version 1.13.0
*/
var InformativeApi = /*#__PURE__*/function () {
  /**
  * Constructs a new InformativeApi. 
  * @alias module:api/InformativeApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function InformativeApi(apiClient) {
    _classCallCheck(this, InformativeApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Get Transaction Request Details
   * Through this endpoint customers can obtain details on transaction request.    {note}This regards **transaction requests**, which is not to be confused with **transactions**. Transaction requests may not be approved due to any reason, hence a transaction may not occur.{/note}
   * @param {String} transactionRequestId Represents the unique ID of the transaction request.
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetTransactionRequestDetailsR} and HTTP response
   */
  _createClass(InformativeApi, [{
    key: "getTransactionRequestDetailsWithHttpInfo",
    value: function getTransactionRequestDetailsWithHttpInfo(transactionRequestId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'transactionRequestId' is set
      if (transactionRequestId === undefined || transactionRequestId === null) {
        throw new Error("Missing the required parameter 'transactionRequestId' when calling getTransactionRequestDetails");
      }
      var pathParams = {
        'transactionRequestId': transactionRequestId
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetTransactionRequestDetailsR["default"];
      return this.apiClient.callApi('/wallet-as-a-service/transactionRequests/{transactionRequestId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get Transaction Request Details
     * Through this endpoint customers can obtain details on transaction request.    {note}This regards **transaction requests**, which is not to be confused with **transactions**. Transaction requests may not be approved due to any reason, hence a transaction may not occur.{/note}
     * @param {String} transactionRequestId Represents the unique ID of the transaction request.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetTransactionRequestDetailsR}
     */
  }, {
    key: "getTransactionRequestDetails",
    value: function getTransactionRequestDetails(transactionRequestId, opts) {
      return this.getTransactionRequestDetailsWithHttpInfo(transactionRequestId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get Wallet Asset Details
     * Through this endpoint customers can obtain details on all assets (coins, fungible tokens, non-fungible tokens) for the entire Wallet.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} walletId Defines the unique ID of the Wallet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetWalletAssetDetailsR} and HTTP response
     */
  }, {
    key: "getWalletAssetDetailsWithHttpInfo",
    value: function getWalletAssetDetailsWithHttpInfo(blockchain, network, walletId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getWalletAssetDetails");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getWalletAssetDetails");
      }
      // verify the required parameter 'walletId' is set
      if (walletId === undefined || walletId === null) {
        throw new Error("Missing the required parameter 'walletId' when calling getWalletAssetDetails");
      }
      var pathParams = {
        'blockchain': blockchain,
        'network': network,
        'walletId': walletId
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetWalletAssetDetailsR["default"];
      return this.apiClient.callApi('/wallet-as-a-service/wallets/{walletId}/{blockchain}/{network}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get Wallet Asset Details
     * Through this endpoint customers can obtain details on all assets (coins, fungible tokens, non-fungible tokens) for the entire Wallet.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} walletId Defines the unique ID of the Wallet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetWalletAssetDetailsR}
     */
  }, {
    key: "getWalletAssetDetails",
    value: function getWalletAssetDetails(blockchain, network, walletId, opts) {
      return this.getWalletAssetDetailsWithHttpInfo(blockchain, network, walletId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get Wallet Transaction Details By Transaction ID
     * Through this endpoint users can obtain Wallet transaction information by providing a `transactionId`. Customers can receive information only for a transaction that has been made from their own wallet.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} transactionId Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetWalletTransactionDetailsByTransactionIDR} and HTTP response
     */
  }, {
    key: "getWalletTransactionDetailsByTransactionIDWithHttpInfo",
    value: function getWalletTransactionDetailsByTransactionIDWithHttpInfo(blockchain, network, transactionId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getWalletTransactionDetailsByTransactionID");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getWalletTransactionDetailsByTransactionID");
      }
      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling getWalletTransactionDetailsByTransactionID");
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
      var returnType = _GetWalletTransactionDetailsByTransactionIDR["default"];
      return this.apiClient.callApi('/wallet-as-a-service/wallets/{blockchain}/{network}/transactions/{transactionId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get Wallet Transaction Details By Transaction ID
     * Through this endpoint users can obtain Wallet transaction information by providing a `transactionId`. Customers can receive information only for a transaction that has been made from their own wallet.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} transactionId Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetWalletTransactionDetailsByTransactionIDR}
     */
  }, {
    key: "getWalletTransactionDetailsByTransactionID",
    value: function getWalletTransactionDetailsByTransactionID(blockchain, network, transactionId, opts) {
      return this.getWalletTransactionDetailsByTransactionIDWithHttpInfo(blockchain, network, transactionId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List All Assets By Wallet ID
     * Through this endpoint customers can obtain information about available assets in one of their wallets, regardless of the blockchain protocol or network, by providing walletId.
     * @param {String} walletId Defines the unique ID of the Wallet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAllAssetsByWalletIDR} and HTTP response
     */
  }, {
    key: "listAllAssetsByWalletIDWithHttpInfo",
    value: function listAllAssetsByWalletIDWithHttpInfo(walletId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'walletId' is set
      if (walletId === undefined || walletId === null) {
        throw new Error("Missing the required parameter 'walletId' when calling listAllAssetsByWalletID");
      }
      var pathParams = {
        'walletId': walletId
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListAllAssetsByWalletIDR["default"];
      return this.apiClient.callApi('/wallet-as-a-service/wallets/{walletId}/assets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List All Assets By Wallet ID
     * Through this endpoint customers can obtain information about available assets in one of their wallets, regardless of the blockchain protocol or network, by providing walletId.
     * @param {String} walletId Defines the unique ID of the Wallet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAllAssetsByWalletIDR}
     */
  }, {
    key: "listAllAssetsByWalletID",
    value: function listAllAssetsByWalletID(walletId, opts) {
      return this.listAllAssetsByWalletIDWithHttpInfo(walletId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List All Assets From All Wallets
     * Through this endpoint customers can obtain information about available assets in all of their wallets, regardless of the blockchain protocol or network.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAllAssetsFromAllWalletsR} and HTTP response
     */
  }, {
    key: "listAllAssetsFromAllWalletsWithHttpInfo",
    value: function listAllAssetsFromAllWalletsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
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
      var returnType = _ListAllAssetsFromAllWalletsR["default"];
      return this.apiClient.callApi('/wallet-as-a-service/wallets/all-assets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List All Assets From All Wallets
     * Through this endpoint customers can obtain information about available assets in all of their wallets, regardless of the blockchain protocol or network.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAllAssetsFromAllWalletsR}
     */
  }, {
    key: "listAllAssetsFromAllWallets",
    value: function listAllAssetsFromAllWallets(opts) {
      return this.listAllAssetsFromAllWalletsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Deposit Addresses
     * Through this endpoint customers can pull a list of Deposit/Receiving Addresses they have already generated.    {note}Please note that listing data from the same type will apply pagination on the results.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} walletId Represents the unique ID of the specific Wallet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListDepositAddressesR} and HTTP response
     */
  }, {
    key: "listDepositAddressesWithHttpInfo",
    value: function listDepositAddressesWithHttpInfo(blockchain, network, walletId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listDepositAddresses");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listDepositAddresses");
      }
      // verify the required parameter 'walletId' is set
      if (walletId === undefined || walletId === null) {
        throw new Error("Missing the required parameter 'walletId' when calling listDepositAddresses");
      }
      var pathParams = {
        'blockchain': blockchain,
        'network': network,
        'walletId': walletId
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
      var returnType = _ListDepositAddressesR["default"];
      return this.apiClient.callApi('/wallet-as-a-service/wallets/{walletId}/{blockchain}/{network}/addresses', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Deposit Addresses
     * Through this endpoint customers can pull a list of Deposit/Receiving Addresses they have already generated.    {note}Please note that listing data from the same type will apply pagination on the results.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} walletId Represents the unique ID of the specific Wallet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListDepositAddressesR}
     */
  }, {
    key: "listDepositAddresses",
    value: function listDepositAddresses(blockchain, network, walletId, opts) {
      return this.listDepositAddressesWithHttpInfo(blockchain, network, walletId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Supported Tokens
     * Through this endpoint customers can obtain information on multiple tokens at once.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListSupportedTokensR} and HTTP response
     */
  }, {
    key: "listSupportedTokensWithHttpInfo",
    value: function listSupportedTokensWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listSupportedTokens");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listSupportedTokens");
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
      var returnType = _ListSupportedTokensR["default"];
      return this.apiClient.callApi('/wallet-as-a-service/info/{blockchain}/{network}/supported-tokens', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Supported Tokens
     * Through this endpoint customers can obtain information on multiple tokens at once.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSupportedTokensR}
     */
  }, {
    key: "listSupportedTokens",
    value: function listSupportedTokens(blockchain, network, opts) {
      return this.listSupportedTokensWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Wallet Transactions
     * Through this endpoint customers can list Transactions from and to their Wallet. The data returned will include `transactionId`, `direction` of the transaction - incoming or outgoing, `amount` and more.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} walletId Represents the unique ID of the specific Wallet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListWalletTransactionsR} and HTTP response
     */
  }, {
    key: "listWalletTransactionsWithHttpInfo",
    value: function listWalletTransactionsWithHttpInfo(blockchain, network, walletId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listWalletTransactions");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listWalletTransactions");
      }
      // verify the required parameter 'walletId' is set
      if (walletId === undefined || walletId === null) {
        throw new Error("Missing the required parameter 'walletId' when calling listWalletTransactions");
      }
      var pathParams = {
        'blockchain': blockchain,
        'network': network,
        'walletId': walletId
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
      var returnType = _ListWalletTransactionsR["default"];
      return this.apiClient.callApi('/wallet-as-a-service/wallets/{walletId}/{blockchain}/{network}/transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Wallet Transactions
     * Through this endpoint customers can list Transactions from and to their Wallet. The data returned will include `transactionId`, `direction` of the transaction - incoming or outgoing, `amount` and more.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} walletId Represents the unique ID of the specific Wallet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListWalletTransactionsR}
     */
  }, {
    key: "listWalletTransactions",
    value: function listWalletTransactions(blockchain, network, walletId, opts) {
      return this.listWalletTransactionsWithHttpInfo(blockchain, network, walletId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return InformativeApi;
}();
exports["default"] = InformativeApi;