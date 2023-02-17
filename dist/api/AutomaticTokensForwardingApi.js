"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AddTokensToExistingFromAddress400Response = _interopRequireDefault(require("../model/AddTokensToExistingFromAddress400Response"));
var _AddTokensToExistingFromAddress401Response = _interopRequireDefault(require("../model/AddTokensToExistingFromAddress401Response"));
var _AddTokensToExistingFromAddress403Response = _interopRequireDefault(require("../model/AddTokensToExistingFromAddress403Response"));
var _AddTokensToExistingFromAddressR = _interopRequireDefault(require("../model/AddTokensToExistingFromAddressR"));
var _AddTokensToExistingFromAddressRB = _interopRequireDefault(require("../model/AddTokensToExistingFromAddressRB"));
var _ConvertBitcoinCashAddress402Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress402Response"));
var _ConvertBitcoinCashAddress409Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress409Response"));
var _ConvertBitcoinCashAddress415Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress415Response"));
var _ConvertBitcoinCashAddress422Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress422Response"));
var _ConvertBitcoinCashAddress429Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress429Response"));
var _ConvertBitcoinCashAddress500Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress500Response"));
var _CreateAutomaticTokensForwarding400Response = _interopRequireDefault(require("../model/CreateAutomaticTokensForwarding400Response"));
var _CreateAutomaticTokensForwarding401Response = _interopRequireDefault(require("../model/CreateAutomaticTokensForwarding401Response"));
var _CreateAutomaticTokensForwarding403Response = _interopRequireDefault(require("../model/CreateAutomaticTokensForwarding403Response"));
var _CreateAutomaticTokensForwardingR = _interopRequireDefault(require("../model/CreateAutomaticTokensForwardingR"));
var _CreateAutomaticTokensForwardingRB = _interopRequireDefault(require("../model/CreateAutomaticTokensForwardingRB"));
var _DeleteAutomaticTokensForwarding400Response = _interopRequireDefault(require("../model/DeleteAutomaticTokensForwarding400Response"));
var _DeleteAutomaticTokensForwarding401Response = _interopRequireDefault(require("../model/DeleteAutomaticTokensForwarding401Response"));
var _DeleteAutomaticTokensForwarding403Response = _interopRequireDefault(require("../model/DeleteAutomaticTokensForwarding403Response"));
var _DeleteAutomaticTokensForwardingR = _interopRequireDefault(require("../model/DeleteAutomaticTokensForwardingR"));
var _GetFeeAddressDetails400Response = _interopRequireDefault(require("../model/GetFeeAddressDetails400Response"));
var _GetFeeAddressDetails401Response = _interopRequireDefault(require("../model/GetFeeAddressDetails401Response"));
var _GetFeeAddressDetails403Response = _interopRequireDefault(require("../model/GetFeeAddressDetails403Response"));
var _GetFeeAddressDetailsR = _interopRequireDefault(require("../model/GetFeeAddressDetailsR"));
var _GetXRPRippleTransactionDetailsByTransactionID404Response = _interopRequireDefault(require("../model/GetXRPRippleTransactionDetailsByTransactionID404Response"));
var _ListTokensForwardingAutomations400Response = _interopRequireDefault(require("../model/ListTokensForwardingAutomations400Response"));
var _ListTokensForwardingAutomations401Response = _interopRequireDefault(require("../model/ListTokensForwardingAutomations401Response"));
var _ListTokensForwardingAutomations403Response = _interopRequireDefault(require("../model/ListTokensForwardingAutomations403Response"));
var _ListTokensForwardingAutomationsR = _interopRequireDefault(require("../model/ListTokensForwardingAutomationsR"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* AutomaticTokensForwarding service.
* @module api/AutomaticTokensForwardingApi
* @version 1.13.0
*/
var AutomaticTokensForwardingApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AutomaticTokensForwardingApi. 
  * @alias module:api/AutomaticTokensForwardingApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AutomaticTokensForwardingApi(apiClient) {
    _classCallCheck(this, AutomaticTokensForwardingApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Add Tokens To Existing fromAddress
   * Through this endpoint customers can add **Automatic Tokens forwardings** to an already existing `fromAddress`. Unlike the \"Create Automatic Tokens Forwarding\" endpoint, where the `fromAddress` is generated each time, with this endpoint customers can add an automation from another token to one and the same `fromAddress`.    The `fromAddress` can be used as a deposit address. Any funds received by this address will be automatically forwarded to `toAddress` based on what the customer has set for the automation. The  `toAddress` is essentially the main address and destination for the automatic tokens forwarding.    There is also a `minimumTransferAmount` which only when reached will then trigger the forwarding. Through this the customer can save from fees.    Moreover, `feePriority` can be also set,  which defines how quickly to move the tokens once they are received. The higher priority, the larger the fee will be. It can be \"SLOW\", \"STANDARD\" or \"FAST\".    For this automatic forwarding the customer can set a callback subscription.    {warning}Currently we support fungible tokens (ERC-20) **only**, NFTs (ERC-721) are **not** supported.{/warning}    {warning}The subscription will work for all incoming transactions until it is deleted. There is no need to do that for every transaction.{/warning}
   * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @param {module:model/AddTokensToExistingFromAddressRB} opts.addTokensToExistingFromAddressRB 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AddTokensToExistingFromAddressR} and HTTP response
   */
  _createClass(AutomaticTokensForwardingApi, [{
    key: "addTokensToExistingFromAddressWithHttpInfo",
    value: function addTokensToExistingFromAddressWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['addTokensToExistingFromAddressRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling addTokensToExistingFromAddress");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling addTokensToExistingFromAddress");
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
      var returnType = _AddTokensToExistingFromAddressR["default"];
      return this.apiClient.callApi('/blockchain-automations/{blockchain}/{network}/tokens-forwarding/automations/add-token', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Add Tokens To Existing fromAddress
     * Through this endpoint customers can add **Automatic Tokens forwardings** to an already existing `fromAddress`. Unlike the \"Create Automatic Tokens Forwarding\" endpoint, where the `fromAddress` is generated each time, with this endpoint customers can add an automation from another token to one and the same `fromAddress`.    The `fromAddress` can be used as a deposit address. Any funds received by this address will be automatically forwarded to `toAddress` based on what the customer has set for the automation. The  `toAddress` is essentially the main address and destination for the automatic tokens forwarding.    There is also a `minimumTransferAmount` which only when reached will then trigger the forwarding. Through this the customer can save from fees.    Moreover, `feePriority` can be also set,  which defines how quickly to move the tokens once they are received. The higher priority, the larger the fee will be. It can be \"SLOW\", \"STANDARD\" or \"FAST\".    For this automatic forwarding the customer can set a callback subscription.    {warning}Currently we support fungible tokens (ERC-20) **only**, NFTs (ERC-721) are **not** supported.{/warning}    {warning}The subscription will work for all incoming transactions until it is deleted. There is no need to do that for every transaction.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/AddTokensToExistingFromAddressRB} opts.addTokensToExistingFromAddressRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AddTokensToExistingFromAddressR}
     */
  }, {
    key: "addTokensToExistingFromAddress",
    value: function addTokensToExistingFromAddress(blockchain, network, opts) {
      return this.addTokensToExistingFromAddressWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create Automatic Tokens Forwarding
     * Through this endpoint customers can set up an automatic forwarding function specifically for tokens (**not** coins). They can have a `toAddress` which is essentially the main address and the destination for the automatic tokens forwarding.     There is also a `minimumTransferAmount` which only when reached will then trigger the forwarding. Through this the customer can save from fees.    Moreover, `feePriority` can be also set,  which defines how quickly to move the tokens once they are received. The higher priority, the larger the fee will be. It can be \"SLOW\", \"STANDARD\" or \"FAST\".    The response of this endpoint contains an attribute `fromAddress` which can be used as a deposit address. Any funds received by this address will be automatically forwarded to `toAddress` based on what the customer has set for the automation.    For this automatic forwarding the customer can set a callback subscription.    {warning}Currently we support fungible tokens (ERC-20) **only**, NFTs (ERC-721) are **not** supported.{/warning}    {warning}The subscription will work for all incoming transactions until it is deleted. There is no need to do that for every transaction.{/warning}    {note}This endpoint generates a new `fromAddress` each time.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/CreateAutomaticTokensForwardingRB} opts.createAutomaticTokensForwardingRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateAutomaticTokensForwardingR} and HTTP response
     */
  }, {
    key: "createAutomaticTokensForwardingWithHttpInfo",
    value: function createAutomaticTokensForwardingWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['createAutomaticTokensForwardingRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling createAutomaticTokensForwarding");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling createAutomaticTokensForwarding");
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
      var returnType = _CreateAutomaticTokensForwardingR["default"];
      return this.apiClient.callApi('/blockchain-automations/{blockchain}/{network}/tokens-forwarding/automations', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create Automatic Tokens Forwarding
     * Through this endpoint customers can set up an automatic forwarding function specifically for tokens (**not** coins). They can have a `toAddress` which is essentially the main address and the destination for the automatic tokens forwarding.     There is also a `minimumTransferAmount` which only when reached will then trigger the forwarding. Through this the customer can save from fees.    Moreover, `feePriority` can be also set,  which defines how quickly to move the tokens once they are received. The higher priority, the larger the fee will be. It can be \"SLOW\", \"STANDARD\" or \"FAST\".    The response of this endpoint contains an attribute `fromAddress` which can be used as a deposit address. Any funds received by this address will be automatically forwarded to `toAddress` based on what the customer has set for the automation.    For this automatic forwarding the customer can set a callback subscription.    {warning}Currently we support fungible tokens (ERC-20) **only**, NFTs (ERC-721) are **not** supported.{/warning}    {warning}The subscription will work for all incoming transactions until it is deleted. There is no need to do that for every transaction.{/warning}    {note}This endpoint generates a new `fromAddress` each time.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/CreateAutomaticTokensForwardingRB} opts.createAutomaticTokensForwardingRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateAutomaticTokensForwardingR}
     */
  }, {
    key: "createAutomaticTokensForwarding",
    value: function createAutomaticTokensForwarding(blockchain, network, opts) {
      return this.createAutomaticTokensForwardingWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete Automatic Tokens Forwarding
     * Through this endpoint customers can delete a forwarding function they have set for **tokens** (**not** coins).    By setting a `fromAddress` and a `toAddress`, and specifying the amount, tokens can be transferred between addresses.     A `feePriority` will be returned which represents the fee priority of the automation whether it is \"SLOW\", \"STANDARD\" OR \"FAST\".    {warning}Currently we support fungible tokens (ERC-20) **only**, NFTs (ERC-721) are **not** supported.{/warning}    {warning}The subscription will work for all incoming transactions until it is deleted. There is no need to do that for every transaction.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} referenceId Represents a unique ID used to reference the specific callback subscription.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteAutomaticTokensForwardingR} and HTTP response
     */
  }, {
    key: "deleteAutomaticTokensForwardingWithHttpInfo",
    value: function deleteAutomaticTokensForwardingWithHttpInfo(blockchain, network, referenceId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling deleteAutomaticTokensForwarding");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling deleteAutomaticTokensForwarding");
      }
      // verify the required parameter 'referenceId' is set
      if (referenceId === undefined || referenceId === null) {
        throw new Error("Missing the required parameter 'referenceId' when calling deleteAutomaticTokensForwarding");
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
      var returnType = _DeleteAutomaticTokensForwardingR["default"];
      return this.apiClient.callApi('/blockchain-automations/{blockchain}/{network}/tokens-forwarding/automations/{referenceId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete Automatic Tokens Forwarding
     * Through this endpoint customers can delete a forwarding function they have set for **tokens** (**not** coins).    By setting a `fromAddress` and a `toAddress`, and specifying the amount, tokens can be transferred between addresses.     A `feePriority` will be returned which represents the fee priority of the automation whether it is \"SLOW\", \"STANDARD\" OR \"FAST\".    {warning}Currently we support fungible tokens (ERC-20) **only**, NFTs (ERC-721) are **not** supported.{/warning}    {warning}The subscription will work for all incoming transactions until it is deleted. There is no need to do that for every transaction.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} referenceId Represents a unique ID used to reference the specific callback subscription.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteAutomaticTokensForwardingR}
     */
  }, {
    key: "deleteAutomaticTokensForwarding",
    value: function deleteAutomaticTokensForwarding(blockchain, network, referenceId, opts) {
      return this.deleteAutomaticTokensForwardingWithHttpInfo(blockchain, network, referenceId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get Fee Address Details
     * Through this endpoint customers can obtain details about a fee address. Only one fee address per currency per network for a user's account can be set no matter how many tokens or subscriptions they have or want to automatically forward.    {warning}Currently we support fungible tokens (ERC-20) **only**, NFTs (ERC-721) are **not** supported.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetFeeAddressDetailsR} and HTTP response
     */
  }, {
    key: "getFeeAddressDetailsWithHttpInfo",
    value: function getFeeAddressDetailsWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getFeeAddressDetails");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getFeeAddressDetails");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetFeeAddressDetailsR["default"];
      return this.apiClient.callApi('/blockchain-automations/{blockchain}/{network}/tokens-forwarding/fee-addresses', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get Fee Address Details
     * Through this endpoint customers can obtain details about a fee address. Only one fee address per currency per network for a user's account can be set no matter how many tokens or subscriptions they have or want to automatically forward.    {warning}Currently we support fungible tokens (ERC-20) **only**, NFTs (ERC-721) are **not** supported.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetFeeAddressDetailsR}
     */
  }, {
    key: "getFeeAddressDetails",
    value: function getFeeAddressDetails(blockchain, network, opts) {
      return this.getFeeAddressDetailsWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Tokens Forwarding Automations
     * Through this endpoint customers can list all of their **tokens** forwarding automations (**not** coins).    Customers can set up automatic forwarding functions for tokens by setting a `fromAddress` and a `toAddress`, and specifying the amount that can be transferred between addresses.     A `feePriority` will be returned which represents the fee priority of the automation whether it is \"SLOW\", \"STANDARD\" OR \"FAST\".     {warning}Currently we support fungible tokens (ERC-20) **only**, NFTs (ERC-721) are **not** supported.{/warning}    {warning}The subscription will work for all transactions until it is deleted. There is no need to do that for every transaction.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListTokensForwardingAutomationsR} and HTTP response
     */
  }, {
    key: "listTokensForwardingAutomationsWithHttpInfo",
    value: function listTokensForwardingAutomationsWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listTokensForwardingAutomations");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listTokensForwardingAutomations");
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
      var returnType = _ListTokensForwardingAutomationsR["default"];
      return this.apiClient.callApi('/blockchain-automations/{blockchain}/{network}/tokens-forwarding/automations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Tokens Forwarding Automations
     * Through this endpoint customers can list all of their **tokens** forwarding automations (**not** coins).    Customers can set up automatic forwarding functions for tokens by setting a `fromAddress` and a `toAddress`, and specifying the amount that can be transferred between addresses.     A `feePriority` will be returned which represents the fee priority of the automation whether it is \"SLOW\", \"STANDARD\" OR \"FAST\".     {warning}Currently we support fungible tokens (ERC-20) **only**, NFTs (ERC-721) are **not** supported.{/warning}    {warning}The subscription will work for all transactions until it is deleted. There is no need to do that for every transaction.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListTokensForwardingAutomationsR}
     */
  }, {
    key: "listTokensForwardingAutomations",
    value: function listTokensForwardingAutomations(blockchain, network, opts) {
      return this.listTokensForwardingAutomationsWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return AutomaticTokensForwardingApi;
}();
exports["default"] = AutomaticTokensForwardingApi;