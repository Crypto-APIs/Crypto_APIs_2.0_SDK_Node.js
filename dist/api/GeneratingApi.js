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
var _CreateNewMasterWallet400Response = _interopRequireDefault(require("../model/CreateNewMasterWallet400Response"));
var _CreateNewMasterWallet401Response = _interopRequireDefault(require("../model/CreateNewMasterWallet401Response"));
var _CreateNewMasterWallet403Response = _interopRequireDefault(require("../model/CreateNewMasterWallet403Response"));
var _CreateNewMasterWalletR = _interopRequireDefault(require("../model/CreateNewMasterWalletR"));
var _CreateNewMasterWalletRB = _interopRequireDefault(require("../model/CreateNewMasterWalletRB"));
var _GenerateDepositAddress400Response = _interopRequireDefault(require("../model/GenerateDepositAddress400Response"));
var _GenerateDepositAddress401Response = _interopRequireDefault(require("../model/GenerateDepositAddress401Response"));
var _GenerateDepositAddress403Response = _interopRequireDefault(require("../model/GenerateDepositAddress403Response"));
var _GenerateDepositAddressR = _interopRequireDefault(require("../model/GenerateDepositAddressR"));
var _GenerateDepositAddressRB = _interopRequireDefault(require("../model/GenerateDepositAddressRB"));
var _GetXRPRippleTransactionDetailsByTransactionID404Response = _interopRequireDefault(require("../model/GetXRPRippleTransactionDetailsByTransactionID404Response"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Generating service.
* @module api/GeneratingApi
* @version 1.13.0
*/
var GeneratingApi = /*#__PURE__*/function () {
  /**
  * Constructs a new GeneratingApi. 
  * @alias module:api/GeneratingApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function GeneratingApi(apiClient) {
    _classCallCheck(this, GeneratingApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Create New Master Wallet
   * Through this endpoint users can easily create a new Master Wallet through the API. The user provides the desired Wallet name and in return the response includes the `walletId`. That new Wallet can be additionally also backed up through the Crypto APIs Dashboard.
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @param {module:model/CreateNewMasterWalletRB} opts.createNewMasterWalletRB 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateNewMasterWalletR} and HTTP response
   */
  _createClass(GeneratingApi, [{
    key: "createNewMasterWalletWithHttpInfo",
    value: function createNewMasterWalletWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['createNewMasterWalletRB'];
      var pathParams = {};
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CreateNewMasterWalletR["default"];
      return this.apiClient.callApi('/wallet-as-a-service/wallets/generate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create New Master Wallet
     * Through this endpoint users can easily create a new Master Wallet through the API. The user provides the desired Wallet name and in return the response includes the `walletId`. That new Wallet can be additionally also backed up through the Crypto APIs Dashboard.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/CreateNewMasterWalletRB} opts.createNewMasterWalletRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateNewMasterWalletR}
     */
  }, {
    key: "createNewMasterWallet",
    value: function createNewMasterWallet(opts) {
      return this.createNewMasterWalletWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Generate Deposit Address
     * Through this endpoint customers can generate a new Receiving/Deposit Addresses into their Wallet.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} walletId Represents the unique ID of the specific Wallet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/GenerateDepositAddressRB} opts.generateDepositAddressRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GenerateDepositAddressR} and HTTP response
     */
  }, {
    key: "generateDepositAddressWithHttpInfo",
    value: function generateDepositAddressWithHttpInfo(blockchain, network, walletId, opts) {
      opts = opts || {};
      var postBody = opts['generateDepositAddressRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling generateDepositAddress");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling generateDepositAddress");
      }
      // verify the required parameter 'walletId' is set
      if (walletId === undefined || walletId === null) {
        throw new Error("Missing the required parameter 'walletId' when calling generateDepositAddress");
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
      var returnType = _GenerateDepositAddressR["default"];
      return this.apiClient.callApi('/wallet-as-a-service/wallets/{walletId}/{blockchain}/{network}/addresses', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Generate Deposit Address
     * Through this endpoint customers can generate a new Receiving/Deposit Addresses into their Wallet.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} walletId Represents the unique ID of the specific Wallet.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/GenerateDepositAddressRB} opts.generateDepositAddressRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GenerateDepositAddressR}
     */
  }, {
    key: "generateDepositAddress",
    value: function generateDepositAddress(blockchain, network, walletId, opts) {
      return this.generateDepositAddressWithHttpInfo(blockchain, network, walletId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return GeneratingApi;
}();
exports["default"] = GeneratingApi;