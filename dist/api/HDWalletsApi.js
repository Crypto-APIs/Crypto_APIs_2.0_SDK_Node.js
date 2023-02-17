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
var _DeriveAndSyncNewChangeAddresses400Response = _interopRequireDefault(require("../model/DeriveAndSyncNewChangeAddresses400Response"));
var _DeriveAndSyncNewChangeAddresses401Response = _interopRequireDefault(require("../model/DeriveAndSyncNewChangeAddresses401Response"));
var _DeriveAndSyncNewChangeAddresses403Response = _interopRequireDefault(require("../model/DeriveAndSyncNewChangeAddresses403Response"));
var _DeriveAndSyncNewChangeAddressesR = _interopRequireDefault(require("../model/DeriveAndSyncNewChangeAddressesR"));
var _DeriveAndSyncNewChangeAddressesRB = _interopRequireDefault(require("../model/DeriveAndSyncNewChangeAddressesRB"));
var _DeriveAndSyncNewReceivingAddresses400Response = _interopRequireDefault(require("../model/DeriveAndSyncNewReceivingAddresses400Response"));
var _DeriveAndSyncNewReceivingAddresses401Response = _interopRequireDefault(require("../model/DeriveAndSyncNewReceivingAddresses401Response"));
var _DeriveAndSyncNewReceivingAddresses403Response = _interopRequireDefault(require("../model/DeriveAndSyncNewReceivingAddresses403Response"));
var _DeriveAndSyncNewReceivingAddressesR = _interopRequireDefault(require("../model/DeriveAndSyncNewReceivingAddressesR"));
var _DeriveAndSyncNewReceivingAddressesRB = _interopRequireDefault(require("../model/DeriveAndSyncNewReceivingAddressesRB"));
var _GetHDWalletXPubYPubZPubAssets400Response = _interopRequireDefault(require("../model/GetHDWalletXPubYPubZPubAssets400Response"));
var _GetHDWalletXPubYPubZPubAssets401Response = _interopRequireDefault(require("../model/GetHDWalletXPubYPubZPubAssets401Response"));
var _GetHDWalletXPubYPubZPubAssets403Response = _interopRequireDefault(require("../model/GetHDWalletXPubYPubZPubAssets403Response"));
var _GetHDWalletXPubYPubZPubAssets422Response = _interopRequireDefault(require("../model/GetHDWalletXPubYPubZPubAssets422Response"));
var _GetHDWalletXPubYPubZPubAssetsR = _interopRequireDefault(require("../model/GetHDWalletXPubYPubZPubAssetsR"));
var _GetHDWalletXPubYPubZPubDetails400Response = _interopRequireDefault(require("../model/GetHDWalletXPubYPubZPubDetails400Response"));
var _GetHDWalletXPubYPubZPubDetails401Response = _interopRequireDefault(require("../model/GetHDWalletXPubYPubZPubDetails401Response"));
var _GetHDWalletXPubYPubZPubDetails403Response = _interopRequireDefault(require("../model/GetHDWalletXPubYPubZPubDetails403Response"));
var _GetHDWalletXPubYPubZPubDetails422Response = _interopRequireDefault(require("../model/GetHDWalletXPubYPubZPubDetails422Response"));
var _GetHDWalletXPubYPubZPubDetailsR = _interopRequireDefault(require("../model/GetHDWalletXPubYPubZPubDetailsR"));
var _ListHDWalletXPubYPubZPubTransactions400Response = _interopRequireDefault(require("../model/ListHDWalletXPubYPubZPubTransactions400Response"));
var _ListHDWalletXPubYPubZPubTransactions401Response = _interopRequireDefault(require("../model/ListHDWalletXPubYPubZPubTransactions401Response"));
var _ListHDWalletXPubYPubZPubTransactions403Response = _interopRequireDefault(require("../model/ListHDWalletXPubYPubZPubTransactions403Response"));
var _ListHDWalletXPubYPubZPubTransactions422Response = _interopRequireDefault(require("../model/ListHDWalletXPubYPubZPubTransactions422Response"));
var _ListHDWalletXPubYPubZPubTransactionsR = _interopRequireDefault(require("../model/ListHDWalletXPubYPubZPubTransactionsR"));
var _ListHDWalletXPubYPubZPubUTXOs400Response = _interopRequireDefault(require("../model/ListHDWalletXPubYPubZPubUTXOs400Response"));
var _ListHDWalletXPubYPubZPubUTXOs401Response = _interopRequireDefault(require("../model/ListHDWalletXPubYPubZPubUTXOs401Response"));
var _ListHDWalletXPubYPubZPubUTXOs403Response = _interopRequireDefault(require("../model/ListHDWalletXPubYPubZPubUTXOs403Response"));
var _ListHDWalletXPubYPubZPubUTXOs422Response = _interopRequireDefault(require("../model/ListHDWalletXPubYPubZPubUTXOs422Response"));
var _ListHDWalletXPubYPubZPubUTXOsR = _interopRequireDefault(require("../model/ListHDWalletXPubYPubZPubUTXOsR"));
var _ListSyncedAddresses400Response = _interopRequireDefault(require("../model/ListSyncedAddresses400Response"));
var _ListSyncedAddresses401Response = _interopRequireDefault(require("../model/ListSyncedAddresses401Response"));
var _ListSyncedAddresses403Response = _interopRequireDefault(require("../model/ListSyncedAddresses403Response"));
var _ListSyncedAddressesR = _interopRequireDefault(require("../model/ListSyncedAddressesR"));
var _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPub400Response = _interopRequireDefault(require("../model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPub400Response"));
var _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPub401Response = _interopRequireDefault(require("../model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPub401Response"));
var _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPub403Response = _interopRequireDefault(require("../model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPub403Response"));
var _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubR = _interopRequireDefault(require("../model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubR"));
var _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRB = _interopRequireDefault(require("../model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRB"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPub400Response = _interopRequireDefault(require("../model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPub400Response"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPub401Response = _interopRequireDefault(require("../model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPub401Response"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPub403Response = _interopRequireDefault(require("../model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPub403Response"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubR = _interopRequireDefault(require("../model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubR"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRB = _interopRequireDefault(require("../model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRB"));
var _SyncHDWalletXPubYPubZPub400Response = _interopRequireDefault(require("../model/SyncHDWalletXPubYPubZPub400Response"));
var _SyncHDWalletXPubYPubZPub401Response = _interopRequireDefault(require("../model/SyncHDWalletXPubYPubZPub401Response"));
var _SyncHDWalletXPubYPubZPub403Response = _interopRequireDefault(require("../model/SyncHDWalletXPubYPubZPub403Response"));
var _SyncHDWalletXPubYPubZPub409Response = _interopRequireDefault(require("../model/SyncHDWalletXPubYPubZPub409Response"));
var _SyncHDWalletXPubYPubZPub422Response = _interopRequireDefault(require("../model/SyncHDWalletXPubYPubZPub422Response"));
var _SyncHDWalletXPubYPubZPubR = _interopRequireDefault(require("../model/SyncHDWalletXPubYPubZPubR"));
var _SyncHDWalletXPubYPubZPubRB = _interopRequireDefault(require("../model/SyncHDWalletXPubYPubZPubRB"));
var _SyncNewHDWalletXPubYPubZPub400Response = _interopRequireDefault(require("../model/SyncNewHDWalletXPubYPubZPub400Response"));
var _SyncNewHDWalletXPubYPubZPub401Response = _interopRequireDefault(require("../model/SyncNewHDWalletXPubYPubZPub401Response"));
var _SyncNewHDWalletXPubYPubZPub403Response = _interopRequireDefault(require("../model/SyncNewHDWalletXPubYPubZPub403Response"));
var _SyncNewHDWalletXPubYPubZPub409Response = _interopRequireDefault(require("../model/SyncNewHDWalletXPubYPubZPub409Response"));
var _SyncNewHDWalletXPubYPubZPub422Response = _interopRequireDefault(require("../model/SyncNewHDWalletXPubYPubZPub422Response"));
var _SyncNewHDWalletXPubYPubZPubR = _interopRequireDefault(require("../model/SyncNewHDWalletXPubYPubZPubR"));
var _SyncNewHDWalletXPubYPubZPubRB = _interopRequireDefault(require("../model/SyncNewHDWalletXPubYPubZPubRB"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* HDWallets service.
* @module api/HDWalletsApi
* @version 1.13.0
*/
var HDWalletsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new HDWalletsApi. 
  * @alias module:api/HDWalletsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function HDWalletsApi(apiClient) {
    _classCallCheck(this, HDWalletsApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Derive And Sync New Change Addresses
   * Through this endpoint users can derive 100 change addresses, starting from the last index we have data for, which are then added to the xPub, subscribed for syncing, and start recording data. If no data is available, it will start from index 0. We use type P2WPKH.
   * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @param {module:model/DeriveAndSyncNewChangeAddressesRB} opts.deriveAndSyncNewChangeAddressesRB 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeriveAndSyncNewChangeAddressesR} and HTTP response
   */
  _createClass(HDWalletsApi, [{
    key: "deriveAndSyncNewChangeAddressesWithHttpInfo",
    value: function deriveAndSyncNewChangeAddressesWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['deriveAndSyncNewChangeAddressesRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling deriveAndSyncNewChangeAddresses");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling deriveAndSyncNewChangeAddresses");
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
      var returnType = _DeriveAndSyncNewChangeAddressesR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/hd/derive-sync-change', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Derive And Sync New Change Addresses
     * Through this endpoint users can derive 100 change addresses, starting from the last index we have data for, which are then added to the xPub, subscribed for syncing, and start recording data. If no data is available, it will start from index 0. We use type P2WPKH.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/DeriveAndSyncNewChangeAddressesRB} opts.deriveAndSyncNewChangeAddressesRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeriveAndSyncNewChangeAddressesR}
     */
  }, {
    key: "deriveAndSyncNewChangeAddresses",
    value: function deriveAndSyncNewChangeAddresses(blockchain, network, opts) {
      return this.deriveAndSyncNewChangeAddressesWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Derive And Sync New Receiving Addresses
     * Through this endpoint users can derive 100 receiving addresses, starting from the last index we have data for, which are then added to the xPub, subscribed for syncing, and start recording data. If no data is available, it will start from index 0. We use type P2WPKH.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/DeriveAndSyncNewReceivingAddressesRB} opts.deriveAndSyncNewReceivingAddressesRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeriveAndSyncNewReceivingAddressesR} and HTTP response
     */
  }, {
    key: "deriveAndSyncNewReceivingAddressesWithHttpInfo",
    value: function deriveAndSyncNewReceivingAddressesWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['deriveAndSyncNewReceivingAddressesRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling deriveAndSyncNewReceivingAddresses");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling deriveAndSyncNewReceivingAddresses");
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
      var returnType = _DeriveAndSyncNewReceivingAddressesR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/hd/derive-and-sync', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Derive And Sync New Receiving Addresses
     * Through this endpoint users can derive 100 receiving addresses, starting from the last index we have data for, which are then added to the xPub, subscribed for syncing, and start recording data. If no data is available, it will start from index 0. We use type P2WPKH.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/DeriveAndSyncNewReceivingAddressesRB} opts.deriveAndSyncNewReceivingAddressesRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeriveAndSyncNewReceivingAddressesR}
     */
  }, {
    key: "deriveAndSyncNewReceivingAddresses",
    value: function deriveAndSyncNewReceivingAddresses(blockchain, network, opts) {
      return this.deriveAndSyncNewReceivingAddressesWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get HD Wallet (xPub, yPub, zPub) Assets
     * This endpoint will return details on assets we support for a specified from the customer extended public key (xPub). These could be cryptocurrencies, fungible or non-fungible (NFT) tokens. Each asset has a unique identifier - assetId, and a unique symbol in the form of a string, e.g. \"USDT\".
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} extendedPublicKey Defines the account extended publicly known key which is used to derive all child public keys.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/String} opts.derivation The way how the HD walled derives, for example when the type is ACCOUNT, it derives change and receive addresses while when the type is BIP32 it derives directly.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetHDWalletXPubYPubZPubAssetsR} and HTTP response
     */
  }, {
    key: "getHDWalletXPubYPubZPubAssetsWithHttpInfo",
    value: function getHDWalletXPubYPubZPubAssetsWithHttpInfo(blockchain, extendedPublicKey, network, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getHDWalletXPubYPubZPubAssets");
      }
      // verify the required parameter 'extendedPublicKey' is set
      if (extendedPublicKey === undefined || extendedPublicKey === null) {
        throw new Error("Missing the required parameter 'extendedPublicKey' when calling getHDWalletXPubYPubZPubAssets");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getHDWalletXPubYPubZPubAssets");
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
      var returnType = _GetHDWalletXPubYPubZPubAssetsR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/hd/{extendedPublicKey}/assets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get HD Wallet (xPub, yPub, zPub) Assets
     * This endpoint will return details on assets we support for a specified from the customer extended public key (xPub). These could be cryptocurrencies, fungible or non-fungible (NFT) tokens. Each asset has a unique identifier - assetId, and a unique symbol in the form of a string, e.g. \"USDT\".
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} extendedPublicKey Defines the account extended publicly known key which is used to derive all child public keys.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/String} opts.derivation The way how the HD walled derives, for example when the type is ACCOUNT, it derives change and receive addresses while when the type is BIP32 it derives directly.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetHDWalletXPubYPubZPubAssetsR}
     */
  }, {
    key: "getHDWalletXPubYPubZPubAssets",
    value: function getHDWalletXPubYPubZPubAssets(blockchain, extendedPublicKey, network, opts) {
      return this.getHDWalletXPubYPubZPubAssetsWithHttpInfo(blockchain, extendedPublicKey, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get HD Wallet (xPub, yPub, zPub) Details
     * HD wallet details is useful endpoint to get the most important data about HD wallet without the need to do a lot of calculations, once the HD Wallet is synced using Sync endpoint we keep it up to date and we calculate these details in advance.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} extendedPublicKey Defines the account extended publicly known key which is used to derive all child public keys.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/String} opts.derivation The way how the HD walled derives, for example when the type is ACCOUNT, it derives change and receive addresses while when the type is BIP32 it derives directly.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetHDWalletXPubYPubZPubDetailsR} and HTTP response
     */
  }, {
    key: "getHDWalletXPubYPubZPubDetailsWithHttpInfo",
    value: function getHDWalletXPubYPubZPubDetailsWithHttpInfo(blockchain, extendedPublicKey, network, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getHDWalletXPubYPubZPubDetails");
      }
      // verify the required parameter 'extendedPublicKey' is set
      if (extendedPublicKey === undefined || extendedPublicKey === null) {
        throw new Error("Missing the required parameter 'extendedPublicKey' when calling getHDWalletXPubYPubZPubDetails");
      }
      // verify the required parameter 'network' is set
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
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
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
     * This endpoint will list HD Wallet transactions.
     * @param {module:model/String} blockchain Represents the specific blockchain.
     * @param {String} extendedPublicKey Defines the master public key (xPub) of the account.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
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
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listHDWalletXPubYPubZPubTransactions");
      }
      // verify the required parameter 'extendedPublicKey' is set
      if (extendedPublicKey === undefined || extendedPublicKey === null) {
        throw new Error("Missing the required parameter 'extendedPublicKey' when calling listHDWalletXPubYPubZPubTransactions");
      }
      // verify the required parameter 'network' is set
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
     * This endpoint will list HD Wallet transactions.
     * @param {module:model/String} blockchain Represents the specific blockchain.
     * @param {String} extendedPublicKey Defines the master public key (xPub) of the account.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
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
     * List HD Wallet (xPub, yPub, zPub) UTXOs
     * Through this endpoint you can list HD wallet's UTXOs (Unspent Transaction Outputs) by providing extended public key of an already synced HD wallet.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} extendedPublicKey Defines the account extended publicly known key which is used to derive all child public keys.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/String} opts.derivation The way how the HD walled derives, for example when the type is ACCOUNT, it derives change and receive addresses while when the type is BIP32 it derives directly.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListHDWalletXPubYPubZPubUTXOsR} and HTTP response
     */
  }, {
    key: "listHDWalletXPubYPubZPubUTXOsWithHttpInfo",
    value: function listHDWalletXPubYPubZPubUTXOsWithHttpInfo(blockchain, extendedPublicKey, network, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listHDWalletXPubYPubZPubUTXOs");
      }
      // verify the required parameter 'extendedPublicKey' is set
      if (extendedPublicKey === undefined || extendedPublicKey === null) {
        throw new Error("Missing the required parameter 'extendedPublicKey' when calling listHDWalletXPubYPubZPubUTXOs");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listHDWalletXPubYPubZPubUTXOs");
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
      var returnType = _ListHDWalletXPubYPubZPubUTXOsR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/hd/{extendedPublicKey}/utxos', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List HD Wallet (xPub, yPub, zPub) UTXOs
     * Through this endpoint you can list HD wallet's UTXOs (Unspent Transaction Outputs) by providing extended public key of an already synced HD wallet.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} extendedPublicKey Defines the account extended publicly known key which is used to derive all child public keys.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/String} opts.derivation The way how the HD walled derives, for example when the type is ACCOUNT, it derives change and receive addresses while when the type is BIP32 it derives directly.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListHDWalletXPubYPubZPubUTXOsR}
     */
  }, {
    key: "listHDWalletXPubYPubZPubUTXOs",
    value: function listHDWalletXPubYPubZPubUTXOs(blockchain, extendedPublicKey, network, opts) {
      return this.listHDWalletXPubYPubZPubUTXOsWithHttpInfo(blockchain, extendedPublicKey, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Synced Addresses
     * Through this endpoint users can list all addresses that Crypto APIs has synced for a specific xPub. This includes previous and current/new xPubs, what addresses we’ve synced for them, etc.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} extendedPublicKey Defines the account extended publicly known key which is used to derive all child public keys.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/String} opts.addressFormat Defines the address format value.
     * @param {Boolean} opts.isChangeAddress Defines if the address is change addres or not. (default to true)
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListSyncedAddressesR} and HTTP response
     */
  }, {
    key: "listSyncedAddressesWithHttpInfo",
    value: function listSyncedAddressesWithHttpInfo(blockchain, extendedPublicKey, network, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listSyncedAddresses");
      }
      // verify the required parameter 'extendedPublicKey' is set
      if (extendedPublicKey === undefined || extendedPublicKey === null) {
        throw new Error("Missing the required parameter 'extendedPublicKey' when calling listSyncedAddresses");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listSyncedAddresses");
      }
      var pathParams = {
        'blockchain': blockchain,
        'extendedPublicKey': extendedPublicKey,
        'network': network
      };
      var queryParams = {
        'context': opts['context'],
        'addressFormat': opts['addressFormat'],
        'isChangeAddress': opts['isChangeAddress'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListSyncedAddressesR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/hd/{extendedPublicKey}/synced-addresses', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Synced Addresses
     * Through this endpoint users can list all addresses that Crypto APIs has synced for a specific xPub. This includes previous and current/new xPubs, what addresses we’ve synced for them, etc.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} extendedPublicKey Defines the account extended publicly known key which is used to derive all child public keys.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/String} opts.addressFormat Defines the address format value.
     * @param {Boolean} opts.isChangeAddress Defines if the address is change addres or not. (default to true)
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSyncedAddressesR}
     */
  }, {
    key: "listSyncedAddresses",
    value: function listSyncedAddresses(blockchain, extendedPublicKey, network, opts) {
      return this.listSyncedAddressesWithHttpInfo(blockchain, extendedPublicKey, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Prepare A Transaction From An Address In HD Wallet (xPub, yPub, zPub)
     * Through this endpoint users can prepare a transaction for signing from a synced with Crypto APIs address from the specific xPub. This endpoint applies to all supported account-based blockchain protocols, e.g. Ethereum, BSC, etc.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"goerli\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRB} opts.prepareATransactionFromAnAddressInHDWalletXPubYPubZPubRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubR} and HTTP response
     */
  }, {
    key: "prepareATransactionFromAnAddressInHDWalletXPubYPubZPubWithHttpInfo",
    value: function prepareATransactionFromAnAddressInHDWalletXPubYPubZPubWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['prepareATransactionFromAnAddressInHDWalletXPubYPubZPubRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling prepareATransactionFromAnAddressInHDWalletXPubYPubZPub");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling prepareATransactionFromAnAddressInHDWalletXPubYPubZPub");
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
      var returnType = _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/transactions/prepare-account-based-transaction', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Prepare A Transaction From An Address In HD Wallet (xPub, yPub, zPub)
     * Through this endpoint users can prepare a transaction for signing from a synced with Crypto APIs address from the specific xPub. This endpoint applies to all supported account-based blockchain protocols, e.g. Ethereum, BSC, etc.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"goerli\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRB} opts.prepareATransactionFromAnAddressInHDWalletXPubYPubZPubRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubR}
     */
  }, {
    key: "prepareATransactionFromAnAddressInHDWalletXPubYPubZPub",
    value: function prepareATransactionFromAnAddressInHDWalletXPubYPubZPub(blockchain, network, opts) {
      return this.prepareATransactionFromAnAddressInHDWalletXPubYPubZPubWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Prepare A UTXO-Based Transaction From HD Wallet (xPub, yPub, zPub)
     * Through the “Prepare a UTXO-based transaction from xPub” endpoint users can prepare a transaction for signing from all synced with Crypto APIs addresses for the specific xPub. This is based on the `selectionStrategy` and the addresses’ balances. In the case a user has an address not synced with Crypto APIs, it will not be included. This endpoint applies to all supported UTXO-based blockchain protocols, e.g. Bitcoin, Litecoin, etc.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRB} opts.prepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubR} and HTTP response
     */
  }, {
    key: "prepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubWithHttpInfo",
    value: function prepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['prepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling prepareAUTXOBasedTransactionFromHDWalletXPubYPubZPub");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling prepareAUTXOBasedTransactionFromHDWalletXPubYPubZPub");
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
      var returnType = _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/transactions/prepare-utxo-transaction', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Prepare A UTXO-Based Transaction From HD Wallet (xPub, yPub, zPub)
     * Through the “Prepare a UTXO-based transaction from xPub” endpoint users can prepare a transaction for signing from all synced with Crypto APIs addresses for the specific xPub. This is based on the `selectionStrategy` and the addresses’ balances. In the case a user has an address not synced with Crypto APIs, it will not be included. This endpoint applies to all supported UTXO-based blockchain protocols, e.g. Bitcoin, Litecoin, etc.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRB} opts.prepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubR}
     */
  }, {
    key: "prepareAUTXOBasedTransactionFromHDWalletXPubYPubZPub",
    value: function prepareAUTXOBasedTransactionFromHDWalletXPubYPubZPub(blockchain, network, opts) {
      return this.prepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Sync HD Wallet (xPub, yPub, zPub)
     * HD wallets usually have a lot of addresses and transactions, getting the data on demand is a heavy operation. That's why we have created this feature, to be able to get HD wallet details or transactions this HD wallet must be synced first. In addition to the initial sync we keep updating the synced HD wallets all the time.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/SyncHDWalletXPubYPubZPubRB} opts.syncHDWalletXPubYPubZPubRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SyncHDWalletXPubYPubZPubR} and HTTP response
     */
  }, {
    key: "syncHDWalletXPubYPubZPubWithHttpInfo",
    value: function syncHDWalletXPubYPubZPubWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['syncHDWalletXPubYPubZPubRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling syncHDWalletXPubYPubZPub");
      }
      // verify the required parameter 'network' is set
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
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
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

    /**
     * Sync New HD Wallet (xPub, yPub, zPub)
     * Through this endpoint users can add a brand new xPub to the Crypto APIs system to be ready for deriving. Unlike our other similar endpoint “Sync HD Wallet (xPub, yPub, zPub)”, this endpoint does not create new addresses nor syncs old data.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/SyncNewHDWalletXPubYPubZPubRB} opts.syncNewHDWalletXPubYPubZPubRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SyncNewHDWalletXPubYPubZPubR} and HTTP response
     */
  }, {
    key: "syncNewHDWalletXPubYPubZPubWithHttpInfo",
    value: function syncNewHDWalletXPubYPubZPubWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['syncNewHDWalletXPubYPubZPubRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling syncNewHDWalletXPubYPubZPub");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling syncNewHDWalletXPubYPubZPub");
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
      var returnType = _SyncNewHDWalletXPubYPubZPubR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/hd/sync-new', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Sync New HD Wallet (xPub, yPub, zPub)
     * Through this endpoint users can add a brand new xPub to the Crypto APIs system to be ready for deriving. Unlike our other similar endpoint “Sync HD Wallet (xPub, yPub, zPub)”, this endpoint does not create new addresses nor syncs old data.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/SyncNewHDWalletXPubYPubZPubRB} opts.syncNewHDWalletXPubYPubZPubRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SyncNewHDWalletXPubYPubZPubR}
     */
  }, {
    key: "syncNewHDWalletXPubYPubZPub",
    value: function syncNewHDWalletXPubYPubZPub(blockchain, network, opts) {
      return this.syncNewHDWalletXPubYPubZPubWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return HDWalletsApi;
}();
exports["default"] = HDWalletsApi;