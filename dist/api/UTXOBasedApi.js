"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse40052"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse40152"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse402"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse40352"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse409"));

var _InlineResponse6 = _interopRequireDefault(require("../model/InlineResponse415"));

var _InlineResponse7 = _interopRequireDefault(require("../model/InlineResponse422"));

var _InlineResponse8 = _interopRequireDefault(require("../model/InlineResponse429"));

var _InlineResponse9 = _interopRequireDefault(require("../model/InlineResponse500"));

var _ListUnspentTransactionOutputsByAddressR = _interopRequireDefault(require("../model/ListUnspentTransactionOutputsByAddressR"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* UTXOBased service.
* @module api/UTXOBasedApi
* @version 1.4.0
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
   * List Unspent Transaction Outputs By Address
   * Through this endpoint customers can list their transactions' unspent outputs by `address`.
   * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
   * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
   * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListUnspentTransactionOutputsByAddressR} and HTTP response
   */


  _createClass(UTXOBasedApi, [{
    key: "listUnspentTransactionOutputsByAddressWithHttpInfo",
    value: function listUnspentTransactionOutputsByAddressWithHttpInfo(blockchain, network, address, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listUnspentTransactionOutputsByAddress");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listUnspentTransactionOutputsByAddress");
      } // verify the required parameter 'address' is set


      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listUnspentTransactionOutputsByAddress");
      }

      var pathParams = {
        'blockchain': blockchain,
        'network': network,
        'address': address
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
      var returnType = _ListUnspentTransactionOutputsByAddressR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/addresses/{address}/unspent', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Unspent Transaction Outputs By Address
     * Through this endpoint customers can list their transactions' unspent outputs by `address`.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUnspentTransactionOutputsByAddressR}
     */

  }, {
    key: "listUnspentTransactionOutputsByAddress",
    value: function listUnspentTransactionOutputsByAddress(blockchain, network, address, opts) {
      return this.listUnspentTransactionOutputsByAddressWithHttpInfo(blockchain, network, address, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return UTXOBasedApi;
}();

exports["default"] = UTXOBasedApi;