"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ConvertBitcoinCashAddress402Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress402Response"));
var _ConvertBitcoinCashAddress415Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress415Response"));
var _ConvertBitcoinCashAddress422Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress422Response"));
var _ConvertBitcoinCashAddress429Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress429Response"));
var _ConvertBitcoinCashAddress500Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress500Response"));
var _CreateCoinsTransactionFromAddressForWholeAmount400Response = _interopRequireDefault(require("../model/CreateCoinsTransactionFromAddressForWholeAmount400Response"));
var _CreateCoinsTransactionFromAddressForWholeAmount401Response = _interopRequireDefault(require("../model/CreateCoinsTransactionFromAddressForWholeAmount401Response"));
var _CreateCoinsTransactionFromAddressForWholeAmount403Response = _interopRequireDefault(require("../model/CreateCoinsTransactionFromAddressForWholeAmount403Response"));
var _CreateCoinsTransactionFromAddressForWholeAmount409Response = _interopRequireDefault(require("../model/CreateCoinsTransactionFromAddressForWholeAmount409Response"));
var _CreateCoinsTransactionFromAddressForWholeAmountR = _interopRequireDefault(require("../model/CreateCoinsTransactionFromAddressForWholeAmountR"));
var _CreateCoinsTransactionFromAddressForWholeAmountRB = _interopRequireDefault(require("../model/CreateCoinsTransactionFromAddressForWholeAmountRB"));
var _CreateCoinsTransactionRequestFromAddress400Response = _interopRequireDefault(require("../model/CreateCoinsTransactionRequestFromAddress400Response"));
var _CreateCoinsTransactionRequestFromAddress401Response = _interopRequireDefault(require("../model/CreateCoinsTransactionRequestFromAddress401Response"));
var _CreateCoinsTransactionRequestFromAddress403Response = _interopRequireDefault(require("../model/CreateCoinsTransactionRequestFromAddress403Response"));
var _CreateCoinsTransactionRequestFromAddress409Response = _interopRequireDefault(require("../model/CreateCoinsTransactionRequestFromAddress409Response"));
var _CreateCoinsTransactionRequestFromAddressR = _interopRequireDefault(require("../model/CreateCoinsTransactionRequestFromAddressR"));
var _CreateCoinsTransactionRequestFromAddressRB = _interopRequireDefault(require("../model/CreateCoinsTransactionRequestFromAddressRB"));
var _CreateCoinsTransactionRequestFromWallet400Response = _interopRequireDefault(require("../model/CreateCoinsTransactionRequestFromWallet400Response"));
var _CreateCoinsTransactionRequestFromWallet401Response = _interopRequireDefault(require("../model/CreateCoinsTransactionRequestFromWallet401Response"));
var _CreateCoinsTransactionRequestFromWallet403Response = _interopRequireDefault(require("../model/CreateCoinsTransactionRequestFromWallet403Response"));
var _CreateCoinsTransactionRequestFromWallet409Response = _interopRequireDefault(require("../model/CreateCoinsTransactionRequestFromWallet409Response"));
var _CreateCoinsTransactionRequestFromWalletR = _interopRequireDefault(require("../model/CreateCoinsTransactionRequestFromWalletR"));
var _CreateCoinsTransactionRequestFromWalletRB = _interopRequireDefault(require("../model/CreateCoinsTransactionRequestFromWalletRB"));
var _CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriority400Response = _interopRequireDefault(require("../model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriority400Response"));
var _CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriority401Response = _interopRequireDefault(require("../model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriority401Response"));
var _CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriority403Response = _interopRequireDefault(require("../model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriority403Response"));
var _CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriority409Response = _interopRequireDefault(require("../model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriority409Response"));
var _CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityR = _interopRequireDefault(require("../model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityR"));
var _CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRB = _interopRequireDefault(require("../model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRB"));
var _CreateFungibleTokensTransactionRequestFromAddress400Response = _interopRequireDefault(require("../model/CreateFungibleTokensTransactionRequestFromAddress400Response"));
var _CreateFungibleTokensTransactionRequestFromAddress401Response = _interopRequireDefault(require("../model/CreateFungibleTokensTransactionRequestFromAddress401Response"));
var _CreateFungibleTokensTransactionRequestFromAddress403Response = _interopRequireDefault(require("../model/CreateFungibleTokensTransactionRequestFromAddress403Response"));
var _CreateFungibleTokensTransactionRequestFromAddress409Response = _interopRequireDefault(require("../model/CreateFungibleTokensTransactionRequestFromAddress409Response"));
var _CreateFungibleTokensTransactionRequestFromAddressR = _interopRequireDefault(require("../model/CreateFungibleTokensTransactionRequestFromAddressR"));
var _CreateFungibleTokensTransactionRequestFromAddressRB = _interopRequireDefault(require("../model/CreateFungibleTokensTransactionRequestFromAddressRB"));
var _CreateSingleTransactionRequestFromAddressWithoutFeePriority400Response = _interopRequireDefault(require("../model/CreateSingleTransactionRequestFromAddressWithoutFeePriority400Response"));
var _CreateSingleTransactionRequestFromAddressWithoutFeePriority401Response = _interopRequireDefault(require("../model/CreateSingleTransactionRequestFromAddressWithoutFeePriority401Response"));
var _CreateSingleTransactionRequestFromAddressWithoutFeePriority403Response = _interopRequireDefault(require("../model/CreateSingleTransactionRequestFromAddressWithoutFeePriority403Response"));
var _CreateSingleTransactionRequestFromAddressWithoutFeePriority409Response = _interopRequireDefault(require("../model/CreateSingleTransactionRequestFromAddressWithoutFeePriority409Response"));
var _CreateSingleTransactionRequestFromAddressWithoutFeePriorityR = _interopRequireDefault(require("../model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityR"));
var _CreateSingleTransactionRequestFromAddressWithoutFeePriorityRB = _interopRequireDefault(require("../model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRB"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Transactions service.
* @module api/TransactionsApi
* @version 1.13.0
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
      var postBody = opts['createCoinsTransactionFromAddressForWholeAmountRB'];
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling createCoinsTransactionFromAddressForWholeAmount");
      }
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling createCoinsTransactionFromAddressForWholeAmount");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling createCoinsTransactionFromAddressForWholeAmount");
      }
      // verify the required parameter 'walletId' is set
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
     * @param {String} address Defines the specific source address for the transaction. For XRP we also support the X-address format.
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
      var postBody = opts['createCoinsTransactionRequestFromAddressRB'];
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling createCoinsTransactionRequestFromAddress");
      }
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling createCoinsTransactionRequestFromAddress");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling createCoinsTransactionRequestFromAddress");
      }
      // verify the required parameter 'walletId' is set
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
     * @param {String} address Defines the specific source address for the transaction. For XRP we also support the X-address format.
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
      var postBody = opts['createCoinsTransactionRequestFromWalletRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling createCoinsTransactionRequestFromWallet");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling createCoinsTransactionRequestFromWallet");
      }
      // verify the required parameter 'walletId' is set
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
     * Create Fungible Token Transaction Request From Address Without Fee Priority
     * Through this endpoint customers can make a single feeless token transaction on the Tron blockchain protocol. TRX transactions burn certain resources called Bandwidth and Energy. Each account has 1500 bandwidth free for use every 24 hours and more can be obtained by staking TRX. The unit price of Energy is 280 SUN and of bandwidth - 1000 SUN. If the resources are insufficient, TRX will be burned to pay for them.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} senderAddress Defines the specific source address for the transaction.
     * @param {String} walletId Defines the unique ID of the Wallet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRB} opts.createFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityR} and HTTP response
     */
  }, {
    key: "createFungibleTokenTransactionRequestFromAddressWithoutFeePriorityWithHttpInfo",
    value: function createFungibleTokenTransactionRequestFromAddressWithoutFeePriorityWithHttpInfo(blockchain, network, senderAddress, walletId, opts) {
      opts = opts || {};
      var postBody = opts['createFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling createFungibleTokenTransactionRequestFromAddressWithoutFeePriority");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling createFungibleTokenTransactionRequestFromAddressWithoutFeePriority");
      }
      // verify the required parameter 'senderAddress' is set
      if (senderAddress === undefined || senderAddress === null) {
        throw new Error("Missing the required parameter 'senderAddress' when calling createFungibleTokenTransactionRequestFromAddressWithoutFeePriority");
      }
      // verify the required parameter 'walletId' is set
      if (walletId === undefined || walletId === null) {
        throw new Error("Missing the required parameter 'walletId' when calling createFungibleTokenTransactionRequestFromAddressWithoutFeePriority");
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
      var returnType = _CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityR["default"];
      return this.apiClient.callApi('/wallet-as-a-service/wallets/{walletId}/{blockchain}/{network}/addresses/{senderAddress}/feeless-token-transaction-requests', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create Fungible Token Transaction Request From Address Without Fee Priority
     * Through this endpoint customers can make a single feeless token transaction on the Tron blockchain protocol. TRX transactions burn certain resources called Bandwidth and Energy. Each account has 1500 bandwidth free for use every 24 hours and more can be obtained by staking TRX. The unit price of Energy is 280 SUN and of bandwidth - 1000 SUN. If the resources are insufficient, TRX will be burned to pay for them.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} senderAddress Defines the specific source address for the transaction.
     * @param {String} walletId Defines the unique ID of the Wallet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRB} opts.createFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityR}
     */
  }, {
    key: "createFungibleTokenTransactionRequestFromAddressWithoutFeePriority",
    value: function createFungibleTokenTransactionRequestFromAddressWithoutFeePriority(blockchain, network, senderAddress, walletId, opts) {
      return this.createFungibleTokenTransactionRequestFromAddressWithoutFeePriorityWithHttpInfo(blockchain, network, senderAddress, walletId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create Fungible Tokens Transaction Request from Address
     * Through this endpoint users can make a single token transaction.    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} senderAddress Defines the specific source address for the transaction.
     * @param {String} walletId Defines the unique ID of the Wallet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/CreateFungibleTokensTransactionRequestFromAddressRB} opts.createFungibleTokensTransactionRequestFromAddressRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateFungibleTokensTransactionRequestFromAddressR} and HTTP response
     */
  }, {
    key: "createFungibleTokensTransactionRequestFromAddressWithHttpInfo",
    value: function createFungibleTokensTransactionRequestFromAddressWithHttpInfo(blockchain, network, senderAddress, walletId, opts) {
      opts = opts || {};
      var postBody = opts['createFungibleTokensTransactionRequestFromAddressRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling createFungibleTokensTransactionRequestFromAddress");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling createFungibleTokensTransactionRequestFromAddress");
      }
      // verify the required parameter 'senderAddress' is set
      if (senderAddress === undefined || senderAddress === null) {
        throw new Error("Missing the required parameter 'senderAddress' when calling createFungibleTokensTransactionRequestFromAddress");
      }
      // verify the required parameter 'walletId' is set
      if (walletId === undefined || walletId === null) {
        throw new Error("Missing the required parameter 'walletId' when calling createFungibleTokensTransactionRequestFromAddress");
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
      var returnType = _CreateFungibleTokensTransactionRequestFromAddressR["default"];
      return this.apiClient.callApi('/wallet-as-a-service/wallets/{walletId}/{blockchain}/{network}/addresses/{senderAddress}/token-transaction-requests', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create Fungible Tokens Transaction Request from Address
     * Through this endpoint users can make a single token transaction.    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} senderAddress Defines the specific source address for the transaction.
     * @param {String} walletId Defines the unique ID of the Wallet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/CreateFungibleTokensTransactionRequestFromAddressRB} opts.createFungibleTokensTransactionRequestFromAddressRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateFungibleTokensTransactionRequestFromAddressR}
     */
  }, {
    key: "createFungibleTokensTransactionRequestFromAddress",
    value: function createFungibleTokensTransactionRequestFromAddress(blockchain, network, senderAddress, walletId, opts) {
      return this.createFungibleTokensTransactionRequestFromAddressWithHttpInfo(blockchain, network, senderAddress, walletId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create Single Transaction Request From Address Without Fee Priority
     * Through this endpoint users can create a new single transaction request from one address to another. The difference between this endpoint and \"Create Coins Transaction Request from Address\"  is that for Tron blockchain there is no Fee Priority that defines how fast a transaction can be mined.
     * @param {String} address Defines the specific source address for the transaction.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} walletId Represents the sender's specific and unique Wallet ID of the sender.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRB} opts.createSingleTransactionRequestFromAddressWithoutFeePriorityRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityR} and HTTP response
     */
  }, {
    key: "createSingleTransactionRequestFromAddressWithoutFeePriorityWithHttpInfo",
    value: function createSingleTransactionRequestFromAddressWithoutFeePriorityWithHttpInfo(address, blockchain, network, walletId, opts) {
      opts = opts || {};
      var postBody = opts['createSingleTransactionRequestFromAddressWithoutFeePriorityRB'];
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling createSingleTransactionRequestFromAddressWithoutFeePriority");
      }
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling createSingleTransactionRequestFromAddressWithoutFeePriority");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling createSingleTransactionRequestFromAddressWithoutFeePriority");
      }
      // verify the required parameter 'walletId' is set
      if (walletId === undefined || walletId === null) {
        throw new Error("Missing the required parameter 'walletId' when calling createSingleTransactionRequestFromAddressWithoutFeePriority");
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
      var returnType = _CreateSingleTransactionRequestFromAddressWithoutFeePriorityR["default"];
      return this.apiClient.callApi('/wallet-as-a-service/wallets/{walletId}/{blockchain}/{network}/addresses/{address}/feeless-transaction-requests', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create Single Transaction Request From Address Without Fee Priority
     * Through this endpoint users can create a new single transaction request from one address to another. The difference between this endpoint and \"Create Coins Transaction Request from Address\"  is that for Tron blockchain there is no Fee Priority that defines how fast a transaction can be mined.
     * @param {String} address Defines the specific source address for the transaction.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} walletId Represents the sender's specific and unique Wallet ID of the sender.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRB} opts.createSingleTransactionRequestFromAddressWithoutFeePriorityRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityR}
     */
  }, {
    key: "createSingleTransactionRequestFromAddressWithoutFeePriority",
    value: function createSingleTransactionRequestFromAddressWithoutFeePriority(address, blockchain, network, walletId, opts) {
      return this.createSingleTransactionRequestFromAddressWithoutFeePriorityWithHttpInfo(address, blockchain, network, walletId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return TransactionsApi;
}();
exports["default"] = TransactionsApi;