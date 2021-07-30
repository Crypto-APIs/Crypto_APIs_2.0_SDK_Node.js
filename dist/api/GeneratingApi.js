"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GenerateDepositAddressR = _interopRequireDefault(require("../model/GenerateDepositAddressR"));

var _GenerateDepositAddressRB = _interopRequireDefault(require("../model/GenerateDepositAddressRB"));

var _InsufficientCredits = _interopRequireDefault(require("../model/InsufficientCredits"));

var _InvalidApiKey = _interopRequireDefault(require("../model/InvalidApiKey"));

var _InvalidData = _interopRequireDefault(require("../model/InvalidData"));

var _InvalidPagination = _interopRequireDefault(require("../model/InvalidPagination"));

var _InvalidRequestBodyStructure = _interopRequireDefault(require("../model/InvalidRequestBodyStructure"));

var _RequestLimitReached = _interopRequireDefault(require("../model/RequestLimitReached"));

var _ResourceNotFound = _interopRequireDefault(require("../model/ResourceNotFound"));

var _UnexpectedServerError = _interopRequireDefault(require("../model/UnexpectedServerError"));

var _UnsupportedMediaType = _interopRequireDefault(require("../model/UnsupportedMediaType"));

var _WalletAsAServiceDepositAddressesLimitReached = _interopRequireDefault(require("../model/WalletAsAServiceDepositAddressesLimitReached"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Generating service.
* @module api/GeneratingApi
* @version 1.2.0
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
   * Generate Deposit Address
   * Through this endpoint customers can generate a new Receiving/Deposit Addresses into their Wallet.
   * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
   * @param {String} walletId Represents the unique ID of the specific Wallet.
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @param {module:model/GenerateDepositAddressRB} opts.generateDepositAddressRB 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GenerateDepositAddressR} and HTTP response
   */


  _createClass(GeneratingApi, [{
    key: "generateDepositAddressWithHttpInfo",
    value: function generateDepositAddressWithHttpInfo(blockchain, network, walletId, opts) {
      opts = opts || {};
      var postBody = opts['generateDepositAddressRB']; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling generateDepositAddress");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling generateDepositAddress");
      } // verify the required parameter 'walletId' is set


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
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
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