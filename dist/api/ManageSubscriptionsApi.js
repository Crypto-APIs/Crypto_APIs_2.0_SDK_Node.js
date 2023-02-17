"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ActivateBlockchainEventSubscription400Response = _interopRequireDefault(require("../model/ActivateBlockchainEventSubscription400Response"));
var _ActivateBlockchainEventSubscription401Response = _interopRequireDefault(require("../model/ActivateBlockchainEventSubscription401Response"));
var _ActivateBlockchainEventSubscription403Response = _interopRequireDefault(require("../model/ActivateBlockchainEventSubscription403Response"));
var _ActivateBlockchainEventSubscriptionR = _interopRequireDefault(require("../model/ActivateBlockchainEventSubscriptionR"));
var _ActivateBlockchainEventSubscriptionRB = _interopRequireDefault(require("../model/ActivateBlockchainEventSubscriptionRB"));
var _ConvertBitcoinCashAddress402Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress402Response"));
var _ConvertBitcoinCashAddress409Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress409Response"));
var _ConvertBitcoinCashAddress415Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress415Response"));
var _ConvertBitcoinCashAddress422Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress422Response"));
var _ConvertBitcoinCashAddress429Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress429Response"));
var _ConvertBitcoinCashAddress500Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress500Response"));
var _DeleteBlockchainEventSubscription400Response = _interopRequireDefault(require("../model/DeleteBlockchainEventSubscription400Response"));
var _DeleteBlockchainEventSubscription401Response = _interopRequireDefault(require("../model/DeleteBlockchainEventSubscription401Response"));
var _DeleteBlockchainEventSubscription403Response = _interopRequireDefault(require("../model/DeleteBlockchainEventSubscription403Response"));
var _DeleteBlockchainEventSubscriptionR = _interopRequireDefault(require("../model/DeleteBlockchainEventSubscriptionR"));
var _GetBlockchainEventSubscriptionDetailsByReferenceID400Response = _interopRequireDefault(require("../model/GetBlockchainEventSubscriptionDetailsByReferenceID400Response"));
var _GetBlockchainEventSubscriptionDetailsByReferenceID401Response = _interopRequireDefault(require("../model/GetBlockchainEventSubscriptionDetailsByReferenceID401Response"));
var _GetBlockchainEventSubscriptionDetailsByReferenceID403Response = _interopRequireDefault(require("../model/GetBlockchainEventSubscriptionDetailsByReferenceID403Response"));
var _GetBlockchainEventSubscriptionDetailsByReferenceIDR = _interopRequireDefault(require("../model/GetBlockchainEventSubscriptionDetailsByReferenceIDR"));
var _GetXRPRippleTransactionDetailsByTransactionID404Response = _interopRequireDefault(require("../model/GetXRPRippleTransactionDetailsByTransactionID404Response"));
var _ListBlockchainEventsSubscriptions400Response = _interopRequireDefault(require("../model/ListBlockchainEventsSubscriptions400Response"));
var _ListBlockchainEventsSubscriptions401Response = _interopRequireDefault(require("../model/ListBlockchainEventsSubscriptions401Response"));
var _ListBlockchainEventsSubscriptions403Response = _interopRequireDefault(require("../model/ListBlockchainEventsSubscriptions403Response"));
var _ListBlockchainEventsSubscriptionsR = _interopRequireDefault(require("../model/ListBlockchainEventsSubscriptionsR"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* ManageSubscriptions service.
* @module api/ManageSubscriptionsApi
* @version 1.13.0
*/
var ManageSubscriptionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ManageSubscriptionsApi. 
  * @alias module:api/ManageSubscriptionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ManageSubscriptionsApi(apiClient) {
    _classCallCheck(this, ManageSubscriptionsApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Activate Blockchain Event Subscription
   * Through this endpoint customers can reactivate an event subscription (callback) which has been deactivated by the system. Deactivations could happen due to various reasons, most often \"maximum retry attempts reached\".
   * @param {String} referenceId Represents a unique ID used to reference the specific callback subscription.
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @param {module:model/ActivateBlockchainEventSubscriptionRB} opts.activateBlockchainEventSubscriptionRB 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActivateBlockchainEventSubscriptionR} and HTTP response
   */
  _createClass(ManageSubscriptionsApi, [{
    key: "activateBlockchainEventSubscriptionWithHttpInfo",
    value: function activateBlockchainEventSubscriptionWithHttpInfo(referenceId, opts) {
      opts = opts || {};
      var postBody = opts['activateBlockchainEventSubscriptionRB'];
      // verify the required parameter 'referenceId' is set
      if (referenceId === undefined || referenceId === null) {
        throw new Error("Missing the required parameter 'referenceId' when calling activateBlockchainEventSubscription");
      }
      var pathParams = {
        'referenceId': referenceId
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ActivateBlockchainEventSubscriptionR["default"];
      return this.apiClient.callApi('/blockchain-events/subscriptions/{referenceId}/activate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Activate Blockchain Event Subscription
     * Through this endpoint customers can reactivate an event subscription (callback) which has been deactivated by the system. Deactivations could happen due to various reasons, most often \"maximum retry attempts reached\".
     * @param {String} referenceId Represents a unique ID used to reference the specific callback subscription.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/ActivateBlockchainEventSubscriptionRB} opts.activateBlockchainEventSubscriptionRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActivateBlockchainEventSubscriptionR}
     */
  }, {
    key: "activateBlockchainEventSubscription",
    value: function activateBlockchainEventSubscription(referenceId, opts) {
      return this.activateBlockchainEventSubscriptionWithHttpInfo(referenceId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete Blockchain Event Subscription
     * Through this endpoint the customer can delete blockchain event subscriptions they have by attributes `referenceId` and `network`.    Currently Crypto APIs 2.0 offers certain Blockchain event endpoints which allow the user to subscribe for one/a few/all and receive callback notifications when the specific event occurs.    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} referenceId Represents a unique ID used to reference the specific callback subscription.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteBlockchainEventSubscriptionR} and HTTP response
     */
  }, {
    key: "deleteBlockchainEventSubscriptionWithHttpInfo",
    value: function deleteBlockchainEventSubscriptionWithHttpInfo(blockchain, network, referenceId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling deleteBlockchainEventSubscription");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling deleteBlockchainEventSubscription");
      }
      // verify the required parameter 'referenceId' is set
      if (referenceId === undefined || referenceId === null) {
        throw new Error("Missing the required parameter 'referenceId' when calling deleteBlockchainEventSubscription");
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
      var returnType = _DeleteBlockchainEventSubscriptionR["default"];
      return this.apiClient.callApi('/blockchain-events/{blockchain}/{network}/subscriptions/{referenceId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete Blockchain Event Subscription
     * Through this endpoint the customer can delete blockchain event subscriptions they have by attributes `referenceId` and `network`.    Currently Crypto APIs 2.0 offers certain Blockchain event endpoints which allow the user to subscribe for one/a few/all and receive callback notifications when the specific event occurs.    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} referenceId Represents a unique ID used to reference the specific callback subscription.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteBlockchainEventSubscriptionR}
     */
  }, {
    key: "deleteBlockchainEventSubscription",
    value: function deleteBlockchainEventSubscription(blockchain, network, referenceId, opts) {
      return this.deleteBlockchainEventSubscriptionWithHttpInfo(blockchain, network, referenceId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get Blockchain Event Subscription Details By Reference ID
     * Through this endpoint the customer can get detailed information for a callback subscription by providing its reference ID.    Currently Crypto APIs 2.0 offers certain Blockchain event endpoints which allow the user to subscribe for one/a few/all and receive callback notifications when the specific event occurs.
     * @param {String} referenceId Represents a unique ID used to reference the specific callback subscription.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetBlockchainEventSubscriptionDetailsByReferenceIDR} and HTTP response
     */
  }, {
    key: "getBlockchainEventSubscriptionDetailsByReferenceIDWithHttpInfo",
    value: function getBlockchainEventSubscriptionDetailsByReferenceIDWithHttpInfo(referenceId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'referenceId' is set
      if (referenceId === undefined || referenceId === null) {
        throw new Error("Missing the required parameter 'referenceId' when calling getBlockchainEventSubscriptionDetailsByReferenceID");
      }
      var pathParams = {
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
      var returnType = _GetBlockchainEventSubscriptionDetailsByReferenceIDR["default"];
      return this.apiClient.callApi('/blockchain-events/subscriptions/{referenceId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get Blockchain Event Subscription Details By Reference ID
     * Through this endpoint the customer can get detailed information for a callback subscription by providing its reference ID.    Currently Crypto APIs 2.0 offers certain Blockchain event endpoints which allow the user to subscribe for one/a few/all and receive callback notifications when the specific event occurs.
     * @param {String} referenceId Represents a unique ID used to reference the specific callback subscription.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetBlockchainEventSubscriptionDetailsByReferenceIDR}
     */
  }, {
    key: "getBlockchainEventSubscriptionDetailsByReferenceID",
    value: function getBlockchainEventSubscriptionDetailsByReferenceID(referenceId, opts) {
      return this.getBlockchainEventSubscriptionDetailsByReferenceIDWithHttpInfo(referenceId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Blockchain Events Subscriptions
     * Through this endpoint the customer can obtain a list of their callback subscriptions for the available Blockchain events.    Currently Crypto APIs 2.0 offers certain Blockchain event endpoints which allow the user to subscribe for one/a few/all and receive callback notifications when the specific event occurs.    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListBlockchainEventsSubscriptionsR} and HTTP response
     */
  }, {
    key: "listBlockchainEventsSubscriptionsWithHttpInfo",
    value: function listBlockchainEventsSubscriptionsWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listBlockchainEventsSubscriptions");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listBlockchainEventsSubscriptions");
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
      var returnType = _ListBlockchainEventsSubscriptionsR["default"];
      return this.apiClient.callApi('/blockchain-events/{blockchain}/{network}/subscriptions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Blockchain Events Subscriptions
     * Through this endpoint the customer can obtain a list of their callback subscriptions for the available Blockchain events.    Currently Crypto APIs 2.0 offers certain Blockchain event endpoints which allow the user to subscribe for one/a few/all and receive callback notifications when the specific event occurs.    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListBlockchainEventsSubscriptionsR}
     */
  }, {
    key: "listBlockchainEventsSubscriptions",
    value: function listBlockchainEventsSubscriptions(blockchain, network, opts) {
      return this.listBlockchainEventsSubscriptionsWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return ManageSubscriptionsApi;
}();
exports["default"] = ManageSubscriptionsApi;