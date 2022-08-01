"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateAutomaticCoinsForwarding400Response = _interopRequireDefault(require("../model/CreateAutomaticCoinsForwarding400Response"));

var _CreateAutomaticCoinsForwarding401Response = _interopRequireDefault(require("../model/CreateAutomaticCoinsForwarding401Response"));

var _CreateAutomaticCoinsForwarding403Response = _interopRequireDefault(require("../model/CreateAutomaticCoinsForwarding403Response"));

var _CreateAutomaticCoinsForwarding409Response = _interopRequireDefault(require("../model/CreateAutomaticCoinsForwarding409Response"));

var _CreateAutomaticCoinsForwardingR = _interopRequireDefault(require("../model/CreateAutomaticCoinsForwardingR"));

var _CreateAutomaticCoinsForwardingRB = _interopRequireDefault(require("../model/CreateAutomaticCoinsForwardingRB"));

var _DeleteAutomaticCoinsForwarding400Response = _interopRequireDefault(require("../model/DeleteAutomaticCoinsForwarding400Response"));

var _DeleteAutomaticCoinsForwarding401Response = _interopRequireDefault(require("../model/DeleteAutomaticCoinsForwarding401Response"));

var _DeleteAutomaticCoinsForwarding403Response = _interopRequireDefault(require("../model/DeleteAutomaticCoinsForwarding403Response"));

var _DeleteAutomaticCoinsForwardingR = _interopRequireDefault(require("../model/DeleteAutomaticCoinsForwardingR"));

var _GetAddressDetails402Response = _interopRequireDefault(require("../model/GetAddressDetails402Response"));

var _GetAddressDetails409Response = _interopRequireDefault(require("../model/GetAddressDetails409Response"));

var _GetAddressDetails415Response = _interopRequireDefault(require("../model/GetAddressDetails415Response"));

var _GetAddressDetails422Response = _interopRequireDefault(require("../model/GetAddressDetails422Response"));

var _GetAddressDetails429Response = _interopRequireDefault(require("../model/GetAddressDetails429Response"));

var _GetAddressDetails500Response = _interopRequireDefault(require("../model/GetAddressDetails500Response"));

var _GetXRPRippleTransactionDetailsByTransactionID404Response = _interopRequireDefault(require("../model/GetXRPRippleTransactionDetailsByTransactionID404Response"));

var _ListCoinsForwardingAutomations400Response = _interopRequireDefault(require("../model/ListCoinsForwardingAutomations400Response"));

var _ListCoinsForwardingAutomations401Response = _interopRequireDefault(require("../model/ListCoinsForwardingAutomations401Response"));

var _ListCoinsForwardingAutomations403Response = _interopRequireDefault(require("../model/ListCoinsForwardingAutomations403Response"));

var _ListCoinsForwardingAutomationsR = _interopRequireDefault(require("../model/ListCoinsForwardingAutomationsR"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* AutomaticCoinsForwarding service.
* @module api/AutomaticCoinsForwardingApi
* @version 1.7.2
*/
var AutomaticCoinsForwardingApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AutomaticCoinsForwardingApi. 
  * @alias module:api/AutomaticCoinsForwardingApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AutomaticCoinsForwardingApi(apiClient) {
    _classCallCheck(this, AutomaticCoinsForwardingApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create Automatic Coins Forwarding
   * Through this endpoint customers can set up an automatic forwarding function specifically for coins (**not** tokens). They can have a `toAddress` which is essentially the main address and the destination for the automatic coins forwarding.     There is also a `minimumTransferAmount` which only when reached will then trigger the forwarding. Through this the customer can save from fees.    Moreover, `feePriority` can be also set,  which defines how quickly to move the coins once they are received. The higher priority, the larger the fee will be. It can be \"SLOW\", \"STANDARD\" or \"FAST\".    The response of this endpoint contains an attribute `fromAddress` which can be used as a deposit address. Any funds received by this address will be automatically forwarded to `toAddress` based on what the customer has set for the automation.    For this automatic forwarding the customer can set a callback subscription.    {warning}The subscription will work for all incoming transactions until it is deleted. There is no need to do that for every transaction.{/warning}    {note}This endpoint generates a new `fromAddress` each time.{/note}
   * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @param {module:model/CreateAutomaticCoinsForwardingRB} opts.createAutomaticCoinsForwardingRB 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateAutomaticCoinsForwardingR} and HTTP response
   */


  _createClass(AutomaticCoinsForwardingApi, [{
    key: "createAutomaticCoinsForwardingWithHttpInfo",
    value: function createAutomaticCoinsForwardingWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['createAutomaticCoinsForwardingRB']; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling createAutomaticCoinsForwarding");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling createAutomaticCoinsForwarding");
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
      var returnType = _CreateAutomaticCoinsForwardingR["default"];
      return this.apiClient.callApi('/blockchain-automations/{blockchain}/{network}/coins-forwarding/automations', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create Automatic Coins Forwarding
     * Through this endpoint customers can set up an automatic forwarding function specifically for coins (**not** tokens). They can have a `toAddress` which is essentially the main address and the destination for the automatic coins forwarding.     There is also a `minimumTransferAmount` which only when reached will then trigger the forwarding. Through this the customer can save from fees.    Moreover, `feePriority` can be also set,  which defines how quickly to move the coins once they are received. The higher priority, the larger the fee will be. It can be \"SLOW\", \"STANDARD\" or \"FAST\".    The response of this endpoint contains an attribute `fromAddress` which can be used as a deposit address. Any funds received by this address will be automatically forwarded to `toAddress` based on what the customer has set for the automation.    For this automatic forwarding the customer can set a callback subscription.    {warning}The subscription will work for all incoming transactions until it is deleted. There is no need to do that for every transaction.{/warning}    {note}This endpoint generates a new `fromAddress` each time.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/CreateAutomaticCoinsForwardingRB} opts.createAutomaticCoinsForwardingRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateAutomaticCoinsForwardingR}
     */

  }, {
    key: "createAutomaticCoinsForwarding",
    value: function createAutomaticCoinsForwarding(blockchain, network, opts) {
      return this.createAutomaticCoinsForwardingWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete Automatic Coins Forwarding
     * Through this endpoint customers can delete a forwarding function they have set for **coins** (**not** tokens).    By setting a `fromAddress` and a `toAddress`, and specifying the amount, coins can be transferred between addresses.     A `feePriority` will be returned which represents the fee priority of the automation whether it is \"SLOW\", \"STANDARD\" OR \"FAST\".    {warning}The subscription will work for all incoming transactions until it is deleted. There is no need to do that for every transaction.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} referenceId Represents a unique ID used to reference the specific callback subscription.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteAutomaticCoinsForwardingR} and HTTP response
     */

  }, {
    key: "deleteAutomaticCoinsForwardingWithHttpInfo",
    value: function deleteAutomaticCoinsForwardingWithHttpInfo(blockchain, network, referenceId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling deleteAutomaticCoinsForwarding");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling deleteAutomaticCoinsForwarding");
      } // verify the required parameter 'referenceId' is set


      if (referenceId === undefined || referenceId === null) {
        throw new Error("Missing the required parameter 'referenceId' when calling deleteAutomaticCoinsForwarding");
      }

      var pathParams = {
        'blockchain': blockchain,
        'network': network,
        'referenceId': referenceId
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DeleteAutomaticCoinsForwardingR["default"];
      return this.apiClient.callApi('/blockchain-automations/{blockchain}/{network}/coins-forwarding/automations/{referenceId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete Automatic Coins Forwarding
     * Through this endpoint customers can delete a forwarding function they have set for **coins** (**not** tokens).    By setting a `fromAddress` and a `toAddress`, and specifying the amount, coins can be transferred between addresses.     A `feePriority` will be returned which represents the fee priority of the automation whether it is \"SLOW\", \"STANDARD\" OR \"FAST\".    {warning}The subscription will work for all incoming transactions until it is deleted. There is no need to do that for every transaction.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} referenceId Represents a unique ID used to reference the specific callback subscription.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteAutomaticCoinsForwardingR}
     */

  }, {
    key: "deleteAutomaticCoinsForwarding",
    value: function deleteAutomaticCoinsForwarding(blockchain, network, referenceId, opts) {
      return this.deleteAutomaticCoinsForwardingWithHttpInfo(blockchain, network, referenceId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Coins Forwarding Automations
     * Through this endpoint customers can list all of their **coins** forwarding automations (**not** tokens).    Customers can set up automatic forwarding functions for coins by setting a `fromAddress` and a `toAddress`, and specifying the amount that can be transferred between addresses.     A `feePriority` will be returned which represents the fee priority of the automation whether it is \"SLOW\", \"STANDARD\" OR \"FAST\".    {warning}The subscription will work for all transactions until it is deleted. There is no need to do that for every transaction.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListCoinsForwardingAutomationsR} and HTTP response
     */

  }, {
    key: "listCoinsForwardingAutomationsWithHttpInfo",
    value: function listCoinsForwardingAutomationsWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listCoinsForwardingAutomations");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listCoinsForwardingAutomations");
      }

      var pathParams = {
        'blockchain': blockchain,
        'network': network
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
      var returnType = _ListCoinsForwardingAutomationsR["default"];
      return this.apiClient.callApi('/blockchain-automations/{blockchain}/{network}/coins-forwarding/automations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Coins Forwarding Automations
     * Through this endpoint customers can list all of their **coins** forwarding automations (**not** tokens).    Customers can set up automatic forwarding functions for coins by setting a `fromAddress` and a `toAddress`, and specifying the amount that can be transferred between addresses.     A `feePriority` will be returned which represents the fee priority of the automation whether it is \"SLOW\", \"STANDARD\" OR \"FAST\".    {warning}The subscription will work for all transactions until it is deleted. There is no need to do that for every transaction.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCoinsForwardingAutomationsR}
     */

  }, {
    key: "listCoinsForwardingAutomations",
    value: function listCoinsForwardingAutomations(blockchain, network, opts) {
      return this.listCoinsForwardingAutomationsWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return AutomaticCoinsForwardingApi;
}();

exports["default"] = AutomaticCoinsForwardingApi;