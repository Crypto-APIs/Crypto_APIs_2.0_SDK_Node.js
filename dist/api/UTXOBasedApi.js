"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AlreadyExists = _interopRequireDefault(require("../model/AlreadyExists"));

var _FeatureMainnetsNotAllowedForPlan = _interopRequireDefault(require("../model/FeatureMainnetsNotAllowedForPlan"));

var _GetHDWalletXPubYPubZPubDetailsR = _interopRequireDefault(require("../model/GetHDWalletXPubYPubZPubDetailsR"));

var _InsufficientCredits = _interopRequireDefault(require("../model/InsufficientCredits"));

var _InvalidApiKey = _interopRequireDefault(require("../model/InvalidApiKey"));

var _InvalidData = _interopRequireDefault(require("../model/InvalidData"));

var _InvalidXpub = _interopRequireDefault(require("../model/InvalidXpub"));

var _ListHDWalletXPubYPubZPubTransactionsR = _interopRequireDefault(require("../model/ListHDWalletXPubYPubZPubTransactionsR"));

var _RequestLimitReached = _interopRequireDefault(require("../model/RequestLimitReached"));

var _SyncHDWalletXPubYPubZPubR = _interopRequireDefault(require("../model/SyncHDWalletXPubYPubZPubR"));

var _SyncHDWalletXPubYPubZPubRB = _interopRequireDefault(require("../model/SyncHDWalletXPubYPubZPubRB"));

var _UnexpectedServerError = _interopRequireDefault(require("../model/UnexpectedServerError"));

var _UnsupportedMediaType = _interopRequireDefault(require("../model/UnsupportedMediaType"));

var _XpubNotSynced = _interopRequireDefault(require("../model/XpubNotSynced"));

var _XpubSyncInProgress = _interopRequireDefault(require("../model/XpubSyncInProgress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* UTXOBased service.
* @module api/UTXOBasedApi
* @version 1.1.0
*/
var UTXOBasedApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UTXOBasedApi. 
  * @alias module:api/UTXOBasedApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UTXOBasedApi(apiClient) {
    _classCallCheck(this, UTXOBasedApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get HD Wallet (xPub, yPub, zPub) Details
   * HD wallet details is useful endpoint to get the most important data about HD wallet without the need to do a lot of calculations, once the HD Wallet is synced using Sync endpoint we keep it up to date and we calculate these details in advance.
   * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param {String} extendedPublicKey Defines the account extended publicly known key which is used to derive all child public keys.
   * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @param {module:model/String} opts.derivation The way how the HD walled derives, for example when the type is ACCOUNT, it derives change and receive addresses while when the type is BIP32 it derives directly.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetHDWalletXPubYPubZPubDetailsR} and HTTP response
   */


  _createClass(UTXOBasedApi, [{
    key: "getHDWalletXPubYPubZPubDetailsWithHttpInfo",
    value: function getHDWalletXPubYPubZPubDetailsWithHttpInfo(blockchain, extendedPublicKey, network, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getHDWalletXPubYPubZPubDetails");
      } // verify the required parameter 'extendedPublicKey' is set


      if (extendedPublicKey === undefined || extendedPublicKey === null) {
        throw new Error("Missing the required parameter 'extendedPublicKey' when calling getHDWalletXPubYPubZPubDetails");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getHDWalletXPubYPubZPubDetails");
      }

      var pathParams = {
        'blockchain': blockchain,
        'extendedPublicKey': extendedPublicKey,
        'network': network
      };
      var queryParams = {
        'context': opts['context'],
        'derivation': opts['derivation']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetHDWalletXPubYPubZPubDetailsR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/hd/{extendedPublicKey}/details', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get HD Wallet (xPub, yPub, zPub) Details
     * HD wallet details is useful endpoint to get the most important data about HD wallet without the need to do a lot of calculations, once the HD Wallet is synced using Sync endpoint we keep it up to date and we calculate these details in advance.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} extendedPublicKey Defines the account extended publicly known key which is used to derive all child public keys.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/String} opts.derivation The way how the HD walled derives, for example when the type is ACCOUNT, it derives change and receive addresses while when the type is BIP32 it derives directly.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetHDWalletXPubYPubZPubDetailsR}
     */

  }, {
    key: "getHDWalletXPubYPubZPubDetails",
    value: function getHDWalletXPubYPubZPubDetails(blockchain, extendedPublicKey, network, opts) {
      return this.getHDWalletXPubYPubZPubDetailsWithHttpInfo(blockchain, extendedPublicKey, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List HD Wallet (xPub, yPub, zPub) Transactions
     * This endpoint will list HD Wallet transactions.    {note}Please note that listing data from the same type will apply pagination on the results.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain.
     * @param {String} extendedPublicKey Defines the master public key (xPub) of the account.
     * @param {module:model/String} network Represents the specific network.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/String} opts.derivation The way how the HD walled derives, for example when the type is ACCOUNT, it derives change and receive addresses while when the type is BIP32 it derives directly.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListHDWalletXPubYPubZPubTransactionsR} and HTTP response
     */

  }, {
    key: "listHDWalletXPubYPubZPubTransactionsWithHttpInfo",
    value: function listHDWalletXPubYPubZPubTransactionsWithHttpInfo(blockchain, extendedPublicKey, network, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listHDWalletXPubYPubZPubTransactions");
      } // verify the required parameter 'extendedPublicKey' is set


      if (extendedPublicKey === undefined || extendedPublicKey === null) {
        throw new Error("Missing the required parameter 'extendedPublicKey' when calling listHDWalletXPubYPubZPubTransactions");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listHDWalletXPubYPubZPubTransactions");
      }

      var pathParams = {
        'blockchain': blockchain,
        'extendedPublicKey': extendedPublicKey,
        'network': network
      };
      var queryParams = {
        'context': opts['context'],
        'derivation': opts['derivation'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListHDWalletXPubYPubZPubTransactionsR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/hd/{extendedPublicKey}/transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List HD Wallet (xPub, yPub, zPub) Transactions
     * This endpoint will list HD Wallet transactions.    {note}Please note that listing data from the same type will apply pagination on the results.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain.
     * @param {String} extendedPublicKey Defines the master public key (xPub) of the account.
     * @param {module:model/String} network Represents the specific network.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/String} opts.derivation The way how the HD walled derives, for example when the type is ACCOUNT, it derives change and receive addresses while when the type is BIP32 it derives directly.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListHDWalletXPubYPubZPubTransactionsR}
     */

  }, {
    key: "listHDWalletXPubYPubZPubTransactions",
    value: function listHDWalletXPubYPubZPubTransactions(blockchain, extendedPublicKey, network, opts) {
      return this.listHDWalletXPubYPubZPubTransactionsWithHttpInfo(blockchain, extendedPublicKey, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Sync HD Wallet (xPub, yPub, zPub)
     * HD wallets usually have a lot of addresses and transactions, getting the data on demand is a heavy operation. That's why we have created this feature, to be able to get HD wallet details or transactions this HD wallet must be synced first. In addition to the initial sync we keep updating the synced HD wallets all the time.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/SyncHDWalletXPubYPubZPubRB} opts.syncHDWalletXPubYPubZPubRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SyncHDWalletXPubYPubZPubR} and HTTP response
     */

  }, {
    key: "syncHDWalletXPubYPubZPubWithHttpInfo",
    value: function syncHDWalletXPubYPubZPubWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['syncHDWalletXPubYPubZPubRB']; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling syncHDWalletXPubYPubZPub");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling syncHDWalletXPubYPubZPub");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SyncHDWalletXPubYPubZPubR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/hd/sync', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Sync HD Wallet (xPub, yPub, zPub)
     * HD wallets usually have a lot of addresses and transactions, getting the data on demand is a heavy operation. That's why we have created this feature, to be able to get HD wallet details or transactions this HD wallet must be synced first. In addition to the initial sync we keep updating the synced HD wallets all the time.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/SyncHDWalletXPubYPubZPubRB} opts.syncHDWalletXPubYPubZPubRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SyncHDWalletXPubYPubZPubR}
     */

  }, {
    key: "syncHDWalletXPubYPubZPub",
    value: function syncHDWalletXPubYPubZPub(blockchain, network, opts) {
      return this.syncHDWalletXPubYPubZPubWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return UTXOBasedApi;
}();

exports["default"] = UTXOBasedApi;