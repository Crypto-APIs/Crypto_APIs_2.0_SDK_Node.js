"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateCoinsTransactionFromAddressForWholeAmountR = _interopRequireDefault(require("../model/CreateCoinsTransactionFromAddressForWholeAmountR"));

var _CreateCoinsTransactionFromAddressForWholeAmountRB = _interopRequireDefault(require("../model/CreateCoinsTransactionFromAddressForWholeAmountRB"));

var _CreateCoinsTransactionRequestFromAddressR = _interopRequireDefault(require("../model/CreateCoinsTransactionRequestFromAddressR"));

var _CreateCoinsTransactionRequestFromAddressRB = _interopRequireDefault(require("../model/CreateCoinsTransactionRequestFromAddressRB"));

var _CreateCoinsTransactionRequestFromWalletR = _interopRequireDefault(require("../model/CreateCoinsTransactionRequestFromWalletR"));

var _CreateCoinsTransactionRequestFromWalletRB = _interopRequireDefault(require("../model/CreateCoinsTransactionRequestFromWalletRB"));

var _CreateTokensTransactionRequestFromAddressR = _interopRequireDefault(require("../model/CreateTokensTransactionRequestFromAddressR"));

var _CreateTokensTransactionRequestFromAddressRB = _interopRequireDefault(require("../model/CreateTokensTransactionRequestFromAddressRB"));

var _FeatureMainnetsNotAllowedForPlan = _interopRequireDefault(require("../model/FeatureMainnetsNotAllowedForPlan"));

var _InsufficientCredits = _interopRequireDefault(require("../model/InsufficientCredits"));

var _InvalidApiKey = _interopRequireDefault(require("../model/InvalidApiKey"));

var _InvalidPagination = _interopRequireDefault(require("../model/InvalidPagination"));

var _InvalidRequestBodyStructure = _interopRequireDefault(require("../model/InvalidRequestBodyStructure"));

var _RequestLimitReached = _interopRequireDefault(require("../model/RequestLimitReached"));

var _UnexpectedServerError = _interopRequireDefault(require("../model/UnexpectedServerError"));

var _UnsupportedMediaType = _interopRequireDefault(require("../model/UnsupportedMediaType"));

var _WalletAsAServiceAddressBalanceNotEnough = _interopRequireDefault(require("../model/WalletAsAServiceAddressBalanceNotEnough"));

var _WalletAsAServiceNoDepositAddressesFound = _interopRequireDefault(require("../model/WalletAsAServiceNoDepositAddressesFound"));

var _WalletAsAServiceTokenNotSupported = _interopRequireDefault(require("../model/WalletAsAServiceTokenNotSupported"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Transactions service.
* @module api/TransactionsApi
* @version 1.3.0
*/
var TransactionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TransactionsApi. 
  * @alias module:api/TransactionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TransactionsApi(apiClient) {
    _classCallCheck(this, TransactionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create Coins Transaction From Address For Whole Amount
   * Through this endpoint customers can create a new transaction from address for **coins** specifically, which will transfer over the entire available amount.
   * @param {String} address Defines the source address.
   * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
   * @param {String} walletId Represents the sender's specific and unique Wallet ID of the sender.
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @param {module:model/CreateCoinsTransactionFromAddressForWholeAmountRB} opts.createCoinsTransactionFromAddressForWholeAmountRB 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateCoinsTransactionFromAddressForWholeAmountR} and HTTP response
   */


  _createClass(TransactionsApi, [{
    key: "createCoinsTransactionFromAddressForWholeAmountWithHttpInfo",
    value: function createCoinsTransactionFromAddressForWholeAmountWithHttpInfo(address, blockchain, network, walletId, opts) {
      opts = opts || {};
      var postBody = opts['createCoinsTransactionFromAddressForWholeAmountRB']; // verify the required parameter 'address' is set

      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling createCoinsTransactionFromAddressForWholeAmount");
      } // verify the required parameter 'blockchain' is set


      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling createCoinsTransactionFromAddressForWholeAmount");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling createCoinsTransactionFromAddressForWholeAmount");
      } // verify the required parameter 'walletId' is set


      if (walletId === undefined || walletId === null) {
        throw new Error("Missing the required parameter 'walletId' when calling createCoinsTransactionFromAddressForWholeAmount");
      }

      var pathParams = {
        'address': address,
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CreateCoinsTransactionFromAddressForWholeAmountR["default"];
      return this.apiClient.callApi('/wallet-as-a-service/wallets/{walletId}/{blockchain}/{network}/addresses/{address}/all-transaction-requests', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create Coins Transaction From Address For Whole Amount
     * Through this endpoint customers can create a new transaction from address for **coins** specifically, which will transfer over the entire available amount.
     * @param {String} address Defines the source address.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} walletId Represents the sender's specific and unique Wallet ID of the sender.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/CreateCoinsTransactionFromAddressForWholeAmountRB} opts.createCoinsTransactionFromAddressForWholeAmountRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateCoinsTransactionFromAddressForWholeAmountR}
     */

  }, {
    key: "createCoinsTransactionFromAddressForWholeAmount",
    value: function createCoinsTransactionFromAddressForWholeAmount(address, blockchain, network, walletId, opts) {
      return this.createCoinsTransactionFromAddressForWholeAmountWithHttpInfo(address, blockchain, network, walletId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create Coins Transaction Request from Address
     * Through this endpoint users can create a new single transaction request from one address to another.
     * @param {String} address Defines the specific source address for the transaction.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} walletId Represents the sender's specific and unique Wallet ID of the sender.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/CreateCoinsTransactionRequestFromAddressRB} opts.createCoinsTransactionRequestFromAddressRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateCoinsTransactionRequestFromAddressR} and HTTP response
     */

  }, {
    key: "createCoinsTransactionRequestFromAddressWithHttpInfo",
    value: function createCoinsTransactionRequestFromAddressWithHttpInfo(address, blockchain, network, walletId, opts) {
      opts = opts || {};
      var postBody = opts['createCoinsTransactionRequestFromAddressRB']; // verify the required parameter 'address' is set

      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling createCoinsTransactionRequestFromAddress");
      } // verify the required parameter 'blockchain' is set


      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling createCoinsTransactionRequestFromAddress");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling createCoinsTransactionRequestFromAddress");
      } // verify the required parameter 'walletId' is set


      if (walletId === undefined || walletId === null) {
        throw new Error("Missing the required parameter 'walletId' when calling createCoinsTransactionRequestFromAddress");
      }

      var pathParams = {
        'address': address,
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CreateCoinsTransactionRequestFromAddressR["default"];
      return this.apiClient.callApi('/wallet-as-a-service/wallets/{walletId}/{blockchain}/{network}/addresses/{address}/transaction-requests', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create Coins Transaction Request from Address
     * Through this endpoint users can create a new single transaction request from one address to another.
     * @param {String} address Defines the specific source address for the transaction.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} walletId Represents the sender's specific and unique Wallet ID of the sender.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/CreateCoinsTransactionRequestFromAddressRB} opts.createCoinsTransactionRequestFromAddressRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateCoinsTransactionRequestFromAddressR}
     */

  }, {
    key: "createCoinsTransactionRequestFromAddress",
    value: function createCoinsTransactionRequestFromAddress(address, blockchain, network, walletId, opts) {
      return this.createCoinsTransactionRequestFromAddressWithHttpInfo(address, blockchain, network, walletId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create Coins Transaction Request from Wallet
     * Through this endpoint users can create a new transaction request from the entire Wallet instead from just a specific address. This endpoint can generate transactions from multiple to multiple addresses.    {warning}This is available **only** for UTXO-based protocols such as Bitcoin, Bitcoin Cash, Litecoin, etc. It **is not** available for Account-based protocols like Ethereum.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} walletId Represents the sender's specific and unique Wallet ID of the sender.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/CreateCoinsTransactionRequestFromWalletRB} opts.createCoinsTransactionRequestFromWalletRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateCoinsTransactionRequestFromWalletR} and HTTP response
     */

  }, {
    key: "createCoinsTransactionRequestFromWalletWithHttpInfo",
    value: function createCoinsTransactionRequestFromWalletWithHttpInfo(blockchain, network, walletId, opts) {
      opts = opts || {};
      var postBody = opts['createCoinsTransactionRequestFromWalletRB']; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling createCoinsTransactionRequestFromWallet");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling createCoinsTransactionRequestFromWallet");
      } // verify the required parameter 'walletId' is set


      if (walletId === undefined || walletId === null) {
        throw new Error("Missing the required parameter 'walletId' when calling createCoinsTransactionRequestFromWallet");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CreateCoinsTransactionRequestFromWalletR["default"];
      return this.apiClient.callApi('/wallet-as-a-service/wallets/{walletId}/{blockchain}/{network}/transaction-requests', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create Coins Transaction Request from Wallet
     * Through this endpoint users can create a new transaction request from the entire Wallet instead from just a specific address. This endpoint can generate transactions from multiple to multiple addresses.    {warning}This is available **only** for UTXO-based protocols such as Bitcoin, Bitcoin Cash, Litecoin, etc. It **is not** available for Account-based protocols like Ethereum.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} walletId Represents the sender's specific and unique Wallet ID of the sender.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/CreateCoinsTransactionRequestFromWalletRB} opts.createCoinsTransactionRequestFromWalletRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateCoinsTransactionRequestFromWalletR}
     */

  }, {
    key: "createCoinsTransactionRequestFromWallet",
    value: function createCoinsTransactionRequestFromWallet(blockchain, network, walletId, opts) {
      return this.createCoinsTransactionRequestFromWalletWithHttpInfo(blockchain, network, walletId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create Tokens Transaction Request from Address
     * Through this endpoint users can make a single token transaction.    {warning}This applies only to **fungible** tokens, **not** NFTs (non-fungible tokens).{/warning}    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} senderAddress Defines the specific source address for the transaction.
     * @param {String} walletId Defines the unique ID of the Wallet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/CreateTokensTransactionRequestFromAddressRB} opts.createTokensTransactionRequestFromAddressRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateTokensTransactionRequestFromAddressR} and HTTP response
     */

  }, {
    key: "createTokensTransactionRequestFromAddressWithHttpInfo",
    value: function createTokensTransactionRequestFromAddressWithHttpInfo(blockchain, network, senderAddress, walletId, opts) {
      opts = opts || {};
      var postBody = opts['createTokensTransactionRequestFromAddressRB']; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling createTokensTransactionRequestFromAddress");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling createTokensTransactionRequestFromAddress");
      } // verify the required parameter 'senderAddress' is set


      if (senderAddress === undefined || senderAddress === null) {
        throw new Error("Missing the required parameter 'senderAddress' when calling createTokensTransactionRequestFromAddress");
      } // verify the required parameter 'walletId' is set


      if (walletId === undefined || walletId === null) {
        throw new Error("Missing the required parameter 'walletId' when calling createTokensTransactionRequestFromAddress");
      }

      var pathParams = {
        'blockchain': blockchain,
        'network': network,
        'senderAddress': senderAddress,
        'walletId': walletId
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CreateTokensTransactionRequestFromAddressR["default"];
      return this.apiClient.callApi('/wallet-as-a-service/wallets/{walletId}/{blockchain}/{network}/addresses/{senderAddress}/token-transaction-requests', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create Tokens Transaction Request from Address
     * Through this endpoint users can make a single token transaction.    {warning}This applies only to **fungible** tokens, **not** NFTs (non-fungible tokens).{/warning}    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} senderAddress Defines the specific source address for the transaction.
     * @param {String} walletId Defines the unique ID of the Wallet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/CreateTokensTransactionRequestFromAddressRB} opts.createTokensTransactionRequestFromAddressRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateTokensTransactionRequestFromAddressR}
     */

  }, {
    key: "createTokensTransactionRequestFromAddress",
    value: function createTokensTransactionRequestFromAddress(blockchain, network, senderAddress, walletId, opts) {
      return this.createTokensTransactionRequestFromAddressWithHttpInfo(blockchain, network, senderAddress, walletId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TransactionsApi;
}();

exports["default"] = TransactionsApi;