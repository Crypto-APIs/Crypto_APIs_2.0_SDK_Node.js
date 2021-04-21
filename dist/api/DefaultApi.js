"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FeatureMainnetsNotAllowedForPlan = _interopRequireDefault(require("../model/FeatureMainnetsNotAllowedForPlan"));

var _GetContractDetailsByAddressResponse = _interopRequireDefault(require("../model/GetContractDetailsByAddressResponse"));

var _InsufficientCredits = _interopRequireDefault(require("../model/InsufficientCredits"));

var _InvalidApiKey = _interopRequireDefault(require("../model/InvalidApiKey"));

var _InvalidData = _interopRequireDefault(require("../model/InvalidData"));

var _InvalidPagination = _interopRequireDefault(require("../model/InvalidPagination"));

var _InvalidRequestBodyStructure = _interopRequireDefault(require("../model/InvalidRequestBodyStructure"));

var _RequestLimitReached = _interopRequireDefault(require("../model/RequestLimitReached"));

var _UnexpectedServerError = _interopRequireDefault(require("../model/UnexpectedServerError"));

var _UnsupportedMediaType = _interopRequireDefault(require("../model/UnsupportedMediaType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Default service.
* @module api/DefaultApi
* @version 2.0.0
*/
var DefaultApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DefaultApi. 
  * @alias module:api/DefaultApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DefaultApi(apiClient) {
    _classCallCheck(this, DefaultApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get Contract Details by Address
   * This endpoint will return a smart contract details by address, this address is the address of the smart contract. It's not the same as the smart contract creator address.
   * @param {module:model/String} blockchain 
   * @param {module:model/String} network 
   * @param {String} contractAddress String identifier of the token
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetContractDetailsByAddressResponse} and HTTP response
   */


  _createClass(DefaultApi, [{
    key: "getContractDetailsByAddressWithHttpInfo",
    value: function getContractDetailsByAddressWithHttpInfo(blockchain, network, contractAddress, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getContractDetailsByAddress");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getContractDetailsByAddress");
      } // verify the required parameter 'contractAddress' is set


      if (contractAddress === undefined || contractAddress === null) {
        throw new Error("Missing the required parameter 'contractAddress' when calling getContractDetailsByAddress");
      }

      var pathParams = {
        'blockchain': blockchain,
        'network': network,
        'contractAddress': contractAddress
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetContractDetailsByAddressResponse["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/addresses/{contractAddress}/contract', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Contract Details by Address
     * This endpoint will return a smart contract details by address, this address is the address of the smart contract. It's not the same as the smart contract creator address.
     * @param {module:model/String} blockchain 
     * @param {module:model/String} network 
     * @param {String} contractAddress String identifier of the token
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetContractDetailsByAddressResponse}
     */

  }, {
    key: "getContractDetailsByAddress",
    value: function getContractDetailsByAddress(blockchain, network, contractAddress, opts) {
      return this.getContractDetailsByAddressWithHttpInfo(blockchain, network, contractAddress, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return DefaultApi;
}();

exports["default"] = DefaultApi;