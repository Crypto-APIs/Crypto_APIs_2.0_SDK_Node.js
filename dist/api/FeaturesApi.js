"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BroadcastLocallySignedTransactionR = _interopRequireDefault(require("../model/BroadcastLocallySignedTransactionR"));

var _BroadcastLocallySignedTransactionRB = _interopRequireDefault(require("../model/BroadcastLocallySignedTransactionRB"));

var _GetEIP1559FeeRecommendationsR = _interopRequireDefault(require("../model/GetEIP1559FeeRecommendationsR"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse40083"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse40084"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse40085"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse40183"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse40184"));

var _InlineResponse6 = _interopRequireDefault(require("../model/InlineResponse40185"));

var _InlineResponse7 = _interopRequireDefault(require("../model/InlineResponse402"));

var _InlineResponse8 = _interopRequireDefault(require("../model/InlineResponse40383"));

var _InlineResponse9 = _interopRequireDefault(require("../model/InlineResponse40384"));

var _InlineResponse10 = _interopRequireDefault(require("../model/InlineResponse40385"));

var _InlineResponse11 = _interopRequireDefault(require("../model/InlineResponse4041"));

var _InlineResponse12 = _interopRequireDefault(require("../model/InlineResponse409"));

var _InlineResponse13 = _interopRequireDefault(require("../model/InlineResponse40917"));

var _InlineResponse14 = _interopRequireDefault(require("../model/InlineResponse415"));

var _InlineResponse15 = _interopRequireDefault(require("../model/InlineResponse422"));

var _InlineResponse16 = _interopRequireDefault(require("../model/InlineResponse429"));

var _InlineResponse17 = _interopRequireDefault(require("../model/InlineResponse500"));

var _ValidateAddressR = _interopRequireDefault(require("../model/ValidateAddressR"));

var _ValidateAddressRB = _interopRequireDefault(require("../model/ValidateAddressRB"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Features service.
* @module api/FeaturesApi
* @version 1.4.0
*/
var FeaturesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new FeaturesApi. 
  * @alias module:api/FeaturesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function FeaturesApi(apiClient) {
    _classCallCheck(this, FeaturesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Broadcast Locally Signed Transaction
   * Through this endpoint customers can broadcast transactions that have been already signed locally. Instead of using a node for broadcasting a signed transaction users can use this endpoint. We then keep the user posted about the status by sending you a callback with a success or failure status.    {warning}This can be prepared and signed **only** locally, not through the API. We can provide support only for the process of broadcasting.{/warning}
   * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @param {module:model/BroadcastLocallySignedTransactionRB} opts.broadcastLocallySignedTransactionRB 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BroadcastLocallySignedTransactionR} and HTTP response
   */


  _createClass(FeaturesApi, [{
    key: "broadcastLocallySignedTransactionWithHttpInfo",
    value: function broadcastLocallySignedTransactionWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['broadcastLocallySignedTransactionRB']; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling broadcastLocallySignedTransaction");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling broadcastLocallySignedTransaction");
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
      var returnType = _BroadcastLocallySignedTransactionR["default"];
      return this.apiClient.callApi('/blockchain-tools/{blockchain}/{network}/transactions/broadcast', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Broadcast Locally Signed Transaction
     * Through this endpoint customers can broadcast transactions that have been already signed locally. Instead of using a node for broadcasting a signed transaction users can use this endpoint. We then keep the user posted about the status by sending you a callback with a success or failure status.    {warning}This can be prepared and signed **only** locally, not through the API. We can provide support only for the process of broadcasting.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/BroadcastLocallySignedTransactionRB} opts.broadcastLocallySignedTransactionRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BroadcastLocallySignedTransactionR}
     */

  }, {
    key: "broadcastLocallySignedTransaction",
    value: function broadcastLocallySignedTransaction(blockchain, network, opts) {
      return this.broadcastLocallySignedTransactionWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get EIP 1559 Fee Recommendations
     * Through this endpoint customers can obtain fee recommendations specifically for EIP 1559.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetEIP1559FeeRecommendationsR} and HTTP response
     */

  }, {
    key: "getEIP1559FeeRecommendationsWithHttpInfo",
    value: function getEIP1559FeeRecommendationsWithHttpInfo(network, blockchain, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getEIP1559FeeRecommendations");
      } // verify the required parameter 'blockchain' is set


      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getEIP1559FeeRecommendations");
      }

      var pathParams = {
        'network': network,
        'blockchain': blockchain
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetEIP1559FeeRecommendationsR["default"];
      return this.apiClient.callApi('/blockchain-tools/{blockchain}/{network}/fees/eip1559', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get EIP 1559 Fee Recommendations
     * Through this endpoint customers can obtain fee recommendations specifically for EIP 1559.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetEIP1559FeeRecommendationsR}
     */

  }, {
    key: "getEIP1559FeeRecommendations",
    value: function getEIP1559FeeRecommendations(network, blockchain, opts) {
      return this.getEIP1559FeeRecommendationsWithHttpInfo(network, blockchain, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Validate Address
     * This endpoint checks user public addresses whether they are valid or not.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/ValidateAddressRB} opts.validateAddressRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ValidateAddressR} and HTTP response
     */

  }, {
    key: "validateAddressWithHttpInfo",
    value: function validateAddressWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['validateAddressRB']; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling validateAddress");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling validateAddress");
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
      var returnType = _ValidateAddressR["default"];
      return this.apiClient.callApi('/blockchain-tools/{blockchain}/{network}/addresses/validate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Validate Address
     * This endpoint checks user public addresses whether they are valid or not.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/ValidateAddressRB} opts.validateAddressRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ValidateAddressR}
     */

  }, {
    key: "validateAddress",
    value: function validateAddress(blockchain, network, opts) {
      return this.validateAddressWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return FeaturesApi;
}();

exports["default"] = FeaturesApi;