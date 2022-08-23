"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GenerateDepositAddress400Response = _interopRequireDefault(require("../model/GenerateDepositAddress400Response"));

var _GenerateDepositAddress401Response = _interopRequireDefault(require("../model/GenerateDepositAddress401Response"));

var _GenerateDepositAddress403Response = _interopRequireDefault(require("../model/GenerateDepositAddress403Response"));

var _GenerateDepositAddressR = _interopRequireDefault(require("../model/GenerateDepositAddressR"));

var _GenerateDepositAddressRB = _interopRequireDefault(require("../model/GenerateDepositAddressRB"));

var _GetAddressDetails402Response = _interopRequireDefault(require("../model/GetAddressDetails402Response"));

var _GetAddressDetails409Response = _interopRequireDefault(require("../model/GetAddressDetails409Response"));

var _GetAddressDetails415Response = _interopRequireDefault(require("../model/GetAddressDetails415Response"));

var _GetAddressDetails422Response = _interopRequireDefault(require("../model/GetAddressDetails422Response"));

var _GetAddressDetails429Response = _interopRequireDefault(require("../model/GetAddressDetails429Response"));

var _GetAddressDetails500Response = _interopRequireDefault(require("../model/GetAddressDetails500Response"));

var _GetXRPRippleTransactionDetailsByTransactionID404Response = _interopRequireDefault(require("../model/GetXRPRippleTransactionDetailsByTransactionID404Response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Generating service.
* @module api/GeneratingApi
* @version 1.7.3
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
   * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
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